  export class BasicGeoposition {
    latitude: number;
    longitude: number;
    altitude: number;
    constructor();
  }

  export class Color {
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

  export enum WalletSummaryViewPosition {
    hidden,
    field1,
    field2,
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

  export class WalletBarcode {
    symbology: WalletBarcodeSymbology;
    value: string;
    constructor();
    constructor(symbology: WalletBarcodeSymbology, value: string);
    constructor(streamToBarcodeImage: Object);

    getImageAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class WalletTransaction {
    transactionDate: Date;
    isLaunchable: boolean;
    ignoreTimeOfDay: boolean;
    displayLocation: string;
    displayAmount: string;
    description: string;
    constructor();

  }

  export class WalletRelevantLocation {
    position: BasicGeoposition;
    displayMessage: string;
    constructor();

  }

  export class WalletItemCustomProperty {
    value: string;
    summaryViewPosition: WalletSummaryViewPosition;
    name: string;
    detailViewPosition: WalletDetailViewPosition;
    autoDetectLinks: boolean;
    constructor();
    constructor(name: string, value: string);

  }

  export class WalletVerb {
    name: string;
    constructor();
    constructor(name: string);

  }

  export class WalletItem {
    displayName: string;
    displayMessage: string;
    logoText: string;
    bodyFontColor: Object;
    bodyColor: Object;
    bodyBackgroundImage: Object;
    isDisplayMessageLaunchable: boolean;
    isAcknowledged: boolean;
    isMoreTransactionHistoryLaunchable: boolean;
    headerFontColor: Object;
    headerColor: Object;
    headerBackgroundImage: Object;
    expirationDate: Date;
    logo99x99: Object;
    logoImage: Object;
    promotionalImage: Object;
    logo159x159: Object;
    lastUpdated: Date;
    issuerDisplayName: string;
    barcode: WalletBarcode;
    relevantDateDisplayMessage: string;
    relevantDate: Date;
    logo336x336: Object;
    kind: WalletItemKind;
    displayProperties: Object;
    id: string;
    relevantLocations: Object;
    transactionHistory: Object;
    verbs: Object;
    constructor();
    constructor(kind: WalletItemKind, displayName: string);

  }

  export class WalletItemStore {
    constructor();

    addAsync(id: string, item: WalletItem, callback: (error: Error) => void): void ;

    clearAsync(callback: (error: Error) => void): void ;

    getWalletItemAsync(id: string, callback: (error: Error, result: WalletItem) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(kind: WalletItemKind, callback: (error: Error, result: Object) => void): void ;

    importItemAsync(stream: Object, callback: (error: Error, result: WalletItem) => void): void ;

    deleteAsync(id: string, callback: (error: Error) => void): void ;

    showAsync(callback: (error: Error) => void): void ;
    showAsync(id: string, callback: (error: Error) => void): void ;

    updateAsync(item: WalletItem, callback: (error: Error) => void): void ;

  }

  export class WalletManager {
    constructor();

    static requestStoreAsync(callback: (error: Error, result: WalletItemStore) => void): void ;


  }

export * as system from "./applicationmodel.wallet.system.js";