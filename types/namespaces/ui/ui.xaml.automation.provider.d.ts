  export class Color {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class IAnnotationProvider {
    annotationTypeId: Number;
    annotationTypeName: String;
    author: String;
    dateTime: String;
    target: IRawElementProviderSimple;
    constructor();

  }

  export class IDockProvider {
    dockPosition: Number;
    constructor();

    setDockPosition(dockPosition: Number): void;

  }

  export class IDragProvider {
    dropEffect: String;
    dropEffects: Array<String>;
    isGrabbed: Boolean;
    constructor();

    getGrabbedItems(): Array<Object>;

  }

  export class IDropTargetProvider {
    dropEffect: String;
    dropEffects: Array<String>;
    constructor();

  }

  export class IExpandCollapseProvider {
    expandCollapseState: Number;
    constructor();

    collapse(): void;

    expand(): void;

  }

  export class IGridItemProvider {
    column: Number;
    columnSpan: Number;
    containingGrid: IRawElementProviderSimple;
    row: Number;
    rowSpan: Number;
    constructor();

  }

  export class IGridProvider {
    columnCount: Number;
    rowCount: Number;
    constructor();

    getItem(row: Number, column: Number): IRawElementProviderSimple;

  }

  export class IInvokeProvider {
    constructor();

    invoke(): void;

  }

  export class IItemContainerProvider {
    constructor();

    findItemByProperty(startAfter: IRawElementProviderSimple, automationProperty: Object, value: Object): IRawElementProviderSimple;

  }

  export class IMultipleViewProvider {
    currentView: Number;
    constructor();

    getSupportedViews(): Array<Number>;

    getViewName(viewId: Number): String;

    setCurrentView(viewId: Number): void;

  }

  export class IObjectModelProvider {
    constructor();

    getUnderlyingObjectModel(): Object;

  }

  export class IRangeValueProvider {
    isReadOnly: Boolean;
    largeChange: Number;
    maximum: Number;
    minimum: Number;
    smallChange: Number;
    value: Number;
    constructor();

    setValue(value: Number): void;

  }

  export class IScrollItemProvider {
    constructor();

    scrollIntoView(): void;

  }

  export class IScrollProvider {
    horizontalScrollPercent: Number;
    horizontalViewSize: Number;
    horizontallyScrollable: Boolean;
    verticalScrollPercent: Number;
    verticalViewSize: Number;
    verticallyScrollable: Boolean;
    constructor();

    scroll(horizontalAmount: Number, verticalAmount: Number): void;

    setScrollPercent(horizontalPercent: Number, verticalPercent: Number): void;

  }

  export class ISelectionItemProvider {
    isSelected: Boolean;
    selectionContainer: IRawElementProviderSimple;
    constructor();

    addToSelection(): void;

    removeFromSelection(): void;

    select(): void;

  }

  export class ISelectionProvider {
    canSelectMultiple: Boolean;
    isSelectionRequired: Boolean;
    constructor();

    getSelection(): Array<Object>;

  }

  export class ISpreadsheetItemProvider {
    formula: String;
    constructor();

    getAnnotationObjects(): Array<Object>;

    getAnnotationTypes(): Array<Number>;

  }

  export class ISpreadsheetProvider {
    constructor();

    getItemByName(name: String): IRawElementProviderSimple;

  }

  export class IStylesProvider {
    extendedProperties: String;
    fillColor: Object;
    fillPatternColor: Object;
    fillPatternStyle: String;
    shape: String;
    styleId: Number;
    styleName: String;
    constructor();

  }

  export class ISynchronizedInputProvider {
    constructor();

    cancel(): void;

    startListening(inputType: Number): void;

  }

  export class ITableItemProvider {
    constructor();

    getColumnHeaderItems(): Array<Object>;

    getRowHeaderItems(): Array<Object>;

  }

  export class ITableProvider {
    rowOrColumnMajor: Number;
    constructor();

    getColumnHeaders(): Array<Object>;

    getRowHeaders(): Array<Object>;

  }

  export class ITextChildProvider {
    textContainer: IRawElementProviderSimple;
    textRange: ITextRangeProvider;
    constructor();

  }

  export class ITextRangeProvider {
    constructor();

    clone(): ITextRangeProvider;

    compare(textRangeProvider: ITextRangeProvider): Boolean;

    compareEndpoints(endpoint: Number, textRangeProvider: ITextRangeProvider, targetEndpoint: Number): Number;

    expandToEnclosingUnit(unit: Number): void;

    findAttribute(attributeId: Number, value: Object, backward: Boolean): ITextRangeProvider;

    findText(text: String, backward: Boolean, ignoreCase: Boolean): ITextRangeProvider;

    getAttributeValue(attributeId: Number): Object;

    getBoundingRectangles(returnValue: Array<Number>): void;

    getEnclosingElement(): IRawElementProviderSimple;

    getText(maxLength: Number): String;

    move(unit: Number, count: Number): Number;

    moveEndpointByUnit(endpoint: Number, unit: Number, count: Number): Number;

    moveEndpointByRange(endpoint: Number, textRangeProvider: ITextRangeProvider, targetEndpoint: Number): void;

    select(): void;

    addToSelection(): void;

    removeFromSelection(): void;

    scrollIntoView(alignToTop: Boolean): void;

    getChildren(): Array<Object>;

  }

  export class ITextProvider {
    documentRange: ITextRangeProvider;
    supportedTextSelection: Number;
    constructor();

    getSelection(): Array<Object>;

    getVisibleRanges(): Array<Object>;

    rangeFromChild(childElement: IRawElementProviderSimple): ITextRangeProvider;

    rangeFromPoint(screenLocation: Object): ITextRangeProvider;

  }

  export class ITextProvider2 {
    constructor();

    rangeFromAnnotation(annotationElement: IRawElementProviderSimple): ITextRangeProvider;

    getCaretRange(isActive: Boolean): ITextRangeProvider;

  }

  export class ITextRangeProvider2 {
    constructor();

    showContextMenu(): void;

  }

  export class IToggleProvider {
    toggleState: Number;
    constructor();

    toggle(): void;

  }

  export class ITransformProvider {
    canMove: Boolean;
    canResize: Boolean;
    canRotate: Boolean;
    constructor();

    move(x: Number, y: Number): void;

    resize(width: Number, height: Number): void;

    rotate(degrees: Number): void;

  }

  export class ITransformProvider2 {
    canZoom: Boolean;
    maxZoom: Number;
    minZoom: Number;
    zoomLevel: Number;
    constructor();

    zoom(zoom: Number): void;

    zoomByUnit(zoomUnit: Number): void;

  }

  export class IValueProvider {
    isReadOnly: Boolean;
    value: String;
    constructor();

    setValue(value: String): void;

  }

  export class IVirtualizedItemProvider {
    constructor();

    realize(): void;

  }

  export class IWindowProvider {
    interactionState: Number;
    isModal: Boolean;
    isTopmost: Boolean;
    maximizable: Boolean;
    minimizable: Boolean;
    visualState: Number;
    constructor();

    close(): void;

    setVisualState(state: Number): void;

    waitForInputIdle(milliseconds: Number): Boolean;

  }

  export class IRawElementProviderSimple {
    dispatcher: Object;
    constructor();

  }

  export class ICustomNavigationProvider {
    constructor();

    navigateCustom(direction: Number): Object;

  }

  export class ITextEditProvider {
    constructor();

    getActiveComposition(): ITextRangeProvider;

    getConversionTarget(): ITextRangeProvider;

  }

