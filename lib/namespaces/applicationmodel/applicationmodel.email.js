/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.email
  name: "windows.applicationmodel.email",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.System",
    "Windows.Foundation",
    "Windows.Security.Cryptography.Certificates",
    "Windows.ApplicationModel.Appointments",
  ]
};

export const {
  EmailCertificateValidationStatus,
  EmailStoreAccessType,
  EmailMessageBodyKind,
  EmailAttachmentDownloadState,
  EmailMessageDownloadState,
  EmailSpecialFolderKind,
  EmailQueryKind,
  EmailMailboxChangeType,
  EmailQuerySortDirection,
  EmailQuerySortProperty,
  EmailQuerySearchFields,
  EmailBatchStatus,
  EmailMessageResponseKind,
  EmailMeetingResponseType,
  EmailMailboxActionKind,
  EmailImportance,
  EmailFlagState,
  EmailMailboxSyncStatus,
  EmailMailboxOtherAppReadAccess,
  EmailMailboxOtherAppWriteAccess,
  EmailMailboxAllowedSmimeEncryptionAlgorithmNegotiation,
  EmailMailboxSmimeEncryptionAlgorithm,
  EmailMailboxSmimeSigningAlgorithm,
  EmailMailboxAutoReplyMessageResponseKind,
  EmailQuerySearchScope,
  EmailRecipientResolutionStatus,
  EmailMessageSmimeKind,
  EmailMailboxEmptyFolderStatus,
  EmailMailboxCreateFolderStatus,
  EmailMailboxDeleteFolderStatus,
  EmailMessage,
  EmailStore,
  EmailManagerForUser,
  EmailMailbox,
  EmailConversationReader,
  EmailQueryOptions,
  EmailMessageReader,
  EmailConversation,
  EmailFolder,
  EmailRecipient,
  EmailIrmTemplate,
  EmailIrmInfo,
  EmailAttachment,
  EmailMeetingInfo,
  EmailMailboxChangedDeferral,
  EmailMailboxCapabilities,
  EmailMailboxChangeTracker,
  EmailMailboxPolicies,
  EmailMailboxSyncManager,
  EmailMailboxChangedEventArgs,
  EmailMailboxAutoReplySettings,
  EmailRecipientResolutionResult,
  EmailMailboxCreateFolderResult,
  EmailMailboxAutoReply,
  EmailItemCounts,
  EmailQueryTextSearch,
  EmailConversationBatch,
  EmailMessageBatch,
  EmailMailboxAction,
  EmailMailboxChange,
  EmailMailboxChangeReader,
  EmailManager,
  EmailStoreNotificationTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);

export * as dataprovider from "./applicationmodel.email.dataprovider.js";