  export enum ProviderSpiMode {
    mode0,
    mode1,
    mode2,
    mode3,
  }

  export enum ProviderSpiSharingMode {
    exclusive,
    shared,
  }

  export class ProviderSpiConnectionSettings {
    sharingMode: ProviderSpiSharingMode;
    mode: ProviderSpiMode;
    dataBitLength: number;
    clockFrequency: number;
    chipSelectLine: number;
    constructor();
    constructor(chipSelectLine: number);

  }

  export class ISpiControllerProvider {
    constructor();

    getDeviceProvider(settings: ProviderSpiConnectionSettings): ISpiDeviceProvider;

  }

  export class ISpiProvider {
    constructor();

    getControllersAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class ISpiDeviceProvider {
    connectionSettings: ProviderSpiConnectionSettings;
    deviceId: string;
    constructor();

    write(buffer: Array<number>): void;

    read();
    transferSequential();
    transferFullDuplex();
  }

