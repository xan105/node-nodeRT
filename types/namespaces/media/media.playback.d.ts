  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class MediaTimeRange {
    start: number;
    end: number;
    constructor();
  }

  export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
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
    mediaMarkerType: string;
    text: string;
    time: number;
    constructor();
    constructor(value: number);
    constructor(value: number, mediaMarketType: string, text: string);

  }

  export class PlaybackMediaMarkerSequence {
    size: number;
    constructor();

    insert(value: PlaybackMediaMarker): void;

    clear(): void;

    first(): Object;

  }

  export class MediaPlayerFailedEventArgs {
    error: MediaPlayerError;
    errorMessage: string;
    extendedErrorCode: number;
    constructor();

  }

  export class MediaPlayerRateChangedEventArgs {
    newRate: number;
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
    volume: number;
    position: number;
    playbackRate: number;
    isLoopingEnabled: boolean;
    isMuted: boolean;
    autoPlay: boolean;
    currentState: MediaPlayerState;
    naturalDuration: number;
    playbackMediaMarkers: PlaybackMediaMarkerSequence;
    isProtected: boolean;
    bufferingProgress: number;
    canPause: boolean;
    canSeek: boolean;
    audioDeviceType: MediaPlayerAudioDeviceType;
    audioCategory: MediaPlayerAudioCategory;
    systemMediaTransportControls: Object;
    timelineControllerPositionOffset: number;
    timelineController: Object;
    stereoscopicVideoRenderMode: StereoscopicVideoRenderMode;
    realTimePlayback: boolean;
    audioDevice: Object;
    audioBalance: number;
    commandManager: MediaPlaybackCommandManager;
    breakManager: MediaBreakManager;
    playbackSession: MediaPlaybackSession;
    isVideoFrameServerEnabled: boolean;
    audioStateMonitor: Object;
    protectionManager: Object;
    source: IMediaPlaybackSource;
    constructor();

    addAudioEffect(activatableClassId: string, effectOptional: boolean, configuration: Object): void;

    removeAllEffects(): void;

    close(): void;
    stepForwardOneFrame(): void;

    stepBackwardOneFrame(): void;

    getAsCastingSource(): Object;

    setSurfaceSize(size: Object): void;

    getSurface(compositor: Object): MediaPlayerSurface;

    addVideoEffect(activatableClassId: string, effectOptional: boolean, effectConfiguration: Object): void;

    copyFrameToVideoSurface(destination: Object): void;
    copyFrameToVideoSurface(destination: Object, targetRectangle: Object): void;

    copyFrameToStereoscopicVideoSurfaces(destinationLeftEye: Object, destinationRightEye: Object): void;

    renderSubtitlesToSurface(destination: Object): boolean;
    renderSubtitlesToSurface(destination: Object, targetRectangle: Object): boolean;

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
    isEnabled: boolean;
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
    stereoscopicVideoPackingMode: number;
    position: number;
    playbackRate: number;
    normalizedSourceRect: Object;
    bufferingProgress: number;
    canPause: boolean;
    canSeek: boolean;
    downloadProgress: number;
    isProtected: boolean;
    mediaPlayer: MediaPlayer;
    naturalDuration: number;
    naturalVideoHeight: number;
    naturalVideoWidth: number;
    playbackState: MediaPlaybackState;
    isMirroring: boolean;
    sphericalVideoProjection: MediaPlaybackSphericalVideoProjection;
    playbackRotation: number;
    constructor();

    getSeekableRanges(): Object;

    isSupportedPlaybackRateRange(rate1: number, rate2: number): boolean;

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
    isEnabled: boolean;
    horizontalFieldOfViewInDegrees: number;
    frameFormat: number;
    constructor();

  }

  export class MediaPlaybackSessionOutputDegradationPolicyState {
    videoConstrictionReason: MediaPlaybackSessionVideoConstrictionReason;
    constructor();

  }

  export class MediaPlaybackSessionBufferingStartedEventArgs {
    isPlaybackInterruption: boolean;
    constructor();

  }

  export class MediaBreakSeekedOverEventArgs {
    newPosition: number;
    oldPosition: number;
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


    static isMediaPlaying(): boolean;


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
    handled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerPauseReceivedEventArgs {
    handled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerNextReceivedEventArgs {
    handled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerPreviousReceivedEventArgs {
    handled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerFastForwardReceivedEventArgs {
    handled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerRewindReceivedEventArgs {
    handled: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerShuffleReceivedEventArgs {
    handled: boolean;
    isShuffleRequested: boolean;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerAutoRepeatModeReceivedEventArgs {
    handled: boolean;
    autoRepeatMode: number;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerPositionReceivedEventArgs {
    handled: boolean;
    position: number;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerRateReceivedEventArgs {
    handled: boolean;
    playbackRate: number;
    constructor();

    getDeferral(): Object;

  }

  export class MediaPlaybackCommandManagerCommandBehavior {
    enablingRule: MediaCommandEnablingRule;
    commandManager: MediaPlaybackCommandManager;
    isEnabled: boolean;
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
    canSkip: boolean;
    breakSchedule: MediaBreakSchedule;
    durationLimit: number;
    startTime: number;
    isDisabledInPlaybackList: boolean;
    autoLoadedDisplayProperties: AutoLoadedDisplayPropertyKind;
    totalDownloadProgress: number;
    constructor();
    constructor(source: Object, startTime: number);
    constructor(source: Object, startTime: number, durationLimit: number);
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
    selectedIndex: number;
    constructor();

    getAt(index: number): Object;

    indexOf(value: Object, index: number): boolean;

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
    selectedIndex: number;
    constructor();

    getAt(index: number): Object;

    indexOf(value: Object, index: number): boolean;

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

    getAt(index: number): Object;

    indexOf(value: Object, index: number): boolean;

    getMany();
    first(): Object;

    getPresentationMode(index: number): TimedMetadataTrackPresentationMode;

    setPresentationMode(index: number, value: TimedMetadataTrackPresentationMode): void;

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
    type: number;
    thumbnail: Object;
    musicProperties: Object;
    videoProperties: Object;
    constructor();

    clearAll(): void;

  }

  export class MediaBreak {
    canStart: boolean;
    customProperties: Object;
    insertionMethod: MediaBreakInsertionMethod;
    playbackList: MediaPlaybackList;
    presentationPosition: number;
    constructor();
    constructor(insertionMethod: MediaBreakInsertionMethod);
    constructor(insertionMethod: MediaBreakInsertionMethod, presentationPosition: number);

  }

  export class MediaPlaybackList {
    shuffleEnabled: boolean;
    autoRepeatEnabled: boolean;
    currentItem: MediaPlaybackItem;
    currentItemIndex: number;
    items: Object;
    startingItem: MediaPlaybackItem;
    maxPrefetchTime: number;
    shuffledItems: Object;
    maxPlayedItemsToKeepOpen: number;
    constructor();

    moveNext(): MediaPlaybackItem;

    movePrevious(): MediaPlaybackItem;

    moveTo(itemIndex: number): MediaPlaybackItem;

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
    extendedError: number;
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

