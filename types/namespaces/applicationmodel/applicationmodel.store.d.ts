  export enum FulfillmentResult {
    succeeded,
    nothingToFulfill,
    purchasePending,
    purchaseReverted,
    serverError,
  }

  export enum ProductPurchaseStatus {
    succeeded,
    alreadyPurchased,
    notFulfilled,
    notPurchased,
  }

  export enum ProductType {
    unknown,
    durable,
    consumable,
  }

  export class CurrentApp {
    static appId: String;
    static licenseInformation: LicenseInformation;
    static linkUri: Object;
    constructor();

    static getCustomerPurchaseIdAsync(serviceTicket: String, publisherUserId: String, callback: (error: Error, result: String) => void): void ;


    static getCustomerCollectionsIdAsync(serviceTicket: String, publisherUserId: String, callback: (error: Error, result: String) => void): void ;


    static getAppPurchaseCampaignIdAsync(callback: (error: Error, result: String) => void): void ;


    static loadListingInformationByProductIdsAsync(productIds: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static loadListingInformationByKeywordsAsync(keywords: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static reportConsumableFulfillmentAsync(productId: String, transactionId: String, callback: (error: Error, result: FulfillmentResult) => void): void ;


    static requestProductPurchaseAsync(productId: String, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: String, offerId: String, displayProperties: ProductPurchaseDisplayProperties, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: String, includeReceipt: Boolean, callback: (error: Error, result: String) => void): void ;


    static getUnfulfilledConsumablesAsync(callback: (error: Error, result: Object) => void): void ;


    static requestAppPurchaseAsync(includeReceipt: Boolean, callback: (error: Error, result: String) => void): void ;


    static loadListingInformationAsync(callback: (error: Error, result: ListingInformation) => void): void ;


    static getAppReceiptAsync(callback: (error: Error, result: String) => void): void ;


    static getProductReceiptAsync(productId: String, callback: (error: Error, result: String) => void): void ;


    static reportProductFulfillment(productId: String): void;


  }

  export class CurrentAppSimulator {
    static appId: String;
    static licenseInformation: LicenseInformation;
    static linkUri: Object;
    constructor();

    static getAppPurchaseCampaignIdAsync(callback: (error: Error, result: String) => void): void ;


    static loadListingInformationByProductIdsAsync(productIds: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static loadListingInformationByKeywordsAsync(keywords: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static reportConsumableFulfillmentAsync(productId: String, transactionId: String, callback: (error: Error, result: FulfillmentResult) => void): void ;


    static requestProductPurchaseAsync(productId: String, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: String, offerId: String, displayProperties: ProductPurchaseDisplayProperties, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: String, includeReceipt: Boolean, callback: (error: Error, result: String) => void): void ;


    static getUnfulfilledConsumablesAsync(callback: (error: Error, result: Object) => void): void ;


    static requestAppPurchaseAsync(includeReceipt: Boolean, callback: (error: Error, result: String) => void): void ;


    static loadListingInformationAsync(callback: (error: Error, result: ListingInformation) => void): void ;


    static getAppReceiptAsync(callback: (error: Error, result: String) => void): void ;


    static getProductReceiptAsync(productId: String, callback: (error: Error, result: String) => void): void ;


    static reloadSimulatorAsync(simulatorSettingsFile: Object, callback: (error: Error) => void): void ;


  }

  export class LicenseInformation {
    expirationDate: Date;
    isActive: Boolean;
    isTrial: Boolean;
    productLicenses: Object;
    constructor();

    addListener(type: "LicenseChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LicenseChanged", listener: (ev: Event) => void): void ;
    on(type: "LicenseChanged", listener: (ev: Event) => void): void ;
    off(type: "LicenseChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ListingInformation {
    ageRating: Number;
    currentMarket: String;
    description: String;
    formattedPrice: String;
    name: String;
    productListings: Object;
    currencyCode: String;
    formattedBasePrice: String;
    isOnSale: Boolean;
    saleEndDate: Date;
    constructor();

  }

  export class ProductLicense {
    expirationDate: Date;
    isActive: Boolean;
    productId: String;
    isConsumable: Boolean;
    constructor();

  }

  export class ProductListing {
    formattedPrice: String;
    name: String;
    productId: String;
    formattedBasePrice: String;
    isOnSale: Boolean;
    saleEndDate: Date;
    currencyCode: String;
    description: String;
    imageUri: Object;
    keywords: Object;
    tag: String;
    productType: ProductType;
    constructor();

  }

  export class ProductPurchaseDisplayProperties {
    name: String;
    image: Object;
    description: String;
    constructor();
    constructor(name: String);

  }

  export class PurchaseResults {
    offerId: String;
    receiptXml: String;
    status: ProductPurchaseStatus;
    transactionId: String;
    constructor();

  }

  export class UnfulfilledConsumable {
    offerId: String;
    productId: String;
    transactionId: String;
    constructor();

  }

export * as licensemanagement from "./applicationmodel.store.licensemanagement.js";
