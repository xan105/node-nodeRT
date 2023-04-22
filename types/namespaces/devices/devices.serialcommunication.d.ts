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
    isDataTerminalReadyEnabled: boolean;
    dataBits: number;
    handshake: SerialHandshake;
    breakSignalState: boolean;
    baudRate: number;
    writeTimeout: number;
    stopBits: SerialStopBitCount;
    readTimeout: number;
    parity: SerialParity;
    isRequestToSendEnabled: boolean;
    bytesReceived: number;
    carrierDetectState: boolean;
    clearToSendState: boolean;
    dataSetReadyState: boolean;
    inputStream: Object;
    outputStream: Object;
    portName: string;
    usbProductId: number;
    usbVendorId: number;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: SerialDevice) => void): void ;


    static getDeviceSelector(): string;
    static getDeviceSelector(portName: string): string;


    static getDeviceSelectorFromUsbVidPid(vendorId: number, productId: number): string;


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

