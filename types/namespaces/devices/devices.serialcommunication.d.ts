  export enum SerialParity {
    none,
    odd,
    even,
    mark,
    space,
  }

  export enum SerialHandshake {
    none,
    requestToSend,
    xOnXOff,
    requestToSendXOnXOff,
  }

  export enum SerialStopBitCount {
    one,
    onePointFive,
    two,
  }

  export enum SerialError {
    frame,
    bufferOverrun,
    receiveFull,
    receiveParity,
    transmitFull,
  }

  export enum SerialPinChange {
    breakSignal,
    carrierDetect,
    clearToSend,
    dataSetReady,
    ringIndicator,
  }

  export class SerialDevice {
    isDataTerminalReadyEnabled: Boolean;
    dataBits: Number;
    handshake: SerialHandshake;
    breakSignalState: Boolean;
    baudRate: Number;
    writeTimeout: Number;
    stopBits: SerialStopBitCount;
    readTimeout: Number;
    parity: SerialParity;
    isRequestToSendEnabled: Boolean;
    bytesReceived: Number;
    carrierDetectState: Boolean;
    clearToSendState: Boolean;
    dataSetReadyState: Boolean;
    inputStream: Object;
    outputStream: Object;
    portName: String;
    usbProductId: Number;
    usbVendorId: Number;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: SerialDevice) => void): void ;


    static getDeviceSelector(): String;
    static getDeviceSelector(portName: String): String;


    static getDeviceSelectorFromUsbVidPid(vendorId: Number, productId: Number): String;


    close(): void;
    addListener(type: "ErrorReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ErrorReceived", listener: (ev: Event) => void): void ;
    on(type: "ErrorReceived", listener: (ev: Event) => void): void ;
    off(type: "ErrorReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PinChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PinChanged", listener: (ev: Event) => void): void ;
    on(type: "PinChanged", listener: (ev: Event) => void): void ;
    off(type: "PinChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ErrorReceivedEventArgs {
    error: SerialError;
    constructor();

  }

  export class PinChangedEventArgs {
    pinChange: SerialPinChange;
    constructor();

  }

