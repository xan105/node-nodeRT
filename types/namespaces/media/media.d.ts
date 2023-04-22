  export class BitmapBounds {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor();
  }

  export class MediaTimeRange {
    start: number;
    end: number;
    constructor();
  }

  export class MediaControlContract {
    constructor();
  }

  export enum AudioBufferAccessMode {
    read,
    readWrite,
    write,
  }

  export enum SoundLevel {
    muted,
    low,
    full,
  }

  export enum MediaPlaybackType {
    unknown,
    music,
    video,
    image,
  }

  export enum MediaPlaybackAutoRepeatMode {
    none,
    track,
    list,
  }

  export enum MediaPlaybackStatus {
    closed,
    changing,
    stopped,
    playing,
    paused,
  }

  export enum SystemMediaTransportControlsButton {
    play,
    pause,
    stop,
    record,
    fastForward,
    rewind,
    next,
    previous,
    channelUp,
    channelDown,
  }

  export enum SystemMediaTransportControlsProperty {
    soundLevel,
  }

  export enum MediaTimelineControllerState {
    paused,
    running,
    stalled,
    error,
  }

  export enum AudioProcessing {
    default,
    raw,
  }

  export class MediaProcessingTriggerDetails {
    arguments: Object;
    constructor();

  }

  export class IMediaFrame {
    duration: number;
    extendedProperties: Object;
    isDiscontinuous: boolean;
    isReadOnly: boolean;
    relativeTime: number;
    systemRelativeTime: number;
    type: string;
    constructor();

  }

  export class VideoFrame {
    systemRelativeTime: number;
    relativeTime: number;
    isDiscontinuous: boolean;
    duration: number;
    extendedProperties: Object;
    isReadOnly: boolean;
    type: string;
    direct3DSurface: Object;
    softwareBitmap: Object;
    constructor();
    constructor(format: number, width: number, height: number);
    constructor(format: number, width: number, height: number, alpha: number);

    static createAsDirect3D11SurfaceBacked(format: number, width: number, height: number): VideoFrame;
    static createAsDirect3D11SurfaceBacked(format: number, width: number, height: number, device: Object): VideoFrame;


    static createWithSoftwareBitmap(bitmap: Object): VideoFrame;


    static createWithDirect3D11Surface(surface: Object): VideoFrame;


    copyToAsync(frame: VideoFrame, callback: (error: Error) => void): void ;
    copyToAsync(frame: VideoFrame, sourceBounds: BitmapBounds, destinationBounds: BitmapBounds, callback: (error: Error) => void): void ;

    close(): void;
  }

  export class AudioBuffer {
    length: number;
    capacity: number;
    constructor();

    createReference(): Object;

    close(): void;
  }

  export class AudioFrame {
    systemRelativeTime: number;
    relativeTime: number;
    isDiscontinuous: boolean;
    duration: number;
    extendedProperties: Object;
    isReadOnly: boolean;
    type: string;
    constructor();
    constructor(capacity: number);

    lockBuffer(mode: AudioBufferAccessMode): AudioBuffer;

    close(): void;
  }

  export class IMediaMarker {
    mediaMarkerType: string;
    text: string;
    time: number;
    constructor();

  }

  export class IMediaMarkers {
    markers: Object;
    constructor();

  }

  export class MediaMarkerTypes {
    static bookmark: string;
    constructor();

  }

  export class SystemMediaTransportControlsTimelineProperties {
    startTime: number;
    position: number;
    minSeekTime: number;
    maxSeekTime: number;
    endTime: number;
    constructor();

  }

  export class MusicDisplayProperties {
    title: string;
    artist: string;
    albumArtist: string;
    trackNumber: number;
    albumTitle: string;
    genres: Object;
    albumTrackCount: number;
    constructor();

  }

  export class VideoDisplayProperties {
    title: string;
    subtitle: string;
    genres: Object;
    constructor();

  }

  export class ImageDisplayProperties {
    title: string;
    subtitle: string;
    constructor();

  }

  export class SystemMediaTransportControlsDisplayUpdater {
    type: MediaPlaybackType;
    thumbnail: Object;
    appMediaId: string;
    imageProperties: ImageDisplayProperties;
    musicProperties: MusicDisplayProperties;
    videoProperties: VideoDisplayProperties;
    constructor();

    copyFromFileAsync(type: MediaPlaybackType, source: Object, callback: (error: Error, result: boolean) => void): void ;

    clearAll(): void;

    update(): void;

  }

  export class SystemMediaTransportControlsButtonPressedEventArgs {
    button: SystemMediaTransportControlsButton;
    constructor();

  }

  export class SystemMediaTransportControlsPropertyChangedEventArgs {
    property: SystemMediaTransportControlsProperty;
    constructor();

  }

  export class PlaybackPositionChangeRequestedEventArgs {
    requestedPlaybackPosition: number;
    constructor();

  }

  export class PlaybackRateChangeRequestedEventArgs {
    requestedPlaybackRate: number;
    constructor();

  }

  export class ShuffleEnabledChangeRequestedEventArgs {
    requestedShuffleEnabled: boolean;
    constructor();

  }

  export class AutoRepeatModeChangeRequestedEventArgs {
    requestedAutoRepeatMode: MediaPlaybackAutoRepeatMode;
    constructor();

  }

  export class SystemMediaTransportControls {
    isPlayEnabled: boolean;
    isPauseEnabled: boolean;
    isNextEnabled: boolean;
    isPreviousEnabled: boolean;
    isEnabled: boolean;
    isChannelDownEnabled: boolean;
    isFastForwardEnabled: boolean;
    isChannelUpEnabled: boolean;
    playbackStatus: MediaPlaybackStatus;
    isStopEnabled: boolean;
    isRewindEnabled: boolean;
    isRecordEnabled: boolean;
    displayUpdater: SystemMediaTransportControlsDisplayUpdater;
    soundLevel: SoundLevel;
    shuffleEnabled: boolean;
    playbackRate: number;
    autoRepeatMode: MediaPlaybackAutoRepeatMode;
    constructor();

    static getForCurrentView(): SystemMediaTransportControls;


    updateTimelineProperties(timelineProperties: SystemMediaTransportControlsTimelineProperties): void;

    addListener(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    on(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    off(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PropertyChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PropertyChanged", listener: (ev: Event) => void): void ;
    on(type: "PropertyChanged", listener: (ev: Event) => void): void ;
    off(type: "PropertyChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AutoRepeatModeChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AutoRepeatModeChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "AutoRepeatModeChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "AutoRepeatModeChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackPositionChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackPositionChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "PlaybackPositionChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "PlaybackPositionChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ShuffleEnabledChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ShuffleEnabledChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "ShuffleEnabledChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "ShuffleEnabledChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaTimelineController {
    position: number;
    clockRate: number;
    state: MediaTimelineControllerState;
    isLoopingEnabled: boolean;
    duration: number;
    constructor();

    start(): void;

    resume(): void;

    pause(): void;

    addListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    on(type: "PositionChanged", listener: (ev: Event) => void): void ;
    off(type: "PositionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Ended", listener: (ev: Event) => void): void ;
    removeListener(type: "Ended", listener: (ev: Event) => void): void ;
    on(type: "Ended", listener: (ev: Event) => void): void ;
    off(type: "Ended", listener: (ev: Event) => void): void ;
    
    addListener(type: "Failed", listener: (ev: Event) => void): void ;
    removeListener(type: "Failed", listener: (ev: Event) => void): void ;
    on(type: "Failed", listener: (ev: Event) => void): void ;
    off(type: "Failed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaTimelineControllerFailedEventArgs {
    extendedError: number;
    constructor();

  }

  export class IMediaExtension {
    constructor();

    setProperties(configuration: Object): void;

  }

  export class MediaExtensionManager {
    constructor();

    registerSchemeHandler(activatableClassId: string, scheme: string): void;
    registerSchemeHandler(activatableClassId: string, scheme: string, configuration: Object): void;

    registerByteStreamHandler(activatableClassId: string, fileExtension: string, mimeType: string): void;
    registerByteStreamHandler(activatableClassId: string, fileExtension: string, mimeType: string, configuration: Object): void;

    registerAudioDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
    registerAudioDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Object): void;

    registerAudioEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
    registerAudioEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Object): void;

    registerVideoDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
    registerVideoDecoder(activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Object): void;

    registerVideoEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string): void;
    registerVideoEncoder(activatableClassId: string, inputSubtype: string, outputSubtype: string, configuration: Object): void;

    registerMediaExtensionForAppService(extension: IMediaExtension, connection: Object): void;

  }

  export class VideoEffects {
    static videoStabilization: string;
    constructor();

  }

  export class MediaControl {
    static trackName: string;
    static isPlaying: boolean;
    static artistName: string;
    static albumArt: Object;
    static soundLevel: SoundLevel;
    constructor();

    addListener(type: "ChannelDownPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "ChannelDownPressed", listener: (ev: Event) => void): void ;
    on(type: "ChannelDownPressed", listener: (ev: Event) => void): void ;
    off(type: "ChannelDownPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ChannelUpPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "ChannelUpPressed", listener: (ev: Event) => void): void ;
    on(type: "ChannelUpPressed", listener: (ev: Event) => void): void ;
    off(type: "ChannelUpPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "FastForwardPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "FastForwardPressed", listener: (ev: Event) => void): void ;
    on(type: "FastForwardPressed", listener: (ev: Event) => void): void ;
    off(type: "FastForwardPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "NextTrackPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "NextTrackPressed", listener: (ev: Event) => void): void ;
    on(type: "NextTrackPressed", listener: (ev: Event) => void): void ;
    off(type: "NextTrackPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PausePressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PausePressed", listener: (ev: Event) => void): void ;
    on(type: "PausePressed", listener: (ev: Event) => void): void ;
    off(type: "PausePressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlayPauseTogglePressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PlayPauseTogglePressed", listener: (ev: Event) => void): void ;
    on(type: "PlayPauseTogglePressed", listener: (ev: Event) => void): void ;
    off(type: "PlayPauseTogglePressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlayPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PlayPressed", listener: (ev: Event) => void): void ;
    on(type: "PlayPressed", listener: (ev: Event) => void): void ;
    off(type: "PlayPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviousTrackPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviousTrackPressed", listener: (ev: Event) => void): void ;
    on(type: "PreviousTrackPressed", listener: (ev: Event) => void): void ;
    off(type: "PreviousTrackPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "RecordPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "RecordPressed", listener: (ev: Event) => void): void ;
    on(type: "RecordPressed", listener: (ev: Event) => void): void ;
    off(type: "RecordPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "RewindPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "RewindPressed", listener: (ev: Event) => void): void ;
    on(type: "RewindPressed", listener: (ev: Event) => void): void ;
    off(type: "RewindPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    on(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    off(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StopPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "StopPressed", listener: (ev: Event) => void): void ;
    on(type: "StopPressed", listener: (ev: Event) => void): void ;
    off(type: "StopPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export * as appbroadcasting from "./media.appbroadcasting.js";
export * as apprecording from "./media.apprecording.js";
export * as audio from "./media.audio.js";
export * as capture from "./media.capture.js";
export * as casting from "./media.casting.js";
export * as closedcaptioning from "./media.closedcaptioning.js";
export * as contentrestrictions from "./media.contentrestrictions.js";
export * as core from "./media.core.js";
export * as devices from "./media.devices.js";
export * as dialprotocol from "./media.dialprotocol.js";
export * as editing from "./media.editing.js";
export * as effects from "./media.effects.js";
export * as faceanalysis from "./media.faceanalysis.js";
export * as _import from "./media.import.js";
export * as mediaproperties from "./media.mediaproperties.js";
export * as ocr from "./media.ocr.js";
export * as playback from "./media.playback.js";
export * as playlists from "./media.playlists.js";
export * as playto from "./media.playto.js";
export * as protection from "./media.protection.js";
export * as render from "./media.render.js";
export * as speechrecognition from "./media.speechrecognition.js";
export * as speechsynthesis from "./media.speechsynthesis.js";
export * as streaming from "./media.streaming.js";
export * as transcoding from "./media.transcoding.js";