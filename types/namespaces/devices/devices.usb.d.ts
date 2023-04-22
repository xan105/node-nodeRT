  export enum UsbTransferDirection {
    out,
    in,
  }

  export enum UsbEndpointType {
    control,
    isochronous,
    bulk,
    interrupt,
  }

  export enum UsbControlRecipient {
    device,
    specifiedInterface,
    endpoint,
    other,
    defaultInterface,
  }

  export enum UsbControlTransferType {
    standard,
    class,
    vendor,
  }

  export enum UsbReadOptions {
    none,
    autoClearStall,
    overrideAutomaticBufferManagement,
    ignoreShortPacket,
    allowPartialReads,
  }

  export enum UsbWriteOptions {
    none,
    autoClearStall,
    shortPacketTerminate,
  }

  export class UsbControlRequestType {
    recipient: UsbControlRecipient;
    direction: UsbTransferDirection;
    controlTransferType: UsbControlTransferType;
    asByte: number;
    constructor();

  }

  export class UsbSetupPacket {
    value: number;
    requestType: UsbControlRequestType;
    request: number;
    length: number;
    index: number;
    constructor();
    constructor(eightByteBuffer: Object);

  }

  export class UsbDeviceClass {
    subclassCode: number;
    protocolCode: number;
    classCode: number;
    constructor();

  }

  export class UsbDeviceClasses {
    static activeSync: UsbDeviceClass;
    static cdcControl: UsbDeviceClass;
    static deviceFirmwareUpdate: UsbDeviceClass;
    static irda: UsbDeviceClass;
    static measurement: UsbDeviceClass;
    static palmSync: UsbDeviceClass;
    static personalHealthcare: UsbDeviceClass;
    static physical: UsbDeviceClass;
    static vendorSpecific: UsbDeviceClass;
    constructor();

  }

  export class UsbDevice {
    configuration: UsbConfiguration;
    defaultInterface: UsbInterface;
    deviceDescriptor: UsbDeviceDescriptor;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: UsbDevice) => void): void ;


    static getDeviceSelector(vendorId: number, productId: number, winUsbInterfaceClass: string): string;
    static getDeviceSelector(winUsbInterfaceClass: string): string;
    static getDeviceSelector(vendorId: number, productId: number): string;


    static getDeviceClassSelector(usbClass: UsbDeviceClass): string;


    sendControlOutTransferAsync(setupPacket: UsbSetupPacket, buffer: Object, callback: (error: Error, result: number) => void): void ;
    sendControlOutTransferAsync(setupPacket: UsbSetupPacket, callback: (error: Error, result: number) => void): void ;

    sendControlInTransferAsync(setupPacket: UsbSetupPacket, buffer: Object, callback: (error: Error, result: Object) => void): void ;
    sendControlInTransferAsync(setupPacket: UsbSetupPacket, callback: (error: Error, result: Object) => void): void ;

    close(): void;
  }

  export class UsbInterface {
    bulkInPipes: Object;
    bulkOutPipes: Object;
    descriptors: Object;
    interfaceNumber: number;
    interfaceSettings: Object;
    interruptInPipes: Object;
    interruptOutPipes: Object;
    constructor();

  }

  export class UsbDeviceDescriptor {
    bcdDeviceRevision: number;
    bcdUsb: number;
    maxPacketSize0: number;
    numberOfConfigurations: number;
    productId: number;
    vendorId: number;
    constructor();

  }

  export class UsbConfiguration {
    configurationDescriptor: UsbConfigurationDescriptor;
    descriptors: Object;
    usbInterfaces: Object;
    constructor();

  }

  export class UsbDescriptor {
    descriptorType: number;
    length: number;
    constructor();

    readDescriptorBuffer(buffer: Object): void;

  }

  export class UsbConfigurationDescriptor {
    configurationValue: number;
    maxPowerMilliamps: number;
    remoteWakeup: boolean;
    selfPowered: boolean;
    constructor();

    static tryParse(descriptor: UsbDescriptor, parsed: Object): boolean;


    static parse(descriptor: UsbDescriptor): UsbConfigurationDescriptor;


  }

  export class UsbInterfaceDescriptor {
    alternateSettingNumber: number;
    classCode: number;
    interfaceNumber: number;
    protocolCode: number;
    subclassCode: number;
    constructor();

    static tryParse(descriptor: UsbDescriptor, parsed: Object): boolean;


    static parse(descriptor: UsbDescriptor): UsbInterfaceDescriptor;


  }

  export class UsbBulkInEndpointDescriptor {
    endpointNumber: number;
    maxPacketSize: number;
    pipe: UsbBulkInPipe;
    constructor();

  }

  export class UsbInterruptInEndpointDescriptor {
    endpointNumber: number;
    interval: number;
    maxPacketSize: number;
    pipe: UsbInterruptInPipe;
    constructor();

  }

  export class UsbBulkOutEndpointDescriptor {
    endpointNumber: number;
    maxPacketSize: number;
    pipe: UsbBulkOutPipe;
    constructor();

  }

  export class UsbInterruptOutEndpointDescriptor {
    endpointNumber: number;
    interval: number;
    maxPacketSize: number;
    pipe: UsbInterruptOutPipe;
    constructor();

  }

  export class UsbEndpointDescriptor {
    asBulkInEndpointDescriptor: UsbBulkInEndpointDescriptor;
    asBulkOutEndpointDescriptor: UsbBulkOutEndpointDescriptor;
    asInterruptInEndpointDescriptor: UsbInterruptInEndpointDescriptor;
    asInterruptOutEndpointDescriptor: UsbInterruptOutEndpointDescriptor;
    direction: UsbTransferDirection;
    endpointNumber: number;
    endpointType: UsbEndpointType;
    constructor();

    static tryParse(descriptor: UsbDescriptor, parsed: Object): boolean;


    static parse(descriptor: UsbDescriptor): UsbEndpointDescriptor;


  }

  export class UsbInterruptInEventArgs {
    interruptData: Object;
    constructor();

  }

  export class UsbInterruptInPipe {
    endpointDescriptor: UsbInterruptInEndpointDescriptor;
    constructor();

    clearStallAsync(callback: (error: Error) => void): void ;

    addListener(type: "DataReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "DataReceived", listener: (ev: Event) => void): void ;
    on(type: "DataReceived", listener: (ev: Event) => void): void ;
    off(type: "DataReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UsbBulkInPipe {
    readOptions: UsbReadOptions;
    endpointDescriptor: UsbBulkInEndpointDescriptor;
    inputStream: Object;
    maxTransferSizeBytes: number;
    constructor();

    clearStallAsync(callback: (error: Error) => void): void ;

    flushBuffer(): void;

  }

  export class UsbBulkOutPipe {
    writeOptions: UsbWriteOptions;
    endpointDescriptor: UsbBulkOutEndpointDescriptor;
    outputStream: Object;
    constructor();

    clearStallAsync(callback: (error: Error) => void): void ;

  }

  export class UsbInterruptOutPipe {
    writeOptions: UsbWriteOptions;
    endpointDescriptor: UsbInterruptOutEndpointDescriptor;
    outputStream: Object;
    constructor();

    clearStallAsync(callback: (error: Error) => void): void ;

  }

  export class UsbInterfaceSetting {
    bulkInEndpoints: Object;
    bulkOutEndpoints: Object;
    descriptors: Object;
    interfaceDescriptor: UsbInterfaceDescriptor;
    interruptInEndpoints: Object;
    interruptOutEndpoints: Object;
    selected: boolean;
    constructor();

    selectSettingAsync(callback: (error: Error) => void): void ;

  }

