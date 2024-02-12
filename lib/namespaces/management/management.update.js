/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.management.update
  name: "windows.management.update",
  externalReference: [
    "Windows.Foundation",
  ]
};

export const {
  WindowsUpdateAdministratorOptions,
  WindowsUpdateAdministratorStatus,
  WindowsUpdateAttentionRequiredReason,
  PreviewBuildsManager,
  PreviewBuildsState,
  WindowsUpdate,
  WindowsUpdateActionCompletedEventArgs,
  WindowsUpdateActionProgress,
  WindowsUpdateActionResult,
  WindowsUpdateAdministrator,
  WindowsUpdateApprovalData,
  WindowsUpdateAttentionRequiredInfo,
  WindowsUpdateAttentionRequiredReasonChangedEventArgs,
  WindowsUpdateGetAdministratorResult,
  WindowsUpdateItem,
  WindowsUpdateManager,
  WindowsUpdateProgressChangedEventArgs,
  WindowsUpdateRestartRequestOptions,
  WindowsUpdateScanCompletedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
