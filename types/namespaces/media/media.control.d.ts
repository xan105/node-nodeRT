  export enum GlobalSystemMediaTransportControlsSessionPlaybackStatus {
    closed,
    opened,
    changing,
    stopped,
    playing,
    paused,
  }

  export class CurrentSessionChangedEventArgs {
    constructor();

  }

  export class GlobalSystemMediaTransportControlsSession {
    sourceAppUserModelId: String;
    constructor();

    tryGetMediaPropertiesAsync(callback: (error: Error, result: GlobalSystemMediaTransportControlsSessionMediaProperties) => void): void ;

    tryPlayAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryPauseAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryStopAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryRecordAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryFastForwardAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryRewindAsync(callback: (error: Error, result: Boolean) => void): void ;

    trySkipNextAsync(callback: (error: Error, result: Boolean) => void): void ;

    trySkipPreviousAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryChangeChannelUpAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryChangeChannelDownAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryTogglePlayPauseAsync(callback: (error: Error, result: Boolean) => void): void ;

    tryChangeAutoRepeatModeAsync(requestedAutoRepeatMode: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryChangePlaybackRateAsync(requestedPlaybackRate: Number, callback: (error: Error, result: Boolean) => void): void ;

    tryChangeShuffleActiveAsync(requestedShuffleState: Boolean, callback: (error: Error, result: Boolean) => void): void ;

    tryChangePlaybackPositionAsync(requestedPlaybackPosition: Number, callback: (error: Error, result: Boolean) => void): void ;

    getTimelineProperties(): GlobalSystemMediaTransportControlsSessionTimelineProperties;

    getPlaybackInfo(): GlobalSystemMediaTransportControlsSessionPlaybackInfo;

    addListener(type: "MediaPropertiesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MediaPropertiesChanged", listener: (ev: Event) => void): void ;
    on(type: "MediaPropertiesChanged", listener: (ev: Event) => void): void ;
    off(type: "MediaPropertiesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackInfoChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackInfoChanged", listener: (ev: Event) => void): void ;
    on(type: "PlaybackInfoChanged", listener: (ev: Event) => void): void ;
    off(type: "PlaybackInfoChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "TimelinePropertiesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TimelinePropertiesChanged", listener: (ev: Event) => void): void ;
    on(type: "TimelinePropertiesChanged", listener: (ev: Event) => void): void ;
    off(type: "TimelinePropertiesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GlobalSystemMediaTransportControlsSessionManager {
    constructor();

    static requestAsync(callback: (error: Error, result: GlobalSystemMediaTransportControlsSessionManager) => void): void ;


    getCurrentSession(): GlobalSystemMediaTransportControlsSession;

    getSessions(): Object;

    addListener(type: "CurrentSessionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentSessionChanged", listener: (ev: Event) => void): void ;
    on(type: "CurrentSessionChanged", listener: (ev: Event) => void): void ;
    off(type: "CurrentSessionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SessionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SessionsChanged", listener: (ev: Event) => void): void ;
    on(type: "SessionsChanged", listener: (ev: Event) => void): void ;
    off(type: "SessionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GlobalSystemMediaTransportControlsSessionMediaProperties {
    albumArtist: String;
    albumTitle: String;
    albumTrackCount: Number;
    artist: String;
    genres: Object;
    playbackType: Number;
    subtitle: String;
    thumbnail: Object;
    title: String;
    trackNumber: Number;
    constructor();

  }

  export class GlobalSystemMediaTransportControlsSessionPlaybackControls {
    isChannelDownEnabled: Boolean;
    isChannelUpEnabled: Boolean;
    isFastForwardEnabled: Boolean;
    isNextEnabled: Boolean;
    isPauseEnabled: Boolean;
    isPlayEnabled: Boolean;
    isPlayPauseToggleEnabled: Boolean;
    isPlaybackPositionEnabled: Boolean;
    isPlaybackRateEnabled: Boolean;
    isPreviousEnabled: Boolean;
    isRecordEnabled: Boolean;
    isRepeatEnabled: Boolean;
    isRewindEnabled: Boolean;
    isShuffleEnabled: Boolean;
    isStopEnabled: Boolean;
    constructor();

  }

  export class GlobalSystemMediaTransportControlsSessionPlaybackInfo {
    autoRepeatMode: Number;
    controls: GlobalSystemMediaTransportControlsSessionPlaybackControls;
    isShuffleActive: Boolean;
    playbackRate: Number;
    playbackStatus: GlobalSystemMediaTransportControlsSessionPlaybackStatus;
    playbackType: Number;
    constructor();

  }

  export class GlobalSystemMediaTransportControlsSessionTimelineProperties {
    endTime: Number;
    lastUpdatedTime: Date;
    maxSeekTime: Number;
    minSeekTime: Number;
    position: Number;
    startTime: Number;
    constructor();

  }

  export class MediaPropertiesChangedEventArgs {
    constructor();

  }

  export class PlaybackInfoChangedEventArgs {
    constructor();

  }

  export class SessionsChangedEventArgs {
    constructor();

  }

  export class TimelinePropertiesChangedEventArgs {
    constructor();

  }

