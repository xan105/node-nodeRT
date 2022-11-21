/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.streaming.adaptive
  name: "windows.media.streaming.adaptive",
  externalReference: [
    "Windows.Foundation",
    "Windows.Web.Http",
    "Windows.Storage.Streams",
  ]
};

export const {
  AdaptiveMediaSourceCreationStatus,
  AdaptiveMediaSourceDownloadBitrateChangedReason,
  AdaptiveMediaSourceResourceType,
  AdaptiveMediaSourceDiagnosticType,
  AdaptiveMediaSource,
  AdaptiveMediaSourceCreationResult,
  AdaptiveMediaSourceDownloadBitrateChangedEventArgs,
  AdaptiveMediaSourcePlaybackBitrateChangedEventArgs,
  AdaptiveMediaSourceDownloadRequestedEventArgs,
  AdaptiveMediaSourceDownloadCompletedEventArgs,
  AdaptiveMediaSourceDownloadFailedEventArgs,
  AdaptiveMediaSourceAdvancedSettings,
  AdaptiveMediaSourceDiagnostics,
  AdaptiveMediaSourceCorrelatedTimes,
  AdaptiveMediaSourceDownloadResult,
  AdaptiveMediaSourceDownloadRequestedDeferral,
  AdaptiveMediaSourceDownloadStatistics,
  AdaptiveMediaSourceDiagnosticAvailableEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
