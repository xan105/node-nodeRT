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
    "Windows.Media.MediaProperties",
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Security.Credentials",
  ]
};

export const {
  ChatMessageStatus,
  ChatMessageKind,
  ChatMessageOperatorKind,
  ChatMessageChangeType,
  ChatMessageValidationStatus,
  ChatConversationThreadingKind,
  ChatStoreChangedEventKind,
  ChatTransportErrorCodeCategory,
  ChatTransportInterpretedErrorCode,
  ChatMessageTransportKind,
  RcsServiceKind,
  ChatItemKind,
  ChatRestoreHistorySpan,
  ChatMessageTransportConfiguration,
  ChatMessage,
  ChatMessageChange,
  ChatMessageChangeReader,
  ChatMessageAttachment,
  ChatConversationThreadingInfo,
  ChatRecipientDeliveryInfo,
  ChatMessageChangeTracker,
  ChatMessageReader,
  ChatMessageValidationResult,
  ChatMessageStore,
  ChatMessageChangedEventArgs,
  ChatConversation,
  ChatConversationReader,
  ChatQueryOptions,
  ChatSearchReader,
  ChatMessageStoreChangedEventArgs,
  ChatMessageChangedDeferral,
  ChatMessageTransport,
  ChatSyncManager,
  IChatItem,
  ChatCapabilities,
  RemoteParticipantComposingChangedEventArgs,
  ChatSyncConfiguration,
  RcsEndUserMessageManager,
  RcsTransport,
  RcsTransportConfiguration,
  RcsServiceKindSupportedChangedEventArgs,
  RcsEndUserMessageAvailableEventArgs,
  RcsEndUserMessageAction,
  RcsEndUserMessage,
  ChatMessageManager,
  ChatMessageNotificationTriggerDetails,
  ChatMessageBlocking,
  ChatCapabilitiesManager,
  RcsManager,
  RcsEndUserMessageAvailableTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
