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

shouldWindows();

function load(namespace, flag = "RTLD_LAZY"){
  
  shouldStringNotEmpty(namespace);
  shouldStringNotEmpty(flag);
  
  const abi = process.versions.modules;
  
  const bindings = join(
    dirname(import.meta.url), 
    "../../prebuilds", 
    "abi" + abi, 
    namespace.toLowerCase() + ".node"
  ).replace("app.asar", "app.asar.unpacked"); //electron asar friendly
  
  const module = { exports: {} };
  const [, err] = attempt(dlopen, [module, bindings, constants.dlopen[flag]]);
  if(err) console.error(err); //delete me
  if(err) console.warn("\x1b[33m" + `Warning [@xan105/nodert]: ["${bindings}"] could not be found !` + "\x1b[0m");
  console.log("loaded: " + namespace); //delete me
  return module.exports;
}

function reference(externalNamespaces){

  shouldArrayOfStringNotEmpty(externalNamespaces);

  let registry = global.__winRtNamespaces__;

  if (!registry) {
    registry = {};

    Object.defineProperty(global, '__winRtNamespaces__', {
      configurable: true,
      writable: false,
      enumerable: false,
      value: registry
    });
  }

  const require = function(namespace){
    shouldStringNotEmpty(namespace);
    
    const module = load(namespace);
    delete registry[namespace];
    registry[namespace] = module;
    return module;
  };

  for (const namespace of externalNamespaces) {
    if (namespace.toLowerCase().startsWith("windows.") && !registry.hasOwnProperty(namespace)) {
      Object.defineProperty(registry, namespace, {
        configurable: true,
        enumerable: true,
        get: require.bind(null, namespace)
      });
    }
  }

}

export { load, reference };