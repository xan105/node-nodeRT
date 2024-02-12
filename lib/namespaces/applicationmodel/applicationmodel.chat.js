/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.chat
  name: "windows.applicationmodel.chat",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Media.MediaProperties",
    "Windows.Security.Credentials",
  ]
};

export const {
  ChatConversationThreadingKind,
  ChatItemKind,
  ChatMessageChangeType,
  ChatMessageKind,
  ChatMessageOperatorKind,
  ChatMessageStatus,
  ChatMessageTransportKind,
  ChatMessageValidationStatus,
  ChatRestoreHistorySpan,
  ChatStoreChangedEventKind,
  ChatTransportErrorCodeCategory,
  ChatTransportInterpretedErrorCode,
  RcsServiceKind,
  ChatCapabilities,
  ChatCapabilitiesManager,
  ChatConversation,
  ChatConversationReader,
  ChatConversationThreadingInfo,
  ChatMessage,
  ChatMessageAttachment,
  ChatMessageBlocking,
  ChatMessageChange,
  ChatMessageChangeReader,
  ChatMessageChangeTracker,
  ChatMessageChangedDeferral,
  ChatMessageChangedEventArgs,
  ChatMessageManager,
  ChatMessageNotificationTriggerDetails,
  ChatMessageReader,
  ChatMessageStore,
  ChatMessageStoreChangedEventArgs,
  ChatMessageTransport,
  ChatMessageTransportConfiguration,
  ChatMessageValidationResult,
  ChatQueryOptions,
  ChatRecipientDeliveryInfo,
  ChatSearchReader,
  ChatSyncConfiguration,
  ChatSyncManager,
  IChatItem,
  RcsEndUserMessage,
  RcsEndUserMessageAction,
  RcsEndUserMessageAvailableEventArgs,
  RcsEndUserMessageAvailableTriggerDetails,
  RcsEndUserMessageManager,
  RcsManager,
  RcsServiceKindSupportedChangedEventArgs,
  RcsTransport,
  RcsTransportConfiguration,
  RemoteParticipantComposingChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
