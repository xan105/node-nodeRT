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
  EmailMailboxSyncManagerSyncRequestEventArgs,
  EmailMailboxDownloadMessageRequestEventArgs,
  EmailMailboxDownloadAttachmentRequestEventArgs,
  EmailMailboxCreateFolderRequestEventArgs,
  EmailMailboxDeleteFolderRequestEventArgs,
  EmailMailboxEmptyFolderRequestEventArgs,
  EmailMailboxMoveFolderRequestEventArgs,
  EmailMailboxUpdateMeetingResponseRequestEventArgs,
  EmailMailboxForwardMeetingRequestEventArgs,
  EmailMailboxProposeNewTimeForMeetingRequestEventArgs,
  EmailMailboxSetAutoReplySettingsRequestEventArgs,
  EmailMailboxGetAutoReplySettingsRequestEventArgs,
  EmailMailboxResolveRecipientsRequestEventArgs,
  EmailMailboxValidateCertificatesRequestEventArgs,
  EmailMailboxServerSearchReadBatchRequestEventArgs,
  EmailDataProviderTriggerDetails,
  EmailMailboxSyncManagerSyncRequest,
  EmailMailboxDownloadMessageRequest,
  EmailMailboxDownloadAttachmentRequest,
  EmailMailboxCreateFolderRequest,
  EmailMailboxDeleteFolderRequest,
  EmailMailboxEmptyFolderRequest,
  EmailMailboxMoveFolderRequest,
  EmailMailboxUpdateMeetingResponseRequest,
  EmailMailboxForwardMeetingRequest,
  EmailMailboxProposeNewTimeForMeetingRequest,
  EmailMailboxSetAutoReplySettingsRequest,
  EmailMailboxGetAutoReplySettingsRequest,
  EmailMailboxResolveRecipientsRequest,
  EmailMailboxValidateCertificatesRequest,
  EmailMailboxServerSearchReadBatchRequest,
} = load(namespace.name);

reference(namespace.externalReference);
