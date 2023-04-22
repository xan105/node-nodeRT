  export enum ProviderAdcChannelMode {
    singleEnded,
    differential,
  }

  export class IAdcControllerProvider {
    channelCount: number;
    channelMode: ProviderAdcChannelMode;
    maxValue: number;
    minValue: number;
    resolutionInBits: number;
    constructor();

    isChannelModeSupported(channelMode: ProviderAdcChannelMode): boolean;

    acquireChannel(channel: number): void;

    releaseChannel(channel: number): void;

    readValue(channelNumber: number): number;

  }

  export class IAdcProvider {
    constructor();

    getControllers(): Object;

  }

