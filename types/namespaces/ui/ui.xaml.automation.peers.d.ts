  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class RawElementProviderRuntimeId {
    part1: Number;
    part2: Number;
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


    static listenerExists(eventId: AutomationEvents): Boolean;


    isContentElementCore(): Boolean;

    isControlElementCore(): Boolean;

    isEnabledCore(): Boolean;

    isKeyboardFocusableCore(): Boolean;

    isOffscreenCore(): Boolean;

    isPasswordCore(): Boolean;

    isRequiredForFormCore(): Boolean;

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

    raiseTextEditTextChangedEvent(automationTextEditChangeType: Number, changedData: Object): void;

    getPositionInSet(): Number;

    getSizeOfSet(): Number;

    getLevel(): Number;

    raiseStructureChangedEvent(structureChangeType: AutomationStructureChangeType, child: AutomationPeer): void;

    navigateCore(direction: AutomationNavigationDirection): Object;

    getElementFromPointCore(pointInWindowCoordinates: Object): Object;

    getFocusedElementCore(): Object;

    getAnnotationsCore(): Object;

    getPositionInSetCore(): Number;

    getSizeOfSetCore(): Number;

    getLevelCore(): Number;

    getLandmarkType(): AutomationLandmarkType;

    getLocalizedLandmarkType(): String;

    getLandmarkTypeCore(): AutomationLandmarkType;

    getLocalizedLandmarkTypeCore(): String;

    isPeripheral(): Boolean;

    isDataValidForForm(): Boolean;

    getFullDescription(): String;

    isPeripheralCore(): Boolean;

    isDataValidForFormCore(): Boolean;

    getFullDescriptionCore(): String;

    getDescribedByCore(): Object;

    getFlowsToCore(): Object;

    getFlowsFromCore(): Object;

    getCulture(): Number;

    getCultureCore(): Number;

    raiseNotificationEvent(notificationKind: AutomationNotificationKind, notificationProcessing: AutomationNotificationProcessing, displayString: String, activityId: String): void;

    getHeadingLevel(): AutomationHeadingLevel;

    getHeadingLevelCore(): AutomationHeadingLevel;

    getPattern(patternInterface: PatternInterface): Object;

    raiseAutomationEvent(eventId: AutomationEvents): void;

    raisePropertyChangedEvent(automationProperty: Object, oldValue: Object, newValue: Object): void;

    getAcceleratorKey(): String;

    getAccessKey(): String;

    getAutomationControlType(): AutomationControlType;

    getAutomationId(): String;

    getBoundingRectangle(): Object;

    getChildren(): Object;

    getClassName(): String;

    getClickablePoint(): Object;

    getHelpText(): String;

    getItemStatus(): String;

    getItemType(): String;

    getLabeledBy(): AutomationPeer;

    getLocalizedControlType(): String;

    getName(): String;

    getOrientation(): AutomationOrientation;

    hasKeyboardFocus(): Boolean;

    isContentElement(): Boolean;

    isControlElement(): Boolean;

    isEnabled(): Boolean;

    isKeyboardFocusable(): Boolean;

    isOffscreen(): Boolean;

    isPassword(): Boolean;

    isRequiredForForm(): Boolean;

    setFocus(): void;

    getParent(): AutomationPeer;

    invalidatePeer(): void;

    getPeerFromPoint(point: Object): AutomationPeer;

    getLiveSetting(): AutomationLiveSetting;

    getPatternCore(patternInterface: PatternInterface): Object;

    getAcceleratorKeyCore(): String;

    getAccessKeyCore(): String;

    getAutomationControlTypeCore(): AutomationControlType;

    getAutomationIdCore(): String;

    getBoundingRectangleCore(): Object;

    getChildrenCore(): Object;

    getClassNameCore(): String;

    getClickablePointCore(): Object;

    getHelpTextCore(): String;

    getItemStatusCore(): String;

    getItemTypeCore(): String;

    getLabeledByCore(): AutomationPeer;

    getLocalizedControlTypeCore(): String;

    getNameCore(): String;

    getOrientationCore(): AutomationOrientation;

    hasKeyboardFocusCore(): Boolean;

  }

  export class AutomationPeerAnnotation {
    static peerProperty: Object;
    static typeProperty: Object;
    type: Number;
    peer: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(type: Number);
    constructor(type: Number, peer: AutomationPeer);

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
    expandCollapseState: Number;
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
    isReadOnly: Boolean;
    largeChange: Number;
    maximum: Number;
    minimum: Number;
    smallChange: Number;
    value: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    setValue(value: Number): void;

  }

  export class ProgressBarAutomationPeer {
    isReadOnly: Boolean;
    largeChange: Number;
    maximum: Number;
    minimum: Number;
    smallChange: Number;
    value: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ScrollBarAutomationPeer {
    isReadOnly: Boolean;
    largeChange: Number;
    maximum: Number;
    minimum: Number;
    smallChange: Number;
    value: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class SliderAutomationPeer {
    isReadOnly: Boolean;
    largeChange: Number;
    maximum: Number;
    minimum: Number;
    smallChange: Number;
    value: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ColorPickerSliderAutomationPeer {
    isReadOnly: Boolean;
    largeChange: Number;
    maximum: Number;
    minimum: Number;
    smallChange: Number;
    value: Number;
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
    horizontalScrollPercent: Number;
    horizontalViewSize: Number;
    horizontallyScrollable: Boolean;
    verticalScrollPercent: Number;
    verticalViewSize: Number;
    verticallyScrollable: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    scroll(horizontalAmount: Number, verticalAmount: Number): void;

    setScrollPercent(horizontalPercent: Number, verticalPercent: Number): void;

  }

  export class SelectorAutomationPeer {
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    getSelection(): Array<Object>;

  }

  export class TreeViewListAutomationPeer {
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class FlipViewAutomationPeer {
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListBoxAutomationPeer {
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListViewBaseAutomationPeer {
    dropEffect: String;
    dropEffects: Array<String>;
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class GridViewAutomationPeer {
    dropEffect: String;
    dropEffects: Array<String>;
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class ListViewAutomationPeer {
    dropEffect: String;
    dropEffects: Array<String>;
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class SemanticZoomAutomationPeer {
    toggleState: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class ToggleSwitchAutomationPeer {
    toggleState: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class ToggleButtonAutomationPeer {
    toggleState: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class CheckBoxAutomationPeer {
    toggleState: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class RadioButtonAutomationPeer {
    isSelected: Boolean;
    selectionContainer: Object;
    toggleState: Number;
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
    toggleState: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

  }

  export class AppBarToggleButtonAutomationPeer {
    toggleState: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

  }

  export class CalendarDatePickerAutomationPeer {
    isReadOnly: Boolean;
    value: String;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    invoke(): void;

    setValue(value: String): void;

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
    isSelected: Boolean;
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
    isSelected: Boolean;
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
    isSelected: Boolean;
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
    isSelected: Boolean;
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
    isSelected: Boolean;
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
    isSelected: Boolean;
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
    expandCollapseState: Number;
    isReadOnly: Boolean;
    value: String;
    interactionState: Number;
    isModal: Boolean;
    isTopmost: Boolean;
    maximizable: Boolean;
    minimizable: Boolean;
    visualState: Number;
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    collapse(): void;

    expand(): void;

    setValue(value: String): void;

    close(): void;

    setVisualState(state: Number): void;

    waitForInputIdle(milliseconds: Number): Boolean;

  }

  export class AppBarAutomationPeer {
    expandCollapseState: Number;
    toggleState: Number;
    interactionState: Number;
    isModal: Boolean;
    isTopmost: Boolean;
    maximizable: Boolean;
    minimizable: Boolean;
    visualState: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    toggle(): void;

    collapse(): void;

    expand(): void;

    close(): void;

    setVisualState(state: Number): void;

    waitForInputIdle(milliseconds: Number): Boolean;

  }

  export class InkToolbarAutomationPeer {
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

  }

  export class MapControlAutomationPeer {
    horizontalScrollPercent: Number;
    horizontalViewSize: Number;
    horizontallyScrollable: Boolean;
    verticalScrollPercent: Number;
    verticalViewSize: Number;
    verticallyScrollable: Boolean;
    canRotate: Boolean;
    canMove: Boolean;
    canResize: Boolean;
    zoomLevel: Number;
    canZoom: Boolean;
    maxZoom: Number;
    minZoom: Number;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

    scroll(horizontalAmount: Number, verticalAmount: Number): void;

    setScrollPercent(horizontalPercent: Number, verticalPercent: Number): void;

    zoom(zoom: Number): void;

    zoomByUnit(zoomUnit: Number): void;

    move(x: Number, y: Number): void;

    resize(width: Number, height: Number): void;

    rotate(degrees: Number): void;

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
    expandCollapseState: Number;
    horizontalScrollPercent: Number;
    horizontalViewSize: Number;
    horizontallyScrollable: Boolean;
    verticalScrollPercent: Number;
    verticalViewSize: Number;
    verticallyScrollable: Boolean;
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();

    collapse(): void;

    expand(): void;

    findItemByProperty(startAfter: Object, automationProperty: Object, value: Object): Object;

    scroll(horizontalAmount: Number, verticalAmount: Number): void;

    setScrollPercent(horizontalPercent: Number, verticalPercent: Number): void;

    getSelection(): Array<Object>;

  }

  export class LoopingSelectorItemAutomationPeer {
    isSelected: Boolean;
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
    isSelected: Boolean;
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
    horizontalScrollPercent: Number;
    horizontalViewSize: Number;
    horizontallyScrollable: Boolean;
    verticalScrollPercent: Number;
    verticalViewSize: Number;
    verticallyScrollable: Boolean;
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    owner: Object;
    eventsSource: AutomationPeer;
    dispatcher: Object;
    constructor();
    constructor(owner: Object);

    scroll(horizontalAmount: Number, verticalAmount: Number): void;

    setScrollPercent(horizontalPercent: Number, verticalPercent: Number): void;

    getSelection(): Array<Object>;

  }

