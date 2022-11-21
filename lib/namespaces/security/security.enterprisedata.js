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
    "Windows.Storage",
    "Windows.Storage.Streams",
    "Windows.Networking",
    "Windows.Foundation",
  ]
};

export const {
  ProtectionPolicyEvaluationResult,
  FileProtectionStatus,
  ProtectedImportExportStatus,
  DataProtectionStatus,
  ProtectionPolicyAuditAction,
  ProtectionPolicyRequestAccessBehavior,
  EnforcementLevel,
  FileProtectionInfo,
  ProtectedContainerExportResult,
  ProtectedContainerImportResult,
  ProtectedFileCreateResult,
  FileUnprotectOptions,
  BufferProtectUnprotectResult,
  DataProtectionInfo,
  ProtectionPolicyAuditInfo,
  ThreadNetworkContext,
  ProtectionPolicyManager,
  ProtectedAccessSuspendingEventArgs,
  ProtectedAccessResumedEventArgs,
  ProtectedContentRevokedEventArgs,
  FileRevocationManager,
  FileProtectionManager,
  DataProtectionManager,
} = load(namespace.name);

reference(namespace.externalReference);
