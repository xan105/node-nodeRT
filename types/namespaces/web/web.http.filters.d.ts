  export class HttpProgress {
    stage: Number;
    bytesSent: Number;
    totalBytesToSend: Number;
    bytesReceived: Number;
    totalBytesToReceive: Number;
    retries: Number;
    constructor();
  }

  export enum HttpCacheReadBehavior {
    default,
    mostRecent,
    onlyFromCache,
    noCache,
  }

  export enum HttpCacheWriteBehavior {
    default,
    noCache,
  }

  export enum HttpCookieUsageBehavior {
    default,
    noCookies,
  }

  export class HttpBaseProtocolFilter {
    useProxy: Boolean;
    serverCredential: Object;
    proxyCredential: Object;
    maxConnectionsPerServer: Number;
    clientCertificate: Object;
    automaticDecompression: Boolean;
    allowUI: Boolean;
    allowAutoRedirect: Boolean;
    cacheControl: HttpCacheControl;
    cookieManager: Object;
    ignorableServerCertificateErrors: Object;
    maxVersion: Number;
    cookieUsageBehavior: HttpCookieUsageBehavior;
    user: Object;
    constructor();

    static createForUser(user: Object): HttpBaseProtocolFilter;


    sendRequestAsync(request: Object, callback: (error: Error, result: Object) => void): void ;

    clearAuthenticationCache(): void;

    close(): void;
    addListener(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    on(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    off(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HttpCacheControl {
    writeBehavior: HttpCacheWriteBehavior;
    readBehavior: HttpCacheReadBehavior;
    constructor();

  }

  export class HttpServerCustomValidationRequestedEventArgs {
    requestMessage: Object;
    serverCertificate: Object;
    serverCertificateErrorSeverity: Number;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

    reject(): void;

    getDeferral(): Object;

  }

  export class IHttpFilter {
    constructor();

    sendRequestAsync(request: Object, callback: (error: Error, result: Object) => void): void ;

  }

