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

    stringify(): String;

    getString(): String;

    getNumber(): Number;

    getBoolean(): Boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

  }

  export class JsonArray {
    valueType: JsonValueType;
    constructor();

    static parse(input: String): JsonArray;


    static tryParse(input: String, result: Object): Boolean;


    getObjectAt(index: Number): JsonObject;

    getArrayAt(index: Number): JsonArray;

    getStringAt(index: Number): String;

    getNumberAt(index: Number): Number;

    getBooleanAt(index: Number): Boolean;

    stringify(): String;

    getString(): String;

    getNumber(): Number;

    getBoolean(): Boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

    getAt(index: Number): IJsonValue;

    getView(): Object;

    indexOf(value: IJsonValue, index: Number): Boolean;

    setAt(index: Number, value: IJsonValue): void;

    insertAt(index: Number, value: IJsonValue): void;

    removeAt(index: Number): void;

    append(value: IJsonValue): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    toString(): String;

  }

  export class JsonObject {
    valueType: JsonValueType;
    constructor();

    static parse(input: String): JsonObject;


    static tryParse(input: String, result: Object): Boolean;


    getNamedValue(name: String): JsonValue;
    getNamedValue(name: String, defaultValue: JsonValue): JsonValue;

    setNamedValue(name: String, value: IJsonValue): void;

    getNamedObject(name: String): JsonObject;
    getNamedObject(name: String, defaultValue: JsonObject): JsonObject;

    getNamedArray(name: String): JsonArray;
    getNamedArray(name: String, defaultValue: JsonArray): JsonArray;

    getNamedString(name: String): String;
    getNamedString(name: String, defaultValue: String): String;

    getNamedNumber(name: String): Number;
    getNamedNumber(name: String, defaultValue: Number): Number;

    getNamedBoolean(name: String): Boolean;
    getNamedBoolean(name: String, defaultValue: Boolean): Boolean;

    stringify(): String;

    getString(): String;

    getNumber(): Number;

    getBoolean(): Boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

    lookup(key: String): IJsonValue;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: IJsonValue): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    toString(): String;

  }

  export class JsonValue {
    valueType: JsonValueType;
    constructor();

    static createNullValue(): JsonValue;


    static parse(input: String): JsonValue;


    static tryParse(input: String, result: Object): Boolean;


    static createBooleanValue(input: Boolean): JsonValue;


    static createNumberValue(input: Number): JsonValue;


    static createStringValue(input: String): JsonValue;


    stringify(): String;

    getString(): String;

    getNumber(): Number;

    getBoolean(): Boolean;

    getArray(): JsonArray;

    getObject(): JsonObject;

    toString(): String;

  }

  export class JsonError {
    constructor();

    static getJsonStatus(hresult: Number): JsonErrorStatus;


  }

