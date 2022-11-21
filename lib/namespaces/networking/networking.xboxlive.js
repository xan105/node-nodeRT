/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.networking.xboxlive
  name: "windows.networking.xboxlive",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Networking",
    "Windows.Foundation",
  ]
};

export const {
  XboxLiveNetworkAccessKind,
  XboxLiveSocketKind,
  XboxLiveEndpointPairCreationBehaviors,
  XboxLiveEndpointPairCreationStatus,
  XboxLiveEndpointPairState,
  XboxLiveQualityOfServiceMetric,
  XboxLiveQualityOfServiceMeasurementStatus,
  XboxLiveDeviceAddress,
  XboxLiveEndpointPair,
  XboxLiveEndpointPairTemplate,
  XboxLiveInboundEndpointPairCreatedEventArgs,
  XboxLiveEndpointPairCreationResult,
  XboxLiveEndpointPairStateChangedEventArgs,
  XboxLiveQualityOfServiceMetricResult,
  XboxLiveQualityOfServicePrivatePayloadResult,
  XboxLiveQualityOfServiceMeasurement,
} = load(namespace.name);

reference(namespace.externalReference);
