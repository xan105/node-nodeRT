/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.gpio
  name: "windows.devices.gpio",
  externalReference: [
    "Windows.Foundation",
    "Windows.Devices.Gpio.Provider",
  ]
};

export const {
  GpioChangePolarity,
  GpioOpenStatus,
  GpioPinDriveMode,
  GpioPinEdge,
  GpioPinValue,
  GpioSharingMode,
  GpioChangeCounter,
  GpioChangeReader,
  GpioController,
  GpioPin,
  GpioPinValueChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as provider from "./devices.gpio.provider.js";