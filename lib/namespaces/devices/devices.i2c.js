/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.i2c
  name: "windows.devices.i2c",
  externalReference: [
    "Windows.Devices.I2c.Provider",
  ]
};

export const {
  I2cBusSpeed,
  I2cTransferStatus,
  I2cSharingMode,
  I2cConnectionSettings,
  II2cDeviceStatics,
  I2cDevice,
  I2cController,
} = load(namespace.name);

reference(namespace.externalReference);

export * as provider from "./devices.i2c.provider.js";