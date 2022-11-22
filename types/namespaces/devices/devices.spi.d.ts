  export enum SpiMode {
    mode0,
    mode1,
    mode2,
    mode3,
  }

  export enum SpiSharingMode {
    exclusive,
    shared,
  }

  export class SpiConnectionSettings {
    sharingMode: SpiSharingMode;
    mode: SpiMode;
    dataBitLength: Number;
    clockFrequency: Number;
    chipSelectLine: Number;
    constructor();
    constructor(chipSelectLine: Number);

  }

  export class SpiBusInfo {
    chipSelectLineCount: Number;
    maxClockFrequency: Number;
    minClockFrequency: Number;
    supportedDataBitLengths: Object;
    constructor();

  }

  export class ISpiDeviceStatics {
    constructor();

    fromIdAsync(busId: String, settings: SpiConnectionSettings, callback: (error: Error, result: SpiDevice) => void): void ;

    getDeviceSelector(): String;
    getDeviceSelector(friendlyName: String): String;

    getBusInfo(busId: String): SpiBusInfo;

  }

  export class SpiDevice {
    connectionSettings: SpiConnectionSettings;
    deviceId: String;
    constructor();

    static fromIdAsync(busId: String, settings: SpiConnectionSettings, callback: (error: Error, result: SpiDevice) => void): void ;


    static getDeviceSelector(): String;
    static getDeviceSelector(friendlyName: String): String;


    static getBusInfo(busId: String): SpiBusInfo;


    write(buffer: Array<Number>): void;

    read();
    transferSequential();
    transferFullDuplex();
    close(): void;
  }

  export class SpiController {
    constructor();

    static getDefaultAsync(callback: (error: Error, result: SpiController) => void): void ;


    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    getDevice(settings: SpiConnectionSettings): SpiDevice;

  }

export * as provider from "./devices.spi.provider.js";