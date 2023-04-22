  export class Color {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class IAnnotationProvider {
    annotationTypeId: number;
    annotationTypeName: string;
    author: string;
    dateTime: string;
    target: IRawElementProviderSimple;
    constructor();

  }

  export class IDockProvider {
    dockPosition: number;
    constructor();

    setDockPosition(dockPosition: number): void;

  }

  export class IDragProvider {
    dropEffect: string;
    dropEffects: Array<string>;
    isGrabbed: boolean;
    constructor();

    getGrabbedItems(): Array<Object>;

  }

  export class IDropTargetProvider {
    dropEffect: string;
    dropEffects: Array<string>;
    constructor();

  }

  export class IExpandCollapseProvider {
    expandCollapseState: number;
    constructor();

    collapse(): void;

    expand(): void;

  }

  export class IGridItemProvider {
    column: number;
    columnSpan: number;
    containingGrid: IRawElementProviderSimple;
    row: number;
    rowSpan: number;
    constructor();

  }

  export class IGridProvider {
    columnCount: number;
    rowCount: number;
    constructor();

    getItem(row: number, column: number): IRawElementProviderSimple;

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
    currentView: number;
    constructor();

    getSupportedViews(): Array<number>;

    getViewName(viewId: number): string;

    setCurrentView(viewId: number): void;

  }

  export class IObjectModelProvider {
    constructor();

    getUnderlyingObjectModel(): Object;

  }

  export class IRangeValueProvider {
    isReadOnly: boolean;
    largeChange: number;
    maximum: number;
    minimum: number;
    smallChange: number;
    value: number;
    constructor();

    setValue(value: number): void;

  }

  export class IScrollItemProvider {
    constructor();

    scrollIntoView(): void;

  }

  export class IScrollProvider {
    horizontalScrollPercent: number;
    horizontalViewSize: number;
    horizontallyScrollable: boolean;
    verticalScrollPercent: number;
    verticalViewSize: number;
    verticallyScrollable: boolean;
    constructor();

    scroll(horizontalAmount: number, verticalAmount: number): void;

    setScrollPercent(horizontalPercent: number, verticalPercent: number): void;

  }

  export class ISelectionItemProvider {
    isSelected: boolean;
    selectionContainer: IRawElementProviderSimple;
    constructor();

    addToSelection(): void;

    removeFromSelection(): void;

    select(): void;

  }

  export class ISelectionProvider {
    canSelectMultiple: boolean;
    isSelectionRequired: boolean;
    constructor();

    getSelection(): Array<Object>;

  }

  export class ISpreadsheetItemProvider {
    formula: string;
    constructor();

    getAnnotationObjects(): Array<Object>;

    getAnnotationTypes(): Array<number>;

  }

  export class ISpreadsheetProvider {
    constructor();

    getItemByName(name: string): IRawElementProviderSimple;

  }

  export class IStylesProvider {
    extendedProperties: string;
    fillColor: Object;
    fillPatternColor: Object;
    fillPatternStyle: string;
    shape: string;
    styleId: number;
    styleName: string;
    constructor();

  }

  export class ISynchronizedInputProvider {
    constructor();

    cancel(): void;

    startListening(inputType: number): void;

  }

  export class ITableItemProvider {
    constructor();

    getColumnHeaderItems(): Array<Object>;

    getRowHeaderItems(): Array<Object>;

  }

  export class ITableProvider {
    rowOrColumnMajor: number;
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

    compare(textRangeProvider: ITextRangeProvider): boolean;

    compareEndpoints(endpoint: number, textRangeProvider: ITextRangeProvider, targetEndpoint: number): number;

    expandToEnclosingUnit(unit: number): void;

    findAttribute(attributeId: number, value: Object, backward: boolean): ITextRangeProvider;

    findText(text: string, backward: boolean, ignoreCase: boolean): ITextRangeProvider;

    getAttributeValue(attributeId: number): Object;

    getBoundingRectangles(returnValue: Array<number>): void;

    getEnclosingElement(): IRawElementProviderSimple;

    getText(maxLength: number): string;

    move(unit: number, count: number): number;

    moveEndpointByUnit(endpoint: number, unit: number, count: number): number;

    moveEndpointByRange(endpoint: number, textRangeProvider: ITextRangeProvider, targetEndpoint: number): void;

    select(): void;

    addToSelection(): void;

    removeFromSelection(): void;

    scrollIntoView(alignToTop: boolean): void;

    getChildren(): Array<Object>;

  }

  export class ITextProvider {
    documentRange: ITextRangeProvider;
    supportedTextSelection: number;
    constructor();

    getSelection(): Array<Object>;

    getVisibleRanges(): Array<Object>;

    rangeFromChild(childElement: IRawElementProviderSimple): ITextRangeProvider;

    rangeFromPoint(screenLocation: Object): ITextRangeProvider;

  }

  export class ITextProvider2 {
    constructor();

    rangeFromAnnotation(annotationElement: IRawElementProviderSimple): ITextRangeProvider;

    getCaretRange(isActive: boolean): ITextRangeProvider;

  }

  export class ITextRangeProvider2 {
    constructor();

    showContextMenu(): void;

  }

  export class IToggleProvider {
    toggleState: number;
    constructor();

    toggle(): void;

  }

  export class ITransformProvider {
    canMove: boolean;
    canResize: boolean;
    canRotate: boolean;
    constructor();

    move(x: number, y: number): void;

    resize(width: number, height: number): void;

    rotate(degrees: number): void;

  }

  export class ITransformProvider2 {
    canZoom: boolean;
    maxZoom: number;
    minZoom: number;
    zoomLevel: number;
    constructor();

    zoom(zoom: number): void;

    zoomByUnit(zoomUnit: number): void;

  }

  export class IValueProvider {
    isReadOnly: boolean;
    value: string;
    constructor();

    setValue(value: string): void;

  }

  export class IVirtualizedItemProvider {
    constructor();

    realize(): void;

  }

  export class IWindowProvider {
    interactionState: number;
    isModal: boolean;
    isTopmost: boolean;
    maximizable: boolean;
    minimizable: boolean;
    visualState: number;
    constructor();

    close(): void;

    setVisualState(state: number): void;

    waitForInputIdle(milliseconds: number): boolean;

  }

  export class IRawElementProviderSimple {
    dispatcher: Object;
    constructor();

  }

  export class ICustomNavigationProvider {
    constructor();

    navigateCustom(direction: number): Object;

  }

  export class ITextEditProvider {
    constructor();

    getActiveComposition(): ITextRangeProvider;

    getConversionTarget(): ITextRangeProvider;

  }

