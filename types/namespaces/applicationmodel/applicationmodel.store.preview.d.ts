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
    currencyCode: String;
    customDeveloperData: String;
    description: String;
    extendedData: String;
    formattedListPrice: String;
    productId: String;
    skuId: String;
    skuType: String;
    title: String;
    constructor();

  }

  export class StorePreviewPurchaseResults {
    productPurchaseStatus: StorePreviewProductPurchaseStatus;
    constructor();

  }

  export class StorePreviewProductInfo {
    description: String;
    productId: String;
    productType: String;
    skuInfoList: Object;
    title: String;
    constructor();

  }

  export class StoreHardwareManufacturerInfo {
    hardwareManufacturerId: String;
    manufacturerName: String;
    modelName: String;
    storeContentModifierId: String;
    constructor();

  }

  export class StorePreview {
    constructor();

    static requestProductPurchaseByProductIdAndSkuIdAsync(productId: String, skuId: String, callback: (error: Error, result: StorePreviewPurchaseResults) => void): void ;


    static loadAddOnProductInfosAsync(callback: (error: Error, result: Object) => void): void ;


  }

  export class StoreConfiguration {
    static hardwareManufacturerInfo: StoreHardwareManufacturerInfo;
    static purchasePromptingPolicy: Number;
    constructor();

    static getStoreLogDataAsync(options: StoreLogOptions, callback: (error: Error, result: Object) => void): void ;


    static filterUnsupportedSystemFeaturesAsync(systemFeatures: Object, callback: (error: Error, result: Object) => void): void ;


    static getStoreWebAccountId(): String;


    static getStoreWebAccountIdForUser(user: Object): String;


    static setEnterpriseStoreWebAccountId(webAccountId: String): void;


    static setEnterpriseStoreWebAccountIdForUser(user: Object, webAccountId: String): void;


    static getEnterpriseStoreWebAccountId(): String;


    static getEnterpriseStoreWebAccountIdForUser(user: Object): String;


    static shouldRestrictToEnterpriseStoreOnly(): Boolean;


    static shouldRestrictToEnterpriseStoreOnlyForUser(user: Object): Boolean;


    static hasStoreWebAccount(): Boolean;


    static hasStoreWebAccountForUser(user: Object): Boolean;


    static setStoreWebAccountIdForUser(user: Object, webAccountId: String): void;


    static isStoreWebAccountIdForUser(user: Object, webAccountId: String): Boolean;


    static getPurchasePromptingPolicyForUser(user: Object): Number;


    static setPurchasePromptingPolicyForUser(user: Object, value: Number): void;


    static setSystemConfiguration(catalogHardwareManufacturerId: String, catalogStoreContentModifierId: String, systemConfigurationExpiration: Date, catalogHardwareDescriptor: String): void;


    static setMobileOperatorConfiguration(mobileOperatorId: String, appDownloadLimitInMegabytes: Number, updateDownloadLimitInMegabytes: Number): void;


    static setStoreWebAccountId(webAccountId: String): void;


    static isStoreWebAccountId(webAccountId: String): Boolean;


  }

  export class WebAuthenticationCoreManagerHelper {
    constructor();

    static requestTokenWithUIElementHostingAsync(request: Object, uiElement: Object, callback: (error: Error, result: Object) => void): void ;
    static requestTokenWithUIElementHostingAsync(request: Object, webAccount: Object, uiElement: Object, callback: (error: Error, result: Object) => void): void ;


  }

export * as installcontrol from "./applicationmodel.store.preview.installcontrol.js";