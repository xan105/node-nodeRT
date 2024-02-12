  export enum WebErrorStatus {
    unknown,
    certificateCommonNameIsIncorrect,
    certificateExpired,
    certificateContainsErrors,
    certificateRevoked,
    certificateIsInvalid,
    serverUnreachable,
    timeout,
    errorHttpInvalidServerResponse,
    connectionAborted,
    connectionReset,
    disconnected,
    httpToHttpsOnRedirection,
    httpsToHttpOnRedirection,
    cannotConnect,
    hostNameNotResolved,
    operationCanceled,
    redirectFailed,
    unexpectedStatusCode,
    unexpectedRedirection,
    unexpectedClientError,
    unexpectedServerError,
    insufficientRangeSupport,
    missingContentLengthSupport,
    multipleChoices,
    movedPermanently,
    found,
    seeOther,
    notModified,
    useProxy,
    temporaryRedirect,
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
    internalServerError,
    notImplemented,
    badGateway,
    serviceUnavailable,
    gatewayTimeout,
    httpVersionNotSupported,
  }

  export class IUriToStreamResolver {
    constructor();

    uriToStreamAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

  }

  export class WebError {
    constructor();

    static getStatus(hresult: Number): WebErrorStatus;


  }

export const WebErrorStatus: any;
export const IUriToStreamResolver: any;
export const WebError: any;
export * as atompub from "./web.atompub.js";
export * as http from "./web.http.js";
export * as syndication from "./web.syndication.js";
export * as ui from "./web.ui.js";
