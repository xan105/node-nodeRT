/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.display
  name: "windows.devices.display",
  externalReference: [
  ]
};

export const {
  DisplayMonitorConnectionKind,
  DisplayMonitorDescriptorKind,
  DisplayMonitorPhysicalConnectorKind,
  DisplayMonitorUsageKind,
  DisplayMonitor,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./devices.display.core.js";