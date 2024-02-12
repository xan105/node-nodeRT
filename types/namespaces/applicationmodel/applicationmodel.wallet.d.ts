  export class Color {
    constructor();
  }

  export class BasicGeoposition {
    latitude: Number;
    longitude: Number;
    altitude: Number;
    constructor();
  }

  export class WalletContract {
    constructor();
  }

  export enum WalletActionKind {
    openItem,
    transaction,
    moreTransactions,
    message,
    verb,
  }

  export enum WalletBarcodeSymbology {
    invalid,
    upca,
    upce,
    ean13,
    ean8,
    itf,
    code39,
    code128,
    qr,
    pdf417,
    aztec,
    custom,
  }

  export enum WalletDetailViewPosition {
    hidden,
    headerField1,
    headerField2,
    primaryField1,
    primaryField2,
    secondaryField1,
    secondaryField2,
    secondaryField3,
    secondaryField4,
    secondaryField5,
    centerField1,
    footerField1,
    footerField2,
    footerField3,
    footerField4,
  }

  export enum WalletItemKind {
    invalid,
    deal,
    general,
    paymentInstrument,
    ticket,
    boardingPass,
    membershipCard,
  }

  export enum WalletSummaryViewPosition {
    hidden,
    field1,
    field2,
  }

  export class WalletBarcode {
    symbology: WalletBarcodeSymbology;
    value: String;
    constructor();
    constructor(symbology: WalletBarcodeSymbology, value: String);
    constructor(streamToBarcodeImage: Object);

    getImageAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class WalletItem {
    displayName: String;
    displayMessage: String;
    logoText: String;
    bodyFontColor: Object;
    bodyColor: Object;
    bodyBackgroundImage: Object;
    isDisplayMessageLaunchable: Boolean;
    isAcknowledged: Boolean;
    isMoreTransactionHistoryLaunchable: Boolean;
    headerFontColor: Object;
    headerColor: Object;
    headerBackgroundImage: Object;
    expirationDate: Date;
    logo99x99: Object;
    logoImage: Object;
    promotionalImage: Object;
    logo159x159: Object;
    lastUpdated: Date;
    issuerDisplayName: String;
    barcode: WalletBarcode;
    relevantDateDisplayMessage: String;
    relevantDate: Date;
    logo336x336: Object;
    kind: WalletItemKind;
    displayProperties: Object;
    id: String;
    relevantLocations: Object;
    transactionHistory: Object;
    verbs: Object;
    constructor();
    constructor(kind: WalletItemKind, displayName: String);

  }

  export class WalletItemCustomProperty {
    value: String;
    summaryViewPosition: WalletSummaryViewPosition;
    name: String;
    detailViewPosition: WalletDetailViewPosition;
    autoDetectLinks: Boolean;
    constructor();
    constructor(name: String, value: String);

  }

  export class WalletItemStore {
    constructor();

    addAsync(id: String, item: WalletItem, callback: (error: Error) => void): void ;

    clearAsync(callback: (error: Error) => void): void ;

    getWalletItemAsync(id: String, callback: (error: Error, result: WalletItem) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(kind: WalletItemKind, callback: (error: Error, result: Object) => void): void ;

    importItemAsync(stream: Object, callback: (error: Error, result: WalletItem) => void): void ;

    deleteAsync(id: String, callback: (error: Error) => void): void ;

    showAsync(callback: (error: Error) => void): void ;
    showAsync(id: String, callback: (error: Error) => void): void ;

    updateAsync(item: WalletItem, callback: (error: Error) => void): void ;

  }

  export class WalletManager {
    constructor();

    static requestStoreAsync(callback: (error: Error, result: WalletItemStore) => void): void ;


  }

  export class WalletRelevantLocation {
    position: BasicGeoposition;
    displayMessage: String;
    constructor();

  }

  export class WalletTransaction {
    transactionDate: Date;
    isLaunchable: Boolean;
    ignoreTimeOfDay: Boolean;
    displayLocation: String;
    displayAmount: String;
    description: String;
    constructor();

  }

  export class WalletVerb {
    name: String;
    constructor();
    constructor(name: String);

  }

export const WalletActionKind: any;
export const WalletBarcodeSymbology: any;
export const WalletDetailViewPosition: any;
export const WalletItemKind: any;
export const WalletSummaryViewPosition: any;
export const WalletBarcode: any;
export const WalletItem: any;
export const WalletItemCustomProperty: any;
export const WalletItemStore: any;
export const WalletManager: any;
export const WalletRelevantLocation: any;
export const WalletTransaction: any;
export const WalletVerb: any;
export * as system from "./applicationmodel.wallet.system.js";
