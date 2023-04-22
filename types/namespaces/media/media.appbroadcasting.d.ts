  export class AppBroadcastingContract {
    constructor();
  }

  export class AppBroadcastingStatus {
    canStartBroadcast: boolean;
    details: AppBroadcastingStatusDetails;
    constructor();

  }

  export class AppBroadcastingUI {
    constructor();

    static getDefault(): AppBroadcastingUI;


    static getForUser(user: Object): AppBroadcastingUI;


    getStatus(): AppBroadcastingStatus;

    showBroadcastUI(): void;

  }

  export class AppBroadcastingMonitor {
    isCurrentAppBroadcasting: boolean;
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

  export class AppBroadcastingStatusDetails {
    isAnyAppBroadcasting: boolean;
    isAppInactive: boolean;
    isBlockedForApp: boolean;
    isCaptureResourceUnavailable: boolean;
    isDisabledBySystem: boolean;
    isDisabledByUser: boolean;
    isGameStreamInProgress: boolean;
    isGpuConstrained: boolean;
    constructor();

  }

