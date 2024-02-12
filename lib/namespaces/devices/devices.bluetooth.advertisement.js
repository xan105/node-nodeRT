/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.bluetooth.advertisement
  name: "windows.devices.bluetooth.advertisement",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Devices.Bluetooth",
  ]
};

export const {
  BluetoothLEAdvertisementFlags,
  BluetoothLEAdvertisementPublisherStatus,
  BluetoothLEAdvertisementType,
  BluetoothLEAdvertisementWatcherStatus,
  BluetoothLEScanningMode,
  BluetoothLEAdvertisement,
  BluetoothLEAdvertisementBytePattern,
  BluetoothLEAdvertisementDataSection,
  BluetoothLEAdvertisementDataTypes,
  BluetoothLEAdvertisementFilter,
  BluetoothLEAdvertisementPublisher,
  BluetoothLEAdvertisementPublisherStatusChangedEventArgs,
  BluetoothLEAdvertisementReceivedEventArgs,
  BluetoothLEAdvertisementWatcher,
  BluetoothLEAdvertisementWatcherStoppedEventArgs,
  BluetoothLEManufacturerData,
} = load(namespace.name);

reference(namespace.externalReference);
