/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.gaming.input.custom
  name: "windows.gaming.input.custom",
  externalReference: [
    "Windows.Gaming.Input",
    "Windows.Storage.Streams",
  ]
};

export const {
  GipFirmwareUpdateStatus,
  GipMessageClass,
  XusbDeviceType,
  XusbDeviceSubtype,
  IGameControllerInputSink,
  IGipGameControllerInputSink,
  IHidGameControllerInputSink,
  IXusbGameControllerInputSink,
  IGameControllerProvider,
  GipFirmwareUpdateResult,
  ICustomGameControllerFactory,
  GipGameControllerProvider,
  HidGameControllerProvider,
  XusbGameControllerProvider,
  GameControllerFactoryManager,
} = load(namespace.name);

reference(namespace.externalReference);
