/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.bluetooth.rfcomm
  name: "windows.devices.bluetooth.rfcomm",
  externalReference: [
    "Windows.Networking",
    "Windows.Networking.Sockets",
    "Windows.Devices.Bluetooth",
    "Windows.Devices.Enumeration",
    "Windows.Storage.Streams",
  ]
};

export const {
  RfcommDeviceService,
  RfcommDeviceServicesResult,
  RfcommServiceId,
  RfcommServiceProvider,
} = load(namespace.name);

reference(namespace.externalReference);
