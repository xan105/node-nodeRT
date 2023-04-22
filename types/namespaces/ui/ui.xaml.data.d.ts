  export class LoadMoreItemsResult {
    count: number;
    constructor();
  }

  export enum BindingMode {
    oneWay,
    oneTime,
    twoWay,
  }

  export enum RelativeSourceMode {
    none,
    templatedParent,
    self,
  }

  export enum UpdateSourceTrigger {
    default,
    propertyChanged,
    explicit,
    lostFocus,
  }

  export class IItemsRangeInfo {
    constructor();

    rangesChanged(visibleRange: ItemIndexRange, trackedItems: Object): void;

  }

  export class ISelectionInfo {
    constructor();

    selectRange(itemIndexRange: ItemIndexRange): void;

    deselectRange(itemIndexRange: ItemIndexRange): void;

    isSelected(index: number): boolean;

    getSelectedRanges(): Object;

  }

  export class BindableAttribute {
    typeId: Object;
    constructor();

  }

  export class CurrentChangingEventArgs {
    cancel: boolean;
    isCancelable: boolean;
    constructor();
    constructor(isCancelable: boolean);

  }

  export class ICustomProperty {
    canRead: boolean;
    canWrite: boolean;
    name: string;
    type: Object;
    constructor();

    getValue(target: Object): Object;

    setValue(target: Object, value: Object): void;

    getIndexedValue(target: Object, index: Object): Object;

    setIndexedValue(target: Object, value: Object, index: Object): void;

  }

  export class ICustomPropertyProvider {
    type: Object;
    constructor();

    getCustomProperty(name: string): ICustomProperty;

    getIndexedProperty(name: string, type: Object): ICustomProperty;

    getStringRepresentation(): string;

  }

  export class ISupportIncrementalLoading {
    hasMoreItems: boolean;
    constructor();

    loadMoreItemsAsync(count: number, callback: (error: Error, result: LoadMoreItemsResult) => void): void ;

  }

  export class IValueConverter {
    constructor();

    convert(value: Object, targetType: Object, parameter: Object, language: string): Object;

    convertBack(value: Object, targetType: Object, parameter: Object, language: string): Object;

  }

  export class BindingExpressionBase {
    constructor();

  }

  export class BindingOperations {
    constructor();

    static setBinding(target: Object, dp: Object, binding: BindingBase): void;


  }

  export class BindingBase {
    dispatcher: Object;
    constructor();

  }

  export class BindingExpression {
    dataItem: Object;
    parentBinding: Binding;
    constructor();

    updateSource(): void;

  }

  export class RelativeSource {
    mode: RelativeSourceMode;
    dispatcher: Object;
    constructor();

  }

  export class Binding {
    mode: BindingMode;
    elementName: string;
    converterParameter: Object;
    converterLanguage: string;
    converter: IValueConverter;
    source: Object;
    relativeSource: RelativeSource;
    path: Object;
    updateSourceTrigger: UpdateSourceTrigger;
    targetNullValue: Object;
    fallbackValue: Object;
    dispatcher: Object;
    constructor();

  }

  export class ICollectionView {
    collectionGroups: Object;
    currentItem: Object;
    currentPosition: number;
    hasMoreItems: boolean;
    isCurrentAfterLast: boolean;
    isCurrentBeforeFirst: boolean;
    constructor();

    loadMoreItemsAsync(count: number, callback: (error: Error, result: LoadMoreItemsResult) => void): void ;

    moveCurrentTo(item: Object): boolean;

    moveCurrentToPosition(index: number): boolean;

    moveCurrentToFirst(): boolean;

    moveCurrentToLast(): boolean;

    moveCurrentToNext(): boolean;

    moveCurrentToPrevious(): boolean;

    addListener(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    on(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    off(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CurrentChanging", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentChanging", listener: (ev: Event) => void): void ;
    on(type: "CurrentChanging", listener: (ev: Event) => void): void ;
    off(type: "CurrentChanging", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ICollectionViewFactory {
    constructor();

    createView(): ICollectionView;

  }

  export class ICollectionViewGroup {
    group: Object;
    groupItems: Object;
    constructor();

  }

  export class ItemIndexRange {
    firstIndex: number;
    lastIndex: number;
    length: number;
    constructor();
    constructor(firstIndex: number, length: number);

  }

  export class CollectionViewSource {
    static isSourceGroupedProperty: Object;
    static itemsPathProperty: Object;
    static sourceProperty: Object;
    static viewProperty: Object;
    source: Object;
    itemsPath: Object;
    isSourceGrouped: boolean;
    view: ICollectionView;
    dispatcher: Object;
    constructor();

  }

