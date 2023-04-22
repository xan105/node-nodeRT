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
    emailMailboxId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxDownloadMessageRequest {
    emailMailboxId: string;
    emailMessageId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxDownloadAttachmentRequest {
    emailAttachmentId: string;
    emailMailboxId: string;
    emailMessageId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxCreateFolderRequest {
    emailMailboxId: string;
    name: string;
    parentFolderId: string;
    constructor();

    reportCompletedAsync(folder: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(status: number, callback: (error: Error) => void): void ;

  }

  export class EmailMailboxDeleteFolderRequest {
    emailFolderId: string;
    emailMailboxId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(status: number, callback: (error: Error) => void): void ;

  }

  export class EmailMailboxEmptyFolderRequest {
    emailFolderId: string;
    emailMailboxId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(status: number, callback: (error: Error) => void): void ;

  }

  export class EmailMailboxMoveFolderRequest {
    emailFolderId: string;
    emailMailboxId: string;
    newFolderName: string;
    newParentFolderId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxUpdateMeetingResponseRequest {
    comment: string;
    emailMailboxId: string;
    emailMessageId: string;
    response: number;
    sendUpdate: boolean;
    subject: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxForwardMeetingRequest {
    comment: string;
    emailMailboxId: string;
    emailMessageId: string;
    forwardHeader: string;
    forwardHeaderType: number;
    recipients: Object;
    subject: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxProposeNewTimeForMeetingRequest {
    comment: string;
    emailMailboxId: string;
    emailMessageId: string;
    newDuration: number;
    newStartTime: Date;
    subject: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxSetAutoReplySettingsRequest {
    autoReplySettings: Object;
    emailMailboxId: string;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxGetAutoReplySettingsRequest {
    emailMailboxId: string;
    requestedFormat: number;
    constructor();

    reportCompletedAsync(autoReplySettings: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxResolveRecipientsRequest {
    emailMailboxId: string;
    recipients: Object;
    constructor();

    reportCompletedAsync(resolutionResults: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxValidateCertificatesRequest {
    certificates: Object;
    emailMailboxId: string;
    constructor();

    reportCompletedAsync(validationStatuses: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class EmailMailboxServerSearchReadBatchRequest {
    emailFolderId: string;
    emailMailboxId: string;
    options: Object;
    sessionId: string;
    suggestedBatchSize: number;
    constructor();

    saveMessageAsync(message: Object, callback: (error: Error) => void): void ;

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(batchStatus: number, callback: (error: Error) => void): void ;

  }

