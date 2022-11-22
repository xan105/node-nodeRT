/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//Generate the esm js exports files in ./lib/namespace

import { ls, writeFile, exists, readFile, writeJSON } from "@xan105/fs";
import { join } from "node:path";
import { EOL } from "node:os";
import { load } from "./lib/util/load.js";

const header = `/*` + EOL +
`Copyright (c) Anthony Beaumont` + EOL +
`This source code is licensed under the Apache 2.0 License` + EOL +
`found in the LICENSE file in the root directory of this source tree.` + EOL +
`*/` + EOL + EOL + "//⚠️ This file was auto generated" + EOL + EOL;

const dependencies = `import { load, reference } from "../../util/load.js";` + EOL + EOL;

const scopes = await ls("./node_modules", { pattern: /^@nodert-.*$/ })
for (const scope of scopes)
{
  const namespaces = await ls(join("./node_modules", scope));
  for (const namespace of namespaces)
  {
    
    const names = namespace.replace("windows.","").split(".");
    const folder = names[0];

    let file = header + dependencies;
    
    file += `const namespace = {` + EOL +
      `  //📖 https://learn.microsoft.com/en-us/uwp/api/${namespace}` + EOL +
      `  name: "${namespace}",` + EOL +
      `  externalReference: [` + EOL;
      
    const refs = await getExternalRef(scope, namespace);
    for (const ref of refs){
      file += `    "${ref}",` + EOL;
    }  

     file += `  ]` + EOL +
     `};` + EOL + EOL +
     `export const {` + EOL;
    
    const module = load(namespace);
    for (const prop in module)
     if (Object.hasOwn(module, prop)){
      file += `  ${prop},` + EOL;
    }
    
    file += `} = load(namespace.name);` + EOL + EOL +
    `reference(namespace.externalReference);` + EOL;
    
    await writeFile(
      join("./lib/namespaces", folder, names.join(".") + ".js"), 
      file, 
      "utf8"
    );
    
    for ( let i = names.length - 1; i >= 0; i--) {
      const self = i === 0 ? names[0] : names[i];
      const parent = i === 0 ? names[0] : names.slice(0, i).join(".");
      const parentPath = join("./lib/namespaces", folder, parent + ".js");

      if (await exists(parentPath) ){
        
        if (self === parent) continue;
        
        let parentFile = await readFile(parentPath, "utf8");
        const newLine = `export * as ${self} from "./${parent + '.' + self + '.js'}";`;
        if (parentFile.includes(newLine)) continue;
        parentFile += EOL + newLine;
        await writeFile(parentPath, parentFile, "utf8");
      } else {
        await writeFile(parentPath, 
        header + `export * as ${self} from "./${parent + '.' + self + '.js'}";`,
        "utf8");
      }
    }

  }
}

async function getExternalRef(scope, namespace){
  
  const filePath = join(
    "./node_modules",
    scope,
    namespace,
    "lib",
    "main.js"
  );
  
  const file = await readFile(filePath, "utf8");
  const sep = file.includes("\r\n") ? "\r\n" : "\n";
  const lines = file.split(sep);
  
  const str = lines.find( line => line.includes("var externalReferencedNamespaces = [") );
  
  const ref = str
    .replace("var externalReferencedNamespaces = [", "")
    .replace("];", "")
    .replaceAll("'","")
    .split(",")
    .map(s => s.trim())
    .filter( s => s.toLowerCase().startsWith("windows."))
  
  return ref;
}

//Package.json Export map
let map = {
  ".": {
    "types": "./types/index.d.ts",
    "default": "./lib/index.js"
  }
};

const list = await ls("./lib/namespaces", { recursive: true, ignore: { dir : true }, ext: "js" });

for (const exportName of list) {

  const [ root, name ] = exportName.split("\\");

  const _export = name.replace(".js", "").replaceAll(".","/");
  map["./" + _export] = {
    types: `./types/namespace/${root}/${name.replace(".js",".d.ts")}`,
    "default": `./lib/namespace/${root}/${name}`
  };

}

await writeJSON(
  "./out/exports.json",
  map, 
  true
);
