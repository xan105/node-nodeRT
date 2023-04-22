  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class CorePhysicalKeyStatus {
    repeatCount: number;
    scanCode: number;
    isExtendedKey: boolean;
    isMenuKeyDown: boolean;
    wasKeyDown: boolean;
    isKeyReleased: boolean;
    constructor();
  }

  export enum WebViewControlMoveFocusReason {
    programmatic,
    next,
    previous,
  }

  export enum WebViewControlProcessCapabilityState {
    default,
    disabled,
    enabled,
  }

  export enum WebViewControlAcceleratorKeyRoutingStage {
    tunneling,
    bubbling,
  }

  export class WebViewControlProcess {
    enterpriseId: string;
    isPrivateNetworkClientServerCapabilityEnabled: boolean;
    processId: number;
    constructor();
    constructor(processOptions: WebViewControlProcessOptions);

    createWebViewControlAsync(hostWindowHandle: number, bounds: Object, callback: (error: Error, result: WebViewControl) => void): void ;

    getWebViewControls(): Object;

    terminate(): void;

    addListener(type: "ProcessExited", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessExited", listener: (ev: Event) => void): void ;
    on(type: "ProcessExited", listener: (ev: Event) => void): void ;
    off(type: "ProcessExited", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebViewControl {
    scale: number;
    isVisible: boolean;
    bounds: Object;
    process: WebViewControlProcess;
    source: Object;
    defaultBackgroundColor: Object;
    canGoBack: boolean;
    canGoForward: boolean;
    containsFullScreenElement: boolean;
    deferredPermissionRequests: Object;
    documentTitle: string;
    settings: Object;
    constructor();

    invokeScriptAsync(scriptName: string, arguments: Object, callback: (error: Error, result: string) => void): void ;

    capturePreviewToStreamAsync(stream: Object, callback: (error: Error) => void): void ;

    captureSelectedContentToDataPackageAsync(callback: (error: Error, result: Object) => void): void ;

    close(): void;

    moveFocus(reason: WebViewControlMoveFocusReason): void;

    goForward(): void;

    goBack(): void;

    refresh(): void;

    stop(): void;

    navigate(source: Object): void;

    navigateToString(text: string): void;

    navigateToLocalStreamUri(source: Object, streamResolver: Object): void;

    navigateWithHttpRequestMessage(requestMessage: Object): void;

    buildLocalStreamUri(contentIdentifier: string, relativePath: string): Object;

    getDeferredPermissionRequestById(id: number, result: Object): void;

    addListener(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    on(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    off(type: "ContainsFullScreenElementChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContentLoading", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentLoading", listener: (ev: Event) => void): void ;
    on(type: "ContentLoading", listener: (ev: Event) => void): void ;
    off(type: "ContentLoading", listener: (ev: Event) => void): void ;
    
    addListener(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    removeListener(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    on(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    off(type: "DOMContentLoaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    on(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    off(type: "FrameContentLoading", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    on(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    off(type: "FrameDOMContentLoaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    on(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    off(type: "FrameNavigationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    on(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    off(type: "FrameNavigationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    on(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    off(type: "LongRunningScriptDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    on(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    off(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    on(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    off(type: "NavigationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    on(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    off(type: "NewWindowRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    on(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    off(type: "PermissionRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    removeListener(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    on(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    off(type: "ScriptNotify", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    removeListener(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    on(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    off(type: "UnsafeContentWarningDisplaying", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    removeListener(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    on(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    off(type: "UnsupportedUriSchemeIdentified", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    removeListener(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    on(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    off(type: "UnviewableContentIdentified", listener: (ev: Event) => void): void ;
    
    addListener(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    on(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    off(type: "WebResourceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AcceleratorKeyPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "AcceleratorKeyPressed", listener: (ev: Event) => void): void ;
    on(type: "AcceleratorKeyPressed", listener: (ev: Event) => void): void ;
    off(type: "AcceleratorKeyPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "MoveFocusRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "MoveFocusRequested", listener: (ev: Event) => void): void ;
    on(type: "MoveFocusRequested", listener: (ev: Event) => void): void ;
    off(type: "MoveFocusRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebViewControlMoveFocusRequestedEventArgs {
    reason: WebViewControlMoveFocusReason;
    constructor();

  }

  export class WebViewControlAcceleratorKeyPressedEventArgs {
    handled: boolean;
    eventType: number;
    keyStatus: CorePhysicalKeyStatus;
    routingStage: WebViewControlAcceleratorKeyRoutingStage;
    virtualKey: number;
    constructor();

  }

  export class WebViewControlProcessOptions {
    privateNetworkClientServerCapability: WebViewControlProcessCapabilityState;
    enterpriseId: string;
    constructor();

  }

