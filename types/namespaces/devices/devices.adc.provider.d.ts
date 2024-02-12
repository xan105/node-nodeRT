  export enum ProviderAdcChannelMode {
    singleEnded,
    differential,
  }

  export class IAdcControllerProvider {
    channelCount: Number;
    channelMode: ProviderAdcChannelMode;
    maxValue: Number;
    minValue: Number;
    resolutionInBits: Number;
    constructor();

    isChannelModeSupported(channelMode: ProviderAdcChannelMode): Boolean;

    acquireChannel(channel: Number): void;

    releaseChannel(channel: Number): void;

    readValue(channelNumber: Number): Number;

  }

  export class IAdcProvider {
    constructor();

    getControllers(): Object;

  }

