import { tmpdir } from "node:os";
import { join } from "node:path";
import { dirname } from "@xan105/fs/path";
import { readJSON } from "@xan105/fs";
import { Failure } from "@xan105/error";
import request from "@xan105/request";
import Archive from "adm-zip";

const runtime = isElectron ? "electron" : "node";
const abi = await getABI(runtime);

async function getABI(runtime){

  if (runtime === "electron") {
  
    const electronABI = {
      "20": "107",
      "21": "109"
    };

    try{
    
      const file = join(
        process.env.npm_config_prefix,
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

// From https://github.com/prebuild/node-gyp-build (MIT License)
function hasFlag(flag) {
  if (!process.env.npm_config_argv) return false
  try {
    const { original } = JSON.parse(process.env.npm_config_argv);
    return original.indexOf(flag) !== -1;
  } catch {
    return false
  }
}
//end of prebuild/node-gyp-build

function isElectron(){
  return hasFlag('--electron') || process.env.npm_config_runtime === "electron"
}

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

  const url = `https://github.com/xan105/node-nodert/releases/${release}/download/`;
  const filename = `${runtime}.abi${abi}.${arch}.zip`;
  
  const { path } = await request.download(
    url + filename, 
    join(tmpdir(), `${Date.now()}`), 
    {
      hash: { algo: "sha256", sum: sha256[runtime]["abi" + abi] }
    }
  );
                     
  return path;
}

function unpack(filePath){
  const overwrite = true; 
  const zip = new Archive(filePath);
  const destination = join(
    dirname(import.meta.url),
    "prebuilds", 
    runtime, 
    "abi" + abi
  );
  zip.extractAllTo(destination, overwrite);
}

download().then(unpack(filePath));