  export class I2cTransferResult {
    status: I2cTransferStatus;
    bytesTransferred: number;
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
    slaveAddress: number;
    sharingMode: I2cSharingMode;
    busSpeed: I2cBusSpeed;
    constructor();
    constructor(slaveAddress: number);

  }

  export class II2cDeviceStatics {
    constructor();

    fromIdAsync(deviceId: string, settings: I2cConnectionSettings, callback: (error: Error, result: I2cDevice) => void): void ;

    getDeviceSelector(): string;
    getDeviceSelector(friendlyName: string): string;

  }

  export class I2cDevice {
    connectionSettings: I2cConnectionSettings;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, settings: I2cConnectionSettings, callback: (error: Error, result: I2cDevice) => void): void ;


    static getDeviceSelector(): string;
    static getDeviceSelector(friendlyName: string): string;


    write(buffer: Array<number>): void;

    writePartial(buffer: Array<number>): I2cTransferResult;

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