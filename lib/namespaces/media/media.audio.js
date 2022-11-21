/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.audio
  name: "windows.media.audio",
  externalReference: [
    "Windows.Media",
    "Windows.Media.Render",
    "Windows.Media.Devices",
    "Windows.Media.Capture",
    "Windows.Media.MediaProperties",
    "Windows.Devices.Enumeration",
    "Windows.Storage",
    "Windows.Media.Core",
    "Windows.Media.Effects",
    "Windows.Media.Transcoding",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);
