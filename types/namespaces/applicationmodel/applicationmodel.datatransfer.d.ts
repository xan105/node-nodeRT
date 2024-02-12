  export class Color {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum ClipboardHistoryItemsResultStatus {
    success,
    accessDenied,
    clipboardHistoryDisabled,
  }

  export enum DataPackageOperation {
    none,
    copy,
    move,
    link,
  }

  export enum SetHistoryItemAsContentStatus {
    success,
    accessDenied,
    itemDeleted,
  }

  export enum ShareUITheme {
    default,
    light,
    dark,
  }

  export class Clipboard {
    constructor();

    static getHistoryItemsAsync(callback: (error: Error, result: ClipboardHistoryItemsResult) => void): void ;


    static clearHistory(): Boolean;


    static deleteItemFromHistory(item: ClipboardHistoryItem): Boolean;


    static setHistoryItemAsContent(item: ClipboardHistoryItem): SetHistoryItemAsContentStatus;


    static isHistoryEnabled(): Boolean;


    static isRoamingEnabled(): Boolean;


    static setContentWithOptions(content: DataPackage, options: ClipboardContentOptions): Boolean;


    static getContent(): DataPackageView;


    static setContent(content: DataPackage): void;


    static flush(): void;


    static clear(): void;


    addListener(type: "HistoryChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HistoryChanged", listener: (ev: Event) => void): void ;
    on(type: "HistoryChanged", listener: (ev: Event) => void): void ;
    off(type: "HistoryChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "HistoryEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "HistoryEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "HistoryEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "HistoryEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RoamingEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RoamingEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "RoamingEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "RoamingEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ContentChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentChanged", listener: (ev: Event) => void): void ;
    on(type: "ContentChanged", listener: (ev: Event) => void): void ;
    off(type: "ContentChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ClipboardContentOptions {
    isRoamable: Boolean;
    isAllowedInHistory: Boolean;
    historyFormats: Object;
    roamingFormats: Object;
    constructor();

  }

  export class ClipboardHistoryChangedEventArgs {
    constructor();

  }

  export class ClipboardHistoryItem {
    content: DataPackageView;
    id: String;
    timestamp: Date;
    constructor();

  }

  export class ClipboardHistoryItemsResult {
    items: Object;
    status: ClipboardHistoryItemsResultStatus;
    constructor();

  }

  export class DataPackage {
    requestedOperation: DataPackageOperation;
    properties: DataPackagePropertySet;
    resourceMap: Object;
    constructor();

    getView(): DataPackageView;

    setData(formatId: String, value: Object): void;

    setDataProvider(formatId: String, delayRenderer: Object): void;

    setText(value: String): void;

    setUri(value: Object): void;

    setHtmlFormat(value: String): void;

    setRtf(value: String): void;

    setBitmap(value: Object): void;

    setStorageItems(value: Object): void;
    setStorageItems(value: Object, readOnly: Boolean): void;

    setApplicationLink(value: Object): void;

    setWebLink(value: Object): void;

    addListener(type: "Destroyed", listener: (ev: Event) => void): void ;
    removeListener(type: "Destroyed", listener: (ev: Event) => void): void ;
    on(type: "Destroyed", listener: (ev: Event) => void): void ;
    off(type: "Destroyed", listener: (ev: Event) => void): void ;
    
    addListener(type: "OperationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "OperationCompleted", listener: (ev: Event) => void): void ;
    on(type: "OperationCompleted", listener: (ev: Event) => void): void ;
    off(type: "OperationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ShareCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ShareCompleted", listener: (ev: Event) => void): void ;
    on(type: "ShareCompleted", listener: (ev: Event) => void): void ;
    off(type: "ShareCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ShareCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ShareCanceled", listener: (ev: Event) => void): void ;
    on(type: "ShareCanceled", listener: (ev: Event) => void): void ;
    off(type: "ShareCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DataPackagePropertySet {
    title: String;
    thumbnail: Object;
    description: String;
    applicationName: String;
    applicationListingUri: Object;
    fileTypes: Object;
    square30x30Logo: Object;
    packageFamilyName: String;
    logoBackgroundColor: Object;
    contentSourceWebLink: Object;
    contentSourceApplicationLink: Object;
    enterpriseId: String;
    contentSourceUserActivityJson: String;
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class DataPackagePropertySetView {
    applicationListingUri: Object;
    applicationName: String;
    description: String;
    fileTypes: Object;
    thumbnail: Object;
    title: String;
    contentSourceApplicationLink: Object;
    contentSourceWebLink: Object;
    logoBackgroundColor: Object;
    packageFamilyName: String;
    square30x30Logo: Object;
    enterpriseId: String;
    contentSourceUserActivityJson: String;
    isFromRoamingClipboard: Boolean;
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class DataPackageView {
    availableFormats: Object;
    properties: DataPackagePropertySetView;
    requestedOperation: DataPackageOperation;
    constructor();

    getDataAsync(formatId: String, callback: (error: Error, result: Object) => void): void ;

    getTextAsync(callback: (error: Error, result: String) => void): void ;
    getTextAsync(formatId: String, callback: (error: Error, result: String) => void): void ;

    getUriAsync(callback: (error: Error, result: Object) => void): void ;

    getHtmlFormatAsync(callback: (error: Error, result: String) => void): void ;

    getResourceMapAsync(callback: (error: Error, result: Object) => void): void ;

    getRtfAsync(callback: (error: Error, result: String) => void): void ;

    getBitmapAsync(callback: (error: Error, result: Object) => void): void ;

    getStorageItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getApplicationLinkAsync(callback: (error: Error, result: Object) => void): void ;

    getWebLinkAsync(callback: (error: Error, result: Object) => void): void ;

    requestAccessAsync(callback: (error: Error, result: Number) => void): void ;
    requestAccessAsync(enterpriseId: String, callback: (error: Error, result: Number) => void): void ;

    reportOperationCompleted(value: DataPackageOperation): void;

    contains(formatId: String): Boolean;

    unlockAndAssumeEnterpriseIdentity(): Number;

    setAcceptedFormatId(formatId: String): void;

  }

  export class DataProviderDeferral {
    constructor();

    complete(): void;

  }

  export class DataProviderRequest {
    deadline: Date;
    formatId: String;
    constructor();

    getDeferral(): DataProviderDeferral;

    setData(value: Object): void;

  }

  export class DataRequest {
    data: DataPackage;
    deadline: Date;
    constructor();

    failWithDisplayText(value: String): void;

    getDeferral(): DataRequestDeferral;

  }

  export class DataRequestDeferral {
    constructor();

    complete(): void;

  }

  export class DataRequestedEventArgs {
    request: DataRequest;
    constructor();

  }

  export class DataTransferManager {
    constructor();

    static showShareUI(options: ShareUIOptions): void;
    static showShareUI(): void;


    static isSupported(): Boolean;


    static getForCurrentView(): DataTransferManager;


    addListener(type: "DataRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DataRequested", listener: (ev: Event) => void): void ;
    on(type: "DataRequested", listener: (ev: Event) => void): void ;
    off(type: "DataRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "TargetApplicationChosen", listener: (ev: Event) => void): void ;
    removeListener(type: "TargetApplicationChosen", listener: (ev: Event) => void): void ;
    on(type: "TargetApplicationChosen", listener: (ev: Event) => void): void ;
    off(type: "TargetApplicationChosen", listener: (ev: Event) => void): void ;
    
    addListener(type: "ShareProvidersRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ShareProvidersRequested", listener: (ev: Event) => void): void ;
    on(type: "ShareProvidersRequested", listener: (ev: Event) => void): void ;
    off(type: "ShareProvidersRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HtmlFormatHelper {
    constructor();

    static getStaticFragment(htmlFormat: String): String;


    static createHtmlFormat(htmlFragment: String): String;


  }

  export class OperationCompletedEventArgs {
    operation: DataPackageOperation;
    acceptedFormatId: String;
    constructor();

  }

  export class ShareCompletedEventArgs {
    shareTarget: ShareTargetInfo;
    constructor();

  }

  export class ShareProvider {
    tag: Object;
    backgroundColor: Object;
    displayIcon: Object;
    title: String;
    constructor();
    constructor(title: String, displayIcon: Object, backgroundColor: Object, handler: Object);

  }

  export class ShareProviderOperation {
    data: DataPackageView;
    provider: ShareProvider;
    constructor();

    reportCompleted(): void;

  }

  export class ShareProvidersRequestedEventArgs {
    data: DataPackageView;
    providers: Object;
    constructor();

    getDeferral(): Object;

  }

  export class ShareTargetInfo {
    appUserModelId: String;
    shareProvider: ShareProvider;
    constructor();

  }

  export class ShareUIOptions {
    theme: ShareUITheme;
    selectionRect: Object;
    constructor();

  }

  export class SharedStorageAccessManager {
    constructor();

    static redeemTokenForFileAsync(token: String, callback: (error: Error, result: Object) => void): void ;


    static addFile(file: Object): String;


    static removeFile(token: String): void;


  }

  export class StandardDataFormats {
    static bitmap: String;
    static html: String;
    static rtf: String;
    static storageItems: String;
    static text: String;
    static uri: String;
    static applicationLink: String;
    static webLink: String;
    static userActivityJsonArray: String;
    constructor();

  }

  export class TargetApplicationChosenEventArgs {
    applicationName: String;
    constructor();

  }

export const ClipboardHistoryItemsResultStatus: any;
export const DataPackageOperation: any;
export const SetHistoryItemAsContentStatus: any;
export const ShareUITheme: any;
export const Clipboard: any;
export const ClipboardContentOptions: any;
export const ClipboardHistoryChangedEventArgs: any;
export const ClipboardHistoryItem: any;
export const ClipboardHistoryItemsResult: any;
export const DataPackage: any;
export const DataPackagePropertySet: any;
export const DataPackagePropertySetView: any;
export const DataPackageView: any;
export const DataProviderDeferral: any;
export const DataProviderRequest: any;
export const DataRequest: any;
export const DataRequestDeferral: any;
export const DataRequestedEventArgs: any;
export const DataTransferManager: any;
export const HtmlFormatHelper: any;
export const OperationCompletedEventArgs: any;
export const ShareCompletedEventArgs: any;
export const ShareProvider: any;
export const ShareProviderOperation: any;
export const ShareProvidersRequestedEventArgs: any;
export const ShareTargetInfo: any;
export const ShareUIOptions: any;
export const SharedStorageAccessManager: any;
export const StandardDataFormats: any;
export const TargetApplicationChosenEventArgs: any;
export * as dragdrop from "./applicationmodel.datatransfer.dragdrop.js";
export * as sharetarget from "./applicationmodel.datatransfer.sharetarget.js";
