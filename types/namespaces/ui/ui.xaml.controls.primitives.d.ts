  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class Thickness {
    constructor();
  }

  export class GridLength {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class FontWeight {
    weight: number;
    constructor();
  }

  export class CornerRadius {
    constructor();
  }

  export class Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum GeneratorDirection {
    forward,
    backward,
  }

  export enum GroupHeaderPlacement {
    top,
    left,
  }

  export enum PlacementMode {
    bottom,
    left,
    mouse,
    right,
    top,
  }

  export enum ScrollEventType {
    smallDecrement,
    smallIncrement,
    largeDecrement,
    largeIncrement,
    thumbPosition,
    thumbTrack,
    first,
    last,
    endScroll,
  }

  export enum ScrollingIndicatorMode {
    none,
    touchIndicator,
    mouseIndicator,
  }

  export enum SliderSnapsTo {
    stepValues,
    ticks,
  }

  export enum SnapPointsAlignment {
    near,
    center,
    far,
  }

  export enum TickPlacement {
    none,
    topLeft,
    bottomRight,
    outside,
    inline,
  }

  export enum ListViewItemPresenterCheckMode {
    inline,
    overlay,
  }

  export enum AnimationDirection {
    left,
    top,
    right,
    bottom,
  }

  export enum ComponentResourceLocation {
    application,
    nested,
  }

  export enum EdgeTransitionLocation {
    left,
    top,
    right,
    bottom,
  }

  export enum FlyoutPlacementMode {
    top,
    bottom,
    left,
    right,
    full,
  }

  export class ItemsChangedEventArgs {
    action: number;
    itemCount: number;
    itemUICount: number;
    oldPosition: GeneratorPosition;
    position: GeneratorPosition;
    constructor();

  }

  export class IScrollSnapPointsInfo {
    areHorizontalSnapPointsRegular: boolean;
    areVerticalSnapPointsRegular: boolean;
    constructor();

    getIrregularSnapPoints(orientation: number, alignment: SnapPointsAlignment): Object;

    getRegularSnapPoints(orientation: number, alignment: SnapPointsAlignment, offset: number): number;

    addListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LayoutInformation {
    constructor();

    static getAvailableSize(element: Object): Object;


    static getLayoutExceptionElement(dispatcher: Object): Object;


    static getLayoutSlot(element: Object): Object;


  }

  export class ProgressRingTemplateSettings {
    ellipseDiameter: number;
    ellipseOffset: Thickness;
    maxSideLength: number;
    dispatcher: Object;
    constructor();

  }

  export class ToggleSwitchTemplateSettings {
    curtainCurrentToOffOffset: number;
    curtainCurrentToOnOffset: number;
    curtainOffToOnOffset: number;
    curtainOnToOffOffset: number;
    knobCurrentToOffOffset: number;
    knobCurrentToOnOffset: number;
    knobOffToOnOffset: number;
    knobOnToOffOffset: number;
    dispatcher: Object;
    constructor();

  }

  export class ProgressBarTemplateSettings {
    containerAnimationEndPosition: number;
    containerAnimationStartPosition: number;
    ellipseAnimationEndPosition: number;
    ellipseAnimationWellPosition: number;
    ellipseDiameter: number;
    ellipseOffset: number;
    indicatorLengthDelta: number;
    dispatcher: Object;
    constructor();

  }

  export class SettingsFlyoutTemplateSettings {
    borderBrush: Object;
    borderThickness: Thickness;
    contentTransitions: Object;
    headerBackground: Object;
    headerForeground: Object;
    iconSource: Object;
    dispatcher: Object;
    constructor();

  }

  export class ToolTipTemplateSettings {
    fromHorizontalOffset: number;
    fromVerticalOffset: number;
    dispatcher: Object;
    constructor();

  }

  export class ComboBoxTemplateSettings {
    dropDownClosedHeight: number;
    dropDownOffset: number;
    dropDownOpenedHeight: number;
    selectedItemDirection: AnimationDirection;
    dropDownContentMinWidth: number;
    dispatcher: Object;
    constructor();

  }

  export class GridViewItemTemplateSettings {
    dragItemsCount: number;
    dispatcher: Object;
    constructor();

  }

  export class ListViewItemTemplateSettings {
    dragItemsCount: number;
    dispatcher: Object;
    constructor();

  }

  export class MenuFlyoutPresenterTemplateSettings {
    flyoutContentMinWidth: number;
    dispatcher: Object;
    constructor();

  }

  export class CalendarViewTemplateSettings {
    centerX: number;
    centerY: number;
    clipRect: Object;
    hasMoreContentAfter: boolean;
    hasMoreContentBefore: boolean;
    hasMoreViews: boolean;
    headerText: string;
    minViewWidth: number;
    weekDay1: string;
    weekDay2: string;
    weekDay3: string;
    weekDay4: string;
    weekDay5: string;
    weekDay6: string;
    weekDay7: string;
    dispatcher: Object;
    constructor();

  }

  export class SplitViewTemplateSettings {
    compactPaneGridLength: GridLength;
    negativeOpenPaneLength: number;
    negativeOpenPaneLengthMinusCompactLength: number;
    openPaneGridLength: GridLength;
    openPaneLength: number;
    openPaneLengthMinusCompactLength: number;
    dispatcher: Object;
    constructor();

  }

  export class AppBarTemplateSettings {
    clipRect: Object;
    compactRootMargin: Thickness;
    compactVerticalDelta: number;
    hiddenRootMargin: Thickness;
    hiddenVerticalDelta: number;
    minimalRootMargin: Thickness;
    minimalVerticalDelta: number;
    dispatcher: Object;
    constructor();

  }

  export class MenuFlyoutItemTemplateSettings {
    keyboardAcceleratorTextMinWidth: number;
    dispatcher: Object;
    constructor();

  }

  export class CommandBarTemplateSettings {
    contentHeight: number;
    negativeOverflowContentHeight: number;
    overflowContentClipRect: Object;
    overflowContentHeight: number;
    overflowContentHorizontalOffset: number;
    overflowContentMaxHeight: number;
    overflowContentMinWidth: number;
    overflowContentMaxWidth: number;
    effectiveOverflowButtonVisibility: number;
    dispatcher: Object;
    constructor();

  }

  export class AppBarButtonTemplateSettings {
    keyboardAcceleratorTextMinWidth: number;
    dispatcher: Object;
    constructor();

  }

  export class AppBarToggleButtonTemplateSettings {
    keyboardAcceleratorTextMinWidth: number;
    dispatcher: Object;
    constructor();

  }

  export class DragCompletedEventArgs {
    canceled: boolean;
    horizontalChange: number;
    verticalChange: number;
    originalSource: Object;
    constructor();
    constructor(horizontalChange: number, verticalChange: number, canceled: boolean);

  }

  export class DragDeltaEventArgs {
    horizontalChange: number;
    verticalChange: number;
    originalSource: Object;
    constructor();
    constructor(horizontalChange: number, verticalChange: number);

  }

  export class DragStartedEventArgs {
    horizontalOffset: number;
    verticalOffset: number;
    originalSource: Object;
    constructor();
    constructor(horizontalOffset: number, verticalOffset: number);

  }

  export class RangeBaseValueChangedEventArgs {
    newValue: number;
    oldValue: number;
    originalSource: Object;
    constructor();

  }

  export class ScrollEventArgs {
    newValue: number;
    scrollEventType: ScrollEventType;
    originalSource: Object;
    constructor();

  }

  export class Popup {
    static childProperty: Object;
    static childTransitionsProperty: Object;
    static horizontalOffsetProperty: Object;
    static isLightDismissEnabledProperty: Object;
    static isOpenProperty: Object;
    static verticalOffsetProperty: Object;
    static lightDismissOverlayModeProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    verticalOffset: number;
    isOpen: boolean;
    isLightDismissEnabled: boolean;
    horizontalOffset: number;
    childTransitions: Object;
    child: Object;
    lightDismissOverlayMode: number;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Opened", listener: (ev: Event) => void): void ;
    removeListener(type: "Opened", listener: (ev: Event) => void): void ;
    on(type: "Opened", listener: (ev: Event) => void): void ;
    off(type: "Opened", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TickBar {
    static fillProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    fill: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CarouselPanel {
    static backgroundProperty: Object;
    static childrenTransitionsProperty: Object;
    static isItemsHostProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    canVerticallyScroll: boolean;
    canHorizontallyScroll: boolean;
    scrollOwner: Object;
    extentHeight: number;
    extentWidth: number;
    horizontalOffset: number;
    verticalOffset: number;
    viewportHeight: number;
    viewportWidth: number;
    areHorizontalSnapPointsRegular: boolean;
    areVerticalSnapPointsRegular: boolean;
    itemContainerGenerator: Object;
    childrenTransitions: Object;
    background: Object;
    children: Object;
    isItemsHost: boolean;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    lineUp(): void;

    lineDown(): void;

    lineLeft(): void;

    lineRight(): void;

    pageUp(): void;

    pageDown(): void;

    pageLeft(): void;

    pageRight(): void;

    mouseWheelUp(): void;

    mouseWheelDown(): void;

    mouseWheelLeft(): void;

    mouseWheelRight(): void;

    setHorizontalOffset(offset: number): void;

    setVerticalOffset(offset: number): void;

    makeVisible(visual: Object, rectangle: Object): Object;

    getIrregularSnapPoints(orientation: number, alignment: SnapPointsAlignment): Object;

    getRegularSnapPoints(orientation: number, alignment: SnapPointsAlignment, offset: number): number;

    addListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class OrientedVirtualizingPanel {
    static backgroundProperty: Object;
    static childrenTransitionsProperty: Object;
    static isItemsHostProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    canVerticallyScroll: boolean;
    canHorizontallyScroll: boolean;
    scrollOwner: Object;
    extentHeight: number;
    extentWidth: number;
    horizontalOffset: number;
    verticalOffset: number;
    viewportHeight: number;
    viewportWidth: number;
    areHorizontalSnapPointsRegular: boolean;
    areVerticalSnapPointsRegular: boolean;
    itemContainerGenerator: Object;
    childrenTransitions: Object;
    background: Object;
    children: Object;
    isItemsHost: boolean;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    lineUp(): void;

    lineDown(): void;

    lineLeft(): void;

    lineRight(): void;

    pageUp(): void;

    pageDown(): void;

    pageLeft(): void;

    pageRight(): void;

    mouseWheelUp(): void;

    mouseWheelDown(): void;

    mouseWheelLeft(): void;

    mouseWheelRight(): void;

    setHorizontalOffset(offset: number): void;

    setVerticalOffset(offset: number): void;

    makeVisible(visual: Object, rectangle: Object): Object;

    getIrregularSnapPoints(orientation: number, alignment: SnapPointsAlignment): Object;

    getRegularSnapPoints(orientation: number, alignment: SnapPointsAlignment, offset: number): number;

    getInsertionIndexes(position: Object, first: number, second: number): void;

    addListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CalendarPanel {
    static backgroundProperty: Object;
    static childrenTransitionsProperty: Object;
    static isItemsHostProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    childrenTransitions: Object;
    background: Object;
    children: Object;
    isItemsHost: boolean;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GridViewItemPresenter {
    static checkBrushProperty: Object;
    static checkHintBrushProperty: Object;
    static checkSelectingBrushProperty: Object;
    static contentMarginProperty: Object;
    static disabledOpacityProperty: Object;
    static dragBackgroundProperty: Object;
    static dragForegroundProperty: Object;
    static dragOpacityProperty: Object;
    static focusBorderBrushProperty: Object;
    static gridViewItemPresenterHorizontalContentAlignmentProperty: Object;
    static gridViewItemPresenterPaddingProperty: Object;
    static gridViewItemPresenterVerticalContentAlignmentProperty: Object;
    static placeholderBackgroundProperty: Object;
    static pointerOverBackgroundMarginProperty: Object;
    static pointerOverBackgroundProperty: Object;
    static reorderHintOffsetProperty: Object;
    static selectedBackgroundProperty: Object;
    static selectedBorderThicknessProperty: Object;
    static selectedForegroundProperty: Object;
    static selectedPointerOverBackgroundProperty: Object;
    static selectedPointerOverBorderBrushProperty: Object;
    static selectionCheckMarkVisualEnabledProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static fontFamilyProperty: Object;
    static contentProperty: Object;
    static contentTransitionsProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTemplateProperty: Object;
    static characterSpacingProperty: Object;
    static opticalMarginAlignmentProperty: Object;
    static textLineBoundsProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static lineStackingStrategyProperty: Object;
    static textWrappingProperty: Object;
    static paddingProperty: Object;
    static maxLinesProperty: Object;
    static lineHeightProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static cornerRadiusProperty: Object;
    static borderThicknessProperty: Object;
    static borderBrushProperty: Object;
    static backgroundProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    disabledOpacity: number;
    contentMargin: Thickness;
    checkHintBrush: Object;
    checkBrush: Object;
    gridViewItemPresenterPadding: Thickness;
    gridViewItemPresenterHorizontalContentAlignment: number;
    focusBorderBrush: Object;
    pointerOverBackground: Object;
    dragOpacity: number;
    dragForeground: Object;
    dragBackground: Object;
    selectedPointerOverBorderBrush: Object;
    selectedPointerOverBackground: Object;
    checkSelectingBrush: Object;
    selectedForeground: Object;
    selectedBorderThickness: Thickness;
    selectedBackground: Object;
    selectionCheckMarkVisualEnabled: boolean;
    reorderHintOffset: number;
    pointerOverBackgroundMargin: Thickness;
    placeholderBackground: Object;
    gridViewItemPresenterVerticalContentAlignment: number;
    fontFamily: Object;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    characterSpacing: number;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: number;
    fontStretch: number;
    fontSize: number;
    opticalMarginAlignment: number;
    textLineBounds: number;
    isTextScaleFactorEnabled: boolean;
    cornerRadius: CornerRadius;
    borderThickness: Thickness;
    borderBrush: Object;
    background: Object;
    horizontalContentAlignment: number;
    verticalContentAlignment: number;
    textWrapping: number;
    padding: Thickness;
    maxLines: number;
    lineStackingStrategy: number;
    lineHeight: number;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ListViewItemPresenter {
    static checkBrushProperty: Object;
    static checkHintBrushProperty: Object;
    static checkSelectingBrushProperty: Object;
    static contentMarginProperty: Object;
    static disabledOpacityProperty: Object;
    static dragBackgroundProperty: Object;
    static dragForegroundProperty: Object;
    static dragOpacityProperty: Object;
    static focusBorderBrushProperty: Object;
    static listViewItemPresenterPaddingProperty: Object;
    static listViewItemPresenterVerticalContentAlignmentProperty: Object;
    static placeholderBackgroundProperty: Object;
    static pointerOverBackgroundMarginProperty: Object;
    static pointerOverBackgroundProperty: Object;
    static reorderHintOffsetProperty: Object;
    static selectedBackgroundProperty: Object;
    static selectedBorderThicknessProperty: Object;
    static selectedForegroundProperty: Object;
    static selectedPointerOverBackgroundProperty: Object;
    static selectedPointerOverBorderBrushProperty: Object;
    static selectionCheckMarkVisualEnabledProperty: Object;
    static listViewItemPresenterHorizontalContentAlignmentProperty: Object;
    static checkModeProperty: Object;
    static focusSecondaryBorderBrushProperty: Object;
    static pointerOverForegroundProperty: Object;
    static pressedBackgroundProperty: Object;
    static selectedPressedBackgroundProperty: Object;
    static checkBoxBrushProperty: Object;
    static revealBackgroundProperty: Object;
    static revealBackgroundShowsAboveContentProperty: Object;
    static revealBorderBrushProperty: Object;
    static revealBorderThicknessProperty: Object;
    static foregroundProperty: Object;
    static fontWeightProperty: Object;
    static fontStyleProperty: Object;
    static fontStretchProperty: Object;
    static fontSizeProperty: Object;
    static fontFamilyProperty: Object;
    static contentProperty: Object;
    static contentTransitionsProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTemplateProperty: Object;
    static characterSpacingProperty: Object;
    static opticalMarginAlignmentProperty: Object;
    static textLineBoundsProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static lineStackingStrategyProperty: Object;
    static textWrappingProperty: Object;
    static paddingProperty: Object;
    static maxLinesProperty: Object;
    static lineHeightProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static cornerRadiusProperty: Object;
    static borderThicknessProperty: Object;
    static borderBrushProperty: Object;
    static backgroundProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    dragOpacity: number;
    dragForeground: Object;
    dragBackground: Object;
    disabledOpacity: number;
    contentMargin: Thickness;
    checkSelectingBrush: Object;
    pointerOverBackground: Object;
    checkHintBrush: Object;
    checkBrush: Object;
    listViewItemPresenterVerticalContentAlignment: number;
    pointerOverBackgroundMargin: Thickness;
    placeholderBackground: Object;
    reorderHintOffset: number;
    listViewItemPresenterPadding: Thickness;
    listViewItemPresenterHorizontalContentAlignment: number;
    focusBorderBrush: Object;
    selectionCheckMarkVisualEnabled: boolean;
    selectedPointerOverBorderBrush: Object;
    selectedForeground: Object;
    selectedBorderThickness: Thickness;
    selectedBackground: Object;
    selectedPointerOverBackground: Object;
    selectedPressedBackground: Object;
    checkBoxBrush: Object;
    pointerOverForeground: Object;
    checkMode: ListViewItemPresenterCheckMode;
    pressedBackground: Object;
    focusSecondaryBorderBrush: Object;
    revealBorderBrush: Object;
    revealBackgroundShowsAboveContent: boolean;
    revealBackground: Object;
    revealBorderThickness: Thickness;
    fontFamily: Object;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    characterSpacing: number;
    foreground: Object;
    fontWeight: FontWeight;
    fontStyle: number;
    fontStretch: number;
    fontSize: number;
    opticalMarginAlignment: number;
    textLineBounds: number;
    isTextScaleFactorEnabled: boolean;
    cornerRadius: CornerRadius;
    borderThickness: Thickness;
    borderBrush: Object;
    background: Object;
    horizontalContentAlignment: number;
    verticalContentAlignment: number;
    textWrapping: number;
    padding: Thickness;
    maxLines: number;
    lineStackingStrategy: number;
    lineHeight: number;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ColorSpectrum {
    static colorProperty: Object;
    static componentsProperty: Object;
    static hsvColorProperty: Object;
    static maxHueProperty: Object;
    static maxSaturationProperty: Object;
    static maxValueProperty: Object;
    static minHueProperty: Object;
    static minSaturationProperty: Object;
    static minValueProperty: Object;
    static shapeProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    shape: number;
    minValue: number;
    minSaturation: number;
    minHue: number;
    maxValue: number;
    maxSaturation: number;
    maxHue: number;
    hsvColor: Vector4;
    components: number;
    color: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "ColorChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ColorChanged", listener: (ev: Event) => void): void ;
    on(type: "ColorChanged", listener: (ev: Event) => void): void ;
    off(type: "ColorChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SelectorItem {
    static isSelectedProperty: Object;
    static contentProperty: Object;
    static contentTemplateProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTransitionsProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    isSelected: boolean;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    contentTemplateRoot: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RangeBase {
    static largeChangeProperty: Object;
    static maximumProperty: Object;
    static minimumProperty: Object;
    static smallChangeProperty: Object;
    static valueProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    value: number;
    smallChange: number;
    minimum: number;
    maximum: number;
    largeChange: number;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    onMinimumChanged(oldMinimum: number, newMinimum: number): void;

    onMaximumChanged(oldMaximum: number, newMaximum: number): void;

    onValueChanged(oldValue: number, newValue: number): void;

    addListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    on(type: "ValueChanged", listener: (ev: Event) => void): void ;
    off(type: "ValueChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ColorPickerSlider {
    static colorChannelProperty: Object;
    static orientationProperty: Object;
    static snapsToProperty: Object;
    static stepFrequencyProperty: Object;
    static thumbToolTipValueConverterProperty: Object;
    static tickFrequencyProperty: Object;
    static tickPlacementProperty: Object;
    static intermediateValueProperty: Object;
    static isDirectionReversedProperty: Object;
    static isThumbToolTipEnabledProperty: Object;
    static headerProperty: Object;
    static headerTemplateProperty: Object;
    static largeChangeProperty: Object;
    static maximumProperty: Object;
    static minimumProperty: Object;
    static smallChangeProperty: Object;
    static valueProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    colorChannel: number;
    snapsTo: SliderSnapsTo;
    orientation: number;
    isThumbToolTipEnabled: boolean;
    isDirectionReversed: boolean;
    intermediateValue: number;
    tickPlacement: TickPlacement;
    tickFrequency: number;
    thumbToolTipValueConverter: Object;
    stepFrequency: number;
    headerTemplate: Object;
    header: Object;
    value: number;
    smallChange: number;
    minimum: number;
    maximum: number;
    largeChange: number;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    on(type: "ValueChanged", listener: (ev: Event) => void): void ;
    off(type: "ValueChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Thumb {
    static isDraggingProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    isDragging: boolean;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    cancelDrag(): void;

    addListener(type: "DragCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DragCompleted", listener: (ev: Event) => void): void ;
    on(type: "DragCompleted", listener: (ev: Event) => void): void ;
    off(type: "DragCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "DragDelta", listener: (ev: Event) => void): void ;
    on(type: "DragDelta", listener: (ev: Event) => void): void ;
    off(type: "DragDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarted", listener: (ev: Event) => void): void ;
    on(type: "DragStarted", listener: (ev: Event) => void): void ;
    off(type: "DragStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ButtonBase {
    static clickModeProperty: Object;
    static commandParameterProperty: Object;
    static commandProperty: Object;
    static isPointerOverProperty: Object;
    static isPressedProperty: Object;
    static contentProperty: Object;
    static contentTemplateProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTransitionsProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    commandParameter: Object;
    command: Object;
    clickMode: number;
    isPointerOver: boolean;
    isPressed: boolean;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    contentTemplateRoot: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "Click", listener: (ev: Event) => void): void ;
    removeListener(type: "Click", listener: (ev: Event) => void): void ;
    on(type: "Click", listener: (ev: Event) => void): void ;
    off(type: "Click", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ScrollBar {
    static indicatorModeProperty: Object;
    static orientationProperty: Object;
    static viewportSizeProperty: Object;
    static largeChangeProperty: Object;
    static maximumProperty: Object;
    static minimumProperty: Object;
    static smallChangeProperty: Object;
    static valueProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    viewportSize: number;
    orientation: number;
    indicatorMode: ScrollingIndicatorMode;
    value: number;
    smallChange: number;
    minimum: number;
    maximum: number;
    largeChange: number;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "Scroll", listener: (ev: Event) => void): void ;
    removeListener(type: "Scroll", listener: (ev: Event) => void): void ;
    on(type: "Scroll", listener: (ev: Event) => void): void ;
    off(type: "Scroll", listener: (ev: Event) => void): void ;
    
    addListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ValueChanged", listener: (ev: Event) => void): void ;
    on(type: "ValueChanged", listener: (ev: Event) => void): void ;
    off(type: "ValueChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Selector {
    static isSynchronizedWithCurrentItemProperty: Object;
    static selectedIndexProperty: Object;
    static selectedItemProperty: Object;
    static selectedValuePathProperty: Object;
    static selectedValueProperty: Object;
    static displayMemberPathProperty: Object;
    static groupStyleSelectorProperty: Object;
    static isGroupingProperty: Object;
    static itemContainerStyleProperty: Object;
    static itemContainerStyleSelectorProperty: Object;
    static itemContainerTransitionsProperty: Object;
    static itemTemplateProperty: Object;
    static itemTemplateSelectorProperty: Object;
    static itemsPanelProperty: Object;
    static itemsSourceProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    selectedValuePath: string;
    selectedValue: Object;
    selectedItem: Object;
    selectedIndex: number;
    isSynchronizedWithCurrentItem: boolean;
    itemsSource: Object;
    itemsPanel: Object;
    itemTemplateSelector: Object;
    itemContainerTransitions: Object;
    itemContainerStyle: Object;
    itemTemplate: Object;
    groupStyleSelector: Object;
    itemContainerStyleSelector: Object;
    displayMemberPath: string;
    itemContainerGenerator: Object;
    groupStyle: Object;
    items: Object;
    isGrouping: boolean;
    itemsPanelRoot: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    static getIsSelectionActive(element: Object): boolean;


    addListener(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    on(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    off(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RepeatButton {
    static delayProperty: Object;
    static intervalProperty: Object;
    static clickModeProperty: Object;
    static commandParameterProperty: Object;
    static commandProperty: Object;
    static isPointerOverProperty: Object;
    static isPressedProperty: Object;
    static contentProperty: Object;
    static contentTemplateProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTransitionsProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    interval: number;
    delay: number;
    commandParameter: Object;
    command: Object;
    clickMode: number;
    isPointerOver: boolean;
    isPressed: boolean;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    contentTemplateRoot: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "Click", listener: (ev: Event) => void): void ;
    removeListener(type: "Click", listener: (ev: Event) => void): void ;
    on(type: "Click", listener: (ev: Event) => void): void ;
    off(type: "Click", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ToggleButton {
    static isCheckedProperty: Object;
    static isThreeStateProperty: Object;
    static clickModeProperty: Object;
    static commandParameterProperty: Object;
    static commandProperty: Object;
    static isPointerOverProperty: Object;
    static isPressedProperty: Object;
    static contentProperty: Object;
    static contentTemplateProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTransitionsProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    isThreeState: boolean;
    isChecked: boolean;
    commandParameter: Object;
    command: Object;
    clickMode: number;
    isPointerOver: boolean;
    isPressed: boolean;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    contentTemplateRoot: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    onToggle(): void;

    addListener(type: "Checked", listener: (ev: Event) => void): void ;
    removeListener(type: "Checked", listener: (ev: Event) => void): void ;
    on(type: "Checked", listener: (ev: Event) => void): void ;
    off(type: "Checked", listener: (ev: Event) => void): void ;
    
    addListener(type: "Indeterminate", listener: (ev: Event) => void): void ;
    removeListener(type: "Indeterminate", listener: (ev: Event) => void): void ;
    on(type: "Indeterminate", listener: (ev: Event) => void): void ;
    off(type: "Indeterminate", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unchecked", listener: (ev: Event) => void): void ;
    removeListener(type: "Unchecked", listener: (ev: Event) => void): void ;
    on(type: "Unchecked", listener: (ev: Event) => void): void ;
    off(type: "Unchecked", listener: (ev: Event) => void): void ;
    
    addListener(type: "Click", listener: (ev: Event) => void): void ;
    removeListener(type: "Click", listener: (ev: Event) => void): void ;
    on(type: "Click", listener: (ev: Event) => void): void ;
    off(type: "Click", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FlyoutBaseClosingEventArgs {
    cancel: boolean;
    constructor();

  }

  export class FlyoutBase {
    static attachedFlyoutProperty: Object;
    static placementProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static elementSoundModeProperty: Object;
    static lightDismissOverlayModeProperty: Object;
    static overlayInputPassThroughElementProperty: Object;
    placement: FlyoutPlacementMode;
    lightDismissOverlayMode: number;
    elementSoundMode: number;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    target: Object;
    overlayInputPassThroughElement: Object;
    dispatcher: Object;
    constructor();

    static getAttachedFlyout(element: Object): FlyoutBase;


    static setAttachedFlyout(element: Object, value: FlyoutBase): void;


    static showAttachedFlyout(flyoutOwner: Object): void;


    showAt(placementTarget: Object): void;

    hide(): void;

    createPresenter(): Object;

    tryInvokeKeyboardAccelerator(args: Object): void;

    onProcessKeyboardAccelerators(args: Object): void;

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Opened", listener: (ev: Event) => void): void ;
    removeListener(type: "Opened", listener: (ev: Event) => void): void ;
    on(type: "Opened", listener: (ev: Event) => void): void ;
    off(type: "Opened", listener: (ev: Event) => void): void ;
    
    addListener(type: "Opening", listener: (ev: Event) => void): void ;
    removeListener(type: "Opening", listener: (ev: Event) => void): void ;
    on(type: "Opening", listener: (ev: Event) => void): void ;
    off(type: "Opening", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closing", listener: (ev: Event) => void): void ;
    removeListener(type: "Closing", listener: (ev: Event) => void): void ;
    on(type: "Closing", listener: (ev: Event) => void): void ;
    off(type: "Closing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class JumpListItemBackgroundConverter {
    static disabledProperty: Object;
    static enabledProperty: Object;
    enabled: Object;
    disabled: Object;
    dispatcher: Object;
    constructor();

    convert(value: Object, targetType: Object, parameter: Object, language: string): Object;

    convertBack(value: Object, targetType: Object, parameter: Object, language: string): Object;

  }

  export class JumpListItemForegroundConverter {
    static disabledProperty: Object;
    static enabledProperty: Object;
    enabled: Object;
    disabled: Object;
    dispatcher: Object;
    constructor();

    convert(value: Object, targetType: Object, parameter: Object, language: string): Object;

    convertBack(value: Object, targetType: Object, parameter: Object, language: string): Object;

  }

  export class PickerFlyoutBase {
    static titleProperty: Object;
    static attachedFlyoutProperty: Object;
    static placementProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static elementSoundModeProperty: Object;
    static lightDismissOverlayModeProperty: Object;
    static overlayInputPassThroughElementProperty: Object;
    placement: FlyoutPlacementMode;
    lightDismissOverlayMode: number;
    elementSoundMode: number;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    target: Object;
    overlayInputPassThroughElement: Object;
    dispatcher: Object;
    constructor();

    static getTitle(element: Object): string;


    static setTitle(element: Object, value: string): void;


    onConfirmed(): void;

    shouldShowConfirmationButtons(): boolean;

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Opened", listener: (ev: Event) => void): void ;
    removeListener(type: "Opened", listener: (ev: Event) => void): void ;
    on(type: "Opened", listener: (ev: Event) => void): void ;
    off(type: "Opened", listener: (ev: Event) => void): void ;
    
    addListener(type: "Opening", listener: (ev: Event) => void): void ;
    removeListener(type: "Opening", listener: (ev: Event) => void): void ;
    on(type: "Opening", listener: (ev: Event) => void): void ;
    off(type: "Opening", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closing", listener: (ev: Event) => void): void ;
    removeListener(type: "Closing", listener: (ev: Event) => void): void ;
    on(type: "Closing", listener: (ev: Event) => void): void ;
    off(type: "Closing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LoopingSelector {
    static itemHeightProperty: Object;
    static itemTemplateProperty: Object;
    static itemWidthProperty: Object;
    static itemsProperty: Object;
    static selectedIndexProperty: Object;
    static selectedItemProperty: Object;
    static shouldLoopProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    shouldLoop: boolean;
    selectedItem: Object;
    selectedIndex: number;
    items: Object;
    itemWidth: number;
    itemTemplate: Object;
    itemHeight: number;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    on(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    off(type: "SelectionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PivotPanel {
    static backgroundProperty: Object;
    static childrenTransitionsProperty: Object;
    static isItemsHostProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    areHorizontalSnapPointsRegular: boolean;
    areVerticalSnapPointsRegular: boolean;
    childrenTransitions: Object;
    background: Object;
    children: Object;
    isItemsHost: boolean;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    getIrregularSnapPoints(orientation: number, alignment: SnapPointsAlignment): Object;

    getRegularSnapPoints(orientation: number, alignment: SnapPointsAlignment, offset: number): number;

    addListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LoopingSelectorItem {
    static contentProperty: Object;
    static contentTemplateProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTransitionsProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    contentTemplateRoot: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LoopingSelectorPanel {
    static leftProperty: Object;
    static topProperty: Object;
    static zIndexProperty: Object;
    static backgroundProperty: Object;
    static childrenTransitionsProperty: Object;
    static isItemsHostProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    areHorizontalSnapPointsRegular: boolean;
    areVerticalSnapPointsRegular: boolean;
    childrenTransitions: Object;
    background: Object;
    children: Object;
    isItemsHost: boolean;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    getIrregularSnapPoints(orientation: number, alignment: SnapPointsAlignment): Object;

    getRegularSnapPoints(orientation: number, alignment: SnapPointsAlignment, offset: number): number;

    addListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "HorizontalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    on(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    off(type: "VerticalSnapPointsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PivotHeaderItem {
    static contentProperty: Object;
    static contentTemplateProperty: Object;
    static contentTemplateSelectorProperty: Object;
    static contentTransitionsProperty: Object;
    static backgroundProperty: Object;
    static borderBrushProperty: Object;
    static borderThicknessProperty: Object;
    static characterSpacingProperty: Object;
    static defaultStyleKeyProperty: Object;
    static focusStateProperty: Object;
    static fontFamilyProperty: Object;
    static fontStretchProperty: Object;
    static fontStyleProperty: Object;
    static fontWeightProperty: Object;
    static foregroundProperty: Object;
    static horizontalContentAlignmentProperty: Object;
    static isEnabledProperty: Object;
    static isTabStopProperty: Object;
    static paddingProperty: Object;
    static tabIndexProperty: Object;
    static tabNavigationProperty: Object;
    static templateProperty: Object;
    static verticalContentAlignmentProperty: Object;
    static fontSizeProperty: Object;
    static isTextScaleFactorEnabledProperty: Object;
    static isTemplateFocusTargetProperty: Object;
    static useSystemFocusVisualsProperty: Object;
    static elementSoundModeProperty: Object;
    static isFocusEngagedProperty: Object;
    static requiresPointerProperty: Object;
    static xYFocusDownProperty: Object;
    static xYFocusLeftProperty: Object;
    static xYFocusRightProperty: Object;
    static xYFocusUpProperty: Object;
    static isFocusEngagementEnabledProperty: Object;
    static isTemplateKeyTipTargetProperty: Object;
    static defaultStyleResourceUriProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    contentTransitions: Object;
    contentTemplateSelector: Object;
    contentTemplate: Object;
    content: Object;
    contentTemplateRoot: Object;
    fontSize: number;
    fontFamily: Object;
    fontStyle: number;
    padding: Thickness;
    horizontalContentAlignment: number;
    borderThickness: Thickness;
    background: Object;
    foreground: Object;
    isTabStop: boolean;
    isEnabled: boolean;
    borderBrush: Object;
    fontWeight: FontWeight;
    fontStretch: number;
    characterSpacing: number;
    template: Object;
    tabNavigation: number;
    tabIndex: number;
    verticalContentAlignment: number;
    focusState: number;
    isTextScaleFactorEnabled: boolean;
    useSystemFocusVisuals: boolean;
    xYFocusDown: Object;
    xYFocusUp: Object;
    isFocusEngagementEnabled: boolean;
    xYFocusLeft: Object;
    xYFocusRight: Object;
    requiresPointer: number;
    elementSoundMode: number;
    isFocusEngaged: boolean;
    defaultStyleResourceUri: Object;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "IsEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    on(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    off(type: "FocusDisengaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    on(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    off(type: "FocusEngaged", listener: (ev: Event) => void): void ;
    
    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PivotHeaderPanel {
    static leftProperty: Object;
    static topProperty: Object;
    static zIndexProperty: Object;
    static backgroundProperty: Object;
    static childrenTransitionsProperty: Object;
    static isItemsHostProperty: Object;
    static actualHeightProperty: Object;
    static actualWidthProperty: Object;
    static dataContextProperty: Object;
    static flowDirectionProperty: Object;
    static heightProperty: Object;
    static horizontalAlignmentProperty: Object;
    static languageProperty: Object;
    static maxHeightProperty: Object;
    static maxWidthProperty: Object;
    static minHeightProperty: Object;
    static minWidthProperty: Object;
    static nameProperty: Object;
    static styleProperty: Object;
    static tagProperty: Object;
    static verticalAlignmentProperty: Object;
    static widthProperty: Object;
    static marginProperty: Object;
    static requestedThemeProperty: Object;
    static allowFocusOnInteractionProperty: Object;
    static focusVisualMarginProperty: Object;
    static focusVisualPrimaryBrushProperty: Object;
    static focusVisualPrimaryThicknessProperty: Object;
    static focusVisualSecondaryBrushProperty: Object;
    static focusVisualSecondaryThicknessProperty: Object;
    static allowFocusWhenDisabledProperty: Object;
    static actualThemeProperty: Object;
    static allowDropProperty: Object;
    static cacheModeProperty: Object;
    static clipProperty: Object;
    static doubleTappedEvent: Object;
    static dragEnterEvent: Object;
    static dragLeaveEvent: Object;
    static dragOverEvent: Object;
    static dropEvent: Object;
    static holdingEvent: Object;
    static isDoubleTapEnabledProperty: Object;
    static isHitTestVisibleProperty: Object;
    static isHoldingEnabledProperty: Object;
    static isRightTapEnabledProperty: Object;
    static isTapEnabledProperty: Object;
    static keyUpEvent: Object;
    static manipulationCompletedEvent: Object;
    static manipulationDeltaEvent: Object;
    static manipulationInertiaStartingEvent: Object;
    static manipulationModeProperty: Object;
    static manipulationStartedEvent: Object;
    static manipulationStartingEvent: Object;
    static opacityProperty: Object;
    static pointerCanceledEvent: Object;
    static pointerCaptureLostEvent: Object;
    static pointerCapturesProperty: Object;
    static pointerEnteredEvent: Object;
    static pointerExitedEvent: Object;
    static pointerMovedEvent: Object;
    static pointerPressedEvent: Object;
    static pointerReleasedEvent: Object;
    static pointerWheelChangedEvent: Object;
    static projectionProperty: Object;
    static renderTransformOriginProperty: Object;
    static renderTransformProperty: Object;
    static rightTappedEvent: Object;
    static tappedEvent: Object;
    static transitionsProperty: Object;
    static useLayoutRoundingProperty: Object;
    static visibilityProperty: Object;
    static keyDownEvent: Object;
    static compositeModeProperty: Object;
    static transform3DProperty: Object;
    static canDragProperty: Object;
    static isAccessKeyScopeProperty: Object;
    static exitDisplayModeOnAccessKeyInvokedProperty: Object;
    static contextFlyoutProperty: Object;
    static accessKeyScopeOwnerProperty: Object;
    static accessKeyProperty: Object;
    static highContrastAdjustmentProperty: Object;
    static xYFocusRightNavigationStrategyProperty: Object;
    static xYFocusUpNavigationStrategyProperty: Object;
    static keyTipHorizontalOffsetProperty: Object;
    static keyTipPlacementModeProperty: Object;
    static keyTipVerticalOffsetProperty: Object;
    static lightsProperty: Object;
    static tabFocusNavigationProperty: Object;
    static xYFocusDownNavigationStrategyProperty: Object;
    static xYFocusKeyboardNavigationProperty: Object;
    static xYFocusLeftNavigationStrategyProperty: Object;
    static noFocusCandidateFoundEvent: Object;
    static losingFocusEvent: Object;
    static gettingFocusEvent: Object;
    static previewKeyUpEvent: Object;
    static previewKeyDownEvent: Object;
    static characterReceivedEvent: Object;
    static keyboardAcceleratorPlacementTargetProperty: Object;
    static keyboardAcceleratorPlacementModeProperty: Object;
    static keyTipTargetProperty: Object;
    static contextRequestedEvent: Object;
    static bringIntoViewRequestedEvent: Object;
    childrenTransitions: Object;
    background: Object;
    children: Object;
    isItemsHost: boolean;
    flowDirection: number;
    minWidth: number;
    minHeight: number;
    maxWidth: number;
    maxHeight: number;
    margin: Thickness;
    language: string;
    name: string;
    horizontalAlignment: number;
    height: number;
    dataContext: Object;
    resources: Object;
    width: number;
    tag: Object;
    style: Object;
    verticalAlignment: number;
    actualHeight: number;
    actualWidth: number;
    parent: Object;
    baseUri: Object;
    triggers: Object;
    requestedTheme: number;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: boolean;
    allowFocusOnInteraction: boolean;
    actualTheme: number;
    manipulationMode: number;
    isTapEnabled: boolean;
    isRightTapEnabled: boolean;
    isHoldingEnabled: boolean;
    isHitTestVisible: boolean;
    isDoubleTapEnabled: boolean;
    opacity: number;
    cacheMode: Object;
    allowDrop: boolean;
    clip: Object;
    visibility: number;
    useLayoutRounding: boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: number;
    transform3D: Object;
    canDrag: boolean;
    accessKey: string;
    accessKeyScopeOwner: Object;
    exitDisplayModeOnAccessKeyInvoked: boolean;
    contextFlyout: FlyoutBase;
    isAccessKeyScope: boolean;
    xYFocusDownNavigationStrategy: number;
    xYFocusLeftNavigationStrategy: number;
    tabFocusNavigation: number;
    xYFocusKeyboardNavigation: number;
    keyTipVerticalOffset: number;
    keyTipPlacementMode: number;
    keyTipHorizontalOffset: number;
    highContrastAdjustment: number;
    xYFocusUpNavigationStrategy: number;
    xYFocusRightNavigationStrategy: number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: Object;
    keyboardAcceleratorPlacementMode: number;
    keyTipTarget: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    on(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    off(type: "LayoutUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Loaded", listener: (ev: Event) => void): void ;
    on(type: "Loaded", listener: (ev: Event) => void): void ;
    off(type: "Loaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    removeListener(type: "Unloaded", listener: (ev: Event) => void): void ;
    on(type: "Unloaded", listener: (ev: Event) => void): void ;
    off(type: "Unloaded", listener: (ev: Event) => void): void ;
    
    addListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    on(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    off(type: "DataContextChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Loading", listener: (ev: Event) => void): void ;
    removeListener(type: "Loading", listener: (ev: Event) => void): void ;
    on(type: "Loading", listener: (ev: Event) => void): void ;
    off(type: "Loading", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    on(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    off(type: "ActualThemeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    on(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    off(type: "DoubleTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    removeListener(type: "DragEnter", listener: (ev: Event) => void): void ;
    on(type: "DragEnter", listener: (ev: Event) => void): void ;
    off(type: "DragEnter", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    removeListener(type: "DragLeave", listener: (ev: Event) => void): void ;
    on(type: "DragLeave", listener: (ev: Event) => void): void ;
    off(type: "DragLeave", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragOver", listener: (ev: Event) => void): void ;
    removeListener(type: "DragOver", listener: (ev: Event) => void): void ;
    on(type: "DragOver", listener: (ev: Event) => void): void ;
    off(type: "DragOver", listener: (ev: Event) => void): void ;
    
    addListener(type: "Drop", listener: (ev: Event) => void): void ;
    removeListener(type: "Drop", listener: (ev: Event) => void): void ;
    on(type: "Drop", listener: (ev: Event) => void): void ;
    off(type: "Drop", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    on(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    off(type: "ManipulationDelta", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    on(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    off(type: "PointerCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "DragStarting", listener: (ev: Event) => void): void ;
    on(type: "DragStarting", listener: (ev: Event) => void): void ;
    off(type: "DragStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "DropCompleted", listener: (ev: Event) => void): void ;
    on(type: "DropCompleted", listener: (ev: Event) => void): void ;
    off(type: "DropCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayDismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyDisplayRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    on(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    off(type: "AccessKeyInvoked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    on(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    off(type: "ContextCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ContextRequested", listener: (ev: Event) => void): void ;
    on(type: "ContextRequested", listener: (ev: Event) => void): void ;
    off(type: "ContextRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GettingFocus", listener: (ev: Event) => void): void ;
    on(type: "GettingFocus", listener: (ev: Event) => void): void ;
    off(type: "GettingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LosingFocus", listener: (ev: Event) => void): void ;
    on(type: "LosingFocus", listener: (ev: Event) => void): void ;
    off(type: "LosingFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    removeListener(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    on(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    off(type: "NoFocusCandidateFound", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    on(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    off(type: "PreviewKeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    removeListener(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    on(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    off(type: "ProcessKeyboardAccelerators", listener: (ev: Event) => void): void ;
    
    addListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    on(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    off(type: "BringIntoViewRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

