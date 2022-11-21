/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.preview.installcontrol
  name: "windows.applicationmodel.store.preview.installcontrol",
  externalReference: [
    "Windows.System",
    "Windows.Management.Deployment",
  ]
};

export const {
  GetEntitlementStatus,
  AppInstallState,
  AppInstallType,
  AutoUpdateSetting,
  AppInstallStatus,
  AppInstallItem,
  GetEntitlementResult,
  AppInstallManagerItemEventArgs,
  AppUpdateOptions,
  AppInstallOptions,
  AppInstallManager,
} = load(namespace.name);

reference(namespace.externalReference);
