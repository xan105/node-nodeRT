  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class MediaTimeRange {
    start: Number;
    end: Number;
    constructor();
  }

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export enum MediaPlayerState {
    closed,
    opening,
    buffering,
    playing,
    paused,
    stopped,
  }

  export enum MediaPlaybackState {
    none,
    opening,
    buffering,
    playing,
    paused,
  }

  export enum MediaPlayerError {
    unknown,
    aborted,
    networkError,
    decodingError,
    sourceNotSupported,
  }

  export enum MediaPlayerAudioCategory {
    other,
    communications,
    alerts,
    soundEffects,
    gameEffects,
    gameMedia,
    gameChat,
    speech,
    movie,
    media,
  }

  export enum MediaPlayerAudioDeviceType {
    console,
    multimedia,
    communications,
  }

  export enum StereoscopicVideoRenderMode {
    mono,
    stereo,
  }

  export enum MediaCommandEnablingRule {
    auto,
    always,
    never,
  }

  export enum MediaPlaybackSessionVideoConstrictionReason {
    none,
    virtualMachine,
    unsupportedDisplayAdapter,
    unsignedDriver,
    frameServerEnabled,
    outputProtectionFailed,
    unknown,
  }

  export enum SphericalVideoProjectionMode {
    spherical,
    flat,
  }

  export enum MediaPlaybackItemErrorCode {
    none,
    aborted,
    networkError,
    decodeError,
    sourceNotSupportedError,
    encryptionError,
  }

  export enum FailedMediaStreamKind {
    unknown,
    audio,
    video,
  }

  export enum TimedMetadataTrackPresentationMode {
    disabled,
    hidden,
    applicationPresented,
    platformPresented,
  }

  export enum MediaBreakInsertionMethod {
    interrupt,
    replace,
  }

  export enum MediaPlaybackItemChangedReason {
    initialItem,
    endOfStream,
    error,
    appRequested,
  }

  export enum AutoLoadedDisplayPropertyKind {
    none,
    musicOrVideo,
    music,
    video,
  }

  export class PlaybackMediaMarker {
    mediaMarkerType: String;
    text: String;
    time: Number;
    constructor();
    constructor(value: Number);
    constructor(value: Number, mediaMarketType: String, text: String);

  }

  export class PlaybackMediaMarkerSequence {
    size: Number;
    constructor();

    insert(value: PlaybackMediaMarker): void;

    clear(): void;

    first(): Object;

  }

  export class MediaPlayerFailedEventArgs {
    error: MediaPlayerError;
    errorMessage: String;
    extendedErrorCode: Number;
    constructor();

  }

  export class MediaPlayerRateChangedEventArgs {
    newRate: Number;
    constructor();

  }

  export class PlaybackMediaMarkerReachedEventArgs {
    playbackMediaMarker: PlaybackMediaMarker;
    constructor();

  }

  export class MediaPlayerDataReceivedEventArgs {
    data: Object;
    constructor();

  }

  export class MediaPlayer {
    volume: Number;
    position: Number;
    playbackRate: Number;
    isLoopingEnabled: Boolean;
    isMuted: Boolean;
    autoPlay: Boolean;
    currentState: MediaPlayerState;
    naturalDuration: Number;
    playbackMediaMarkers: PlaybackMediaMarkerSequence;
    isProtected: Boolean;
    bufferingProgress: Number;
    canPause: Boolean;
    canSeek: Boolean;
    audioDeviceType: MediaPlayerAudioDeviceType;
    audioCategory: MediaPlayerAudioCategory;
    systemMediaTransportControls: Object;
    timelineControllerPositionOffset: Number;
    timelineController: Object;
    stereoscopicVideoRenderMode: StereoscopicVideoRenderMode;
    realTimePlayback: Boolean;
    audioDevice: Object;
    audioBalance: Number;
    commandManager: MediaPlaybackCommandManager;
    breakManager: MediaBreakManager;
    playbackSession: MediaPlaybackSession;
    isVideoFrameServerEnabled: Boolean;
    audioStateMonitor: Object;
    protectionManager: Object;
    source: IMediaPlaybackSource;
    constructor();

    addAudioEffect(activatableClassId: String, effectOptional: Boolean, configuration: Object): void;

    removeAllEffects(): void;

    close(): void;
    stepForwardOneFrame(): void;

    stepBackwardOneFrame(): void;

    getAsCastingSource(): Object;

    setSurfaceSize(size: Object): void;

    getSurface(compositor: Object): MediaPlayerSurface;

    addVideoEffect(activatableClassId: String, effectOptional: Boolean, effectConfiguration: Object): void;

    copyFrameToVideoSurface(destination: Object): void;
    copyFrameToVideoSurface(destination: Object, targetRectangle: Object): void;

    copyFrameToStereoscopicVideoSurfaces(destinationLeftEye: Object, destinationRightEye: Object): void;

    renderSubtitlesToSurface(destination: Object): Boolean;
    renderSubtitlesToSurface(destination: Object, targetRectangle: Object): Boolean;

    play(): void;

    pause(): void;

    setUriSource(value: Object): void;

    setFileSource(file: Object): void;

    setStreamSource(stream: Object): void;

    setMediaSource(source: Object): void;

    addListener(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    on(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    off(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    on(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    off(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    on(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    off(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "MediaEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "MediaEnded", listener: (ev: Event) => void): void ;
    on(type: "MediaEnded", listener: (ev: Event) => void): void ;
    off(type: "MediaEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "MediaFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "MediaFailed", listener: (ev: Event) => void): void ;
    on(type: "MediaFailed", listener: (ev: Event) => void): void ;
    off(type: "MediaFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "MediaOpened", listener: (ev: Event) => void): void ;
    removeListener(type: "MediaOpened", listener: (ev: Event) => void): void ;
    on(type: "MediaOpened", listener: (ev: Event) => void): void ;
    off(type: "MediaOpened", listener: (ev: Event) => void): void ;
    
    addListener(type: "MediaPlayerRateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MediaPlayerRateChanged", listener: (ev: Event) => void): void ;
    on(type: "MediaPlayerRateChanged", listener: (ev: Event) => void): void ;
    off(type: "MediaPlayerRateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackMediaMarkerReached", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackMediaMarkerReached", listener: (ev: Event) => void): void ;
    on(type: "PlaybackMediaMarkerReached", listener: (ev: Event) => void): void ;
    off(type: "PlaybackMediaMarkerReached", listener: (ev: Event) => void): void ;
    
    addListener(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    on(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    off(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "VolumeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VolumeChanged", listener: (ev: Event) => void): void ;
    on(type: "VolumeChanged", listener: (ev: Event) => void): void ;
    off(type: "VolumeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    on(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    off(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceChanged", listener: (ev: Event) => void): void ;
    on(type: "SourceChanged", listener: (ev: Event) => void): void ;
    off(type: "SourceChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoFrameAvailable", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoFrameAvailable", listener: (ev: Event) => void): void ;
    on(type: "VideoFrameAvailable", listener: (ev: Event) => void): void ;
    off(type: "VideoFrameAvailable", listener: (ev: Event) => void): void ;
    
    addListener(type: "SubtitleFrameChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SubtitleFrameChanged", listener: (ev: Event) => void): void ;
    on(type: "SubtitleFrameChanged", listener: (ev: Event) => void): void ;
    off(type: "SubtitleFrameChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaBreakManager {
    currentBreak: MediaBreak;
    playbackSession: MediaPlaybackSession;
    constructor();

    playBreak(value: MediaBreak): void;

    skipCurrentBreak(): void;

    addListener(type: "BreakEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "BreakEnded", listener: (ev: Event) => void): void ;
    on(type: "BreakEnded", listener: (ev: Event) => void): void ;
    off(type: "BreakEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "BreakSkipped", listener: (ev: Event) => void): void ;
    removeListener(type: "BreakSkipped", listener: (ev: Event) => void): void ;
    on(type: "BreakSkipped", listener: (ev: Event) => void): void ;
    off(type: "BreakSkipped", listener: (ev: Event) => void): void ;
    
    addListener(type: "BreakStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "BreakStarted", listener: (ev: Event) => void): void ;
    on(type: "BreakStarted", listener: (ev: Event) => void): void ;
    off(type: "BreakStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "BreaksSeekedOver", listener: (ev: Event) => void): void ;
    removeListener(type: "BreaksSeekedOver", listener: (ev: Event) => void): void ;
    on(type: "BreaksSeekedOver", listener: (ev: Event) => void): void ;
    off(type: "BreaksSeekedOver", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaPlaybackCommandManager {
    isEnabled: Boolean;
    autoRepeatModeBehavior: MediaPlaybackCommandManagerCommandBehavior;
    fastForwardBehavior: MediaPlaybackCommandManagerCommandBehavior;
    mediaPlayer: MediaPlayer;
    nextBehavior: MediaPlaybackCommandManagerCommandBehavior;
    pauseBehavior: MediaPlaybackCommandManagerCommandBehavior;
    playBehavior: MediaPlaybackCommandManagerCommandBehavior;
    positionBehavior: MediaPlaybackCommandManagerCommandBehavior;
    previousBehavior: MediaPlaybackCommandManagerCommandBehavior;
    rateBehavior: MediaPlaybackCommandManagerCommandBehavior;
    rewindBehavior: MediaPlaybackCommandManagerCommandBehavior;
    shuffleBehavior: MediaPlaybackCommandManagerCommandBehavior;
    constructor();

    addListener(type: "AutoRepeatModeReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "AutoRepeatModeReceived", listener: (ev: Event) => void): void ;
    on(type: "AutoRepeatModeReceived", listener: (ev: Event) => void): void ;
    off(type: "AutoRepeatModeReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "FastForwardReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "FastForwardReceived", listener: (ev: Event) => void): void ;
    on(type: "FastForwardReceived", listener: (ev: Event) => void): void ;
    off(type: "FastForwardReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "NextReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "NextReceived", listener: (ev: Event) => void): void ;
    on(type: "NextReceived", listener: (ev: Event) => void): void ;
    off(type: "NextReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PauseReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "PauseReceived", listener: (ev: Event) => void): void ;
    on(type: "PauseReceived", listener: (ev: Event) => void): void ;
    off(type: "PauseReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlayReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "PlayReceived", listener: (ev: Event) => void): void ;
    on(type: "PlayReceived", listener: (ev: Event) => void): void ;
    off(type: "PlayReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PositionReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "PositionReceived", listener: (ev: Event) => void): void ;
    on(type: "PositionReceived", listener: (ev: Event) => void): void ;
    off(type: "PositionReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviousReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviousReceived", listener: (ev: Event) => void): void ;
    on(type: "PreviousReceived", listener: (ev: Event) => void): void ;
    off(type: "PreviousReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "RateReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "RateReceived", listener: (ev: Event) => void): void ;
    on(type: "RateReceived", listener: (ev: Event) => void): void ;
    off(type: "RateReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "RewindReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "RewindReceived", listener: (ev: Event) => void): void ;
    on(type: "RewindReceived", listener: (ev: Event) => void): void ;
    off(type: "RewindReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "ShuffleReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ShuffleReceived", listener: (ev: Event) => void): void ;
    on(type: "ShuffleReceived", listener: (ev: Event) => void): void ;
    off(type: "ShuffleReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaPlaybackSession {
    stereoscopicVideoPackingMode: Number;
    position: Number;
    playbackRate: Number;
    normalizedSourceRect: Object;
    bufferingProgress: Number;
    canPause: Boolean;
    canSeek: Boolean;
    downloadProgress: Number;
    isProtected: Boolean;
    mediaPlayer: MediaPlayer;
    naturalDuration: Number;
    naturalVideoHeight: Number;
    naturalVideoWidth: Number;
    playbackState: MediaPlaybackState;
    isMirroring: Boolean;
    sphericalVideoProjection: MediaPlaybackSphericalVideoProjection;
    playbackRotation: Number;
    constructor();

    getSeekableRanges(): Object;

    isSupportedPlaybackRateRange(rate1: Number, rate2: Number): Boolean;

    getOutputDegradationPolicyState(): MediaPlaybackSessionOutputDegradationPolicyState;

    getBufferedRanges(): Object;

    getPlayedRanges(): Object;

    addListener(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    on(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    off(type: "BufferingEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "BufferingProgressChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BufferingProgressChanged", listener: (ev: Event) => void): void ;
    on(type: "BufferingProgressChanged", listener: (ev: Event) => void): void ;
    off(type: "BufferingProgressChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    on(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    off(type: "BufferingStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "DownloadProgressChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadProgressChanged", listener: (ev: Event) => void): void ;
    on(type: "DownloadProgressChanged", listener: (ev: Event) => void): void ;
    off(type: "DownloadProgressChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "NaturalDurationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NaturalDurationChanged", listener: (ev: Event) => void): void ;
    on(type: "NaturalDurationChanged", listener: (ev: Event) => void): void ;
    off(type: "NaturalDurationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "NaturalVideoSizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NaturalVideoSizeChanged", listener: (ev: Event) => void): void ;
    on(type: "NaturalVideoSizeChanged", listener: (ev: Event) => void): void ;
    off(type: "NaturalVideoSizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackRateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackRateChanged", listener: (ev: Event) => void): void ;
    on(type: "PlaybackRateChanged", listener: (ev: Event) => void): void ;
    off(type: "PlaybackRateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackStateChanged", listener: (ev: Event) => void): void ;
    on(type: "PlaybackStateChanged", listener: (ev: Event) => void): void ;
    off(type: "PlaybackStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    on(type: "PositionChanged", listener: (ev: Event) => void): void ;
    off(type: "PositionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    on(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    off(type: "SeekCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "BufferedRangesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BufferedRangesChanged", listener: (ev: Event) => void): void ;
    on(type: "BufferedRangesChanged", listener: (ev: Event) => void): void ;
    off(type: "BufferedRangesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlayedRangesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PlayedRangesChanged", listener: (ev: Event) => void): void ;
    on(type: "PlayedRangesChanged", listener: (ev: Event) => void): void ;
    off(type: "PlayedRangesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SeekableRangesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SeekableRangesChanged", listener: (ev: Event) => void): void ;
    on(type: "SeekableRangesChanged", listener: (ev: Event) => void): void ;
    off(type: "SeekableRangesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SupportedPlaybackRatesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SupportedPlaybackRatesChanged", listener: (ev: Event) => void): void ;
    on(type: "SupportedPlaybackRatesChanged", listener: (ev: Event) => void): void ;
    off(type: "SupportedPlaybackRatesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaPlayerSurface {
    compositionSurface: Object;
    compositor: Object;
    mediaPlayer: MediaPlayer;
    constructor();

    close(): void;
  }

  export class MediaPlaybackSphericalVideoProjection {
    viewOrientation: Quaternion;
    projectionMode: SphericalVideoProjectionMode;
    isEnabled: Boolean;
    horizontalFieldOfViewInDegrees: Number;
    frameFormat: Number;
    constructor();

  }

  export class MediaPlaybackSessionOutputDegradationPolicyState {
    videoConstrictionReason: MediaPlaybackSessionVideoConstrictionReason;
    constructor();

  }

  export class MediaPlaybackSessionBufferingStartedEventArgs {
    isPlaybackInterruption: Boolean;
    constructor();

  }

  export class MediaBreakSeekedOverEventArgs {
    newPosition: Number;
    oldPosition: Number;
    seekedOverBreaks: Object;
    constructor();

  }

  export class MediaBreakStartedEventArgs {
    mediaBreak: MediaBreak;
    constructor();

  }

  export class MediaBreakEndedEventArgs {
    mediaBreak: MediaBreak;
    constructor();

  }

  export class MediaBreakSkippedEventArgs {
    mediaBreak: MediaBreak;
    constructor();

  }

  export class BackgroundMediaPlayer {
    static current: MediaPlayer;
    constructor();

    static sendMessageToBackground(value: Object): void;


    static sendMessageToForeground(value: Object): void;


    static isMediaPlaying(): Boolean;


    static shutdown(): void;


    addListener(type: "MessageReceivedFromBackground", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceivedFromBackground", listener: (ev: Event) => void): void ;
    on(type: "MessageReceivedFromBackground", listener: (ev: Event) => void): void ;
    off(type: "MessageReceivedFromBackground", listener: (ev: Event) => void): void ;
    
    addListener(type: "MessageReceivedFromForeground", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceivedFromForeground", listener: (ev: Event) => void): void ;
    on(type: "MessageReceivedFromForeground", listener: (ev: Event) => void): void ;
    off(type: "MessageReceivedFromForeground", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaPlaybackCommandManagerPlayReceivedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerPauseReceivedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerNextReceivedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerPreviousReceivedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerFastForwardReceivedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerRewindReceivedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerShuffleReceivedEventArgs {
    handled: Boolean;
    isShuffleRequested: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerAutoRepeatModeReceivedEventArgs {
    handled: Boolean;
    autoRepeatMode: Number;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerPositionReceivedEventArgs {
    handled: Boolean;
    position: Number;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerRateReceivedEventArgs {
    handled: Boolean;
    playbackRate: Number;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerCommandBehavior {
    enablingRule: MediaCommandEnablingRule;
    commandManager: MediaPlaybackCommandManager;
    isEnabled: Boolean;
    constructor();

    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaPlaybackItem {
    audioTracks: MediaPlaybackAudioTrackList;
    source: Object;
    timedMetadataTracks: MediaPlaybackTimedMetadataTrackList;
    videoTracks: MediaPlaybackVideoTrackList;
    canSkip: Boolean;
    breakSchedule: MediaBreakSchedule;
    durationLimit: Number;
    startTime: Number;
    isDisabledInPlaybackList: Boolean;
    autoLoadedDisplayProperties: AutoLoadedDisplayPropertyKind;
    totalDownloadProgress: Number;
    constructor();
    constructor(source: Object, startTime: Number);
    constructor(source: Object, startTime: Number, durationLimit: Number);
    constructor(source: Object);

    static findFromMediaSource(source: Object): MediaPlaybackItem;


    getDisplayProperties(): MediaItemDisplayProperties;

    applyDisplayProperties(value: MediaItemDisplayProperties): void;

    addListener(type: "AudioTracksChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioTracksChanged", listener: (ev: Event) => void): void ;
    on(type: "AudioTracksChanged", listener: (ev: Event) => void): void ;
    off(type: "AudioTracksChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "TimedMetadataTracksChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TimedMetadataTracksChanged", listener: (ev: Event) => void): void ;
    on(type: "TimedMetadataTracksChanged", listener: (ev: Event) => void): void ;
    off(type: "TimedMetadataTracksChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoTracksChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoTracksChanged", listener: (ev: Event) => void): void ;
    on(type: "VideoTracksChanged", listener: (ev: Event) => void): void ;
    off(type: "VideoTracksChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IMediaPlaybackSource {
    constructor();

  }

  export class MediaPlaybackAudioTrackList {
    selectedIndex: Number;
    constructor();

    getAt(index: Number): Object;

    indexOf(value: Object, index: Number): Boolean;

    getMany();
    first(): Object;

    addListener(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    on(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    off(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaPlaybackVideoTrackList {
    selectedIndex: Number;
    constructor();

    getAt(index: Number): Object;

    indexOf(value: Object, index: Number): Boolean;

    getMany();
    first(): Object;

    addListener(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    on(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    off(type: "SelectedIndexChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaPlaybackTimedMetadataTrackList {
    constructor();

    getAt(index: Number): Object;

    indexOf(value: Object, index: Number): Boolean;

    getMany();
    first(): Object;

    getPresentationMode(index: Number): TimedMetadataTrackPresentationMode;

    setPresentationMode(index: Number, value: TimedMetadataTrackPresentationMode): void;

    addListener(type: "PresentationModeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PresentationModeChanged", listener: (ev: Event) => void): void ;
    on(type: "PresentationModeChanged", listener: (ev: Event) => void): void ;
    off(type: "PresentationModeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaBreakSchedule {
    prerollBreak: MediaBreak;
    postrollBreak: MediaBreak;
    midrollBreaks: Object;
    playbackItem: MediaPlaybackItem;
    constructor();

    insertMidrollBreak(mediaBreak: MediaBreak): void;

    removeMidrollBreak(mediaBreak: MediaBreak): void;

    addListener(type: "ScheduleChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ScheduleChanged", listener: (ev: Event) => void): void ;
    on(type: "ScheduleChanged", listener: (ev: Event) => void): void ;
    off(type: "ScheduleChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaItemDisplayProperties {
    type: Number;
    thumbnail: Object;
    musicProperties: Object;
    videoProperties: Object;
    constructor();

    clearAll(): void;

  }

  export class MediaBreak {
    canStart: Boolean;
    customProperties: Object;
    insertionMethod: MediaBreakInsertionMethod;
    playbackList: MediaPlaybackList;
    presentationPosition: Number;
    constructor();
    constructor(insertionMethod: MediaBreakInsertionMethod);
    constructor(insertionMethod: MediaBreakInsertionMethod, presentationPosition: Number);

  }

  export class MediaPlaybackList {
    shuffleEnabled: Boolean;
    autoRepeatEnabled: Boolean;
    currentItem: MediaPlaybackItem;
    currentItemIndex: Number;
    items: Object;
    startingItem: MediaPlaybackItem;
    maxPrefetchTime: Number;
    shuffledItems: Object;
    maxPlayedItemsToKeepOpen: Number;
    constructor();

    moveNext(): MediaPlaybackItem;

    movePrevious(): MediaPlaybackItem;

    moveTo(itemIndex: Number): MediaPlaybackItem;

    setShuffledItems(value: Object): void;

    addListener(type: "CurrentItemChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentItemChanged", listener: (ev: Event) => void): void ;
    on(type: "CurrentItemChanged", listener: (ev: Event) => void): void ;
    off(type: "CurrentItemChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ItemFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemFailed", listener: (ev: Event) => void): void ;
    on(type: "ItemFailed", listener: (ev: Event) => void): void ;
    off(type: "ItemFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ItemOpened", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemOpened", listener: (ev: Event) => void): void ;
    on(type: "ItemOpened", listener: (ev: Event) => void): void ;
    off(type: "ItemOpened", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IMediaEnginePlaybackSource {
    currentItem: MediaPlaybackItem;
    constructor();

    setPlaybackSource(source: IMediaPlaybackSource): void;

  }

  export class MediaPlaybackItemError {
    errorCode: MediaPlaybackItemErrorCode;
    extendedError: Number;
    constructor();

  }

  export class MediaPlaybackItemFailedEventArgs {
    error: MediaPlaybackItemError;
    item: MediaPlaybackItem;
    constructor();

  }

  export class CurrentMediaPlaybackItemChangedEventArgs {
    newItem: MediaPlaybackItem;
    oldItem: MediaPlaybackItem;
    reason: MediaPlaybackItemChangedReason;
    constructor();

  }

  export class MediaPlaybackItemOpenedEventArgs {
    item: MediaPlaybackItem;
    constructor();

  }

  export class TimedMetadataPresentationModeChangedEventArgs {
    newPresentationMode: TimedMetadataTrackPresentationMode;
    oldPresentationMode: TimedMetadataTrackPresentationMode;
    track: Object;
    constructor();

  }

