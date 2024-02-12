/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.i2c.provider
  name: "windows.devices.i2c.provider",
  externalReference: [
  ]
};

export const {
  ProviderI2cBusSpeed,
  ProviderI2cSharingMode,
  ProviderI2cTransferStatus,
  II2cControllerProvider,
  II2cDeviceProvider,
  II2cProvider,
  ProviderI2cConnectionSettings,
} = load(namespace.name);

reference(namespace.externalReference);
