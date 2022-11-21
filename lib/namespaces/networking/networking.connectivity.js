/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.networking.connectivity
  name: "windows.networking.connectivity",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Networking",
  ]
};

export const {
  NetworkCostType,
  NetworkConnectivityLevel,
  NetworkTypes,
  RoamingStates,
  NetworkAuthenticationType,
  NetworkEncryptionType,
  DomainConnectivityLevel,
  DataUsageGranularity,
  CellularApnAuthenticationType,
  TriStates,
  WwanNetworkRegistrationState,
  WwanNetworkIPKind,
  WwanDataClass,
  IPInformation,
  DataPlanUsage,
  ConnectionCost,
  DataPlanStatus,
  NetworkAdapter,
  DataUsage,
  NetworkSecuritySettings,
  WlanConnectionProfileDetails,
  NetworkUsage,
  ConnectivityInterval,
  AttributedNetworkUsage,
  ProviderNetworkUsage,
  LanIdentifierData,
  ConnectionProfile,
  LanIdentifier,
  ProxyConfiguration,
  ConnectionProfileFilter,
  NetworkItem,
  RoutePolicy,
  CellularApnContext,
  ConnectionSession,
  NetworkInformation,
  ConnectivityManager,
  NetworkStateChangeEventDetails,
  WwanConnectionProfileDetails,
} = load(namespace.name);

reference(namespace.externalReference);
