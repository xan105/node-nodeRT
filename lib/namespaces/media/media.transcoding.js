/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.transcoding
  name: "windows.media.transcoding",
  externalReference: [
    "Windows.Storage",
    "Windows.Media.MediaProperties",
    "Windows.Storage.Streams",
    "Windows.Media.Core",
  ]
};

export const {
  MediaVideoProcessingAlgorithm,
  TranscodeFailureReason,
  MediaTranscoder,
  PrepareTranscodeResult,
} = load(namespace.name);

reference(namespace.externalReference);
