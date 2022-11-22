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

  export class IHttpFilter {
    constructor();

    sendRequestAsync(request: Object, callback: (error: Error, result: Object) => void): void ;

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
    cookieManager: Object;
    ignorableServerCertificateErrors: Object;
    cacheControl: HttpCacheControl;
    maxVersion: Number;
    cookieUsageBehavior: HttpCookieUsageBehavior;
    constructor();

    sendRequestAsync(request: Object, callback: (error: Error, result: Object) => void): void ;

    close(): void;
    clearAuthenticationCache(): void;

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

