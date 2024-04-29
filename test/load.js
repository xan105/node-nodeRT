import { equal } from "node:assert/strict";
import { load } from "../lib/util/load.js";

const a = load("windows.storage.streams");
const b = load("windows.storage.streams"); //dlopen() would crash

equal(a, b);
equal(Object.keys(a).length > 0, true);
console.log("Done");