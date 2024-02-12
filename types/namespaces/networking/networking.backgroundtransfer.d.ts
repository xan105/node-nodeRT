  export class BackgroundDownloadProgress {
    bytesReceived: Number;
    totalBytesToReceive: Number;
    status: BackgroundTransferStatus;
    hasResponseChanged: Boolean;
    hasRestarted: Boolean;
    constructor();
  }

  export class BackgroundTransferFileRange {
    offset: Number;
    length: Number;
    constructor();
  }

  export class BackgroundUploadProgress {
    bytesReceived: Number;
    bytesSent: Number;
    totalBytesToReceive: Number;
    totalBytesToSend: Number;
    status: BackgroundTransferStatus;
    hasResponseChanged: Boolean;
    hasRestarted: Boolean;
    constructor();
  }

  export enum BackgroundTransferBehavior {
    parallel,
    serialized,
  }

  export enum BackgroundTransferCostPolicy {
    default,
    unrestrictedOnly,
    always,
  }

  export enum BackgroundTransferPriority {
    default,
    high,
    low,
  }

  export enum BackgroundTransferStatus {
    idle,
    running,
    pausedByApplication,
    pausedCostedNetwork,
    pausedNoNetwork,
    completed,
    canceled,
    error,
    pausedRecoverableWebErrorStatus,
    pausedSystemPolicy,
  }

  export class BackgroundDownloader {
    failureToastNotification: Object;
    successTileNotification: Object;
    successToastNotification: Object;
    transferGroup: BackgroundTransferGroup;
    failureTileNotification: Object;
    completionGroup: BackgroundTransferCompletionGroup;
    costPolicy: BackgroundTransferCostPolicy;
    group: String;
    method: String;
    proxyCredential: Object;
    serverCredential: Object;
    constructor();
    constructor(completionGroup: BackgroundTransferCompletionGroup);

    static getCurrentDownloadsForTransferGroupAsync(group: BackgroundTransferGroup, callback: (error: Error, result: Object) => void): void ;


    static requestUnconstrainedDownloadsAsync(operations: Object, callback: (error: Error, result: UnconstrainedTransferRequestResult) => void): void ;


    static getCurrentDownloadsAsync(callback: (error: Error, result: Object) => void): void ;
    static getCurrentDownloadsAsync(group: String, callback: (error: Error, result: Object) => void): void ;


    createDownloadAsync(uri: Object, resultFile: Object, requestBodyStream: Object, callback: (error: Error, result: DownloadOperation) => void): void ;

    createDownload(uri: Object, resultFile: Object): DownloadOperation;
    createDownload(uri: Object, resultFile: Object, requestBodyFile: Object): DownloadOperation;

    setRequestHeader(headerName: String, headerValue: String): void;

  }

  export class BackgroundTransferCompletionGroup {
    isEnabled: Boolean;
    trigger: Object;
    constructor();

    enable(): void;

  }

  export class BackgroundTransferCompletionGroupTriggerDetails {
    downloads: Object;
    uploads: Object;
    constructor();

  }

  export class BackgroundTransferContentPart {
    constructor();
    constructor(name: String);
    constructor(name: String, fileName: String);

    setHeader(headerName: String, headerValue: String): void;

    setText(value: String): void;

    setFile(value: Object): void;

  }

  export class BackgroundTransferError {
    constructor();

    static getStatus(hresult: Number): Number;


  }

  export class BackgroundTransferGroup {
    transferBehavior: BackgroundTransferBehavior;
    name: String;
    constructor();

    static createGroup(name: String): BackgroundTransferGroup;


  }

  export class BackgroundTransferRangesDownloadedEventArgs {
    addedRanges: Object;
    wasDownloadRestarted: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class BackgroundUploader {
    serverCredential: Object;
    proxyCredential: Object;
    method: String;
    group: String;
    costPolicy: BackgroundTransferCostPolicy;
    failureTileNotification: Object;
    transferGroup: BackgroundTransferGroup;
    successToastNotification: Object;
    successTileNotification: Object;
    failureToastNotification: Object;
    completionGroup: BackgroundTransferCompletionGroup;
    constructor();
    constructor(completionGroup: BackgroundTransferCompletionGroup);

    static getCurrentUploadsForTransferGroupAsync(group: BackgroundTransferGroup, callback: (error: Error, result: Object) => void): void ;


    static requestUnconstrainedUploadsAsync(operations: Object, callback: (error: Error, result: UnconstrainedTransferRequestResult) => void): void ;


    static getCurrentUploadsAsync(callback: (error: Error, result: Object) => void): void ;
    static getCurrentUploadsAsync(group: String, callback: (error: Error, result: Object) => void): void ;


    createUploadFromStreamAsync(uri: Object, sourceStream: Object, callback: (error: Error, result: UploadOperation) => void): void ;

    createUploadAsync(uri: Object, parts: Object, callback: (error: Error, result: UploadOperation) => void): void ;
    createUploadAsync(uri: Object, parts: Object, subType: String, callback: (error: Error, result: UploadOperation) => void): void ;
    createUploadAsync(uri: Object, parts: Object, subType: String, boundary: String, callback: (error: Error, result: UploadOperation) => void): void ;

    createUpload(uri: Object, sourceFile: Object): UploadOperation;

    setRequestHeader(headerName: String, headerValue: String): void;

  }

  export class ContentPrefetcher {
    static indirectContentUri: Object;
    static contentUris: Object;
    static lastSuccessfulPrefetchTime: Date;
    constructor();

  }

  export class DownloadOperation {
    costPolicy: BackgroundTransferCostPolicy;
    requestedUri: Object;
    method: String;
    group: String;
    guid: String;
    priority: BackgroundTransferPriority;
    progress: BackgroundDownloadProgress;
    resultFile: Object;
    transferGroup: BackgroundTransferGroup;
    isRandomAccessRequired: Boolean;
    currentWebErrorStatus: Number;
    recoverableWebErrorStatuses: Object;
    constructor();

    startAsync(callback: (error: Error, result: DownloadOperation) => void): void ;

    attachAsync(callback: (error: Error, result: DownloadOperation) => void): void ;

    pause(): void;

    resume(): void;

    getResultStreamAt(position: Number): Object;

    getResponseInformation(): ResponseInformation;

    getResultRandomAccessStreamReference(): Object;

    getDownloadedRanges(): Object;

    makeCurrentInTransferGroup(): void;

    setRequestHeader(headerName: String, headerValue: String): void;

    removeRequestHeader(headerName: String): void;

    addListener(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    on(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    off(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IBackgroundTransferBase {
    costPolicy: BackgroundTransferCostPolicy;
    group: String;
    method: String;
    proxyCredential: Object;
    serverCredential: Object;
    constructor();

    setRequestHeader(headerName: String, headerValue: String): void;

  }

  export class IBackgroundTransferContentPartFactory {
    constructor();

    createWithName(name: String): BackgroundTransferContentPart;

    createWithNameAndFileName(name: String, fileName: String): BackgroundTransferContentPart;

  }

  export class IBackgroundTransferOperation {
    costPolicy: BackgroundTransferCostPolicy;
    group: String;
    guid: String;
    method: String;
    requestedUri: Object;
    constructor();

    getResultStreamAt(position: Number): Object;

    getResponseInformation(): ResponseInformation;

  }

  export class IBackgroundTransferOperationPriority {
    priority: BackgroundTransferPriority;
    constructor();

  }

  export class ResponseInformation {
    actualUri: Object;
    headers: Object;
    isResumable: Boolean;
    statusCode: Number;
    constructor();

  }

  export class UnconstrainedTransferRequestResult {
    isUnconstrained: Boolean;
    constructor();

  }

  export class UploadOperation {
    costPolicy: BackgroundTransferCostPolicy;
    group: String;
    guid: String;
    method: String;
    requestedUri: Object;
    priority: BackgroundTransferPriority;
    progress: BackgroundUploadProgress;
    sourceFile: Object;
    transferGroup: BackgroundTransferGroup;
    constructor();

    startAsync(callback: (error: Error, result: UploadOperation) => void): void ;

    attachAsync(callback: (error: Error, result: UploadOperation) => void): void ;

    getResultStreamAt(position: Number): Object;

    getResponseInformation(): ResponseInformation;

    makeCurrentInTransferGroup(): void;

    setRequestHeader(headerName: String, headerValue: String): void;

    removeRequestHeader(headerName: String): void;

  }

