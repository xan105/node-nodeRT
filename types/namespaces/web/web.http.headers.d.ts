  export class HttpContentHeaderCollection {
    contentLength: Number;
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

    append(name: String, value: String): void;

    tryAppendWithoutValidation(name: String, value: String): Boolean;

    lookup(key: String): String;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: String): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    toString(): String;

  }

  export class HttpRequestHeaderCollection {
    authorization: HttpCredentialsHeaderValue;
    proxyAuthorization: HttpCredentialsHeaderValue;
    from: String;
    referer: Object;
    ifUnmodifiedSince: Date;
    date: Date;
    host: Object;
    maxForwards: Number;
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

    append(name: String, value: String): void;

    tryAppendWithoutValidation(name: String, value: String): Boolean;

    lookup(key: String): String;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: String): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    toString(): String;

  }

  export class HttpResponseHeaderCollection {
    date: Date;
    location: Object;
    age: Number;
    retryAfter: HttpDateOrDeltaHeaderValue;
    allow: HttpMethodHeaderValueCollection;
    cacheControl: HttpCacheDirectiveHeaderValueCollection;
    connection: HttpConnectionOptionHeaderValueCollection;
    proxyAuthenticate: HttpChallengeHeaderValueCollection;
    transferEncoding: HttpTransferCodingHeaderValueCollection;
    wwwAuthenticate: HttpChallengeHeaderValueCollection;
    constructor();

    append(name: String, value: String): void;

    tryAppendWithoutValidation(name: String, value: String): Boolean;

    lookup(key: String): String;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: String): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    toString(): String;

  }

  export class HttpContentDispositionHeaderValue {
    size: Number;
    name: String;
    fileNameStar: String;
    fileName: String;
    dispositionType: String;
    parameters: Object;
    constructor();
    constructor(dispositionType: String);

    static parse(input: String): HttpContentDispositionHeaderValue;


    static tryParse(input: String, contentDispositionHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpContentCodingHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpContentCodingHeaderValue;

    getView(): Object;

    indexOf(value: HttpContentCodingHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpContentCodingHeaderValue): void;

    insertAt(index: Number, value: HttpContentCodingHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpContentCodingHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpLanguageHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): Object;

    getView(): Object;

    indexOf(value: Object, index: Number): Boolean;

    setAt(index: Number, value: Object): void;

    insertAt(index: Number, value: Object): void;

    removeAt(index: Number): void;

    append(value: Object): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpContentRangeHeaderValue {
    unit: String;
    firstBytePosition: Number;
    lastBytePosition: Number;
    length: Number;
    constructor();
    constructor(length: Number);
    constructor(from: Number, to: Number);
    constructor(from: Number, to: Number, length: Number);

    static parse(input: String): HttpContentRangeHeaderValue;


    static tryParse(input: String, contentRangeHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpMediaTypeHeaderValue {
    mediaType: String;
    charSet: String;
    parameters: Object;
    constructor();
    constructor(mediaType: String);

    static parse(input: String): HttpMediaTypeHeaderValue;


    static tryParse(input: String, mediaTypeHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpMediaTypeWithQualityHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpMediaTypeWithQualityHeaderValue;

    getView(): Object;

    indexOf(value: HttpMediaTypeWithQualityHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpMediaTypeWithQualityHeaderValue): void;

    insertAt(index: Number, value: HttpMediaTypeWithQualityHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpMediaTypeWithQualityHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpContentCodingWithQualityHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpContentCodingWithQualityHeaderValue;

    getView(): Object;

    indexOf(value: HttpContentCodingWithQualityHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpContentCodingWithQualityHeaderValue): void;

    insertAt(index: Number, value: HttpContentCodingWithQualityHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpContentCodingWithQualityHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpLanguageRangeWithQualityHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpLanguageRangeWithQualityHeaderValue;

    getView(): Object;

    indexOf(value: HttpLanguageRangeWithQualityHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpLanguageRangeWithQualityHeaderValue): void;

    insertAt(index: Number, value: HttpLanguageRangeWithQualityHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpLanguageRangeWithQualityHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpCredentialsHeaderValue {
    parameters: Object;
    scheme: String;
    token: String;
    constructor();
    constructor(scheme: String);
    constructor(scheme: String, token: String);

    static parse(input: String): HttpCredentialsHeaderValue;


    static tryParse(input: String, credentialsHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpCacheDirectiveHeaderValueCollection {
    sharedMaxAge: Number;
    minFresh: Number;
    maxStale: Number;
    maxAge: Number;
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpNameValueHeaderValue;

    getView(): Object;

    indexOf(value: HttpNameValueHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpNameValueHeaderValue): void;

    insertAt(index: Number, value: HttpNameValueHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpNameValueHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpConnectionOptionHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpConnectionOptionHeaderValue;

    getView(): Object;

    indexOf(value: HttpConnectionOptionHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpConnectionOptionHeaderValue): void;

    insertAt(index: Number, value: HttpConnectionOptionHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpConnectionOptionHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpCookiePairHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpCookiePairHeaderValue;

    getView(): Object;

    indexOf(value: HttpCookiePairHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpCookiePairHeaderValue): void;

    insertAt(index: Number, value: HttpCookiePairHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpCookiePairHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpExpectationHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpExpectationHeaderValue;

    getView(): Object;

    indexOf(value: HttpExpectationHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpExpectationHeaderValue): void;

    insertAt(index: Number, value: HttpExpectationHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpExpectationHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpTransferCodingHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpTransferCodingHeaderValue;

    getView(): Object;

    indexOf(value: HttpTransferCodingHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpTransferCodingHeaderValue): void;

    insertAt(index: Number, value: HttpTransferCodingHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpTransferCodingHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpProductInfoHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpProductInfoHeaderValue;

    getView(): Object;

    indexOf(value: HttpProductInfoHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpProductInfoHeaderValue): void;

    insertAt(index: Number, value: HttpProductInfoHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpProductInfoHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpMethodHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): Object;

    getView(): Object;

    indexOf(value: Object, index: Number): Boolean;

    setAt(index: Number, value: Object): void;

    insertAt(index: Number, value: Object): void;

    removeAt(index: Number): void;

    append(value: Object): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpChallengeHeaderValueCollection {
    constructor();

    parseAdd(input: String): void;

    tryParseAdd(input: String): Boolean;

    getAt(index: Number): HttpChallengeHeaderValue;

    getView(): Object;

    indexOf(value: HttpChallengeHeaderValue, index: Number): Boolean;

    setAt(index: Number, value: HttpChallengeHeaderValue): void;

    insertAt(index: Number, value: HttpChallengeHeaderValue): void;

    removeAt(index: Number): void;

    append(value: HttpChallengeHeaderValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class HttpDateOrDeltaHeaderValue {
    date: Date;
    delta: Number;
    constructor();

    static parse(input: String): HttpDateOrDeltaHeaderValue;


    static tryParse(input: String, dateOrDeltaHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpNameValueHeaderValue {
    value: String;
    name: String;
    constructor();
    constructor(name: String);
    constructor(name: String, value: String);

    static parse(input: String): HttpNameValueHeaderValue;


    static tryParse(input: String, nameValueHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpChallengeHeaderValue {
    parameters: Object;
    scheme: String;
    token: String;
    constructor();
    constructor(scheme: String);
    constructor(scheme: String, token: String);

    static parse(input: String): HttpChallengeHeaderValue;


    static tryParse(input: String, challengeHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpConnectionOptionHeaderValue {
    token: String;
    constructor();
    constructor(token: String);

    static parse(input: String): HttpConnectionOptionHeaderValue;


    static tryParse(input: String, connectionOptionHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpContentCodingHeaderValue {
    contentCoding: String;
    constructor();
    constructor(contentCoding: String);

    static parse(input: String): HttpContentCodingHeaderValue;


    static tryParse(input: String, contentCodingHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpCookiePairHeaderValue {
    value: String;
    name: String;
    constructor();
    constructor(name: String);
    constructor(name: String, value: String);

    static parse(input: String): HttpCookiePairHeaderValue;


    static tryParse(input: String, cookiePairHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpExpectationHeaderValue {
    value: String;
    name: String;
    parameters: Object;
    constructor();
    constructor(name: String);
    constructor(name: String, value: String);

    static parse(input: String): HttpExpectationHeaderValue;


    static tryParse(input: String, expectationHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpLanguageRangeWithQualityHeaderValue {
    languageRange: String;
    quality: Number;
    constructor();
    constructor(languageRange: String);
    constructor(languageRange: String, quality: Number);

    static parse(input: String): HttpLanguageRangeWithQualityHeaderValue;


    static tryParse(input: String, languageRangeWithQualityHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpMediaTypeWithQualityHeaderValue {
    quality: Number;
    mediaType: String;
    charSet: String;
    parameters: Object;
    constructor();
    constructor(mediaType: String);
    constructor(mediaType: String, quality: Number);

    static parse(input: String): HttpMediaTypeWithQualityHeaderValue;


    static tryParse(input: String, mediaTypeWithQualityHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpProductHeaderValue {
    name: String;
    version: String;
    constructor();
    constructor(productName: String);
    constructor(productName: String, productVersion: String);

    static parse(input: String): HttpProductHeaderValue;


    static tryParse(input: String, productHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpProductInfoHeaderValue {
    comment: String;
    product: HttpProductHeaderValue;
    constructor();
    constructor(productComment: String);
    constructor(productName: String, productVersion: String);

    static parse(input: String): HttpProductInfoHeaderValue;


    static tryParse(input: String, productInfoHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpContentCodingWithQualityHeaderValue {
    contentCoding: String;
    quality: Number;
    constructor();
    constructor(contentCoding: String);
    constructor(contentCoding: String, quality: Number);

    static parse(input: String): HttpContentCodingWithQualityHeaderValue;


    static tryParse(input: String, contentCodingWithQualityHeaderValue: Object): Boolean;


    toString(): String;

  }

  export class HttpTransferCodingHeaderValue {
    parameters: Object;
    value: String;
    constructor();
    constructor(input: String);

    static parse(input: String): HttpTransferCodingHeaderValue;


    static tryParse(input: String, transferCodingHeaderValue: Object): Boolean;


    toString(): String;

  }

