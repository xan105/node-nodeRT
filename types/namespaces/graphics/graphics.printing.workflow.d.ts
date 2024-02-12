  export enum PdlConversionHostBasedProcessingOperations {
    none,
    pageRotation,
    pageOrdering,
    copies,
    blankPageInsertion,
    all,
  }

  export enum PrintWorkflowAttributesMergePolicy {
    mergePreferPrintTicketOnConflict,
    mergePreferPsaOnConflict,
    doNotMergeWithPrintTicket,
  }

  export enum PrintWorkflowJobAbortReason {
    jobFailed,
    userCanceled,
  }

  export enum PrintWorkflowPdlConversionType {
    xpsToPdf,
    xpsToPwgr,
    xpsToPclm,
  }

  export enum PrintWorkflowPrinterJobStatus {
    error,
    aborted,
    inProgress,
    completed,
  }

  export enum PrintWorkflowSessionStatus {
    started,
    completed,
    aborted,
    closed,
    pdlDataAvailableForModification,
  }

  export enum PrintWorkflowSubmittedStatus {
    succeeded,
    canceled,
    failed,
  }

  export enum PrintWorkflowUICompletionStatus {
    completed,
    launchFailed,
    jobFailed,
    userCanceled,
  }

  export class PrintWorkflowBackgroundSession {
    status: PrintWorkflowSessionStatus;
    constructor();

    start(): void;

    addListener(type: "SetupRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SetupRequested", listener: (ev: Event) => void): void ;
    on(type: "SetupRequested", listener: (ev: Event) => void): void ;
    off(type: "SetupRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "Submitted", listener: (ev: Event) => void): void ;
    removeListener(type: "Submitted", listener: (ev: Event) => void): void ;
    on(type: "Submitted", listener: (ev: Event) => void): void ;
    off(type: "Submitted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintWorkflowBackgroundSetupRequestedEventArgs {
    configuration: PrintWorkflowConfiguration;
    constructor();

    getUserPrintTicketAsync(callback: (error: Error, result: Object) => void): void ;

    setRequiresUI(): void;

    getDeferral(): Object;

  }

  export class PrintWorkflowConfiguration {
    jobTitle: String;
    sessionId: String;
    sourceAppDisplayName: String;
    constructor();

    abortPrintFlow(reason: PrintWorkflowJobAbortReason): void;

  }

  export class PrintWorkflowForegroundSession {
    status: PrintWorkflowSessionStatus;
    constructor();

    start(): void;

    addListener(type: "SetupRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SetupRequested", listener: (ev: Event) => void): void ;
    on(type: "SetupRequested", listener: (ev: Event) => void): void ;
    off(type: "SetupRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "XpsDataAvailable", listener: (ev: Event) => void): void ;
    removeListener(type: "XpsDataAvailable", listener: (ev: Event) => void): void ;
    on(type: "XpsDataAvailable", listener: (ev: Event) => void): void ;
    off(type: "XpsDataAvailable", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintWorkflowForegroundSetupRequestedEventArgs {
    configuration: PrintWorkflowConfiguration;
    constructor();

    getUserPrintTicketAsync(callback: (error: Error, result: Object) => void): void ;

    getDeferral(): Object;

  }

  export class PrintWorkflowJobActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    session: PrintWorkflowJobUISession;
    constructor();

  }

  export class PrintWorkflowJobBackgroundSession {
    status: PrintWorkflowSessionStatus;
    constructor();

    start(): void;

    addListener(type: "JobStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "JobStarting", listener: (ev: Event) => void): void ;
    on(type: "JobStarting", listener: (ev: Event) => void): void ;
    off(type: "JobStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PdlModificationRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PdlModificationRequested", listener: (ev: Event) => void): void ;
    on(type: "PdlModificationRequested", listener: (ev: Event) => void): void ;
    off(type: "PdlModificationRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintWorkflowJobNotificationEventArgs {
    configuration: PrintWorkflowConfiguration;
    printerJob: PrintWorkflowPrinterJob;
    constructor();

    getDeferral(): Object;

  }

  export class PrintWorkflowJobStartingEventArgs {
    configuration: PrintWorkflowConfiguration;
    printer: Object;
    constructor();

    setSkipSystemRendering(): void;

    getDeferral(): Object;

  }

  export class PrintWorkflowJobTriggerDetails {
    printWorkflowJobSession: PrintWorkflowJobBackgroundSession;
    constructor();

  }

  export class PrintWorkflowJobUISession {
    status: PrintWorkflowSessionStatus;
    constructor();

    start(): void;

    addListener(type: "JobNotification", listener: (ev: Event) => void): void ;
    removeListener(type: "JobNotification", listener: (ev: Event) => void): void ;
    on(type: "JobNotification", listener: (ev: Event) => void): void ;
    off(type: "JobNotification", listener: (ev: Event) => void): void ;
    
    addListener(type: "PdlDataAvailable", listener: (ev: Event) => void): void ;
    removeListener(type: "PdlDataAvailable", listener: (ev: Event) => void): void ;
    on(type: "PdlDataAvailable", listener: (ev: Event) => void): void ;
    off(type: "PdlDataAvailable", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintWorkflowObjectModelSourceFileContent {
    constructor();
    constructor(xpsStream: Object);

  }

  export class PrintWorkflowObjectModelTargetPackage {
    constructor();

  }

  export class PrintWorkflowPdlConverter {
    constructor();

    convertPdlAsync(printTicket: Object, inputStream: Object, outputStream: Object, callback: (error: Error) => void): void ;
    convertPdlAsync(printTicket: Object, inputStream: Object, outputStream: Object, hostBasedProcessingOperations: PdlConversionHostBasedProcessingOperations, callback: (error: Error) => void): void ;

  }

  export class PrintWorkflowPdlDataAvailableEventArgs {
    configuration: PrintWorkflowConfiguration;
    printerJob: PrintWorkflowPrinterJob;
    sourceContent: PrintWorkflowPdlSourceContent;
    constructor();

    getDeferral(): Object;

  }

  export class PrintWorkflowPdlModificationRequestedEventArgs {
    configuration: PrintWorkflowConfiguration;
    printerJob: PrintWorkflowPrinterJob;
    sourceContent: PrintWorkflowPdlSourceContent;
    uILauncher: PrintWorkflowUILauncher;
    constructor();

    createJobOnPrinter(targetContentType: String): PrintWorkflowPdlTargetStream;

    createJobOnPrinterWithAttributes(jobAttributes: Object, targetContentType: String): PrintWorkflowPdlTargetStream;
    createJobOnPrinterWithAttributes(jobAttributes: Object, targetContentType: String, operationAttributes: Object, jobAttributesMergePolicy: PrintWorkflowAttributesMergePolicy, operationAttributesMergePolicy: PrintWorkflowAttributesMergePolicy): PrintWorkflowPdlTargetStream;

    createJobOnPrinterWithAttributesBuffer(jobAttributesBuffer: Object, targetContentType: String): PrintWorkflowPdlTargetStream;
    createJobOnPrinterWithAttributesBuffer(jobAttributesBuffer: Object, targetContentType: String, operationAttributesBuffer: Object, jobAttributesMergePolicy: PrintWorkflowAttributesMergePolicy, operationAttributesMergePolicy: PrintWorkflowAttributesMergePolicy): PrintWorkflowPdlTargetStream;

    getPdlConverter(conversionType: PrintWorkflowPdlConversionType): PrintWorkflowPdlConverter;

    getDeferral(): Object;

  }

  export class PrintWorkflowPdlSourceContent {
    contentType: String;
    constructor();

    getContentFileAsync(callback: (error: Error, result: Object) => void): void ;

    getInputStream(): Object;

  }

  export class PrintWorkflowPdlTargetStream {
    constructor();

    getOutputStream(): Object;

    completeStreamSubmission(status: PrintWorkflowSubmittedStatus): void;

  }

  export class PrintWorkflowPrinterJob {
    jobId: Number;
    printer: Object;
    constructor();

    getJobStatus(): PrintWorkflowPrinterJobStatus;

    getJobPrintTicket(): Object;

    getJobAttributesAsBuffer(attributeNames: Object): Object;

    getJobAttributes(attributeNames: Object): Object;

    setJobAttributesFromBuffer(jobAttributesBuffer: Object): Object;

    setJobAttributes(jobAttributes: Object): Object;

  }

  export class PrintWorkflowSourceContent {
    constructor();

    getJobPrintTicketAsync(callback: (error: Error, result: Object) => void): void ;

    getSourceSpoolDataAsStreamContent(): PrintWorkflowSpoolStreamContent;

    getSourceSpoolDataAsXpsObjectModel(): PrintWorkflowObjectModelSourceFileContent;

  }

  export class PrintWorkflowSpoolStreamContent {
    constructor();

    getInputStream(): Object;

  }

  export class PrintWorkflowStreamTarget {
    constructor();

    getOutputStream(): Object;

  }

  export class PrintWorkflowSubmittedEventArgs {
    operation: PrintWorkflowSubmittedOperation;
    constructor();

    getTarget(jobPrintTicket: Object): PrintWorkflowTarget;

    getDeferral(): Object;

  }

  export class PrintWorkflowSubmittedOperation {
    configuration: PrintWorkflowConfiguration;
    xpsContent: PrintWorkflowSourceContent;
    constructor();

    complete(status: PrintWorkflowSubmittedStatus): void;

  }

  export class PrintWorkflowTarget {
    targetAsStream: PrintWorkflowStreamTarget;
    targetAsXpsObjectModelPackage: PrintWorkflowObjectModelTargetPackage;
    constructor();

  }

  export class PrintWorkflowTriggerDetails {
    printWorkflowSession: PrintWorkflowBackgroundSession;
    constructor();

  }

  export class PrintWorkflowUIActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    printWorkflowSession: PrintWorkflowForegroundSession;
    constructor();

  }

  export class PrintWorkflowUILauncher {
    constructor();

    launchAndCompleteUIAsync(callback: (error: Error, result: PrintWorkflowUICompletionStatus) => void): void ;

    isUILaunchEnabled(): Boolean;

  }

  export class PrintWorkflowXpsDataAvailableEventArgs {
    operation: PrintWorkflowSubmittedOperation;
    constructor();

    getDeferral(): Object;

  }

