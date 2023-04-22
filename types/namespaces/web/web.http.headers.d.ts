  export class HttpContentHeaderCollection {
    contentLength: number;
    contentMD5: Object;
    contentLocation: Object;
    contentDisposition: HttpContentDispositionHeaderValue;
    lastModified: Date;
    expires: Date;
    contentType: HttpMediaTypeHeaderValue;
    contentRange: HttpContentRangeHeaderValue;
    contentEncoding: HttpContentCodingHeaderValueCollection;
    contentLanguage: HttpLanguageHeaderValueCollection;
    constructor();

    append(name: string, value: string): void;

    tryAppendWithoutValidation(name: string, value: string): boolean;

    lookup(key: string): string;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: string): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

    toString(): string;

  }

  export class HttpRequestHeaderCollection {
    authorization: HttpCredentialsHeaderValue;
    proxyAuthorization: HttpCredentialsHeaderValue;
    from: string;
    referer: Object;
    ifUnmodifiedSince: Date;
    date: Date;
    host: Object;
    maxForwards: number;
    ifModifiedSince: Date;
    cookie: HttpCookiePairHeaderValueCollection;
    accept: HttpMediaTypeWithQualityHeaderValueCollection;
    acceptEncoding: HttpContentCodingWithQualityHeaderValueCollection;
    acceptLanguage: HttpLanguageRangeWithQualityHeaderValueCollection;
    cacheControl: HttpCacheDirectiveHeaderValueCollection;
    connection: HttpConnectionOptionHeaderValueCollection;
    transferEncoding: HttpTransferCodingHeaderValueCollection;
    userAgent: HttpProductInfoHeaderValueCollection;
    expect: HttpExpectationHeaderValueCollection;
    constructor();

    append(name: string, value: string): void;

    tryAppendWithoutValidation(name: string, value: string): boolean;

    lookup(key: string): string;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: string): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

    toString(): string;

  }

  export class HttpResponseHeaderCollection {
    date: Date;
    location: Object;
    age: number;
    retryAfter: HttpDateOrDeltaHeaderValue;
    allow: HttpMethodHeaderValueCollection;
    cacheControl: HttpCacheDirectiveHeaderValueCollection;
    connection: HttpConnectionOptionHeaderValueCollection;
    proxyAuthenticate: HttpChallengeHeaderValueCollection;
    transferEncoding: HttpTransferCodingHeaderValueCollection;
    wwwAuthenticate: HttpChallengeHeaderValueCollection;
    constructor();

    append(name: string, value: string): void;

    tryAppendWithoutValidation(name: string, value: string): boolean;

    lookup(key: string): string;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: string): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

    toString(): string;

  }

  export class HttpContentDispositionHeaderValue {
    size: number;
    name: string;
    fileNameStar: string;
    fileName: string;
    dispositionType: string;
    parameters: Object;
    constructor();
    constructor(dispositionType: string);

    static parse(input: string): HttpContentDispositionHeaderValue;


    static tryParse(input: string, contentDispositionHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpContentCodingHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpContentCodingHeaderValue;

    getView(): Object;

    indexOf(value: HttpContentCodingHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpContentCodingHeaderValue): void;

    insertAt(index: number, value: HttpContentCodingHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpContentCodingHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpLanguageHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): Object;

    getView(): Object;

    indexOf(value: Object, index: number): boolean;

    setAt(index: number, value: Object): void;

    insertAt(index: number, value: Object): void;

    removeAt(index: number): void;

    append(value: Object): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpContentRangeHeaderValue {
    unit: string;
    firstBytePosition: number;
    lastBytePosition: number;
    length: number;
    constructor();
    constructor(length: number);
    constructor(from: number, to: number);
    constructor(from: number, to: number, length: number);

    static parse(input: string): HttpContentRangeHeaderValue;


    static tryParse(input: string, contentRangeHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpMediaTypeHeaderValue {
    mediaType: string;
    charSet: string;
    parameters: Object;
    constructor();
    constructor(mediaType: string);

    static parse(input: string): HttpMediaTypeHeaderValue;


    static tryParse(input: string, mediaTypeHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpMediaTypeWithQualityHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpMediaTypeWithQualityHeaderValue;

    getView(): Object;

    indexOf(value: HttpMediaTypeWithQualityHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpMediaTypeWithQualityHeaderValue): void;

    insertAt(index: number, value: HttpMediaTypeWithQualityHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpMediaTypeWithQualityHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpContentCodingWithQualityHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpContentCodingWithQualityHeaderValue;

    getView(): Object;

    indexOf(value: HttpContentCodingWithQualityHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpContentCodingWithQualityHeaderValue): void;

    insertAt(index: number, value: HttpContentCodingWithQualityHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpContentCodingWithQualityHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpLanguageRangeWithQualityHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpLanguageRangeWithQualityHeaderValue;

    getView(): Object;

    indexOf(value: HttpLanguageRangeWithQualityHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpLanguageRangeWithQualityHeaderValue): void;

    insertAt(index: number, value: HttpLanguageRangeWithQualityHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpLanguageRangeWithQualityHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpCredentialsHeaderValue {
    parameters: Object;
    scheme: string;
    token: string;
    constructor();
    constructor(scheme: string);
    constructor(scheme: string, token: string);

    static parse(input: string): HttpCredentialsHeaderValue;


    static tryParse(input: string, credentialsHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpCacheDirectiveHeaderValueCollection {
    sharedMaxAge: number;
    minFresh: number;
    maxStale: number;
    maxAge: number;
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpNameValueHeaderValue;

    getView(): Object;

    indexOf(value: HttpNameValueHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpNameValueHeaderValue): void;

    insertAt(index: number, value: HttpNameValueHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpNameValueHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpConnectionOptionHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpConnectionOptionHeaderValue;

    getView(): Object;

    indexOf(value: HttpConnectionOptionHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpConnectionOptionHeaderValue): void;

    insertAt(index: number, value: HttpConnectionOptionHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpConnectionOptionHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpCookiePairHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpCookiePairHeaderValue;

    getView(): Object;

    indexOf(value: HttpCookiePairHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpCookiePairHeaderValue): void;

    insertAt(index: number, value: HttpCookiePairHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpCookiePairHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpExpectationHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpExpectationHeaderValue;

    getView(): Object;

    indexOf(value: HttpExpectationHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpExpectationHeaderValue): void;

    insertAt(index: number, value: HttpExpectationHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpExpectationHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpTransferCodingHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpTransferCodingHeaderValue;

    getView(): Object;

    indexOf(value: HttpTransferCodingHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpTransferCodingHeaderValue): void;

    insertAt(index: number, value: HttpTransferCodingHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpTransferCodingHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpProductInfoHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpProductInfoHeaderValue;

    getView(): Object;

    indexOf(value: HttpProductInfoHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpProductInfoHeaderValue): void;

    insertAt(index: number, value: HttpProductInfoHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpProductInfoHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpMethodHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): Object;

    getView(): Object;

    indexOf(value: Object, index: number): boolean;

    setAt(index: number, value: Object): void;

    insertAt(index: number, value: Object): void;

    removeAt(index: number): void;

    append(value: Object): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpChallengeHeaderValueCollection {
    constructor();

    parseAdd(input: string): void;

    tryParseAdd(input: string): boolean;

    getAt(index: number): HttpChallengeHeaderValue;

    getView(): Object;

    indexOf(value: HttpChallengeHeaderValue, index: number): boolean;

    setAt(index: number, value: HttpChallengeHeaderValue): void;

    insertAt(index: number, value: HttpChallengeHeaderValue): void;

    removeAt(index: number): void;

    append(value: HttpChallengeHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class HttpDateOrDeltaHeaderValue {
    date: Date;
    delta: number;
    constructor();

    static parse(input: string): HttpDateOrDeltaHeaderValue;


    static tryParse(input: string, dateOrDeltaHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpNameValueHeaderValue {
    value: string;
    name: string;
    constructor();
    constructor(name: string);
    constructor(name: string, value: string);

    static parse(input: string): HttpNameValueHeaderValue;


    static tryParse(input: string, nameValueHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpChallengeHeaderValue {
    parameters: Object;
    scheme: string;
    token: string;
    constructor();
    constructor(scheme: string);
    constructor(scheme: string, token: string);

    static parse(input: string): HttpChallengeHeaderValue;


    static tryParse(input: string, challengeHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpConnectionOptionHeaderValue {
    token: string;
    constructor();
    constructor(token: string);

    static parse(input: string): HttpConnectionOptionHeaderValue;


    static tryParse(input: string, connectionOptionHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpContentCodingHeaderValue {
    contentCoding: string;
    constructor();
    constructor(contentCoding: string);

    static parse(input: string): HttpContentCodingHeaderValue;


    static tryParse(input: string, contentCodingHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpCookiePairHeaderValue {
    value: string;
    name: string;
    constructor();
    constructor(name: string);
    constructor(name: string, value: string);

    static parse(input: string): HttpCookiePairHeaderValue;


    static tryParse(input: string, cookiePairHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpExpectationHeaderValue {
    value: string;
    name: string;
    parameters: Object;
    constructor();
    constructor(name: string);
    constructor(name: string, value: string);

    static parse(input: string): HttpExpectationHeaderValue;


    static tryParse(input: string, expectationHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpLanguageRangeWithQualityHeaderValue {
    languageRange: string;
    quality: number;
    constructor();
    constructor(languageRange: string);
    constructor(languageRange: string, quality: number);

    static parse(input: string): HttpLanguageRangeWithQualityHeaderValue;


    static tryParse(input: string, languageRangeWithQualityHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpMediaTypeWithQualityHeaderValue {
    quality: number;
    mediaType: string;
    charSet: string;
    parameters: Object;
    constructor();
    constructor(mediaType: string);
    constructor(mediaType: string, quality: number);

    static parse(input: string): HttpMediaTypeWithQualityHeaderValue;


    static tryParse(input: string, mediaTypeWithQualityHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpProductHeaderValue {
    name: string;
    version: string;
    constructor();
    constructor(productName: string);
    constructor(productName: string, productVersion: string);

    static parse(input: string): HttpProductHeaderValue;


    static tryParse(input: string, productHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpProductInfoHeaderValue {
    comment: string;
    product: HttpProductHeaderValue;
    constructor();
    constructor(productComment: string);
    constructor(productName: string, productVersion: string);

    static parse(input: string): HttpProductInfoHeaderValue;


    static tryParse(input: string, productInfoHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpContentCodingWithQualityHeaderValue {
    contentCoding: string;
    quality: number;
    constructor();
    constructor(contentCoding: string);
    constructor(contentCoding: string, quality: number);

    static parse(input: string): HttpContentCodingWithQualityHeaderValue;


    static tryParse(input: string, contentCodingWithQualityHeaderValue: Object): boolean;


    toString(): string;

  }

  export class HttpTransferCodingHeaderValue {
    parameters: Object;
    value: string;
    constructor();
    constructor(input: string);

    static parse(input: string): HttpTransferCodingHeaderValue;


    static tryParse(input: string, transferCodingHeaderValue: Object): boolean;


    toString(): string;

  }

