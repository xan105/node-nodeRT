  export enum PwmPulsePolarity {
    activeHigh,
    activeLow,
  }

  export class PwmController {
    actualFrequency: Number;
    maxFrequency: Number;
    minFrequency: Number;
    pinCount: Number;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: PwmController) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: PwmController) => void): void ;


    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    static getDeviceSelector(): String;
    static getDeviceSelector(friendlyName: String): String;


    setDesiredFrequency(desiredFrequency: Number): Number;

    openPin(pinNumber: Number): PwmPin;

  }

  export class PwmPin {
    polarity: PwmPulsePolarity;
    controller: PwmController;
    isStarted: Boolean;
    constructor();

    getActiveDutyCyclePercentage(): Number;

    setActiveDutyCyclePercentage(dutyCyclePercentage: Number): void;

    start(): void;

    stop(): void;

    close(): void;
  }

export const PwmPulsePolarity: any;
export const PwmController: any;
export const PwmPin: any;
export * as provider from "./devices.pwm.provider.js";
