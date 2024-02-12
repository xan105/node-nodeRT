/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.isolation
  name: "windows.security.isolation",
  externalReference: [
    "Windows.Foundation",
  ]
};

export const {
  IsolatedWindowsEnvironmentActivator,
  IsolatedWindowsEnvironmentAllowedClipboardFormats,
  IsolatedWindowsEnvironmentAvailablePrinters,
  IsolatedWindowsEnvironmentClipboardCopyPasteDirections,
  IsolatedWindowsEnvironmentCreateStatus,
  IsolatedWindowsEnvironmentCreationPriority,
  IsolatedWindowsEnvironmentHostError,
  IsolatedWindowsEnvironmentLaunchFileStatus,
  IsolatedWindowsEnvironmentOwnerRegistrationStatus,
  IsolatedWindowsEnvironmentPostMessageStatus,
  IsolatedWindowsEnvironmentProcessState,
  IsolatedWindowsEnvironmentProgressState,
  IsolatedWindowsEnvironmentShareFileStatus,
  IsolatedWindowsEnvironmentShareFolderStatus,
  IsolatedWindowsEnvironmentSignInProgress,
  IsolatedWindowsEnvironmentStartProcessStatus,
  IsolatedWindowsEnvironment,
  IsolatedWindowsEnvironmentCreateResult,
  IsolatedWindowsEnvironmentFile,
  IsolatedWindowsEnvironmentHost,
  IsolatedWindowsEnvironmentLaunchFileResult,
  IsolatedWindowsEnvironmentOptions,
  IsolatedWindowsEnvironmentOwnerRegistration,
  IsolatedWindowsEnvironmentOwnerRegistrationData,
  IsolatedWindowsEnvironmentOwnerRegistrationResult,
  IsolatedWindowsEnvironmentPostMessageResult,
  IsolatedWindowsEnvironmentProcess,
  IsolatedWindowsEnvironmentShareFileRequestOptions,
  IsolatedWindowsEnvironmentShareFileResult,
  IsolatedWindowsEnvironmentShareFolderRequestOptions,
  IsolatedWindowsEnvironmentShareFolderResult,
  IsolatedWindowsEnvironmentStartProcessResult,
  IsolatedWindowsEnvironmentTelemetryParameters,
  IsolatedWindowsEnvironmentUserInfo,
  IsolatedWindowsHostMessenger,
} = load(namespace.name);

reference(namespace.externalReference);
