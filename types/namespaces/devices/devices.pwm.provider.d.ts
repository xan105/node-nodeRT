  export class IPwmControllerProvider {
    actualFrequency: Number;
    maxFrequency: Number;
    minFrequency: Number;
    pinCount: Number;
    constructor();

    setDesiredFrequency(frequency: Number): Number;

    acquirePin(pin: Number): void;

    releasePin(pin: Number): void;

    enablePin(pin: Number): void;

    disablePin(pin: Number): void;

    setPulseParameters(pin: Number, dutyCycle: Number, invertPolarity: Boolean): void;

  }

  export class IPwmProvider {
    constructor();

    getControllers(): Object;

  }

