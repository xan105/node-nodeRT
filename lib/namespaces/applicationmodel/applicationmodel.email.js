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
    "Windows.Foundation",
    "Windows.Security.Cryptography.Certificates",
    "Windows.System",
    "Windows.ApplicationModel.Appointments",
  ]
};

export const {
  EmailAttachmentDownloadState,
  EmailBatchStatus,
  EmailCertificateValidationStatus,
  EmailFlagState,
  EmailImportance,
  EmailMailboxActionKind,
  EmailMailboxAllowedSmimeEncryptionAlgorithmNegotiation,
  EmailMailboxAutoReplyMessageResponseKind,
  EmailMailboxChangeType,
  EmailMailboxCreateFolderStatus,
  EmailMailboxDeleteFolderStatus,
  EmailMailboxEmptyFolderStatus,
  EmailMailboxOtherAppReadAccess,
  EmailMailboxOtherAppWriteAccess,
  EmailMailboxSmimeEncryptionAlgorithm,
  EmailMailboxSmimeSigningAlgorithm,
  EmailMailboxSyncStatus,
  EmailMeetingResponseType,
  EmailMessageBodyKind,
  EmailMessageDownloadState,
  EmailMessageResponseKind,
  EmailMessageSmimeKind,
  EmailQueryKind,
  EmailQuerySearchFields,
  EmailQuerySearchScope,
  EmailQuerySortDirection,
  EmailQuerySortProperty,
  EmailRecipientResolutionStatus,
  EmailSpecialFolderKind,
  EmailStoreAccessType,
  EmailAttachment,
  EmailConversation,
  EmailConversationBatch,
  EmailConversationReader,
  EmailFolder,
  EmailIrmInfo,
  EmailIrmTemplate,
  EmailItemCounts,
  EmailMailbox,
  EmailMailboxAction,
  EmailMailboxAutoReply,
  EmailMailboxAutoReplySettings,
  EmailMailboxCapabilities,
  EmailMailboxChange,
  EmailMailboxChangeReader,
  EmailMailboxChangeTracker,
  EmailMailboxChangedDeferral,
  EmailMailboxChangedEventArgs,
  EmailMailboxCreateFolderResult,
  EmailMailboxPolicies,
  EmailMailboxSyncManager,
  EmailManager,
  EmailManagerForUser,
  EmailMeetingInfo,
  EmailMessage,
  EmailMessageBatch,
  EmailMessageReader,
  EmailQueryOptions,
  EmailQueryTextSearch,
  EmailRecipient,
  EmailRecipientResolutionResult,
  EmailStore,
  EmailStoreNotificationTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);

export * as dataprovider from "./applicationmodel.email.dataprovider.js";