  export class BitmapBounds {
    x: Number;
    y: Number;
    width: Number;
    height: Number;
    constructor();
  }

  export class MediaControlContract {
    constructor();
  }

  export class MediaTimeRange {
    start: Number;
    end: Number;
    constructor();
  }

  export enum AudioBufferAccessMode {
    read,
    readWrite,
    write,
  }

  export enum AudioProcessing {
    default,
    raw,
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

  export enum MediaPlaybackType {
    unknown,
    music,
    video,
    image,
  }

  export enum MediaTimelineControllerState {
    paused,
    running,
    stalled,
    error,
  }

  export enum SoundLevel {
    muted,
    low,
    full,
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

  export class AudioBuffer {
    length: Number;
    capacity: Number;
    constructor();

    createReference(): Object;

    close(): void;
  }

  export class AudioFrame {
    systemRelativeTime: Number;
    relativeTime: Number;
    isDiscontinuous: Boolean;
    duration: Number;
    extendedProperties: Object;
    isReadOnly: Boolean;
    type: String;
    constructor();
    constructor(capacity: Number);

    lockBuffer(mode: AudioBufferAccessMode): AudioBuffer;

    close(): void;
  }

  export class AutoRepeatModeChangeRequestedEventArgs {
    requestedAutoRepeatMode: MediaPlaybackAutoRepeatMode;
    constructor();

  }

  export class IMediaExtension {
    constructor();

    setProperties(configuration: Object): void;

  }

  export class IMediaFrame {
    duration: Number;
    extendedProperties: Object;
    isDiscontinuous: Boolean;
    isReadOnly: Boolean;
    relativeTime: Number;
    systemRelativeTime: Number;
    type: String;
    constructor();

  }

  export class IMediaMarker {
    mediaMarkerType: String;
    text: String;
    time: Number;
    constructor();

  }

  export class IMediaMarkers {
    markers: Object;
    constructor();

  }

  export class ImageDisplayProperties {
    title: String;
    subtitle: String;
    constructor();

  }

  export class MediaControl {
    static trackName: String;
    static isPlaying: Boolean;
    static artistName: String;
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

  export class MediaExtensionManager {
    constructor();

    registerSchemeHandler(activatableClassId: String, scheme: String): void;
    registerSchemeHandler(activatableClassId: String, scheme: String, configuration: Object): void;

    registerByteStreamHandler(activatableClassId: String, fileExtension: String, mimeType: String): void;
    registerByteStreamHandler(activatableClassId: String, fileExtension: String, mimeType: String, configuration: Object): void;

    registerAudioDecoder(activatableClassId: String, inputSubtype: String, outputSubtype: String): void;
    registerAudioDecoder(activatableClassId: String, inputSubtype: String, outputSubtype: String, configuration: Object): void;

    registerAudioEncoder(activatableClassId: String, inputSubtype: String, outputSubtype: String): void;
    registerAudioEncoder(activatableClassId: String, inputSubtype: String, outputSubtype: String, configuration: Object): void;

    registerVideoDecoder(activatableClassId: String, inputSubtype: String, outputSubtype: String): void;
    registerVideoDecoder(activatableClassId: String, inputSubtype: String, outputSubtype: String, configuration: Object): void;

    registerVideoEncoder(activatableClassId: String, inputSubtype: String, outputSubtype: String): void;
    registerVideoEncoder(activatableClassId: String, inputSubtype: String, outputSubtype: String, configuration: Object): void;

    registerMediaExtensionForAppService(extension: IMediaExtension, connection: Object): void;

  }

  export class MediaMarkerTypes {
    static bookmark: String;
    constructor();

  }

  export class MediaProcessingTriggerDetails {
    arguments: Object;
    constructor();

  }

  export class MediaTimelineController {
    position: Number;
    clockRate: Number;
    state: MediaTimelineControllerState;
    isLoopingEnabled: Boolean;
    duration: Number;
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
    extendedError: Number;
    constructor();

  }

  export class MusicDisplayProperties {
    title: String;
    artist: String;
    albumArtist: String;
    trackNumber: Number;
    albumTitle: String;
    genres: Object;
    albumTrackCount: Number;
    constructor();

  }

  export class PlaybackPositionChangeRequestedEventArgs {
    requestedPlaybackPosition: Number;
    constructor();

  }

  export class PlaybackRateChangeRequestedEventArgs {
    requestedPlaybackRate: Number;
    constructor();

  }

  export class ShuffleEnabledChangeRequestedEventArgs {
    requestedShuffleEnabled: Boolean;
    constructor();

  }

  export class SystemMediaTransportControls {
    isPlayEnabled: Boolean;
    isPauseEnabled: Boolean;
    isNextEnabled: Boolean;
    isPreviousEnabled: Boolean;
    isEnabled: Boolean;
    isChannelDownEnabled: Boolean;
    isFastForwardEnabled: Boolean;
    isChannelUpEnabled: Boolean;
    playbackStatus: MediaPlaybackStatus;
    isStopEnabled: Boolean;
    isRewindEnabled: Boolean;
    isRecordEnabled: Boolean;
    displayUpdater: SystemMediaTransportControlsDisplayUpdater;
    soundLevel: SoundLevel;
    shuffleEnabled: Boolean;
    playbackRate: Number;
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

  export class SystemMediaTransportControlsButtonPressedEventArgs {
    button: SystemMediaTransportControlsButton;
    constructor();

  }

  export class SystemMediaTransportControlsDisplayUpdater {
    type: MediaPlaybackType;
    thumbnail: Object;
    appMediaId: String;
    imageProperties: ImageDisplayProperties;
    musicProperties: MusicDisplayProperties;
    videoProperties: VideoDisplayProperties;
    constructor();

    copyFromFileAsync(type: MediaPlaybackType, source: Object, callback: (error: Error, result: Boolean) => void): void ;

    clearAll(): void;

    update(): void;

  }

  export class SystemMediaTransportControlsPropertyChangedEventArgs {
    property: SystemMediaTransportControlsProperty;
    constructor();

  }

  export class SystemMediaTransportControlsTimelineProperties {
    startTime: Number;
    position: Number;
    minSeekTime: Number;
    maxSeekTime: Number;
    endTime: Number;
    constructor();

  }

  export class VideoDisplayProperties {
    title: String;
    subtitle: String;
    genres: Object;
    constructor();

  }

  export class VideoEffects {
    static videoStabilization: String;
    constructor();

  }

  export class VideoFrame {
    systemRelativeTime: Number;
    relativeTime: Number;
    isDiscontinuous: Boolean;
    duration: Number;
    extendedProperties: Object;
    isReadOnly: Boolean;
    type: String;
    direct3DSurface: Object;
    softwareBitmap: Object;
    constructor();
    constructor(format: Number, width: Number, height: Number);
    constructor(format: Number, width: Number, height: Number, alpha: Number);

    static createAsDirect3D11SurfaceBacked(format: Number, width: Number, height: Number): VideoFrame;
    static createAsDirect3D11SurfaceBacked(format: Number, width: Number, height: Number, device: Object): VideoFrame;


    static createWithSoftwareBitmap(bitmap: Object): VideoFrame;


    static createWithDirect3D11Surface(surface: Object): VideoFrame;


    copyToAsync(frame: VideoFrame, callback: (error: Error) => void): void ;
    copyToAsync(frame: VideoFrame, sourceBounds: BitmapBounds, destinationBounds: BitmapBounds, callback: (error: Error) => void): void ;

    close(): void;
  }

export const AudioBufferAccessMode: any;
export const AudioProcessing: any;
export const MediaPlaybackAutoRepeatMode: any;
export const MediaPlaybackStatus: any;
export const MediaPlaybackType: any;
export const MediaTimelineControllerState: any;
export const SoundLevel: any;
export const SystemMediaTransportControlsButton: any;
export const SystemMediaTransportControlsProperty: any;
export const AudioBuffer: any;
export const AudioFrame: any;
export const AutoRepeatModeChangeRequestedEventArgs: any;
export const IMediaExtension: any;
export const IMediaFrame: any;
export const IMediaMarker: any;
export const IMediaMarkers: any;
export const ImageDisplayProperties: any;
export const MediaControl: any;
export const MediaExtensionManager: any;
export const MediaMarkerTypes: any;
export const MediaProcessingTriggerDetails: any;
export const MediaTimelineController: any;
export const MediaTimelineControllerFailedEventArgs: any;
export const MusicDisplayProperties: any;
export const PlaybackPositionChangeRequestedEventArgs: any;
export const PlaybackRateChangeRequestedEventArgs: any;
export const ShuffleEnabledChangeRequestedEventArgs: any;
export const SystemMediaTransportControls: any;
export const SystemMediaTransportControlsButtonPressedEventArgs: any;
export const SystemMediaTransportControlsDisplayUpdater: any;
export const SystemMediaTransportControlsPropertyChangedEventArgs: any;
export const SystemMediaTransportControlsTimelineProperties: any;
export const VideoDisplayProperties: any;
export const VideoEffects: any;
export const VideoFrame: any;
export * as appbroadcasting from "./media.appbroadcasting.js";
export * as apprecording from "./media.apprecording.js";
export * as audio from "./media.audio.js";
export * as capture from "./media.capture.js";
export * as casting from "./media.casting.js";
export * as closedcaptioning from "./media.closedcaptioning.js";
export * as contentrestrictions from "./media.contentrestrictions.js";
export * as control from "./media.control.js";
export * as core from "./media.core.js";
export * as devices from "./media.devices.js";
export * as dialprotocol from "./media.dialprotocol.js";
export * as editing from "./media.editing.js";
export * as effects from "./media.effects.js";
export * as faceanalysis from "./media.faceanalysis.js";
export * as _import from "./media.import.js";
export { _import as import };
export * as mediaproperties from "./media.mediaproperties.js";
export * as miracast from "./media.miracast.js";
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
