  export class GpioChangeRecord {
    relativeTime: number;
    edge: GpioPinEdge;
    constructor();
  }

  export class GpioChangeCount {
    count: number;
    relativeTime: number;
    constructor();
  }

  export enum GpioSharingMode {
    exclusive,
    sharedReadOnly,
  }

  export enum GpioOpenStatus {
    pinOpened,
    pinUnavailable,
    sharingViolation,
    muxingConflict,
    unknownError,
  }

  export enum GpioPinDriveMode {
    input,
    output,
    inputPullUp,
    inputPullDown,
    outputOpenDrain,
    outputOpenDrainPullUp,
    outputOpenSource,
    outputOpenSourcePullDown,
  }

  export enum GpioPinValue {
    low,
    high,
  }

  export enum GpioPinEdge {
    fallingEdge,
    risingEdge,
  }

  export enum GpioChangePolarity {
    falling,
    rising,
    both,
  }

  export class GpioPinValueChangedEventArgs {
    edge: GpioPinEdge;
    constructor();

  }

  export class GpioPin {
    debounceTimeout: number;
    pinNumber: number;
    sharingMode: GpioSharingMode;
    constructor();

    isDriveModeSupported(driveMode: GpioPinDriveMode): boolean;

    getDriveMode(): GpioPinDriveMode;

    setDriveMode(value: GpioPinDriveMode): void;

    write(value: GpioPinValue): void;

    read(): GpioPinValue;

    close(): void;
    addListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    on(type: "ValueChanged", listener: (ev: Event) => void): void ;
    off(type: "ValueChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GpioController {
    pinCount: number;
    constructor();

    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: GpioController) => void): void ;


    static getDefault(): GpioController;


    openPin(pinNumber: number): GpioPin;
    openPin(pinNumber: number, sharingMode: GpioSharingMode): GpioPin;

    tryOpenPin(pinNumber: number, sharingMode: GpioSharingMode, pin: Object, openStatus: GpioOpenStatus): boolean;

  }

  export class GpioChangeReader {
    polarity: GpioChangePolarity;
    capacity: number;
    isEmpty: boolean;
    isOverflowed: boolean;
    isStarted: boolean;
    length: number;
    constructor();
    constructor(pin: GpioPin);
    constructor(pin: GpioPin, minCapacity: number);

    waitForItemsAsync(count: number, callback: (error: Error) => void): void ;

    start(): void;

    stop(): void;

    clear(): void;

    getNextItem(): GpioChangeRecord;

    peekNextItem(): GpioChangeRecord;

    getAllItems(): Object;

    close(): void;
  }

  export class GpioChangeCounter {
    polarity: GpioChangePolarity;
    isStarted: boolean;
    constructor();
    constructor(pin: GpioPin);

    start(): void;

    stop(): void;

    read(): GpioChangeCount;

    reset(): GpioChangeCount;

    close(): void;
  }

export * as provider from "./devices.gpio.provider.js";