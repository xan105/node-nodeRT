/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.services.maps.guidance
  name: "windows.services.maps.guidance",
  externalReference: [
    "Windows.Devices.Geolocation",
    "Windows.Services.Maps",
  ]
};

export const {
  GuidanceManeuverKind,
  GuidanceMode,
  GuidanceAudioMeasurementSystem,
  GuidanceAudioNotifications,
  GuidanceAudioNotificationKind,
  GuidanceLaneMarkers,
  GuidanceRoadSignpost,
  GuidanceManeuver,
  GuidanceRoute,
  GuidanceMapMatchedCoordinate,
  GuidanceLaneInfo,
  GuidanceUpdatedEventArgs,
  GuidanceReroutedEventArgs,
  GuidanceAudioNotificationRequestedEventArgs,
  GuidanceNavigator,
  GuidanceRoadSegment,
  GuidanceTelemetryCollector,
} = load(namespace.name);

reference(namespace.externalReference);
