/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.bluetooth.background
  name: "windows.devices.bluetooth.background",
  externalReference: [
    "Windows.Devices.Bluetooth",
    "Windows.Storage.Streams",
    "Windows.Devices.Bluetooth.Rfcomm",
    "Windows.Networking.Sockets",
    "Windows.Devices.Bluetooth.GenericAttributeProfile",
    "Windows.Devices.Bluetooth.Advertisement",
  ]
};

export const {
  BluetoothEventTriggeringMode,
  RfcommInboundConnectionInformation,
  RfcommOutboundConnectionInformation,
  RfcommConnectionTriggerDetails,
  GattCharacteristicNotificationTriggerDetails,
  GattServiceProviderConnection,
  GattServiceProviderTriggerDetails,
  BluetoothLEAdvertisementWatcherTriggerDetails,
  BluetoothLEAdvertisementPublisherTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
