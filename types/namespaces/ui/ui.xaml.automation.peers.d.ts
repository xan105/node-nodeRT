  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class RawElementProviderRuntimeId {
    part1: number;
    part2: number;
    constructor();
  }

  export enum AccessibilityView {
    raw,
    control,
    content,
  }

  export enum AutomationControlType {
    button,
    calendar,
    checkBox,
    comboBox,
    edit,
    hyperlink,
    image,
    listItem,
    list,
    menu,
    menuBar,
    menuItem,
    progressBar,
    radioButton,
    scrollBar,
    slider,
    spinner,
    statusBar,
    tab,
    tabItem,
    text,
    toolBar,
    toolTip,
    tree,
    treeItem,
    custom,
    group,
    thumb,
    dataGrid,
    dataItem,
    document,
    splitButton,
    window,
    pane,
    header,
    headerItem,
    table,
    titleBar,
    separator,
    semanticZoom,
    appBar,
  }

  export enum AutomationEvents {
    toolTipOpened,
    toolTipClosed,
    menuOpened,
    menuClosed,
    automationFocusChanged,
    invokePatternOnInvoked,
    selectionItemPatternOnElementAddedToSelection,
    selectionItemPatternOnElementRemovedFromSelection,
    selectionItemPatternOnElementSelected,
    selectionPatternOnInvalidated,
    textPatternOnTextSelectionChanged,
    textPatternOnTextChanged,
    asyncContentLoaded,
    propertyChanged,
    structureChanged,
    dragStart,
    dragCancel,
    dragComplete,
    dragEnter,
    dragLeave,
    dropped,
    liveRegionChanged,
    inputReachedTarget,
    inputReachedOtherElement,
    inputDiscarded,
    windowClosed,
    windowOpened,
    conversionTargetChanged,
    textEditTextChanged,
    layoutInvalidated,
  }

  export enum AutomationHeadingLevel {
    none,
    level1,
    level2,
    level3,
    level4,
    level5,
    level6,
    level7,
    level8,
    level9,
  }

  export enum AutomationLandmarkType {
    none,
    custom,
    form,
    main,
    navigation,
    search,
  }

  export enum AutomationLiveSetting {
    off,
    polite,
    assertive,
  }

  export enum AutomationNavigationDirection {
    parent,
    nextSibling,
    previousSibling,
    firstChild,
    lastChild,
  }

  export enum AutomationNotificationKind {
    itemAdded,
    itemRemoved,
    actionCompleted,
    actionAborted,
    other,
  }

  export enum AutomationNotificationProcessing {
    importantAll,
    importantMostRecent,
    all,
    mostRecent,
    currentThenMostRecent,
  }

  export enum AutomationOrientation {
    none,
    horizontal,
    vertical,
  }

  export enum AutomationStructureChangeType {
    childAdded,
    childRemoved,
    childrenInvalidated,
    childrenBulkAdded,
    childrenBulkRemoved,
    childrenReordered,
  }

  export enum PatternInterface {
    invoke,
    selection,
    value,
    rangeValue,
    scroll,
    scrollItem,
    expandCollapse,
    grid,
    gridItem,
    multipleView,
    window,
    selectionItem,
    dock,
    table,
    tableItem,
    toggle,
    transform,
    text,
    itemContainer,
    virtualizedItem,
    text2,
    textChild,
    textRange,
    annotation,
    drag,
    dropTarget,
    objectModel,
    spreadsheet,
    spreadsheetItem,
    styles,
    transform2,
    synchronizedInput,
    textEdit,
    customNavigation,
  }

  export class AutomationPeer {
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

    static generateRawElementProviderRuntimeId(): RawElementProviderRuntimeId;


    static listenerExists(eventId: AutomationEvents): boolean;


    isContentElementCore(): boolean;

    isControlElementCore(): boolean;

    isEnabledCore(): boolean;

    isKeyboardFocusableCore(): boolean;

    isOffscreenCore(): boolean;

    isPasswordCore(): boolean;

    isRequiredForFormCore(): boolean;

    setFocusCore(): void;

    getPeerFromPointCore(point: Object): AutomationPeer;

    getLiveSettingCore(): AutomationLiveSetting;

    peerFromProvider(provider: Object): AutomationPeer;

    providerFromPeer(peer: AutomationPeer): Object;

    showContextMenuCore(): void;

    getControlledPeersCore(): Object;

    navigate(direction: AutomationNavigationDirection): Object;

    getElementFromPoint(pointInWindowCoordinates: Object): Object;

    getFocusedElement(): Object;

    showContextMenu(): void;

    getControlledPeers(): Object;

    getAnnotations(): Object;

    setParent(peer: AutomationPeer): void;

    raiseTextEditTextChangedEvent(automationTextEditChangeType: number, changedData: Object): void;

    getPositionInSet(): number;

    getSizeOfSet(): number;

    getLevel(): number;

    raiseStructureChangedEvent(structureChangeType: AutomationStructureChangeType, child: AutomationPeer): void;

    navigateCore(direction: AutomationNavigationDirection): Object;

    getElementFromPointCore(pointInWindowCoordinates: Object): Object;

    getFocusedElementCore(): Object;

    getAnnotationsCore(): Object;

    getPositionInSetCore(): number;

    getSizeOfSetCore(): number;

    getLevelCore(): number;

    getLandmarkType(): AutomationLandmarkType;

    getLocalizedLandmarkType(): string;

    getLandmarkTypeCore(): AutomationLandmarkType;

    getLocalizedLandmarkTypeCore(): string;

    isPeripheral(): boolean;

    isDataValidForForm(): boolean;

    getFullDescription(): string;

    isPeripheralCore(): boolean;

    isDataValidForFormCore(): boolean;

    getFullDescriptionCore(): string;

    getDescribedByCore(): Object;

    getFlowsToCore(): Object;

    getFlowsFromCore(): Object;

    getCulture(): number;

    getCultureCore(): number;

    raiseNotificationEvent(notificationKind: AutomationNotificationKind, notificationProcessing: AutomationNotificationProcessing, displayString: string, activityId: string): void;

    getHeadingLevel(): AutomationHeadingLevel;

    getHeadingLevelCore(): AutomationHeadingLevel;

    getPattern(patternInterface: PatternInterface): Object;

    raiseAutomationEvent(eventId: AutomationEvents): void;

    raisePropertyChangedEvent(automationProperty: Object, oldValue: Object, newValue: Object): void;

    getAcceleratorKey(): string;

    getAccessKey(): string;

    getAutomationControlType(): AutomationControlType;

    getAutomationId(): string;

    getBoundingRectangle(): Object;

    getChildren(): Object;

    getClassName(): string;

    getClickablePoint(): Object;

    getHelpText(): string;

    getItemStatus(): string;

    getItemType(): string;

    getLabeledBy(): AutomationPeer;

    getLocalizedControlType(): string;

    getName(): string;

    getOrientation(): AutomationOrientation;

    hasKeyboardFocus(): boolean;

    isContentElement(): boolean;

    isControlElement(): boolean;

    isEnabled(): boolean;

    isKeyboardFocusable(): boolean;

    isOffscreen(): boolean;

    isPassword(): boolean;

    isRequiredForForm(): boolean;

    setFocus(): void;

    getParent(): AutomationPeer;

    invalidatePeer(): void;

    getPeerFromPoint(point: Object): AutomationPeer;

    getLiveSetting(): AutomationLiveSetting;

    getPatternCore(patternInterface: PatternInterface): Object;

    getAcceleratorKeyCore(): string;

    getAccessKeyCore(): string;

    getAutomationControlTypeCore(): AutomationControlType;

    getAutomationIdCore(): string;

    getBoundingRectangleCore(): Object;

    getChildrenCore(): Object;

    getClassNameCore(): string;

    getClickablePointCore(): Object;

    getHelpTextCore(): string;

    getItemStatusCore(): string;

    getItemTypeCore(): string;

    getLabeledByCore(): AutomationPeer;

    getLocalizedControlTypeCore(): string;

    getNameCore(): string;

    getOrientationCore(): AutomationOrientation;

    hasKeyboardFocusCore(): boolean;

  }

  export class AutomationPeerAnnotation {
    static peerProperty: Object;
    static typeProperty: Object;
    type: number;
    peer: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(type: number);
    constructor(type: number, peer: AutomationPeer);

  }

  export class FrameworkElementAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    static fromElement(element: Object): AutomationPeer;


    static createPeerForElement(element: Object): AutomationPeer;


  }

  export class ColorSpectrumAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class PersonPictureAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class RatingControlAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ButtonBaseAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class CaptureElementAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ComboBoxItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class FlipViewItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class GroupItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ImageAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListBoxItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class MediaTransportControlsAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class PasswordBoxAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ProgressRingAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class RichTextBlockAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class RichTextBlockOverflowAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class SettingsFlyoutAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class TextBlockAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class TextBoxAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ThumbAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class DatePickerAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class FlyoutPresenterAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class GridViewItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class HubAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListViewBaseHeaderItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class ListViewItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class NavigationViewItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class MediaElementAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class MediaPlayerElementAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class RichEditBoxAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class SearchBoxAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class TimePickerAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class GridViewHeaderItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListViewHeaderItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class TreeViewItemAutomationPeer {
    expandCollapseState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    collapse(): void;

    expand(): void;

  }

  export class ButtonAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    invoke(): void;

  }

  export class HyperlinkButtonAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    invoke(): void;

  }

  export class RepeatButtonAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    invoke(): void;

  }

  export class AutoSuggestBoxAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    invoke(): void;

  }

  export class MenuFlyoutItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    invoke(): void;

  }

  export class AppBarButtonAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ItemsControlAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    findItemByProperty(startAfter: Object, automationProperty: Object, value: Object): Object;

    createItemAutomationPeer(item: Object): ItemAutomationPeer;

    onCreateItemAutomationPeer(item: Object): ItemAutomationPeer;

  }

  export class MenuFlyoutPresenterAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class RangeBaseAutomationPeer {
    isReadOnly: boolean;
    largeChange: number;
    maximum: number;
    minimum: number;
    smallChange: number;
    value: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    setValue(value: number): void;

  }

  export class ProgressBarAutomationPeer {
    isReadOnly: boolean;
    largeChange: number;
    maximum: number;
    minimum: number;
    smallChange: number;
    value: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ScrollBarAutomationPeer {
    isReadOnly: boolean;
    largeChange: number;
    maximum: number;
    minimum: number;
    smallChange: number;
    value: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class SliderAutomationPeer {
    isReadOnly: boolean;
    largeChange: number;
    maximum: number;
    minimum: number;
    smallChange: number;
    value: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ColorPickerSliderAutomationPeer {
    isReadOnly: boolean;
    largeChange: number;
    maximum: number;
    minimum: number;
    smallChange: number;
    value: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class HubSectionAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    scrollIntoView(): void;

  }

  export class ScrollViewerAutomationPeer {
    horizontalScrollPercent: number;
    horizontalViewSize: number;
    horizontallyScrollable: boolean;
    verticalScrollPercent: number;
    verticalViewSize: number;
    verticallyScrollable: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    scroll(horizontalAmount: number, verticalAmount: number): void;

    setScrollPercent(horizontalPercent: number, verticalPercent: number): void;

  }

  export class SelectorAutomationPeer {
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    getSelection(): Array<Object>;

  }

  export class TreeViewListAutomationPeer {
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class FlipViewAutomationPeer {
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListBoxAutomationPeer {
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListViewBaseAutomationPeer {
    dropEffect: string;
    dropEffects: Array<string>;
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class GridViewAutomationPeer {
    dropEffect: string;
    dropEffects: Array<string>;
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListViewAutomationPeer {
    dropEffect: string;
    dropEffects: Array<string>;
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class SemanticZoomAutomationPeer {
    toggleState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class ToggleSwitchAutomationPeer {
    toggleState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class ToggleButtonAutomationPeer {
    toggleState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class CheckBoxAutomationPeer {
    toggleState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class RadioButtonAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    toggleState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    addToSelection(): void;

    removeFromSelection(): void;

    select(): void;

  }

  export class ToggleMenuFlyoutItemAutomationPeer {
    toggleState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class AppBarToggleButtonAutomationPeer {
    toggleState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class CalendarDatePickerAutomationPeer {
    isReadOnly: boolean;
    value: string;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    invoke(): void;

    setValue(value: string): void;

  }

  export class ItemAutomationPeer {
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: ItemsControlAutomationPeer);

    realize(): void;

  }

  export class SelectorItemAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: SelectorAutomationPeer);

    addToSelection(): void;

    removeFromSelection(): void;

    select(): void;

  }

  export class ComboBoxItemDataAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: ComboBoxAutomationPeer);

    scrollIntoView(): void;

  }

  export class FlipViewItemDataAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: FlipViewAutomationPeer);

    scrollIntoView(): void;

  }

  export class ListBoxItemDataAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: ListBoxAutomationPeer);

    scrollIntoView(): void;

  }

  export class GridViewItemDataAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: GridViewAutomationPeer);

    scrollIntoView(): void;

  }

  export class ListViewItemDataAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: ListViewBaseAutomationPeer);

    scrollIntoView(): void;

  }

  export class ComboBoxAutomationPeer {
    expandCollapseState: number;
    isReadOnly: boolean;
    value: string;
    interactionState: number;
    isModal: boolean;
    isTopmost: boolean;
    maximizable: boolean;
    minimizable: boolean;
    visualState: number;
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    collapse(): void;

    expand(): void;

    setValue(value: string): void;

    close(): void;

    setVisualState(state: number): void;

    waitForInputIdle(milliseconds: number): boolean;

  }

  export class AppBarAutomationPeer {
    expandCollapseState: number;
    toggleState: number;
    interactionState: number;
    isModal: boolean;
    isTopmost: boolean;
    maximizable: boolean;
    minimizable: boolean;
    visualState: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

    collapse(): void;

    expand(): void;

    close(): void;

    setVisualState(state: number): void;

    waitForInputIdle(milliseconds: number): boolean;

  }

  export class InkToolbarAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class MapControlAutomationPeer {
    horizontalScrollPercent: number;
    horizontalViewSize: number;
    horizontallyScrollable: boolean;
    verticalScrollPercent: number;
    verticalViewSize: number;
    verticallyScrollable: boolean;
    canRotate: boolean;
    canMove: boolean;
    canResize: boolean;
    zoomLevel: number;
    canZoom: boolean;
    maxZoom: number;
    minZoom: number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

    scroll(horizontalAmount: number, verticalAmount: number): void;

    setScrollPercent(horizontalPercent: number, verticalPercent: number): void;

    zoom(zoom: number): void;

    zoomByUnit(zoomUnit: number): void;

    move(x: number, y: number): void;

    resize(width: number, height: number): void;

    rotate(degrees: number): void;

  }

  export class LoopingSelectorItemDataAutomationPeer {
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

    realize(): void;

  }

  export class DatePickerFlyoutPresenterAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class ListPickerFlyoutPresenterAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class LoopingSelectorAutomationPeer {
    expandCollapseState: number;
    horizontalScrollPercent: number;
    horizontalViewSize: number;
    horizontallyScrollable: boolean;
    verticalScrollPercent: number;
    verticalViewSize: number;
    verticallyScrollable: boolean;
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

    collapse(): void;

    expand(): void;

    findItemByProperty(startAfter: Object, automationProperty: Object, value: Object): Object;

    scroll(horizontalAmount: number, verticalAmount: number): void;

    setScrollPercent(horizontalPercent: number, verticalPercent: number): void;

    getSelection(): Array<Object>;

  }

  export class LoopingSelectorItemAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

    scrollIntoView(): void;

    addToSelection(): void;

    removeFromSelection(): void;

    select(): void;

  }

  export class PickerFlyoutPresenterAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class PivotItemAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class PivotItemDataAutomationPeer {
    isSelected: boolean;
    selectionContainer: Object;
    item: Object;
    itemsControlAutomationPeer: ItemsControlAutomationPeer;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(item: Object, parent: PivotAutomationPeer);

    scrollIntoView(): void;

    addToSelection(): void;

    removeFromSelection(): void;

    select(): void;

    realize(): void;

  }

  export class TimePickerFlyoutPresenterAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class PivotAutomationPeer {
    horizontalScrollPercent: number;
    horizontalViewSize: number;
    horizontallyScrollable: boolean;
    verticalScrollPercent: number;
    verticalViewSize: number;
    verticallyScrollable: boolean;
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    scroll(horizontalAmount: number, verticalAmount: number): void;

    setScrollPercent(horizontalPercent: number, verticalPercent: number): void;

    getSelection(): Array<Object>;

  }

