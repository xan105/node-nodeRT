  export class ContactDataProviderConnection {
    constructor();

    start(): void;

    addListener(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    on(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    off(type: "ServerSearchReadBatchRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SyncRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SyncRequested", listener: (ev: Event) => void): void ;
    on(type: "SyncRequested", listener: (ev: Event) => void): void ;
    off(type: "SyncRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "CreateOrUpdateContactRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CreateOrUpdateContactRequested", listener: (ev: Event) => void): void ;
    on(type: "CreateOrUpdateContactRequested", listener: (ev: Event) => void): void ;
    off(type: "CreateOrUpdateContactRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "DeleteContactRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DeleteContactRequested", listener: (ev: Event) => void): void ;
    on(type: "DeleteContactRequested", listener: (ev: Event) => void): void ;
    off(type: "DeleteContactRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ContactDataProviderTriggerDetails {
    connection: ContactDataProviderConnection;
    constructor();

  }

  export class ContactListCreateOrUpdateContactRequest {
    contact: Object;
    contactListId: String;
    constructor();

    reportCompletedAsync(createdOrUpdatedContact: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class ContactListCreateOrUpdateContactRequestEventArgs {
    request: ContactListCreateOrUpdateContactRequest;
    constructor();

    getDeferral(): Object;

  }

  export class ContactListDeleteContactRequest {
    contactId: String;
    contactListId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class ContactListDeleteContactRequestEventArgs {
    request: ContactListDeleteContactRequest;
    constructor();

    getDeferral(): Object;

  }

  export class ContactListServerSearchReadBatchRequest {
    contactListId: String;
    options: Object;
    sessionId: String;
    suggestedBatchSize: Number;
    constructor();

    saveContactAsync(contact: Object, callback: (error: Error) => void): void ;

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(batchStatus: Number, callback: (error: Error) => void): void ;

  }

  export class ContactListServerSearchReadBatchRequestEventArgs {
    request: ContactListServerSearchReadBatchRequest;
    constructor();

    getDeferral(): Object;

  }

  export class ContactListSyncManagerSyncRequest {
    contactListId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class ContactListSyncManagerSyncRequestEventArgs {
    request: ContactListSyncManagerSyncRequest;
    constructor();

    getDeferral(): Object;

  }

