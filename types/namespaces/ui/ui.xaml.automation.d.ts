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

    static getItemType(element: Object): string;


    static setItemType(element: Object, value: string): void;


    static getLabeledBy(element: Object): Object;


    static setLabeledBy(element: Object, value: Object): void;


    static getName(element: Object): string;


    static setName(element: Object, value: string): void;


    static getLiveSetting(element: Object): number;


    static setLiveSetting(element: Object, value: number): void;


    static getHeadingLevel(element: Object): number;


    static setHeadingLevel(element: Object, value: number): void;


    static getCulture(element: Object): number;


    static setCulture(element: Object, value: number): void;


    static getIsPeripheral(element: Object): boolean;


    static setIsPeripheral(element: Object, value: boolean): void;


    static getIsDataValidForForm(element: Object): boolean;


    static setIsDataValidForForm(element: Object, value: boolean): void;


    static getFullDescription(element: Object): string;


    static setFullDescription(element: Object, value: string): void;


    static getLocalizedControlType(element: Object): string;


    static setLocalizedControlType(element: Object, value: string): void;


    static getDescribedBy(element: Object): Object;


    static getFlowsTo(element: Object): Object;


    static getFlowsFrom(element: Object): Object;


    static getLandmarkType(element: Object): number;


    static setLandmarkType(element: Object, value: number): void;


    static getLocalizedLandmarkType(element: Object): string;


    static setLocalizedLandmarkType(element: Object, value: string): void;


    static getPositionInSet(element: Object): number;


    static setPositionInSet(element: Object, value: number): void;


    static getSizeOfSet(element: Object): number;


    static setSizeOfSet(element: Object, value: number): void;


    static getLevel(element: Object): number;


    static setLevel(element: Object, value: number): void;


    static getAnnotations(element: Object): Object;


    static getAccessibilityView(element: Object): number;


    static setAccessibilityView(element: Object, value: number): void;


    static getControlledPeers(element: Object): Object;


    static getAcceleratorKey(element: Object): string;


    static setAcceleratorKey(element: Object, value: string): void;


    static getAccessKey(element: Object): string;


    static setAccessKey(element: Object, value: string): void;


    static getAutomationId(element: Object): string;


    static setAutomationId(element: Object, value: string): void;


    static getHelpText(element: Object): string;


    static setHelpText(element: Object, value: string): void;


    static getIsRequiredForForm(element: Object): boolean;


    static setIsRequiredForForm(element: Object, value: boolean): void;


    static getItemStatus(element: Object): string;


    static setItemStatus(element: Object, value: string): void;


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
    static noScroll: number;
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