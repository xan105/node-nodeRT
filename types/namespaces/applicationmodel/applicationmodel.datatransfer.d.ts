  export class Color {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum DataPackageOperation {
    none,
    copy,
    move,
    link,
  }

  export enum ShareUITheme {
    default,
    light,
    dark,
  }

  export class StandardDataFormats {
    static bitmap: string;
    static html: string;
    static rtf: string;
    static storageItems: string;
    static text: string;
    static uri: string;
    static applicationLink: string;
    static webLink: string;
    static userActivityJsonArray: string;
    constructor();

  }

  export class DataPackagePropertySetView {
    applicationListingUri: Object;
    applicationName: string;
    description: string;
    fileTypes: Object;
    thumbnail: Object;
    title: string;
    contentSourceApplicationLink: Object;
    contentSourceWebLink: Object;
    logoBackgroundColor: Object;
    packageFamilyName: string;
    square30x30Logo: Object;
    enterpriseId: string;
    contentSourceUserActivityJson: string;
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class DataPackagePropertySet {
    title: string;
    thumbnail: Object;
    description: string;
    applicationName: string;
    applicationListingUri: Object;
    fileTypes: Object;
    square30x30Logo: Object;
    packageFamilyName: string;
    logoBackgroundColor: Object;
    contentSourceWebLink: Object;
    contentSourceApplicationLink: Object;
    enterpriseId: string;
    contentSourceUserActivityJson: string;
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

  }

  export class DataProviderDeferral {
    constructor();

    complete(): void;

  }

  export class DataProviderRequest {
    deadline: Date;
    formatId: string;
    constructor();

    getDeferral(): DataProviderDeferral;

    setData(value: Object): void;

  }

  export class OperationCompletedEventArgs {
    operation: DataPackageOperation;
    acceptedFormatId: string;
    constructor();

  }

  export class ShareProviderOperation {
    data: DataPackageView;
    provider: ShareProvider;
    constructor();

    reportCompleted(): void;

  }

  export class ShareProvider {
    tag: Object;
    backgroundColor: Object;
    displayIcon: Object;
    title: string;
    constructor();
    constructor(title: string, displayIcon: Object, backgroundColor: Object, handler: Object);

  }

  export class DataPackageView {
    availableFormats: Object;
    properties: DataPackagePropertySetView;
    requestedOperation: DataPackageOperation;
    constructor();

    getDataAsync(formatId: string, callback: (error: Error, result: Object) => void): void ;

    getTextAsync(callback: (error: Error, result: string) => void): void ;
    getTextAsync(formatId: string, callback: (error: Error, result: string) => void): void ;

    getUriAsync(callback: (error: Error, result: Object) => void): void ;

    getHtmlFormatAsync(callback: (error: Error, result: string) => void): void ;

    getResourceMapAsync(callback: (error: Error, result: Object) => void): void ;

    getRtfAsync(callback: (error: Error, result: string) => void): void ;

    getBitmapAsync(callback: (error: Error, result: Object) => void): void ;

    getStorageItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getApplicationLinkAsync(callback: (error: Error, result: Object) => void): void ;

    getWebLinkAsync(callback: (error: Error, result: Object) => void): void ;

    requestAccessAsync(callback: (error: Error, result: number) => void): void ;
    requestAccessAsync(enterpriseId: string, callback: (error: Error, result: number) => void): void ;

    reportOperationCompleted(value: DataPackageOperation): void;

    contains(formatId: string): boolean;

    unlockAndAssumeEnterpriseIdentity(): number;

    setAcceptedFormatId(formatId: string): void;

  }

  export class ShareTargetInfo {
    appUserModelId: string;
    shareProvider: ShareProvider;
    constructor();

  }

  export class ShareCompletedEventArgs {
    shareTarget: ShareTargetInfo;
    constructor();

  }

  export class DataPackage {
    requestedOperation: DataPackageOperation;
    properties: DataPackagePropertySet;
    resourceMap: Object;
    constructor();

    getView(): DataPackageView;

    setData(formatId: string, value: Object): void;

    setDataProvider(formatId: string, delayRenderer: Object): void;

    setText(value: string): void;

    setUri(value: Object): void;

    setHtmlFormat(value: string): void;

    setRtf(value: string): void;

    setBitmap(value: Object): void;

    setStorageItems(value: Object): void;
    setStorageItems(value: Object, readOnly: boolean): void;

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
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HtmlFormatHelper {
    constructor();

    static getStaticFragment(htmlFormat: string): string;


    static createHtmlFormat(htmlFragment: string): string;


  }

  export class Clipboard {
    constructor();

    static getContent(): DataPackageView;


    static setContent(content: DataPackage): void;


    static flush(): void;


    static clear(): void;


    addListener(type: "ContentChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentChanged", listener: (ev: Event) => void): void ;
    on(type: "ContentChanged", listener: (ev: Event) => void): void ;
    off(type: "ContentChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ShareUIOptions {
    theme: ShareUITheme;
    selectionRect: Object;
    constructor();

  }

  export class DataRequestDeferral {
    constructor();

    complete(): void;

  }

  export class DataRequest {
    data: DataPackage;
    deadline: Date;
    constructor();

    failWithDisplayText(value: string): void;

    getDeferral(): DataRequestDeferral;

  }

  export class DataRequestedEventArgs {
    request: DataRequest;
    constructor();

  }

  export class ShareProvidersRequestedEventArgs {
    data: DataPackageView;
    providers: Object;
    constructor();

    getDeferral(): Object;

  }

  export class TargetApplicationChosenEventArgs {
    applicationName: string;
    constructor();

  }

  export class DataTransferManager {
    constructor();

    static showShareUI(options: ShareUIOptions): void;
    static showShareUI(): void;


    static isSupported(): boolean;


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

  export class SharedStorageAccessManager {
    constructor();

    static redeemTokenForFileAsync(token: string, callback: (error: Error, result: Object) => void): void ;


    static addFile(file: Object): string;


    static removeFile(token: string): void;


  }

export * as dragdrop from "./applicationmodel.datatransfer.dragdrop.js";
export * as sharetarget from "./applicationmodel.datatransfer.sharetarget.js";