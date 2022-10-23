import { inspect } from "node:util";
import * as WinRT from "../lib/index.js";

console.log( inspect(WinRT, {deep: null}) );
console.log("\r\n");
console.log( inspect(globalThis.__winRtNamespaces__, {deep: null}) );