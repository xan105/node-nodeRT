/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.control
  name: "windows.media.control",
  externalReference: [
    "Windows.Media",
    "Windows.Storage.Streams",
  ]
};

export const {
  GlobalSystemMediaTransportControlsSessionPlaybackStatus,
  CurrentSessionChangedEventArgs,
  GlobalSystemMediaTransportControlsSession,
  GlobalSystemMediaTransportControlsSessionManager,
  GlobalSystemMediaTransportControlsSessionMediaProperties,
  GlobalSystemMediaTransportControlsSessionPlaybackControls,
  GlobalSystemMediaTransportControlsSessionPlaybackInfo,
  GlobalSystemMediaTransportControlsSessionTimelineProperties,
  MediaPropertiesChangedEventArgs,
  PlaybackInfoChangedEventArgs,
  SessionsChangedEventArgs,
  TimelinePropertiesChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
