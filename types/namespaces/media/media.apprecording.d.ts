  export class AppRecordingContract {
    constructor();
  }

  export enum AppRecordingSaveScreenshotOption {
    none,
    hdrContentVisible,
  }

  export class AppRecordingStatus {
    canRecord: Boolean;
    canRecordTimeSpan: Boolean;
    details: AppRecordingStatusDetails;
    historicalBufferDuration: Number;
    constructor();

  }

  export class AppRecordingResult {
    duration: Number;
    extendedError: Number;
    isFileTruncated: Boolean;
    succeeded: Boolean;
    constructor();

  }

  export class AppRecordingSaveScreenshotResult {
    extendedError: Number;
    savedScreenshotInfos: Object;
    succeeded: Boolean;
    constructor();

  }

  export class AppRecordingManager {
    supportedScreenshotMediaEncodingSubtypes: Object;
    constructor();

    static getDefault(): AppRecordingManager;


    startRecordingToFileAsync(file: Object, callback: (error: Error, result: AppRecordingResult) => void): void ;

    recordTimeSpanToFileAsync(startTime: Date, duration: Number, file: Object, callback: (error: Error, result: AppRecordingResult) => void): void ;

    saveScreenshotToFilesAsync(folder: Object, filenamePrefix: String, option: AppRecordingSaveScreenshotOption, requestedFormats: Object, callback: (error: Error, result: AppRecordingSaveScreenshotResult) => void): void ;

    getStatus(): AppRecordingStatus;

  }

  export class AppRecordingStatusDetails {
    isAnyAppBroadcasting: Boolean;
    isAppInactive: Boolean;
    isBlockedForApp: Boolean;
    isCaptureResourceUnavailable: Boolean;
    isDisabledBySystem: Boolean;
    isDisabledByUser: Boolean;
    isGameStreamInProgress: Boolean;
    isGpuConstrained: Boolean;
    isTimeSpanRecordingDisabled: Boolean;
    constructor();

  }

  export class AppRecordingSavedScreenshotInfo {
    file: Object;
    mediaEncodingSubtype: String;
    constructor();

  }

