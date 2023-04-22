  export class ResourceLayoutInfo {
    majorVersion: number;
    minorVersion: number;
    resourceSubtreeCount: number;
    namedResourceCount: number;
    checksum: number;
    constructor();
  }

  export enum ResourceQualifierPersistence {
    none,
    localMachine,
  }

  export class ResourceMap {
    uri: Object;
    constructor();

    getValue(resource: string): ResourceCandidate;
    getValue(resource: string, context: ResourceContext): ResourceCandidate;

    getSubtree(reference: string): ResourceMap;

    lookup(key: string): NamedResource;

    hasKey(key: string): boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class ResourceContext {
    languages: Object;
    qualifierValues: Object;
    constructor();

    static setGlobalQualifierValue(key: string, value: string, persistence: ResourceQualifierPersistence): void;
    static setGlobalQualifierValue(key: string, value: string): void;


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

  export class NamedResource {
    candidates: Object;
    uri: Object;
    constructor();

    resolve(): ResourceCandidate;
    resolve(resourceContext: ResourceContext): ResourceCandidate;

    resolveAll(): Object;
    resolveAll(resourceContext: ResourceContext): Object;

  }

  export class ResourceManager {
    static current: ResourceManager;
    allResourceMaps: Object;
    defaultContext: ResourceContext;
    mainResourceMap: ResourceMap;
    constructor();

    static isResourceReference(resourceReference: string): boolean;


    loadPriFiles(files: Object): void;

    unloadPriFiles(files: Object): void;

    getAllNamedResourcesForPackage(packageName: string, resourceLayoutInfo: ResourceLayoutInfo): Object;

    getAllSubtreesForPackage(packageName: string, resourceLayoutInfo: ResourceLayoutInfo): Object;

  }

  export class ResourceQualifier {
    isDefault: boolean;
    isMatch: boolean;
    qualifierName: string;
    qualifierValue: string;
    score: number;
    constructor();

  }

  export class ResourceCandidate {
    isDefault: boolean;
    isMatch: boolean;
    isMatchAsDefault: boolean;
    qualifiers: Object;
    valueAsString: string;
    constructor();

    getValueAsFileAsync(callback: (error: Error, result: Object) => void): void ;

    getValueAsStreamAsync(callback: (error: Error, result: Object) => void): void ;

    getQualifierValue(qualifierName: string): string;

  }

  export class ResourceMapIterator {
    current: Object;
    hasCurrent: boolean;
    constructor();

    moveNext(): boolean;

    getMany();
  }

  export class ResourceMapMapView {
    constructor();

    lookup(key: string): ResourceMap;

    hasKey(key: string): boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class ResourceMapMapViewIterator {
    current: Object;
    hasCurrent: boolean;
    constructor();

    moveNext(): boolean;

    getMany();
  }

  export class ResourceQualifierObservableMap {
    constructor();

    lookup(key: string): string;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: string): boolean;

    remove(key: string): void;

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

  export class ResourceQualifierMapView {
    constructor();

    lookup(key: string): string;

    hasKey(key: string): boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class ResourceQualifierVectorView {
    constructor();

    getAt(index: number): ResourceQualifier;

    indexOf(value: ResourceQualifier, index: number): boolean;

    getMany();
    first(): Object;

  }

  export class ResourceCandidateVectorView {
    constructor();

    getAt(index: number): ResourceCandidate;

    indexOf(value: ResourceCandidate, index: number): boolean;

    getMany();
    first(): Object;

  }

  export class ResourceContextLanguagesVectorView {
    constructor();

    getAt(index: number): string;

    indexOf(value: string, index: number): boolean;

    getMany();
    first(): Object;

  }

