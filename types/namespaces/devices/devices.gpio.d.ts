  export class GpioChangeCount {
    count: Number;
    relativeTime: Number;
    constructor();
  }

  export class GpioChangeRecord {
    relativeTime: Number;
    edge: GpioPinEdge;
    constructor();
  }

  export enum GpioChangePolarity {
    falling,
    rising,
    both,
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

  export enum GpioPinEdge {
    fallingEdge,
    risingEdge,
  }

  export enum GpioPinValue {
    low,
    high,
  }

  export enum GpioSharingMode {
    exclusive,
    sharedReadOnly,
  }

  export class GpioChangeCounter {
    polarity: GpioChangePolarity;
    isStarted: Boolean;
    constructor();
    constructor(pin: GpioPin);

    start(): void;

    stop(): void;

    read(): GpioChangeCount;

    reset(): GpioChangeCount;

    close(): void;
  }

  export class GpioChangeReader {
    polarity: GpioChangePolarity;
    capacity: Number;
    isEmpty: Boolean;
    isOverflowed: Boolean;
    isStarted: Boolean;
    length: Number;
    constructor();
    constructor(pin: GpioPin);
    constructor(pin: GpioPin, minCapacity: Number);

    waitForItemsAsync(count: Number, callback: (error: Error) => void): void ;

    start(): void;

    stop(): void;

    clear(): void;

    getNextItem(): GpioChangeRecord;

    peekNextItem(): GpioChangeRecord;

    getAllItems(): Object;

    close(): void;
  }

  export class GpioController {
    pinCount: Number;
    constructor();

    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: GpioController) => void): void ;


    static getDefault(): GpioController;


    openPin(pinNumber: Number): GpioPin;
    openPin(pinNumber: Number, sharingMode: GpioSharingMode): GpioPin;

    tryOpenPin(pinNumber: Number, sharingMode: GpioSharingMode, pin: Object, openStatus: GpioOpenStatus): Boolean;

  }

  export class GpioPin {
    debounceTimeout: Number;
    pinNumber: Number;
    sharingMode: GpioSharingMode;
    constructor();

    isDriveModeSupported(driveMode: GpioPinDriveMode): Boolean;

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

  export class GpioPinValueChangedEventArgs {
    edge: GpioPinEdge;
    constructor();

  }

export const GpioChangePolarity: any;
export const GpioOpenStatus: any;
export const GpioPinDriveMode: any;
export const GpioPinEdge: any;
export const GpioPinValue: any;
export const GpioSharingMode: any;
export const GpioChangeCounter: any;
export const GpioChangeReader: any;
export const GpioController: any;
export const GpioPin: any;
export const GpioPinValueChangedEventArgs: any;
export * as provider from "./devices.gpio.provider.js";
