/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.humaninterfacedevice
  name: "windows.devices.humaninterfacedevice",
  externalReference: [
    "Windows.Storage",
    "Windows.Storage.Streams",
  ]
};

export const {
  HidCollectionType,
  HidReportType,
  HidBooleanControl,
  HidBooleanControlDescription,
  HidCollection,
  HidDevice,
  HidFeatureReport,
  HidInputReport,
  HidInputReportReceivedEventArgs,
  HidNumericControl,
  HidNumericControlDescription,
  HidOutputReport,
} = load(namespace.name);

reference(namespace.externalReference);
