  export class LoadMoreItemsResult {
    count: Number;
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

    isSelected(index: Number): Boolean;

    getSelectedRanges(): Object;

  }

  export class BindableAttribute {
    typeId: Object;
    constructor();

  }

  export class CurrentChangingEventArgs {
    cancel: Boolean;
    isCancelable: Boolean;
    constructor();
    constructor(isCancelable: Boolean);

  }

  export class ICustomProperty {
    canRead: Boolean;
    canWrite: Boolean;
    name: String;
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

    getCustomProperty(name: String): ICustomProperty;

    getIndexedProperty(name: String, type: Object): ICustomProperty;

    getStringRepresentation(): String;

  }

  export class ISupportIncrementalLoading {
    hasMoreItems: Boolean;
    constructor();

    loadMoreItemsAsync(count: Number, callback: (error: Error, result: LoadMoreItemsResult) => void): void ;

  }

  export class IValueConverter {
    constructor();

    convert(value: Object, targetType: Object, parameter: Object, language: String): Object;

    convertBack(value: Object, targetType: Object, parameter: Object, language: String): Object;

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
    elementName: String;
    converterParameter: Object;
    converterLanguage: String;
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
    currentPosition: Number;
    hasMoreItems: Boolean;
    isCurrentAfterLast: Boolean;
    isCurrentBeforeFirst: Boolean;
    constructor();

    loadMoreItemsAsync(count: Number, callback: (error: Error, result: LoadMoreItemsResult) => void): void ;

    moveCurrentTo(item: Object): Boolean;

    moveCurrentToPosition(index: Number): Boolean;

    moveCurrentToFirst(): Boolean;

    moveCurrentToLast(): Boolean;

    moveCurrentToNext(): Boolean;

    moveCurrentToPrevious(): Boolean;

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
    firstIndex: Number;
    lastIndex: Number;
    length: Number;
    constructor();
    constructor(firstIndex: Number, length: Number);

  }

  export class CollectionViewSource {
    static isSourceGroupedProperty: Object;
    static itemsPathProperty: Object;
    static sourceProperty: Object;
    static viewProperty: Object;
    source: Object;
    itemsPath: Object;
    isSourceGrouped: Boolean;
    view: ICollectionView;
    dispatcher: Object;
    constructor();

  }

