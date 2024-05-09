/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//Copy the original .d.ts into corresponding file (dir/file struct created with script: npm run declare)

import { ls, writeFile, readFile } from "@xan105/fs";
import { join } from "node:path";
import { EOL } from "node:os";

const scopes = await ls("../node_modules", { pattern: /^@nodert-.*$/ })
for (const scope of scopes)
{
  const namespaces = await ls(join("../node_modules", scope));
  for (const namespace of namespaces)
  {
    const name = namespace.replace("windows.","");
    
    const root = namespace.replace("windows.","").split(".")[0];
    
  
   const types = await readFile(join("../node_modules", scope, namespace, "lib", `NodeRT_Windows_${name.replaceAll('.','_')}.d.ts`), "utf8");
   const exports = await readFile(join("../types/namespaces", root, name + ".d.ts"), "utf8");
   
   const sep = types.includes("\r\n") ? "\r\n" : "\n";
   const x = types.split(sep).filter(line => !line.includes("declare module"));
   const y = x.lastIndexOf("}");
   const z = x.slice(0, y).join(sep);
   
   const newFile = z + EOL + exports.split(EOL).filter(line => line.includes("export * as")).join(EOL);
   
   await writeFile(join("../types/namespaces", root, name + ".d.ts"), newFile, "utf8"); 
  }
}
