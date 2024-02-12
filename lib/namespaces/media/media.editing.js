/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.editing
  name: "windows.media.editing",
  externalReference: [
    "Windows.Media.Effects",
    "Windows.Storage",
    "Windows.Media.MediaProperties",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Foundation",
    "Windows.Graphics.Imaging",
    "Windows.Media.Transcoding",
    "Windows.Media.Core",
  ]
};

export const {
  MediaTrimmingPreference,
  VideoFramePrecision,
  BackgroundAudioTrack,
  EmbeddedAudioTrack,
  MediaClip,
  MediaComposition,
  MediaOverlay,
  MediaOverlayLayer,
} = load(namespace.name);

reference(namespace.externalReference);
