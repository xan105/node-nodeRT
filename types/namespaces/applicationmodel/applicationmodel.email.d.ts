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
    subject: string;
    body: string;
    bcc: Object;
    cC: Object;
    attachments: Object;
    to: Object;
    allowInternetImages: boolean;
    flagState: EmailFlagState;
    estimatedDownloadSizeInBytes: number;
    downloadState: EmailMessageDownloadState;
    importance: EmailImportance;
    irmInfo: EmailIrmInfo;
    originalCodePage: number;
    sentTime: Date;
    sender: EmailRecipient;
    remoteId: string;
    preview: string;
    messageClass: string;
    meetingInfo: EmailMeetingInfo;
    lastResponseKind: EmailMessageResponseKind;
    isSeen: boolean;
    isRead: boolean;
    isServerSearchMessage: boolean;
    isSmartSendable: boolean;
    mailboxId: string;
    changeNumber: number;
    conversationId: string;
    normalizedSubject: string;
    folderId: string;
    hasPartialBodies: boolean;
    id: string;
    inResponseToMessageId: string;
    isDraftMessage: boolean;
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

    getMailboxAsync(id: string, callback: (error: Error, result: EmailMailbox) => void): void ;

    getConversationAsync(id: string, callback: (error: Error, result: EmailConversation) => void): void ;

    getFolderAsync(id: string, callback: (error: Error, result: EmailFolder) => void): void ;

    getMessageAsync(id: string, callback: (error: Error, result: EmailMessage) => void): void ;

    createMailboxAsync(accountName: string, accountAddress: string, callback: (error: Error, result: EmailMailbox) => void): void ;
    createMailboxAsync(accountName: string, accountAddress: string, userDataAccountId: string, callback: (error: Error, result: EmailMailbox) => void): void ;

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
    mailAddress: string;
    otherAppReadAccess: EmailMailboxOtherAppReadAccess;
    displayName: string;
    id: string;
    isDataEncryptedUnderLock: boolean;
    isOwnedByCurrentApp: boolean;
    mailAddressAliases: Object;
    capabilities: EmailMailboxCapabilities;
    changeTracker: EmailMailboxChangeTracker;
    policies: EmailMailboxPolicies;
    sourceDisplayName: string;
    syncManager: EmailMailboxSyncManager;
    userDataAccountId: string;
    linkedMailboxId: string;
    networkAccountId: string;
    networkId: string;
    constructor();

    resolveRecipientsAsync(recipients: Object, callback: (error: Error, result: Object) => void): void ;

    validateCertificatesAsync(certificates: Object, callback: (error: Error, result: Object) => void): void ;

    tryEmptyFolderAsync(folderId: string, callback: (error: Error, result: EmailMailboxEmptyFolderStatus) => void): void ;

    tryCreateFolderAsync(parentFolderId: string, name: string, callback: (error: Error, result: EmailMailboxCreateFolderResult) => void): void ;

    tryDeleteFolderAsync(folderId: string, callback: (error: Error, result: EmailMailboxDeleteFolderStatus) => void): void ;

    registerSyncManagerAsync(callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    getConversationAsync(id: string, callback: (error: Error, result: EmailConversation) => void): void ;

    getFolderAsync(id: string, callback: (error: Error, result: EmailFolder) => void): void ;

    getMessageAsync(id: string, callback: (error: Error, result: EmailMessage) => void): void ;

    getSpecialFolderAsync(folderType: EmailSpecialFolderKind, callback: (error: Error, result: EmailFolder) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    markMessageAsSeenAsync(messageId: string, callback: (error: Error) => void): void ;

    markFolderAsSeenAsync(folderId: string, callback: (error: Error) => void): void ;

    markMessageReadAsync(messageId: string, isRead: boolean, callback: (error: Error) => void): void ;

    changeMessageFlagStateAsync(messageId: string, flagState: EmailFlagState, callback: (error: Error) => void): void ;

    tryMoveMessageAsync(messageId: string, newParentFolderId: string, callback: (error: Error, result: boolean) => void): void ;

    tryMoveFolderAsync(folderId: string, newParentFolderId: string, callback: (error: Error, result: boolean) => void): void ;
    tryMoveFolderAsync(folderId: string, newParentFolderId: string, newFolderName: string, callback: (error: Error, result: boolean) => void): void ;

    deleteMessageAsync(messageId: string, callback: (error: Error) => void): void ;

    markFolderSyncEnabledAsync(folderId: string, isSyncEnabled: boolean, callback: (error: Error) => void): void ;

    sendMessageAsync(message: EmailMessage, callback: (error: Error) => void): void ;
    sendMessageAsync(message: EmailMessage, smartSend: boolean, callback: (error: Error) => void): void ;

    saveDraftAsync(message: EmailMessage, callback: (error: Error) => void): void ;

    downloadMessageAsync(messageId: string, callback: (error: Error) => void): void ;

    downloadAttachmentAsync(attachmentId: string, callback: (error: Error) => void): void ;

    createResponseMessageAsync(messageId: string, responseType: EmailMessageResponseKind, subject: string, responseHeaderType: EmailMessageBodyKind, responseHeader: string, callback: (error: Error, result: EmailMessage) => void): void ;

    tryUpdateMeetingResponseAsync(meeting: EmailMessage, response: EmailMeetingResponseType, subject: string, comment: string, sendUpdate: boolean, callback: (error: Error, result: boolean) => void): void ;

    tryForwardMeetingAsync(meeting: EmailMessage, recipients: Object, subject: string, forwardHeaderType: EmailMessageBodyKind, forwardHeader: string, comment: string, callback: (error: Error, result: boolean) => void): void ;

    tryProposeNewTimeForMeetingAsync(meeting: EmailMessage, newStartTime: Date, newDuration: number, subject: string, comment: string, callback: (error: Error, result: boolean) => void): void ;

    trySetAutoReplySettingsAsync(autoReplySettings: EmailMailboxAutoReplySettings, callback: (error: Error, result: boolean) => void): void ;

    tryGetAutoReplySettingsAsync(requestedFormat: EmailMailboxAutoReplyMessageResponseKind, callback: (error: Error, result: EmailMailboxAutoReplySettings) => void): void ;

    getChangeTracker(identity: string): EmailMailboxChangeTracker;

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
    constructor(text: string);
    constructor(text: string, fields: EmailQuerySearchFields);

  }

  export class EmailMessageReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: EmailMessageBatch) => void): void ;

  }

  export class EmailConversation {
    flagState: EmailFlagState;
    hasAttachment: boolean;
    id: string;
    importance: EmailImportance;
    lastEmailResponseKind: EmailMessageResponseKind;
    latestSender: EmailRecipient;
    mailboxId: string;
    messageCount: number;
    mostRecentMessageId: string;
    mostRecentMessageTime: Date;
    preview: string;
    subject: string;
    unreadMessageCount: number;
    constructor();

    findMessagesAsync(callback: (error: Error, result: Object) => void): void ;
    findMessagesAsync(count: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class EmailFolder {
    remoteId: string;
    lastSuccessfulSyncTime: Date;
    isSyncEnabled: boolean;
    displayName: string;
    id: string;
    kind: EmailSpecialFolderKind;
    mailboxId: string;
    parentFolderId: string;
    constructor();

    createFolderAsync(name: string, callback: (error: Error, result: EmailFolder) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    findChildFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getMessageAsync(id: string, callback: (error: Error, result: EmailMessage) => void): void ;

    getMessageCountsAsync(callback: (error: Error, result: EmailItemCounts) => void): void ;

    tryMoveAsync(newParentFolder: EmailFolder, callback: (error: Error, result: boolean) => void): void ;
    tryMoveAsync(newParentFolder: EmailFolder, newFolderName: string, callback: (error: Error, result: boolean) => void): void ;

    trySaveAsync(callback: (error: Error, result: boolean) => void): void ;

    saveMessageAsync(message: EmailMessage, callback: (error: Error) => void): void ;

    getConversationReader(): EmailConversationReader;
    getConversationReader(options: EmailQueryOptions): EmailConversationReader;

    getMessageReader(): EmailMessageReader;
    getMessageReader(options: EmailQueryOptions): EmailMessageReader;

  }

  export class EmailRecipient {
    name: string;
    address: string;
    constructor();
    constructor(address: string);
    constructor(address: string, name: string);

  }

  export class EmailIrmTemplate {
    name: string;
    id: string;
    description: string;
    constructor();
    constructor(id: string, name: string, description: string);

  }

  export class EmailIrmInfo {
    canRemoveIrmOnResponse: boolean;
    canPrintData: boolean;
    canModifyRecipientsOnResponse: boolean;
    canForward: boolean;
    canExtractData: boolean;
    canReply: boolean;
    canEdit: boolean;
    template: EmailIrmTemplate;
    isProgramaticAccessAllowed: boolean;
    isIrmOriginator: boolean;
    expirationDate: Date;
    canReplyAll: boolean;
    constructor();
    constructor(expiration: Date, irmTemplate: EmailIrmTemplate);

  }

  export class EmailAttachment {
    fileName: string;
    data: Object;
    mimeType: string;
    isInline: boolean;
    estimatedDownloadSizeInBytes: number;
    downloadState: EmailAttachmentDownloadState;
    contentLocation: string;
    contentId: string;
    id: string;
    isFromBaseMessage: boolean;
    constructor();
    constructor(fileName: string, data: Object, mimeType: string);
    constructor(fileName: string, data: Object);

  }

  export class EmailMeetingInfo {
    location: string;
    isResponseRequested: boolean;
    isAllDay: boolean;
    allowNewTimeProposal: boolean;
    duration: number;
    appointmentRoamingId: string;
    appointmentOriginalStartTime: Date;
    proposedDuration: number;
    remoteChangeNumber: number;
    startTime: Date;
    recurrenceStartTime: Date;
    recurrence: Object;
    proposedStartTime: Date;
    isReportedOutOfDateByServer: boolean;
    constructor();

  }

  export class EmailMailboxChangedDeferral {
    constructor();

    complete(): void;

  }

  export class EmailMailboxCapabilities {
    canSmartSend: boolean;
    canUpdateMeetingResponses: boolean;
    canServerSearchMailbox: boolean;
    canServerSearchFolders: boolean;
    canForwardMeetings: boolean;
    canProposeNewTimeForMeetings: boolean;
    canGetAndSetInternalAutoReplies: boolean;
    canGetAndSetExternalAutoReplies: boolean;
    canValidateCertificates: boolean;
    canResolveRecipients: boolean;
    canMoveFolder: boolean;
    canEmptyFolder: boolean;
    canDeleteFolder: boolean;
    canCreateFolder: boolean;
    constructor();

  }

  export class EmailMailboxChangeTracker {
    isTracking: boolean;
    constructor();

    enable(): void;

    getChangeReader(): EmailMailboxChangeReader;

    reset(): void;

  }

  export class EmailMailboxPolicies {
    requiredSmimeSigningAlgorithm: EmailMailboxSmimeSigningAlgorithm;
    requiredSmimeEncryptionAlgorithm: EmailMailboxSmimeEncryptionAlgorithm;
    allowedSmimeEncryptionAlgorithmNegotiation: EmailMailboxAllowedSmimeEncryptionAlgorithmNegotiation;
    allowSmimeSoftCertificates: boolean;
    mustSignSmimeMessages: boolean;
    mustEncryptSmimeMessages: boolean;
    constructor();

  }

  export class EmailMailboxSyncManager {
    status: EmailMailboxSyncStatus;
    lastSuccessfulSyncTime: Date;
    lastAttemptedSyncTime: Date;
    constructor();

    syncAsync(callback: (error: Error, result: boolean) => void): void ;

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
    isEnabled: boolean;
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
    response: string;
    isEnabled: boolean;
    constructor();

  }

  export class EmailItemCounts {
    flagged: number;
    important: number;
    total: number;
    unread: number;
    constructor();

  }

  export class EmailQueryTextSearch {
    text: string;
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
    changeNumber: number;
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