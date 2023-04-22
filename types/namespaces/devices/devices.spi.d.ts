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
    dataBitLength: number;
    clockFrequency: number;
    chipSelectLine: number;
    constructor();
    constructor(chipSelectLine: number);

  }

  export class SpiBusInfo {
    chipSelectLineCount: number;
    maxClockFrequency: number;
    minClockFrequency: number;
    supportedDataBitLengths: Object;
    constructor();

  }

  export class ISpiDeviceStatics {
    constructor();

    fromIdAsync(busId: string, settings: SpiConnectionSettings, callback: (error: Error, result: SpiDevice) => void): void ;

    getDeviceSelector(): string;
    getDeviceSelector(friendlyName: string): string;

    getBusInfo(busId: string): SpiBusInfo;

  }

  export class SpiDevice {
    connectionSettings: SpiConnectionSettings;
    deviceId: string;
    constructor();

    static fromIdAsync(busId: string, settings: SpiConnectionSettings, callback: (error: Error, result: SpiDevice) => void): void ;


    static getDeviceSelector(): string;
    static getDeviceSelector(friendlyName: string): string;


    static getBusInfo(busId: string): SpiBusInfo;


    write(buffer: Array<number>): void;

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