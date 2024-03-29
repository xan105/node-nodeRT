/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.directx.direct3d11
  name: "windows.graphics.directx.direct3d11",
  externalReference: [
  ]
};

export const {
  Direct3DBindings,
  Direct3DUsage,
  IDirect3DDevice,
  IDirect3DSurface,
} = load(namespace.name);

reference(namespace.externalReference);
