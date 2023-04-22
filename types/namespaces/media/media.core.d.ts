  export class Color {
    constructor();
  }

  export class TimedTextPadding {
    before: number;
    after: number;
    start: number;
    end: number;
    unit: TimedTextUnit;
    constructor();
  }

  export class TimedTextSize {
    height: number;
    width: number;
    unit: TimedTextUnit;
    constructor();
  }

  export class TimedTextDouble {
    value: number;
    unit: TimedTextUnit;
    constructor();
  }

  export class TimedTextPoint {
    x: number;
    y: number;
    unit: TimedTextUnit;
    constructor();
  }

  export class MseTimeRange {
    start: number;
    end: number;
    constructor();
  }

  export enum TimedTextScrollMode {
    popon,
    rollup,
  }

  export enum TimedTextUnit {
    pixels,
    percentage,
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

  export enum TimedTextDisplayAlignment {
    before,
    after,
    center,
  }

  export enum TimedTextLineAlignment {
    start,
    end,
    center,
  }

  export enum TimedTextWrapping {
    noWrap,
    wrap,
  }

  export enum TimedTextWeight {
    normal,
    bold,
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

  export enum CodecKind {
    audio,
    video,
  }

  export enum CodecCategory {
    encoder,
    decoder,
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

  export enum MseReadyState {
    closed,
    open,
    ended,
  }

  export enum MseEndOfStreamStatus {
    success,
    networkError,
    decodeError,
    unknownError,
  }

  export enum MseAppendMode {
    segments,
    sequence,
  }

  export enum SceneAnalysisRecommendation {
    standard,
    hdr,
    lowLight,
  }

  export enum FaceDetectionMode {
    highPerformance,
    balanced,
    highQuality,
  }

  export enum VideoStabilizationEffectEnabledChangedReason {
    programmatic,
    pixelRateTooHigh,
    runningSlowly,
  }

  export enum MediaTrackKind {
    audio,
    video,
    timedMetadata,
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

  export enum MediaDecoderStatus {
    fullySupported,
    unsupportedSubtype,
    unsupportedEncoderProperties,
    degraded,
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

  export enum MediaSourceStatus {
    fullySupported,
    unknown,
  }

  export enum MediaSourceState {
    initial,
    opening,
    opened,
    failed,
    closed,
  }

  export class IMediaCue {
    duration: number;
    id: string;
    startTime: number;
    constructor();

  }

  export class TimedTextRegion {
    name: string;
    lineHeight: TimedTextDouble;
    isOverflowClipped: boolean;
    extent: TimedTextSize;
    displayAlignment: TimedTextDisplayAlignment;
    padding: TimedTextPadding;
    background: Object;
    zIndex: number;
    writingMode: TimedTextWritingMode;
    textWrapping: TimedTextWrapping;
    scrollMode: TimedTextScrollMode;
    position: TimedTextPoint;
    constructor();

  }

  export class TimedTextStyle {
    lineAlignment: TimedTextLineAlignment;
    outlineRadius: TimedTextDouble;
    foreground: Object;
    background: Object;
    fontSize: TimedTextDouble;
    name: string;
    flowDirection: TimedTextFlowDirection;
    fontWeight: TimedTextWeight;
    fontFamily: string;
    outlineThickness: TimedTextDouble;
    isBackgroundAlwaysShown: boolean;
    outlineColor: Object;
    isUnderlineEnabled: boolean;
    isOverlineEnabled: boolean;
    isLineThroughEnabled: boolean;
    fontStyle: TimedTextFontStyle;
    constructor();

  }

  export class TimedTextLine {
    text: string;
    subformats: Object;
    constructor();

  }

  export class TimedTextSubformat {
    subformatStyle: TimedTextStyle;
    startIndex: number;
    length: number;
    constructor();

  }

  export class TimedTextCue {
    startTime: number;
    id: string;
    duration: number;
    cueStyle: TimedTextStyle;
    cueRegion: TimedTextRegion;
    lines: Object;
    constructor();

  }

  export class DataCue {
    data: Object;
    properties: Object;
    startTime: number;
    id: string;
    duration: number;
    constructor();

  }

  export class ChapterCue {
    title: string;
    startTime: number;
    id: string;
    duration: number;
    constructor();

  }

  export class ImageCue {
    softwareBitmap: Object;
    position: TimedTextPoint;
    extent: TimedTextSize;
    startTime: number;
    id: string;
    duration: number;
    constructor();

  }

  export class SpeechCue {
    startTime: number;
    id: string;
    duration: number;
    text: string;
    startPositionInInput: number;
    endPositionInInput: number;
    constructor();

  }

  export class CodecInfo {
    category: CodecCategory;
    displayName: string;
    isTrusted: boolean;
    kind: CodecKind;
    subtypes: Object;
    constructor();

  }

  export class CodecQuery {
    constructor();

    findAllAsync(kind: CodecKind, category: CodecCategory, subType: string, callback: (error: Error, result: Object) => void): void ;

  }

  export class CodecSubtypes {
    static audioFormatAac: string;
    static audioFormatAdts: string;
    static audioFormatAlac: string;
    static audioFormatAmrNB: string;
    static audioFormatAmrWB: string;
    static audioFormatAmrWP: string;
    static audioFormatDolbyAC3: string;
    static audioFormatDolbyAC3Spdif: string;
    static audioFormatDolbyDDPlus: string;
    static audioFormatDrm: string;
    static audioFormatDts: string;
    static audioFormatFlac: string;
    static audioFormatFloat: string;
    static audioFormatMP3: string;
    static audioFormatMPeg: string;
    static audioFormatMsp1: string;
    static audioFormatOpus: string;
    static audioFormatPcm: string;
    static audioFormatWMAudioLossless: string;
    static audioFormatWMAudioV8: string;
    static audioFormatWMAudioV9: string;
    static audioFormatWmaSpdif: string;
    static videoFormat420O: string;
    static videoFormatDV25: string;
    static videoFormatDV50: string;
    static videoFormatDvc: string;
    static videoFormatDvh1: string;
    static videoFormatDvhD: string;
    static videoFormatDvsd: string;
    static videoFormatDvsl: string;
    static videoFormatH263: string;
    static videoFormatH264: string;
    static videoFormatH264ES: string;
    static videoFormatH265: string;
    static videoFormatHevc: string;
    static videoFormatHevcES: string;
    static videoFormatM4S2: string;
    static videoFormatMP43: string;
    static videoFormatMP4S: string;
    static videoFormatMP4V: string;
    static videoFormatMjpg: string;
    static videoFormatMpeg2: string;
    static videoFormatMpg1: string;
    static videoFormatMss1: string;
    static videoFormatMss2: string;
    static videoFormatVP80: string;
    static videoFormatVP90: string;
    static videoFormatWmv1: string;
    static videoFormatWmv2: string;
    static videoFormatWmv3: string;
    static videoFormatWvc1: string;
    constructor();

  }

  export class LowLightFusionResult {
    frame: Object;
    constructor();

    close(): void;
  }

  export class LowLightFusion {
    static maxSupportedFrameCount: number;
    static supportedBitmapPixelFormats: Object;
    constructor();

    static fuseAsync(frameSet: Object, callback: (error: Error, result: LowLightFusionResult) => void): void ;


  }

  export class AudioStreamDescriptor {
    encodingProperties: Object;
    trailingEncoderPadding: number;
    leadingEncoderPadding: number;
    name: string;
    language: string;
    isSelected: boolean;
    label: string;
    constructor();
    constructor(encodingProperties: Object);

    copy(): AudioStreamDescriptor;

  }

  export class VideoStreamDescriptor {
    name: string;
    language: string;
    isSelected: boolean;
    label: string;
    encodingProperties: Object;
    constructor();
    constructor(encodingProperties: Object);

    copy(): VideoStreamDescriptor;

  }

  export class TimedMetadataStreamDescriptor {
    name: string;
    language: string;
    isSelected: boolean;
    label: string;
    encodingProperties: Object;
    constructor();
    constructor(encodingProperties: Object);

    copy(): TimedMetadataStreamDescriptor;

  }

  export class IMediaStreamDescriptor {
    isSelected: boolean;
    language: string;
    name: string;
    constructor();

  }

  export class IMediaStreamDescriptor2 {
    label: string;
    constructor();

  }

  export class IMediaSource {
    constructor();

  }

  export class MediaStreamSource {
    thumbnail: Object;
    mediaProtectionManager: Object;
    duration: number;
    canSeek: boolean;
    bufferTime: number;
    musicProperties: Object;
    videoProperties: Object;
    maxSupportedPlaybackRate: number;
    isLive: boolean;
    constructor();
    constructor(descriptor: IMediaStreamDescriptor);
    constructor(descriptor: IMediaStreamDescriptor, descriptor2: IMediaStreamDescriptor);

    notifyError(errorStatus: MediaStreamSourceErrorStatus): void;

    addStreamDescriptor(descriptor: IMediaStreamDescriptor): void;

    setBufferedRange(startOffset: number, endOffset: number): void;

    addProtectionKey(streamDescriptor: IMediaStreamDescriptor, keyIdentifier: Array<number>, licenseData: Array<number>): void;

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

  export class MediaStreamSourceStartingEventArgs {
    request: MediaStreamSourceStartingRequest;
    constructor();

  }

  export class MediaStreamSourceSampleRequestedEventArgs {
    request: MediaStreamSourceSampleRequest;
    constructor();

  }

  export class MediaStreamSourceSwitchStreamsRequestedEventArgs {
    request: MediaStreamSourceSwitchStreamsRequest;
    constructor();

  }

  export class MediaStreamSourceSampleRenderedEventArgs {
    sampleLag: number;
    constructor();

  }

  export class MediaStreamSamplePropertySet {
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

  }

  export class MediaStreamSample {
    keyFrame: boolean;
    duration: number;
    discontinuous: boolean;
    decodeTimestamp: number;
    buffer: Object;
    extendedProperties: MediaStreamSamplePropertySet;
    protection: MediaStreamSampleProtectionProperties;
    timestamp: number;
    constructor();

    static createFromStreamAsync(stream: Object, count: number, timestamp: number, callback: (error: Error, result: MediaStreamSample) => void): void ;


    static createFromBuffer(buffer: Object, timestamp: number): MediaStreamSample;


    addListener(type: "Processed", listener: (ev: Event) => void): void ;
    removeListener(type: "Processed", listener: (ev: Event) => void): void ;
    on(type: "Processed", listener: (ev: Event) => void): void ;
    off(type: "Processed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaStreamSampleProtectionProperties {
    constructor();

    setKeyIdentifier(value: Array<number>): void;

    getKeyIdentifier(value: Array<number>): void;

    setInitializationVector(value: Array<number>): void;

    getInitializationVector(value: Array<number>): void;

    setSubSampleMapping(value: Array<number>): void;

    getSubSampleMapping(value: Array<number>): void;

  }

  export class MediaStreamSourceClosedRequest {
    reason: MediaStreamSourceClosedReason;
    constructor();

  }

  export class MediaStreamSourceStartingRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MediaStreamSourceStartingRequest {
    startPosition: number;
    constructor();

    getDeferral(): MediaStreamSourceStartingRequestDeferral;

    setActualStartPosition(position: number): void;

  }

  export class MediaStreamSourceSampleRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MediaStreamSourceSampleRequest {
    sample: MediaStreamSample;
    streamDescriptor: IMediaStreamDescriptor;
    constructor();

    getDeferral(): MediaStreamSourceSampleRequestDeferral;

    reportSampleProgress(progress: number): void;

  }

  export class MediaStreamSourceSwitchStreamsRequestDeferral {
    constructor();

    complete(): void;

  }

  export class MediaStreamSourceSwitchStreamsRequest {
    newStreamDescriptor: IMediaStreamDescriptor;
    oldStreamDescriptor: IMediaStreamDescriptor;
    constructor();

    getDeferral(): MediaStreamSourceSwitchStreamsRequestDeferral;

  }

  export class MseStreamSource {
    duration: number;
    activeSourceBuffers: MseSourceBufferList;
    readyState: MseReadyState;
    sourceBuffers: MseSourceBufferList;
    liveSeekableRange: MseTimeRange;
    constructor();

    static isContentTypeSupported(contentType: string): boolean;


    addSourceBuffer(mimeType: string): MseSourceBuffer;

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

  export class MseSourceBuffer {
    timestampOffset: number;
    mode: MseAppendMode;
    appendWindowStart: number;
    appendWindowEnd: number;
    buffered: Object;
    isUpdating: boolean;
    constructor();

    appendBuffer(buffer: Object): void;

    appendStream(stream: Object): void;
    appendStream(stream: Object, maxSize: number): void;

    abort(): void;

    remove(start: number, end: number): void;

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

  export class InitializeMediaStreamSourceRequestedEventArgs {
    randomAccessStream: Object;
    source: MediaStreamSource;
    constructor();

    getDeferral(): Object;

  }

  export class HighDynamicRangeControl {
    enabled: boolean;
    constructor();

  }

  export class SceneAnalysisEffect {
    desiredAnalysisInterval: number;
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

  export class SceneAnalyzedEventArgs {
    resultFrame: SceneAnalysisEffectFrame;
    constructor();

  }

  export class HighDynamicRangeOutput {
    certainty: number;
    frameControllers: Object;
    constructor();

  }

  export class SceneAnalysisEffectFrame {
    frameControlValues: Object;
    highDynamicRange: HighDynamicRangeOutput;
    analysisRecommendation: SceneAnalysisRecommendation;
    systemRelativeTime: number;
    relativeTime: number;
    isDiscontinuous: boolean;
    duration: number;
    extendedProperties: Object;
    isReadOnly: boolean;
    type: string;
    constructor();

    close(): void;
  }

  export class SceneAnalysisEffectDefinition {
    activatableClassId: string;
    properties: Object;
    constructor();

  }

  export class FaceDetectionEffectFrame {
    detectedFaces: Object;
    systemRelativeTime: number;
    relativeTime: number;
    isDiscontinuous: boolean;
    duration: number;
    extendedProperties: Object;
    isReadOnly: boolean;
    type: string;
    constructor();

    close(): void;
  }

  export class FaceDetectedEventArgs {
    resultFrame: FaceDetectionEffectFrame;
    constructor();

  }

  export class FaceDetectionEffect {
    enabled: boolean;
    desiredDetectionInterval: number;
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
    synchronousDetectionEnabled: boolean;
    detectionMode: FaceDetectionMode;
    activatableClassId: string;
    properties: Object;
    constructor();

  }

  export class VideoStabilizationEffectEnabledChangedEventArgs {
    reason: VideoStabilizationEffectEnabledChangedReason;
    constructor();

  }

  export class VideoStabilizationEffect {
    enabled: boolean;
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
    activatableClassId: string;
    properties: Object;
    constructor();

  }

  export class MediaSourceError {
    extendedError: number;
    constructor();

  }

  export class MediaSource {
    customProperties: Object;
    duration: number;
    externalTimedMetadataTracks: Object;
    externalTimedTextSources: Object;
    isOpen: boolean;
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


    static createFromStream(stream: Object, contentType: string): MediaSource;


    static createFromStreamReference(stream: Object, contentType: string): MediaSource;


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

  export class MediaBinder {
    token: string;
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

    setStream(stream: Object, contentType: string): void;

    setStreamReference(stream: Object, contentType: string): void;

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

  export class MediaSourceOpenOperationCompletedEventArgs {
    error: MediaSourceError;
    constructor();

  }

  export class TimedTextSource {
    constructor();

    static createFromStreamWithIndex(stream: Object, indexStream: Object): TimedTextSource;
    static createFromStreamWithIndex(stream: Object, indexStream: Object, defaultLanguage: string): TimedTextSource;


    static createFromUriWithIndex(uri: Object, indexUri: Object): TimedTextSource;
    static createFromUriWithIndex(uri: Object, indexUri: Object, defaultLanguage: string): TimedTextSource;


    static createFromStream(stream: Object): TimedTextSource;
    static createFromStream(stream: Object, defaultLanguage: string): TimedTextSource;


    static createFromUri(uri: Object): TimedTextSource;
    static createFromUri(uri: Object, defaultLanguage: string): TimedTextSource;


    addListener(type: "Resolved", listener: (ev: Event) => void): void ;
    removeListener(type: "Resolved", listener: (ev: Event) => void): void ;
    on(type: "Resolved", listener: (ev: Event) => void): void ;
    off(type: "Resolved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TimedMetadataTrack {
    label: string;
    id: string;
    language: string;
    trackKind: MediaTrackKind;
    activeCues: Object;
    cues: Object;
    dispatchType: string;
    timedMetadataKind: TimedMetadataKind;
    name: string;
    playbackItem: Object;
    constructor();
    constructor(id: string, language: string, kind: TimedMetadataKind);

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

  export class MediaSourceStateChangedEventArgs {
    newState: MediaSourceState;
    oldState: MediaSourceState;
    constructor();

  }

  export class ISingleSelectMediaTrackList {
    selectedIndex: number;
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

  export class IMediaTrack {
    id: string;
    label: string;
    language: string;
    trackKind: MediaTrackKind;
    constructor();

  }

  export class TimedMetadataTrackError {
    errorCode: TimedMetadataTrackErrorCode;
    extendedError: number;
    constructor();

  }

  export class ITimedMetadataTrackProvider {
    timedMetadataTracks: Object;
    constructor();

  }

  export class MediaCueEventArgs {
    cue: IMediaCue;
    constructor();

  }

  export class TimedMetadataTrackFailedEventArgs {
    error: TimedMetadataTrackError;
    constructor();

  }

  export class TimedTextSourceResolveResultEventArgs {
    error: TimedMetadataTrackError;
    tracks: Object;
    constructor();

  }

  export class VideoTrack {
    label: string;
    id: string;
    language: string;
    trackKind: MediaTrackKind;
    name: string;
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
    extendedError: number;
    constructor();

  }

  export class VideoTrackSupportInfo {
    decoderStatus: MediaDecoderStatus;
    mediaSourceStatus: MediaSourceStatus;
    constructor();

  }

  export class AudioTrack {
    name: string;
    playbackItem: Object;
    supportInfo: AudioTrackSupportInfo;
    label: string;
    id: string;
    language: string;
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
    extendedError: number;
    constructor();

  }

  export class AudioTrackSupportInfo {
    decoderStatus: MediaDecoderStatus;
    degradation: AudioDecoderDegradation;
    degradationReason: AudioDecoderDegradationReason;
    mediaSourceStatus: MediaSourceStatus;
    constructor();

  }

export * as preview from "./media.core.preview.js";