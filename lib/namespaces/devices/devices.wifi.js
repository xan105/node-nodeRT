/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.wifi
  name: "windows.devices.wifi",
  externalReference: [
    "Windows.Networking.Connectivity",
    "Windows.Foundation",
    "Windows.Security.Credentials",
  ]
};

export const {
  WiFiNetworkKind,
  WiFiPhyKind,
  WiFiAccessStatus,
  WiFiReconnectionKind,
  WiFiConnectionStatus,
  WiFiConnectionMethod,
  WiFiWpsKind,
  WiFiWpsConfigurationStatus,
  WiFiAdapter,
  WiFiNetworkReport,
  WiFiAvailableNetwork,
  WiFiConnectionResult,
  WiFiWpsConfigurationResult,
} = load(namespace.name);

reference(namespace.externalReference);
