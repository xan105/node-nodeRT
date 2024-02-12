/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.mediaproperties
  name: "windows.media.mediaproperties",
  externalReference: [
    "Windows.Storage",
    "Windows.Storage.Streams",
    "Windows.Media.Core",
  ]
};

export const {
  AudioEncodingQuality,
  MediaMirroringOptions,
  MediaPixelFormat,
  MediaRotation,
  MediaThumbnailFormat,
  SphericalVideoFrameFormat,
  StereoscopicVideoPackingMode,
  VideoEncodingQuality,
  AudioEncodingProperties,
  ContainerEncodingProperties,
  H264ProfileIds,
  IMediaEncodingProperties,
  ImageEncodingProperties,
  MediaEncodingProfile,
  MediaEncodingSubtypes,
  MediaPropertySet,
  MediaRatio,
  Mpeg2ProfileIds,
  TimedMetadataEncodingProperties,
  VideoEncodingProperties,
} = load(namespace.name);

reference(namespace.externalReference);
