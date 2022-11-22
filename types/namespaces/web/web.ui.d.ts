  export class Color {
    constructor();
  }

  export enum WebViewControlPermissionState {
    unknown,
    defer,
    allow,
    deny,
  }

  export enum WebViewControlPermissionType {
    geolocation,
    unlimitedIndexedDBQuota,
    media,
    pointerLock,
    webNotifications,
    screen,
  }

  export class IWebViewControl {
    canGoBack: Boolean;
    canGoForward: Boolean;
    containsFullScreenElement: Boolean;
    defaultBackgroundColor: Object;
    deferredPermissionRequests: Object;
    documentTitle: String;
    settings: WebViewControlSettings;
    source: Object;
    constructor();

    invokeScriptAsync(scriptName: String, arguments: Object, callback: (error: Error, result: String) => void): void ;

    capturePreviewToStreamAsync(stream: Object, callback: (error: Error) => void): void ;

    captureSelectedContentToDataPackageAsync(callback: (error: Error, result: Object) => void): void ;

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
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebViewControlSettings {
    isScriptNotifyAllowed: Boolean;
    isJavaScriptEnabled: Boolean;
    isIndexedDBEnabled: Boolean;
    constructor();

  }

  export class WebViewControlDeferredPermissionRequest {
    id: Number;
    permissionType: WebViewControlPermissionType;
    uri: Object;
    constructor();

    allow(): void;

    deny(): void;

  }

  export class WebViewControlNavigationStartingEventArgs {
    cancel: Boolean;
    uri: Object;
    constructor();

  }

  export class WebViewControlContentLoadingEventArgs {
    uri: Object;
    constructor();

  }

  export class WebViewControlDOMContentLoadedEventArgs {
    uri: Object;
    constructor();

  }

  export class WebViewControlNavigationCompletedEventArgs {
    isSuccess: Boolean;
    uri: Object;
    webErrorStatus: Number;
    constructor();

  }

  export class WebViewControlScriptNotifyEventArgs {
    uri: Object;
    value: String;
    constructor();

  }

  export class WebViewControlLongRunningScriptDetectedEventArgs {
    stopPageScriptExecution: Boolean;
    executionTime: Number;
    constructor();

  }

  export class WebViewControlUnviewableContentIdentifiedEventArgs {
    mediaType: String;
    referrer: Object;
    uri: Object;
    constructor();

  }

  export class WebViewControlPermissionRequestedEventArgs {
    permissionRequest: WebViewControlPermissionRequest;
    constructor();

  }

  export class WebViewControlUnsupportedUriSchemeIdentifiedEventArgs {
    handled: Boolean;
    uri: Object;
    constructor();

  }

  export class WebViewControlNewWindowRequestedEventArgs {
    handled: Boolean;
    referrer: Object;
    uri: Object;
    constructor();

  }

  export class WebViewControlWebResourceRequestedEventArgs {
    response: Object;
    request: Object;
    constructor();

    getDeferral(): Object;

  }

  export class WebViewControlPermissionRequest {
    id: Number;
    permissionType: WebViewControlPermissionType;
    state: WebViewControlPermissionState;
    uri: Object;
    constructor();

    defer(): void;

    allow(): void;

    deny(): void;

  }

export * as interop from "./web.ui.interop.js";