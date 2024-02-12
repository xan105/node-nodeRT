  export enum SettingsLaunchKind {
    jobPrintTicket,
    userDefaultPrintTicket,
  }

  export enum WorkflowPrintTicketValidationStatus {
    resolved,
    conflicting,
    invalid,
  }

  export class PrintSupportExtensionSession {
    printer: Object;
    constructor();

    start(): void;

    addListener(type: "PrintDeviceCapabilitiesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PrintDeviceCapabilitiesChanged", listener: (ev: Event) => void): void ;
    on(type: "PrintDeviceCapabilitiesChanged", listener: (ev: Event) => void): void ;
    off(type: "PrintDeviceCapabilitiesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PrintTicketValidationRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PrintTicketValidationRequested", listener: (ev: Event) => void): void ;
    on(type: "PrintTicketValidationRequested", listener: (ev: Event) => void): void ;
    off(type: "PrintTicketValidationRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PrinterSelected", listener: (ev: Event) => void): void ;
    removeListener(type: "PrinterSelected", listener: (ev: Event) => void): void ;
    on(type: "PrinterSelected", listener: (ev: Event) => void): void ;
    off(type: "PrinterSelected", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintSupportExtensionTriggerDetails {
    session: PrintSupportExtensionSession;
    constructor();

  }

  export class PrintSupportPrintDeviceCapabilitiesChangedEventArgs {
    resourceLanguage: String;
    constructor();

    getCurrentPrintDeviceCapabilities(): Object;

    updatePrintDeviceCapabilities(updatedPdc: Object): void;

    getDeferral(): Object;

    setSupportedPdlPassthroughContentTypes(supportedPdlContentTypes: Object): void;

    getCurrentPrintDeviceResources(): Object;

    updatePrintDeviceResources(updatedPdr: Object): void;

    setPrintDeviceCapabilitiesUpdatePolicy(updatePolicy: PrintSupportPrintDeviceCapabilitiesUpdatePolicy): void;

  }

  export class PrintSupportPrintDeviceCapabilitiesUpdatePolicy {
    constructor();

    static createPeriodicRefresh(updatePeriod: Number): PrintSupportPrintDeviceCapabilitiesUpdatePolicy;


    static createPrintJobRefresh(numberOfJobs: Number): PrintSupportPrintDeviceCapabilitiesUpdatePolicy;


  }

  export class PrintSupportPrintTicketElement {
    namespaceUri: String;
    localName: String;
    constructor();

  }

  export class PrintSupportPrintTicketValidationRequestedEventArgs {
    printTicket: Object;
    constructor();

    setPrintTicketValidationStatus(status: WorkflowPrintTicketValidationStatus): void;

    getDeferral(): Object;

  }

  export class PrintSupportPrinterSelectedEventArgs {
    printTicket: Object;
    allowedAdditionalFeaturesAndParametersCount: Number;
    sourceAppInfo: Object;
    constructor();

    setAdditionalFeatures(features: Object): void;

    setAdditionalParameters(parameters: Object): void;

    setAdaptiveCard(adaptiveCard: Object): void;

    getDeferral(): Object;

  }

  export class PrintSupportSessionInfo {
    printer: Object;
    sourceAppInfo: Object;
    constructor();

  }

  export class PrintSupportSettingsActivatedEventArgs {
    kind: Number;
    previousExecutionState: Number;
    splashScreen: Object;
    user: Object;
    session: PrintSupportSettingsUISession;
    constructor();

    getDeferral(): Object;

  }

  export class PrintSupportSettingsUISession {
    documentTitle: String;
    launchKind: SettingsLaunchKind;
    sessionInfo: PrintSupportSessionInfo;
    sessionPrintTicket: Object;
    constructor();

    updatePrintTicket(printTicket: Object): void;

  }

