  export enum AppRestartFailureReason {
    restartPending,
    notInForeground,
    invalidUser,
    other,
  }

  export class AppListEntry {
    displayInfo: Object;
    appUserModelId: string;
    constructor();

    launchAsync(callback: (error: Error, result: boolean) => void): void ;

    launchForUserAsync(user: Object, callback: (error: Error, result: boolean) => void): void ;

  }

  export class CoreApplication {
    static id: string;
    static properties: Object;
    static mainView: CoreApplicationView;
    static views: Object;
    constructor();

    static requestRestartAsync(launchArguments: string, callback: (error: Error, result: AppRestartFailureReason) => void): void ;


    static requestRestartForUserAsync(user: Object, launchArguments: string, callback: (error: Error, result: AppRestartFailureReason) => void): void ;


    static createNewView(viewSource: IFrameworkViewSource): CoreApplicationView;
    static createNewView(): CoreApplicationView;
    static createNewView(runtimeType: string, entryPoint: string): CoreApplicationView;


    static incrementApplicationUseCount(): void;


    static decrementApplicationUseCount(): void;


    static exit(): void;


    static enablePrelaunch(value: boolean): void;


    static getCurrentView(): CoreApplicationView;


    static run(viewSource: IFrameworkViewSource): void;


    static runWithActivationFactories(activationFactoryCallback: Object): void;


    addListener(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    on(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    off(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: "Exiting", listener: (ev: Event) => void): void ;
    removeListener(type: "Exiting", listener: (ev: Event) => void): void ;
    on(type: "Exiting", listener: (ev: Event) => void): void ;
    off(type: "Exiting", listener: (ev: Event) => void): void ;
    
    addListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    removeListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    on(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    off(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    removeListener(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    on(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    off(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    
    addListener(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    removeListener(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    on(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    off(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    
    addListener(type: "Resuming", listener: (ev: Event) => void): void ;
    removeListener(type: "Resuming", listener: (ev: Event) => void): void ;
    on(type: "Resuming", listener: (ev: Event) => void): void ;
    off(type: "Resuming", listener: (ev: Event) => void): void ;
    
    addListener(type: "Suspending", listener: (ev: Event) => void): void ;
    removeListener(type: "Suspending", listener: (ev: Event) => void): void ;
    on(type: "Suspending", listener: (ev: Event) => void): void ;
    off(type: "Suspending", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreApplicationView {
    coreWindow: Object;
    isHosted: boolean;
    isMain: boolean;
    dispatcher: Object;
    isComponent: boolean;
    titleBar: CoreApplicationViewTitleBar;
    properties: Object;
    dispatcherQueue: Object;
    constructor();

    addListener(type: "Activated", listener: (ev: Event) => void): void ;
    removeListener(type: "Activated", listener: (ev: Event) => void): void ;
    on(type: "Activated", listener: (ev: Event) => void): void ;
    off(type: "Activated", listener: (ev: Event) => void): void ;
    
    addListener(type: "HostedViewClosing", listener: (ev: Event) => void): void ;
    removeListener(type: "HostedViewClosing", listener: (ev: Event) => void): void ;
    on(type: "HostedViewClosing", listener: (ev: Event) => void): void ;
    off(type: "HostedViewClosing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreApplicationViewTitleBar {
    extendViewIntoTitleBar: boolean;
    height: number;
    isVisible: boolean;
    systemOverlayLeftInset: number;
    systemOverlayRightInset: number;
    constructor();

    addListener(type: "IsVisibleChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsVisibleChanged", listener: (ev: Event) => void): void ;
    on(type: "IsVisibleChanged", listener: (ev: Event) => void): void ;
    off(type: "IsVisibleChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutMetricsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutMetricsChanged", listener: (ev: Event) => void): void ;
    on(type: "LayoutMetricsChanged", listener: (ev: Event) => void): void ;
    off(type: "LayoutMetricsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IFrameworkView {
    constructor();

    initialize(applicationView: CoreApplicationView): void;

    setWindow(window: Object): void;

    load(entryPoint: string): void;

    run(): void;

    uninitialize(): void;

  }

  export class IFrameworkViewSource {
    constructor();

    createView(): IFrameworkView;

  }

  export class ICoreApplicationUnhandledError {
    constructor();

    addListener(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    on(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    off(type: "UnhandledErrorDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UnhandledErrorDetectedEventArgs {
    unhandledError: UnhandledError;
    constructor();

  }

  export class HostedViewClosingEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class UnhandledError {
    handled: boolean;
    constructor();

    propagate(): void;

  }

