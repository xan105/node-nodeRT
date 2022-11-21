/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics
  name: "windows.graphics",
  externalReference: [
  ]
};

export const {
  IGeometrySource2D,
} = load(namespace.name);

reference(namespace.externalReference);

export * as capture from "./graphics.capture.js";
export * as directx from "./graphics.directx.js";
export * as display from "./graphics.display.js";
export * as effects from "./graphics.effects.js";
export * as holographic from "./graphics.holographic.js";
export * as imaging from "./graphics.imaging.js";
export * as printing from "./graphics.printing.js";
export * as printing3d from "./graphics.printing3d.js";