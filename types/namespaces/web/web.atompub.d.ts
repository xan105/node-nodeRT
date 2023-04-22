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

  export class ResourceCollection {
    accepts: Object;
    categories: Object;
    title: Object;
    uri: Object;
    baseUri: Object;
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();

    getXmlDocument(format: number): Object;

  }

  export class Workspace {
    collections: Object;
    title: Object;
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();

    getXmlDocument(format: number): Object;

  }

  export class ServiceDocument {
    workspaces: Object;
    nodeValue: string;
    nodeNamespace: string;
    nodeName: string;
    language: string;
    baseUri: Object;
    attributeExtensions: Object;
    elementExtensions: Object;
    constructor();

    getXmlDocument(format: number): Object;

  }

  export class AtomPubClient {
    timeout: number;
    serverCredential: Object;
    proxyCredential: Object;
    maxResponseBufferSize: number;
    bypassCacheOnRetrieve: boolean;
    constructor();
    constructor(serverCredential: Object);

    retrieveServiceDocumentAsync(uri: Object, callback: (error: Error, result: ServiceDocument) => void): void ;

    retrieveMediaResourceAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    retrieveResourceAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    createResourceAsync(uri: Object, description: string, item: Object, callback: (error: Error, result: Object) => void): void ;

    createMediaResourceAsync(uri: Object, mediaType: string, description: string, mediaStream: Object, callback: (error: Error, result: Object) => void): void ;

    updateMediaResourceAsync(uri: Object, mediaType: string, mediaStream: Object, callback: (error: Error) => void): void ;

    updateResourceAsync(uri: Object, item: Object, callback: (error: Error) => void): void ;

    updateResourceItemAsync(item: Object, callback: (error: Error) => void): void ;

    deleteResourceAsync(uri: Object, callback: (error: Error) => void): void ;

    deleteResourceItemAsync(item: Object, callback: (error: Error) => void): void ;

    retrieveFeedAsync(uri: Object, callback: (error: Error, result: Object) => void): void ;

    cancelAsyncOperations(): void;

    setRequestHeader(name: string, value: string): void;

  }

