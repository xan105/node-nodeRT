  export class Rect {
    constructor();
  }

  export enum DialAppLaunchResult {
    launched,
    failedToLaunch,
    notFound,
    networkFailure,
  }

  export enum DialAppState {
    unknown,
    stopped,
    running,
    networkFailure,
  }

  export enum DialAppStopResult {
    stopped,
    stopFailed,
    operationNotSupported,
    networkFailure,
  }

  export enum DialDeviceDisplayStatus {
    none,
    connecting,
    connected,
    disconnecting,
    disconnected,
    error,
  }

  export class DialApp {
    appName: String;
    constructor();

    requestLaunchAsync(appArgument: String, callback: (error: Error, result: DialAppLaunchResult) => void): void ;

    stopAsync(callback: (error: Error, result: DialAppStopResult) => void): void ;

    getAppStateAsync(callback: (error: Error, result: DialAppStateDetails) => void): void ;

  }

  export class DialAppStateDetails {
    fullXml: String;
    state: DialAppState;
    constructor();

  }

  export class DialDevice {
    id: String;
    friendlyName: String;
    thumbnail: Object;
    constructor();

    static fromIdAsync(value: String, callback: (error: Error, result: DialDevice) => void): void ;


    static deviceInfoSupportsDialAsync(device: Object, callback: (error: Error, result: Boolean) => void): void ;


    static getDeviceSelector(appName: String): String;


    getDialApp(appName: String): DialApp;

  }

  export class DialDevicePicker {
    appearance: Object;
    filter: DialDevicePickerFilter;
    constructor();

    pickSingleDialDeviceAsync(selection: Object, callback: (error: Error, result: DialDevice) => void): void ;
    pickSingleDialDeviceAsync(selection: Object, preferredPlacement: Number, callback: (error: Error, result: DialDevice) => void): void ;

    show(selection: Object): void;
    show(selection: Object, preferredPlacement: Number): void;

    hide(): void;

    setDisplayStatus(device: DialDevice, status: DialDeviceDisplayStatus): void;

    addListener(type: "DialDevicePickerDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "DialDevicePickerDismissed", listener: (ev: Event) => void): void ;
    on(type: "DialDevicePickerDismissed", listener: (ev: Event) => void): void ;
    off(type: "DialDevicePickerDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "DialDeviceSelected", listener: (ev: Event) => void): void ;
    removeListener(type: "DialDeviceSelected", listener: (ev: Event) => void): void ;
    on(type: "DialDeviceSelected", listener: (ev: Event) => void): void ;
    off(type: "DialDeviceSelected", listener: (ev: Event) => void): void ;
    
    addListener(type: "DisconnectButtonClicked", listener: (ev: Event) => void): void ;
    removeListener(type: "DisconnectButtonClicked", listener: (ev: Event) => void): void ;
    on(type: "DisconnectButtonClicked", listener: (ev: Event) => void): void ;
    off(type: "DisconnectButtonClicked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DialDevicePickerFilter {
    supportedAppNames: Object;
    constructor();

  }

  export class DialDeviceSelectedEventArgs {
    selectedDialDevice: DialDevice;
    constructor();

  }

  export class DialDisconnectButtonClickedEventArgs {
    device: DialDevice;
    constructor();

  }

  export class DialReceiverApp {
    static current: DialReceiverApp;
    constructor();

    getAdditionalDataAsync(callback: (error: Error, result: Object) => void): void ;

    setAdditionalDataAsync(additionalData: Object, callback: (error: Error) => void): void ;

    getUniqueDeviceNameAsync(callback: (error: Error, result: String) => void): void ;

  }

