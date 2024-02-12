#!/usr/bin/env node

/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

import { arch } from "node:process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { dirname } from "@xan105/fs/path";
import { readJSON } from "@xan105/fs";
import { Failure, attempt } from "@xan105/error";
import { isStringNotEmpty } from "@xan105/is";
import { shouldArrayOfStringNotEmpty } from "@xan105/is/assert";
import { getJSON, download } from "@xan105/request/h1";
import Archive from "adm-zip";
import nodeAbi from "node-abi";

async function read(){
  const file = join(process.env.npm_config_local_prefix || process.cwd(), "package.json");
  const [ json = {} ] = await attempt(readJSON, [file]);
  return json;
}

async function isElectron(){
  if (process.env.npm_config_electron === "true" || 
      process.env.npm_config_runtime === "electron") {
    return true;
  } else {
    const json = await read();
    return json._nodert?.runtime === "electron";
  }
}

async function findABI(runtime){

  if (runtime !== "electron") return process.versions.modules;

  try{
     
    const { version } = await readJSON(join(
      process.env.npm_config_local_prefix || process.cwd(),
      "node_modules",
      "electron",
      "package.json"
    ));

    try{
      const abi = nodeAbi.getAbi(version, "electron");
      return abi;
    }catch{
      const major = version.split(".")[0];
      const url = "https://releases.electronjs.org/releases.json";
      const releases = await getJSON(url, {
        timeout: 7500,
        maxRetry: 1
      });
      const abi = releases.find(release => release.version === `${major}.0.0`).modules
      return abi;
    }
 
  }catch(err){
    throw new Failure("Failed to determine electron ABI", { code: 0, cause: err });
  }
}

async function downloadFile(runtime, abi){

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
  
  const { file } = await download(
    url + filename, 
    join(tmpdir(), `${Date.now()}`), 
    {
      hash: { algo: "sha256", sum: sha256[runtime]["abi" + abi] }
    }
  );
                     
  return file;
}

async function getModuleList(){  
  if (isStringNotEmpty(process.env.npm_config_modules)){
    return process.env.npm_config_modules.split(",");
  } else {
    const json = await read();
    return json._nodert?.modules ?? [];
  }
}  

async function unpack(filePath, runtime, abi){
  
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

async function install(){
  const runtime = await isElectron() ? "electron" : "node";
  const abi = await findABI(runtime);
  const file = await downloadFile(runtime, abi);
  await unpack(file.fullPath, runtime, abi);
}

install()
.then(()=>{
  process.exit(0);
}).catch((err)=>{
  console.error(err);
  process.exit(1);
});