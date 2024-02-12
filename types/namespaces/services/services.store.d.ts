  export class StoreContract {
    constructor();
  }

  export class StorePackageUpdateStatus {
    packageFamilyName: String;
    packageDownloadSizeInBytes: Number;
    packageBytesDownloaded: Number;
    packageDownloadProgress: Number;
    totalDownloadProgress: Number;
    packageUpdateState: StorePackageUpdateState;
    constructor();
  }

  export enum StoreCanLicenseStatus {
    notLicensableToUser,
    licensable,
    licenseActionNotApplicableToProduct,
    networkError,
    serverError,
  }

  export enum StoreConsumableStatus {
    succeeded,
    insufficentQuantity,
    networkError,
    serverError,
  }

  export enum StoreDurationUnit {
    minute,
    hour,
    day,
    week,
    month,
    year,
  }

  export enum StorePackageUpdateState {
    pending,
    downloading,
    deploying,
    completed,
    canceled,
    otherError,
    errorLowBattery,
    errorWiFiRecommended,
    errorWiFiRequired,
  }

  export enum StorePurchaseStatus {
    succeeded,
    alreadyPurchased,
    notPurchased,
    networkError,
    serverError,
  }

  export enum StoreQueueItemExtendedState {
    activePending,
    activeStarting,
    activeAcquiringLicense,
    activeDownloading,
    activeRestoringData,
    activeInstalling,
    completed,
    canceled,
    paused,
    error,
    pausedPackagesInUse,
    pausedLowBattery,
    pausedWiFiRecommended,
    pausedWiFiRequired,
    pausedReadyToInstall,
  }

  export enum StoreQueueItemKind {
    install,
    update,
    repair,
  }

  export enum StoreQueueItemState {
    active,
    completed,
    canceled,
    error,
    paused,
  }

  export enum StoreRateAndReviewStatus {
    succeeded,
    canceledByUser,
    networkError,
    error,
  }

  export enum StoreUninstallStorePackageStatus {
    succeeded,
    canceledByUser,
    networkError,
    uninstallNotApplicable,
    error,
  }

  export class StoreAcquireLicenseResult {
    extendedError: Number;
    storePackageLicense: StorePackageLicense;
    constructor();

  }

  export class StoreAppLicense {
    addOnLicenses: Object;
    expirationDate: Date;
    extendedJsonData: String;
    isActive: Boolean;
    isTrial: Boolean;
    isTrialOwnedByThisUser: Boolean;
    skuStoreId: String;
    trialTimeRemaining: Number;
    trialUniqueId: String;
    isDiscLicense: Boolean;
    constructor();

  }

  export class StoreAvailability {
    endDate: Date;
    extendedJsonData: String;
    price: StorePrice;
    storeId: String;
    constructor();

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StoreCanAcquireLicenseResult {
    extendedError: Number;
    licensableSku: String;
    status: StoreCanLicenseStatus;
    constructor();

  }

  export class StoreCollectionData {
    acquiredDate: Date;
    campaignId: String;
    developerOfferId: String;
    endDate: Date;
    extendedJsonData: String;
    isTrial: Boolean;
    startDate: Date;
    trialTimeRemaining: Number;
    constructor();

  }

  export class StoreConsumableResult {
    balanceRemaining: Number;
    extendedError: Number;
    status: StoreConsumableStatus;
    trackingId: String;
    constructor();

  }

  export class StoreContext {
    user: Object;
    canSilentlyDownloadStorePackageUpdates: Boolean;
    constructor();

    static getDefault(): StoreContext;


    static getForUser(user: Object): StoreContext;


    getCustomerPurchaseIdAsync(serviceTicket: String, publisherUserId: String, callback: (error: Error, result: String) => void): void ;

    getCustomerCollectionsIdAsync(serviceTicket: String, publisherUserId: String, callback: (error: Error, result: String) => void): void ;

    getAppLicenseAsync(callback: (error: Error, result: StoreAppLicense) => void): void ;

    getStoreProductForCurrentAppAsync(callback: (error: Error, result: StoreProductResult) => void): void ;

    getStoreProductsAsync(productKinds: Object, storeIds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;
    getStoreProductsAsync(productKinds: Object, storeIds: Object, storeProductOptions: StoreProductOptions, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getAssociatedStoreProductsAsync(productKinds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getAssociatedStoreProductsWithPagingAsync(productKinds: Object, maxItemsToRetrievePerPage: Number, callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

    getUserCollectionAsync(productKinds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getUserCollectionWithPagingAsync(productKinds: Object, maxItemsToRetrievePerPage: Number, callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

    reportConsumableFulfillmentAsync(productStoreId: String, quantity: Number, trackingId: String, callback: (error: Error, result: StoreConsumableResult) => void): void ;

    getConsumableBalanceRemainingAsync(productStoreId: String, callback: (error: Error, result: StoreConsumableResult) => void): void ;

    acquireStoreLicenseForOptionalPackageAsync(optionalPackage: Object, callback: (error: Error, result: StoreAcquireLicenseResult) => void): void ;

    requestPurchaseAsync(storeId: String, callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storeId: String, storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

    getAppAndOptionalStorePackageUpdatesAsync(callback: (error: Error, result: Object) => void): void ;

    requestDownloadStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestDownloadAndInstallStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestDownloadAndInstallStorePackagesAsync(storeIds: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;
    requestDownloadAndInstallStorePackagesAsync(storeIds: Object, storePackageInstallOptions: StorePackageInstallOptions, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    findStoreProductForPackageAsync(productKinds: Object, package: Object, callback: (error: Error, result: StoreProductResult) => void): void ;

    trySilentDownloadStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    trySilentDownloadAndInstallStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    canAcquireStoreLicenseForOptionalPackageAsync(optionalPackage: Object, callback: (error: Error, result: StoreCanAcquireLicenseResult) => void): void ;

    canAcquireStoreLicenseAsync(productStoreId: String, callback: (error: Error, result: StoreCanAcquireLicenseResult) => void): void ;

    getAssociatedStoreQueueItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getStoreQueueItemsAsync(storeIds: Object, callback: (error: Error, result: Object) => void): void ;

    downloadAndInstallStorePackagesAsync(storeIds: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestUninstallStorePackageAsync(package: Object, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    requestUninstallStorePackageByStoreIdAsync(storeId: String, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    uninstallStorePackageAsync(package: Object, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    uninstallStorePackageByStoreIdAsync(storeId: String, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    requestRateAndReviewAppAsync(callback: (error: Error, result: StoreRateAndReviewResult) => void): void ;

    setInstallOrderForAssociatedStoreQueueItemsAsync(items: Object, callback: (error: Error, result: Object) => void): void ;

    addListener(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    on(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    off(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StoreImage {
    caption: String;
    height: Number;
    imagePurposeTag: String;
    uri: Object;
    width: Number;
    constructor();

  }

  export class StoreLicense {
    expirationDate: Date;
    extendedJsonData: String;
    inAppOfferToken: String;
    isActive: Boolean;
    skuStoreId: String;
    constructor();

  }

  export class StorePackageInstallOptions {
    allowForcedAppRestart: Boolean;
    constructor();

  }

  export class StorePackageLicense {
    isValid: Boolean;
    package: Object;
    constructor();

    releaseLicense(): void;

    close(): void;
    addListener(type: "LicenseLost", listener: (ev: Event) => void): void ;
    removeListener(type: "LicenseLost", listener: (ev: Event) => void): void ;
    on(type: "LicenseLost", listener: (ev: Event) => void): void ;
    off(type: "LicenseLost", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StorePackageUpdate {
    mandatory: Boolean;
    package: Object;
    constructor();

  }

  export class StorePackageUpdateResult {
    overallState: StorePackageUpdateState;
    storePackageUpdateStatuses: Object;
    storeQueueItems: Object;
    constructor();

  }

  export class StorePrice {
    currencyCode: String;
    formattedBasePrice: String;
    formattedPrice: String;
    formattedRecurrencePrice: String;
    isOnSale: Boolean;
    saleEndDate: Date;
    constructor();

  }

  export class StoreProduct {
    description: String;
    extendedJsonData: String;
    hasDigitalDownload: Boolean;
    images: Object;
    inAppOfferToken: String;
    isInUserCollection: Boolean;
    keywords: Object;
    language: String;
    linkUri: Object;
    price: StorePrice;
    productKind: String;
    skus: Object;
    storeId: String;
    title: String;
    videos: Object;
    constructor();

    getIsAnySkuInstalledAsync(callback: (error: Error, result: Boolean) => void): void ;

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StoreProductOptions {
    actionFilters: Object;
    constructor();

  }

  export class StoreProductPagedQueryResult {
    extendedError: Number;
    hasMoreResults: Boolean;
    products: Object;
    constructor();

    getNextAsync(callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

  }

  export class StoreProductQueryResult {
    extendedError: Number;
    products: Object;
    constructor();

  }

  export class StoreProductResult {
    extendedError: Number;
    product: StoreProduct;
    constructor();

  }

  export class StorePurchaseProperties {
    name: String;
    extendedJsonData: String;
    constructor();
    constructor(name: String);

  }

  export class StorePurchaseResult {
    extendedError: Number;
    status: StorePurchaseStatus;
    constructor();

  }

  export class StoreQueueItem {
    installKind: StoreQueueItemKind;
    packageFamilyName: String;
    productId: String;
    constructor();

    cancelInstallAsync(callback: (error: Error) => void): void ;

    pauseInstallAsync(callback: (error: Error) => void): void ;

    resumeInstallAsync(callback: (error: Error) => void): void ;

    getCurrentStatus(): StoreQueueItemStatus;

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StoreQueueItemCompletedEventArgs {
    status: StoreQueueItemStatus;
    constructor();

  }

  export class StoreQueueItemStatus {
    extendedError: Number;
    packageInstallExtendedState: StoreQueueItemExtendedState;
    packageInstallState: StoreQueueItemState;
    updateStatus: StorePackageUpdateStatus;
    constructor();

  }

  export class StoreRateAndReviewResult {
    extendedError: Number;
    extendedJsonData: String;
    status: StoreRateAndReviewStatus;
    wasUpdated: Boolean;
    constructor();

  }

  export class StoreRequestHelper {
    constructor();

    static sendRequestAsync(context: StoreContext, requestKind: Number, parametersAsJson: String, callback: (error: Error, result: StoreSendRequestResult) => void): void ;


  }

  export class StoreSendRequestResult {
    extendedError: Number;
    response: String;
    httpStatusCode: Number;
    constructor();

  }

  export class StoreSku {
    availabilities: Object;
    bundledSkus: Object;
    collectionData: StoreCollectionData;
    customDeveloperData: String;
    description: String;
    extendedJsonData: String;
    images: Object;
    isInUserCollection: Boolean;
    isSubscription: Boolean;
    isTrial: Boolean;
    language: String;
    price: StorePrice;
    storeId: String;
    subscriptionInfo: StoreSubscriptionInfo;
    title: String;
    videos: Object;
    constructor();

    getIsInstalledAsync(callback: (error: Error, result: Boolean) => void): void ;

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StoreSubscriptionInfo {
    billingPeriod: Number;
    billingPeriodUnit: StoreDurationUnit;
    hasTrialPeriod: Boolean;
    trialPeriod: Number;
    trialPeriodUnit: StoreDurationUnit;
    constructor();

  }

  export class StoreUninstallStorePackageResult {
    extendedError: Number;
    status: StoreUninstallStorePackageStatus;
    constructor();

  }

  export class StoreVideo {
    caption: String;
    height: Number;
    previewImage: StoreImage;
    uri: Object;
    videoPurposeTag: String;
    width: Number;
    constructor();

  }

