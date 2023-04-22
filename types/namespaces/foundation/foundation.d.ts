  export class FoundationContract {
    constructor();
  }

  export class UniversalApiContract {
    constructor();
  }

  export enum PropertyType {
    empty,
    uInt8,
    int16,
    uInt16,
    int32,
    uInt32,
    int64,
    uInt64,
    single,
    double,
    char16,
    boolean,
    string,
    inspectable,
    dateTime,
    timeSpan,
    guid,
    point,
    size,
    rect,
    otherType,
    uInt8Array,
    int16Array,
    uInt16Array,
    int32Array,
    uInt32Array,
    int64Array,
    uInt64Array,
    singleArray,
    doubleArray,
    char16Array,
    booleanArray,
    stringArray,
    inspectableArray,
    dateTimeArray,
    timeSpanArray,
    guidArray,
    pointArray,
    sizeArray,
    rectArray,
    otherTypeArray,
  }

  export enum AsyncStatus {
    canceled,
    completed,
    error,
    started,
  }

  export class PropertyValue {
    constructor();

    static createEmpty(): Object;


    static createUInt8(value: number): Object;


    static createInt16(value: number): Object;


    static createUInt16(value: number): Object;


    static createInt32(value: number): Object;


    static createUInt32(value: number): Object;


    static createInt64(value: number): Object;


    static createUInt64(value: number): Object;


    static createSingle(value: number): Object;


    static createDouble(value: number): Object;


    static createChar16(value: string): Object;


    static createBoolean(value: boolean): Object;


    static createString(value: string): Object;


    static createInspectable(value: Object): Object;


    static createGuid(value: string): Object;


    static createDateTime(value: Date): Object;


    static createTimeSpan(value: number): Object;


    static createPoint(value: Object): Object;


    static createSize(value: Object): Object;


    static createRect(value: Object): Object;


    static createUInt8Array(value: Array<number>): Object;


    static createInt16Array(value: Array<number>): Object;


    static createUInt16Array(value: Array<number>): Object;


    static createInt32Array(value: Array<number>): Object;


    static createUInt32Array(value: Array<number>): Object;


    static createInt64Array(value: Array<number>): Object;


    static createUInt64Array(value: Array<number>): Object;


    static createSingleArray(value: Array<number>): Object;


    static createDoubleArray(value: Array<number>): Object;


    static createChar16Array(value: Array<string>): Object;


    static createBooleanArray(value: Array<boolean>): Object;


    static createStringArray(value: Array<string>): Object;


    static createInspectableArray(value: Array<Object>): Object;


    static createGuidArray(value: Array<string>): Object;


    static createDateTimeArray(value: Array<Date>): Object;


    static createTimeSpanArray(value: Array<number>): Object;


    static createPointArray(value: Array<Object>): Object;


    static createSizeArray(value: Array<Object>): Object;


    static createRectArray(value: Array<Object>): Object;


  }

  export class IStringable {
    constructor();

    toString(): string;

  }

  export class Deferral {
    constructor();
    constructor(handler: Object);

    complete(): void;

    close(): void;
  }

  export class IAsyncInfo {
    errorCode: number;
    id: number;
    status: AsyncStatus;
    constructor();

    cancel(): void;

    close(): void;

  }

  export class IAsyncAction {
    completed: Object;
    constructor();

    getResults(): void;

  }

  export class IMemoryBufferReference {
    capacity: number;
    constructor();

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IMemoryBuffer {
    constructor();

    createReference(): IMemoryBufferReference;

  }

  export class MemoryBuffer {
    constructor();
    constructor(capacity: number);

    createReference(): IMemoryBufferReference;

    close(): void;
  }

  export class WwwFormUrlDecoder {
    constructor();
    constructor(query: string);

    getFirstValueByName(name: string): string;

    first(): Object;

    getAt(index: number): IWwwFormUrlDecoderEntry;

    indexOf(value: IWwwFormUrlDecoderEntry, index: number): boolean;

    getMany();
  }

  export class IWwwFormUrlDecoderEntry {
    name: string;
    value: string;
    constructor();

  }

  export class WwwFormUrlDecoderEntry {
    name: string;
    value: string;
    constructor();

  }

  export class IGetActivationFactory {
    constructor();

    getActivationFactory(activatableClassId: string): Object;

  }

  export class IPropertyValue {
    isNumericScalar: boolean;
    type: PropertyType;
    constructor();

    getUInt8(): number;

    getInt16(): number;

    getUInt16(): number;

    getInt32(): number;

    getUInt32(): number;

    getInt64(): number;

    getUInt64(): number;

    getSingle(): number;

    getDouble(): number;

    getChar16(): string;

    getBoolean(): boolean;

    getString(): string;

    getGuid(): string;

    getDateTime(): Date;

    getTimeSpan(): number;

    getPoint(): Object;

    getSize(): Object;

    getRect(): Object;

    getUInt8Array(value: Array<number>): void;

    getInt16Array(value: Array<number>): void;

    getUInt16Array(value: Array<number>): void;

    getInt32Array(value: Array<number>): void;

    getUInt32Array(value: Array<number>): void;

    getInt64Array(value: Array<number>): void;

    getUInt64Array(value: Array<number>): void;

    getSingleArray(value: Array<number>): void;

    getDoubleArray(value: Array<number>): void;

    getChar16Array(value: Array<string>): void;

    getBooleanArray(value: Array<boolean>): void;

    getStringArray(value: Array<string>): void;

    getInspectableArray(value: Array<Object>): void;

    getGuidArray(value: Array<string>): void;

    getDateTimeArray(value: Array<Date>): void;

    getTimeSpanArray(value: Array<number>): void;

    getPointArray(value: Array<Object>): void;

    getSizeArray(value: Array<Object>): void;

    getRectArray(value: Array<Object>): void;

  }

  export class Uri {
    absoluteUri: string;
    displayUri: string;
    domain: string;
    extension: string;
    fragment: string;
    host: string;
    password: string;
    path: string;
    port: number;
    query: string;
    queryParsed: WwwFormUrlDecoder;
    rawUri: string;
    schemeName: string;
    suspicious: boolean;
    userName: string;
    absoluteCanonicalUri: string;
    displayIri: string;
    constructor();
    constructor(uri: string);
    constructor(baseUri: string, relativeUri: string);

    static unescapeComponent(toUnescape: string): string;


    static escapeComponent(toEscape: string): string;


    equals(pUri: Object): boolean;

    combineUri(relativeUri: string): Object;

    toString(): string;

  }

export * as collections from "./foundation.collections.js";
export * as diagnostics from "./foundation.diagnostics.js";
export * as metadata from "./foundation.metadata.js";
export * as numerics from "./foundation.numerics.js";