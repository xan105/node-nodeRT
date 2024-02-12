/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.composition
  name: "windows.ui.composition",
  externalReference: [
    "Windows.UI.Core",
    "Windows.System",
    "Windows.Graphics.DirectX",
    "Windows.Graphics",
    "Windows.UI",
    "Windows.Foundation",
    "Windows.Graphics.Effects",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.composition.core.js";
export * as desktop from "./ui.composition.desktop.js";
export * as diagnostics from "./ui.composition.diagnostics.js";
export * as effects from "./ui.composition.effects.js";
export * as interactions from "./ui.composition.interactions.js";
export * as scenes from "./ui.composition.scenes.js";