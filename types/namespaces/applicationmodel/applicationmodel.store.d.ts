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

  export enum FulfillmentResult {
    succeeded,
    nothingToFulfill,
    purchasePending,
    purchaseReverted,
    serverError,
  }

  export class LicenseInformation {
    expirationDate: Date;
    isActive: boolean;
    isTrial: boolean;
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
    ageRating: number;
    currentMarket: string;
    description: string;
    formattedPrice: string;
    name: string;
    productListings: Object;
    currencyCode: string;
    formattedBasePrice: string;
    isOnSale: boolean;
    saleEndDate: Date;
    constructor();

  }

  export class PurchaseResults {
    offerId: string;
    receiptXml: string;
    status: ProductPurchaseStatus;
    transactionId: string;
    constructor();

  }

  export class ProductPurchaseDisplayProperties {
    name: string;
    image: Object;
    description: string;
    constructor();
    constructor(name: string);

  }

  export class UnfulfilledConsumable {
    offerId: string;
    productId: string;
    transactionId: string;
    constructor();

  }

  export class ProductLicense {
    expirationDate: Date;
    isActive: boolean;
    productId: string;
    isConsumable: boolean;
    constructor();

  }

  export class ProductListing {
    formattedPrice: string;
    name: string;
    productId: string;
    formattedBasePrice: string;
    isOnSale: boolean;
    saleEndDate: Date;
    currencyCode: string;
    description: string;
    imageUri: Object;
    keywords: Object;
    tag: string;
    productType: ProductType;
    constructor();

  }

  export class CurrentApp {
    static appId: string;
    static licenseInformation: LicenseInformation;
    static linkUri: Object;
    constructor();

    static getCustomerPurchaseIdAsync(serviceTicket: string, publisherUserId: string, callback: (error: Error, result: string) => void): void ;


    static getCustomerCollectionsIdAsync(serviceTicket: string, publisherUserId: string, callback: (error: Error, result: string) => void): void ;


    static getAppPurchaseCampaignIdAsync(callback: (error: Error, result: string) => void): void ;


    static loadListingInformationByProductIdsAsync(productIds: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static loadListingInformationByKeywordsAsync(keywords: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static reportConsumableFulfillmentAsync(productId: string, transactionId: string, callback: (error: Error, result: FulfillmentResult) => void): void ;


    static requestProductPurchaseAsync(productId: string, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: string, offerId: string, displayProperties: ProductPurchaseDisplayProperties, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: string, includeReceipt: boolean, callback: (error: Error, result: string) => void): void ;


    static getUnfulfilledConsumablesAsync(callback: (error: Error, result: Object) => void): void ;


    static requestAppPurchaseAsync(includeReceipt: boolean, callback: (error: Error, result: string) => void): void ;


    static loadListingInformationAsync(callback: (error: Error, result: ListingInformation) => void): void ;


    static getAppReceiptAsync(callback: (error: Error, result: string) => void): void ;


    static getProductReceiptAsync(productId: string, callback: (error: Error, result: string) => void): void ;


    static reportProductFulfillment(productId: string): void;


  }

  export class CurrentAppSimulator {
    static appId: string;
    static licenseInformation: LicenseInformation;
    static linkUri: Object;
    constructor();

    static getAppPurchaseCampaignIdAsync(callback: (error: Error, result: string) => void): void ;


    static loadListingInformationByProductIdsAsync(productIds: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static loadListingInformationByKeywordsAsync(keywords: Object, callback: (error: Error, result: ListingInformation) => void): void ;


    static reportConsumableFulfillmentAsync(productId: string, transactionId: string, callback: (error: Error, result: FulfillmentResult) => void): void ;


    static requestProductPurchaseAsync(productId: string, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: string, offerId: string, displayProperties: ProductPurchaseDisplayProperties, callback: (error: Error, result: PurchaseResults) => void): void ;
    static requestProductPurchaseAsync(productId: string, includeReceipt: boolean, callback: (error: Error, result: string) => void): void ;


    static getUnfulfilledConsumablesAsync(callback: (error: Error, result: Object) => void): void ;


    static requestAppPurchaseAsync(includeReceipt: boolean, callback: (error: Error, result: string) => void): void ;


    static loadListingInformationAsync(callback: (error: Error, result: ListingInformation) => void): void ;


    static getAppReceiptAsync(callback: (error: Error, result: string) => void): void ;


    static getProductReceiptAsync(productId: string, callback: (error: Error, result: string) => void): void ;


    static reloadSimulatorAsync(simulatorSettingsFile: Object, callback: (error: Error) => void): void ;


  }

export * as licensemanagement from "./applicationmodel.store.licensemanagement.js";
export * as preview from "./applicationmodel.store.preview.js";