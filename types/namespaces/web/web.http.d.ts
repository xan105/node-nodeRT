  export class HttpProgress {
    stage: HttpProgressStage;
    bytesSent: Number;
    totalBytesToSend: Number;
    bytesReceived: Number;
    totalBytesToReceive: Number;
    retries: Number;
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
    toString(): String;

  }

  export class HttpResponseMessage {
    version: HttpVersion;
    statusCode: HttpStatusCode;
    source: HttpResponseMessageSource;
    requestMessage: HttpRequestMessage;
    reasonPhrase: String;
    content: IHttpContent;
    headers: Object;
    isSuccessStatusCode: Boolean;
    constructor();
    constructor(statusCode: HttpStatusCode);

    ensureSuccessStatusCode(): HttpResponseMessage;

    close(): void;
    toString(): String;

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

    getStringAsync(uri: Object, callback: (error: Error, result: String) => void): void ;

    postAsync(uri: Object, content: IHttpContent, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    putAsync(uri: Object, content: IHttpContent, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    sendRequestAsync(request: HttpRequestMessage, callback: (error: Error, result: HttpResponseMessage) => void): void ;
    sendRequestAsync(request: HttpRequestMessage, completionOption: HttpCompletionOption, callback: (error: Error, result: HttpResponseMessage) => void): void ;

    close(): void;
    toString(): String;

  }

  export class IHttpContent {
    headers: Object;
    constructor();

    bufferAllAsync(callback: (error: Error, result: Number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: String) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    tryComputeLength(length: Number): Boolean;

  }

  export class HttpCookie {
    value: String;
    secure: Boolean;
    httpOnly: Boolean;
    expires: Date;
    domain: String;
    name: String;
    path: String;
    constructor();
    constructor(name: String, domain: String, path: String);

    toString(): String;

  }

  export class HttpCookieCollection {
    constructor();

    getAt(index: Number): HttpCookie;

    indexOf(value: HttpCookie, index: Number): Boolean;

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
    method: String;
    constructor();
    constructor(method: String);

    toString(): String;

  }

  export class HttpTransportInformation {
    serverCertificate: Object;
    serverCertificateErrorSeverity: Number;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

    toString(): String;

  }

  export class HttpStringContent {
    headers: Object;
    constructor();
    constructor(content: String);
    constructor(content: String, encoding: Number);
    constructor(content: String, encoding: Number, mediaType: String);

    bufferAllAsync(callback: (error: Error, result: Number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: String) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    tryComputeLength(length: Number): Boolean;

    close(): void;
    toString(): String;

  }

  export class HttpBufferContent {
    headers: Object;
    constructor();
    constructor(content: Object);
    constructor(content: Object, offset: Number, count: Number);

    bufferAllAsync(callback: (error: Error, result: Number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: String) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    tryComputeLength(length: Number): Boolean;

    close(): void;
    toString(): String;

  }

  export class HttpStreamContent {
    headers: Object;
    constructor();
    constructor(content: Object);

    bufferAllAsync(callback: (error: Error, result: Number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: String) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    tryComputeLength(length: Number): Boolean;

    close(): void;
    toString(): String;

  }

  export class HttpFormUrlEncodedContent {
    headers: Object;
    constructor();
    constructor(content: Object);

    bufferAllAsync(callback: (error: Error, result: Number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: String) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    tryComputeLength(length: Number): Boolean;

    close(): void;
    toString(): String;

  }

  export class HttpMultipartContent {
    headers: Object;
    constructor();
    constructor(subtype: String);
    constructor(subtype: String, boundary: String);

    bufferAllAsync(callback: (error: Error, result: Number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: String) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    tryComputeLength(length: Number): Boolean;

    close(): void;
    add(content: IHttpContent): void;

    first(): Object;

    toString(): String;

  }

  export class HttpMultipartFormDataContent {
    headers: Object;
    constructor();
    constructor(boundary: String);

    bufferAllAsync(callback: (error: Error, result: Number) => void): void ;

    readAsBufferAsync(callback: (error: Error, result: Object) => void): void ;

    readAsInputStreamAsync(callback: (error: Error, result: Object) => void): void ;

    readAsStringAsync(callback: (error: Error, result: String) => void): void ;

    writeToStreamAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    tryComputeLength(length: Number): Boolean;

    close(): void;
    add(content: IHttpContent): void;
    add(content: IHttpContent, name: String): void;
    add(content: IHttpContent, name: String, fileName: String): void;

    first(): Object;

    toString(): String;

  }

  export class HttpCookieManager {
    constructor();

    setCookie(cookie: HttpCookie): Boolean;
    setCookie(cookie: HttpCookie, thirdParty: Boolean): Boolean;

    deleteCookie(cookie: HttpCookie): void;

    getCookies(uri: Object): HttpCookieCollection;

  }

export * as diagnostics from "./web.http.diagnostics.js";
export * as filters from "./web.http.filters.js";
export * as headers from "./web.http.headers.js";