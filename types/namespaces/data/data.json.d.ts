  export enum JsonValueType {
    null,
    boolean,
    number,
    string,
    array,
    object,
  }

  export enum JsonErrorStatus {
    unknown,
    invalidJsonString,
    invalidJsonNumber,
    jsonValueNotFound,
    implementationLimit,
  }

  export class IJsonValue {
    valueType: JsonValueType;
    constructor();

    stringify(): string;

    getString(): string;

    getNumber(): number;

    getBoolean(): boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

  }

  export class JsonArray {
    valueType: JsonValueType;
    constructor();

    static parse(input: string): JsonArray;


    static tryParse(input: string, result: Object): boolean;


    getObjectAt(index: number): JsonObject;

    getArrayAt(index: number): JsonArray;

    getStringAt(index: number): string;

    getNumberAt(index: number): number;

    getBooleanAt(index: number): boolean;

    stringify(): string;

    getString(): string;

    getNumber(): number;

    getBoolean(): boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

    getAt(index: number): IJsonValue;

    getView(): Object;

    indexOf(value: IJsonValue, index: number): boolean;

    setAt(index: number, value: IJsonValue): void;

    insertAt(index: number, value: IJsonValue): void;

    removeAt(index: number): void;

    append(value: IJsonValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): string;

  }

  export class JsonObject {
    valueType: JsonValueType;
    constructor();

    static parse(input: string): JsonObject;


    static tryParse(input: string, result: Object): boolean;


    getNamedValue(name: string): JsonValue;
    getNamedValue(name: string, defaultValue: JsonValue): JsonValue;

    setNamedValue(name: string, value: IJsonValue): void;

    getNamedObject(name: string): JsonObject;
    getNamedObject(name: string, defaultValue: JsonObject): JsonObject;

    getNamedArray(name: string): JsonArray;
    getNamedArray(name: string, defaultValue: JsonArray): JsonArray;

    getNamedString(name: string): string;
    getNamedString(name: string, defaultValue: string): string;

    getNamedNumber(name: string): number;
    getNamedNumber(name: string, defaultValue: number): number;

    getNamedBoolean(name: string): boolean;
    getNamedBoolean(name: string, defaultValue: boolean): boolean;

    stringify(): string;

    getString(): string;

    getNumber(): number;

    getBoolean(): boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

    lookup(key: string): IJsonValue;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: IJsonValue): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

    toString(): string;

  }

  export class JsonValue {
    valueType: JsonValueType;
    constructor();

    static createNullValue(): JsonValue;


    static parse(input: string): JsonValue;


    static tryParse(input: string, result: Object): boolean;


    static createBooleanValue(input: boolean): JsonValue;


    static createNumberValue(input: number): JsonValue;


    static createStringValue(input: string): JsonValue;


    stringify(): string;

    getString(): string;

    getNumber(): number;

    getBoolean(): boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

    toString(): string;

  }

  export class JsonError {
    constructor();

    static getJsonStatus(hresult: number): JsonErrorStatus;


  }

