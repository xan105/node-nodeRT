  export enum PrintWorkflowSessionStatus {
    started,
    completed,
    aborted,
    closed,
  }

  export enum PrintWorkflowSubmittedStatus {
    succeeded,
    canceled,
    failed,
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

  export class PrintWorkflowSubmittedEventArgs {
    operation: PrintWorkflowSubmittedOperation;
    constructor();

    getTarget(jobPrintTicket: Object): PrintWorkflowTarget;

    getDeferral(): Object;

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

  export class PrintWorkflowXpsDataAvailableEventArgs {
    operation: PrintWorkflowSubmittedOperation;
    constructor();

    getDeferral(): Object;

  }

  export class PrintWorkflowConfiguration {
    jobTitle: string;
    sessionId: string;
    sourceAppDisplayName: string;
    constructor();

  }

  export class PrintWorkflowSourceContent {
    constructor();

    getJobPrintTicketAsync(callback: (error: Error, result: Object) => void): void ;

    getSourceSpoolDataAsStreamContent(): PrintWorkflowSpoolStreamContent;

    getSourceSpoolDataAsXpsObjectModel(): PrintWorkflowObjectModelSourceFileContent;

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

  export class PrintWorkflowStreamTarget {
    constructor();

    getOutputStream(): Object;

  }

  export class PrintWorkflowObjectModelTargetPackage {
    constructor();

  }

  export class PrintWorkflowSpoolStreamContent {
    constructor();

    getInputStream(): Object;

  }

  export class PrintWorkflowObjectModelSourceFileContent {
    constructor();

  }

  export class PrintWorkflowUIActivatedEventArgs {
    kind: number;
    previousExecutionState: number;
    splashScreen: Object;
    user: Object;
    printWorkflowSession: PrintWorkflowForegroundSession;
    constructor();

  }

  export class PrintWorkflowTriggerDetails {
    printWorkflowSession: PrintWorkflowBackgroundSession;
    constructor();

  }

