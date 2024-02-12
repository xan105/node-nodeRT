/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.input.inking
  name: "windows.ui.input.inking",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.UI.Input",
    "Windows.UI.Core",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);

export * as analysis from "./ui.input.inking.analysis.js";
export * as core from "./ui.input.inking.core.js";