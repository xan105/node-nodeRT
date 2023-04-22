  export class HttpDiagnosticsContract {
    constructor();
  }

  export enum HttpDiagnosticRequestInitiator {
    parsedElement,
    script,
    image,
    link,
    style,
    xmlHttpRequest,
    media,
    htmlDownload,
    prefetch,
    other,
    crossOriginPreFlight,
    fetch,
    beacon,
  }

  export class HttpDiagnosticSourceLocation {
    columnNumber: number;
    lineNumber: number;
    sourceUri: Object;
    constructor();

  }

  export class HttpDiagnosticProviderRequestSentEventArgs {
    activityId: string;
    initiator: HttpDiagnosticRequestInitiator;
    message: Object;
    processId: number;
    sourceLocations: Object;
    threadId: number;
    timestamp: Date;
    constructor();

  }

  export class HttpDiagnosticProviderResponseReceivedEventArgs {
    activityId: string;
    message: Object;
    timestamp: Date;
    constructor();

  }

  export class HttpDiagnosticProviderRequestResponseTimestamps {
    cacheCheckedTimestamp: Date;
    connectionCompletedTimestamp: Date;
    connectionInitiatedTimestamp: Date;
    nameResolvedTimestamp: Date;
    requestCompletedTimestamp: Date;
    requestSentTimestamp: Date;
    responseCompletedTimestamp: Date;
    responseReceivedTimestamp: Date;
    sslNegotiatedTimestamp: Date;
    constructor();

  }

  export class HttpDiagnosticProviderRequestResponseCompletedEventArgs {
    activityId: string;
    initiator: HttpDiagnosticRequestInitiator;
    processId: number;
    requestedUri: Object;
    sourceLocations: Object;
    threadId: number;
    timestamps: HttpDiagnosticProviderRequestResponseTimestamps;
    constructor();

  }

  export class HttpDiagnosticProvider {
    constructor();

    static createFromProcessDiagnosticInfo(processDiagnosticInfo: Object): HttpDiagnosticProvider;


    start(): void;

    stop(): void;

    addListener(type: "RequestResponseCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "RequestResponseCompleted", listener: (ev: Event) => void): void ;
    on(type: "RequestResponseCompleted", listener: (ev: Event) => void): void ;
    off(type: "RequestResponseCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "RequestSent", listener: (ev: Event) => void): void ;
    removeListener(type: "RequestSent", listener: (ev: Event) => void): void ;
    on(type: "RequestSent", listener: (ev: Event) => void): void ;
    off(type: "RequestSent", listener: (ev: Event) => void): void ;
    
    addListener(type: "ResponseReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ResponseReceived", listener: (ev: Event) => void): void ;
    on(type: "ResponseReceived", listener: (ev: Event) => void): void ;
    off(type: "ResponseReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

