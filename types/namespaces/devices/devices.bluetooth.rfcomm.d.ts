  export class RfcommDeviceService {
    connectionHostName: Object;
    connectionServiceName: string;
    maxProtectionLevel: number;
    protectionLevel: number;
    serviceId: RfcommServiceId;
    device: Object;
    deviceAccessInformation: Object;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: RfcommDeviceService) => void): void ;


    static getDeviceSelectorForBluetoothDevice(bluetoothDevice: Object): string;
    static getDeviceSelectorForBluetoothDevice(bluetoothDevice: Object, cacheMode: number): string;


    static getDeviceSelectorForBluetoothDeviceAndServiceId(bluetoothDevice: Object, serviceId: RfcommServiceId): string;
    static getDeviceSelectorForBluetoothDeviceAndServiceId(bluetoothDevice: Object, serviceId: RfcommServiceId, cacheMode: number): string;


    static getDeviceSelector(serviceId: RfcommServiceId): string;


    getSdpRawAttributesAsync(callback: (error: Error, result: Object) => void): void ;
    getSdpRawAttributesAsync(cacheMode: number, callback: (error: Error, result: Object) => void): void ;

    requestAccessAsync(callback: (error: Error, result: number) => void): void ;

    close(): void;
  }

  export class RfcommDeviceServicesResult {
    error: number;
    services: Object;
    constructor();

  }

  export class RfcommServiceId {
    static genericFileTransfer: RfcommServiceId;
    static obexFileTransfer: RfcommServiceId;
    static obexObjectPush: RfcommServiceId;
    static phoneBookAccessPce: RfcommServiceId;
    static phoneBookAccessPse: RfcommServiceId;
    static serialPort: RfcommServiceId;
    uuid: string;
    constructor();

    static fromUuid(uuid: string): RfcommServiceId;


    static fromShortId(shortId: number): RfcommServiceId;


    asShortId(): number;

    asString(): string;

  }

  export class RfcommServiceProvider {
    sdpRawAttributes: Object;
    serviceId: RfcommServiceId;
    constructor();

    static createAsync(serviceId: RfcommServiceId, callback: (error: Error, result: RfcommServiceProvider) => void): void ;


    startAdvertising(listener: Object): void;
    startAdvertising(listener: Object, radioDiscoverable: boolean): void;

    stopAdvertising(): void;

  }

