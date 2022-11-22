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
    canTranscode: Boolean;
    failureReason: TranscodeFailureReason;
    constructor();

    transcodeAsync(callback: (error: Error) => void): void ;

  }

  export class MediaTranscoder {
    trimStopTime: Number;
    trimStartTime: Number;
    hardwareAccelerationEnabled: Boolean;
    alwaysReencode: Boolean;
    videoProcessingAlgorithm: MediaVideoProcessingAlgorithm;
    constructor();

    prepareFileTranscodeAsync(source: Object, destination: Object, profile: Object, callback: (error: Error, result: PrepareTranscodeResult) => void): void ;

    prepareStreamTranscodeAsync(source: Object, destination: Object, profile: Object, callback: (error: Error, result: PrepareTranscodeResult) => void): void ;

    prepareMediaStreamSourceTranscodeAsync(source: Object, destination: Object, profile: Object, callback: (error: Error, result: PrepareTranscodeResult) => void): void ;

    addAudioEffect(activatableClassId: String): void;
    addAudioEffect(activatableClassId: String, effectRequired: Boolean, configuration: Object): void;

    addVideoEffect(activatableClassId: String): void;
    addVideoEffect(activatableClassId: String, effectRequired: Boolean, configuration: Object): void;

    clearEffects(): void;

  }

