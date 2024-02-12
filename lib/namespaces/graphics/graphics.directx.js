/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.directx
  name: "windows.graphics.directx",
  externalReference: [
  ]
};

export const {
  DirectXAlphaMode,
  DirectXColorSpace,
  DirectXPixelFormat,
  DirectXPrimitiveTopology,
} = load(namespace.name);

reference(namespace.externalReference);

export * as direct3d11 from "./graphics.directx.direct3d11.js";