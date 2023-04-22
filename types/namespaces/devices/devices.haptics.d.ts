  export enum VibrationAccessStatus {
    allowed,
    deniedByUser,
    deniedBySystem,
    deniedByEnergySaver,
  }

  export class SimpleHapticsControllerFeedback {
    duration: number;
    waveform: number;
    constructor();

  }

  export class SimpleHapticsController {
    id: string;
    isIntensitySupported: boolean;
    isPlayCountSupported: boolean;
    isPlayDurationSupported: boolean;
    isReplayPauseIntervalSupported: boolean;
    supportedFeedback: Object;
    constructor();

    stopFeedback(): void;

    sendHapticFeedback(feedback: SimpleHapticsControllerFeedback): void;
    sendHapticFeedback(feedback: SimpleHapticsControllerFeedback, intensity: number): void;

    sendHapticFeedbackForDuration(feedback: SimpleHapticsControllerFeedback, intensity: number, playDuration: number): void;

    sendHapticFeedbackForPlayCount(feedback: SimpleHapticsControllerFeedback, intensity: number, playCount: number, replayPauseInterval: number): void;

  }

  export class KnownSimpleHapticsControllerWaveforms {
    static buzzContinuous: number;
    static click: number;
    static press: number;
    static release: number;
    static rumbleContinuous: number;
    constructor();

  }

  export class VibrationDevice {
    id: string;
    simpleHapticsController: SimpleHapticsController;
    constructor();

    static requestAccessAsync(callback: (error: Error, result: VibrationAccessStatus) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: VibrationDevice) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: VibrationDevice) => void): void ;


    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static getDeviceSelector(): string;


  }

