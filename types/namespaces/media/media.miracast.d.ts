  export class SizeInt32 {
    width: Number;
    height: Number;
    constructor();
  }

  export class PointInt32 {
    x: Number;
    y: Number;
    constructor();
  }

  export enum MiracastReceiverApplySettingsStatus {
    success,
    unknownFailure,
    miracastNotSupported,
    accessDenied,
    friendlyNameTooLong,
    modelNameTooLong,
    modelNumberTooLong,
    invalidSettings,
  }

  export enum MiracastReceiverAuthorizationMethod {
    none,
    confirmConnection,
    pinDisplayIfRequested,
    pinDisplayRequired,
  }

  export enum MiracastReceiverDisconnectReason {
    finished,
    appSpecificError,
    connectionNotAccepted,
    disconnectedByUser,
    failedToStartStreaming,
    mediaDecodingError,
    mediaStreamingError,
    mediaDecryptionError,
  }

  export enum MiracastReceiverGameControllerDeviceUsageMode {
    asGameController,
    asMouseAndKeyboard,
  }

  export enum MiracastReceiverListeningStatus {
    notListening,
    listening,
    connectionPending,
    connected,
    disabledByPolicy,
    temporarilyDisabled,
  }

  export enum MiracastReceiverSessionStartStatus {
    success,
    unknownFailure,
    miracastNotSupported,
    accessDenied,
  }

  export enum MiracastReceiverWiFiStatus {
    miracastSupportUndetermined,
    miracastNotSupported,
    miracastSupportNotOptimized,
    miracastSupported,
  }

  export enum MiracastTransmitterAuthorizationStatus {
    undecided,
    allowed,
    alwaysPrompt,
    blocked,
  }

  export class MiracastReceiver {
    constructor();

    getCurrentSettingsAsync(callback: (error: Error, result: MiracastReceiverSettings) => void): void ;

    disconnectAllAndApplySettingsAsync(settings: MiracastReceiverSettings, callback: (error: Error, result: MiracastReceiverApplySettingsResult) => void): void ;

    getStatusAsync(callback: (error: Error, result: MiracastReceiverStatus) => void): void ;

    createSessionAsync(view: Object, callback: (error: Error, result: MiracastReceiverSession) => void): void ;

    getDefaultSettings(): MiracastReceiverSettings;

    getCurrentSettings(): MiracastReceiverSettings;

    disconnectAllAndApplySettings(settings: MiracastReceiverSettings): MiracastReceiverApplySettingsResult;

    getStatus(): MiracastReceiverStatus;

    createSession(view: Object): MiracastReceiverSession;

    clearKnownTransmitters(): void;

    removeKnownTransmitter(transmitter: MiracastTransmitter): void;

    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MiracastReceiverApplySettingsResult {
    extendedError: Number;
    status: MiracastReceiverApplySettingsStatus;
    constructor();

  }

  export class MiracastReceiverConnection {
    cursorImageChannel: MiracastReceiverCursorImageChannel;
    inputDevices: MiracastReceiverInputDevices;
    streamControl: MiracastReceiverStreamControl;
    transmitter: MiracastTransmitter;
    constructor();

    pauseAsync(callback: (error: Error) => void): void ;

    resumeAsync(callback: (error: Error) => void): void ;

    disconnect(reason: MiracastReceiverDisconnectReason): void;
    disconnect(reason: MiracastReceiverDisconnectReason, message: String): void;

    pause(): void;

    resume(): void;

    close(): void;
  }

  export class MiracastReceiverConnectionCreatedEventArgs {
    connection: MiracastReceiverConnection;
    pin: String;
    constructor();

    getDeferral(): Object;

  }

  export class MiracastReceiverCursorImageChannel {
    imageStream: Object;
    isEnabled: Boolean;
    maxImageSize: SizeInt32;
    position: PointInt32;
    constructor();

    addListener(type: "ImageStreamChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ImageStreamChanged", listener: (ev: Event) => void): void ;
    on(type: "ImageStreamChanged", listener: (ev: Event) => void): void ;
    off(type: "ImageStreamChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    on(type: "PositionChanged", listener: (ev: Event) => void): void ;
    off(type: "PositionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MiracastReceiverCursorImageChannelSettings {
    maxImageSize: SizeInt32;
    isEnabled: Boolean;
    constructor();

  }

  export class MiracastReceiverDisconnectedEventArgs {
    connection: MiracastReceiverConnection;
    constructor();

  }

  export class MiracastReceiverGameControllerDevice {
    transmitInput: Boolean;
    mode: MiracastReceiverGameControllerDeviceUsageMode;
    isRequestedByTransmitter: Boolean;
    isTransmittingInput: Boolean;
    constructor();

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MiracastReceiverInputDevices {
    gameController: MiracastReceiverGameControllerDevice;
    keyboard: MiracastReceiverKeyboardDevice;
    constructor();

  }

  export class MiracastReceiverKeyboardDevice {
    transmitInput: Boolean;
    isRequestedByTransmitter: Boolean;
    isTransmittingInput: Boolean;
    constructor();

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MiracastReceiverMediaSourceCreatedEventArgs {
    connection: MiracastReceiverConnection;
    cursorImageChannelSettings: MiracastReceiverCursorImageChannelSettings;
    mediaSource: Object;
    constructor();

    getDeferral(): Object;

  }

  export class MiracastReceiverSession {
    maxSimultaneousConnections: Number;
    allowConnectionTakeover: Boolean;
    constructor();

    startAsync(callback: (error: Error, result: MiracastReceiverSessionStartResult) => void): void ;

    start(): MiracastReceiverSessionStartResult;

    close(): void;
    addListener(type: "ConnectionCreated", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionCreated", listener: (ev: Event) => void): void ;
    on(type: "ConnectionCreated", listener: (ev: Event) => void): void ;
    off(type: "ConnectionCreated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Disconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "Disconnected", listener: (ev: Event) => void): void ;
    on(type: "Disconnected", listener: (ev: Event) => void): void ;
    off(type: "Disconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "MediaSourceCreated", listener: (ev: Event) => void): void ;
    removeListener(type: "MediaSourceCreated", listener: (ev: Event) => void): void ;
    on(type: "MediaSourceCreated", listener: (ev: Event) => void): void ;
    off(type: "MediaSourceCreated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MiracastReceiverSessionStartResult {
    extendedError: Number;
    status: MiracastReceiverSessionStartStatus;
    constructor();

  }

  export class MiracastReceiverSettings {
    requireAuthorizationFromKnownTransmitters: Boolean;
    modelNumber: String;
    modelName: String;
    friendlyName: String;
    authorizationMethod: MiracastReceiverAuthorizationMethod;
    constructor();

  }

  export class MiracastReceiverStatus {
    isConnectionTakeoverSupported: Boolean;
    knownTransmitters: Object;
    listeningStatus: MiracastReceiverListeningStatus;
    maxSimultaneousConnections: Number;
    wiFiStatus: MiracastReceiverWiFiStatus;
    constructor();

  }

  export class MiracastReceiverStreamControl {
    muteAudio: Boolean;
    constructor();

    getVideoStreamSettingsAsync(callback: (error: Error, result: MiracastReceiverVideoStreamSettings) => void): void ;

    suggestVideoStreamSettingsAsync(settings: MiracastReceiverVideoStreamSettings, callback: (error: Error) => void): void ;

    getVideoStreamSettings(): MiracastReceiverVideoStreamSettings;

    suggestVideoStreamSettings(settings: MiracastReceiverVideoStreamSettings): void;

  }

  export class MiracastReceiverVideoStreamSettings {
    size: SizeInt32;
    bitrate: Number;
    constructor();

  }

  export class MiracastTransmitter {
    name: String;
    authorizationStatus: MiracastTransmitterAuthorizationStatus;
    lastConnectionTime: Date;
    macAddress: String;
    constructor();

    getConnections(): Object;

  }

