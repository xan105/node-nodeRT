/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.wifidirect
  name: "windows.devices.wifidirect",
  externalReference: [
    "Windows.Networking",
    "Windows.Devices.Enumeration",
    "Windows.Storage.Streams",
    "Windows.Security.Credentials",
  ]
};

export const {
  WiFiDirectConnectionStatus,
  WiFiDirectError,
  WiFiDirectDeviceSelectorType,
  WiFiDirectAdvertisementListenStateDiscoverability,
  WiFiDirectAdvertisementPublisherStatus,
  WiFiDirectConfigurationMethod,
  WiFiDirectPairingProcedure,
  WiFiDirectDevice,
  WiFiDirectConnectionParameters,
  WiFiDirectInformationElement,
  WiFiDirectLegacySettings,
  WiFiDirectAdvertisement,
  WiFiDirectAdvertisementPublisherStatusChangedEventArgs,
  WiFiDirectAdvertisementPublisher,
  WiFiDirectConnectionRequest,
  WiFiDirectConnectionRequestedEventArgs,
  WiFiDirectConnectionListener,
} = load(namespace.name);

reference(namespace.externalReference);

export * as services from "./devices.wifidirect.services.js";