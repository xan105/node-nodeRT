  export enum PwmPulsePolarity {
    activeHigh,
    activeLow,
  }

  export class PwmPin {
    polarity: PwmPulsePolarity;
    controller: PwmController;
    isStarted: boolean;
    constructor();

    getActiveDutyCyclePercentage(): number;

    setActiveDutyCyclePercentage(dutyCyclePercentage: number): void;

    start(): void;

    stop(): void;

    close(): void;
  }

  export class PwmController {
    actualFrequency: number;
    maxFrequency: number;
    minFrequency: number;
    pinCount: number;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: PwmController) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: PwmController) => void): void ;


    static getControllersAsync(provider: Object, callback: (error: Error, result: Object) => void): void ;


    static getDeviceSelector(): string;
    static getDeviceSelector(friendlyName: string): string;


    setDesiredFrequency(desiredFrequency: number): number;

    openPin(pinNumber: number): PwmPin;

  }

export * as provider from "./devices.pwm.provider.js";