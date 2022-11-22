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

  export class ResourceCollection {
    accepts: Object;
    categories: Object;
    title: Object;
    uri: Object;
    baseUri: Object;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();

    getXmlDocument(format: Number): Object;

  }

  export class Workspace {
    collections: Object;
    title: Object;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();

    getXmlDocument(format: Number): Object;

  }

  export class ServiceDocument {
    workspaces: Object;
    nodeValue: String;
    nodeNamespace: String;
    nodeName: String;
    language: String;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();

    getXmlDocument(format: Number): Object;

  }

  export class AtomPubClient {
    timeout: Number;
    serverCredential: Object;
    proxyCredential: Object;
    maxResponseBufferSize: Number;
    bypassCacheOnRetrieve: Boolean;
    constructor();
    constructor(serverCredential: Object);

    retrieveServiceDocumentAsync(uri: Object, callback: (error: Error, result: ServiceDocument) => void): void ;

    retrieveMediaResourceAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    retrieveResourceAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    createResourceAsync(uri: Object, description: String, item: Object, callback: (error: Error, result: Object) => void): void ;

    createMediaResourceAsync(uri: Object, mediaType: String, description: String, mediaStream: Object, callback: (error: Error, result: Object) => void): void ;

    updateMediaResourceAsync(uri: Object, mediaType: String, mediaStream: Object, callback: (error: Error) => void): void ;

    updateResourceAsync(uri: Object, item: Object, callback: (error: Error) => void): void ;

    updateResourceItemAsync(item: Object, callback: (error: Error) => void): void ;

    deleteResourceAsync(uri: Object, callback: (error: Error) => void): void ;

    deleteResourceItemAsync(item: Object, callback: (error: Error) => void): void ;

    retrieveFeedAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    cancelAsyncOperations(): void;

    setRequestHeader(name: String, value: String): void;

  }

