  export class RfcommDeviceService {
    connectionHostName: Object;
    connectionServiceName: String;
    maxProtectionLevel: Number;
    protectionLevel: Number;
    serviceId: RfcommServiceId;
    device: Object;
    deviceAccessInformation: Object;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: RfcommDeviceService) => void): void ;


    static getDeviceSelectorForBluetoothDevice(bluetoothDevice: Object): String;
    static getDeviceSelectorForBluetoothDevice(bluetoothDevice: Object, cacheMode: Number): String;


    static getDeviceSelectorForBluetoothDeviceAndServiceId(bluetoothDevice: Object, serviceId: RfcommServiceId): String;
    static getDeviceSelectorForBluetoothDeviceAndServiceId(bluetoothDevice: Object, serviceId: RfcommServiceId, cacheMode: Number): String;


    static getDeviceSelector(serviceId: RfcommServiceId): String;


    getSdpRawAttributesAsync(callback: (error: Error, result: Object) => void): void ;
    getSdpRawAttributesAsync(cacheMode: Number, callback: (error: Error, result: Object) => void): void ;

    requestAccessAsync(callback: (error: Error, result: Number) => void): void ;

    close(): void;
  }

  export class RfcommDeviceServicesResult {
    error: Number;
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
    uuid: String;
    constructor();

    static fromUuid(uuid: String): RfcommServiceId;


    static fromShortId(shortId: Number): RfcommServiceId;


    asShortId(): Number;

    asString(): String;

  }

  export class RfcommServiceProvider {
    sdpRawAttributes: Object;
    serviceId: RfcommServiceId;
    constructor();

    static createAsync(serviceId: RfcommServiceId, callback: (error: Error, result: RfcommServiceProvider) => void): void ;


    startAdvertising(listener: Object): void;
    startAdvertising(listener: Object, radioDiscoverable: Boolean): void;

    stopAdvertising(): void;

  }

