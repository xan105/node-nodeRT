  export enum ChatConversationThreadingKind {
    participants,
    contactId,
    conversationId,
    custom,
  }

  export enum ChatItemKind {
    message,
    conversation,
  }

  export enum ChatMessageChangeType {
    messageCreated,
    messageModified,
    messageDeleted,
    changeTrackingLost,
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

  export enum ChatMessageTransportKind {
    text,
    untriaged,
    blocked,
    custom,
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

  export enum ChatRestoreHistorySpan {
    lastMonth,
    lastYear,
    anyTime,
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

  export enum RcsServiceKind {
    chat,
    groupChat,
    fileTransfer,
    capability,
  }

  export class ChatCapabilities {
    isChatCapable: Boolean;
    isFileTransferCapable: Boolean;
    isGeoLocationPushCapable: Boolean;
    isIntegratedMessagingCapable: Boolean;
    isOnline: Boolean;
    constructor();

  }

  export class ChatCapabilitiesManager {
    constructor();

    static getCachedCapabilitiesAsync(address: String, transportId: String, callback: (error: Error, result: ChatCapabilities) => void): void ;
    static getCachedCapabilitiesAsync(address: String, callback: (error: Error, result: ChatCapabilities) => void): void ;


    static getCapabilitiesFromNetworkAsync(address: String, transportId: String, callback: (error: Error, result: ChatCapabilities) => void): void ;
    static getCapabilitiesFromNetworkAsync(address: String, callback: (error: Error, result: ChatCapabilities) => void): void ;


  }

  export class ChatConversation {
    subject: String;
    isConversationMuted: Boolean;
    hasUnreadMessages: Boolean;
    id: String;
    mostRecentMessageId: String;
    participants: Object;
    threadingInfo: ChatConversationThreadingInfo;
    canModifyParticipants: Boolean;
    itemKind: ChatItemKind;
    constructor();

    deleteAsync(callback: (error: Error) => void): void ;

    markMessagesAsReadAsync(callback: (error: Error) => void): void ;
    markMessagesAsReadAsync(value: Date, callback: (error: Error) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    getMessageReader(): ChatMessageReader;

    notifyLocalParticipantComposing(transportId: String, participantAddress: String, isComposing: Boolean): void;

    notifyRemoteParticipantComposing(transportId: String, participantAddress: String, isComposing: Boolean): void;

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
    readBatchAsync(count: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class ChatConversationThreadingInfo {
    kind: ChatConversationThreadingKind;
    custom: String;
    conversationId: String;
    contactId: String;
    participants: Object;
    constructor();

  }

  export class ChatMessage {
    itemKind: ChatItemKind;
    isIncoming: Boolean;
    isForwardingDisabled: Boolean;
    transportId: String;
    status: ChatMessageStatus;
    from: String;
    body: String;
    subject: String;
    isRead: Boolean;
    networkTimestamp: Date;
    localTimestamp: Date;
    recipientSendStatuses: Object;
    recipients: Object;
    transportFriendlyName: String;
    attachments: Object;
    id: String;
    isSeen: Boolean;
    messageKind: ChatMessageKind;
    isReceivedDuringQuietHours: Boolean;
    isAutoReply: Boolean;
    estimatedDownloadSize: Number;
    threadingInfo: ChatConversationThreadingInfo;
    shouldSuppressNotification: Boolean;
    remoteId: String;
    messageOperatorKind: ChatMessageOperatorKind;
    isReplyDisabled: Boolean;
    isSimMessage: Boolean;
    recipientsDeliveryInfos: Object;
    syncId: String;
    constructor();

  }

  export class ChatMessageAttachment {
    text: String;
    mimeType: String;
    groupId: Number;
    dataStreamReference: Object;
    transferProgress: Number;
    thumbnail: Object;
    originalFileName: String;
    constructor();
    constructor(mimeType: String, dataStreamReference: Object);

  }

  export class ChatMessageBlocking {
    constructor();

    static markMessageAsBlockedAsync(localChatMessageId: String, blocked: Boolean, callback: (error: Error) => void): void ;


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

  export class ChatMessageChangeTracker {
    constructor();

    enable(): void;

    getChangeReader(): ChatMessageChangeReader;

    reset(): void;

  }

  export class ChatMessageChangedDeferral {
    constructor();

    complete(): void;

  }

  export class ChatMessageChangedEventArgs {
    constructor();

    getDeferral(): ChatMessageChangedDeferral;

  }

  export class ChatMessageManager {
    constructor();

    static requestSyncManagerAsync(callback: (error: Error, result: ChatSyncManager) => void): void ;


    static registerTransportAsync(callback: (error: Error, result: String) => void): void ;


    static getTransportAsync(transportId: String, callback: (error: Error, result: ChatMessageTransport) => void): void ;


    static getTransportsAsync(callback: (error: Error, result: Object) => void): void ;


    static requestStoreAsync(callback: (error: Error, result: ChatMessageStore) => void): void ;


    static showComposeSmsMessageAsync(message: ChatMessage, callback: (error: Error) => void): void ;


    static showSmsSettings(): void;


  }

  export class ChatMessageNotificationTriggerDetails {
    chatMessage: ChatMessage;
    shouldDisplayToast: Boolean;
    shouldUpdateActionCenter: Boolean;
    shouldUpdateBadge: Boolean;
    shouldUpdateDetailText: Boolean;
    constructor();

  }

  export class ChatMessageReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;
    readBatchAsync(count: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class ChatMessageStore {
    changeTracker: ChatMessageChangeTracker;
    constructor();

    deleteMessageAsync(localMessageId: String, callback: (error: Error) => void): void ;

    downloadMessageAsync(localChatMessageId: String, callback: (error: Error) => void): void ;

    getMessageAsync(localChatMessageId: String, callback: (error: Error, result: ChatMessage) => void): void ;

    markMessageReadAsync(localChatMessageId: String, callback: (error: Error) => void): void ;

    retrySendMessageAsync(localChatMessageId: String, callback: (error: Error) => void): void ;

    sendMessageAsync(chatMessage: ChatMessage, callback: (error: Error) => void): void ;

    forwardMessageAsync(localChatMessageId: String, addresses: Object, callback: (error: Error, result: ChatMessage) => void): void ;

    getConversationAsync(conversationId: String, callback: (error: Error, result: ChatConversation) => void): void ;
    getConversationAsync(conversationId: String, transportIds: Object, callback: (error: Error, result: ChatConversation) => void): void ;

    getConversationFromThreadingInfoAsync(threadingInfo: ChatConversationThreadingInfo, callback: (error: Error, result: ChatConversation) => void): void ;

    getMessageByRemoteIdAsync(transportId: String, remoteId: String, callback: (error: Error, result: ChatMessage) => void): void ;

    getUnseenCountAsync(callback: (error: Error, result: Number) => void): void ;
    getUnseenCountAsync(transportIds: Object, callback: (error: Error, result: Number) => void): void ;

    markAsSeenAsync(callback: (error: Error) => void): void ;
    markAsSeenAsync(transportIds: Object, callback: (error: Error) => void): void ;

    saveMessageAsync(chatMessage: ChatMessage, callback: (error: Error) => void): void ;

    tryCancelDownloadMessageAsync(localChatMessageId: String, callback: (error: Error, result: Boolean) => void): void ;

    tryCancelSendMessageAsync(localChatMessageId: String, callback: (error: Error, result: Boolean) => void): void ;

    getMessageBySyncIdAsync(syncId: String, callback: (error: Error, result: ChatMessage) => void): void ;

    getMessageReader(): ChatMessageReader;
    getMessageReader(recentTimeLimit: Number): ChatMessageReader;

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

  export class ChatMessageStoreChangedEventArgs {
    id: String;
    kind: ChatStoreChangedEventKind;
    constructor();

  }

  export class ChatMessageTransport {
    isActive: Boolean;
    isAppSetAsNotificationProvider: Boolean;
    transportFriendlyName: String;
    transportId: String;
    configuration: ChatMessageTransportConfiguration;
    transportKind: ChatMessageTransportKind;
    constructor();

    requestSetAsNotificationProviderAsync(callback: (error: Error) => void): void ;

  }

  export class ChatMessageTransportConfiguration {
    extendedProperties: Object;
    maxAttachmentCount: Number;
    maxMessageSizeInKilobytes: Number;
    maxRecipientCount: Number;
    supportedVideoFormat: Object;
    constructor();

  }

  export class ChatMessageValidationResult {
    maxPartCount: Number;
    partCount: Number;
    remainingCharacterCountInPart: Number;
    status: ChatMessageValidationStatus;
    constructor();

  }

  export class ChatQueryOptions {
    searchString: String;
    constructor();

  }

  export class ChatRecipientDeliveryInfo {
    transportAddress: String;
    readTime: Date;
    deliveryTime: Date;
    isErrorPermanent: Boolean;
    status: ChatMessageStatus;
    transportErrorCode: Number;
    transportErrorCodeCategory: ChatTransportErrorCodeCategory;
    transportInterpretedErrorCode: ChatTransportInterpretedErrorCode;
    constructor();

  }

  export class ChatSearchReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;
    readBatchAsync(count: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class ChatSyncConfiguration {
    restoreHistorySpan: ChatRestoreHistorySpan;
    isSyncEnabled: Boolean;
    constructor();

  }

  export class ChatSyncManager {
    configuration: ChatSyncConfiguration;
    constructor();

    associateAccountAsync(webAccount: Object, callback: (error: Error) => void): void ;

    unassociateAccountAsync(callback: (error: Error) => void): void ;

    setConfigurationAsync(configuration: ChatSyncConfiguration, callback: (error: Error) => void): void ;

    isAccountAssociated(webAccount: Object): Boolean;

    startSync(): void;

  }

  export class IChatItem {
    itemKind: ChatItemKind;
    constructor();

  }

  export class RcsEndUserMessage {
    actions: Object;
    isPinRequired: Boolean;
    text: String;
    title: String;
    transportId: String;
    constructor();

    sendResponseAsync(action: RcsEndUserMessageAction, callback: (error: Error) => void): void ;

    sendResponseWithPinAsync(action: RcsEndUserMessageAction, pin: String, callback: (error: Error) => void): void ;

  }

  export class RcsEndUserMessageAction {
    label: String;
    constructor();

  }

  export class RcsEndUserMessageAvailableEventArgs {
    isMessageAvailable: Boolean;
    message: RcsEndUserMessage;
    constructor();

  }

  export class RcsEndUserMessageAvailableTriggerDetails {
    text: String;
    title: String;
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

  export class RcsManager {
    constructor();

    static getTransportsAsync(callback: (error: Error, result: Object) => void): void ;


    static getTransportAsync(transportId: String, callback: (error: Error, result: RcsTransport) => void): void ;


    static leaveConversationAsync(conversation: ChatConversation, callback: (error: Error) => void): void ;


    static getEndUserMessageManager(): RcsEndUserMessageManager;


    addListener(type: "TransportListChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TransportListChanged", listener: (ev: Event) => void): void ;
    on(type: "TransportListChanged", listener: (ev: Event) => void): void ;
    off(type: "TransportListChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RcsServiceKindSupportedChangedEventArgs {
    serviceKind: RcsServiceKind;
    constructor();

  }

  export class RcsTransport {
    configuration: RcsTransportConfiguration;
    extendedProperties: Object;
    isActive: Boolean;
    transportFriendlyName: String;
    transportId: String;
    constructor();

    isStoreAndForwardEnabled(serviceKind: RcsServiceKind): Boolean;

    isServiceKindSupported(serviceKind: RcsServiceKind): Boolean;

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
    maxAttachmentCount: Number;
    maxFileSizeInKilobytes: Number;
    maxGroupMessageSizeInKilobytes: Number;
    maxMessageSizeInKilobytes: Number;
    maxRecipientCount: Number;
    warningFileSizeInKilobytes: Number;
    constructor();

  }

  export class RemoteParticipantComposingChangedEventArgs {
    isComposing: Boolean;
    participantAddress: String;
    transportId: String;
    constructor();

  }

