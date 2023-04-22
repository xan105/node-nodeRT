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
    static terminateAppOnFinalViewClose: boolean;
    static preferredLaunchWindowingMode: ApplicationViewWindowingMode;
    static preferredLaunchViewSize: Object;
    isScreenCaptureEnabled: boolean;
    title: string;
    adjacentToLeftDisplayEdge: boolean;
    adjacentToRightDisplayEdge: boolean;
    id: number;
    isFullScreen: boolean;
    isOnLockScreen: boolean;
    orientation: ApplicationViewOrientation;
    suppressSystemOverlays: boolean;
    desiredBoundsMode: ApplicationViewBoundsMode;
    visibleBounds: Object;
    fullScreenSystemOverlayMode: FullScreenSystemOverlayMode;
    isFullScreenMode: boolean;
    titleBar: ApplicationViewTitleBar;
    viewMode: ApplicationViewMode;
    constructor();

    static tryUnsnapToFullscreen(): boolean;


    static getApplicationViewIdForWindow(window: Object): number;


    static getForCurrentView(): ApplicationView;


    static tryUnsnap(): boolean;


    tryEnterViewModeAsync(viewMode: ApplicationViewMode, callback: (error: Error, result: boolean) => void): void ;
    tryEnterViewModeAsync(viewMode: ApplicationViewMode, viewModePreferences: ViewModePreferences, callback: (error: Error, result: boolean) => void): void ;

    tryConsolidateAsync(callback: (error: Error, result: boolean) => void): void ;

    setDesiredBoundsMode(boundsMode: ApplicationViewBoundsMode): boolean;

    tryEnterFullScreenMode(): boolean;

    exitFullScreenMode(): void;

    showStandardSystemOverlays(): void;

    tryResizeView(value: Object): boolean;

    setPreferredMinSize(minSize: Object): void;

    isViewModeSupported(viewMode: ApplicationViewMode): boolean;

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
    isUserInitiated: boolean;
    isAppInitiated: boolean;
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

    static tryShowAsViewModeAsync(viewId: number, viewMode: ApplicationViewMode, callback: (error: Error, result: boolean) => void): void ;
    static tryShowAsViewModeAsync(viewId: number, viewMode: ApplicationViewMode, viewModePreferences: ViewModePreferences, callback: (error: Error, result: boolean) => void): void ;


    static tryShowAsStandaloneAsync(viewId: number, callback: (error: Error, result: boolean) => void): void ;
    static tryShowAsStandaloneAsync(viewId: number, sizePreference: ViewSizePreference, callback: (error: Error, result: boolean) => void): void ;
    static tryShowAsStandaloneAsync(viewId: number, sizePreference: ViewSizePreference, anchorViewId: number, anchorSizePreference: ViewSizePreference, callback: (error: Error, result: boolean) => void): void ;


    static switchAsync(viewId: number, callback: (error: Error) => void): void ;
    static switchAsync(toViewId: number, fromViewId: number, callback: (error: Error) => void): void ;
    static switchAsync(toViewId: number, fromViewId: number, options: ApplicationViewSwitchingOptions, callback: (error: Error) => void): void ;


    static prepareForCustomAnimatedSwitchAsync(toViewId: number, fromViewId: number, options: ApplicationViewSwitchingOptions, callback: (error: Error, result: boolean) => void): void ;


    static disableSystemViewActivationPolicy(): void;


    static disableShowingMainViewOnActivation(): void;


  }

  export class ActivationViewSwitcher {
    constructor();

    showAsStandaloneAsync(viewId: number, callback: (error: Error) => void): void ;
    showAsStandaloneAsync(viewId: number, sizePreference: ViewSizePreference, callback: (error: Error) => void): void ;

    isViewPresentedOnActivationVirtualDesktop(viewId: number): boolean;

  }

  export class ApplicationViewTransferContext {
    static dataPackageFormatId: string;
    viewId: number;
    constructor();

  }

  export class InputPaneVisibilityEventArgs {
    ensuredFocusedElementInView: boolean;
    occludedRect: Object;
    constructor();

  }

  export class InputPane {
    occludedRect: Object;
    visible: boolean;
    constructor();

    static getForCurrentView(): InputPane;


    tryShow(): boolean;

    tryHide(): boolean;

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
    static projectionDisplayAvailable: boolean;
    constructor();

    static startProjectingAsync(projectionViewId: number, anchorViewId: number, displayDeviceInfo: Object, callback: (error: Error) => void): void ;
    static startProjectingAsync(projectionViewId: number, anchorViewId: number, callback: (error: Error) => void): void ;


    static requestStartProjectingAsync(projectionViewId: number, anchorViewId: number, selection: Object, callback: (error: Error, result: boolean) => void): void ;
    static requestStartProjectingAsync(projectionViewId: number, anchorViewId: number, selection: Object, prefferedPlacement: number, callback: (error: Error, result: boolean) => void): void ;


    static swapDisplaysForViewsAsync(projectionViewId: number, anchorViewId: number, callback: (error: Error) => void): void ;


    static stopProjectingAsync(projectionViewId: number, anchorViewId: number, callback: (error: Error) => void): void ;


    static getDeviceSelector(): string;


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
    highContrast: boolean;
    highContrastScheme: string;
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
    animationsEnabled: boolean;
    caretBlinkRate: number;
    caretBrowsingEnabled: boolean;
    caretWidth: number;
    cursorSize: Object;
    doubleClickTime: number;
    handPreference: HandPreference;
    messageDuration: number;
    mouseHoverTime: number;
    scrollBarArrowSize: Object;
    scrollBarSize: Object;
    scrollBarThumbBoxSize: Object;
    textScaleFactor: number;
    advancedEffectsEnabled: boolean;
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
    backgroundOpacity: number;
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
    text: string;
    progressValue: number;
    constructor();

    showAsync(callback: (error: Error) => void): void ;

    hideAsync(callback: (error: Error) => void): void ;

  }

  export class ApplicationViewScaling {
    static disableLayoutScaling: boolean;
    constructor();

    static trySetDisableLayoutScaling(disableLayoutScaling: boolean): boolean;


  }

export * as core from "./ui.viewmanagement.core.js";