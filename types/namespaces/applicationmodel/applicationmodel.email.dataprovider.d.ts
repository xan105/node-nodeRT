  export class EmailDataProviderConnection {
    constructor();

    start(): void;

    addListener(type: "CreateFolderRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CreateFolderRequested", listener: (ev: Event) => void): void ;
    on(type: "CreateFolderRequested", listener: (ev: Event) => void): void ;
    off(type: "CreateFolderRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "DeleteFolderRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DeleteFolderRequested", listener: (ev: Event) => void): void ;
    on(type: "DeleteFolderRequested", listener: (ev: Event) => void): void ;
    off(type: "DeleteFolderRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "DownloadAttachmentRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadAttachmentRequested", listener: (ev: Event) => void): void ;
    on(type: "DownloadAttachmentRequested", listener: (ev: Event) => void): void ;
    off(type: "DownloadAttachmentRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "DownloadMessageRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadMessageRequested", listener: (ev: Event) => void): void ;
    on(type: "DownloadMessageRequested", listener: (ev: Event) => void): void ;
    off(type: "DownloadMessageRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "EmptyFolderRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "EmptyFolderRequested", listener: (ev: Event) => void): void ;
    on(type: "EmptyFolderRequested", listener: (ev: Event) => void): void ;
    off(type: "EmptyFolderRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    on(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    off(type: "ForwardMeetingRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "GetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    on(type: "GetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    off(type: "GetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "MailboxSyncRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "MailboxSyncRequested", listener: (ev: Event) => void): void ;
    on(type: "MailboxSyncRequested", listener: (ev: Event) => void): void ;
    off(type: "MailboxSyncRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "MoveFolderRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "MoveFolderRequested", listener: (ev: Event) => void): void ;
    on(type: "MoveFolderRequested", listener: (ev: Event) => void): void ;
    off(type: "MoveFolderRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    on(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    off(type: "ProposeNewTimeForMeetingRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ResolveRecipientsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ResolveRecipientsRequested", listener: (ev: Event) => void): void ;
    on(type: "ResolveRecipientsRequested", listener: (ev: Event) => void): void ;
    off(type: "ResolveRecipientsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    on(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    off(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    on(type: "SetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    off(type: "SetAutoReplySettingsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    on(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    off(type: "UpdateMeetingResponseRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ValidateCertificatesRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ValidateCertificatesRequested", listener: (ev: Event) => void): void ;
    on(type: "ValidateCertificatesRequested", listener: (ev: Event) => void): void ;
    off(type: "ValidateCertificatesRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class EmailMailboxSyncManagerSyncRequestEventArgs {
    request: EmailMailboxSyncManagerSyncRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxDownloadMessageRequestEventArgs {
    request: EmailMailboxDownloadMessageRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxDownloadAttachmentRequestEventArgs {
    request: EmailMailboxDownloadAttachmentRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxCreateFolderRequestEventArgs {
    request: EmailMailboxCreateFolderRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxDeleteFolderRequestEventArgs {
    request: EmailMailboxDeleteFolderRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxEmptyFolderRequestEventArgs {
    request: EmailMailboxEmptyFolderRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxMoveFolderRequestEventArgs {
    request: EmailMailboxMoveFolderRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxUpdateMeetingResponseRequestEventArgs {
    request: EmailMailboxUpdateMeetingResponseRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxForwardMeetingRequestEventArgs {
    request: EmailMailboxForwardMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxProposeNewTimeForMeetingRequestEventArgs {
    request: EmailMailboxProposeNewTimeForMeetingRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxSetAutoReplySettingsRequestEventArgs {
    request: EmailMailboxSetAutoReplySettingsRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxGetAutoReplySettingsRequestEventArgs {
    request: EmailMailboxGetAutoReplySettingsRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxResolveRecipientsRequestEventArgs {
    request: EmailMailboxResolveRecipientsRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxValidateCertificatesRequestEventArgs {
    request: EmailMailboxValidateCertificatesRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailMailboxServerSearchReadBatchRequestEventArgs {
    request: EmailMailboxServerSearchReadBatchRequest;
    constructor();

    getDeferral(): Object;

  }

  export class EmailDataProviderTriggerDetails {
    connection: EmailDataProviderConnection;
    constructor();

  }

  export class EmailMailboxSyncManagerSyncRequest {
    emailMailboxId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxDownloadMessageRequest {
    emailMailboxId: String;
    emailMessageId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxDownloadAttachmentRequest {
    emailAttachmentId: String;
    emailMailboxId: String;
    emailMessageId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxCreateFolderRequest {
    emailMailboxId: String;
    name: String;
    parentFolderId: String;
    constructor();

    reportCompletedAsync(folder: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(status: Number, callback: (error: Error) => void): void ;

  }

  export class EmailMailboxDeleteFolderRequest {
    emailFolderId: String;
    emailMailboxId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(status: Number, callback: (error: Error) => void): void ;

  }

  export class EmailMailboxEmptyFolderRequest {
    emailFolderId: String;
    emailMailboxId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(status: Number, callback: (error: Error) => void): void ;

  }

  export class EmailMailboxMoveFolderRequest {
    emailFolderId: String;
    emailMailboxId: String;
    newFolderName: String;
    newParentFolderId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxUpdateMeetingResponseRequest {
    comment: String;
    emailMailboxId: String;
    emailMessageId: String;
    response: Number;
    sendUpdate: Boolean;
    subject: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxForwardMeetingRequest {
    comment: String;
    emailMailboxId: String;
    emailMessageId: String;
    forwardHeader: String;
    forwardHeaderType: Number;
    recipients: Object;
    subject: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxProposeNewTimeForMeetingRequest {
    comment: String;
    emailMailboxId: String;
    emailMessageId: String;
    newDuration: Number;
    newStartTime: Date;
    subject: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxSetAutoReplySettingsRequest {
    autoReplySettings: Object;
    emailMailboxId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxGetAutoReplySettingsRequest {
    emailMailboxId: String;
    requestedFormat: Number;
    constructor();

    reportCompletedAsync(autoReplySettings: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxResolveRecipientsRequest {
    emailMailboxId: String;
    recipients: Object;
    constructor();

    reportCompletedAsync(resolutionResults: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxValidateCertificatesRequest {
    certificates: Object;
    emailMailboxId: String;
    constructor();

    reportCompletedAsync(validationStatuses: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxServerSearchReadBatchRequest {
    emailFolderId: String;
    emailMailboxId: String;
    options: Object;
    sessionId: String;
    suggestedBatchSize: Number;
    constructor();

    saveMessageAsync(message: Object, callback: (error: Error) => void): void ;

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(batchStatus: Number, callback: (error: Error) => void): void ;

  }

