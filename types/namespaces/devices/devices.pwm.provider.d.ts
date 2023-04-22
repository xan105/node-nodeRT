  export class IPwmControllerProvider {
    actualFrequency: number;
    maxFrequency: number;
    minFrequency: number;
    pinCount: number;
    constructor();

    setDesiredFrequency(frequency: number): number;

    acquirePin(pin: number): void;

    releasePin(pin: number): void;

    enablePin(pin: number): void;

    disablePin(pin: number): void;

    setPulseParameters(pin: number, dutyCycle: number, invertPolarity: boolean): void;

  }

  export class IPwmProvider {
    constructor();

    getControllers(): Object;

  }

