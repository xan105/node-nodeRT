/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.apprecording
  name: "windows.media.apprecording",
  externalReference: [
    "Windows.Storage",
  ]
};

export const {
  AppRecordingSaveScreenshotOption,
  AppRecordingManager,
  AppRecordingResult,
  AppRecordingSaveScreenshotResult,
  AppRecordingSavedScreenshotInfo,
  AppRecordingStatus,
  AppRecordingStatusDetails,
} = load(namespace.name);

reference(namespace.externalReference);
