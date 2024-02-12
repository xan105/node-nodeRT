/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.wifidirect.services
  name: "windows.devices.wifidirect.services",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Devices.Enumeration",
    "Windows.Networking",
    "Windows.Foundation",
    "Windows.Networking.Sockets",
  ]
};

export const {
  WiFiDirectServiceAdvertisementStatus,
  WiFiDirectServiceConfigurationMethod,
  WiFiDirectServiceError,
  WiFiDirectServiceIPProtocol,
  WiFiDirectServiceSessionErrorStatus,
  WiFiDirectServiceSessionStatus,
  WiFiDirectServiceStatus,
  WiFiDirectService,
  WiFiDirectServiceAdvertiser,
  WiFiDirectServiceAutoAcceptSessionConnectedEventArgs,
  WiFiDirectServiceProvisioningInfo,
  WiFiDirectServiceRemotePortAddedEventArgs,
  WiFiDirectServiceSession,
  WiFiDirectServiceSessionDeferredEventArgs,
  WiFiDirectServiceSessionRequest,
  WiFiDirectServiceSessionRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
