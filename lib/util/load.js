/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

import { dlopen } from "node:process";
import { constants } from "node:os";
import { join } from "node:path";
import { dirname } from "@xan105/fs/path";
import { Failure, attempt } from "@xan105/error";
import { 
  shouldStringNotEmpty, 
  shouldArrayOfStringNotEmpty, 
  shouldWindows 
} from "@xan105/is/assert";
import { isNode } from "@xan105/is";

shouldWindows();

//Modified from https://github.com/xan105/node-gyp-load (MIT License)
function load(namespace, flag = "RTLD_LAZY"){
  
  shouldStringNotEmpty(namespace);
  shouldStringNotEmpty(flag);
  
  const abi = process.versions.modules;
  const runtime = isNode === false ? "electron" : "node";
  
  const bindings = join(
    dirname(import.meta.url), 
    "../../prebuilds",
    runtime,
    "abi" + abi, 
    namespace.toLowerCase() + ".node"
  ).replace("app.asar", "app.asar.unpacked"); //electron asar friendly
  
  const module = { exports: {} };
  const [, err] = attempt(dlopen, [module, bindings, constants.dlopen[flag]]);
  if(err){
    if (err.message.includes("The specified module could not be found")) {
      console.warn("\x1b[33m" + `Warning [@xan105/nodert]: ["${bindings}"] could not be found !` + "\x1b[0m");
    } else {
      throw new Failure(err.message, { 
        code: err.code, 
        info: { namespace, runtime, abi }
      });
    }
  }
  return module.exports;
}

//Modified from https://github.com/NodeRT/NodeRT (Apache-2.0 license)
//I haven't poke as to why and if it is really needed; This is what the main.js file of a @nodert package does
function reference(externalNamespaces){

  shouldArrayOfStringNotEmpty(externalNamespaces);

  let registry = globalThis.__winRtNamespaces__;

  if (!registry) {
    registry = {};

    Object.defineProperty(globalThis, '__winRtNamespaces__', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: registry
    });
  }

  const require = function(namespace){
    const module = load(namespace);
    delete registry[namespace];
    registry[namespace] = module;
    return module;
  };

  for (const namespace of externalNamespaces) {
    if (!Object.hasOwn(registry, namespace)) {   
      Object.defineProperty(registry, namespace, {
        configurable: true,
        enumerable: true,
        get: require.bind(null, namespace)
      });
    }
  }

}

export { load, reference };