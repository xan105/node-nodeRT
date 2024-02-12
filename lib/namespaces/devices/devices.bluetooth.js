/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.bluetooth
  name: "windows.devices.bluetooth",
  externalReference: [
    "Windows.Devices.Radios",
    "Windows.Networking",
    "Windows.Devices.Bluetooth.Rfcomm",
    "Windows.Storage.Streams",
    "Windows.Devices.Enumeration",
    "Windows.Devices.Bluetooth.GenericAttributeProfile",
  ]
};

export const {
  BluetoothAddressType,
  BluetoothCacheMode,
  BluetoothConnectionStatus,
  BluetoothError,
  BluetoothLEPreferredConnectionParametersRequestStatus,
  BluetoothMajorClass,
  BluetoothMinorClass,
  BluetoothServiceCapabilities,
  BluetoothAdapter,
  BluetoothClassOfDevice,
  BluetoothDevice,
  BluetoothDeviceId,
  BluetoothLEAppearance,
  BluetoothLEAppearanceCategories,
  BluetoothLEAppearanceSubcategories,
  BluetoothLEConnectionParameters,
  BluetoothLEConnectionPhy,
  BluetoothLEConnectionPhyInfo,
  BluetoothLEDevice,
  BluetoothLEPreferredConnectionParameters,
  BluetoothLEPreferredConnectionParametersRequest,
  BluetoothSignalStrengthFilter,
  BluetoothUuidHelper,
} = load(namespace.name);

reference(namespace.externalReference);

export * as advertisement from "./devices.bluetooth.advertisement.js";
export * as background from "./devices.bluetooth.background.js";
export * as genericattributeprofile from "./devices.bluetooth.genericattributeprofile.js";
export * as rfcomm from "./devices.bluetooth.rfcomm.js";