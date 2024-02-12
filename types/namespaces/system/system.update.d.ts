  export enum SystemUpdateAttentionRequiredReason {
    none,
    networkRequired,
    insufficientDiskSpace,
    insufficientBattery,
    updateBlocked,
  }

  export enum SystemUpdateItemState {
    notStarted,
    initializing,
    preparing,
    calculating,
    downloading,
    installing,
    completed,
    rebootRequired,
    error,
  }

  export enum SystemUpdateManagerState {
    idle,
    detecting,
    readyToDownload,
    downloading,
    readyToInstall,
    installing,
    rebootRequired,
    readyToFinalize,
    finalizing,
    completed,
    attentionRequired,
    error,
  }

  export enum SystemUpdateStartInstallAction {
    upToReboot,
    allowReboot,
  }

  export class SystemUpdateItem {
    description: String;
    downloadProgress: Number;
    extendedError: Number;
    id: String;
    installProgress: Number;
    revision: Number;
    state: SystemUpdateItemState;
    title: String;
    constructor();

  }

  export class SystemUpdateLastErrorInfo {
    extendedError: Number;
    isInteractive: Boolean;
    state: SystemUpdateManagerState;
    constructor();

  }

  export class SystemUpdateManager {
    static attentionRequiredReason: SystemUpdateAttentionRequiredReason;
    static downloadProgress: Number;
    static extendedError: Number;
    static installProgress: Number;
    static lastErrorInfo: SystemUpdateLastErrorInfo;
    static lastUpdateCheckTime: Date;
    static lastUpdateInstallTime: Date;
    static state: SystemUpdateManagerState;
    static userActiveHoursEnd: Number;
    static userActiveHoursMax: Number;
    static userActiveHoursStart: Number;
    constructor();

    static blockAutomaticRebootAsync(lockId: String, callback: (error: Error, result: Boolean) => void): void ;


    static unblockAutomaticRebootAsync(lockId: String, callback: (error: Error, result: Boolean) => void): void ;


    static isSupported(): Boolean;


    static trySetUserActiveHours(start: Number, end: Number): Boolean;


    static getAutomaticRebootBlockIds(): Object;


    static getUpdateItems(): Object;


    static setFlightRing(flightRing: String): Boolean;


    static getFlightRing(): String;


    static startInstall(action: SystemUpdateStartInstallAction): void;


    static rebootToCompleteInstall(): void;


    static startCancelUpdates(): void;


    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

