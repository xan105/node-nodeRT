  export class Rect {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class Size {
    constructor();
  }

  export enum ElementHighContrastAdjustment {
    none,
    application,
    auto,
  }

  export enum ElementSoundKind {
    focus,
    invoke,
    show,
    hide,
    movePrevious,
    moveNext,
    goBack,
  }

  export enum ElementSoundMode {
    default,
    focusOnly,
    off,
  }

  export enum ElementTheme {
    default,
    light,
    dark,
  }

  export enum FlowDirection {
    leftToRight,
    rightToLeft,
  }

  export enum FocusState {
    unfocused,
    pointer,
    keyboard,
    programmatic,
  }

  export enum FocusVisualKind {
    dottedLine,
    highVisibility,
    reveal,
  }

  export enum HorizontalAlignment {
    left,
    center,
    right,
    stretch,
  }

  export enum VerticalAlignment {
    top,
    center,
    bottom,
    stretch,
  }

  export enum Visibility {
    visible,
    collapsed,
  }

  export enum ApplicationHighContrastAdjustment {
    none,
    auto,
  }

  export enum ApplicationRequiresPointerMode {
    auto,
    whenRequested,
  }

  export enum ApplicationTheme {
    light,
    dark,
  }

  export enum AutomationTextAttributesEnum {
    animationStyleAttribute,
    backgroundColorAttribute,
    bulletStyleAttribute,
    capStyleAttribute,
    cultureAttribute,
    fontNameAttribute,
    fontSizeAttribute,
    fontWeightAttribute,
    foregroundColorAttribute,
    horizontalTextAlignmentAttribute,
    indentationFirstLineAttribute,
    indentationLeadingAttribute,
    indentationTrailingAttribute,
    isHiddenAttribute,
    isItalicAttribute,
    isReadOnlyAttribute,
    isSubscriptAttribute,
    isSuperscriptAttribute,
    marginBottomAttribute,
    marginLeadingAttribute,
    marginTopAttribute,
    marginTrailingAttribute,
    outlineStylesAttribute,
    overlineColorAttribute,
    overlineStyleAttribute,
    strikethroughColorAttribute,
    strikethroughStyleAttribute,
    tabsAttribute,
    textFlowDirectionsAttribute,
    underlineColorAttribute,
    underlineStyleAttribute,
    annotationTypesAttribute,
    annotationObjectsAttribute,
    styleNameAttribute,
    styleIdAttribute,
    linkAttribute,
    isActiveAttribute,
    selectionActiveEndAttribute,
    caretPositionAttribute,
    caretBidiModeAttribute,
  }

  export enum ElementSoundPlayerState {
    auto,
    off,
    on,
  }

  export enum ElementSpatialAudioMode {
    auto,
    off,
    on,
  }

  export enum FontCapitals {
    normal,
    allSmallCaps,
    smallCaps,
    allPetiteCaps,
    petiteCaps,
    unicase,
    titling,
  }

  export enum FontEastAsianLanguage {
    normal,
    hojoKanji,
    jis04,
    jis78,
    jis83,
    jis90,
    nlcKanji,
    simplified,
    traditional,
    traditionalNames,
  }

  export enum FontEastAsianWidths {
    normal,
    full,
    half,
    proportional,
    quarter,
    third,
  }

  export enum FontFraction {
    normal,
    stacked,
    slashed,
  }

  export enum FontNumeralAlignment {
    normal,
    proportional,
    tabular,
  }

  export enum FontNumeralStyle {
    normal,
    lining,
    oldStyle,
  }

  export enum FontVariants {
    normal,
    superscript,
    subscript,
    ordinal,
    inferior,
    ruby,
  }

  export enum LineStackingStrategy {
    maxHeight,
    blockLineHeight,
    baselineToBaseline,
  }

  export enum OpticalMarginAlignment {
    none,
    trimSideBearings,
  }

  export enum TextAlignment {
    center,
    left,
    start,
    right,
    end,
    justify,
    detectFromContent,
  }

  export enum TextLineBounds {
    full,
    trimToCapHeight,
    trimToBaseline,
    tight,
  }

  export enum TextReadingOrder {
    default,
    useFlowDirection,
    detectFromContent,
  }

  export enum TextTrimming {
    none,
    characterEllipsis,
    wordEllipsis,
    clip,
  }

  export enum TextWrapping {
    noWrap,
    wrap,
    wrapWholeWords,
  }

  export class IDataTemplateExtension {
    constructor();

    resetTemplate(): void;

    processBinding(phase: Number): Boolean;

    processBindings(arg: Object): Number;

  }

  export class DispatcherTimer {
    interval: Number;
    isEnabled: Boolean;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Tick", listener: (ev: Event) => void): void ;
    removeListener(type: "Tick", listener: (ev: Event) => void): void ;
    on(type: "Tick", listener: (ev: Event) => void): void ;
    off(type: "Tick", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TemplatePartAttribute {
    typeId: Object;
    constructor();

  }

  export class ApplicationInitializationCallbackParams {
    constructor();

  }

  export class DependencyObject {
    dispatcher: Object;
    constructor();

    getValue(dp: DependencyProperty): Object;

    setValue(dp: DependencyProperty, value: Object): void;

    clearValue(dp: DependencyProperty): void;

    readLocalValue(dp: DependencyProperty): Object;

    getAnimationBaseValue(dp: DependencyProperty): Object;

    registerPropertyChangedCallback(dp: DependencyProperty, callback: Object): Number;

    unregisterPropertyChangedCallback(dp: DependencyProperty, token: Number): void;

  }

  export class DependencyProperty {
    static unsetValue: Object;
    constructor();

    static register(name: String, propertyType: Object, ownerType: Object, typeMetadata: PropertyMetadata): DependencyProperty;


    static registerAttached(name: String, propertyType: Object, ownerType: Object, defaultMetadata: PropertyMetadata): DependencyProperty;


    getMetadata(forType: Object): PropertyMetadata;

  }

  export class DependencyPropertyChangedEventArgs {
    newValue: Object;
    oldValue: Object;
    property: DependencyProperty;
    constructor();

  }

  export class RoutedEventArgs {
    originalSource: Object;
    constructor();

  }

  export class UnhandledExceptionEventArgs {
    handled: Boolean;
    exception: Number;
    message: String;
    constructor();

  }

  export class VisualStateChangedEventArgs {
    oldState: VisualState;
    newState: VisualState;
    control: Object;
    constructor();

  }

  export class BringIntoViewOptions {
    targetRect: Object;
    animationDesired: Boolean;
    verticalOffset: Number;
    verticalAlignmentRatio: Number;
    horizontalOffset: Number;
    horizontalAlignmentRatio: Number;
    constructor();

  }

  export class DataContextChangedEventArgs {
    handled: Boolean;
    newValue: Object;
    constructor();

  }

  export class DataTemplateKey {
    dataType: Object;
    constructor();
    constructor(dataType: Object);

  }

  export class PropertyMetadata {
    createDefaultValueCallback: Object;
    defaultValue: Object;
    constructor();
    constructor(defaultValue: Object);
    constructor(defaultValue: Object, propertyChangedCallback: Object);

    static create(defaultValue: Object): PropertyMetadata;
    static create(defaultValue: Object, propertyChangedCallback: Object): PropertyMetadata;
    static create(createDefaultValueCallback: Object): PropertyMetadata;
    static create(createDefaultValueCallback: Object, propertyChangedCallback: Object): PropertyMetadata;


  }

  export class DragOperationDeferral {
    constructor();

    complete(): void;

  }

  export class DragUI {
    constructor();

    setContentFromBitmapImage(bitmapImage: Object): void;
    setContentFromBitmapImage(bitmapImage: Object, anchorPoint: Object): void;

    setContentFromSoftwareBitmap(softwareBitmap: Object): void;
    setContentFromSoftwareBitmap(softwareBitmap: Object, anchorPoint: Object): void;

    setContentFromDataPackage(): void;

  }

  export class DragUIOverride {
    isGlyphVisible: Boolean;
    isContentVisible: Boolean;
    isCaptionVisible: Boolean;
    caption: String;
    constructor();

    clear(): void;

    setContentFromBitmapImage(bitmapImage: Object): void;
    setContentFromBitmapImage(bitmapImage: Object, anchorPoint: Object): void;

    setContentFromSoftwareBitmap(softwareBitmap: Object): void;
    setContentFromSoftwareBitmap(softwareBitmap: Object, anchorPoint: Object): void;

  }

  export class FrameworkView {
    constructor();

    initialize(applicationView: Object): void;

    setWindow(window: Object): void;

    load(entryPoint: String): void;

    run(): void;

    uninitialize(): void;

  }

  export class RoutedEvent {
    constructor();

  }

  export class SetterBaseCollection {
    isSealed: Boolean;
    constructor();

    getAt(index: Number): SetterBase;

    getView(): Object;

    indexOf(value: SetterBase, index: Number): Boolean;

    setAt(index: Number, value: SetterBase): void;

    insertAt(index: Number, value: SetterBase): void;

    removeAt(index: Number): void;

    append(value: SetterBase): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class TargetPropertyPath {
    target: Object;
    path: PropertyPath;
    constructor();
    constructor(targetProperty: DependencyProperty);

  }

  export class TriggerActionCollection {
    constructor();

    getAt(index: Number): TriggerAction;

    getView(): Object;

    indexOf(value: TriggerAction, index: Number): Boolean;

    setAt(index: Number, value: TriggerAction): void;

    insertAt(index: Number, value: TriggerAction): void;

    removeAt(index: Number): void;

    append(value: TriggerAction): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class TriggerCollection {
    constructor();

    getAt(index: Number): TriggerBase;

    getView(): Object;

    indexOf(value: TriggerBase, index: Number): Boolean;

    setAt(index: Number, value: TriggerBase): void;

    insertAt(index: Number, value: TriggerBase): void;

    removeAt(index: Number): void;

    append(value: TriggerBase): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class BringIntoViewRequestedEventArgs {
    verticalOffset: Number;
    targetRect: Object;
    targetElement: UIElement;
    horizontalOffset: Number;
    handled: Boolean;
    animationDesired: Boolean;
    horizontalAlignmentRatio: Number;
    verticalAlignmentRatio: Number;
    originalSource: Object;
    constructor();

  }

  export class DependencyObjectCollection {
    dispatcher: Object;
    constructor();

    getAt(index: Number): DependencyObject;

    getView(): Object;

    indexOf(value: DependencyObject, index: Number): Boolean;

    setAt(index: Number, value: DependencyObject): void;

    insertAt(index: Number, value: DependencyObject): void;

    removeAt(index: Number): void;

    append(value: DependencyObject): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

    addListener(type: "VectorChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VectorChanged", listener: (ev: Event) => void): void ;
    on(type: "VectorChanged", listener: (ev: Event) => void): void ;
    off(type: "VectorChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DragEventArgs {
    handled: Boolean;
    data: Object;
    acceptedOperation: Number;
    dataView: Object;
    dragUIOverride: DragUIOverride;
    modifiers: Number;
    allowedOperations: Number;
    originalSource: Object;
    constructor();

    getPosition(relativeTo: UIElement): Object;

    getDeferral(): DragOperationDeferral;

  }

  export class DragStartingEventArgs {
    cancel: Boolean;
    data: Object;
    dragUI: DragUI;
    allowedOperations: Number;
    originalSource: Object;
    constructor();

    getDeferral(): DragOperationDeferral;

    getPosition(relativeTo: UIElement): Object;

  }

  export class DropCompletedEventArgs {
    dropResult: Number;
    originalSource: Object;
    constructor();

  }

  export class ExceptionRoutedEventArgs {
    errorMessage: String;
    originalSource: Object;
    constructor();

  }

  export class FrameworkTemplate {
    dispatcher: Object;
    constructor();

  }

  export class DataTemplate {
    static extensionInstanceProperty: DependencyProperty;
    dispatcher: Object;
    constructor();

    static getExtensionInstance(element: FrameworkElement): IDataTemplateExtension;


    static setExtensionInstance(element: FrameworkElement, value: IDataTemplateExtension): void;


    loadContent(): DependencyObject;

  }

  export class PropertyPath {
    path: String;
    dispatcher: Object;
    constructor();
    constructor(path: String);

  }

  export class ResourceDictionary {
    source: Object;
    mergedDictionaries: Object;
    themeDictionaries: Object;
    dispatcher: Object;
    constructor();

    lookup(key: Object): Object;

    hasKey(key: Object): Boolean;

    getView(): Object;

    insert(key: Object, value: Object): Boolean;

    remove(key: Object): void;

    clear(): void;

    first(): Object;

  }

  export class SetterBase {
    isSealed: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class SizeChangedEventArgs {
    newSize: Object;
    previousSize: Object;
    originalSource: Object;
    constructor();

  }

  export class StateTriggerBase {
    dispatcher: Object;
    constructor();

    setActive(IsActive: Boolean): void;

  }

  export class Style {
    targetType: Object;
    basedOn: Style;
    isSealed: Boolean;
    setters: SetterBaseCollection;
    dispatcher: Object;
    constructor();
    constructor(targetType: Object);

    seal(): void;

  }

  export class TriggerAction {
    dispatcher: Object;
    constructor();

  }

  export class TriggerBase {
    dispatcher: Object;
    constructor();

  }

  export class UIElement {
    static allowDropProperty: DependencyProperty;
    static cacheModeProperty: DependencyProperty;
    static clipProperty: DependencyProperty;
    static doubleTappedEvent: RoutedEvent;
    static dragEnterEvent: RoutedEvent;
    static dragLeaveEvent: RoutedEvent;
    static dragOverEvent: RoutedEvent;
    static dropEvent: RoutedEvent;
    static holdingEvent: RoutedEvent;
    static isDoubleTapEnabledProperty: DependencyProperty;
    static isHitTestVisibleProperty: DependencyProperty;
    static isHoldingEnabledProperty: DependencyProperty;
    static isRightTapEnabledProperty: DependencyProperty;
    static isTapEnabledProperty: DependencyProperty;
    static keyUpEvent: RoutedEvent;
    static manipulationCompletedEvent: RoutedEvent;
    static manipulationDeltaEvent: RoutedEvent;
    static manipulationInertiaStartingEvent: RoutedEvent;
    static manipulationModeProperty: DependencyProperty;
    static manipulationStartedEvent: RoutedEvent;
    static manipulationStartingEvent: RoutedEvent;
    static opacityProperty: DependencyProperty;
    static pointerCanceledEvent: RoutedEvent;
    static pointerCaptureLostEvent: RoutedEvent;
    static pointerCapturesProperty: DependencyProperty;
    static pointerEnteredEvent: RoutedEvent;
    static pointerExitedEvent: RoutedEvent;
    static pointerMovedEvent: RoutedEvent;
    static pointerPressedEvent: RoutedEvent;
    static pointerReleasedEvent: RoutedEvent;
    static pointerWheelChangedEvent: RoutedEvent;
    static projectionProperty: DependencyProperty;
    static renderTransformOriginProperty: DependencyProperty;
    static renderTransformProperty: DependencyProperty;
    static rightTappedEvent: RoutedEvent;
    static tappedEvent: RoutedEvent;
    static transitionsProperty: DependencyProperty;
    static useLayoutRoundingProperty: DependencyProperty;
    static visibilityProperty: DependencyProperty;
    static keyDownEvent: RoutedEvent;
    static compositeModeProperty: DependencyProperty;
    static transform3DProperty: DependencyProperty;
    static canDragProperty: DependencyProperty;
    static isAccessKeyScopeProperty: DependencyProperty;
    static exitDisplayModeOnAccessKeyInvokedProperty: DependencyProperty;
    static contextFlyoutProperty: DependencyProperty;
    static accessKeyScopeOwnerProperty: DependencyProperty;
    static accessKeyProperty: DependencyProperty;
    static highContrastAdjustmentProperty: DependencyProperty;
    static xYFocusRightNavigationStrategyProperty: DependencyProperty;
    static xYFocusUpNavigationStrategyProperty: DependencyProperty;
    static keyTipHorizontalOffsetProperty: DependencyProperty;
    static keyTipPlacementModeProperty: DependencyProperty;
    static keyTipVerticalOffsetProperty: DependencyProperty;
    static lightsProperty: DependencyProperty;
    static tabFocusNavigationProperty: DependencyProperty;
    static xYFocusDownNavigationStrategyProperty: DependencyProperty;
    static xYFocusKeyboardNavigationProperty: DependencyProperty;
    static xYFocusLeftNavigationStrategyProperty: DependencyProperty;
    static noFocusCandidateFoundEvent: RoutedEvent;
    static losingFocusEvent: RoutedEvent;
    static gettingFocusEvent: RoutedEvent;
    static previewKeyUpEvent: RoutedEvent;
    static previewKeyDownEvent: RoutedEvent;
    static characterReceivedEvent: RoutedEvent;
    static keyboardAcceleratorPlacementTargetProperty: DependencyProperty;
    static keyboardAcceleratorPlacementModeProperty: DependencyProperty;
    static keyTipTargetProperty: DependencyProperty;
    static contextRequestedEvent: RoutedEvent;
    static bringIntoViewRequestedEvent: RoutedEvent;
    manipulationMode: Number;
    isTapEnabled: Boolean;
    isRightTapEnabled: Boolean;
    isHoldingEnabled: Boolean;
    isHitTestVisible: Boolean;
    isDoubleTapEnabled: Boolean;
    opacity: Number;
    cacheMode: Object;
    allowDrop: Boolean;
    clip: Object;
    visibility: Visibility;
    useLayoutRounding: Boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: Number;
    transform3D: Object;
    canDrag: Boolean;
    accessKey: String;
    accessKeyScopeOwner: DependencyObject;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    contextFlyout: Object;
    isAccessKeyScope: Boolean;
    xYFocusDownNavigationStrategy: Number;
    xYFocusLeftNavigationStrategy: Number;
    tabFocusNavigation: Number;
    xYFocusKeyboardNavigation: Number;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    highContrastAdjustment: ElementHighContrastAdjustment;
    xYFocusUpNavigationStrategy: Number;
    xYFocusRightNavigationStrategy: Number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: DependencyObject;
    keyboardAcceleratorPlacementMode: Number;
    keyTipTarget: DependencyObject;
    dispatcher: Object;
    constructor();

    static tryStartDirectManipulation(value: Object): Boolean;


    static registerAsScrollPort(element: UIElement): void;


    startDragAsync(pointerPoint: Object, callback: (error: Error, result: Number) => void): void ;

    startBringIntoView(): void;
    startBringIntoView(options: BringIntoViewOptions): void;

    tryInvokeKeyboardAccelerator(args: Object): void;

    getChildrenInTabFocusOrder(): Object;

    onProcessKeyboardAccelerators(args: Object): void;

    onKeyboardAcceleratorInvoked(args: Object): void;

    onBringIntoViewRequested(e: BringIntoViewRequestedEventArgs): void;

    measure(availableSize: Object): void;

    arrange(finalRect: Object): void;

    capturePointer(value: Object): Boolean;

    releasePointerCapture(value: Object): void;

    releasePointerCaptures(): void;

    addHandler(routedEvent: RoutedEvent, handler: Object, handledEventsToo: Boolean): void;

    removeHandler(routedEvent: RoutedEvent, handler: Object): void;

    transformToVisual(visual: UIElement): Object;

    invalidateMeasure(): void;

    invalidateArrange(): void;

    updateLayout(): void;

    onCreateAutomationPeer(): Object;

    onDisconnectVisualChildren(): void;

    findSubElementsForTouchTargeting(point: Object, boundingRect: Object): Object;

    cancelDirectManipulations(): Boolean;

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

  export class VisualState {
    storyboard: Object;
    name: String;
    setters: SetterBaseCollection;
    stateTriggers: Object;
    dispatcher: Object;
    constructor();

  }

  export class VisualStateGroup {
    currentState: VisualState;
    name: String;
    states: Object;
    transitions: Object;
    dispatcher: Object;
    constructor();

    addListener(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    on(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    off(type: "CurrentStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CurrentStateChanging", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentStateChanging", listener: (ev: Event) => void): void ;
    on(type: "CurrentStateChanging", listener: (ev: Event) => void): void ;
    off(type: "CurrentStateChanging", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VisualTransition {
    to: String;
    storyboard: Object;
    generatedEasingFunction: Object;
    generatedDuration: Duration;
    from: String;
    dispatcher: Object;
    constructor();

  }

  export class AdaptiveTrigger {
    static minWindowHeightProperty: DependencyProperty;
    static minWindowWidthProperty: DependencyProperty;
    minWindowWidth: Number;
    minWindowHeight: Number;
    dispatcher: Object;
    constructor();

  }

  export class EventTrigger {
    routedEvent: RoutedEvent;
    actions: TriggerActionCollection;
    dispatcher: Object;
    constructor();

  }

  export class FrameworkElement {
    static actualHeightProperty: DependencyProperty;
    static actualWidthProperty: DependencyProperty;
    static dataContextProperty: DependencyProperty;
    static flowDirectionProperty: DependencyProperty;
    static heightProperty: DependencyProperty;
    static horizontalAlignmentProperty: DependencyProperty;
    static languageProperty: DependencyProperty;
    static maxHeightProperty: DependencyProperty;
    static maxWidthProperty: DependencyProperty;
    static minHeightProperty: DependencyProperty;
    static minWidthProperty: DependencyProperty;
    static nameProperty: DependencyProperty;
    static styleProperty: DependencyProperty;
    static tagProperty: DependencyProperty;
    static verticalAlignmentProperty: DependencyProperty;
    static widthProperty: DependencyProperty;
    static marginProperty: DependencyProperty;
    static requestedThemeProperty: DependencyProperty;
    static allowFocusOnInteractionProperty: DependencyProperty;
    static focusVisualMarginProperty: DependencyProperty;
    static focusVisualPrimaryBrushProperty: DependencyProperty;
    static focusVisualPrimaryThicknessProperty: DependencyProperty;
    static focusVisualSecondaryBrushProperty: DependencyProperty;
    static focusVisualSecondaryThicknessProperty: DependencyProperty;
    static allowFocusWhenDisabledProperty: DependencyProperty;
    static actualThemeProperty: DependencyProperty;
    static allowDropProperty: DependencyProperty;
    static cacheModeProperty: DependencyProperty;
    static clipProperty: DependencyProperty;
    static doubleTappedEvent: RoutedEvent;
    static dragEnterEvent: RoutedEvent;
    static dragLeaveEvent: RoutedEvent;
    static dragOverEvent: RoutedEvent;
    static dropEvent: RoutedEvent;
    static holdingEvent: RoutedEvent;
    static isDoubleTapEnabledProperty: DependencyProperty;
    static isHitTestVisibleProperty: DependencyProperty;
    static isHoldingEnabledProperty: DependencyProperty;
    static isRightTapEnabledProperty: DependencyProperty;
    static isTapEnabledProperty: DependencyProperty;
    static keyUpEvent: RoutedEvent;
    static manipulationCompletedEvent: RoutedEvent;
    static manipulationDeltaEvent: RoutedEvent;
    static manipulationInertiaStartingEvent: RoutedEvent;
    static manipulationModeProperty: DependencyProperty;
    static manipulationStartedEvent: RoutedEvent;
    static manipulationStartingEvent: RoutedEvent;
    static opacityProperty: DependencyProperty;
    static pointerCanceledEvent: RoutedEvent;
    static pointerCaptureLostEvent: RoutedEvent;
    static pointerCapturesProperty: DependencyProperty;
    static pointerEnteredEvent: RoutedEvent;
    static pointerExitedEvent: RoutedEvent;
    static pointerMovedEvent: RoutedEvent;
    static pointerPressedEvent: RoutedEvent;
    static pointerReleasedEvent: RoutedEvent;
    static pointerWheelChangedEvent: RoutedEvent;
    static projectionProperty: DependencyProperty;
    static renderTransformOriginProperty: DependencyProperty;
    static renderTransformProperty: DependencyProperty;
    static rightTappedEvent: RoutedEvent;
    static tappedEvent: RoutedEvent;
    static transitionsProperty: DependencyProperty;
    static useLayoutRoundingProperty: DependencyProperty;
    static visibilityProperty: DependencyProperty;
    static keyDownEvent: RoutedEvent;
    static compositeModeProperty: DependencyProperty;
    static transform3DProperty: DependencyProperty;
    static canDragProperty: DependencyProperty;
    static isAccessKeyScopeProperty: DependencyProperty;
    static exitDisplayModeOnAccessKeyInvokedProperty: DependencyProperty;
    static contextFlyoutProperty: DependencyProperty;
    static accessKeyScopeOwnerProperty: DependencyProperty;
    static accessKeyProperty: DependencyProperty;
    static highContrastAdjustmentProperty: DependencyProperty;
    static xYFocusRightNavigationStrategyProperty: DependencyProperty;
    static xYFocusUpNavigationStrategyProperty: DependencyProperty;
    static keyTipHorizontalOffsetProperty: DependencyProperty;
    static keyTipPlacementModeProperty: DependencyProperty;
    static keyTipVerticalOffsetProperty: DependencyProperty;
    static lightsProperty: DependencyProperty;
    static tabFocusNavigationProperty: DependencyProperty;
    static xYFocusDownNavigationStrategyProperty: DependencyProperty;
    static xYFocusKeyboardNavigationProperty: DependencyProperty;
    static xYFocusLeftNavigationStrategyProperty: DependencyProperty;
    static noFocusCandidateFoundEvent: RoutedEvent;
    static losingFocusEvent: RoutedEvent;
    static gettingFocusEvent: RoutedEvent;
    static previewKeyUpEvent: RoutedEvent;
    static previewKeyDownEvent: RoutedEvent;
    static characterReceivedEvent: RoutedEvent;
    static keyboardAcceleratorPlacementTargetProperty: DependencyProperty;
    static keyboardAcceleratorPlacementModeProperty: DependencyProperty;
    static keyTipTargetProperty: DependencyProperty;
    static contextRequestedEvent: RoutedEvent;
    static bringIntoViewRequestedEvent: RoutedEvent;
    flowDirection: FlowDirection;
    minWidth: Number;
    minHeight: Number;
    maxWidth: Number;
    maxHeight: Number;
    margin: Thickness;
    language: String;
    name: String;
    horizontalAlignment: HorizontalAlignment;
    height: Number;
    dataContext: Object;
    resources: ResourceDictionary;
    width: Number;
    tag: Object;
    style: Style;
    verticalAlignment: VerticalAlignment;
    actualHeight: Number;
    actualWidth: Number;
    parent: DependencyObject;
    baseUri: Object;
    triggers: TriggerCollection;
    requestedTheme: ElementTheme;
    focusVisualSecondaryThickness: Thickness;
    focusVisualSecondaryBrush: Object;
    focusVisualPrimaryThickness: Thickness;
    focusVisualPrimaryBrush: Object;
    focusVisualMargin: Thickness;
    allowFocusWhenDisabled: Boolean;
    allowFocusOnInteraction: Boolean;
    actualTheme: ElementTheme;
    manipulationMode: Number;
    isTapEnabled: Boolean;
    isRightTapEnabled: Boolean;
    isHoldingEnabled: Boolean;
    isHitTestVisible: Boolean;
    isDoubleTapEnabled: Boolean;
    opacity: Number;
    cacheMode: Object;
    allowDrop: Boolean;
    clip: Object;
    visibility: Visibility;
    useLayoutRounding: Boolean;
    renderTransformOrigin: Object;
    projection: Object;
    renderTransform: Object;
    transitions: Object;
    renderSize: Object;
    pointerCaptures: Object;
    desiredSize: Object;
    compositeMode: Number;
    transform3D: Object;
    canDrag: Boolean;
    accessKey: String;
    accessKeyScopeOwner: DependencyObject;
    exitDisplayModeOnAccessKeyInvoked: Boolean;
    contextFlyout: Object;
    isAccessKeyScope: Boolean;
    xYFocusDownNavigationStrategy: Number;
    xYFocusLeftNavigationStrategy: Number;
    tabFocusNavigation: Number;
    xYFocusKeyboardNavigation: Number;
    keyTipVerticalOffset: Number;
    keyTipPlacementMode: Number;
    keyTipHorizontalOffset: Number;
    highContrastAdjustment: ElementHighContrastAdjustment;
    xYFocusUpNavigationStrategy: Number;
    xYFocusRightNavigationStrategy: Number;
    lights: Object;
    keyboardAccelerators: Object;
    keyboardAcceleratorPlacementTarget: DependencyObject;
    keyboardAcceleratorPlacementMode: Number;
    keyTipTarget: DependencyObject;
    dispatcher: Object;
    constructor();

    static deferTree(element: DependencyObject): void;


    getBindingExpression(dp: DependencyProperty): Object;

    goToElementStateCore(stateName: String, useTransitions: Boolean): Boolean;

    findName(name: String): Object;

    setBinding(dp: DependencyProperty, binding: Object): void;

    measureOverride(availableSize: Object): Object;

    arrangeOverride(finalSize: Object): Object;

    onApplyTemplate(): void;

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

  export class MediaFailedRoutedEventArgs {
    errorTrace: String;
    errorMessage: String;
    originalSource: Object;
    constructor();

  }

  export class Setter {
    value: Object;
    property: DependencyProperty;
    target: TargetPropertyPath;
    isSealed: Boolean;
    dispatcher: Object;
    constructor();
    constructor(targetProperty: DependencyProperty, value: Object);

  }

  export class StateTrigger {
    static isActiveProperty: DependencyProperty;
    isActive: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class StyleTypedPropertyAttribute {
    typeId: Object;
    constructor();

  }

  export class TemplateVisualStateAttribute {
    typeId: Object;
    constructor();

  }

  export class BindingFailedEventArgs {
    message: String;
    constructor();

  }

  export class DebugSettings {
    isOverdrawHeatMapEnabled: Boolean;
    isBindingTracingEnabled: Boolean;
    enableFrameRateCounter: Boolean;
    enableRedrawRegions: Boolean;
    isTextPerformanceVisualizationEnabled: Boolean;
    constructor();

    addListener(type: "BindingFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "BindingFailed", listener: (ev: Event) => void): void ;
    on(type: "BindingFailed", listener: (ev: Event) => void): void ;
    off(type: "BindingFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ElementSoundPlayer {
    static volume: Number;
    static state: ElementSoundPlayerState;
    static spatialAudioMode: ElementSpatialAudioMode;
    constructor();

    static play(sound: ElementSoundKind): void;


  }

  export class WindowCreatedEventArgs {
    window: Window;
    constructor();

  }

  export class Application {
    static current: Application;
    resources: ResourceDictionary;
    requestedTheme: ApplicationTheme;
    debugSettings: DebugSettings;
    requiresPointerMode: ApplicationRequiresPointerMode;
    focusVisualKind: FocusVisualKind;
    highContrastAdjustment: ApplicationHighContrastAdjustment;
    constructor();

    static start(callback: Object): void;


    static loadComponent(component: Object, resourceLocator: Object): void;
    static loadComponent(component: Object, resourceLocator: Object, componentResourceLocation: Number): void;


    exit(): void;

    onActivated(args: Object): void;

    onLaunched(args: Object): void;

    onFileActivated(args: Object): void;

    onSearchActivated(args: Object): void;

    onShareTargetActivated(args: Object): void;

    onFileOpenPickerActivated(args: Object): void;

    onFileSavePickerActivated(args: Object): void;

    onCachedFileUpdaterActivated(args: Object): void;

    onWindowCreated(args: WindowCreatedEventArgs): void;

    onBackgroundActivated(args: Object): void;

    addListener(type: "Resuming", listener: (ev: Event) => void): void ;
    removeListener(type: "Resuming", listener: (ev: Event) => void): void ;
    on(type: "Resuming", listener: (ev: Event) => void): void ;
    off(type: "Resuming", listener: (ev: Event) => void): void ;
    
    addListener(type: "Suspending", listener: (ev: Event) => void): void ;
    removeListener(type: "Suspending", listener: (ev: Event) => void): void ;
    on(type: "Suspending", listener: (ev: Event) => void): void ;
    off(type: "Suspending", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnhandledException", listener: (ev: Event) => void): void ;
    removeListener(type: "UnhandledException", listener: (ev: Event) => void): void ;
    on(type: "UnhandledException", listener: (ev: Event) => void): void ;
    off(type: "UnhandledException", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    removeListener(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    on(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    off(type: "EnteredBackground", listener: (ev: Event) => void): void ;
    
    addListener(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    removeListener(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    on(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    off(type: "LeavingBackground", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FrameworkViewSource {
    constructor();

    createView(): Object;

  }

  export class PointHelper {
    constructor();

    static fromCoordinates(x: Number, y: Number): Object;


  }

  export class RectHelper {
    static empty: Object;
    constructor();

    static fromCoordinatesAndDimensions(x: Number, y: Number, width: Number, height: Number): Object;


    static fromPoints(point1: Object, point2: Object): Object;


    static fromLocationAndSize(location: Object, size: Object): Object;


    static getIsEmpty(target: Object): Boolean;


    static getBottom(target: Object): Number;


    static getLeft(target: Object): Number;


    static getRight(target: Object): Number;


    static getTop(target: Object): Number;


    static contains(target: Object, point: Object): Boolean;


    static equals(target: Object, value: Object): Boolean;


    static intersect(target: Object, rect: Object): Object;


    static union(target: Object, point: Object): Object;
    static union(target: Object, rect: Object): Object;


  }

  export class SizeHelper {
    static empty: Object;
    constructor();

    static fromDimensions(width: Number, height: Number): Object;


    static getIsEmpty(target: Object): Boolean;


    static equals(target: Object, value: Object): Boolean;


  }

  export class Window {
    static current: Window;
    content: UIElement;
    bounds: Object;
    coreWindow: Object;
    dispatcher: Object;
    visible: Boolean;
    compositor: Object;
    constructor();

    activate(): void;

    close(): void;

    setTitleBar(value: UIElement): void;

    addListener(type: "Activated", listener: (ev: Event) => void): void ;
    removeListener(type: "Activated", listener: (ev: Event) => void): void ;
    on(type: "Activated", listener: (ev: Event) => void): void ;
    off(type: "Activated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    on(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    off(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VisualStateManager {
    static customVisualStateManagerProperty: DependencyProperty;
    dispatcher: Object;
    constructor();

    static getVisualStateGroups(obj: FrameworkElement): Object;


    static getCustomVisualStateManager(obj: FrameworkElement): VisualStateManager;


    static setCustomVisualStateManager(obj: FrameworkElement, value: VisualStateManager): void;


    static goToState(control: Object, stateName: String, useTransitions: Boolean): Boolean;


    goToStateCore(control: Object, templateRoot: FrameworkElement, stateName: String, group: VisualStateGroup, state: VisualState, useTransitions: Boolean): Boolean;

    raiseCurrentStateChanging(stateGroup: VisualStateGroup, oldState: VisualState, newState: VisualState, control: Object): void;

    raiseCurrentStateChanged(stateGroup: VisualStateGroup, oldState: VisualState, newState: VisualState, control: Object): void;

  }

export * as automation from "./ui.xaml.automation.js";
export * as controls from "./ui.xaml.controls.js";
export * as data from "./ui.xaml.data.js";
export * as documents from "./ui.xaml.documents.js";
export * as hosting from "./ui.xaml.hosting.js";
export * as input from "./ui.xaml.input.js";
export * as interop from "./ui.xaml.interop.js";
export * as markup from "./ui.xaml.markup.js";
export * as media from "./ui.xaml.media.js";
export * as navigation from "./ui.xaml.navigation.js";
export * as printing from "./ui.xaml.printing.js";
export * as resources from "./ui.xaml.resources.js";
export * as shapes from "./ui.xaml.shapes.js";