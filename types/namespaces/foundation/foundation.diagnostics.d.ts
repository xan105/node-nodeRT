  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class Point {
    constructor();
  }

  export enum CausalityTraceLevel {
    required,
    important,
    verbose,
  }

  export enum CausalitySource {
    application,
    library,
    system,
  }

  export enum CausalityRelation {
    assignDelegate,
    join,
    choice,
    cancel,
    error,
  }

  export enum CausalitySynchronousWork {
    completionNotification,
    progressNotification,
    execution,
  }

  export enum ErrorOptions {
    none,
    suppressExceptions,
    forceExceptions,
    useSetErrorInfo,
    suppressSetErrorInfo,
  }

  export enum LoggingLevel {
    verbose,
    information,
    warning,
    error,
    critical,
  }

  export enum LoggingOpcode {
    info,
    start,
    stop,
    reply,
    resume,
    suspend,
    send,
  }

  export enum LoggingFieldFormat {
    default,
    hidden,
    string,
    boolean,
    hexadecimal,
    processId,
    threadId,
    port,
    ipv4Address,
    ipv6Address,
    socketAddress,
    xml,
    json,
    win32Error,
    nTStatus,
    hResult,
    fileTime,
    signed,
    unsigned,
  }

  export class TracingStatusChangedEventArgs {
    enabled: Boolean;
    traceLevel: CausalityTraceLevel;
    constructor();

  }

  export class AsyncCausalityTracer {
    constructor();

    static traceOperationCreation(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: String, operationId: Number, operationName: String, relatedContext: Number): void;


    static traceOperationCompletion(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: String, operationId: Number, status: Number): void;


    static traceOperationRelation(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: String, operationId: Number, relation: CausalityRelation): void;


    static traceSynchronousWorkStart(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: String, operationId: Number, work: CausalitySynchronousWork): void;


    static traceSynchronousWorkCompletion(traceLevel: CausalityTraceLevel, source: CausalitySource, work: CausalitySynchronousWork): void;


    addListener(type: "TracingStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TracingStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "TracingStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "TracingStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IErrorReportingSettings {
    constructor();

    setErrorOptions(value: ErrorOptions): void;

    getErrorOptions(): ErrorOptions;

  }

  export class RuntimeBrokerErrorSettings {
    constructor();

    setErrorOptions(value: ErrorOptions): void;

    getErrorOptions(): ErrorOptions;

  }

  export class ErrorDetails {
    description: String;
    helpUri: Object;
    longDescription: String;
    constructor();

    static createFromHResultAsync(errorCode: Number, callback: (error: Error, result: ErrorDetails) => void): void ;


  }

  export class LoggingOptions {
    task: Number;
    tags: Number;
    relatedActivityId: String;
    opcode: LoggingOpcode;
    keywords: Number;
    activityId: String;
    constructor();
    constructor(keywords: Number);

  }

  export class LoggingChannelOptions {
    group: String;
    constructor();
    constructor(group: String);

  }

  export class LoggingFields {
    constructor();

    addPointArray(name: String, value: Array<Object>, format: LoggingFieldFormat): void;
    addPointArray(name: String, value: Array<Object>, format: LoggingFieldFormat, tags: Number): void;
    addPointArray(name: String, value: Array<Object>): void;

    addSize(name: String, value: Object): void;
    addSize(name: String, value: Object, format: LoggingFieldFormat): void;
    addSize(name: String, value: Object, format: LoggingFieldFormat, tags: Number): void;

    addSizeArray(name: String, value: Array<Object>): void;
    addSizeArray(name: String, value: Array<Object>, format: LoggingFieldFormat): void;
    addSizeArray(name: String, value: Array<Object>, format: LoggingFieldFormat, tags: Number): void;

    addRect(name: String, value: Object): void;
    addRect(name: String, value: Object, format: LoggingFieldFormat): void;
    addRect(name: String, value: Object, format: LoggingFieldFormat, tags: Number): void;

    addRectArray(name: String, value: Array<Object>): void;
    addRectArray(name: String, value: Array<Object>, format: LoggingFieldFormat): void;
    addRectArray(name: String, value: Array<Object>, format: LoggingFieldFormat, tags: Number): void;

    addSingle(name: String, value: Number, format: LoggingFieldFormat): void;
    addSingle(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;
    addSingle(name: String, value: Number): void;

    addSingleArray(name: String, value: Array<Number>): void;
    addSingleArray(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addSingleArray(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addDouble(name: String, value: Number): void;
    addDouble(name: String, value: Number, format: LoggingFieldFormat): void;
    addDouble(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addDoubleArray(name: String, value: Array<Number>): void;
    addDoubleArray(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addDoubleArray(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addChar16(name: String, value: String): void;
    addChar16(name: String, value: String, format: LoggingFieldFormat): void;
    addChar16(name: String, value: String, format: LoggingFieldFormat, tags: Number): void;

    addChar16Array(name: String, value: Array<String>): void;
    addChar16Array(name: String, value: Array<String>, format: LoggingFieldFormat): void;
    addChar16Array(name: String, value: Array<String>, format: LoggingFieldFormat, tags: Number): void;

    addBoolean(name: String, value: Boolean): void;
    addBoolean(name: String, value: Boolean, format: LoggingFieldFormat): void;
    addBoolean(name: String, value: Boolean, format: LoggingFieldFormat, tags: Number): void;

    addBooleanArray(name: String, value: Array<Boolean>): void;
    addBooleanArray(name: String, value: Array<Boolean>, format: LoggingFieldFormat): void;
    addBooleanArray(name: String, value: Array<Boolean>, format: LoggingFieldFormat, tags: Number): void;

    addString(name: String, value: String): void;
    addString(name: String, value: String, format: LoggingFieldFormat): void;
    addString(name: String, value: String, format: LoggingFieldFormat, tags: Number): void;

    addStringArray(name: String, value: Array<String>): void;
    addStringArray(name: String, value: Array<String>, format: LoggingFieldFormat): void;
    addStringArray(name: String, value: Array<String>, format: LoggingFieldFormat, tags: Number): void;

    addGuid(name: String, value: String): void;
    addGuid(name: String, value: String, format: LoggingFieldFormat): void;
    addGuid(name: String, value: String, format: LoggingFieldFormat, tags: Number): void;

    addGuidArray(name: String, value: Array<String>): void;
    addGuidArray(name: String, value: Array<String>, format: LoggingFieldFormat): void;
    addGuidArray(name: String, value: Array<String>, format: LoggingFieldFormat, tags: Number): void;

    addDateTime(name: String, value: Date): void;
    addDateTime(name: String, value: Date, format: LoggingFieldFormat): void;
    addDateTime(name: String, value: Date, format: LoggingFieldFormat, tags: Number): void;

    addDateTimeArray(name: String, value: Array<Date>): void;
    addDateTimeArray(name: String, value: Array<Date>, format: LoggingFieldFormat): void;
    addDateTimeArray(name: String, value: Array<Date>, format: LoggingFieldFormat, tags: Number): void;

    addTimeSpan(name: String, value: Number): void;
    addTimeSpan(name: String, value: Number, format: LoggingFieldFormat): void;
    addTimeSpan(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addTimeSpanArray(name: String, value: Array<Number>): void;
    addTimeSpanArray(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addTimeSpanArray(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addPoint(name: String, value: Object): void;
    addPoint(name: String, value: Object, format: LoggingFieldFormat): void;
    addPoint(name: String, value: Object, format: LoggingFieldFormat, tags: Number): void;

    clear(): void;

    beginStruct(name: String): void;
    beginStruct(name: String, tags: Number): void;

    endStruct(): void;

    addEmpty(name: String): void;
    addEmpty(name: String, format: LoggingFieldFormat): void;
    addEmpty(name: String, format: LoggingFieldFormat, tags: Number): void;

    addUInt8(name: String, value: Number): void;
    addUInt8(name: String, value: Number, format: LoggingFieldFormat): void;
    addUInt8(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addUInt8Array(name: String, value: Array<Number>): void;
    addUInt8Array(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addUInt8Array(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addInt16(name: String, value: Number): void;
    addInt16(name: String, value: Number, format: LoggingFieldFormat): void;
    addInt16(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addInt16Array(name: String, value: Array<Number>): void;
    addInt16Array(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addInt16Array(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addUInt16(name: String, value: Number): void;
    addUInt16(name: String, value: Number, format: LoggingFieldFormat): void;
    addUInt16(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addUInt16Array(name: String, value: Array<Number>): void;
    addUInt16Array(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addUInt16Array(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addInt32(name: String, value: Number): void;
    addInt32(name: String, value: Number, format: LoggingFieldFormat): void;
    addInt32(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addInt32Array(name: String, value: Array<Number>): void;
    addInt32Array(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addInt32Array(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addUInt32(name: String, value: Number): void;
    addUInt32(name: String, value: Number, format: LoggingFieldFormat): void;
    addUInt32(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addUInt32Array(name: String, value: Array<Number>): void;
    addUInt32Array(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addUInt32Array(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addInt64(name: String, value: Number): void;
    addInt64(name: String, value: Number, format: LoggingFieldFormat): void;
    addInt64(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addInt64Array(name: String, value: Array<Number>): void;
    addInt64Array(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addInt64Array(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

    addUInt64(name: String, value: Number): void;
    addUInt64(name: String, value: Number, format: LoggingFieldFormat): void;
    addUInt64(name: String, value: Number, format: LoggingFieldFormat, tags: Number): void;

    addUInt64Array(name: String, value: Array<Number>): void;
    addUInt64Array(name: String, value: Array<Number>, format: LoggingFieldFormat): void;
    addUInt64Array(name: String, value: Array<Number>, format: LoggingFieldFormat, tags: Number): void;

  }

  export class ILoggingTarget {
    constructor();

    isEnabled(): Boolean;
    isEnabled(level: LoggingLevel): Boolean;
    isEnabled(level: LoggingLevel, keywords: Number): Boolean;

    logEvent(eventName: String): void;
    logEvent(eventName: String, fields: LoggingFields): void;
    logEvent(eventName: String, fields: LoggingFields, level: LoggingLevel): void;
    logEvent(eventName: String, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): void;

    startActivity(startEventName: String): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields, level: LoggingLevel): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): LoggingActivity;

  }

  export class LoggingActivity {
    id: String;
    name: String;
    channel: LoggingChannel;
    constructor();
    constructor(activityName: String, loggingChannel: ILoggingChannel);
    constructor(activityName: String, loggingChannel: ILoggingChannel, level: LoggingLevel);

    close(): void;
    stopActivity(stopEventName: String): void;
    stopActivity(stopEventName: String, fields: LoggingFields): void;
    stopActivity(stopEventName: String, fields: LoggingFields, options: LoggingOptions): void;

    isEnabled(): Boolean;
    isEnabled(level: LoggingLevel): Boolean;
    isEnabled(level: LoggingLevel, keywords: Number): Boolean;

    logEvent(eventName: String): void;
    logEvent(eventName: String, fields: LoggingFields): void;
    logEvent(eventName: String, fields: LoggingFields, level: LoggingLevel): void;
    logEvent(eventName: String, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): void;

    startActivity(startEventName: String): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields, level: LoggingLevel): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): LoggingActivity;

  }

  export class ILoggingChannel {
    enabled: Boolean;
    level: LoggingLevel;
    name: String;
    constructor();

    logMessage(eventString: String): void;
    logMessage(eventString: String, level: LoggingLevel): void;

    logValuePair(value1: String, value2: Number): void;
    logValuePair(value1: String, value2: Number, level: LoggingLevel): void;

    addListener(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    removeListener(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    on(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    off(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LoggingChannel {
    enabled: Boolean;
    level: LoggingLevel;
    name: String;
    id: String;
    constructor();
    constructor(name: String, options: LoggingChannelOptions);
    constructor(name: String, options: LoggingChannelOptions, id: String);
    constructor(name: String);

    logMessage(eventString: String): void;
    logMessage(eventString: String, level: LoggingLevel): void;

    logValuePair(value1: String, value2: Number): void;
    logValuePair(value1: String, value2: Number, level: LoggingLevel): void;

    close(): void;
    isEnabled(): Boolean;
    isEnabled(level: LoggingLevel): Boolean;
    isEnabled(level: LoggingLevel, keywords: Number): Boolean;

    logEvent(eventName: String): void;
    logEvent(eventName: String, fields: LoggingFields): void;
    logEvent(eventName: String, fields: LoggingFields, level: LoggingLevel): void;
    logEvent(eventName: String, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): void;

    startActivity(startEventName: String): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields, level: LoggingLevel): LoggingActivity;
    startActivity(startEventName: String, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): LoggingActivity;

    addListener(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    removeListener(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    on(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    off(type: "LoggingEnabled", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ILoggingSession {
    name: String;
    constructor();

    saveToFileAsync(folder: Object, fileName: String, callback: (error: Error, result: Object) => void): void ;

    addLoggingChannel(loggingChannel: ILoggingChannel): void;
    addLoggingChannel(loggingChannel: ILoggingChannel, maxLevel: LoggingLevel): void;

    removeLoggingChannel(loggingChannel: ILoggingChannel): void;

  }

  export class LoggingSession {
    name: String;
    constructor();
    constructor(name: String);

    saveToFileAsync(folder: Object, fileName: String, callback: (error: Error, result: Object) => void): void ;

    addLoggingChannel(loggingChannel: ILoggingChannel): void;
    addLoggingChannel(loggingChannel: ILoggingChannel, maxLevel: LoggingLevel): void;

    removeLoggingChannel(loggingChannel: ILoggingChannel): void;

    close(): void;
  }

  export class LogFileGeneratedEventArgs {
    file: Object;
    constructor();

  }

  export class IFileLoggingSession {
    name: String;
    constructor();

    closeAndSaveToFileAsync(callback: (error: Error, result: Object) => void): void ;

    addLoggingChannel(loggingChannel: ILoggingChannel): void;
    addLoggingChannel(loggingChannel: ILoggingChannel, maxLevel: LoggingLevel): void;

    removeLoggingChannel(loggingChannel: ILoggingChannel): void;

    addListener(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    removeListener(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    on(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    off(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FileLoggingSession {
    name: String;
    constructor();
    constructor(name: String);

    closeAndSaveToFileAsync(callback: (error: Error, result: Object) => void): void ;

    addLoggingChannel(loggingChannel: ILoggingChannel): void;
    addLoggingChannel(loggingChannel: ILoggingChannel, maxLevel: LoggingLevel): void;

    removeLoggingChannel(loggingChannel: ILoggingChannel): void;

    close(): void;
    addListener(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    removeListener(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    on(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    off(type: "LogFileGenerated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

