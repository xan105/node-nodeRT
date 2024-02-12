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
  WiFiAccessStatus,
  WiFiConnectionMethod,
  WiFiConnectionStatus,
  WiFiNetworkKind,
  WiFiOnDemandHotspotAvailability,
  WiFiOnDemandHotspotCellularBars,
  WiFiOnDemandHotspotConnectStatus,
  WiFiPhyKind,
  WiFiReconnectionKind,
  WiFiWpsConfigurationStatus,
  WiFiWpsKind,
  WiFiAdapter,
  WiFiAvailableNetwork,
  WiFiConnectionResult,
  WiFiNetworkReport,
  WiFiOnDemandHotspotConnectTriggerDetails,
  WiFiOnDemandHotspotConnectionResult,
  WiFiOnDemandHotspotNetwork,
  WiFiOnDemandHotspotNetworkProperties,
  WiFiWpsConfigurationResult,
} = load(namespace.name);

reference(namespace.externalReference);
