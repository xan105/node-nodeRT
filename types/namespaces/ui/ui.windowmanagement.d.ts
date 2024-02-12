  export class Point {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class WindowId {
    value: Number;
    constructor();
  }

  export enum AppWindowClosedReason {
    other,
    appInitiated,
    userInitiated,
  }

  export enum AppWindowFrameStyle {
    default,
    noFrame,
  }

  export enum AppWindowPresentationKind {
    default,
    compactOverlay,
    fullScreen,
  }

  export enum AppWindowTitleBarVisibility {
    default,
    alwaysHidden,
  }

  export enum WindowingEnvironmentKind {
    unknown,
    overlapped,
    tiled,
  }

  export class AppWindow {
    title: String;
    persistedStateId: String;
    content: Object;
    dispatcherQueue: Object;
    frame: AppWindowFrame;
    isVisible: Boolean;
    presenter: AppWindowPresenter;
    titleBar: AppWindowTitleBar;
    uIContext: Object;
    windowingEnvironment: WindowingEnvironment;
    constructor();

    static tryCreateAsync(callback: (error: Error, result: AppWindow) => void): void ;


    static clearAllPersistedState(): void;


    static clearPersistedState(key: String): void;


    closeAsync(callback: (error: Error) => void): void ;

    tryShowAsync(callback: (error: Error, result: Boolean) => void): void ;

    getPlacement(): AppWindowPlacement;

    getDisplayRegions(): Object;

    requestMoveToDisplayRegion(displayRegion: DisplayRegion): void;

    requestMoveAdjacentToCurrentView(): void;

    requestMoveAdjacentToWindow(anchorWindow: AppWindow): void;

    requestMoveRelativeToWindowContent(anchorWindow: AppWindow, contentOffset: Object): void;

    requestMoveRelativeToCurrentViewContent(contentOffset: Object): void;

    requestMoveRelativeToDisplayRegion(displayRegion: DisplayRegion, displayRegionOffset: Object): void;

    requestSize(frameSize: Object): void;

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: "CloseRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CloseRequested", listener: (ev: Event) => void): void ;
    on(type: "CloseRequested", listener: (ev: Event) => void): void ;
    off(type: "CloseRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppWindowChangedEventArgs {
    didAvailableWindowPresentationsChange: Boolean;
    didDisplayRegionsChange: Boolean;
    didFrameChange: Boolean;
    didSizeChange: Boolean;
    didTitleBarChange: Boolean;
    didVisibilityChange: Boolean;
    didWindowPresentationChange: Boolean;
    didWindowingEnvironmentChange: Boolean;
    constructor();

  }

  export class AppWindowCloseRequestedEventArgs {
    cancel: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class AppWindowClosedEventArgs {
    reason: AppWindowClosedReason;
    constructor();

  }

  export class AppWindowFrame {
    dragRegionVisuals: Object;
    constructor();

    getFrameStyle(): AppWindowFrameStyle;

    setFrameStyle(frameStyle: AppWindowFrameStyle): void;

  }

  export class AppWindowPlacement {
    displayRegion: DisplayRegion;
    offset: Object;
    size: Object;
    constructor();

  }

  export class AppWindowPresentationConfiguration {
    kind: AppWindowPresentationKind;
    constructor();

  }

  export class AppWindowPresenter {
    constructor();

    getConfiguration(): AppWindowPresentationConfiguration;

    isPresentationSupported(presentationKind: AppWindowPresentationKind): Boolean;

    requestPresentation(configuration: AppWindowPresentationConfiguration): Boolean;
    requestPresentation(presentationKind: AppWindowPresentationKind): Boolean;

  }

  export class AppWindowTitleBar {
    inactiveForegroundColor: Object;
    inactiveBackgroundColor: Object;
    foregroundColor: Object;
    extendsContentIntoTitleBar: Boolean;
    buttonPressedForegroundColor: Object;
    buttonPressedBackgroundColor: Object;
    buttonInactiveForegroundColor: Object;
    buttonInactiveBackgroundColor: Object;
    buttonHoverForegroundColor: Object;
    buttonHoverBackgroundColor: Object;
    buttonForegroundColor: Object;
    buttonBackgroundColor: Object;
    backgroundColor: Object;
    isVisible: Boolean;
    constructor();

    getPreferredVisibility(): AppWindowTitleBarVisibility;

    setPreferredVisibility(visibilityMode: AppWindowTitleBarVisibility): void;

    getTitleBarOcclusions(): Object;

  }

  export class AppWindowTitleBarOcclusion {
    occludingRect: Object;
    constructor();

  }

  export class CompactOverlayPresentationConfiguration {
    kind: AppWindowPresentationKind;
    constructor();

  }

  export class DefaultPresentationConfiguration {
    kind: AppWindowPresentationKind;
    constructor();

  }

  export class DisplayRegion {
    displayMonitorDeviceId: String;
    isVisible: Boolean;
    windowingEnvironment: WindowingEnvironment;
    workAreaOffset: Object;
    workAreaSize: Object;
    constructor();

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FullScreenPresentationConfiguration {
    isExclusive: Boolean;
    kind: AppWindowPresentationKind;
    constructor();

  }

  export class WindowServices {
    constructor();

    static findAllTopLevelWindowIds(): Object;


  }

  export class WindowingEnvironment {
    isEnabled: Boolean;
    kind: WindowingEnvironmentKind;
    constructor();

    static findAll(): Object;
    static findAll(kind: WindowingEnvironmentKind): Object;


    getDisplayRegions(): Object;

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WindowingEnvironmentAddedEventArgs {
    windowingEnvironment: WindowingEnvironment;
    constructor();

  }

  export class WindowingEnvironmentChangedEventArgs {
    constructor();

  }

  export class WindowingEnvironmentRemovedEventArgs {
    windowingEnvironment: WindowingEnvironment;
    constructor();

  }

