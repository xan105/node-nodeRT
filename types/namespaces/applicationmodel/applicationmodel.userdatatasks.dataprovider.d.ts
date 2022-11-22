  export class UserDataTaskDataProviderConnection {
    constructor();

    start(): void;

    addListener(type: "CompleteTaskRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CompleteTaskRequested", listener: (ev: Event) => void): void ;
    on(type: "CompleteTaskRequested", listener: (ev: Event) => void): void ;
    off(type: "CompleteTaskRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "CreateOrUpdateTaskRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CreateOrUpdateTaskRequested", listener: (ev: Event) => void): void ;
    on(type: "CreateOrUpdateTaskRequested", listener: (ev: Event) => void): void ;
    off(type: "CreateOrUpdateTaskRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "DeleteTaskRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DeleteTaskRequested", listener: (ev: Event) => void): void ;
    on(type: "DeleteTaskRequested", listener: (ev: Event) => void): void ;
    off(type: "DeleteTaskRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SkipOccurrenceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SkipOccurrenceRequested", listener: (ev: Event) => void): void ;
    on(type: "SkipOccurrenceRequested", listener: (ev: Event) => void): void ;
    off(type: "SkipOccurrenceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SyncRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SyncRequested", listener: (ev: Event) => void): void ;
    on(type: "SyncRequested", listener: (ev: Event) => void): void ;
    off(type: "SyncRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UserDataTaskListCreateOrUpdateTaskRequestEventArgs {
    request: UserDataTaskListCreateOrUpdateTaskRequest;
    constructor();

    getDeferral(): Object;

  }

  export class UserDataTaskListSyncManagerSyncRequestEventArgs {
    request: UserDataTaskListSyncManagerSyncRequest;
    constructor();

    getDeferral(): Object;

  }

  export class UserDataTaskListSkipOccurrenceRequestEventArgs {
    request: UserDataTaskListSkipOccurrenceRequest;
    constructor();

    getDeferral(): Object;

  }

  export class UserDataTaskListCompleteTaskRequestEventArgs {
    request: UserDataTaskListCompleteTaskRequest;
    constructor();

    getDeferral(): Object;

  }

  export class UserDataTaskListDeleteTaskRequestEventArgs {
    request: UserDataTaskListDeleteTaskRequest;
    constructor();

    getDeferral(): Object;

  }

  export class UserDataTaskDataProviderTriggerDetails {
    connection: UserDataTaskDataProviderConnection;
    constructor();

  }

  export class UserDataTaskListCreateOrUpdateTaskRequest {
    task: Object;
    taskListId: String;
    constructor();

    reportCompletedAsync(createdOrUpdatedUserDataTask: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class UserDataTaskListSyncManagerSyncRequest {
    taskListId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class UserDataTaskListSkipOccurrenceRequest {
    taskId: String;
    taskListId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class UserDataTaskListCompleteTaskRequest {
    taskId: String;
    taskListId: String;
    constructor();

    reportCompletedAsync(completedTaskId: String, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class UserDataTaskListDeleteTaskRequest {
    taskId: String;
    taskListId: String;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

