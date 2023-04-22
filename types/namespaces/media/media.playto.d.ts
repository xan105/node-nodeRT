  export enum PlayToConnectionState {
    disconnected,
    connected,
    rendering,
  }

  export enum PlayToConnectionError {
    none,
    deviceNotResponding,
    deviceError,
    deviceLocked,
    protectedPlaybackFailed,
  }

  export class SourceChangeRequestedEventArgs {
    album: string;
    author: string;
    date: Date;
    description: string;
    genre: string;
    properties: Object;
    rating: number;
    stream: Object;
    thumbnail: Object;
    title: string;
    constructor();

  }

  export class PlaybackRateChangeRequestedEventArgs {
    rate: number;
    constructor();

  }

  export class CurrentTimeChangeRequestedEventArgs {
    time: number;
    constructor();

  }

  export class MuteChangeRequestedEventArgs {
    mute: boolean;
    constructor();

  }

  export class VolumeChangeRequestedEventArgs {
    volume: number;
    constructor();

  }

  export class PlayToReceiver {
    supportsVideo: boolean;
    supportsImage: boolean;
    supportsAudio: boolean;
    friendlyName: string;
    properties: Object;
    constructor();

    startAsync(callback: (error: Error) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    notifyVolumeChange(volume: number, mute: boolean): void;

    notifyRateChange(rate: number): void;

    notifyLoadedMetadata(): void;

    notifyTimeUpdate(currentTime: number): void;

    notifyDurationChange(duration: number): void;

    notifySeeking(): void;

    notifySeeked(): void;

    notifyPaused(): void;

    notifyPlaying(): void;

    notifyEnded(): void;

    notifyError(): void;

    notifyStopped(): void;

    addListener(type: "CurrentTimeChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentTimeChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "CurrentTimeChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "CurrentTimeChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "MuteChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "MuteChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "MuteChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "MuteChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PauseRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PauseRequested", listener: (ev: Event) => void): void ;
    on(type: "PauseRequested", listener: (ev: Event) => void): void ;
    off(type: "PauseRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PlayRequested", listener: (ev: Event) => void): void ;
    on(type: "PlayRequested", listener: (ev: Event) => void): void ;
    off(type: "PlayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "PlaybackRateChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "SourceChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "SourceChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "StopRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "StopRequested", listener: (ev: Event) => void): void ;
    on(type: "StopRequested", listener: (ev: Event) => void): void ;
    off(type: "StopRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "TimeUpdateRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "TimeUpdateRequested", listener: (ev: Event) => void): void ;
    on(type: "TimeUpdateRequested", listener: (ev: Event) => void): void ;
    off(type: "TimeUpdateRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "VolumeChangeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "VolumeChangeRequested", listener: (ev: Event) => void): void ;
    on(type: "VolumeChangeRequested", listener: (ev: Event) => void): void ;
    off(type: "VolumeChangeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PlayToConnection {
    state: PlayToConnectionState;
    constructor();

    addListener(type: "Error", listener: (ev: Event) => void): void ;
    removeListener(type: "Error", listener: (ev: Event) => void): void ;
    on(type: "Error", listener: (ev: Event) => void): void ;
    off(type: "Error", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Transferred", listener: (ev: Event) => void): void ;
    removeListener(type: "Transferred", listener: (ev: Event) => void): void ;
    on(type: "Transferred", listener: (ev: Event) => void): void ;
    off(type: "Transferred", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PlayToSource {
    next: PlayToSource;
    connection: PlayToConnection;
    preferredSourceUri: Object;
    constructor();

    playNext(): void;

  }

  export class PlayToConnectionStateChangedEventArgs {
    currentState: PlayToConnectionState;
    previousState: PlayToConnectionState;
    constructor();

  }

  export class PlayToConnectionTransferredEventArgs {
    currentSource: PlayToSource;
    previousSource: PlayToSource;
    constructor();

  }

  export class PlayToConnectionErrorEventArgs {
    code: PlayToConnectionError;
    message: string;
    constructor();

  }

  export class PlayToSourceSelectedEventArgs {
    friendlyName: string;
    icon: Object;
    supportsAudio: boolean;
    supportsImage: boolean;
    supportsVideo: boolean;
    constructor();

  }

  export class PlayToSourceDeferral {
    constructor();

    complete(): void;

  }

  export class PlayToSourceRequest {
    deadline: Date;
    constructor();

    displayErrorString(errorString: string): void;

    getDeferral(): PlayToSourceDeferral;

    setSource(value: PlayToSource): void;

  }

  export class PlayToSourceRequestedEventArgs {
    sourceRequest: PlayToSourceRequest;
    constructor();

  }

  export class PlayToManager {
    defaultSourceSelection: boolean;
    constructor();

    static getForCurrentView(): PlayToManager;


    static showPlayToUI(): void;


    addListener(type: "SourceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceRequested", listener: (ev: Event) => void): void ;
    on(type: "SourceRequested", listener: (ev: Event) => void): void ;
    off(type: "SourceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceSelected", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceSelected", listener: (ev: Event) => void): void ;
    on(type: "SourceSelected", listener: (ev: Event) => void): void ;
    off(type: "SourceSelected", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

