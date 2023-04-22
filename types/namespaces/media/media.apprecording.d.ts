  export class AppRecordingContract {
    constructor();
  }

  export enum AppRecordingSaveScreenshotOption {
    none,
    hdrContentVisible,
  }

  export class AppRecordingStatus {
    canRecord: boolean;
    canRecordTimeSpan: boolean;
    details: AppRecordingStatusDetails;
    historicalBufferDuration: number;
    constructor();

  }

  export class AppRecordingResult {
    duration: number;
    extendedError: number;
    isFileTruncated: boolean;
    succeeded: boolean;
    constructor();

  }

  export class AppRecordingSaveScreenshotResult {
    extendedError: number;
    savedScreenshotInfos: Object;
    succeeded: boolean;
    constructor();

  }

  export class AppRecordingManager {
    supportedScreenshotMediaEncodingSubtypes: Object;
    constructor();

    static getDefault(): AppRecordingManager;


    startRecordingToFileAsync(file: Object, callback: (error: Error, result: AppRecordingResult) => void): void ;

    recordTimeSpanToFileAsync(startTime: Date, duration: number, file: Object, callback: (error: Error, result: AppRecordingResult) => void): void ;

    saveScreenshotToFilesAsync(folder: Object, filenamePrefix: string, option: AppRecordingSaveScreenshotOption, requestedFormats: Object, callback: (error: Error, result: AppRecordingSaveScreenshotResult) => void): void ;

    getStatus(): AppRecordingStatus;

  }

  export class AppRecordingStatusDetails {
    isAnyAppBroadcasting: boolean;
    isAppInactive: boolean;
    isBlockedForApp: boolean;
    isCaptureResourceUnavailable: boolean;
    isDisabledBySystem: boolean;
    isDisabledByUser: boolean;
    isGameStreamInProgress: boolean;
    isGpuConstrained: boolean;
    isTimeSpanRecordingDisabled: boolean;
    constructor();

  }

  export class AppRecordingSavedScreenshotInfo {
    file: Object;
    mediaEncodingSubtype: string;
    constructor();

  }

