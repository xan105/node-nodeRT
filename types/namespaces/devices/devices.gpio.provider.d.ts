  export enum ProviderGpioSharingMode {
    exclusive,
    sharedReadOnly,
  }

  export enum ProviderGpioPinDriveMode {
    input,
    output,
    inputPullUp,
    inputPullDown,
    outputOpenDrain,
    outputOpenDrainPullUp,
    outputOpenSource,
    outputOpenSourcePullDown,
  }

  export enum ProviderGpioPinValue {
    low,
    high,
  }

  export enum ProviderGpioPinEdge {
    fallingEdge,
    risingEdge,
  }

  export class GpioPinProviderValueChangedEventArgs {
    edge: ProviderGpioPinEdge;
    constructor();
    constructor(edge: ProviderGpioPinEdge);

  }

  export class IGpioPinProvider {
    debounceTimeout: Number;
    pinNumber: Number;
    sharingMode: ProviderGpioSharingMode;
    constructor();

    isDriveModeSupported(driveMode: ProviderGpioPinDriveMode): Boolean;

    getDriveMode(): ProviderGpioPinDriveMode;

    setDriveMode(value: ProviderGpioPinDriveMode): void;

    write(value: ProviderGpioPinValue): void;

    read(): ProviderGpioPinValue;

    addListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    on(type: "ValueChanged", listener: (ev: Event) => void): void ;
    off(type: "ValueChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IGpioControllerProvider {
    pinCount: Number;
    constructor();

    openPinProvider(pin: Number, sharingMode: ProviderGpioSharingMode): IGpioPinProvider;

  }

  export class IGpioProvider {
    constructor();

    getControllers(): Object;

  }

