/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.playback
  name: "windows.media.playback",
  externalReference: [
    "Windows.Media",
    "Windows.Storage.Streams",
    "Windows.Media.Core",
    "Windows.Foundation",
    "Windows.Media.MediaProperties",
    "Windows.Devices.Enumeration",
    "Windows.Media.Audio",
    "Windows.Media.Protection",
    "Windows.Media.Casting",
    "Windows.UI.Composition",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Storage",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);
