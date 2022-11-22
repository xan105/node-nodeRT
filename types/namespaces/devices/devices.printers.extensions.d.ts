  export class ExtensionsContract {
    constructor();
  }

  export enum Print3DWorkflowStatus {
    abandoned,
    canceled,
    failed,
    slicing,
    submitted,
  }

  export enum Print3DWorkflowDetail {
    unknown,
    modelExceedsPrintBed,
    uploadFailed,
    invalidMaterialSelection,
    invalidModel,
    modelNotManifold,
    invalidPrintTicket,
  }

  export class PrintTaskConfigurationSaveRequestedDeferral {
    constructor();

    complete(): void;

  }

  export class PrintTaskConfigurationSaveRequest {
    deadline: Date;
    constructor();

    cancel(): void;

    save(printerExtensionContext: Object): void;

    getDeferral(): PrintTaskConfigurationSaveRequestedDeferral;

  }

  export class PrintTaskConfigurationSaveRequestedEventArgs {
    request: PrintTaskConfigurationSaveRequest;
    constructor();

  }

  export class PrintTaskConfiguration {
    printerExtensionContext: Object;
    constructor();

    addListener(type: "SaveRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SaveRequested", listener: (ev: Event) => void): void ;
    on(type: "SaveRequested", listener: (ev: Event) => void): void ;
    off(type: "SaveRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PrintNotificationEventDetails {
    eventData: String;
    printerName: String;
    constructor();

  }

  export class PrintExtensionContext {
    constructor();

    static fromDeviceId(deviceId: String): Object;


  }

  export class Print3DWorkflowPrintRequestedEventArgs {
    status: Print3DWorkflowStatus;
    constructor();

    setExtendedStatus(value: Print3DWorkflowDetail): void;

    setSource(source: Object): void;

    setSourceChanged(value: Boolean): void;

  }

  export class Print3DWorkflowPrinterChangedEventArgs {
    newDeviceId: String;
    constructor();

  }

  export class Print3DWorkflow {
    isPrintReady: Boolean;
    deviceID: String;
    constructor();

    getPrintModelPackage(): Object;

    addListener(type: "PrintRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PrintRequested", listener: (ev: Event) => void): void ;
    on(type: "PrintRequested", listener: (ev: Event) => void): void ;
    off(type: "PrintRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PrinterChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PrinterChanged", listener: (ev: Event) => void): void ;
    on(type: "PrinterChanged", listener: (ev: Event) => void): void ;
    off(type: "PrinterChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

