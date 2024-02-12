  export class RetrievalProgress {
    bytesRetrieved: Number;
    totalBytesToRetrieve: Number;
    constructor();
  }

  export class TransferProgress {
    bytesSent: Number;
    totalBytesToSend: Number;
    bytesRetrieved: Number;
    totalBytesToRetrieve: Number;
    constructor();
  }

  export enum SyndicationErrorStatus {
    unknown,
    missingRequiredElement,
    missingRequiredAttribute,
    invalidXml,
    unexpectedContent,
    unsupportedFormat,
  }

  export enum SyndicationFormat {
    atom10,
    rss20,
    rss10,
    rss092,
    rss091,
    atom03,
  }

  export enum SyndicationTextType {
    text,
    html,
    xhtml,
  }

  export class ISyndicationClient {
    bypassCacheOnRetrieve: Boolean;
    maxResponseBufferSize: Number;
    proxyCredential: Object;
    serverCredential: Object;
    timeout: Number;
    constructor();

    retrieveFeedAsync(uri: Object, callback: (error: Error, result: SyndicationFeed) => void): void ;

    setRequestHeader(name: String, value: String): void;

  }

  export class ISyndicationNode {
    attributeExtensions: Object;
    baseUri: Object;
    elementExtensions: Object;
    language: String;
    nodeName: String;
    nodeNamespace: String;
    nodeValue: String;
    constructor();

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class ISyndicationText {
    text: String;
    type: String;
    xml: Object;
    constructor();

  }

  export class SyndicationAttribute {
    value: String;
    namespace: String;
    name: String;
    constructor();
    constructor(attributeName: String, attributeNamespace: String, attributeValue: String);

  }

  export class SyndicationCategory {
    term: String;
    scheme: String;
    label: String;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(term: String);
    constructor(term: String, scheme: String, label: String);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationClient {
    timeout: Number;
    serverCredential: Object;
    proxyCredential: Object;
    maxResponseBufferSize: Number;
    bypassCacheOnRetrieve: Boolean;
    constructor();
    constructor(serverCredential: Object);

    retrieveFeedAsync(uri: Object, callback: (error: Error, result: SyndicationFeed) => void): void ;

    setRequestHeader(name: String, value: String): void;

  }

  export class SyndicationContent {
    sourceUri: Object;
    nodeValue: String;
    baseUri: Object;
    language: String;
    nodeName: String;
    nodeNamespace: String;
    attributeExtensions: Object;
    elementExtensions: Object;
    text: String;
    type: String;
    xml: Object;
    constructor();
    constructor(text: String, type: SyndicationTextType);
    constructor(sourceUri: Object);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationError {
    constructor();

    static getStatus(hresult: Number): SyndicationErrorStatus;


  }

  export class SyndicationFeed {
    title: ISyndicationText;
    subtitle: ISyndicationText;
    rights: ISyndicationText;
    generator: SyndicationGenerator;
    lastUpdatedTime: Date;
    imageUri: Object;
    iconUri: Object;
    id: String;
    firstUri: Object;
    items: Object;
    lastUri: Object;
    links: Object;
    nextUri: Object;
    previousUri: Object;
    categories: Object;
    sourceFormat: SyndicationFormat;
    contributors: Object;
    authors: Object;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(title: String, subtitle: String, uri: Object);

    load(feed: String): void;

    loadFromXml(feedDocument: Object): void;

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationGenerator {
    version: String;
    uri: Object;
    text: String;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(text: String);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationItem {
    title: ISyndicationText;
    source: SyndicationFeed;
    rights: ISyndicationText;
    summary: ISyndicationText;
    publishedDate: Date;
    commentsUri: Object;
    id: String;
    lastUpdatedTime: Date;
    content: SyndicationContent;
    editUri: Object;
    links: Object;
    authors: Object;
    categories: Object;
    contributors: Object;
    itemUri: Object;
    eTag: String;
    editMediaUri: Object;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(title: String, content: SyndicationContent, uri: Object);

    load(item: String): void;

    loadFromXml(itemDocument: Object): void;

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationLink {
    uri: Object;
    title: String;
    resourceLanguage: String;
    relationship: String;
    mediaType: String;
    length: Number;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(uri: Object);
    constructor(uri: Object, relationship: String, title: String, mediaType: String, length: Number);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationNode {
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(nodeName: String, nodeNamespace: String, nodeValue: String);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationPerson {
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    uri: Object;
    name: String;
    email: String;
    constructor();
    constructor(name: String);
    constructor(name: String, email: String, uri: Object);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationText {
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    xml: Object;
    type: String;
    text: String;
    constructor();
    constructor(text: String);
    constructor(text: String, type: SyndicationTextType);

    getXmlDocument(format: SyndicationFormat): Object;

  }

