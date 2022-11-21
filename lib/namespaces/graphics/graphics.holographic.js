/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.holographic
  name: "windows.graphics.holographic",
  externalReference: [
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.UI.Core",
    "Windows.Foundation",
    "Windows.Perception.Spatial",
    "Windows.Perception",
    "Windows.Graphics.DirectX",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);
