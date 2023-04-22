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
    enabled: boolean;
    traceLevel: CausalityTraceLevel;
    constructor();

  }

  export class AsyncCausalityTracer {
    constructor();

    static traceOperationCreation(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: string, operationId: number, operationName: string, relatedContext: number): void;


    static traceOperationCompletion(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: string, operationId: number, status: number): void;


    static traceOperationRelation(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: string, operationId: number, relation: CausalityRelation): void;


    static traceSynchronousWorkStart(traceLevel: CausalityTraceLevel, source: CausalitySource, platformId: string, operationId: number, work: CausalitySynchronousWork): void;


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
    description: string;
    helpUri: Object;
    longDescription: string;
    constructor();

    static createFromHResultAsync(errorCode: number, callback: (error: Error, result: ErrorDetails) => void): void ;


  }

  export class LoggingOptions {
    task: number;
    tags: number;
    relatedActivityId: string;
    opcode: LoggingOpcode;
    keywords: number;
    activityId: string;
    constructor();
    constructor(keywords: number);

  }

  export class LoggingChannelOptions {
    group: string;
    constructor();
    constructor(group: string);

  }

  export class LoggingFields {
    constructor();

    addPointArray(name: string, value: Array<Object>, format: LoggingFieldFormat): void;
    addPointArray(name: string, value: Array<Object>, format: LoggingFieldFormat, tags: number): void;
    addPointArray(name: string, value: Array<Object>): void;

    addSize(name: string, value: Object): void;
    addSize(name: string, value: Object, format: LoggingFieldFormat): void;
    addSize(name: string, value: Object, format: LoggingFieldFormat, tags: number): void;

    addSizeArray(name: string, value: Array<Object>): void;
    addSizeArray(name: string, value: Array<Object>, format: LoggingFieldFormat): void;
    addSizeArray(name: string, value: Array<Object>, format: LoggingFieldFormat, tags: number): void;

    addRect(name: string, value: Object): void;
    addRect(name: string, value: Object, format: LoggingFieldFormat): void;
    addRect(name: string, value: Object, format: LoggingFieldFormat, tags: number): void;

    addRectArray(name: string, value: Array<Object>): void;
    addRectArray(name: string, value: Array<Object>, format: LoggingFieldFormat): void;
    addRectArray(name: string, value: Array<Object>, format: LoggingFieldFormat, tags: number): void;

    addSingle(name: string, value: number, format: LoggingFieldFormat): void;
    addSingle(name: string, value: number, format: LoggingFieldFormat, tags: number): void;
    addSingle(name: string, value: number): void;

    addSingleArray(name: string, value: Array<number>): void;
    addSingleArray(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addSingleArray(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addDouble(name: string, value: number): void;
    addDouble(name: string, value: number, format: LoggingFieldFormat): void;
    addDouble(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addDoubleArray(name: string, value: Array<number>): void;
    addDoubleArray(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addDoubleArray(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addChar16(name: string, value: string): void;
    addChar16(name: string, value: string, format: LoggingFieldFormat): void;
    addChar16(name: string, value: string, format: LoggingFieldFormat, tags: number): void;

    addChar16Array(name: string, value: Array<string>): void;
    addChar16Array(name: string, value: Array<string>, format: LoggingFieldFormat): void;
    addChar16Array(name: string, value: Array<string>, format: LoggingFieldFormat, tags: number): void;

    addBoolean(name: string, value: boolean): void;
    addBoolean(name: string, value: boolean, format: LoggingFieldFormat): void;
    addBoolean(name: string, value: boolean, format: LoggingFieldFormat, tags: number): void;

    addBooleanArray(name: string, value: Array<boolean>): void;
    addBooleanArray(name: string, value: Array<boolean>, format: LoggingFieldFormat): void;
    addBooleanArray(name: string, value: Array<boolean>, format: LoggingFieldFormat, tags: number): void;

    addString(name: string, value: string): void;
    addString(name: string, value: string, format: LoggingFieldFormat): void;
    addString(name: string, value: string, format: LoggingFieldFormat, tags: number): void;

    addStringArray(name: string, value: Array<string>): void;
    addStringArray(name: string, value: Array<string>, format: LoggingFieldFormat): void;
    addStringArray(name: string, value: Array<string>, format: LoggingFieldFormat, tags: number): void;

    addGuid(name: string, value: string): void;
    addGuid(name: string, value: string, format: LoggingFieldFormat): void;
    addGuid(name: string, value: string, format: LoggingFieldFormat, tags: number): void;

    addGuidArray(name: string, value: Array<string>): void;
    addGuidArray(name: string, value: Array<string>, format: LoggingFieldFormat): void;
    addGuidArray(name: string, value: Array<string>, format: LoggingFieldFormat, tags: number): void;

    addDateTime(name: string, value: Date): void;
    addDateTime(name: string, value: Date, format: LoggingFieldFormat): void;
    addDateTime(name: string, value: Date, format: LoggingFieldFormat, tags: number): void;

    addDateTimeArray(name: string, value: Array<Date>): void;
    addDateTimeArray(name: string, value: Array<Date>, format: LoggingFieldFormat): void;
    addDateTimeArray(name: string, value: Array<Date>, format: LoggingFieldFormat, tags: number): void;

    addTimeSpan(name: string, value: number): void;
    addTimeSpan(name: string, value: number, format: LoggingFieldFormat): void;
    addTimeSpan(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addTimeSpanArray(name: string, value: Array<number>): void;
    addTimeSpanArray(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addTimeSpanArray(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addPoint(name: string, value: Object): void;
    addPoint(name: string, value: Object, format: LoggingFieldFormat): void;
    addPoint(name: string, value: Object, format: LoggingFieldFormat, tags: number): void;

    clear(): void;

    beginStruct(name: string): void;
    beginStruct(name: string, tags: number): void;

    endStruct(): void;

    addEmpty(name: string): void;
    addEmpty(name: string, format: LoggingFieldFormat): void;
    addEmpty(name: string, format: LoggingFieldFormat, tags: number): void;

    addUInt8(name: string, value: number): void;
    addUInt8(name: string, value: number, format: LoggingFieldFormat): void;
    addUInt8(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addUInt8Array(name: string, value: Array<number>): void;
    addUInt8Array(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addUInt8Array(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addInt16(name: string, value: number): void;
    addInt16(name: string, value: number, format: LoggingFieldFormat): void;
    addInt16(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addInt16Array(name: string, value: Array<number>): void;
    addInt16Array(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addInt16Array(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addUInt16(name: string, value: number): void;
    addUInt16(name: string, value: number, format: LoggingFieldFormat): void;
    addUInt16(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addUInt16Array(name: string, value: Array<number>): void;
    addUInt16Array(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addUInt16Array(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addInt32(name: string, value: number): void;
    addInt32(name: string, value: number, format: LoggingFieldFormat): void;
    addInt32(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addInt32Array(name: string, value: Array<number>): void;
    addInt32Array(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addInt32Array(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addUInt32(name: string, value: number): void;
    addUInt32(name: string, value: number, format: LoggingFieldFormat): void;
    addUInt32(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addUInt32Array(name: string, value: Array<number>): void;
    addUInt32Array(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addUInt32Array(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addInt64(name: string, value: number): void;
    addInt64(name: string, value: number, format: LoggingFieldFormat): void;
    addInt64(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addInt64Array(name: string, value: Array<number>): void;
    addInt64Array(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addInt64Array(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

    addUInt64(name: string, value: number): void;
    addUInt64(name: string, value: number, format: LoggingFieldFormat): void;
    addUInt64(name: string, value: number, format: LoggingFieldFormat, tags: number): void;

    addUInt64Array(name: string, value: Array<number>): void;
    addUInt64Array(name: string, value: Array<number>, format: LoggingFieldFormat): void;
    addUInt64Array(name: string, value: Array<number>, format: LoggingFieldFormat, tags: number): void;

  }

  export class ILoggingTarget {
    constructor();

    isEnabled(): boolean;
    isEnabled(level: LoggingLevel): boolean;
    isEnabled(level: LoggingLevel, keywords: number): boolean;

    logEvent(eventName: string): void;
    logEvent(eventName: string, fields: LoggingFields): void;
    logEvent(eventName: string, fields: LoggingFields, level: LoggingLevel): void;
    logEvent(eventName: string, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): void;

    startActivity(startEventName: string): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields, level: LoggingLevel): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): LoggingActivity;

  }

  export class LoggingActivity {
    id: string;
    name: string;
    channel: LoggingChannel;
    constructor();
    constructor(activityName: string, loggingChannel: ILoggingChannel);
    constructor(activityName: string, loggingChannel: ILoggingChannel, level: LoggingLevel);

    close(): void;
    stopActivity(stopEventName: string): void;
    stopActivity(stopEventName: string, fields: LoggingFields): void;
    stopActivity(stopEventName: string, fields: LoggingFields, options: LoggingOptions): void;

    isEnabled(): boolean;
    isEnabled(level: LoggingLevel): boolean;
    isEnabled(level: LoggingLevel, keywords: number): boolean;

    logEvent(eventName: string): void;
    logEvent(eventName: string, fields: LoggingFields): void;
    logEvent(eventName: string, fields: LoggingFields, level: LoggingLevel): void;
    logEvent(eventName: string, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): void;

    startActivity(startEventName: string): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields, level: LoggingLevel): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): LoggingActivity;

  }

  export class ILoggingChannel {
    enabled: boolean;
    level: LoggingLevel;
    name: string;
    constructor();

    logMessage(eventString: string): void;
    logMessage(eventString: string, level: LoggingLevel): void;

    logValuePair(value1: string, value2: number): void;
    logValuePair(value1: string, value2: number, level: LoggingLevel): void;

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
    enabled: boolean;
    level: LoggingLevel;
    name: string;
    id: string;
    constructor();
    constructor(name: string, options: LoggingChannelOptions);
    constructor(name: string, options: LoggingChannelOptions, id: string);
    constructor(name: string);

    logMessage(eventString: string): void;
    logMessage(eventString: string, level: LoggingLevel): void;

    logValuePair(value1: string, value2: number): void;
    logValuePair(value1: string, value2: number, level: LoggingLevel): void;

    close(): void;
    isEnabled(): boolean;
    isEnabled(level: LoggingLevel): boolean;
    isEnabled(level: LoggingLevel, keywords: number): boolean;

    logEvent(eventName: string): void;
    logEvent(eventName: string, fields: LoggingFields): void;
    logEvent(eventName: string, fields: LoggingFields, level: LoggingLevel): void;
    logEvent(eventName: string, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): void;

    startActivity(startEventName: string): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields, level: LoggingLevel): LoggingActivity;
    startActivity(startEventName: string, fields: LoggingFields, level: LoggingLevel, options: LoggingOptions): LoggingActivity;

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
    name: string;
    constructor();

    saveToFileAsync(folder: Object, fileName: string, callback: (error: Error, result: Object) => void): void ;

    addLoggingChannel(loggingChannel: ILoggingChannel): void;
    addLoggingChannel(loggingChannel: ILoggingChannel, maxLevel: LoggingLevel): void;

    removeLoggingChannel(loggingChannel: ILoggingChannel): void;

  }

  export class LoggingSession {
    name: string;
    constructor();
    constructor(name: string);

    saveToFileAsync(folder: Object, fileName: string, callback: (error: Error, result: Object) => void): void ;

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
    name: string;
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
    name: string;
    constructor();
    constructor(name: string);

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

