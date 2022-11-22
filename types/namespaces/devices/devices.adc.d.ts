  export enum AdcChannelMode {
    singleEnded,
    differential,
  }

  export class AdcChannel {
    controller: AdcController;
    constructor();

    readValue(): Number;

    readRatio(): Number;

    close(): void;
  }

  export class AdcController {
    channelMode: AdcChannelMode;
    channelCount: Number;
    maxValue: Number;
    minValue: Number;
    resolutionInBits: Number;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: AdcController) => void): void ;


    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    isChannelModeSupported(channelMode: AdcChannelMode): Boolean;

    openChannel(channelNumber: Number): AdcChannel;

  }

export * as provider from "./devices.adc.provider.js";