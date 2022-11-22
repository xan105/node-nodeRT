  export class I2cTransferResult {
    status: I2cTransferStatus;
    bytesTransferred: Number;
    constructor();
  }

  export enum I2cBusSpeed {
    standardMode,
    fastMode,
  }

  export enum I2cTransferStatus {
    fullTransfer,
    partialTransfer,
    slaveAddressNotAcknowledged,
    clockStretchTimeout,
    unknownError,
  }

  export enum I2cSharingMode {
    exclusive,
    shared,
  }

  export class I2cConnectionSettings {
    slaveAddress: Number;
    sharingMode: I2cSharingMode;
    busSpeed: I2cBusSpeed;
    constructor();
    constructor(slaveAddress: Number);

  }

  export class II2cDeviceStatics {
    constructor();

    fromIdAsync(deviceId: String, settings: I2cConnectionSettings, callback: (error: Error, result: I2cDevice) => void): void ;

    getDeviceSelector(): String;
    getDeviceSelector(friendlyName: String): String;

  }

  export class I2cDevice {
    connectionSettings: I2cConnectionSettings;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, settings: I2cConnectionSettings, callback: (error: Error, result: I2cDevice) => void): void ;


    static getDeviceSelector(): String;
    static getDeviceSelector(friendlyName: String): String;


    write(buffer: Array<Number>): void;

    writePartial(buffer: Array<Number>): I2cTransferResult;

    read();
    readPartial();
    writeRead();
    writeReadPartial();
    close(): void;
  }

  export class I2cController {
    constructor();

    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: I2cController) => void): void ;


    getDevice(settings: I2cConnectionSettings): I2cDevice;

  }

export * as provider from "./devices.i2c.provider.js";