  export class ProviderI2cTransferResult {
    status: ProviderI2cTransferStatus;
    bytesTransferred: number;
    constructor();
  }

  export enum ProviderI2cBusSpeed {
    standardMode,
    fastMode,
  }

  export enum ProviderI2cTransferStatus {
    fullTransfer,
    partialTransfer,
    slaveAddressNotAcknowledged,
  }

  export enum ProviderI2cSharingMode {
    exclusive,
    shared,
  }

  export class ProviderI2cConnectionSettings {
    slaveAddress: number;
    sharingMode: ProviderI2cSharingMode;
    busSpeed: ProviderI2cBusSpeed;
    constructor();

  }

  export class II2cControllerProvider {
    constructor();

    getDeviceProvider(settings: ProviderI2cConnectionSettings): II2cDeviceProvider;

  }

  export class II2cProvider {
    constructor();

    getControllersAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class II2cDeviceProvider {
    deviceId: string;
    constructor();

    write(buffer: Array<number>): void;

    writePartial(buffer: Array<number>): ProviderI2cTransferResult;

    read();
    readPartial();
    writeRead();
    writeReadPartial();
  }

