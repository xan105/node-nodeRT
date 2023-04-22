  export enum StorePreviewProductPurchaseStatus {
    succeeded,
    alreadyPurchased,
    notFulfilled,
    notPurchased,
  }

  export enum StoreSystemFeature {
    architectureX86,
    architectureX64,
    architectureArm,
    directX9,
    directX10,
    directX11,
    d3D12HardwareFL11,
    d3D12HardwareFL12,
    memory300MB,
    memory750MB,
    memory1GB,
    memory2GB,
    cameraFront,
    cameraRear,
    gyroscope,
    hover,
    magnetometer,
    nfc,
    resolution720P,
    resolutionWvga,
    resolutionWvgaOr720P,
    resolutionWxga,
    resolutionWvgaOrWxga,
    resolutionWxgaOr720P,
    memory4GB,
    memory6GB,
    memory8GB,
    memory12GB,
    memory16GB,
    memory20GB,
    videoMemory2GB,
    videoMemory4GB,
    videoMemory6GB,
    videoMemory1GB,
    architectureArm64,
  }

  export enum StoreLogOptions {
    none,
    tryElevate,
  }

  export class StorePreviewSkuInfo {
    currencyCode: string;
    customDeveloperData: string;
    description: string;
    extendedData: string;
    formattedListPrice: string;
    productId: string;
    skuId: string;
    skuType: string;
    title: string;
    constructor();

  }

  export class StorePreviewPurchaseResults {
    productPurchaseStatus: StorePreviewProductPurchaseStatus;
    constructor();

  }

  export class StorePreviewProductInfo {
    description: string;
    productId: string;
    productType: string;
    skuInfoList: Object;
    title: string;
    constructor();

  }

  export class StoreHardwareManufacturerInfo {
    hardwareManufacturerId: string;
    manufacturerName: string;
    modelName: string;
    storeContentModifierId: string;
    constructor();

  }

  export class StorePreview {
    constructor();

    static requestProductPurchaseByProductIdAndSkuIdAsync(productId: string, skuId: string, callback: (error: Error, result: StorePreviewPurchaseResults) => void): void ;


    static loadAddOnProductInfosAsync(callback: (error: Error, result: Object) => void): void ;


  }

  export class StoreConfiguration {
    static hardwareManufacturerInfo: StoreHardwareManufacturerInfo;
    static purchasePromptingPolicy: number;
    constructor();

    static getStoreLogDataAsync(options: StoreLogOptions, callback: (error: Error, result: Object) => void): void ;


    static filterUnsupportedSystemFeaturesAsync(systemFeatures: Object, callback: (error: Error, result: Object) => void): void ;


    static getStoreWebAccountId(): string;


    static getStoreWebAccountIdForUser(user: Object): string;


    static setEnterpriseStoreWebAccountId(webAccountId: string): void;


    static setEnterpriseStoreWebAccountIdForUser(user: Object, webAccountId: string): void;


    static getEnterpriseStoreWebAccountId(): string;


    static getEnterpriseStoreWebAccountIdForUser(user: Object): string;


    static shouldRestrictToEnterpriseStoreOnly(): boolean;


    static shouldRestrictToEnterpriseStoreOnlyForUser(user: Object): boolean;


    static hasStoreWebAccount(): boolean;


    static hasStoreWebAccountForUser(user: Object): boolean;


    static setStoreWebAccountIdForUser(user: Object, webAccountId: string): void;


    static isStoreWebAccountIdForUser(user: Object, webAccountId: string): boolean;


    static getPurchasePromptingPolicyForUser(user: Object): number;


    static setPurchasePromptingPolicyForUser(user: Object, value: number): void;


    static setSystemConfiguration(catalogHardwareManufacturerId: string, catalogStoreContentModifierId: string, systemConfigurationExpiration: Date, catalogHardwareDescriptor: string): void;


    static setMobileOperatorConfiguration(mobileOperatorId: string, appDownloadLimitInMegabytes: number, updateDownloadLimitInMegabytes: number): void;


    static setStoreWebAccountId(webAccountId: string): void;


    static isStoreWebAccountId(webAccountId: string): boolean;


  }

  export class WebAuthenticationCoreManagerHelper {
    constructor();

    static requestTokenWithUIElementHostingAsync(request: Object, uiElement: Object, callback: (error: Error, result: Object) => void): void ;
    static requestTokenWithUIElementHostingAsync(request: Object, webAccount: Object, uiElement: Object, callback: (error: Error, result: Object) => void): void ;


  }

export * as installcontrol from "./applicationmodel.store.preview.installcontrol.js";