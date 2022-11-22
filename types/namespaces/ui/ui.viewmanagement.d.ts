  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class ViewManagementViewScalingContract {
    constructor();
  }

  export enum ApplicationViewState {
    fullScreenLandscape,
    filled,
    snapped,
    fullScreenPortrait,
  }

  export enum ApplicationViewOrientation {
    landscape,
    portrait,
  }

  export enum ApplicationViewSwitchingOptions {
    default,
    skipAnimation,
    consolidateViews,
  }

  export enum ViewSizePreference {
    default,
    useLess,
    useHalf,
    useMore,
    useMinimum,
    useNone,
    custom,
  }

  export enum ApplicationViewBoundsMode {
    useVisible,
    useCoreWindow,
  }

  export enum FullScreenSystemOverlayMode {
    standard,
    minimal,
  }

  export enum ApplicationViewWindowingMode {
    auto,
    preferredLaunchViewSize,
    fullScreen,
  }

  export enum ApplicationViewMode {
    default,
    compactOverlay,
  }

  export enum UserInteractionMode {
    mouse,
    touch,
  }

  export enum HandPreference {
    leftHanded,
    rightHanded,
  }

  export enum UIColorType {
    background,
    foreground,
    accentDark3,
    accentDark2,
    accentDark1,
    accent,
    accentLight1,
    accentLight2,
    accentLight3,
    complement,
  }

  export enum UIElementType {
    activeCaption,
    background,
    buttonFace,
    buttonText,
    captionText,
    grayText,
    highlight,
    highlightText,
    hotlight,
    inactiveCaption,
    inactiveCaptionText,
    window,
    windowText,
    accentColor,
    textHigh,
    textMedium,
    textLow,
    textContrastWithHigh,
    nonTextHigh,
    nonTextMediumHigh,
    nonTextMedium,
    nonTextMediumLow,
    nonTextLow,
    pageBackground,
    popupBackground,
    overlayOutsidePopup,
  }

  export class ViewModePreferences {
    viewSizePreference: ViewSizePreference;
    customSize: Object;
    constructor();

    static createDefault(mode: ApplicationViewMode): ViewModePreferences;


  }

  export class ApplicationView {
    static value: ApplicationViewState;
    static terminateAppOnFinalViewClose: Boolean;
    static preferredLaunchWindowingMode: ApplicationViewWindowingMode;
    static preferredLaunchViewSize: Object;
    isScreenCaptureEnabled: Boolean;
    title: String;
    adjacentToLeftDisplayEdge: Boolean;
    adjacentToRightDisplayEdge: Boolean;
    id: Number;
    isFullScreen: Boolean;
    isOnLockScreen: Boolean;
    orientation: ApplicationViewOrientation;
    suppressSystemOverlays: Boolean;
    desiredBoundsMode: ApplicationViewBoundsMode;
    visibleBounds: Object;
    fullScreenSystemOverlayMode: FullScreenSystemOverlayMode;
    isFullScreenMode: Boolean;
    titleBar: ApplicationViewTitleBar;
    viewMode: ApplicationViewMode;
    constructor();

    static tryUnsnapToFullscreen(): Boolean;


    static getApplicationViewIdForWindow(window: Object): Number;


    static getForCurrentView(): ApplicationView;


    static tryUnsnap(): Boolean;


    tryEnterViewModeAsync(viewMode: ApplicationViewMode, callback: (error: Error, result: Boolean) => void): void ;
    tryEnterViewModeAsync(viewMode: ApplicationViewMode, viewModePreferences: ViewModePreferences, callback: (error: Error, result: Boolean) => void): void ;

    tryConsolidateAsync(callback: (error: Error, result: Boolean) => void): void ;

    setDesiredBoundsMode(boundsMode: ApplicationViewBoundsMode): Boolean;

    tryEnterFullScreenMode(): Boolean;

    exitFullScreenMode(): void;

    showStandardSystemOverlays(): void;

    tryResizeView(value: Object): Boolean;

    setPreferredMinSize(minSize: Object): void;

    isViewModeSupported(viewMode: ApplicationViewMode): Boolean;

    addListener(type: "Consolidated", listener: (ev: Event) => void): void ;
    removeListener(type: "Consolidated", listener: (ev: Event) => void): void ;
    on(type: "Consolidated", listener: (ev: Event) => void): void ;
    off(type: "Consolidated", listener: (ev: Event) => void): void ;
    
    addListener(type: "VisibleBoundsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VisibleBoundsChanged", listener: (ev: Event) => void): void ;
    on(type: "VisibleBoundsChanged", listener: (ev: Event) => void): void ;
    off(type: "VisibleBoundsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ApplicationViewConsolidatedEventArgs {
    isUserInitiated: Boolean;
    isAppInitiated: Boolean;
    constructor();

  }

  export class ApplicationViewTitleBar {
    buttonInactiveBackgroundColor: Object;
    buttonHoverForegroundColor: Object;
    buttonHoverBackgroundColor: Object;
    buttonForegroundColor: Object;
    buttonBackgroundColor: Object;
    buttonInactiveForegroundColor: Object;
    backgroundColor: Object;
    inactiveForegroundColor: Object;
    inactiveBackgroundColor: Object;
    foregroundColor: Object;
    buttonPressedForegroundColor: Object;
    buttonPressedBackgroundColor: Object;
    constructor();

  }

  export class ApplicationViewSwitcher {
    constructor();

    static tryShowAsViewModeAsync(viewId: Number, viewMode: ApplicationViewMode, callback: (error: Error, result: Boolean) => void): void ;
    static tryShowAsViewModeAsync(viewId: Number, viewMode: ApplicationViewMode, viewModePreferences: ViewModePreferences, callback: (error: Error, result: Boolean) => void): void ;


    static tryShowAsStandaloneAsync(viewId: Number, callback: (error: Error, result: Boolean) => void): void ;
    static tryShowAsStandaloneAsync(viewId: Number, sizePreference: ViewSizePreference, callback: (error: Error, result: Boolean) => void): void ;
    static tryShowAsStandaloneAsync(viewId: Number, sizePreference: ViewSizePreference, anchorViewId: Number, anchorSizePreference: ViewSizePreference, callback: (error: Error, result: Boolean) => void): void ;


    static switchAsync(viewId: Number, callback: (error: Error) => void): void ;
    static switchAsync(toViewId: Number, fromViewId: Number, callback: (error: Error) => void): void ;
    static switchAsync(toViewId: Number, fromViewId: Number, options: ApplicationViewSwitchingOptions, callback: (error: Error) => void): void ;


    static prepareForCustomAnimatedSwitchAsync(toViewId: Number, fromViewId: Number, options: ApplicationViewSwitchingOptions, callback: (error: Error, result: Boolean) => void): void ;


    static disableSystemViewActivationPolicy(): void;


    static disableShowingMainViewOnActivation(): void;


  }

  export class ActivationViewSwitcher {
    constructor();

    showAsStandaloneAsync(viewId: Number, callback: (error: Error) => void): void ;
    showAsStandaloneAsync(viewId: Number, sizePreference: ViewSizePreference, callback: (error: Error) => void): void ;

    isViewPresentedOnActivationVirtualDesktop(viewId: Number): Boolean;

  }

  export class ApplicationViewTransferContext {
    static dataPackageFormatId: String;
    viewId: Number;
    constructor();

  }

  export class InputPaneVisibilityEventArgs {
    ensuredFocusedElementInView: Boolean;
    occludedRect: Object;
    constructor();

  }

  export class InputPane {
    occludedRect: Object;
    visible: Boolean;
    constructor();

    static getForCurrentView(): InputPane;


    tryShow(): Boolean;

    tryHide(): Boolean;

    addListener(type: "Hiding", listener: (ev: Event) => void): void ;
    removeListener(type: "Hiding", listener: (ev: Event) => void): void ;
    on(type: "Hiding", listener: (ev: Event) => void): void ;
    off(type: "Hiding", listener: (ev: Event) => void): void ;
    
    addListener(type: "Showing", listener: (ev: Event) => void): void ;
    removeListener(type: "Showing", listener: (ev: Event) => void): void ;
    on(type: "Showing", listener: (ev: Event) => void): void ;
    off(type: "Showing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ProjectionManager {
    static projectionDisplayAvailable: Boolean;
    constructor();

    static startProjectingAsync(projectionViewId: Number, anchorViewId: Number, displayDeviceInfo: Object, callback: (error: Error) => void): void ;
    static startProjectingAsync(projectionViewId: Number, anchorViewId: Number, callback: (error: Error) => void): void ;


    static requestStartProjectingAsync(projectionViewId: Number, anchorViewId: Number, selection: Object, callback: (error: Error, result: Boolean) => void): void ;
    static requestStartProjectingAsync(projectionViewId: Number, anchorViewId: Number, selection: Object, prefferedPlacement: Number, callback: (error: Error, result: Boolean) => void): void ;


    static swapDisplaysForViewsAsync(projectionViewId: Number, anchorViewId: Number, callback: (error: Error) => void): void ;


    static stopProjectingAsync(projectionViewId: Number, anchorViewId: Number, callback: (error: Error) => void): void ;


    static getDeviceSelector(): String;


    addListener(type: "ProjectionDisplayAvailableChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ProjectionDisplayAvailableChanged", listener: (ev: Event) => void): void ;
    on(type: "ProjectionDisplayAvailableChanged", listener: (ev: Event) => void): void ;
    off(type: "ProjectionDisplayAvailableChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UIViewSettings {
    userInteractionMode: UserInteractionMode;
    constructor();

    static getForCurrentView(): UIViewSettings;


  }

  export class AccessibilitySettings {
    highContrast: Boolean;
    highContrastScheme: String;
    constructor();

    addListener(type: "HighContrastChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HighContrastChanged", listener: (ev: Event) => void): void ;
    on(type: "HighContrastChanged", listener: (ev: Event) => void): void ;
    off(type: "HighContrastChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UISettings {
    animationsEnabled: Boolean;
    caretBlinkRate: Number;
    caretBrowsingEnabled: Boolean;
    caretWidth: Number;
    cursorSize: Object;
    doubleClickTime: Number;
    handPreference: HandPreference;
    messageDuration: Number;
    mouseHoverTime: Number;
    scrollBarArrowSize: Object;
    scrollBarSize: Object;
    scrollBarThumbBoxSize: Object;
    textScaleFactor: Number;
    advancedEffectsEnabled: Boolean;
    constructor();

    uIElementColor(desiredElement: UIElementType): Object;

    getColorValue(desiredColor: UIColorType): Object;

    addListener(type: "TextScaleFactorChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TextScaleFactorChanged", listener: (ev: Event) => void): void ;
    on(type: "TextScaleFactorChanged", listener: (ev: Event) => void): void ;
    off(type: "TextScaleFactorChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ColorValuesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ColorValuesChanged", listener: (ev: Event) => void): void ;
    on(type: "ColorValuesChanged", listener: (ev: Event) => void): void ;
    off(type: "ColorValuesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AdvancedEffectsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AdvancedEffectsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "AdvancedEffectsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "AdvancedEffectsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StatusBar {
    foregroundColor: Object;
    backgroundOpacity: Number;
    backgroundColor: Object;
    occludedRect: Object;
    progressIndicator: StatusBarProgressIndicator;
    constructor();

    static getForCurrentView(): StatusBar;


    showAsync(callback: (error: Error) => void): void ;

    hideAsync(callback: (error: Error) => void): void ;

    addListener(type: "Hiding", listener: (ev: Event) => void): void ;
    removeListener(type: "Hiding", listener: (ev: Event) => void): void ;
    on(type: "Hiding", listener: (ev: Event) => void): void ;
    off(type: "Hiding", listener: (ev: Event) => void): void ;
    
    addListener(type: "Showing", listener: (ev: Event) => void): void ;
    removeListener(type: "Showing", listener: (ev: Event) => void): void ;
    on(type: "Showing", listener: (ev: Event) => void): void ;
    off(type: "Showing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StatusBarProgressIndicator {
    text: String;
    progressValue: Number;
    constructor();

    showAsync(callback: (error: Error) => void): void ;

    hideAsync(callback: (error: Error) => void): void ;

  }

  export class ApplicationViewScaling {
    static disableLayoutScaling: Boolean;
    constructor();

    static trySetDisableLayoutScaling(disableLayoutScaling: Boolean): Boolean;


  }

export * as core from "./ui.viewmanagement.core.js";