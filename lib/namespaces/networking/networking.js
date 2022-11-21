/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.networking
  name: "windows.networking",
  externalReference: [
    "Windows.Networking.Connectivity",
  ]
};

export const {
  HostNameSortOptions,
  HostNameType,
  DomainNameType,
  HostName,
  EndpointPair,
} = load(namespace.name);

reference(namespace.externalReference);

export * as backgroundtransfer from "./networking.backgroundtransfer.js";
export * as connectivity from "./networking.connectivity.js";
export * as networkoperators from "./networking.networkoperators.js";
export * as proximity from "./networking.proximity.js";
export * as pushnotifications from "./networking.pushnotifications.js";
export * as servicediscovery from "./networking.servicediscovery.js";
export * as sockets from "./networking.sockets.js";
export * as vpn from "./networking.vpn.js";
export * as xboxlive from "./networking.xboxlive.js";