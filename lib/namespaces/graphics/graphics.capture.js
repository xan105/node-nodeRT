/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.capture
  name: "windows.graphics.capture",
  externalReference: [
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.System",
    "Windows.Graphics.DirectX",
    "Windows.Security.Authorization.AppCapabilityAccess",
    "Windows.UI.Composition",
  ]
};

export const {
  GraphicsCaptureAccessKind,
  Direct3D11CaptureFrame,
  Direct3D11CaptureFramePool,
  GraphicsCaptureAccess,
  GraphicsCaptureItem,
  GraphicsCapturePicker,
  GraphicsCaptureSession,
} = load(namespace.name);

reference(namespace.externalReference);
