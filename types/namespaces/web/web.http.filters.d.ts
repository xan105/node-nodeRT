  export class HttpProgress {
    stage: number;
    bytesSent: number;
    totalBytesToSend: number;
    bytesReceived: number;
    totalBytesToReceive: number;
    retries: number;
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
    useProxy: boolean;
    serverCredential: Object;
    proxyCredential: Object;
    maxConnectionsPerServer: number;
    clientCertificate: Object;
    automaticDecompression: boolean;
    allowUI: boolean;
    allowAutoRedirect: boolean;
    cookieManager: Object;
    ignorableServerCertificateErrors: Object;
    cacheControl: HttpCacheControl;
    maxVersion: number;
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
    serverCertificateErrorSeverity: number;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

    reject(): void;

    getDeferral(): Object;

  }

