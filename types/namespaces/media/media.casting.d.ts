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
    message: string;
    constructor();

  }

  export class CastingDevice {
    friendlyName: string;
    icon: Object;
    id: string;
    constructor();

    static getDeviceSelectorFromCastingSourceAsync(castingSource: CastingSource, callback: (error: Error, result: string) => void): void ;


    static fromIdAsync(value: string, callback: (error: Error, result: CastingDevice) => void): void ;


    static deviceInfoSupportsCastingAsync(device: Object, callback: (error: Error, result: boolean) => void): void ;


    static getDeviceSelector(type: CastingPlaybackTypes): string;


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
    supportsVideo: boolean;
    supportsPictures: boolean;
    supportsAudio: boolean;
    supportedCastingSources: Object;
    constructor();

  }

  export class CastingDevicePicker {
    appearance: Object;
    filter: CastingDevicePickerFilter;
    constructor();

    show(selection: Object): void;
    show(selection: Object, preferredPlacement: number): void;

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

