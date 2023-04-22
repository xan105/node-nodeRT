  export class VibrationDevice {
    constructor();

    static getDefault(): VibrationDevice;


    vibrate(duration: number): void;

    cancel(): void;

  }

