  export class BackgroundDownloadProgress {
    bytesReceived: number;
    totalBytesToReceive: number;
    status: BackgroundTransferStatus;
    hasResponseChanged: boolean;
    hasRestarted: boolean;
    constructor();
  }

  export class BackgroundUploadProgress {
    bytesReceived: number;
    bytesSent: number;
    totalBytesToReceive: number;
    totalBytesToSend: number;
    status: BackgroundTransferStatus;
    hasResponseChanged: boolean;
    hasRestarted: boolean;
    constructor();
  }

  export class BackgroundTransferFileRange {
    offset: number;
    length: number;
    constructor();
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

  export enum BackgroundTransferCostPolicy {
    default,
    unrestrictedOnly,
    always,
  }

  export enum BackgroundTransferPriority {
    default,
    high,
  }

  export enum BackgroundTransferBehavior {
    parallel,
    serialized,
  }

  export class IBackgroundTransferBase {
    costPolicy: BackgroundTransferCostPolicy;
    group: string;
    method: string;
    proxyCredential: Object;
    serverCredential: Object;
    constructor();

    setRequestHeader(headerName: string, headerValue: string): void;

  }

  export class DownloadOperation {
    costPolicy: BackgroundTransferCostPolicy;
    requestedUri: Object;
    method: string;
    group: string;
    guid: string;
    priority: BackgroundTransferPriority;
    progress: BackgroundDownloadProgress;
    resultFile: Object;
    transferGroup: BackgroundTransferGroup;
    isRandomAccessRequired: boolean;
    currentWebErrorStatus: number;
    recoverableWebErrorStatuses: Object;
    constructor();

    startAsync(callback: (error: Error, result: DownloadOperation) => void): void ;

    attachAsync(callback: (error: Error, result: DownloadOperation) => void): void ;

    pause(): void;

    resume(): void;

    getResultStreamAt(position: number): Object;

    getResponseInformation(): ResponseInformation;

    getResultRandomAccessStreamReference(): Object;

    getDownloadedRanges(): Object;

    makeCurrentInTransferGroup(): void;

    addListener(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    on(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    off(type: "RangesDownloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UnconstrainedTransferRequestResult {
    isUnconstrained: boolean;
    constructor();

  }

  export class UploadOperation {
    costPolicy: BackgroundTransferCostPolicy;
    group: string;
    guid: string;
    method: string;
    requestedUri: Object;
    priority: BackgroundTransferPriority;
    progress: BackgroundUploadProgress;
    sourceFile: Object;
    transferGroup: BackgroundTransferGroup;
    constructor();

    startAsync(callback: (error: Error, result: UploadOperation) => void): void ;

    attachAsync(callback: (error: Error, result: UploadOperation) => void): void ;

    getResultStreamAt(position: number): Object;

    getResponseInformation(): ResponseInformation;

    makeCurrentInTransferGroup(): void;

  }

  export class BackgroundTransferGroup {
    transferBehavior: BackgroundTransferBehavior;
    name: string;
    constructor();

    static createGroup(name: string): BackgroundTransferGroup;


  }

  export class BackgroundTransferCompletionGroup {
    isEnabled: boolean;
    trigger: Object;
    constructor();

    enable(): void;

  }

  export class BackgroundTransferContentPart {
    constructor();
    constructor(name: string);
    constructor(name: string, fileName: string);

    setHeader(headerName: string, headerValue: string): void;

    setText(value: string): void;

    setFile(value: Object): void;

  }

  export class IBackgroundTransferOperation {
    costPolicy: BackgroundTransferCostPolicy;
    group: string;
    guid: string;
    method: string;
    requestedUri: Object;
    constructor();

    getResultStreamAt(position: number): Object;

    getResponseInformation(): ResponseInformation;

  }

  export class ResponseInformation {
    actualUri: Object;
    headers: Object;
    isResumable: boolean;
    statusCode: number;
    constructor();

  }

  export class IBackgroundTransferOperationPriority {
    priority: BackgroundTransferPriority;
    constructor();

  }

  export class BackgroundTransferRangesDownloadedEventArgs {
    addedRanges: Object;
    wasDownloadRestarted: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class BackgroundDownloader {
    failureToastNotification: Object;
    successTileNotification: Object;
    successToastNotification: Object;
    transferGroup: BackgroundTransferGroup;
    failureTileNotification: Object;
    completionGroup: BackgroundTransferCompletionGroup;
    costPolicy: BackgroundTransferCostPolicy;
    group: string;
    method: string;
    proxyCredential: Object;
    serverCredential: Object;
    constructor();
    constructor(completionGroup: BackgroundTransferCompletionGroup);

    static getCurrentDownloadsForTransferGroupAsync(group: BackgroundTransferGroup, callback: (error: Error, result: Object) => void): void ;


    static requestUnconstrainedDownloadsAsync(operations: Object, callback: (error: Error, result: UnconstrainedTransferRequestResult) => void): void ;


    static getCurrentDownloadsAsync(callback: (error: Error, result: Object) => void): void ;
    static getCurrentDownloadsAsync(group: string, callback: (error: Error, result: Object) => void): void ;


    createDownloadAsync(uri: Object, resultFile: Object, requestBodyStream: Object, callback: (error: Error, result: DownloadOperation) => void): void ;

    createDownload(uri: Object, resultFile: Object): DownloadOperation;
    createDownload(uri: Object, resultFile: Object, requestBodyFile: Object): DownloadOperation;

    setRequestHeader(headerName: string, headerValue: string): void;

  }

  export class BackgroundUploader {
    serverCredential: Object;
    proxyCredential: Object;
    method: string;
    group: string;
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
    static getCurrentUploadsAsync(group: string, callback: (error: Error, result: Object) => void): void ;


    createUploadFromStreamAsync(uri: Object, sourceStream: Object, callback: (error: Error, result: UploadOperation) => void): void ;

    createUploadAsync(uri: Object, parts: Object, callback: (error: Error, result: UploadOperation) => void): void ;
    createUploadAsync(uri: Object, parts: Object, subType: string, callback: (error: Error, result: UploadOperation) => void): void ;
    createUploadAsync(uri: Object, parts: Object, subType: string, boundary: string, callback: (error: Error, result: UploadOperation) => void): void ;

    createUpload(uri: Object, sourceFile: Object): UploadOperation;

    setRequestHeader(headerName: string, headerValue: string): void;

  }

  export class IBackgroundTransferContentPartFactory {
    constructor();

    createWithName(name: string): BackgroundTransferContentPart;

    createWithNameAndFileName(name: string, fileName: string): BackgroundTransferContentPart;

  }

  export class BackgroundTransferError {
    constructor();

    static getStatus(hresult: number): number;


  }

  export class ContentPrefetcher {
    static indirectContentUri: Object;
    static contentUris: Object;
    static lastSuccessfulPrefetchTime: Date;
    constructor();

  }

  export class BackgroundTransferCompletionGroupTriggerDetails {
    downloads: Object;
    uploads: Object;
    constructor();

  }

