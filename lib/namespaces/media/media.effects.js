/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.effects
  name: "windows.media.effects",
  externalReference: [
    "Windows.Media",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Media.Editing",
    "Windows.Storage.Streams",
    "Windows.Media.Render",
    "Windows.Media.Capture",
    "Windows.Media.MediaProperties",
    "Windows.Media.Playback",
    "Windows.Media.Transcoding",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);
