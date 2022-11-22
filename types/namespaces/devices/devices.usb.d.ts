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
    asByte: Number;
    constructor();

  }

  export class UsbSetupPacket {
    value: Number;
    requestType: UsbControlRequestType;
    request: Number;
    length: Number;
    index: Number;
    constructor();
    constructor(eightByteBuffer: Object);

  }

  export class UsbDeviceClass {
    subclassCode: Number;
    protocolCode: Number;
    classCode: Number;
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

    static fromIdAsync(deviceId: String, callback: (error: Error, result: UsbDevice) => void): void ;


    static getDeviceSelector(vendorId: Number, productId: Number, winUsbInterfaceClass: String): String;
    static getDeviceSelector(winUsbInterfaceClass: String): String;
    static getDeviceSelector(vendorId: Number, productId: Number): String;


    static getDeviceClassSelector(usbClass: UsbDeviceClass): String;


    sendControlOutTransferAsync(setupPacket: UsbSetupPacket, buffer: Object, callback: (error: Error, result: Number) => void): void ;
    sendControlOutTransferAsync(setupPacket: UsbSetupPacket, callback: (error: Error, result: Number) => void): void ;

    sendControlInTransferAsync(setupPacket: UsbSetupPacket, buffer: Object, callback: (error: Error, result: Object) => void): void ;
    sendControlInTransferAsync(setupPacket: UsbSetupPacket, callback: (error: Error, result: Object) => void): void ;

    close(): void;
  }

  export class UsbInterface {
    bulkInPipes: Object;
    bulkOutPipes: Object;
    descriptors: Object;
    interfaceNumber: Number;
    interfaceSettings: Object;
    interruptInPipes: Object;
    interruptOutPipes: Object;
    constructor();

  }

  export class UsbDeviceDescriptor {
    bcdDeviceRevision: Number;
    bcdUsb: Number;
    maxPacketSize0: Number;
    numberOfConfigurations: Number;
    productId: Number;
    vendorId: Number;
    constructor();

  }

  export class UsbConfiguration {
    configurationDescriptor: UsbConfigurationDescriptor;
    descriptors: Object;
    usbInterfaces: Object;
    constructor();

  }

  export class UsbDescriptor {
    descriptorType: Number;
    length: Number;
    constructor();

    readDescriptorBuffer(buffer: Object): void;

  }

  export class UsbConfigurationDescriptor {
    configurationValue: Number;
    maxPowerMilliamps: Number;
    remoteWakeup: Boolean;
    selfPowered: Boolean;
    constructor();

    static tryParse(descriptor: UsbDescriptor, parsed: Object): Boolean;


    static parse(descriptor: UsbDescriptor): UsbConfigurationDescriptor;


  }

  export class UsbInterfaceDescriptor {
    alternateSettingNumber: Number;
    classCode: Number;
    interfaceNumber: Number;
    protocolCode: Number;
    subclassCode: Number;
    constructor();

    static tryParse(descriptor: UsbDescriptor, parsed: Object): Boolean;


    static parse(descriptor: UsbDescriptor): UsbInterfaceDescriptor;


  }

  export class UsbBulkInEndpointDescriptor {
    endpointNumber: Number;
    maxPacketSize: Number;
    pipe: UsbBulkInPipe;
    constructor();

  }

  export class UsbInterruptInEndpointDescriptor {
    endpointNumber: Number;
    interval: Number;
    maxPacketSize: Number;
    pipe: UsbInterruptInPipe;
    constructor();

  }

  export class UsbBulkOutEndpointDescriptor {
    endpointNumber: Number;
    maxPacketSize: Number;
    pipe: UsbBulkOutPipe;
    constructor();

  }

  export class UsbInterruptOutEndpointDescriptor {
    endpointNumber: Number;
    interval: Number;
    maxPacketSize: Number;
    pipe: UsbInterruptOutPipe;
    constructor();

  }

  export class UsbEndpointDescriptor {
    asBulkInEndpointDescriptor: UsbBulkInEndpointDescriptor;
    asBulkOutEndpointDescriptor: UsbBulkOutEndpointDescriptor;
    asInterruptInEndpointDescriptor: UsbInterruptInEndpointDescriptor;
    asInterruptOutEndpointDescriptor: UsbInterruptOutEndpointDescriptor;
    direction: UsbTransferDirection;
    endpointNumber: Number;
    endpointType: UsbEndpointType;
    constructor();

    static tryParse(descriptor: UsbDescriptor, parsed: Object): Boolean;


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
    maxTransferSizeBytes: Number;
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
    selected: Boolean;
    constructor();

    selectSettingAsync(callback: (error: Error) => void): void ;

  }

