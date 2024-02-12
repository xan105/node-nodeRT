  export class Color {
    constructor();
  }

  export class MseTimeRange {
    start: Number;
    end: Number;
    constructor();
  }

  export class TimedTextDouble {
    value: Number;
    unit: TimedTextUnit;
    constructor();
  }

  export class TimedTextPadding {
    before: Number;
    after: Number;
    start: Number;
    end: Number;
    unit: TimedTextUnit;
    constructor();
  }

  export class TimedTextPoint {
    x: Number;
    y: Number;
    unit: TimedTextUnit;
    constructor();
  }

  export class TimedTextSize {
    height: Number;
    width: Number;
    unit: TimedTextUnit;
    constructor();
  }

  export enum AudioDecoderDegradation {
    none,
    downmixTo2Channels,
    downmixTo6Channels,
    downmixTo8Channels,
  }

  export enum AudioDecoderDegradationReason {
    none,
    licensingRequirement,
    spatialAudioNotSupported,
  }

  export enum CodecCategory {
    encoder,
    decoder,
  }

  export enum CodecKind {
    audio,
    video,
  }

  export enum FaceDetectionMode {
    highPerformance,
    balanced,
    highQuality,
  }

  export enum MediaDecoderStatus {
    fullySupported,
    unsupportedSubtype,
    unsupportedEncoderProperties,
    degraded,
  }

  export enum MediaSourceState {
    initial,
    opening,
    opened,
    failed,
    closed,
  }

  export enum MediaSourceStatus {
    fullySupported,
    unknown,
  }

  export enum MediaStreamSourceClosedReason {
    done,
    unknownError,
    appReportedError,
    unsupportedProtectionSystem,
    protectionSystemFailure,
    unsupportedEncodingFormat,
    missingSampleRequestedEventHandler,
  }

  export enum MediaStreamSourceErrorStatus {
    other,
    outOfMemory,
    failedToOpenFile,
    failedToConnectToServer,
    connectionToServerLost,
    unspecifiedNetworkError,
    decodeError,
    unsupportedMediaFormat,
  }

  export enum MediaTrackKind {
    audio,
    video,
    timedMetadata,
  }

  export enum MseAppendMode {
    segments,
    sequence,
  }

  export enum MseEndOfStreamStatus {
    success,
    networkError,
    decodeError,
    unknownError,
  }

  export enum MseReadyState {
    closed,
    open,
    ended,
  }

  export enum SceneAnalysisRecommendation {
    standard,
    hdr,
    lowLight,
  }

  export enum TimedMetadataKind {
    caption,
    chapter,
    custom,
    data,
    description,
    subtitle,
    imageSubtitle,
    speech,
  }

  export enum TimedMetadataTrackErrorCode {
    none,
    dataFormatError,
    networkError,
    internalError,
  }

  export enum TimedTextBoutenPosition {
    before,
    after,
    outside,
  }

  export enum TimedTextBoutenType {
    none,
    auto,
    filledCircle,
    openCircle,
    filledDot,
    openDot,
    filledSesame,
    openSesame,
  }

  export enum TimedTextDisplayAlignment {
    before,
    after,
    center,
  }

  export enum TimedTextFlowDirection {
    leftToRight,
    rightToLeft,
  }

  export enum TimedTextFontStyle {
    normal,
    oblique,
    italic,
  }

  export enum TimedTextLineAlignment {
    start,
    end,
    center,
  }

  export enum TimedTextRubyAlign {
    center,
    start,
    end,
    spaceAround,
    spaceBetween,
    withBase,
  }

  export enum TimedTextRubyPosition {
    before,
    after,
    outside,
  }

  export enum TimedTextRubyReserve {
    none,
    before,
    after,
    both,
    outside,
  }

  export enum TimedTextScrollMode {
    popon,
    rollup,
  }

  export enum TimedTextUnit {
    pixels,
    percentage,
  }

  export enum TimedTextWeight {
    normal,
    bold,
  }

  export enum TimedTextWrapping {
    noWrap,
    wrap,
  }

  export enum TimedTextWritingMode {
    leftRightTopBottom,
    rightLeftTopBottom,
    topBottomRightLeft,
    topBottomLeftRight,
    leftRight,
    rightLeft,
    topBottom,
  }

  export enum VideoStabilizationEffectEnabledChangedReason {
    programmatic,
    pixelRateTooHigh,
    runningSlowly,
  }

  export class AudioStreamDescriptor {
    encodingProperties: Object;
    trailingEncoderPadding: Number;
    leadingEncoderPadding: Number;
    name: String;
    language: String;
    isSelected: Boolean;
    label: String;
    constructor();
    constructor(encodingProperties: Object);

    copy(): AudioStreamDescriptor;

  }

  export class AudioTrack {
    name: String;
    playbackItem: Object;
    supportInfo: AudioTrackSupportInfo;
    label: String;
    id: String;
    language: String;
    trackKind: MediaTrackKind;
    constructor();

    getEncodingProperties(): Object;

    addListener(type: "OpenFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "OpenFailed", listener: (ev: Event) => void): void ;
    on(type: "OpenFailed", listener: (ev: Event) => void): void ;
    off(type: "OpenFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AudioTrackOpenFailedEventArgs {
    extendedError: Number;
    constructor();

  }

  export class AudioTrackSupportInfo {
    decoderStatus: MediaDecoderStatus;
    degradation: AudioDecoderDegradation;
    degradationReason: AudioDecoderDegradationReason;
    mediaSourceStatus: MediaSourceStatus;
    constructor();

  }

  export class ChapterCue {
    title: String;
    startTime: Number;
    id: String;
    duration: Number;
    constructor();

  }

  export class CodecInfo {
    category: CodecCategory;
    displayName: String;
    isTrusted: Boolean;
    kind: CodecKind;
    subtypes: Object;
    constructor();

  }

  export class CodecQuery {
    constructor();

    findAllAsync(kind: CodecKind, category: CodecCategory, subType: String, callback: (error: Error, result: Object) => void): void ;

  }

  export class CodecSubtypes {
    static audioFormatAac: String;
    static audioFormatAdts: String;
    static audioFormatAlac: String;
    static audioFormatAmrNB: String;
    static audioFormatAmrWB: String;
    static audioFormatAmrWP: String;
    static audioFormatDolbyAC3: String;
    static audioFormatDolbyAC3Spdif: String;
    static audioFormatDolbyDDPlus: String;
    static audioFormatDrm: String;
    static audioFormatDts: String;
    static audioFormatFlac: String;
    static audioFormatFloat: String;
    static audioFormatMP3: String;
    static audioFormatMPeg: String;
    static audioFormatMsp1: String;
    static audioFormatOpus: String;
    static audioFormatPcm: String;
    static audioFormatWMAudioLossless: String;
    static audioFormatWMAudioV8: String;
    static audioFormatWMAudioV9: String;
    static audioFormatWmaSpdif: String;
    static videoFormat420O: String;
    static videoFormatDV25: String;
    static videoFormatDV50: String;
    static videoFormatDvc: String;
    static videoFormatDvh1: String;
    static videoFormatDvhD: String;
    static videoFormatDvsd: String;
    static videoFormatDvsl: String;
    static videoFormatH263: String;
    static videoFormatH264: String;
    static videoFormatH264ES: String;
    static videoFormatH265: String;
    static videoFormatHevc: String;
    static videoFormatHevcES: String;
    static videoFormatM4S2: String;
    static videoFormatMP43: String;
    static videoFormatMP4S: String;
    static videoFormatMP4V: String;
    static videoFormatMjpg: String;
    static videoFormatMpeg2: String;
    static videoFormatMpg1: String;
    static videoFormatMss1: String;
    static videoFormatMss2: String;
    static videoFormatVP80: String;
    static videoFormatVP90: String;
    static videoFormatWmv1: String;
    static videoFormatWmv2: String;
    static videoFormatWmv3: String;
    static videoFormatWvc1: String;
    constructor();

  }

  export class DataCue {
    data: Object;
    properties: Object;
    startTime: Number;
    id: String;
    duration: Number;
    constructor();

  }

  export class FaceDetectedEventArgs {
    resultFrame: FaceDetectionEffectFrame;
    constructor();

  }

  export class FaceDetectionEffect {
    enabled: Boolean;
    desiredDetectionInterval: Number;
    constructor();

    setProperties(configuration: Object): void;

    addListener(type: "FaceDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "FaceDetected", listener: (ev: Event) => void): void ;
    on(type: "FaceDetected", listener: (ev: Event) => void): void ;
    off(type: "FaceDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FaceDetectionEffectDefinition {
    synchronousDetectionEnabled: Boolean;
    detectionMode: FaceDetectionMode;
    activatableClassId: String;
    properties: Object;
    constructor();

  }

  export class FaceDetectionEffectFrame {
    detectedFaces: Object;
    systemRelativeTime: Number;
    relativeTime: Number;
    isDiscontinuous: Boolean;
    duration: Number;
    extendedProperties: Object;
    isReadOnly: Boolean;
    type: String;
    constructor();

    close(): void;
  }

  export class HighDynamicRangeControl {
    enabled: Boolean;
    constructor();

  }

  export class HighDynamicRangeOutput {
    certainty: Number;
    frameControllers: Object;
    constructor();

  }

  export class IMediaCue {
    duration: Number;
    id: String;
    startTime: Number;
    constructor();

  }

  export class IMediaSource {
    constructor();

  }

  export class IMediaStreamDescriptor {
    isSelected: Boolean;
    language: String;
    name: String;
    constructor();

  }

  export class IMediaStreamDescriptor2 {
    label: String;
    constructor();

  }

  export class IMediaTrack {
    id: String;
    label: String;
    language: String;
    trackKind: MediaTrackKind;
    constructor();

  }

  export class ISingleSelectMediaTrackList {
    selectedIndex: Number;
    constructor();

    addListener(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    on(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    off(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ITimedMetadataTrackProvider {
    timedMetadataTracks: Object;
    constructor();

  }

  export class ImageCue {
    softwareBitmap: Object;
    position: TimedTextPoint;
    extent: TimedTextSize;
    startTime: Number;
    id: String;
    duration: Number;
    constructor();

  }

  export class InitializeMediaStreamSourceRequestedEventArgs {
    randomAccessStream: Object;
    source: MediaStreamSource;
    constructor();

    getDeferral(): Object;

  }

  export class LowLightFusion {
    static maxSupportedFrameCount: Number;
    static supportedBitmapPixelFormats: Object;
    constructor();

    static fuseAsync(frameSet: Object, callback: (error: Error, result: LowLightFusionResult) => void): void ;


  }

  export class LowLightFusionResult {
    frame: Object;
    constructor();

    close(): void;
  }

  export class MediaBinder {
    token: String;
    source: MediaSource;
    constructor();

    addListener(type: "Binding", listener: (ev: Event) => void): void ;
    removeListener(type: "Binding", listener: (ev: Event) => void): void ;
    on(type: "Binding", listener: (ev: Event) => void): void ;
    off(type: "Binding", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaBindingEventArgs {
    mediaBinder: MediaBinder;
    constructor();

    getDeferral(): Object;

    setUri(uri: Object): void;

    setStream(stream: Object, contentType: String): void;

    setStreamReference(stream: Object, contentType: String): void;

    setAdaptiveMediaSource(mediaSource: Object): void;

    setStorageFile(file: Object): void;

    setDownloadOperation(downloadOperation: Object): void;

    addListener(type: "Canceled", listener: (ev: Event) => void): void ;
    removeListener(type: "Canceled", listener: (ev: Event) => void): void ;
    on(type: "Canceled", listener: (ev: Event) => void): void ;
    off(type: "Canceled", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaCueEventArgs {
    cue: IMediaCue;
    constructor();

  }

  export class MediaSource {
    customProperties: Object;
    duration: Number;
    externalTimedMetadataTracks: Object;
    externalTimedTextSources: Object;
    isOpen: Boolean;
    state: MediaSourceState;
    adaptiveMediaSource: Object;
    mediaStreamSource: MediaStreamSource;
    mseStreamSource: MseStreamSource;
    uri: Object;
    downloadOperation: Object;
    constructor();

    static createFromDownloadOperation(downloadOperation: Object): MediaSource;


    static createFromMediaFrameSource(frameSource: Object): MediaSource;


    static createFromMediaBinder(binder: MediaBinder): MediaSource;


    static createFromAdaptiveMediaSource(mediaSource: Object): MediaSource;


    static createFromMediaStreamSource(mediaSource: MediaStreamSource): MediaSource;


    static createFromMseStreamSource(mediaSource: MseStreamSource): MediaSource;


    static createFromIMediaSource(mediaSource: IMediaSource): MediaSource;


    static createFromStorageFile(file: Object): MediaSource;


    static createFromStream(stream: Object, contentType: String): MediaSource;


    static createFromStreamReference(stream: Object, contentType: String): MediaSource;


    static createFromUri(uri: Object): MediaSource;


    openAsync(callback: (error: Error) => void): void ;

    close(): void;
    reset(): void;

    addListener(type: "OpenOperationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "OpenOperationCompleted", listener: (ev: Event) => void): void ;
    on(type: "OpenOperationCompleted", listener: (ev: Event) => void): void ;
    off(type: "OpenOperationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaSourceAppServiceConnection {
    constructor();
    constructor(appServiceConnection: Object);

    start(): void;

    addListener(type: "InitializeMediaStreamSourceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "InitializeMediaStreamSourceRequested", listener: (ev: Event) => void): void ;
    on(type: "InitializeMediaStreamSourceRequested", listener: (ev: Event) => void): void ;
    off(type: "InitializeMediaStreamSourceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaSourceError {
    extendedError: Number;
    constructor();

  }

  export class MediaSourceOpenOperationCompletedEventArgs {
    error: MediaSourceError;
    constructor();

  }

  export class MediaSourceStateChangedEventArgs {
    newState: MediaSourceState;
    oldState: MediaSourceState;
    constructor();

  }

  export class MediaStreamSample {
    keyFrame: Boolean;
    duration: Number;
    discontinuous: Boolean;
    decodeTimestamp: Number;
    buffer: Object;
    extendedProperties: MediaStreamSamplePropertySet;
    protection: MediaStreamSampleProtectionProperties;
    timestamp: Number;
    direct3D11Surface: Object;
    constructor();

    static createFromStreamAsync(stream: Object, count: Number, timestamp: Number, callback: (error: Error, result: MediaStreamSample) => void): void ;


    static createFromDirect3D11Surface(surface: Object, timestamp: Number): MediaStreamSample;


    static createFromBuffer(buffer: Object, timestamp: Number): MediaStreamSample;


    addListener(type: "Processed", listener: (ev: Event) => void): void ;
    removeListener(type: "Processed", listener: (ev: Event) => void): void ;
    on(type: "Processed", listener: (ev: Event) => void): void ;
    off(type: "Processed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaStreamSamplePropertySet {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class MediaStreamSampleProtectionProperties {
    constructor();

    setKeyIdentifier(value: Array<Number>): void;

    getKeyIdentifier(value: Array<Number>): void;

    setInitializationVector(value: Array<Number>): void;

    getInitializationVector(value: Array<Number>): void;

    setSubSampleMapping(value: Array<Number>): void;

    getSubSampleMapping(value: Array<Number>): void;

  }

  export class MediaStreamSource {
    thumbnail: Object;
    mediaProtectionManager: Object;
    duration: Number;
    canSeek: Boolean;
    bufferTime: Number;
    musicProperties: Object;
    videoProperties: Object;
    maxSupportedPlaybackRate: Number;
    isLive: Boolean;
    constructor();
    constructor(descriptor: IMediaStreamDescriptor);
    constructor(descriptor: IMediaStreamDescriptor, descriptor2: IMediaStreamDescriptor);

    notifyError(errorStatus: MediaStreamSourceErrorStatus): void;

    addStreamDescriptor(descriptor: IMediaStreamDescriptor): void;

    setBufferedRange(startOffset: Number, endOffset: Number): void;

    addProtectionKey(streamDescriptor: IMediaStreamDescriptor, keyIdentifier: Array<Number>, licenseData: Array<Number>): void;

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Paused", listener: (ev: Event) => void): void ;
    removeListener(type: "Paused", listener: (ev: Event) => void): void ;
    on(type: "Paused", listener: (ev: Event) => void): void ;
    off(type: "Paused", listener: (ev: Event) => void): void ;
    
    addListener(type: "SampleRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SampleRequested", listener: (ev: Event) => void): void ;
    on(type: "SampleRequested", listener: (ev: Event) => void): void ;
    off(type: "SampleRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "Starting", listener: (ev: Event) => void): void ;
    removeListener(type: "Starting", listener: (ev: Event) => void): void ;
    on(type: "Starting", listener: (ev: Event) => void): void ;
    off(type: "Starting", listener: (ev: Event) => void): void ;
    
    addListener(type: "SwitchStreamsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SwitchStreamsRequested", listener: (ev: Event) => void): void ;
    on(type: "SwitchStreamsRequested", listener: (ev: Event) => void): void ;
    off(type: "SwitchStreamsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SampleRendered", listener: (ev: Event) => void): void ;
    removeListener(type: "SampleRendered", listener: (ev: Event) => void): void ;
    on(type: "SampleRendered", listener: (ev: Event) => void): void ;
    off(type: "SampleRendered", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaStreamSourceClosedEventArgs {
    request: MediaStreamSourceClosedRequest;
    constructor();

  }

  export class MediaStreamSourceClosedRequest {
    reason: MediaStreamSourceClosedReason;
    constructor();

  }

  export class MediaStreamSourceSampleRenderedEventArgs {
    sampleLag: Number;
    constructor();

  }

  export class MediaStreamSourceSampleRequest {
    sample: MediaStreamSample;
    streamDescriptor: IMediaStreamDescriptor;
    constructor();

    getDeferral(): MediaStreamSourceSampleRequestDeferral;

    reportSampleProgress(progress: Number): void;

  }

  export class MediaStreamSourceSampleRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MediaStreamSourceSampleRequestedEventArgs {
    request: MediaStreamSourceSampleRequest;
    constructor();

  }

  export class MediaStreamSourceStartingEventArgs {
    request: MediaStreamSourceStartingRequest;
    constructor();

  }

  export class MediaStreamSourceStartingRequest {
    startPosition: Number;
    constructor();

    getDeferral(): MediaStreamSourceStartingRequestDeferral;

    setActualStartPosition(position: Number): void;

  }

  export class MediaStreamSourceStartingRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MediaStreamSourceSwitchStreamsRequest {
    newStreamDescriptor: IMediaStreamDescriptor;
    oldStreamDescriptor: IMediaStreamDescriptor;
    constructor();

    getDeferral(): MediaStreamSourceSwitchStreamsRequestDeferral;

  }

  export class MediaStreamSourceSwitchStreamsRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MediaStreamSourceSwitchStreamsRequestedEventArgs {
    request: MediaStreamSourceSwitchStreamsRequest;
    constructor();

  }

  export class MseSourceBuffer {
    timestampOffset: Number;
    mode: MseAppendMode;
    appendWindowStart: Number;
    appendWindowEnd: Number;
    buffered: Object;
    isUpdating: Boolean;
    constructor();

    appendBuffer(buffer: Object): void;

    appendStream(stream: Object): void;
    appendStream(stream: Object, maxSize: Number): void;

    abort(): void;

    remove(start: Number, end: Number): void;

    addListener(type: "Aborted", listener: (ev: Event) => void): void ;
    removeListener(type: "Aborted", listener: (ev: Event) => void): void ;
    on(type: "Aborted", listener: (ev: Event) => void): void ;
    off(type: "Aborted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    removeListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    on(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    off(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    
    addListener(type: "UpdateEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "UpdateEnded", listener: (ev: Event) => void): void ;
    on(type: "UpdateEnded", listener: (ev: Event) => void): void ;
    off(type: "UpdateEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "UpdateStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "UpdateStarting", listener: (ev: Event) => void): void ;
    on(type: "UpdateStarting", listener: (ev: Event) => void): void ;
    off(type: "UpdateStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MseSourceBufferList {
    buffers: Object;
    constructor();

    addListener(type: "SourceBufferAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceBufferAdded", listener: (ev: Event) => void): void ;
    on(type: "SourceBufferAdded", listener: (ev: Event) => void): void ;
    off(type: "SourceBufferAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceBufferRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceBufferRemoved", listener: (ev: Event) => void): void ;
    on(type: "SourceBufferRemoved", listener: (ev: Event) => void): void ;
    off(type: "SourceBufferRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MseStreamSource {
    duration: Number;
    activeSourceBuffers: MseSourceBufferList;
    readyState: MseReadyState;
    sourceBuffers: MseSourceBufferList;
    liveSeekableRange: MseTimeRange;
    constructor();

    static isContentTypeSupported(contentType: String): Boolean;


    addSourceBuffer(mimeType: String): MseSourceBuffer;

    removeSourceBuffer(buffer: MseSourceBuffer): void;

    endOfStream(status: MseEndOfStreamStatus): void;

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Ended", listener: (ev: Event) => void): void ;
    removeListener(type: "Ended", listener: (ev: Event) => void): void ;
    on(type: "Ended", listener: (ev: Event) => void): void ;
    off(type: "Ended", listener: (ev: Event) => void): void ;
    
    addListener(type: "Opened", listener: (ev: Event) => void): void ;
    removeListener(type: "Opened", listener: (ev: Event) => void): void ;
    on(type: "Opened", listener: (ev: Event) => void): void ;
    off(type: "Opened", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SceneAnalysisEffect {
    desiredAnalysisInterval: Number;
    highDynamicRangeAnalyzer: HighDynamicRangeControl;
    constructor();

    setProperties(configuration: Object): void;

    addListener(type: "SceneAnalyzed", listener: (ev: Event) => void): void ;
    removeListener(type: "SceneAnalyzed", listener: (ev: Event) => void): void ;
    on(type: "SceneAnalyzed", listener: (ev: Event) => void): void ;
    off(type: "SceneAnalyzed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SceneAnalysisEffectDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();

  }

  export class SceneAnalysisEffectFrame {
    frameControlValues: Object;
    highDynamicRange: HighDynamicRangeOutput;
    analysisRecommendation: SceneAnalysisRecommendation;
    systemRelativeTime: Number;
    relativeTime: Number;
    isDiscontinuous: Boolean;
    duration: Number;
    extendedProperties: Object;
    isReadOnly: Boolean;
    type: String;
    constructor();

    close(): void;
  }

  export class SceneAnalyzedEventArgs {
    resultFrame: SceneAnalysisEffectFrame;
    constructor();

  }

  export class SpeechCue {
    startTime: Number;
    id: String;
    duration: Number;
    text: String;
    startPositionInInput: Number;
    endPositionInInput: Number;
    constructor();

  }

  export class TimedMetadataStreamDescriptor {
    name: String;
    language: String;
    isSelected: Boolean;
    label: String;
    encodingProperties: Object;
    constructor();
    constructor(encodingProperties: Object);

    copy(): TimedMetadataStreamDescriptor;

  }

  export class TimedMetadataTrack {
    label: String;
    id: String;
    language: String;
    trackKind: MediaTrackKind;
    activeCues: Object;
    cues: Object;
    dispatchType: String;
    timedMetadataKind: TimedMetadataKind;
    name: String;
    playbackItem: Object;
    constructor();
    constructor(id: String, language: String, kind: TimedMetadataKind);

    addCue(cue: IMediaCue): void;

    removeCue(cue: IMediaCue): void;

    addListener(type: "CueEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "CueEntered", listener: (ev: Event) => void): void ;
    on(type: "CueEntered", listener: (ev: Event) => void): void ;
    off(type: "CueEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "CueExited", listener: (ev: Event) => void): void ;
    removeListener(type: "CueExited", listener: (ev: Event) => void): void ;
    on(type: "CueExited", listener: (ev: Event) => void): void ;
    off(type: "CueExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "TrackFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "TrackFailed", listener: (ev: Event) => void): void ;
    on(type: "TrackFailed", listener: (ev: Event) => void): void ;
    off(type: "TrackFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TimedMetadataTrackError {
    errorCode: TimedMetadataTrackErrorCode;
    extendedError: Number;
    constructor();

  }

  export class TimedMetadataTrackFailedEventArgs {
    error: TimedMetadataTrackError;
    constructor();

  }

  export class TimedTextBouten {
    type: TimedTextBoutenType;
    position: TimedTextBoutenPosition;
    color: Object;
    constructor();

  }

  export class TimedTextCue {
    startTime: Number;
    id: String;
    duration: Number;
    cueStyle: TimedTextStyle;
    cueRegion: TimedTextRegion;
    lines: Object;
    constructor();

  }

  export class TimedTextLine {
    text: String;
    subformats: Object;
    constructor();

  }

  export class TimedTextRegion {
    name: String;
    lineHeight: TimedTextDouble;
    isOverflowClipped: Boolean;
    extent: TimedTextSize;
    displayAlignment: TimedTextDisplayAlignment;
    padding: TimedTextPadding;
    background: Object;
    zIndex: Number;
    writingMode: TimedTextWritingMode;
    textWrapping: TimedTextWrapping;
    scrollMode: TimedTextScrollMode;
    position: TimedTextPoint;
    constructor();

  }

  export class TimedTextRuby {
    text: String;
    reserve: TimedTextRubyReserve;
    position: TimedTextRubyPosition;
    align: TimedTextRubyAlign;
    constructor();

  }

  export class TimedTextSource {
    constructor();

    static createFromStreamWithIndex(stream: Object, indexStream: Object): TimedTextSource;
    static createFromStreamWithIndex(stream: Object, indexStream: Object, defaultLanguage: String): TimedTextSource;


    static createFromUriWithIndex(uri: Object, indexUri: Object): TimedTextSource;
    static createFromUriWithIndex(uri: Object, indexUri: Object, defaultLanguage: String): TimedTextSource;


    static createFromStream(stream: Object): TimedTextSource;
    static createFromStream(stream: Object, defaultLanguage: String): TimedTextSource;


    static createFromUri(uri: Object): TimedTextSource;
    static createFromUri(uri: Object, defaultLanguage: String): TimedTextSource;


    addListener(type: "Resolved", listener: (ev: Event) => void): void ;
    removeListener(type: "Resolved", listener: (ev: Event) => void): void ;
    on(type: "Resolved", listener: (ev: Event) => void): void ;
    off(type: "Resolved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TimedTextSourceResolveResultEventArgs {
    error: TimedMetadataTrackError;
    tracks: Object;
    constructor();

  }

  export class TimedTextStyle {
    lineAlignment: TimedTextLineAlignment;
    isBackgroundAlwaysShown: Boolean;
    outlineColor: Object;
    foreground: Object;
    fontWeight: TimedTextWeight;
    background: Object;
    fontSize: TimedTextDouble;
    fontFamily: String;
    flowDirection: TimedTextFlowDirection;
    outlineThickness: TimedTextDouble;
    outlineRadius: TimedTextDouble;
    name: String;
    isUnderlineEnabled: Boolean;
    isOverlineEnabled: Boolean;
    isLineThroughEnabled: Boolean;
    fontStyle: TimedTextFontStyle;
    isTextCombined: Boolean;
    fontAngleInDegrees: Number;
    bouten: TimedTextBouten;
    ruby: TimedTextRuby;
    constructor();

  }

  export class TimedTextSubformat {
    subformatStyle: TimedTextStyle;
    startIndex: Number;
    length: Number;
    constructor();

  }

  export class VideoStabilizationEffect {
    enabled: Boolean;
    constructor();

    getRecommendedStreamConfiguration(controller: Object, desiredProperties: Object): Object;

    setProperties(configuration: Object): void;

    addListener(type: "EnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "EnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "EnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "EnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VideoStabilizationEffectDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();

  }

  export class VideoStabilizationEffectEnabledChangedEventArgs {
    reason: VideoStabilizationEffectEnabledChangedReason;
    constructor();

  }

  export class VideoStreamDescriptor {
    name: String;
    language: String;
    isSelected: Boolean;
    label: String;
    encodingProperties: Object;
    constructor();
    constructor(encodingProperties: Object);

    copy(): VideoStreamDescriptor;

  }

  export class VideoTrack {
    label: String;
    id: String;
    language: String;
    trackKind: MediaTrackKind;
    name: String;
    playbackItem: Object;
    supportInfo: VideoTrackSupportInfo;
    constructor();

    getEncodingProperties(): Object;

    addListener(type: "OpenFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "OpenFailed", listener: (ev: Event) => void): void ;
    on(type: "OpenFailed", listener: (ev: Event) => void): void ;
    off(type: "OpenFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VideoTrackOpenFailedEventArgs {
    extendedError: Number;
    constructor();

  }

  export class VideoTrackSupportInfo {
    decoderStatus: MediaDecoderStatus;
    mediaSourceStatus: MediaSourceStatus;
    constructor();

  }

