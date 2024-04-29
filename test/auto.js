import test from "node:test";
import assert from "node:assert/strict";
import { join, parse } from "node:path";
import { $ } from "@xan105/shell";
import { ls, mv, rm } from "@xan105/fs";
import { isWindows } from "@xan105/is";

await mv(join(import.meta.dirname, "../prebuilds"), join(import.meta.dirname, "../prebuilds_backup"));

const versions = await ls(join(import.meta.dirname, "bin"), { 
  pattern: /^node.*$/, 
  ext: ["exe"],
  absolute: true
});

test("Check install script and bindings loader", {
    skip: isWindows() ? false : "This test runs on Windows"
  }, async() => {
    for (const bin of versions)
    {
      const version = parse(bin).name;
      await test(version, async() => {
        await $(bin + " ../install.js", { cwd: import.meta.dirname });
        await $(bin + " load.js", { cwd: import.meta.dirname });
      });
    }
});

await rm(join(import.meta.dirname, "../prebuilds"));
await mv(join(import.meta.dirname, "../prebuilds_backup"), join(import.meta.dirname, "../prebuilds"));