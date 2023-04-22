  export class HttpProgress {
    stage: HttpProgressStage;
    bytesSent: number;
    totalBytesToSend: number;
    bytesReceived: number;
    totalBytesToReceive: number;
    retries: number;
    constructor();
  }

  export enum HttpVersion {
    none,
    http10,
    http11,
    http20,
  }

  export enum HttpCompletionOption {
    responseContentRead,
    responseHeadersRead,
  }

  export enum HttpStatusCode {
    none,
    continue,
    switchingProtocols,
    processing,
    ok,
    created,
    accepted,
    nonAuthoritativeInformation,
    noContent,
    resetContent,
    partialContent,
    multiStatus,
    alreadyReported,
    iMUsed,
    multipleChoices,
    movedPermanently,
    found,
    seeOther,
    notModified,
    useProxy,
    temporaryRedirect,
    permanentRedirect,
    badRequest,
    unauthorized,
    paymentRequired,
    forbidden,
    notFound,
    methodNotAllowed,
    notAcceptable,
    proxyAuthenticationRequired,
    requestTimeout,
    conflict,
    gone,
    lengthRequired,
    preconditionFailed,
    requestEntityTooLarge,
    requestUriTooLong,
    unsupportedMediaType,
    requestedRangeNotSatisfiable,
    expectationFailed,
    unprocessableEntity,
    locked,
    failedDependency,
    upgradeRequired,
    preconditionRequired,
    tooManyRequests,
    requestHeaderFieldsTooLarge,
    internalServerError,
    notImplemented,
    badGateway,
    serviceUnavailable,
    gatewayTimeout,
    httpVersionNotSupported,
    variantAlsoNegotiates,
    insufficientStorage,
    loopDetected,
    notExtended,
    networkAuthenticationRequired,
  }

  export enum HttpProgressStage {
    none,
    detectingProxy,
    resolvingName,
    connectingToServer,
    negotiatingSsl,
    sendingHeaders,
    sendingContent,
    waitingForResponse,
    receivingHeaders,
    receivingContent,
  }

  export enum HttpResponseMessageSource {
    none,
    cache,
    network,
  }

  export class HttpRequestMessage {
    requestUri: Object;
    method: HttpMethod;
    content: IHttpContent;
    headers: Object;
    properties: Object;
    transportInformation: HttpTransportInformation;
    constructor();
    constructor(method: HttpMethod, uri: Object);

    close(): void;
    toString(): string;

  }

  export class HttpResponseMessage {
    version: HttpVersion;
    statusCode: HttpStatusCode;
    source: HttpResponseMessageSource;
    requestMessage: HttpRequestMessage;
    reasonPhrase: string;
    content: IHttpContent;
    headers: Object;
    isSuccessStatusCode: boolean;
    constructor();
    constructor(statusCode: HttpStatusCode);

    ensureSuccessStatusCode(): HttpResponseMessage;

    close(): void;
    toString(): string;

  }

  export class HttpClient {
    defaultRequestHeaders: Object;
    constructor();
    constructor(filter: Object);

    deleteAsync(uri: Object, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    getAsync(uri: Object, callback: (error: Error, result: HttpResponseMessage) => void): void ;
    getAsync(uri: Object, completionOption: HttpCompletionOption, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    getBufferAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    getInputStreamAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    getStringAsync(uri: Object, callback: (error: Error, result: string) => void): void ;

    postAsync(uri: Object, content: IHttpContent, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    putAsync(uri: Object, content: IHttpContent, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    sendRequestAsync(request: HttpRequestMessage, callback: (error: Error, result: HttpResponseMessage) => void): void ;
    sendRequestAsync(request: HttpRequestMessage, completionOption: HttpCompletionOption, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    close(): void;
    toString(): string;

  }

  export class IHttpContent {
    headers: Object;
    constructor();

    bufferAllAsync(callback: (error: Error, result: number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: string) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    tryComputeLength(length: number): boolean;

  }

  export class HttpCookie {
    value: string;
    secure: boolean;
    httpOnly: boolean;
    expires: Date;
    domain: string;
    name: string;
    path: string;
    constructor();
    constructor(name: string, domain: string, path: string);

    toString(): string;

  }

  export class HttpCookieCollection {
    constructor();

    getAt(index: number): HttpCookie;

    indexOf(value: HttpCookie, index: number): boolean;

    getMany();
    first(): Object;

  }

  export class HttpMethod {
    static delete: HttpMethod;
    static get: HttpMethod;
    static head: HttpMethod;
    static options: HttpMethod;
    static patch: HttpMethod;
    static post: HttpMethod;
    static put: HttpMethod;
    method: string;
    constructor();
    constructor(method: string);

    toString(): string;

  }

  export class HttpTransportInformation {
    serverCertificate: Object;
    serverCertificateErrorSeverity: number;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

    toString(): string;

  }

  export class HttpStringContent {
    headers: Object;
    constructor();
    constructor(content: string);
    constructor(content: string, encoding: number);
    constructor(content: string, encoding: number, mediaType: string);

    bufferAllAsync(callback: (error: Error, result: number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: string) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    tryComputeLength(length: number): boolean;

    close(): void;
    toString(): string;

  }

  export class HttpBufferContent {
    headers: Object;
    constructor();
    constructor(content: Object);
    constructor(content: Object, offset: number, count: number);

    bufferAllAsync(callback: (error: Error, result: number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: string) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    tryComputeLength(length: number): boolean;

    close(): void;
    toString(): string;

  }

  export class HttpStreamContent {
    headers: Object;
    constructor();
    constructor(content: Object);

    bufferAllAsync(callback: (error: Error, result: number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: string) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    tryComputeLength(length: number): boolean;

    close(): void;
    toString(): string;

  }

  export class HttpFormUrlEncodedContent {
    headers: Object;
    constructor();
    constructor(content: Object);

    bufferAllAsync(callback: (error: Error, result: number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: string) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    tryComputeLength(length: number): boolean;

    close(): void;
    toString(): string;

  }

  export class HttpMultipartContent {
    headers: Object;
    constructor();
    constructor(subtype: string);
    constructor(subtype: string, boundary: string);

    bufferAllAsync(callback: (error: Error, result: number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: string) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    tryComputeLength(length: number): boolean;

    close(): void;
    add(content: IHttpContent): void;

    first(): Object;

    toString(): string;

  }

  export class HttpMultipartFormDataContent {
    headers: Object;
    constructor();
    constructor(boundary: string);

    bufferAllAsync(callback: (error: Error, result: number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: string) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    tryComputeLength(length: number): boolean;

    close(): void;
    add(content: IHttpContent): void;
    add(content: IHttpContent, name: string): void;
    add(content: IHttpContent, name: string, fileName: string): void;

    first(): Object;

    toString(): string;

  }

  export class HttpCookieManager {
    constructor();

    setCookie(cookie: HttpCookie): boolean;
    setCookie(cookie: HttpCookie, thirdParty: boolean): boolean;

    deleteCookie(cookie: HttpCookie): void;

    getCookies(uri: Object): HttpCookieCollection;

  }

export * as diagnostics from "./web.http.diagnostics.js";
export * as filters from "./web.http.filters.js";
export * as headers from "./web.http.headers.js";