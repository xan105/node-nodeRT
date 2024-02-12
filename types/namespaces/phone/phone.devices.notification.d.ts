  export class VibrationDevice {
    constructor();

    static getDefault(): VibrationDevice;


    vibrate(duration: Number): void;

    cancel(): void;

  }

