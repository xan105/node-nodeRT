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
    "Windows.UI.Popups",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.Background",
    "Windows.Foundation",
  ]
};

export const {
  DevicePickerDisplayStatusOptions,
  DeviceClass,
  DeviceWatcherStatus,
  Panel,
  DeviceInformationKind,
  DeviceWatcherEventKind,
  DevicePairingKinds,
  DevicePairingResultStatus,
  DeviceUnpairingResultStatus,
  DevicePairingProtectionLevel,
  DeviceAccessStatus,
  DeviceConnectionChangeTriggerDetails,
  DevicePickerAppearance,
  DeviceSelectedEventArgs,
  DeviceDisconnectButtonClickedEventArgs,
  DevicePickerFilter,
  DevicePicker,
  DeviceThumbnail,
  EnclosureLocation,
  DeviceInformationUpdate,
  DeviceInformationCollection,
  DeviceWatcher,
  DeviceInformation,
  DevicePairingResult,
  DeviceUnpairingResult,
  IDevicePairingSettings,
  DevicePairingRequestedEventArgs,
  DeviceInformationCustomPairing,
  DeviceInformationPairing,
  DeviceAccessChangedEventArgs,
  DeviceAccessInformation,
  DeviceWatcherEvent,
  DeviceWatcherTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);

export * as pnp from "./devices.enumeration.pnp.js";