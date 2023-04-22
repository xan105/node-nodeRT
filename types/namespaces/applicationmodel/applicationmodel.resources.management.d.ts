  export class ResourceIndexerContract {
    constructor();
  }

  export enum IndexedResourceType {
    string,
    path,
    embeddedData,
  }

  export class IndexedResourceCandidate {
    metadata: Object;
    qualifiers: Object;
    type: IndexedResourceType;
    uri: Object;
    valueAsString: string;
    constructor();

    getQualifierValue(qualifierName: string): string;

  }

  export class ResourceIndexer {
    constructor();
    constructor(projectRoot: Object, extensionDllPath: Object);
    constructor(projectRoot: Object);

    indexFileContentsAsync(file: Object, callback: (error: Error, result: Object) => void): void ;

    indexFilePath(filePath: Object): IndexedResourceCandidate;

  }

  export class IndexedResourceQualifier {
    qualifierName: string;
    qualifierValue: string;
    constructor();

  }

