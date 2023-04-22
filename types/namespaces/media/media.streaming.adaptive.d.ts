  export enum AdaptiveMediaSourceCreationStatus {
    success,
    manifestDownloadFailure,
    manifestParseFailure,
    unsupportedManifestContentType,
    unsupportedManifestVersion,
    unsupportedManifestProfile,
    unknownFailure,
  }

  export enum AdaptiveMediaSourceDownloadBitrateChangedReason {
    sufficientInboundBitsPerSecond,
    insufficientInboundBitsPerSecond,
    lowBufferLevel,
    positionChanged,
    trackSelectionChanged,
    desiredBitratesChanged,
    errorInPreviousBitrate,
  }

  export enum AdaptiveMediaSourceResourceType {
    manifest,
    initializationSegment,
    mediaSegment,
    key,
    initializationVector,
  }

  export enum AdaptiveMediaSourceDiagnosticType {
    manifestUnchangedUponReload,
    manifestMismatchUponReload,
    manifestSignaledEndOfLiveEventUponReload,
    mediaSegmentSkipped,
    resourceNotFound,
    resourceTimedOut,
    resourceParsingError,
    bitrateDisabled,
    fatalMediaSourceError,
  }

  export class AdaptiveMediaSource {
    initialBitrate: number;
    inboundBitsPerSecondWindow: number;
    desiredMaxBitrate: number;
    desiredLiveOffset: number;
    desiredMinBitrate: number;
    currentPlaybackBitrate: number;
    audioOnlyPlayback: boolean;
    inboundBitsPerSecond: number;
    availableBitrates: Object;
    currentDownloadBitrate: number;
    isLive: boolean;
    advancedSettings: AdaptiveMediaSourceAdvancedSettings;
    desiredSeekableWindowSize: number;
    diagnostics: AdaptiveMediaSourceDiagnostics;
    maxSeekableWindowSize: number;
    minLiveOffset: number;
    constructor();

    static createFromUriAsync(uri: Object, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;
    static createFromUriAsync(uri: Object, httpClient: Object, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;


    static createFromStreamAsync(stream: Object, uri: Object, contentType: string, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;
    static createFromStreamAsync(stream: Object, uri: Object, contentType: string, httpClient: Object, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;


    static isContentTypeSupported(contentType: string): boolean;


    getCorrelatedTimes(): AdaptiveMediaSourceCorrelatedTimes;

    close(): void;
    addListener(type: "DownloadBitrateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadBitrateChanged", listener: (ev: Event) => void): void ;
    on(type: "DownloadBitrateChanged", listener: (ev: Event) => void): void ;
    off(type: "DownloadBitrateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DownloadCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadCompleted", listener: (ev: Event) => void): void ;
    on(type: "DownloadCompleted", listener: (ev: Event) => void): void ;
    off(type: "DownloadCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "DownloadFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadFailed", listener: (ev: Event) => void): void ;
    on(type: "DownloadFailed", listener: (ev: Event) => void): void ;
    off(type: "DownloadFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "DownloadRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadRequested", listener: (ev: Event) => void): void ;
    on(type: "DownloadRequested", listener: (ev: Event) => void): void ;
    off(type: "DownloadRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackBitrateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackBitrateChanged", listener: (ev: Event) => void): void ;
    on(type: "PlaybackBitrateChanged", listener: (ev: Event) => void): void ;
    off(type: "PlaybackBitrateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AdaptiveMediaSourceCreationResult {
    httpResponseMessage: Object;
    mediaSource: AdaptiveMediaSource;
    status: AdaptiveMediaSourceCreationStatus;
    extendedError: number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadBitrateChangedEventArgs {
    newValue: number;
    oldValue: number;
    reason: AdaptiveMediaSourceDownloadBitrateChangedReason;
    constructor();

  }

  export class AdaptiveMediaSourcePlaybackBitrateChangedEventArgs {
    audioOnly: boolean;
    newValue: number;
    oldValue: number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadRequestedEventArgs {
    resourceByteRangeLength: number;
    resourceByteRangeOffset: number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    result: AdaptiveMediaSourceDownloadResult;
    position: number;
    requestId: number;
    resourceContentType: string;
    resourceDuration: number;
    constructor();

    getDeferral(): AdaptiveMediaSourceDownloadRequestedDeferral;

  }

  export class AdaptiveMediaSourceDownloadCompletedEventArgs {
    httpResponseMessage: Object;
    resourceByteRangeLength: number;
    resourceByteRangeOffset: number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    position: number;
    requestId: number;
    statistics: AdaptiveMediaSourceDownloadStatistics;
    resourceContentType: string;
    resourceDuration: number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadFailedEventArgs {
    httpResponseMessage: Object;
    resourceByteRangeLength: number;
    resourceByteRangeOffset: number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    extendedError: number;
    position: number;
    requestId: number;
    statistics: AdaptiveMediaSourceDownloadStatistics;
    resourceContentType: string;
    resourceDuration: number;
    constructor();

  }

  export class AdaptiveMediaSourceAdvancedSettings {
    desiredBitrateHeadroomRatio: number;
    bitrateDowngradeTriggerRatio: number;
    allSegmentsIndependent: boolean;
    constructor();

  }

  export class AdaptiveMediaSourceDiagnostics {
    constructor();

    addListener(type: "DiagnosticAvailable", listener: (ev: Event) => void): void ;
    removeListener(type: "DiagnosticAvailable", listener: (ev: Event) => void): void ;
    on(type: "DiagnosticAvailable", listener: (ev: Event) => void): void ;
    off(type: "DiagnosticAvailable", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AdaptiveMediaSourceCorrelatedTimes {
    position: number;
    presentationTimeStamp: number;
    programDateTime: Date;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadResult {
    resourceUri: Object;
    inputStream: Object;
    extendedStatus: number;
    contentType: string;
    buffer: Object;
    resourceByteRangeOffset: number;
    resourceByteRangeLength: number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadRequestedDeferral {
    constructor();

    complete(): void;

  }

  export class AdaptiveMediaSourceDownloadStatistics {
    contentBytesReceivedCount: number;
    timeToFirstByteReceived: number;
    timeToHeadersReceived: number;
    timeToLastByteReceived: number;
    constructor();

  }

  export class AdaptiveMediaSourceDiagnosticAvailableEventArgs {
    bitrate: number;
    diagnosticType: AdaptiveMediaSourceDiagnosticType;
    position: number;
    requestId: number;
    resourceByteRangeLength: number;
    resourceByteRangeOffset: number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    segmentId: number;
    extendedError: number;
    resourceContentType: string;
    resourceDuration: number;
    constructor();

  }

