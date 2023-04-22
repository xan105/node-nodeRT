  export enum BarcodeScannerTriggerState {
    released,
    pressed,
  }

  export class BarcodeScannerEnableScannerRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerEnableScannerRequestEventArgs {
    request: BarcodeScannerEnableScannerRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerDisableScannerRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerDisableScannerRequestEventArgs {
    request: BarcodeScannerDisableScannerRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerSetActiveSymbologiesRequest {
    symbologies: Object;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerSetActiveSymbologiesRequestEventArgs {
    request: BarcodeScannerSetActiveSymbologiesRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerStartSoftwareTriggerRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerStartSoftwareTriggerRequestEventArgs {
    request: BarcodeScannerStartSoftwareTriggerRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerStopSoftwareTriggerRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerStopSoftwareTriggerRequestEventArgs {
    request: BarcodeScannerStopSoftwareTriggerRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeSymbologyAttributesBuilder {
    isDecodeLengthSupported: boolean;
    isCheckDigitValidationSupported: boolean;
    isCheckDigitTransmissionSupported: boolean;
    constructor();

    createAttributes(): Object;

  }

  export class BarcodeScannerGetSymbologyAttributesRequest {
    symbology: number;
    constructor();

    reportCompletedAsync(attributes: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerGetSymbologyAttributesRequestEventArgs {
    request: BarcodeScannerGetSymbologyAttributesRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerSetSymbologyAttributesRequest {
    attributes: Object;
    symbology: number;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerSetSymbologyAttributesRequestEventArgs {
    request: BarcodeScannerSetSymbologyAttributesRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerHideVideoPreviewRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerHideVideoPreviewRequestEventArgs {
    request: BarcodeScannerHideVideoPreviewRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerProviderConnection {
    version: string;
    name: string;
    companyName: string;
    id: string;
    supportedSymbologies: Object;
    videoDeviceId: string;
    constructor();

    reportScannedDataAsync(report: Object, callback: (error: Error) => void): void ;

    reportTriggerStateAsync(state: BarcodeScannerTriggerState, callback: (error: Error) => void): void ;

    reportErrorAsync(errorData: Object, callback: (error: Error) => void): void ;
    reportErrorAsync(errorData: Object, isRetriable: boolean, scanReport: Object, callback: (error: Error) => void): void ;

    start(): void;

    close(): void;
    addListener(type: "DisableScannerRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DisableScannerRequested", listener: (ev: Event) => void): void ;
    on(type: "DisableScannerRequested", listener: (ev: Event) => void): void ;
    off(type: "DisableScannerRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnableScannerRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "EnableScannerRequested", listener: (ev: Event) => void): void ;
    on(type: "EnableScannerRequested", listener: (ev: Event) => void): void ;
    off(type: "EnableScannerRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "GetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    on(type: "GetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    off(type: "GetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "HideVideoPreviewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "HideVideoPreviewRequested", listener: (ev: Event) => void): void ;
    on(type: "HideVideoPreviewRequested", listener: (ev: Event) => void): void ;
    off(type: "HideVideoPreviewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SetActiveSymbologiesRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SetActiveSymbologiesRequested", listener: (ev: Event) => void): void ;
    on(type: "SetActiveSymbologiesRequested", listener: (ev: Event) => void): void ;
    off(type: "SetActiveSymbologiesRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    on(type: "SetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    off(type: "SetBarcodeSymbologyAttributesRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "StartSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "StartSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    on(type: "StartSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    off(type: "StartSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "StopSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "StopSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    on(type: "StopSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    off(type: "StopSoftwareTriggerRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BarcodeScannerProviderTriggerDetails {
    connection: BarcodeScannerProviderConnection;
    constructor();

  }

