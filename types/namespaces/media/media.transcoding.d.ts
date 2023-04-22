  export enum MediaVideoProcessingAlgorithm {
    default,
    mrfCrf444,
  }

  export enum TranscodeFailureReason {
    none,
    unknown,
    invalidProfile,
    codecNotFound,
  }

  export class PrepareTranscodeResult {
    canTranscode: boolean;
    failureReason: TranscodeFailureReason;
    constructor();

    transcodeAsync(callback: (error: Error) => void): void ;

  }

  export class MediaTranscoder {
    trimStopTime: number;
    trimStartTime: number;
    hardwareAccelerationEnabled: boolean;
    alwaysReencode: boolean;
    videoProcessingAlgorithm: MediaVideoProcessingAlgorithm;
    constructor();

    prepareFileTranscodeAsync(source: Object, destination: Object, profile: Object, callback: (error: Error, result: PrepareTranscodeResult) => void): void ;

    prepareStreamTranscodeAsync(source: Object, destination: Object, profile: Object, callback: (error: Error, result: PrepareTranscodeResult) => void): void ;

    prepareMediaStreamSourceTranscodeAsync(source: Object, destination: Object, profile: Object, callback: (error: Error, result: PrepareTranscodeResult) => void): void ;

    addAudioEffect(activatableClassId: string): void;
    addAudioEffect(activatableClassId: string, effectRequired: boolean, configuration: Object): void;

    addVideoEffect(activatableClassId: string): void;
    addVideoEffect(activatableClassId: string, effectRequired: boolean, configuration: Object): void;

    clearEffects(): void;

  }

