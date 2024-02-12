  export class ResourceLayoutInfo {
    majorVersion: Number;
    minorVersion: Number;
    resourceSubtreeCount: Number;
    namedResourceCount: Number;
    checksum: Number;
    constructor();
  }

  export enum ResourceCandidateKind {
    string,
    file,
    embeddedData,
  }

  export enum ResourceQualifierPersistence {
    none,
    localMachine,
  }

  export class NamedResource {
    candidates: Object;
    uri: Object;
    constructor();

    resolve(): ResourceCandidate;
    resolve(resourceContext: ResourceContext): ResourceCandidate;

    resolveAll(): Object;
    resolveAll(resourceContext: ResourceContext): Object;

  }

  export class ResourceCandidate {
    isDefault: Boolean;
    isMatch: Boolean;
    isMatchAsDefault: Boolean;
    qualifiers: Object;
    valueAsString: String;
    kind: ResourceCandidateKind;
    constructor();

    getValueAsFileAsync(callback: (error: Error, result: Object) => void): void ;

    getValueAsStreamAsync(callback: (error: Error, result: Object) => void): void ;

    getQualifierValue(qualifierName: String): String;

  }

  export class ResourceCandidateVectorView {
    constructor();

    getAt(index: Number): ResourceCandidate;

    indexOf(value: ResourceCandidate, index: Number): Boolean;

    getMany();
    first(): Object;

  }

  export class ResourceContext {
    languages: Object;
    qualifierValues: Object;
    constructor();

    static getForUIContext(context: Object): ResourceContext;


    static setGlobalQualifierValue(key: String, value: String, persistence: ResourceQualifierPersistence): void;
    static setGlobalQualifierValue(key: String, value: String): void;


    static getForCurrentView(): ResourceContext;


    static resetGlobalQualifierValues(): void;
    static resetGlobalQualifierValues(qualifierNames: Object): void;


    static getForViewIndependentUse(): ResourceContext;


    static createMatchingContext(result: Object): ResourceContext;


    reset(): void;
    reset(qualifierNames: Object): void;

    overrideToMatch(result: Object): void;

    clone(): ResourceContext;

  }

  export class ResourceContextLanguagesVectorView {
    constructor();

    getAt(index: Number): String;

    indexOf(value: String, index: Number): Boolean;

    getMany();
    first(): Object;

  }

  export class ResourceManager {
    static current: ResourceManager;
    allResourceMaps: Object;
    defaultContext: ResourceContext;
    mainResourceMap: ResourceMap;
    constructor();

    static isResourceReference(resourceReference: String): Boolean;


    loadPriFiles(files: Object): void;

    unloadPriFiles(files: Object): void;

    getAllNamedResourcesForPackage(packageName: String, resourceLayoutInfo: ResourceLayoutInfo): Object;

    getAllSubtreesForPackage(packageName: String, resourceLayoutInfo: ResourceLayoutInfo): Object;

  }

  export class ResourceMap {
    uri: Object;
    constructor();

    getValue(resource: String): ResourceCandidate;
    getValue(resource: String, context: ResourceContext): ResourceCandidate;

    getSubtree(reference: String): ResourceMap;

    lookup(key: String): NamedResource;

    hasKey(key: String): Boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class ResourceMapIterator {
    current: Object;
    hasCurrent: Boolean;
    constructor();

    moveNext(): Boolean;

    getMany();
  }

  export class ResourceMapMapView {
    constructor();

    lookup(key: String): ResourceMap;

    hasKey(key: String): Boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class ResourceMapMapViewIterator {
    current: Object;
    hasCurrent: Boolean;
    constructor();

    moveNext(): Boolean;

    getMany();
  }

  export class ResourceQualifier {
    isDefault: Boolean;
    isMatch: Boolean;
    qualifierName: String;
    qualifierValue: String;
    score: Number;
    constructor();

  }

  export class ResourceQualifierMapView {
    constructor();

    lookup(key: String): String;

    hasKey(key: String): Boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class ResourceQualifierObservableMap {
    constructor();

    lookup(key: String): String;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: String): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    addListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    on(type: "MapChanged", listener: (ev: Event) => void): void ;
    off(type: "MapChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ResourceQualifierVectorView {
    constructor();

    getAt(index: Number): ResourceQualifier;

    indexOf(value: ResourceQualifier, index: Number): Boolean;

    getMany();
    first(): Object;

  }

