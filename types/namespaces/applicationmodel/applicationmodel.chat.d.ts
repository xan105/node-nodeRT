  export enum ChatMessageStatus {
    draft,
    sending,
    sent,
    sendRetryNeeded,
    sendFailed,
    received,
    receiveDownloadNeeded,
    receiveDownloadFailed,
    receiveDownloading,
    deleted,
    declined,
    cancelled,
    recalled,
    receiveRetryNeeded,
  }

  export enum ChatMessageKind {
    standard,
    fileTransferRequest,
    transportCustom,
    joinedConversation,
    leftConversation,
    otherParticipantJoinedConversation,
    otherParticipantLeftConversation,
  }

  export enum ChatMessageOperatorKind {
    unspecified,
    sms,
    mms,
    rcs,
  }

  export enum ChatMessageChangeType {
    messageCreated,
    messageModified,
    messageDeleted,
    changeTrackingLost,
  }

  export enum ChatMessageValidationStatus {
    valid,
    noRecipients,
    invalidData,
    messageTooLarge,
    tooManyRecipients,
    transportInactive,
    transportNotFound,
    tooManyAttachments,
    invalidRecipients,
    invalidBody,
    invalidOther,
    validWithLargeMessage,
    voiceRoamingRestriction,
    dataRoamingRestriction,
  }

  export enum ChatConversationThreadingKind {
    participants,
    contactId,
    conversationId,
    custom,
  }

  export enum ChatStoreChangedEventKind {
    notificationsMissed,
    storeModified,
    messageCreated,
    messageModified,
    messageDeleted,
    conversationModified,
    conversationDeleted,
    conversationTransportDeleted,
  }

  export enum ChatTransportErrorCodeCategory {
    none,
    http,
    network,
    mmsServer,
  }

  export enum ChatTransportInterpretedErrorCode {
    none,
    unknown,
    invalidRecipientAddress,
    networkConnectivity,
    serviceDenied,
    timeout,
  }

  export enum ChatMessageTransportKind {
    text,
    untriaged,
    blocked,
    custom,
  }

  export enum RcsServiceKind {
    chat,
    groupChat,
    fileTransfer,
    capability,
  }

  export enum ChatItemKind {
    message,
    conversation,
  }

  export enum ChatRestoreHistorySpan {
    lastMonth,
    lastYear,
    anyTime,
  }

  export class ChatMessageTransportConfiguration {
    extendedProperties: Object;
    maxAttachmentCount: number;
    maxMessageSizeInKilobytes: number;
    maxRecipientCount: number;
    supportedVideoFormat: Object;
    constructor();

  }

  export class ChatMessage {
    itemKind: ChatItemKind;
    isIncoming: boolean;
    isForwardingDisabled: boolean;
    transportId: string;
    status: ChatMessageStatus;
    from: string;
    body: string;
    subject: string;
    isRead: boolean;
    networkTimestamp: Date;
    localTimestamp: Date;
    recipientSendStatuses: Object;
    recipients: Object;
    transportFriendlyName: string;
    attachments: Object;
    id: string;
    isSeen: boolean;
    messageKind: ChatMessageKind;
    isReceivedDuringQuietHours: boolean;
    isAutoReply: boolean;
    estimatedDownloadSize: number;
    threadingInfo: ChatConversationThreadingInfo;
    shouldSuppressNotification: boolean;
    remoteId: string;
    messageOperatorKind: ChatMessageOperatorKind;
    isReplyDisabled: boolean;
    isSimMessage: boolean;
    recipientsDeliveryInfos: Object;
    syncId: string;
    constructor();

  }

  export class ChatMessageChange {
    changeType: ChatMessageChangeType;
    message: ChatMessage;
    constructor();

  }

  export class ChatMessageChangeReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;

    acceptChanges(): void;

    acceptChangesThrough(lastChangeToAcknowledge: ChatMessageChange): void;

  }

  export class ChatMessageAttachment {
    text: string;
    mimeType: string;
    groupId: number;
    dataStreamReference: Object;
    transferProgress: number;
    thumbnail: Object;
    originalFileName: string;
    constructor();
    constructor(mimeType: string, dataStreamReference: Object);

  }

  export class ChatConversationThreadingInfo {
    kind: ChatConversationThreadingKind;
    custom: string;
    conversationId: string;
    contactId: string;
    participants: Object;
    constructor();

  }

  export class ChatRecipientDeliveryInfo {
    transportAddress: string;
    readTime: Date;
    deliveryTime: Date;
    isErrorPermanent: boolean;
    status: ChatMessageStatus;
    transportErrorCode: number;
    transportErrorCodeCategory: ChatTransportErrorCodeCategory;
    transportInterpretedErrorCode: ChatTransportInterpretedErrorCode;
    constructor();

  }

  export class ChatMessageChangeTracker {
    constructor();

    enable(): void;

    getChangeReader(): ChatMessageChangeReader;

    reset(): void;

  }

  export class ChatMessageReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;
    readBatchAsync(count: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class ChatMessageValidationResult {
    maxPartCount: number;
    partCount: number;
    remainingCharacterCountInPart: number;
    status: ChatMessageValidationStatus;
    constructor();

  }

  export class ChatMessageStore {
    changeTracker: ChatMessageChangeTracker;
    constructor();

    deleteMessageAsync(localMessageId: string, callback: (error: Error) => void): void ;

    downloadMessageAsync(localChatMessageId: string, callback: (error: Error) => void): void ;

    getMessageAsync(localChatMessageId: string, callback: (error: Error, result: ChatMessage) => void): void ;

    markMessageReadAsync(localChatMessageId: string, callback: (error: Error) => void): void ;

    retrySendMessageAsync(localChatMessageId: string, callback: (error: Error) => void): void ;

    sendMessageAsync(chatMessage: ChatMessage, callback: (error: Error) => void): void ;

    forwardMessageAsync(localChatMessageId: string, addresses: Object, callback: (error: Error, result: ChatMessage) => void): void ;

    getConversationAsync(conversationId: string, callback: (error: Error, result: ChatConversation) => void): void ;
    getConversationAsync(conversationId: string, transportIds: Object, callback: (error: Error, result: ChatConversation) => void): void ;

    getConversationFromThreadingInfoAsync(threadingInfo: ChatConversationThreadingInfo, callback: (error: Error, result: ChatConversation) => void): void ;

    getMessageByRemoteIdAsync(transportId: string, remoteId: string, callback: (error: Error, result: ChatMessage) => void): void ;

    getUnseenCountAsync(callback: (error: Error, result: number) => void): void ;
    getUnseenCountAsync(transportIds: Object, callback: (error: Error, result: number) => void): void ;

    markAsSeenAsync(callback: (error: Error) => void): void ;
    markAsSeenAsync(transportIds: Object, callback: (error: Error) => void): void ;

    saveMessageAsync(chatMessage: ChatMessage, callback: (error: Error) => void): void ;

    tryCancelDownloadMessageAsync(localChatMessageId: string, callback: (error: Error, result: boolean) => void): void ;

    tryCancelSendMessageAsync(localChatMessageId: string, callback: (error: Error, result: boolean) => void): void ;

    getMessageBySyncIdAsync(syncId: string, callback: (error: Error, result: ChatMessage) => void): void ;

    getMessageReader(): ChatMessageReader;
    getMessageReader(recentTimeLimit: number): ChatMessageReader;

    validateMessage(chatMessage: ChatMessage): ChatMessageValidationResult;

    getConversationReader(): ChatConversationReader;
    getConversationReader(transportIds: Object): ChatConversationReader;

    getSearchReader(value: ChatQueryOptions): ChatSearchReader;

    addListener(type: "MessageChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageChanged", listener: (ev: Event) => void): void ;
    on(type: "MessageChanged", listener: (ev: Event) => void): void ;
    off(type: "MessageChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StoreChanged", listener: (ev: Event) => void): void ;
    on(type: "StoreChanged", listener: (ev: Event) => void): void ;
    off(type: "StoreChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ChatMessageChangedEventArgs {
    constructor();

    getDeferral(): ChatMessageChangedDeferral;

  }

  export class ChatConversation {
    subject: string;
    isConversationMuted: boolean;
    hasUnreadMessages: boolean;
    id: string;
    mostRecentMessageId: string;
    participants: Object;
    threadingInfo: ChatConversationThreadingInfo;
    canModifyParticipants: boolean;
    itemKind: ChatItemKind;
    constructor();

    deleteAsync(callback: (error: Error) => void): void ;

    markMessagesAsReadAsync(callback: (error: Error) => void): void ;
    markMessagesAsReadAsync(value: Date, callback: (error: Error) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    getMessageReader(): ChatMessageReader;

    notifyLocalParticipantComposing(transportId: string, participantAddress: string, isComposing: boolean): void;

    notifyRemoteParticipantComposing(transportId: string, participantAddress: string, isComposing: boolean): void;

    addListener(type: "RemoteParticipantComposingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RemoteParticipantComposingChanged", listener: (ev: Event) => void): void ;
    on(type: "RemoteParticipantComposingChanged", listener: (ev: Event) => void): void ;
    off(type: "RemoteParticipantComposingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ChatConversationReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;
    readBatchAsync(count: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class ChatQueryOptions {
    searchString: string;
    constructor();

  }

  export class ChatSearchReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;
    readBatchAsync(count: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class ChatMessageStoreChangedEventArgs {
    id: string;
    kind: ChatStoreChangedEventKind;
    constructor();

  }

  export class ChatMessageChangedDeferral {
    constructor();

    complete(): void;

  }

  export class ChatMessageTransport {
    isActive: boolean;
    isAppSetAsNotificationProvider: boolean;
    transportFriendlyName: string;
    transportId: string;
    configuration: ChatMessageTransportConfiguration;
    transportKind: ChatMessageTransportKind;
    constructor();

    requestSetAsNotificationProviderAsync(callback: (error: Error) => void): void ;

  }

  export class ChatSyncManager {
    configuration: ChatSyncConfiguration;
    constructor();

    associateAccountAsync(webAccount: Object, callback: (error: Error) => void): void ;

    unassociateAccountAsync(callback: (error: Error) => void): void ;

    setConfigurationAsync(configuration: ChatSyncConfiguration, callback: (error: Error) => void): void ;

    isAccountAssociated(webAccount: Object): boolean;

    startSync(): void;

  }

  export class IChatItem {
    itemKind: ChatItemKind;
    constructor();

  }

  export class ChatCapabilities {
    isChatCapable: boolean;
    isFileTransferCapable: boolean;
    isGeoLocationPushCapable: boolean;
    isIntegratedMessagingCapable: boolean;
    isOnline: boolean;
    constructor();

  }

  export class RemoteParticipantComposingChangedEventArgs {
    isComposing: boolean;
    participantAddress: string;
    transportId: string;
    constructor();

  }

  export class ChatSyncConfiguration {
    restoreHistorySpan: ChatRestoreHistorySpan;
    isSyncEnabled: boolean;
    constructor();

  }

  export class RcsEndUserMessageManager {
    constructor();

    addListener(type: "MessageAvailableChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageAvailableChanged", listener: (ev: Event) => void): void ;
    on(type: "MessageAvailableChanged", listener: (ev: Event) => void): void ;
    off(type: "MessageAvailableChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RcsTransport {
    configuration: RcsTransportConfiguration;
    extendedProperties: Object;
    isActive: boolean;
    transportFriendlyName: string;
    transportId: string;
    constructor();

    isStoreAndForwardEnabled(serviceKind: RcsServiceKind): boolean;

    isServiceKindSupported(serviceKind: RcsServiceKind): boolean;

    addListener(type: "ServiceKindSupportedChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ServiceKindSupportedChanged", listener: (ev: Event) => void): void ;
    on(type: "ServiceKindSupportedChanged", listener: (ev: Event) => void): void ;
    off(type: "ServiceKindSupportedChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RcsTransportConfiguration {
    maxAttachmentCount: number;
    maxFileSizeInKilobytes: number;
    maxGroupMessageSizeInKilobytes: number;
    maxMessageSizeInKilobytes: number;
    maxRecipientCount: number;
    warningFileSizeInKilobytes: number;
    constructor();

  }

  export class RcsServiceKindSupportedChangedEventArgs {
    serviceKind: RcsServiceKind;
    constructor();

  }

  export class RcsEndUserMessageAvailableEventArgs {
    isMessageAvailable: boolean;
    message: RcsEndUserMessage;
    constructor();

  }

  export class RcsEndUserMessageAction {
    label: string;
    constructor();

  }

  export class RcsEndUserMessage {
    actions: Object;
    isPinRequired: boolean;
    text: string;
    title: string;
    transportId: string;
    constructor();

    sendResponseAsync(action: RcsEndUserMessageAction, callback: (error: Error) => void): void ;

    sendResponseWithPinAsync(action: RcsEndUserMessageAction, pin: string, callback: (error: Error) => void): void ;

  }

  export class ChatMessageManager {
    constructor();

    static requestSyncManagerAsync(callback: (error: Error, result: ChatSyncManager) => void): void ;


    static registerTransportAsync(callback: (error: Error, result: string) => void): void ;


    static getTransportAsync(transportId: string, callback: (error: Error, result: ChatMessageTransport) => void): void ;


    static getTransportsAsync(callback: (error: Error, result: Object) => void): void ;


    static requestStoreAsync(callback: (error: Error, result: ChatMessageStore) => void): void ;


    static showComposeSmsMessageAsync(message: ChatMessage, callback: (error: Error) => void): void ;


    static showSmsSettings(): void;


  }

  export class ChatMessageNotificationTriggerDetails {
    chatMessage: ChatMessage;
    shouldDisplayToast: boolean;
    shouldUpdateActionCenter: boolean;
    shouldUpdateBadge: boolean;
    shouldUpdateDetailText: boolean;
    constructor();

  }

  export class ChatMessageBlocking {
    constructor();

    static markMessageAsBlockedAsync(localChatMessageId: string, blocked: boolean, callback: (error: Error) => void): void ;


  }

  export class ChatCapabilitiesManager {
    constructor();

    static getCachedCapabilitiesAsync(address: string, callback: (error: Error, result: ChatCapabilities) => void): void ;


    static getCapabilitiesFromNetworkAsync(address: string, callback: (error: Error, result: ChatCapabilities) => void): void ;


  }

  export class RcsManager {
    constructor();

    static getTransportsAsync(callback: (error: Error, result: Object) => void): void ;


    static getTransportAsync(transportId: string, callback: (error: Error, result: RcsTransport) => void): void ;


    static leaveConversationAsync(conversation: ChatConversation, callback: (error: Error) => void): void ;


    static getEndUserMessageManager(): RcsEndUserMessageManager;


  }

  export class RcsEndUserMessageAvailableTriggerDetails {
    text: string;
    title: string;
    constructor();

  }

