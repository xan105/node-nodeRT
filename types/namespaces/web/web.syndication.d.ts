  export class RetrievalProgress {
    bytesRetrieved: number;
    totalBytesToRetrieve: number;
    constructor();
  }

  export class TransferProgress {
    bytesSent: number;
    totalBytesToSend: number;
    bytesRetrieved: number;
    totalBytesToRetrieve: number;
    constructor();
  }

  export enum SyndicationFormat {
    atom10,
    rss20,
    rss10,
    rss092,
    rss091,
    atom03,
  }

  export enum SyndicationErrorStatus {
    unknown,
    missingRequiredElement,
    missingRequiredAttribute,
    invalidXml,
    unexpectedContent,
    unsupportedFormat,
  }

  export enum SyndicationTextType {
    text,
    html,
    xhtml,
  }

  export class SyndicationAttribute {
    value: string;
    namespace: string;
    name: string;
    constructor();
    constructor(attributeName: string, attributeNamespace: string, attributeValue: string);

  }

  export class ISyndicationNode {
    attributeExtensions: Object;
    baseUri: Object;
    elementExtensions: Object;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    nodeValue: string;
    constructor();

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationNode {
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(nodeName: string, nodeNamespace: string, nodeValue: string);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationGenerator {
    version: string;
    uri: Object;
    text: string;
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(text: string);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class ISyndicationText {
    text: string;
    type: string;
    xml: Object;
    constructor();

  }

  export class SyndicationText {
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    xml: Object;
    type: string;
    text: string;
    constructor();
    constructor(text: string);
    constructor(text: string, type: SyndicationTextType);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationContent {
    sourceUri: Object;
    nodeValue: string;
    baseUri: Object;
    language: string;
    nodeName: string;
    nodeNamespace: string;
    attributeExtensions: Object;
    elementExtensions: Object;
    text: string;
    type: string;
    xml: Object;
    constructor();
    constructor(text: string, type: SyndicationTextType);
    constructor(sourceUri: Object);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationLink {
    uri: Object;
    title: string;
    resourceLanguage: string;
    relationship: string;
    mediaType: string;
    length: number;
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(uri: Object);
    constructor(uri: Object, relationship: string, title: string, mediaType: string, length: number);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationPerson {
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    uri: Object;
    name: string;
    email: string;
    constructor();
    constructor(name: string);
    constructor(name: string, email: string, uri: Object);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationCategory {
    term: string;
    scheme: string;
    label: string;
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(term: string);
    constructor(term: string, scheme: string, label: string);

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationFeed {
    title: ISyndicationText;
    subtitle: ISyndicationText;
    rights: ISyndicationText;
    generator: SyndicationGenerator;
    lastUpdatedTime: Date;
    imageUri: Object;
    iconUri: Object;
    id: string;
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
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(title: string, subtitle: string, uri: Object);

    load(feed: string): void;

    loadFromXml(feedDocument: Object): void;

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class SyndicationItem {
    title: ISyndicationText;
    source: SyndicationFeed;
    rights: ISyndicationText;
    summary: ISyndicationText;
    publishedDate: Date;
    commentsUri: Object;
    id: string;
    lastUpdatedTime: Date;
    content: SyndicationContent;
    editUri: Object;
    links: Object;
    authors: Object;
    categories: Object;
    contributors: Object;
    itemUri: Object;
    eTag: string;
    editMediaUri: Object;
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();
    constructor(title: string, content: SyndicationContent, uri: Object);

    load(item: string): void;

    loadFromXml(itemDocument: Object): void;

    getXmlDocument(format: SyndicationFormat): Object;

  }

  export class ISyndicationClient {
    bypassCacheOnRetrieve: boolean;
    maxResponseBufferSize: number;
    proxyCredential: Object;
    serverCredential: Object;
    timeout: number;
    constructor();

    retrieveFeedAsync(uri: Object, callback: (error: Error, result: SyndicationFeed) => void): void ;

    setRequestHeader(name: string, value: string): void;

  }

  export class SyndicationClient {
    timeout: number;
    serverCredential: Object;
    proxyCredential: Object;
    maxResponseBufferSize: number;
    bypassCacheOnRetrieve: boolean;
    constructor();
    constructor(serverCredential: Object);

    retrieveFeedAsync(uri: Object, callback: (error: Error, result: SyndicationFeed) => void): void ;

    setRequestHeader(name: string, value: string): void;

  }

  export class SyndicationError {
    constructor();

    static getStatus(hresult: number): SyndicationErrorStatus;


  }

