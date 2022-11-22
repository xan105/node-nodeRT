  export enum VibrationAccessStatus {
    allowed,
    deniedByUser,
    deniedBySystem,
    deniedByEnergySaver,
  }

  export class SimpleHapticsControllerFeedback {
    duration: Number;
    waveform: Number;
    constructor();

  }

  export class SimpleHapticsController {
    id: String;
    isIntensitySupported: Boolean;
    isPlayCountSupported: Boolean;
    isPlayDurationSupported: Boolean;
    isReplayPauseIntervalSupported: Boolean;
    supportedFeedback: Object;
    constructor();

    stopFeedback(): void;

    sendHapticFeedback(feedback: SimpleHapticsControllerFeedback): void;
    sendHapticFeedback(feedback: SimpleHapticsControllerFeedback, intensity: Number): void;

    sendHapticFeedbackForDuration(feedback: SimpleHapticsControllerFeedback, intensity: Number, playDuration: Number): void;

    sendHapticFeedbackForPlayCount(feedback: SimpleHapticsControllerFeedback, intensity: Number, playCount: Number, replayPauseInterval: Number): void;

  }

  export class KnownSimpleHapticsControllerWaveforms {
    static buzzContinuous: Number;
    static click: Number;
    static press: Number;
    static release: Number;
    static rumbleContinuous: Number;
    constructor();

  }

  export class VibrationDevice {
    id: String;
    simpleHapticsController: SimpleHapticsController;
    constructor();

    static requestAccessAsync(callback: (error: Error, result: VibrationAccessStatus) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: VibrationDevice) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: VibrationDevice) => void): void ;


    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static getDeviceSelector(): String;


  }

