  export class Rect {
    constructor();
  }

  export enum DialAppState {
    unknown,
    stopped,
    running,
    networkFailure,
  }

  export enum DialAppLaunchResult {
    launched,
    failedToLaunch,
    notFound,
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

  export class DialAppStateDetails {
    fullXml: string;
    state: DialAppState;
    constructor();

  }

  export class DialApp {
    appName: string;
    constructor();

    requestLaunchAsync(appArgument: string, callback: (error: Error, result: DialAppLaunchResult) => void): void ;

    stopAsync(callback: (error: Error, result: DialAppStopResult) => void): void ;

    getAppStateAsync(callback: (error: Error, result: DialAppStateDetails) => void): void ;

  }

  export class DialDevice {
    id: string;
    friendlyName: string;
    thumbnail: Object;
    constructor();

    static fromIdAsync(value: string, callback: (error: Error, result: DialDevice) => void): void ;


    static deviceInfoSupportsDialAsync(device: Object, callback: (error: Error, result: boolean) => void): void ;


    static getDeviceSelector(appName: string): string;


    getDialApp(appName: string): DialApp;

  }

  export class DialDeviceSelectedEventArgs {
    selectedDialDevice: DialDevice;
    constructor();

  }

  export class DialDisconnectButtonClickedEventArgs {
    device: DialDevice;
    constructor();

  }

  export class DialDevicePickerFilter {
    supportedAppNames: Object;
    constructor();

  }

  export class DialDevicePicker {
    appearance: Object;
    filter: DialDevicePickerFilter;
    constructor();

    pickSingleDialDeviceAsync(selection: Object, callback: (error: Error, result: DialDevice) => void): void ;
    pickSingleDialDeviceAsync(selection: Object, preferredPlacement: number, callback: (error: Error, result: DialDevice) => void): void ;

    show(selection: Object): void;
    show(selection: Object, preferredPlacement: number): void;

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

  export class DialReceiverApp {
    static current: DialReceiverApp;
    constructor();

    getAdditionalDataAsync(callback: (error: Error, result: Object) => void): void ;

    setAdditionalDataAsync(additionalData: Object, callback: (error: Error) => void): void ;

    getUniqueDeviceNameAsync(callback: (error: Error, result: string) => void): void ;

  }

