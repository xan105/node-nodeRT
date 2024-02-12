  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class CorePhysicalKeyStatus {
    repeatCount: Number;
    scanCode: Number;
    isExtendedKey: Boolean;
    isMenuKeyDown: Boolean;
    wasKeyDown: Boolean;
    isKeyReleased: Boolean;
    constructor();
  }

  export enum WebViewControlAcceleratorKeyRoutingStage {
    tunneling,
    bubbling,
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

  export class WebViewControl {
    scale: Number;
    isVisible: Boolean;
    bounds: Object;
    process: WebViewControlProcess;
    source: Object;
    defaultBackgroundColor: Object;
    canGoBack: Boolean;
    canGoForward: Boolean;
    containsFullScreenElement: Boolean;
    deferredPermissionRequests: Object;
    documentTitle: String;
    settings: Object;
    constructor();

    invokeScriptAsync(scriptName: String, arguments: Object, callback: (error: Error, result: String) => void): void ;

    capturePreviewToStreamAsync(stream: Object, callback: (error: Error) => void): void ;

    captureSelectedContentToDataPackageAsync(callback: (error: Error, result: Object) => void): void ;

    close(): void;

    moveFocus(reason: WebViewControlMoveFocusReason): void;

    addInitializeScript(script: String): void;

    goForward(): void;

    goBack(): void;

    refresh(): void;

    stop(): void;

    navigate(source: Object): void;

    navigateToString(text: String): void;

    navigateToLocalStreamUri(source: Object, streamResolver: Object): void;

    navigateWithHttpRequestMessage(requestMessage: Object): void;

    buildLocalStreamUri(contentIdentifier: String, relativePath: String): Object;

    getDeferredPermissionRequestById(id: Number, result: Object): void;

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
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebViewControlAcceleratorKeyPressedEventArgs {
    handled: Boolean;
    eventType: Number;
    keyStatus: CorePhysicalKeyStatus;
    routingStage: WebViewControlAcceleratorKeyRoutingStage;
    virtualKey: Number;
    constructor();

  }

  export class WebViewControlMoveFocusRequestedEventArgs {
    reason: WebViewControlMoveFocusReason;
    constructor();

  }

  export class WebViewControlProcess {
    enterpriseId: String;
    isPrivateNetworkClientServerCapabilityEnabled: Boolean;
    processId: Number;
    constructor();
    constructor(processOptions: WebViewControlProcessOptions);

    createWebViewControlAsync(hostWindowHandle: Number, bounds: Object, callback: (error: Error, result: WebViewControl) => void): void ;

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

  export class WebViewControlProcessOptions {
    privateNetworkClientServerCapability: WebViewControlProcessCapabilityState;
    enterpriseId: String;
    constructor();

  }

