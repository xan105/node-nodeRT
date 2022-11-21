/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.management
  name: "windows.management",
  externalReference: [
    "Windows.Foundation",
  ]
};

export const {
  MdmAlertMark,
  MdmAlertDataType,
  MdmSessionState,
  MdmAlert,
  MdmSession,
  MdmSessionManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./management.core.js";
export * as deployment from "./management.deployment.js";
export * as policies from "./management.policies.js";
export * as update from "./management.update.js";
export * as workplace from "./management.workplace.js";