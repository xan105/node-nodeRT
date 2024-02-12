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

  export class ISpiControllerProvider {
    constructor();

    getDeviceProvider(settings: ProviderSpiConnectionSettings): ISpiDeviceProvider;

  }

  export class ISpiDeviceProvider {
    connectionSettings: ProviderSpiConnectionSettings;
    deviceId: String;
    constructor();

    write(buffer: Array<Number>): void;

    read();
    transferSequential();
    transferFullDuplex();
  }

  export class ISpiProvider {
    constructor();

    getControllersAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class ProviderSpiConnectionSettings {
    sharingMode: ProviderSpiSharingMode;
    mode: ProviderSpiMode;
    dataBitLength: Number;
    clockFrequency: Number;
    chipSelectLine: Number;
    constructor();
    constructor(chipSelectLine: Number);

  }

