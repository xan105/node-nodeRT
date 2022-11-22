  export enum EmailCertificateValidationStatus {
    success,
    noMatch,
    invalidUsage,
    invalidCertificate,
    revoked,
    chainRevoked,
    revocationServerFailure,
    expired,
    untrusted,
    serverError,
    unknownFailure,
  }

  export enum EmailStoreAccessType {
    appMailboxesReadWrite,
    allMailboxesLimitedReadWrite,
  }

  export enum EmailMessageBodyKind {
    html,
    plainText,
  }

  export enum EmailAttachmentDownloadState {
    notDownloaded,
    downloading,
    downloaded,
    failed,
  }

  export enum EmailMessageDownloadState {
    partiallyDownloaded,
    downloading,
    downloaded,
    failed,
  }

  export enum EmailSpecialFolderKind {
    none,
    root,
    inbox,
    outbox,
    drafts,
    deletedItems,
    sent,
  }

  export enum EmailQueryKind {
    all,
    important,
    flagged,
    unread,
    read,
    unseen,
  }

  export enum EmailMailboxChangeType {
    messageCreated,
    messageModified,
    messageDeleted,
    folderCreated,
    folderModified,
    folderDeleted,
    changeTrackingLost,
  }

  export enum EmailQuerySortDirection {
    descending,
    ascending,
  }

  export enum EmailQuerySortProperty {
    date,
  }

  export enum EmailQuerySearchFields {
    none,
    subject,
    sender,
    preview,
    recipients,
    all,
  }

  export enum EmailBatchStatus {
    success,
    serverSearchSyncManagerError,
    serverSearchUnknownError,
  }

  export enum EmailMessageResponseKind {
    none,
    reply,
    replyAll,
    forward,
  }

  export enum EmailMeetingResponseType {
    accept,
    decline,
    tentative,
  }

  export enum EmailMailboxActionKind {
    markMessageAsSeen,
    markMessageRead,
    changeMessageFlagState,
    moveMessage,
    saveDraft,
    sendMessage,
    createResponseReplyMessage,
    createResponseReplyAllMessage,
    createResponseForwardMessage,
    moveFolder,
    markFolderForSyncEnabled,
  }

  export enum EmailImportance {
    normal,
    high,
    low,
  }

  export enum EmailFlagState {
    unflagged,
    flagged,
    completed,
    cleared,
  }

  export enum EmailMailboxSyncStatus {
    idle,
    syncing,
    upToDate,
    authenticationError,
    policyError,
    unknownError,
    manualAccountRemovalRequired,
  }

  export enum EmailMailboxOtherAppReadAccess {
    systemOnly,
    full,
    none,
  }

  export enum EmailMailboxOtherAppWriteAccess {
    none,
    limited,
  }

  export enum EmailMailboxAllowedSmimeEncryptionAlgorithmNegotiation {
    none,
    strongAlgorithm,
    anyAlgorithm,
  }

  export enum EmailMailboxSmimeEncryptionAlgorithm {
    any,
    tripleDes,
    des,
    rC2128Bit,
    rC264Bit,
    rC240Bit,
  }

  export enum EmailMailboxSmimeSigningAlgorithm {
    any,
    sha1,
    mD5,
  }

  export enum EmailMailboxAutoReplyMessageResponseKind {
    html,
    plainText,
  }

  export enum EmailQuerySearchScope {
    local,
    server,
  }

  export enum EmailRecipientResolutionStatus {
    success,
    recipientNotFound,
    ambiguousRecipient,
    noCertificate,
    certificateRequestLimitReached,
    cannotResolveDistributionList,
    serverError,
    unknownFailure,
  }

  export enum EmailMessageSmimeKind {
    none,
    clearSigned,
    opaqueSigned,
    encrypted,
  }

  export enum EmailMailboxEmptyFolderStatus {
    success,
    networkError,
    permissionsError,
    serverError,
    unknownFailure,
    couldNotDeleteEverything,
  }

  export enum EmailMailboxCreateFolderStatus {
    success,
    networkError,
    permissionsError,
    serverError,
    unknownFailure,
    nameCollision,
    serverRejected,
  }

  export enum EmailMailboxDeleteFolderStatus {
    success,
    networkError,
    permissionsError,
    serverError,
    unknownFailure,
    couldNotDeleteEverything,
  }

  export class EmailMessage {
    subject: String;
    body: String;
    bcc: Object;
    cC: Object;
    attachments: Object;
    to: Object;
    allowInternetImages: Boolean;
    flagState: EmailFlagState;
    estimatedDownloadSizeInBytes: Number;
    downloadState: EmailMessageDownloadState;
    importance: EmailImportance;
    irmInfo: EmailIrmInfo;
    originalCodePage: Number;
    sentTime: Date;
    sender: EmailRecipient;
    remoteId: String;
    preview: String;
    messageClass: String;
    meetingInfo: EmailMeetingInfo;
    lastResponseKind: EmailMessageResponseKind;
    isSeen: Boolean;
    isRead: Boolean;
    isServerSearchMessage: Boolean;
    isSmartSendable: Boolean;
    mailboxId: String;
    changeNumber: Number;
    conversationId: String;
    normalizedSubject: String;
    folderId: String;
    hasPartialBodies: Boolean;
    id: String;
    inResponseToMessageId: String;
    isDraftMessage: Boolean;
    smimeKind: EmailMessageSmimeKind;
    smimeData: Object;
    sentRepresenting: EmailRecipient;
    replyTo: Object;
    constructor();

    getBodyStream(type: EmailMessageBodyKind): Object;

    setBodyStream(type: EmailMessageBodyKind, stream: Object): void;

  }

  export class EmailStore {
    constructor();

    findMailboxesAsync(callback: (error: Error, result: Object) => void): void ;

    getMailboxAsync(id: String, callback: (error: Error, result: EmailMailbox) => void): void ;

    getConversationAsync(id: String, callback: (error: Error, result: EmailConversation) => void): void ;

    getFolderAsync(id: String, callback: (error: Error, result: EmailFolder) => void): void ;

    getMessageAsync(id: String, callback: (error: Error, result: EmailMessage) => void): void ;

    createMailboxAsync(accountName: String, accountAddress: String, callback: (error: Error, result: EmailMailbox) => void): void ;
    createMailboxAsync(accountName: String, accountAddress: String, userDataAccountId: String, callback: (error: Error, result: EmailMailbox) => void): void ;

    getConversationReader(): EmailConversationReader;
    getConversationReader(options: EmailQueryOptions): EmailConversationReader;

    getMessageReader(): EmailMessageReader;
    getMessageReader(options: EmailQueryOptions): EmailMessageReader;

  }

  export class EmailManagerForUser {
    user: Object;
    constructor();

    showComposeNewEmailAsync(message: EmailMessage, callback: (error: Error) => void): void ;

    requestStoreAsync(accessType: EmailStoreAccessType, callback: (error: Error, result: EmailStore) => void): void ;

  }

  export class EmailMailbox {
    otherAppWriteAccess: EmailMailboxOtherAppWriteAccess;
    mailAddress: String;
    otherAppReadAccess: EmailMailboxOtherAppReadAccess;
    displayName: String;
    id: String;
    isDataEncryptedUnderLock: Boolean;
    isOwnedByCurrentApp: Boolean;
    mailAddressAliases: Object;
    capabilities: EmailMailboxCapabilities;
    changeTracker: EmailMailboxChangeTracker;
    policies: EmailMailboxPolicies;
    sourceDisplayName: String;
    syncManager: EmailMailboxSyncManager;
    userDataAccountId: String;
    linkedMailboxId: String;
    networkAccountId: String;
    networkId: String;
    constructor();

    resolveRecipientsAsync(recipients: Object, callback: (error: Error, result: Object) => void): void ;

    validateCertificatesAsync(certificates: Object, callback: (error: Error, result: Object) => void): void ;

    tryEmptyFolderAsync(folderId: String, callback: (error: Error, result: EmailMailboxEmptyFolderStatus) => void): void ;

    tryCreateFolderAsync(parentFolderId: String, name: String, callback: (error: Error, result: EmailMailboxCreateFolderResult) => void): void ;

    tryDeleteFolderAsync(folderId: String, callback: (error: Error, result: EmailMailboxDeleteFolderStatus) => void): void ;

    registerSyncManagerAsync(callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    getConversationAsync(id: String, callback: (error: Error, result: EmailConversation) => void): void ;

    getFolderAsync(id: String, callback: (error: Error, result: EmailFolder) => void): void ;

    getMessageAsync(id: String, callback: (error: Error, result: EmailMessage) => void): void ;

    getSpecialFolderAsync(folderType: EmailSpecialFolderKind, callback: (error: Error, result: EmailFolder) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    markMessageAsSeenAsync(messageId: String, callback: (error: Error) => void): void ;

    markFolderAsSeenAsync(folderId: String, callback: (error: Error) => void): void ;

    markMessageReadAsync(messageId: String, isRead: Boolean, callback: (error: Error) => void): void ;

    changeMessageFlagStateAsync(messageId: String, flagState: EmailFlagState, callback: (error: Error) => void): void ;

    tryMoveMessageAsync(messageId: String, newParentFolderId: String, callback: (error: Error, result: Boolean) => void): void ;

    tryMoveFolderAsync(folderId: String, newParentFolderId: String, callback: (error: Error, result: Boolean) => void): void ;
    tryMoveFolderAsync(folderId: String, newParentFolderId: String, newFolderName: String, callback: (error: Error, result: Boolean) => void): void ;

    deleteMessageAsync(messageId: String, callback: (error: Error) => void): void ;

    markFolderSyncEnabledAsync(folderId: String, isSyncEnabled: Boolean, callback: (error: Error) => void): void ;

    sendMessageAsync(message: EmailMessage, callback: (error: Error) => void): void ;
    sendMessageAsync(message: EmailMessage, smartSend: Boolean, callback: (error: Error) => void): void ;

    saveDraftAsync(message: EmailMessage, callback: (error: Error) => void): void ;

    downloadMessageAsync(messageId: String, callback: (error: Error) => void): void ;

    downloadAttachmentAsync(attachmentId: String, callback: (error: Error) => void): void ;

    createResponseMessageAsync(messageId: String, responseType: EmailMessageResponseKind, subject: String, responseHeaderType: EmailMessageBodyKind, responseHeader: String, callback: (error: Error, result: EmailMessage) => void): void ;

    tryUpdateMeetingResponseAsync(meeting: EmailMessage, response: EmailMeetingResponseType, subject: String, comment: String, sendUpdate: Boolean, callback: (error: Error, result: Boolean) => void): void ;

    tryForwardMeetingAsync(meeting: EmailMessage, recipients: Object, subject: String, forwardHeaderType: EmailMessageBodyKind, forwardHeader: String, comment: String, callback: (error: Error, result: Boolean) => void): void ;

    tryProposeNewTimeForMeetingAsync(meeting: EmailMessage, newStartTime: Date, newDuration: Number, subject: String, comment: String, callback: (error: Error, result: Boolean) => void): void ;

    trySetAutoReplySettingsAsync(autoReplySettings: EmailMailboxAutoReplySettings, callback: (error: Error, result: Boolean) => void): void ;

    tryGetAutoReplySettingsAsync(requestedFormat: EmailMailboxAutoReplyMessageResponseKind, callback: (error: Error, result: EmailMailboxAutoReplySettings) => void): void ;

    getChangeTracker(identity: String): EmailMailboxChangeTracker;

    getConversationReader(): EmailConversationReader;
    getConversationReader(options: EmailQueryOptions): EmailConversationReader;

    getMessageReader(): EmailMessageReader;
    getMessageReader(options: EmailQueryOptions): EmailMessageReader;

    addListener(type: "MailboxChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MailboxChanged", listener: (ev: Event) => void): void ;
    on(type: "MailboxChanged", listener: (ev: Event) => void): void ;
    off(type: "MailboxChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class EmailConversationReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: EmailConversationBatch) => void): void ;

  }

  export class EmailQueryOptions {
    sortProperty: EmailQuerySortProperty;
    sortDirection: EmailQuerySortDirection;
    kind: EmailQueryKind;
    folderIds: Object;
    textSearch: EmailQueryTextSearch;
    constructor();
    constructor(text: String);
    constructor(text: String, fields: EmailQuerySearchFields);

  }

  export class EmailMessageReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: EmailMessageBatch) => void): void ;

  }

  export class EmailConversation {
    flagState: EmailFlagState;
    hasAttachment: Boolean;
    id: String;
    importance: EmailImportance;
    lastEmailResponseKind: EmailMessageResponseKind;
    latestSender: EmailRecipient;
    mailboxId: String;
    messageCount: Number;
    mostRecentMessageId: String;
    mostRecentMessageTime: Date;
    preview: String;
    subject: String;
    unreadMessageCount: Number;
    constructor();

    findMessagesAsync(callback: (error: Error, result: Object) => void): void ;
    findMessagesAsync(count: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class EmailFolder {
    remoteId: String;
    lastSuccessfulSyncTime: Date;
    isSyncEnabled: Boolean;
    displayName: String;
    id: String;
    kind: EmailSpecialFolderKind;
    mailboxId: String;
    parentFolderId: String;
    constructor();

    createFolderAsync(name: String, callback: (error: Error, result: EmailFolder) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    findChildFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getMessageAsync(id: String, callback: (error: Error, result: EmailMessage) => void): void ;

    getMessageCountsAsync(callback: (error: Error, result: EmailItemCounts) => void): void ;

    tryMoveAsync(newParentFolder: EmailFolder, callback: (error: Error, result: Boolean) => void): void ;
    tryMoveAsync(newParentFolder: EmailFolder, newFolderName: String, callback: (error: Error, result: Boolean) => void): void ;

    trySaveAsync(callback: (error: Error, result: Boolean) => void): void ;

    saveMessageAsync(message: EmailMessage, callback: (error: Error) => void): void ;

    getConversationReader(): EmailConversationReader;
    getConversationReader(options: EmailQueryOptions): EmailConversationReader;

    getMessageReader(): EmailMessageReader;
    getMessageReader(options: EmailQueryOptions): EmailMessageReader;

  }

  export class EmailRecipient {
    name: String;
    address: String;
    constructor();
    constructor(address: String);
    constructor(address: String, name: String);

  }

  export class EmailIrmTemplate {
    name: String;
    id: String;
    description: String;
    constructor();
    constructor(id: String, name: String, description: String);

  }

  export class EmailIrmInfo {
    canRemoveIrmOnResponse: Boolean;
    canPrintData: Boolean;
    canModifyRecipientsOnResponse: Boolean;
    canForward: Boolean;
    canExtractData: Boolean;
    canReply: Boolean;
    canEdit: Boolean;
    template: EmailIrmTemplate;
    isProgramaticAccessAllowed: Boolean;
    isIrmOriginator: Boolean;
    expirationDate: Date;
    canReplyAll: Boolean;
    constructor();
    constructor(expiration: Date, irmTemplate: EmailIrmTemplate);

  }

  export class EmailAttachment {
    fileName: String;
    data: Object;
    mimeType: String;
    isInline: Boolean;
    estimatedDownloadSizeInBytes: Number;
    downloadState: EmailAttachmentDownloadState;
    contentLocation: String;
    contentId: String;
    id: String;
    isFromBaseMessage: Boolean;
    constructor();
    constructor(fileName: String, data: Object, mimeType: String);
    constructor(fileName: String, data: Object);

  }

  export class EmailMeetingInfo {
    location: String;
    isResponseRequested: Boolean;
    isAllDay: Boolean;
    allowNewTimeProposal: Boolean;
    duration: Number;
    appointmentRoamingId: String;
    appointmentOriginalStartTime: Date;
    proposedDuration: Number;
    remoteChangeNumber: Number;
    startTime: Date;
    recurrenceStartTime: Date;
    recurrence: Object;
    proposedStartTime: Date;
    isReportedOutOfDateByServer: Boolean;
    constructor();

  }

  export class EmailMailboxChangedDeferral {
    constructor();

    complete(): void;

  }

  export class EmailMailboxCapabilities {
    canSmartSend: Boolean;
    canUpdateMeetingResponses: Boolean;
    canServerSearchMailbox: Boolean;
    canServerSearchFolders: Boolean;
    canForwardMeetings: Boolean;
    canProposeNewTimeForMeetings: Boolean;
    canGetAndSetInternalAutoReplies: Boolean;
    canGetAndSetExternalAutoReplies: Boolean;
    canValidateCertificates: Boolean;
    canResolveRecipients: Boolean;
    canMoveFolder: Boolean;
    canEmptyFolder: Boolean;
    canDeleteFolder: Boolean;
    canCreateFolder: Boolean;
    constructor();

  }

  export class EmailMailboxChangeTracker {
    isTracking: Boolean;
    constructor();

    enable(): void;

    getChangeReader(): EmailMailboxChangeReader;

    reset(): void;

  }

  export class EmailMailboxPolicies {
    requiredSmimeSigningAlgorithm: EmailMailboxSmimeSigningAlgorithm;
    requiredSmimeEncryptionAlgorithm: EmailMailboxSmimeEncryptionAlgorithm;
    allowedSmimeEncryptionAlgorithmNegotiation: EmailMailboxAllowedSmimeEncryptionAlgorithmNegotiation;
    allowSmimeSoftCertificates: Boolean;
    mustSignSmimeMessages: Boolean;
    mustEncryptSmimeMessages: Boolean;
    constructor();

  }

  export class EmailMailboxSyncManager {
    status: EmailMailboxSyncStatus;
    lastSuccessfulSyncTime: Date;
    lastAttemptedSyncTime: Date;
    constructor();

    syncAsync(callback: (error: Error, result: Boolean) => void): void ;

    addListener(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class EmailMailboxChangedEventArgs {
    constructor();

    getDeferral(): EmailMailboxChangedDeferral;

  }

  export class EmailMailboxAutoReplySettings {
    startTime: Date;
    responseKind: EmailMailboxAutoReplyMessageResponseKind;
    isEnabled: Boolean;
    endTime: Date;
    internalReply: EmailMailboxAutoReply;
    knownExternalReply: EmailMailboxAutoReply;
    unknownExternalReply: EmailMailboxAutoReply;
    constructor();

  }

  export class EmailRecipientResolutionResult {
    status: EmailRecipientResolutionStatus;
    publicKeys: Object;
    constructor();

    setPublicKeys(value: Object): void;

  }

  export class EmailMailboxCreateFolderResult {
    folder: EmailFolder;
    status: EmailMailboxCreateFolderStatus;
    constructor();

  }

  export class EmailMailboxAutoReply {
    response: String;
    isEnabled: Boolean;
    constructor();

  }

  export class EmailItemCounts {
    flagged: Number;
    important: Number;
    total: Number;
    unread: Number;
    constructor();

  }

  export class EmailQueryTextSearch {
    text: String;
    searchScope: EmailQuerySearchScope;
    fields: EmailQuerySearchFields;
    constructor();

  }

  export class EmailConversationBatch {
    conversations: Object;
    status: EmailBatchStatus;
    constructor();

  }

  export class EmailMessageBatch {
    messages: Object;
    status: EmailBatchStatus;
    constructor();

  }

  export class EmailMailboxAction {
    changeNumber: Number;
    kind: EmailMailboxActionKind;
    constructor();

  }

  export class EmailMailboxChange {
    changeType: EmailMailboxChangeType;
    folder: EmailFolder;
    mailboxActions: Object;
    message: EmailMessage;
    constructor();

  }

  export class EmailMailboxChangeReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;

    acceptChanges(): void;

    acceptChangesThrough(lastChangeToAcknowledge: EmailMailboxChange): void;

  }

  export class EmailManager {
    constructor();

    static requestStoreAsync(accessType: EmailStoreAccessType, callback: (error: Error, result: EmailStore) => void): void ;


    static showComposeNewEmailAsync(message: EmailMessage, callback: (error: Error) => void): void ;


    static getForUser(user: Object): EmailManagerForUser;


  }

  export class EmailStoreNotificationTriggerDetails {
    constructor();

  }

export * as dataprovider from "./applicationmodel.email.dataprovider.js";