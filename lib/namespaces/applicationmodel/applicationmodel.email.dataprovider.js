/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.email.dataprovider
  name: "windows.applicationmodel.email.dataprovider",
  externalReference: [
    "Windows.Foundation",
    "Windows.ApplicationModel.Email",
    "Windows.Security.Cryptography.Certificates",
  ]
};

export const {
  EmailDataProviderConnection,
  EmailDataProviderTriggerDetails,
  EmailMailboxCreateFolderRequest,
  EmailMailboxCreateFolderRequestEventArgs,
  EmailMailboxDeleteFolderRequest,
  EmailMailboxDeleteFolderRequestEventArgs,
  EmailMailboxDownloadAttachmentRequest,
  EmailMailboxDownloadAttachmentRequestEventArgs,
  EmailMailboxDownloadMessageRequest,
  EmailMailboxDownloadMessageRequestEventArgs,
  EmailMailboxEmptyFolderRequest,
  EmailMailboxEmptyFolderRequestEventArgs,
  EmailMailboxForwardMeetingRequest,
  EmailMailboxForwardMeetingRequestEventArgs,
  EmailMailboxGetAutoReplySettingsRequest,
  EmailMailboxGetAutoReplySettingsRequestEventArgs,
  EmailMailboxMoveFolderRequest,
  EmailMailboxMoveFolderRequestEventArgs,
  EmailMailboxProposeNewTimeForMeetingRequest,
  EmailMailboxProposeNewTimeForMeetingRequestEventArgs,
  EmailMailboxResolveRecipientsRequest,
  EmailMailboxResolveRecipientsRequestEventArgs,
  EmailMailboxServerSearchReadBatchRequest,
  EmailMailboxServerSearchReadBatchRequestEventArgs,
  EmailMailboxSetAutoReplySettingsRequest,
  EmailMailboxSetAutoReplySettingsRequestEventArgs,
  EmailMailboxSyncManagerSyncRequest,
  EmailMailboxSyncManagerSyncRequestEventArgs,
  EmailMailboxUpdateMeetingResponseRequest,
  EmailMailboxUpdateMeetingResponseRequestEventArgs,
  EmailMailboxValidateCertificatesRequest,
  EmailMailboxValidateCertificatesRequestEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
