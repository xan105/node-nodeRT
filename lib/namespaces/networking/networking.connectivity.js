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
  CellularApnAuthenticationType,
  ConnectionProfileDeleteStatus,
  DataUsageGranularity,
  DomainAuthenticationKind,
  DomainConnectivityLevel,
  NetworkAuthenticationType,
  NetworkConnectivityLevel,
  NetworkCostType,
  NetworkEncryptionType,
  NetworkTypes,
  RoamingStates,
  TriStates,
  WwanDataClass,
  WwanNetworkIPKind,
  WwanNetworkRegistrationState,
  AttributedNetworkUsage,
  CellularApnContext,
  ConnectionCost,
  ConnectionProfile,
  ConnectionProfileFilter,
  ConnectionSession,
  ConnectivityInterval,
  ConnectivityManager,
  DataPlanStatus,
  DataPlanUsage,
  DataUsage,
  IPInformation,
  LanIdentifier,
  LanIdentifierData,
  NetworkAdapter,
  NetworkInformation,
  NetworkItem,
  NetworkSecuritySettings,
  NetworkStateChangeEventDetails,
  NetworkUsage,
  ProviderNetworkUsage,
  ProxyConfiguration,
  RoutePolicy,
  WlanConnectionProfileDetails,
  WwanConnectionProfileDetails,
} = load(namespace.name);

reference(namespace.externalReference);
