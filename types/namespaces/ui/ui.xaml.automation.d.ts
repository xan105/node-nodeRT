  export enum AnnotationType {
    unknown,
    spellingError,
    grammarError,
    comment,
    formulaError,
    trackChanges,
    header,
    footer,
    highlighted,
    endnote,
    footnote,
    insertionChange,
    deletionChange,
    moveChange,
    formatChange,
    unsyncedChange,
    editingLockedChange,
    externalChange,
    conflictingChange,
    author,
    advancedProofingIssue,
    dataValidationError,
    circularReferenceError,
  }

  export enum AutomationTextEditChangeType {
    none,
    autoCorrect,
    composition,
    compositionFinalized,
  }

  export enum DockPosition {
    top,
    left,
    bottom,
    right,
    fill,
    none,
  }

  export enum ExpandCollapseState {
    collapsed,
    expanded,
    partiallyExpanded,
    leafNode,
  }

  export enum RowOrColumnMajor {
    rowMajor,
    columnMajor,
    indeterminate,
  }

  export enum ScrollAmount {
    largeDecrement,
    smallDecrement,
    noAmount,
    largeIncrement,
    smallIncrement,
  }

  export enum SupportedTextSelection {
    none,
    single,
    multiple,
  }

  export enum SynchronizedInputType {
    keyUp,
    keyDown,
    leftMouseUp,
    leftMouseDown,
    rightMouseUp,
    rightMouseDown,
  }

  export enum ToggleState {
    off,
    on,
    indeterminate,
  }

  export enum WindowInteractionState {
    running,
    closing,
    readyForUserInteraction,
    blockedByModalWindow,
    notResponding,
  }

  export enum WindowVisualState {
    normal,
    maximized,
    minimized,
  }

  export enum ZoomUnit {
    noAmount,
    largeDecrement,
    smallDecrement,
    largeIncrement,
    smallIncrement,
  }

  export enum AutomationActiveEnd {
    none,
    start,
    end,
  }

  export enum AutomationAnimationStyle {
    none,
    lasVegasLights,
    blinkingBackground,
    sparkleText,
    marchingBlackAnts,
    marchingRedAnts,
    shimmer,
    other,
  }

  export enum AutomationBulletStyle {
    none,
    hollowRoundBullet,
    filledRoundBullet,
    hollowSquareBullet,
    filledSquareBullet,
    dashBullet,
    other,
  }

  export enum AutomationCaretBidiMode {
    lTR,
    rTL,
  }

  export enum AutomationCaretPosition {
    unknown,
    endOfLine,
    beginningOfLine,
  }

  export enum AutomationFlowDirections {
    default,
    rightToLeft,
    bottomToTop,
    vertical,
  }

  export enum AutomationOutlineStyles {
    none,
    outline,
    shadow,
    engraved,
    embossed,
  }

  export enum AutomationStyleId {
    heading1,
    heading2,
    heading3,
    heading4,
    heading5,
    heading6,
    heading7,
    heading8,
    heading9,
    title,
    subtitle,
    normal,
    emphasis,
    quote,
    bulletedList,
  }

  export enum AutomationTextDecorationLineStyle {
    none,
    single,
    wordsOnly,
    double,
    dot,
    dash,
    dashDot,
    dashDotDot,
    wavy,
    thickSingle,
    doubleWavy,
    thickWavy,
    longDash,
    thickDash,
    thickDashDot,
    thickDashDotDot,
    thickDot,
    thickLongDash,
    other,
  }

  export class AutomationProperty {
    constructor();

  }

  export class AnnotationPatternIdentifiers {
    static annotationTypeIdProperty: AutomationProperty;
    static annotationTypeNameProperty: AutomationProperty;
    static authorProperty: AutomationProperty;
    static dateTimeProperty: AutomationProperty;
    static targetProperty: AutomationProperty;
    constructor();

  }

  export class AutomationElementIdentifiers {
    static acceleratorKeyProperty: AutomationProperty;
    static accessKeyProperty: AutomationProperty;
    static automationIdProperty: AutomationProperty;
    static boundingRectangleProperty: AutomationProperty;
    static classNameProperty: AutomationProperty;
    static clickablePointProperty: AutomationProperty;
    static controlTypeProperty: AutomationProperty;
    static hasKeyboardFocusProperty: AutomationProperty;
    static isContentElementProperty: AutomationProperty;
    static isControlElementProperty: AutomationProperty;
    static isEnabledProperty: AutomationProperty;
    static isKeyboardFocusableProperty: AutomationProperty;
    static isOffscreenProperty: AutomationProperty;
    static isPasswordProperty: AutomationProperty;
    static isRequiredForFormProperty: AutomationProperty;
    static itemStatusProperty: AutomationProperty;
    static itemTypeProperty: AutomationProperty;
    static labeledByProperty: AutomationProperty;
    static liveSettingProperty: AutomationProperty;
    static localizedControlTypeProperty: AutomationProperty;
    static nameProperty: AutomationProperty;
    static orientationProperty: AutomationProperty;
    static helpTextProperty: AutomationProperty;
    static controlledPeersProperty: AutomationProperty;
    static positionInSetProperty: AutomationProperty;
    static annotationsProperty: AutomationProperty;
    static levelProperty: AutomationProperty;
    static sizeOfSetProperty: AutomationProperty;
    static localizedLandmarkTypeProperty: AutomationProperty;
    static landmarkTypeProperty: AutomationProperty;
    static isPeripheralProperty: AutomationProperty;
    static flowsFromProperty: AutomationProperty;
    static describedByProperty: AutomationProperty;
    static flowsToProperty: AutomationProperty;
    static fullDescriptionProperty: AutomationProperty;
    static isDataValidForFormProperty: AutomationProperty;
    static cultureProperty: AutomationProperty;
    static headingLevelProperty: AutomationProperty;
    constructor();

  }

  export class AutomationProperties {
    static itemStatusProperty: Object;
    static isRequiredForFormProperty: Object;
    static helpTextProperty: Object;
    static automationIdProperty: Object;
    static accessKeyProperty: Object;
    static acceleratorKeyProperty: Object;
    static itemTypeProperty: Object;
    static labeledByProperty: Object;
    static liveSettingProperty: Object;
    static nameProperty: Object;
    static controlledPeersProperty: Object;
    static accessibilityViewProperty: Object;
    static annotationsProperty: Object;
    static levelProperty: Object;
    static positionInSetProperty: Object;
    static sizeOfSetProperty: Object;
    static landmarkTypeProperty: Object;
    static localizedLandmarkTypeProperty: Object;
    static localizedControlTypeProperty: Object;
    static isPeripheralProperty: Object;
    static isDataValidForFormProperty: Object;
    static fullDescriptionProperty: Object;
    static flowsToProperty: Object;
    static describedByProperty: Object;
    static flowsFromProperty: Object;
    static cultureProperty: Object;
    static headingLevelProperty: Object;
    constructor();

    static getItemType(element: Object): String;


    static setItemType(element: Object, value: String): void;


    static getLabeledBy(element: Object): Object;


    static setLabeledBy(element: Object, value: Object): void;


    static getName(element: Object): String;


    static setName(element: Object, value: String): void;


    static getLiveSetting(element: Object): Number;


    static setLiveSetting(element: Object, value: Number): void;


    static getHeadingLevel(element: Object): Number;


    static setHeadingLevel(element: Object, value: Number): void;


    static getCulture(element: Object): Number;


    static setCulture(element: Object, value: Number): void;


    static getIsPeripheral(element: Object): Boolean;


    static setIsPeripheral(element: Object, value: Boolean): void;


    static getIsDataValidForForm(element: Object): Boolean;


    static setIsDataValidForForm(element: Object, value: Boolean): void;


    static getFullDescription(element: Object): String;


    static setFullDescription(element: Object, value: String): void;


    static getLocalizedControlType(element: Object): String;


    static setLocalizedControlType(element: Object, value: String): void;


    static getDescribedBy(element: Object): Object;


    static getFlowsTo(element: Object): Object;


    static getFlowsFrom(element: Object): Object;


    static getLandmarkType(element: Object): Number;


    static setLandmarkType(element: Object, value: Number): void;


    static getLocalizedLandmarkType(element: Object): String;


    static setLocalizedLandmarkType(element: Object, value: String): void;


    static getPositionInSet(element: Object): Number;


    static setPositionInSet(element: Object, value: Number): void;


    static getSizeOfSet(element: Object): Number;


    static setSizeOfSet(element: Object, value: Number): void;


    static getLevel(element: Object): Number;


    static setLevel(element: Object, value: Number): void;


    static getAnnotations(element: Object): Object;


    static getAccessibilityView(element: Object): Number;


    static setAccessibilityView(element: Object, value: Number): void;


    static getControlledPeers(element: Object): Object;


    static getAcceleratorKey(element: Object): String;


    static setAcceleratorKey(element: Object, value: String): void;


    static getAccessKey(element: Object): String;


    static setAccessKey(element: Object, value: String): void;


    static getAutomationId(element: Object): String;


    static setAutomationId(element: Object, value: String): void;


    static getHelpText(element: Object): String;


    static setHelpText(element: Object, value: String): void;


    static getIsRequiredForForm(element: Object): Boolean;


    static setIsRequiredForForm(element: Object, value: Boolean): void;


    static getItemStatus(element: Object): String;


    static setItemStatus(element: Object, value: String): void;


  }

  export class DockPatternIdentifiers {
    static dockPositionProperty: AutomationProperty;
    constructor();

  }

  export class DragPatternIdentifiers {
    static dropEffectProperty: AutomationProperty;
    static dropEffectsProperty: AutomationProperty;
    static grabbedItemsProperty: AutomationProperty;
    static isGrabbedProperty: AutomationProperty;
    constructor();

  }

  export class DropTargetPatternIdentifiers {
    static dropTargetEffectProperty: AutomationProperty;
    static dropTargetEffectsProperty: AutomationProperty;
    constructor();

  }

  export class ExpandCollapsePatternIdentifiers {
    static expandCollapseStateProperty: AutomationProperty;
    constructor();

  }

  export class GridItemPatternIdentifiers {
    static columnProperty: AutomationProperty;
    static columnSpanProperty: AutomationProperty;
    static containingGridProperty: AutomationProperty;
    static rowProperty: AutomationProperty;
    static rowSpanProperty: AutomationProperty;
    constructor();

  }

  export class GridPatternIdentifiers {
    static columnCountProperty: AutomationProperty;
    static rowCountProperty: AutomationProperty;
    constructor();

  }

  export class MultipleViewPatternIdentifiers {
    static currentViewProperty: AutomationProperty;
    static supportedViewsProperty: AutomationProperty;
    constructor();

  }

  export class RangeValuePatternIdentifiers {
    static isReadOnlyProperty: AutomationProperty;
    static largeChangeProperty: AutomationProperty;
    static maximumProperty: AutomationProperty;
    static minimumProperty: AutomationProperty;
    static smallChangeProperty: AutomationProperty;
    static valueProperty: AutomationProperty;
    constructor();

  }

  export class ScrollPatternIdentifiers {
    static horizontalScrollPercentProperty: AutomationProperty;
    static horizontalViewSizeProperty: AutomationProperty;
    static horizontallyScrollableProperty: AutomationProperty;
    static noScroll: Number;
    static verticalScrollPercentProperty: AutomationProperty;
    static verticalViewSizeProperty: AutomationProperty;
    static verticallyScrollableProperty: AutomationProperty;
    constructor();

  }

  export class SelectionItemPatternIdentifiers {
    static isSelectedProperty: AutomationProperty;
    static selectionContainerProperty: AutomationProperty;
    constructor();

  }

  export class SelectionPatternIdentifiers {
    static canSelectMultipleProperty: AutomationProperty;
    static isSelectionRequiredProperty: AutomationProperty;
    static selectionProperty: AutomationProperty;
    constructor();

  }

  export class SpreadsheetItemPatternIdentifiers {
    static formulaProperty: AutomationProperty;
    constructor();

  }

  export class StylesPatternIdentifiers {
    static extendedPropertiesProperty: AutomationProperty;
    static fillColorProperty: AutomationProperty;
    static fillPatternColorProperty: AutomationProperty;
    static fillPatternStyleProperty: AutomationProperty;
    static shapeProperty: AutomationProperty;
    static styleIdProperty: AutomationProperty;
    static styleNameProperty: AutomationProperty;
    constructor();

  }

  export class TableItemPatternIdentifiers {
    static columnHeaderItemsProperty: AutomationProperty;
    static rowHeaderItemsProperty: AutomationProperty;
    constructor();

  }

  export class TablePatternIdentifiers {
    static columnHeadersProperty: AutomationProperty;
    static rowHeadersProperty: AutomationProperty;
    static rowOrColumnMajorProperty: AutomationProperty;
    constructor();

  }

  export class TogglePatternIdentifiers {
    static toggleStateProperty: AutomationProperty;
    constructor();

  }

  export class TransformPattern2Identifiers {
    static canZoomProperty: AutomationProperty;
    static maxZoomProperty: AutomationProperty;
    static minZoomProperty: AutomationProperty;
    static zoomLevelProperty: AutomationProperty;
    constructor();

  }

  export class TransformPatternIdentifiers {
    static canMoveProperty: AutomationProperty;
    static canResizeProperty: AutomationProperty;
    static canRotateProperty: AutomationProperty;
    constructor();

  }

  export class ValuePatternIdentifiers {
    static isReadOnlyProperty: AutomationProperty;
    static valueProperty: AutomationProperty;
    constructor();

  }

  export class WindowPatternIdentifiers {
    static canMaximizeProperty: AutomationProperty;
    static canMinimizeProperty: AutomationProperty;
    static isModalProperty: AutomationProperty;
    static isTopmostProperty: AutomationProperty;
    static windowInteractionStateProperty: AutomationProperty;
    static windowVisualStateProperty: AutomationProperty;
    constructor();

  }

  export class AutomationAnnotation {
    static elementProperty: Object;
    static typeProperty: Object;
    type: AnnotationType;
    element: Object;
    dispatcher: Object;
    constructor();
    constructor(type: AnnotationType);
    constructor(type: AnnotationType, element: Object);

  }

export * as peers from "./ui.xaml.automation.peers.js";
export * as provider from "./ui.xaml.automation.provider.js";
export * as text from "./ui.xaml.automation.text.js";