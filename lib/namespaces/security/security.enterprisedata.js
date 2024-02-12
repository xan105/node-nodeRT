/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.enterprisedata
  name: "windows.security.enterprisedata",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Storage",
    "Windows.Foundation",
    "Windows.Networking",
  ]
};

export const {
  DataProtectionStatus,
  EnforcementLevel,
  FileProtectionStatus,
  ProtectedImportExportStatus,
  ProtectionPolicyAuditAction,
  ProtectionPolicyEvaluationResult,
  ProtectionPolicyRequestAccessBehavior,
  BufferProtectUnprotectResult,
  DataProtectionInfo,
  DataProtectionManager,
  FileProtectionInfo,
  FileProtectionManager,
  FileRevocationManager,
  FileUnprotectOptions,
  ProtectedAccessResumedEventArgs,
  ProtectedAccessSuspendingEventArgs,
  ProtectedContainerExportResult,
  ProtectedContainerImportResult,
  ProtectedContentRevokedEventArgs,
  ProtectedFileCreateResult,
  ProtectionPolicyAuditInfo,
  ProtectionPolicyManager,
  ThreadNetworkContext,
} = load(namespace.name);

reference(namespace.externalReference);
