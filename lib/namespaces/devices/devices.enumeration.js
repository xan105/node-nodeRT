/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.enumeration
  name: "windows.devices.enumeration",
  externalReference: [
    "Windows.Foundation",
    "Windows.Security.Credentials",
    "Windows.UI.Popups",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.Background",
  ]
};

export const {
  DeviceAccessStatus,
  DeviceClass,
  DeviceInformationKind,
  DevicePairingKinds,
  DevicePairingProtectionLevel,
  DevicePairingResultStatus,
  DevicePickerDisplayStatusOptions,
  DeviceUnpairingResultStatus,
  DeviceWatcherEventKind,
  DeviceWatcherStatus,
  Panel,
  DeviceAccessChangedEventArgs,
  DeviceAccessInformation,
  DeviceConnectionChangeTriggerDetails,
  DeviceDisconnectButtonClickedEventArgs,
  DeviceInformation,
  DeviceInformationCollection,
  DeviceInformationCustomPairing,
  DeviceInformationPairing,
  DeviceInformationUpdate,
  DevicePairingRequestedEventArgs,
  DevicePairingResult,
  DevicePicker,
  DevicePickerAppearance,
  DevicePickerFilter,
  DeviceSelectedEventArgs,
  DeviceThumbnail,
  DeviceUnpairingResult,
  DeviceWatcher,
  DeviceWatcherEvent,
  DeviceWatcherTriggerDetails,
  EnclosureLocation,
  IDevicePairingSettings,
} = load(namespace.name);

reference(namespace.externalReference);

export * as pnp from "./devices.enumeration.pnp.js";