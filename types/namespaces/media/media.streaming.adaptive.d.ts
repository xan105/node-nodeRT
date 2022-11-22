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
    initialBitrate: Number;
    inboundBitsPerSecondWindow: Number;
    desiredMaxBitrate: Number;
    desiredLiveOffset: Number;
    desiredMinBitrate: Number;
    currentPlaybackBitrate: Number;
    audioOnlyPlayback: Boolean;
    inboundBitsPerSecond: Number;
    availableBitrates: Object;
    currentDownloadBitrate: Number;
    isLive: Boolean;
    advancedSettings: AdaptiveMediaSourceAdvancedSettings;
    desiredSeekableWindowSize: Number;
    diagnostics: AdaptiveMediaSourceDiagnostics;
    maxSeekableWindowSize: Number;
    minLiveOffset: Number;
    constructor();

    static createFromUriAsync(uri: Object, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;
    static createFromUriAsync(uri: Object, httpClient: Object, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;


    static createFromStreamAsync(stream: Object, uri: Object, contentType: String, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;
    static createFromStreamAsync(stream: Object, uri: Object, contentType: String, httpClient: Object, callback: (error: Error, result: AdaptiveMediaSourceCreationResult) => void): void ;


    static isContentTypeSupported(contentType: String): Boolean;


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
    extendedError: Number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadBitrateChangedEventArgs {
    newValue: Number;
    oldValue: Number;
    reason: AdaptiveMediaSourceDownloadBitrateChangedReason;
    constructor();

  }

  export class AdaptiveMediaSourcePlaybackBitrateChangedEventArgs {
    audioOnly: Boolean;
    newValue: Number;
    oldValue: Number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadRequestedEventArgs {
    resourceByteRangeLength: Number;
    resourceByteRangeOffset: Number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    result: AdaptiveMediaSourceDownloadResult;
    position: Number;
    requestId: Number;
    resourceContentType: String;
    resourceDuration: Number;
    constructor();

    getDeferral(): AdaptiveMediaSourceDownloadRequestedDeferral;

  }

  export class AdaptiveMediaSourceDownloadCompletedEventArgs {
    httpResponseMessage: Object;
    resourceByteRangeLength: Number;
    resourceByteRangeOffset: Number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    position: Number;
    requestId: Number;
    statistics: AdaptiveMediaSourceDownloadStatistics;
    resourceContentType: String;
    resourceDuration: Number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadFailedEventArgs {
    httpResponseMessage: Object;
    resourceByteRangeLength: Number;
    resourceByteRangeOffset: Number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    extendedError: Number;
    position: Number;
    requestId: Number;
    statistics: AdaptiveMediaSourceDownloadStatistics;
    resourceContentType: String;
    resourceDuration: Number;
    constructor();

  }

  export class AdaptiveMediaSourceAdvancedSettings {
    desiredBitrateHeadroomRatio: Number;
    bitrateDowngradeTriggerRatio: Number;
    allSegmentsIndependent: Boolean;
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
    position: Number;
    presentationTimeStamp: Number;
    programDateTime: Date;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadResult {
    resourceUri: Object;
    inputStream: Object;
    extendedStatus: Number;
    contentType: String;
    buffer: Object;
    resourceByteRangeOffset: Number;
    resourceByteRangeLength: Number;
    constructor();

  }

  export class AdaptiveMediaSourceDownloadRequestedDeferral {
    constructor();

    complete(): void;

  }

  export class AdaptiveMediaSourceDownloadStatistics {
    contentBytesReceivedCount: Number;
    timeToFirstByteReceived: Number;
    timeToHeadersReceived: Number;
    timeToLastByteReceived: Number;
    constructor();

  }

  export class AdaptiveMediaSourceDiagnosticAvailableEventArgs {
    bitrate: Number;
    diagnosticType: AdaptiveMediaSourceDiagnosticType;
    position: Number;
    requestId: Number;
    resourceByteRangeLength: Number;
    resourceByteRangeOffset: Number;
    resourceType: AdaptiveMediaSourceResourceType;
    resourceUri: Object;
    segmentId: Number;
    extendedError: Number;
    resourceContentType: String;
    resourceDuration: Number;
    constructor();

  }

