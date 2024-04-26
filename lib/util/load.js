/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

import { join } from "node:path";
import { createRequire } from "node:module";
import { arch, versions } from "node:process";
import { dirname } from "@xan105/fs/path";
import { Failure, attempt } from "@xan105/error";
import { 
  shouldStringNotEmpty, 
  shouldArrayOfStringNotEmpty, 
  shouldWindows
} from "@xan105/is/assert";
import { isNode } from "@xan105/is";

shouldWindows();

function load(namespace){
  
  shouldStringNotEmpty(namespace);
  
  const abi = versions.modules;
  const runtime = isNode() === false ? "electron" : "node";
    
  const bindings = join(
    import.meta.dirname ?? dirname(import.meta.url), 
    "../../prebuilds",
    runtime,
    "abi" + abi,
    arch, 
    namespace.toLowerCase() + ".node"
  ).replace("app.asar", "app.asar.unpacked"); //electron asar friendly
  
  const require = createRequire(import.meta.url);
  const [ module = {}, err ] = attempt(require, [bindings]);

  if (err && err.code !== "MODULE_NOT_FOUND") {
    throw new Failure(err.message, { 
      code: err.code, 
      info: { namespace, runtime, abi, arch }
    });
  }

  return module;
}

//Modified from https://github.com/NodeRT/NodeRT (Apache-2.0 license)
//I haven't poke as to why and if it is really needed; This is what the main.js file of a @nodert package does
function reference(externalNamespaces){

  shouldArrayOfStringNotEmpty(externalNamespaces);
  
  const name = "__winRtNamespaces__";
  let registry = globalThis[name];

  if (!registry) {
    registry = {};

    Object.defineProperty(globalThis, name, {
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