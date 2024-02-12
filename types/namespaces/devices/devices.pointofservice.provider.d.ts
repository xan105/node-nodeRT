  export class BitmapSize {
    width: Number;
    height: Number;
    constructor();
  }

  export enum BarcodeScannerTriggerState {
    released,
    pressed,
  }

  export class BarcodeScannerDisableScannerRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerDisableScannerRequestEventArgs {
    request: BarcodeScannerDisableScannerRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerEnableScannerRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerEnableScannerRequestEventArgs {
    request: BarcodeScannerEnableScannerRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerFrameReader {
    connection: BarcodeScannerProviderConnection;
    constructor();

    startAsync(callback: (error: Error, result: Boolean) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    tryAcquireLatestFrameAsync(callback: (error: Error, result: BarcodeScannerVideoFrame) => void): void ;

    close(): void;
    addListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    on(type: "FrameArrived", listener: (ev: Event) => void): void ;
    off(type: "FrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BarcodeScannerFrameReaderFrameArrivedEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerGetSymbologyAttributesRequest {
    symbology: Number;
    constructor();

    reportCompletedAsync(attributes: Object, callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerGetSymbologyAttributesRequestEventArgs {
    request: BarcodeScannerGetSymbologyAttributesRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerHideVideoPreviewRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerHideVideoPreviewRequestEventArgs {
    request: BarcodeScannerHideVideoPreviewRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerProviderConnection {
    version: String;
    name: String;
    companyName: String;
    id: String;
    supportedSymbologies: Object;
    videoDeviceId: String;
    constructor();

    reportScannedDataAsync(report: Object, callback: (error: Error) => void): void ;

    reportTriggerStateAsync(state: BarcodeScannerTriggerState, callback: (error: Error) => void): void ;

    reportErrorAsync(errorData: Object, callback: (error: Error) => void): void ;
    reportErrorAsync(errorData: Object, isRetriable: Boolean, scanReport: Object, callback: (error: Error) => void): void ;

    createFrameReaderAsync(callback: (error: Error, result: BarcodeScannerFrameReader) => void): void ;
    createFrameReaderAsync(preferredFormat: Number, callback: (error: Error, result: BarcodeScannerFrameReader) => void): void ;
    createFrameReaderAsync(preferredFormat: Number, preferredSize: BitmapSize, callback: (error: Error, result: BarcodeScannerFrameReader) => void): void ;

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

  export class BarcodeScannerSetActiveSymbologiesRequest {
    symbologies: Object;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerSetActiveSymbologiesRequestEventArgs {
    request: BarcodeScannerSetActiveSymbologiesRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerSetSymbologyAttributesRequest {
    attributes: Object;
    symbology: Number;
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerSetSymbologyAttributesRequestEventArgs {
    request: BarcodeScannerSetSymbologyAttributesRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerStartSoftwareTriggerRequest {
    constructor();

    reportCompletedAsync(callback: (error: Error) => void): void ;

    reportFailedAsync(callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

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
    reportFailedAsync(reason: Number, callback: (error: Error) => void): void ;
    reportFailedAsync(reason: Number, failedReasonDescription: String, callback: (error: Error) => void): void ;

  }

  export class BarcodeScannerStopSoftwareTriggerRequestEventArgs {
    request: BarcodeScannerStopSoftwareTriggerRequest;
    constructor();

    getDeferral(): Object;

  }

  export class BarcodeScannerVideoFrame {
    format: Number;
    height: Number;
    pixelData: Object;
    width: Number;
    constructor();

    close(): void;
  }

  export class BarcodeSymbologyAttributesBuilder {
    isDecodeLengthSupported: Boolean;
    isCheckDigitValidationSupported: Boolean;
    isCheckDigitTransmissionSupported: Boolean;
    constructor();

    createAttributes(): Object;

  }

