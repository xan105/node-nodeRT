  export class ISysStorageProviderEventSource {
    constructor();

    addListener(type: "EventReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "EventReceived", listener: (ev: Event) => void): void ;
    on(type: "EventReceived", listener: (ev: Event) => void): void ;
    off(type: "EventReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ISysStorageProviderHandlerFactory {
    constructor();

    getHttpRequestProvider(syncRootId: String): ISysStorageProviderHttpRequestProvider;

    getEventSource(syncRootId: String, eventName: String): ISysStorageProviderEventSource;

  }

  export class ISysStorageProviderHttpRequestProvider {
    constructor();

    sendRequestAsync(request: Object, callback: (error: Error, result: Object) => void): void ;

  }

  export class SysStorageProviderEventReceivedEventArgs {
    json: String;
    constructor();
    constructor(json: String);

  }

