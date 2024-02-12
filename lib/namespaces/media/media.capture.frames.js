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
    "Windows.Media.MediaProperties",
    "Windows.Media",
    "Windows.Storage.Streams",
    "Windows.Media.Devices.Core",
    "Windows.Perception.Spatial",
    "Windows.Foundation",
    "Windows.Media.Devices",
    "Windows.Devices.Enumeration",
    "Windows.Media.Capture",
    "Windows.UI.WindowManagement",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Graphics.Imaging",
  ]
};

export const {
  MediaFrameReaderAcquisitionMode,
  MediaFrameReaderStartStatus,
  MediaFrameSourceGetPropertyStatus,
  MediaFrameSourceKind,
  MediaFrameSourceSetPropertyStatus,
  MultiSourceMediaFrameReaderStartStatus,
  AudioMediaFrame,
  BufferMediaFrame,
  DepthMediaFrame,
  DepthMediaFrameFormat,
  InfraredMediaFrame,
  MediaFrameArrivedEventArgs,
  MediaFrameFormat,
  MediaFrameReader,
  MediaFrameReference,
  MediaFrameSource,
  MediaFrameSourceController,
  MediaFrameSourceGetPropertyResult,
  MediaFrameSourceGroup,
  MediaFrameSourceInfo,
  MultiSourceMediaFrameArrivedEventArgs,
  MultiSourceMediaFrameReader,
  MultiSourceMediaFrameReference,
  VideoMediaFrame,
  VideoMediaFrameFormat,
} = load(namespace.name);

reference(namespace.externalReference);
