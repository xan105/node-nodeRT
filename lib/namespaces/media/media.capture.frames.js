/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.capture.frames
  name: "windows.media.capture.frames",
  externalReference: [
    "Windows.Perception.Spatial",
    "Windows.Devices.Enumeration",
    "Windows.Media.Capture",
    "Windows.Foundation",
    "Windows.Media.Devices.Core",
    "Windows.Media.Devices",
    "Windows.Media.MediaProperties",
    "Windows.Storage.Streams",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Graphics.Imaging",
    "Windows.Media",
  ]
};

export const {
  MediaFrameReaderStartStatus,
  MediaFrameSourceSetPropertyStatus,
  MediaFrameSourceGetPropertyStatus,
  MediaFrameSourceKind,
  MultiSourceMediaFrameReaderStartStatus,
  MediaFrameReaderAcquisitionMode,
  MediaFrameSourceInfo,
  MediaFrameSourceGroup,
  MediaFrameSource,
  MediaFrameReader,
  MultiSourceMediaFrameReader,
  MediaFrameSourceController,
  MediaFrameFormat,
  MediaFrameArrivedEventArgs,
  MediaFrameReference,
  MultiSourceMediaFrameArrivedEventArgs,
  MultiSourceMediaFrameReference,
  MediaFrameSourceGetPropertyResult,
  VideoMediaFrameFormat,
  DepthMediaFrameFormat,
  BufferMediaFrame,
  VideoMediaFrame,
  AudioMediaFrame,
  InfraredMediaFrame,
  DepthMediaFrame,
} = load(namespace.name);

reference(namespace.externalReference);
