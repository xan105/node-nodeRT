  export class WindowId {
    value: Number;
    constructor();
  }

  export class SecurityAppManagerContract {
    constructor();
  }

  export enum SecurityAppKind {
    webProtection,
  }

  export enum SecurityAppState {
    disabled,
    enabled,
  }

  export enum SecurityAppSubstatus {
    undetermined,
    noActionNeeded,
    actionRecommended,
    actionNeeded,
  }

  export enum ShareWindowCommand {
    none,
    startSharing,
    stopSharing,
  }

  export class AdaptiveCardBuilder {
    constructor();

    static createAdaptiveCardFromJson(value: String): IAdaptiveCard;


  }

  export class FocusSession {
    id: String;
    constructor();

    end(): void;

  }

  export class FocusSessionManager {
    static isSupported: Boolean;
    isFocusActive: Boolean;
    constructor();

    static getDefault(): FocusSessionManager;


    getSession(id: String): FocusSession;

    tryStartFocusSession(): FocusSession;
    tryStartFocusSession(endTime: Date): FocusSession;

    deactivateFocus(): void;

    addListener(type: "IsFocusActiveChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsFocusActiveChanged", listener: (ev: Event) => void): void ;
    on(type: "IsFocusActiveChanged", listener: (ev: Event) => void): void ;
    off(type: "IsFocusActiveChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IAdaptiveCard {
    constructor();

    toJson(): String;

  }

  export class IAdaptiveCardBuilderStatics {
    constructor();

    createAdaptiveCardFromJson(value: String): IAdaptiveCard;

  }

  export class SecurityAppManager {
    constructor();

    register(kind: SecurityAppKind, displayName: String, detailsUri: Object, registerPerUser: Boolean): String;

    unregister(kind: SecurityAppKind, guidRegistration: String): void;

    updateState(kind: SecurityAppKind, guidRegistration: String, state: SecurityAppState, substatus: SecurityAppSubstatus, detailsUri: Object): void;

  }

  export class ShareWindowCommandEventArgs {
    command: ShareWindowCommand;
    windowId: WindowId;
    constructor();

  }

  export class ShareWindowCommandSource {
    constructor();

    static getForCurrentView(): ShareWindowCommandSource;


    start(): void;

    stop(): void;

    reportCommandChanged(): void;

    addListener(type: "CommandInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "CommandInvoked", listener: (ev: Event) => void): void ;
    on(type: "CommandInvoked", listener: (ev: Event) => void): void ;
    off(type: "CommandInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "CommandRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CommandRequested", listener: (ev: Event) => void): void ;
    on(type: "CommandRequested", listener: (ev: Event) => void): void ;
    off(type: "CommandRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TaskbarManager {
    isPinningAllowed: Boolean;
    isSupported: Boolean;
    constructor();

    static getDefault(): TaskbarManager;


    isCurrentAppPinnedAsync(callback: (error: Error, result: Boolean) => void): void ;

    isAppListEntryPinnedAsync(appListEntry: Object, callback: (error: Error, result: Boolean) => void): void ;

    requestPinCurrentAppAsync(callback: (error: Error, result: Boolean) => void): void ;

    requestPinAppListEntryAsync(appListEntry: Object, callback: (error: Error, result: Boolean) => void): void ;

    isSecondaryTilePinnedAsync(tileId: String, callback: (error: Error, result: Boolean) => void): void ;

    requestPinSecondaryTileAsync(secondaryTile: Object, callback: (error: Error, result: Boolean) => void): void ;

    tryUnpinSecondaryTileAsync(tileId: String, callback: (error: Error, result: Boolean) => void): void ;

  }

