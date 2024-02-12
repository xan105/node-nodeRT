/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.services.cortana
  name: "windows.services.cortana",
  externalReference: [
    "Windows.System",
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.DataTransfer",
  ]
};

export const {
  CortanaPermission,
  CortanaPermissionsChangeResult,
  CortanaActionableInsights,
  CortanaActionableInsightsOptions,
  CortanaPermissionsManager,
  CortanaSettings,
} = load(namespace.name);

reference(namespace.externalReference);
