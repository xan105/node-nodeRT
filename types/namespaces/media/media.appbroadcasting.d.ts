  export class AppBroadcastingContract {
    constructor();
  }

  export class AppBroadcastingMonitor {
    isCurrentAppBroadcasting: Boolean;
    constructor();

    addListener(type: "IsCurrentAppBroadcastingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsCurrentAppBroadcastingChanged", listener: (ev: Event) => void): void ;
    on(type: "IsCurrentAppBroadcastingChanged", listener: (ev: Event) => void): void ;
    off(type: "IsCurrentAppBroadcastingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastingStatus {
    canStartBroadcast: Boolean;
    details: AppBroadcastingStatusDetails;
    constructor();

  }

  export class AppBroadcastingStatusDetails {
    isAnyAppBroadcasting: Boolean;
    isAppInactive: Boolean;
    isBlockedForApp: Boolean;
    isCaptureResourceUnavailable: Boolean;
    isDisabledBySystem: Boolean;
    isDisabledByUser: Boolean;
    isGameStreamInProgress: Boolean;
    isGpuConstrained: Boolean;
    constructor();

  }

  export class AppBroadcastingUI {
    constructor();

    static getDefault(): AppBroadcastingUI;


    static getForUser(user: Object): AppBroadcastingUI;


    getStatus(): AppBroadcastingStatus;

    showBroadcastUI(): void;

  }

