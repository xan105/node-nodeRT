  export enum AdcChannelMode {
    singleEnded,
    differential,
  }

  export class AdcChannel {
    controller: AdcController;
    constructor();

    readValue(): number;

    readRatio(): number;

    close(): void;
  }

  export class AdcController {
    channelMode: AdcChannelMode;
    channelCount: number;
    maxValue: number;
    minValue: number;
    resolutionInBits: number;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: AdcController) => void): void ;


    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    isChannelModeSupported(channelMode: AdcChannelMode): boolean;

    openChannel(channelNumber: number): AdcChannel;

  }

export * as provider from "./devices.adc.provider.js";