/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

import { tmpdir } from "node:os";
import { join } from "node:path";
import { dirname } from "@xan105/fs/path";
import { readJSON } from "@xan105/fs";
import { Failure, attempt } from "@xan105/error";
import { isStringNotEmpty } from "@xan105/is";
import { shouldArrayOfStringNotEmpty } from "@xan105/is/assert";
import request from "@xan105/request";
import Archive from "adm-zip";

function isElectron(){
  return process.env.npm_config_electron === "true" || process.env.npm_config_runtime === "electron"
}

async function getABI(runtime){

  if (runtime === "electron") {
  
    const electronABI = {
      "20": "107",
      "21": "109"
    };

    try{
    
      const file = join(
        process.env.npm_config_local_prefix || process.cwd(),
        "node_modules",
        "electron",
        "package.json"
      );
    
      const { version } = await readJSON(file);
      const major = version.split["."][0];
      
      if (electronABI[major] === undefined) throw `ABI of electron@${major}.x is unknown`;
      
      return electronABI[major];
      
    }catch(err){
      throw new Failure("Failed to determine electron ABI", { code: 0, cause: err });
    }

  } else {
    return process.versions.modules;
  }
}

const runtime = isElectron() ? "electron" : "node";
const abi = await getABI(runtime);

async function download(){

  const { arch } = process;

  if(arch !== "x64"){
    throw new Failure("Unsupported arch", { 
      code: 3,
      info: "Only x64 is provided"
    });
  }
  
  const { release, sha256 } = await readJSON(join(
    dirname(import.meta.url), 
    "integrity.json"
  ));

  const url = `https://github.com/xan105/node-nodert/releases/download/${release}/`;
  const filename = `${runtime}.abi${abi}.${arch}.zip`;
  
  console.log(`Downloading NodeRT prebuild for ${runtime} ${arch} abi${abi}...`);
  
  const { path } = await request.download(
    url + filename, 
    join(tmpdir(), `${Date.now()}`), 
    {
      hash: { algo: "sha256", sum: sha256[runtime]["abi" + abi] }
    }
  );
                     
  return path;
}

async function getModuleList(){  
  if (isStringNotEmpty(process.env.npm_config_modules)){
    return process.env.npm_config_modules.split(",");
  } else {
    const file = process.env.npm_package_json || join(
      process.env.npm_config_local_prefix || process.cwd(),
      "package.json"
    );
    const [ json = {} ] = await attempt(readJSON, [file]);
    return json._nodert?.modules ?? [];
  }
}  

async function unpack(filePath){
  
  const overwrite = true; 
  const zip = new Archive(filePath);
  const destination = join(
    dirname(import.meta.url),
    "prebuilds", 
    runtime, 
    "abi" + abi
  );
  
  const modules = await getModuleList();
  shouldArrayOfStringNotEmpty(modules);
  
  if (modules.length > 0) {
    for (const module of modules){
      const [, err ] = attempt(zip.extractEntryTo.bind(zip), [module.trim() + ".node", destination, true, overwrite]);
      if (err) console.warn(err);
    }
  } else {
    zip.extractAllTo(destination, overwrite);
  }
}

download()
.then((filePath) => { return unpack(filePath) })
.catch((err) => { console.error(err) });