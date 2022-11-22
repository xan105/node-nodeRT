  export class Rect {
    constructor();
  }

  export enum CastingPlaybackTypes {
    none,
    audio,
    video,
    picture,
  }

  export enum CastingConnectionErrorStatus {
    succeeded,
    deviceDidNotRespond,
    deviceError,
    deviceLocked,
    protectedPlaybackFailed,
    invalidCastingSource,
    unknown,
  }

  export enum CastingConnectionState {
    disconnected,
    connected,
    rendering,
    disconnecting,
    connecting,
  }

  export class CastingSource {
    preferredSourceUri: Object;
    constructor();

  }

  export class CastingConnectionErrorOccurredEventArgs {
    errorStatus: CastingConnectionErrorStatus;
    message: String;
    constructor();

  }

  export class CastingDevice {
    friendlyName: String;
    icon: Object;
    id: String;
    constructor();

    static getDeviceSelectorFromCastingSourceAsync(castingSource: CastingSource, callback: (error: Error, result: String) => void): void ;


    static fromIdAsync(value: String, callback: (error: Error, result: CastingDevice) => void): void ;


    static deviceInfoSupportsCastingAsync(device: Object, callback: (error: Error, result: Boolean) => void): void ;


    static getDeviceSelector(type: CastingPlaybackTypes): String;


    getSupportedCastingPlaybackTypesAsync(callback: (error: Error, result: CastingPlaybackTypes) => void): void ;

    createCastingConnection(): CastingConnection;

  }

  export class CastingConnection {
    source: CastingSource;
    device: CastingDevice;
    state: CastingConnectionState;
    constructor();

    requestStartCastingAsync(value: CastingSource, callback: (error: Error, result: CastingConnectionErrorStatus) => void): void ;

    disconnectAsync(callback: (error: Error, result: CastingConnectionErrorStatus) => void): void ;

    close(): void;
    addListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    removeListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    on(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    off(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CastingDeviceSelectedEventArgs {
    selectedCastingDevice: CastingDevice;
    constructor();

  }

  export class CastingDevicePickerFilter {
    supportsVideo: Boolean;
    supportsPictures: Boolean;
    supportsAudio: Boolean;
    supportedCastingSources: Object;
    constructor();

  }

  export class CastingDevicePicker {
    appearance: Object;
    filter: CastingDevicePickerFilter;
    constructor();

    show(selection: Object): void;
    show(selection: Object, preferredPlacement: Number): void;

    hide(): void;

    addListener(type: "CastingDevicePickerDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "CastingDevicePickerDismissed", listener: (ev: Event) => void): void ;
    on(type: "CastingDevicePickerDismissed", listener: (ev: Event) => void): void ;
    off(type: "CastingDevicePickerDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "CastingDeviceSelected", listener: (ev: Event) => void): void ;
    removeListener(type: "CastingDeviceSelected", listener: (ev: Event) => void): void ;
    on(type: "CastingDeviceSelected", listener: (ev: Event) => void): void ;
    off(type: "CastingDeviceSelected", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

