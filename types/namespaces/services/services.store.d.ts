  export class StoreContract {
    constructor();
  }

  export class StorePackageUpdateStatus {
    packageFamilyName: string;
    packageDownloadSizeInBytes: number;
    packageBytesDownloaded: number;
    packageDownloadProgress: number;
    totalDownloadProgress: number;
    packageUpdateState: StorePackageUpdateState;
    constructor();
  }

  export enum StorePurchaseStatus {
    succeeded,
    alreadyPurchased,
    notPurchased,
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

  export enum StoreCanLicenseStatus {
    notLicensableToUser,
    licensable,
    licenseActionNotApplicableToProduct,
    networkError,
    serverError,
  }

  export enum StoreQueueItemState {
    active,
    completed,
    canceled,
    error,
    paused,
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

  export enum StoreUninstallStorePackageStatus {
    succeeded,
    canceledByUser,
    networkError,
    uninstallNotApplicable,
    error,
  }

  export class StoreProduct {
    description: string;
    extendedJsonData: string;
    hasDigitalDownload: boolean;
    images: Object;
    inAppOfferToken: string;
    isInUserCollection: boolean;
    keywords: Object;
    language: string;
    linkUri: Object;
    price: StorePrice;
    productKind: string;
    skus: Object;
    storeId: string;
    title: string;
    videos: Object;
    constructor();

    getIsAnySkuInstalledAsync(callback: (error: Error, result: boolean) => void): void ;

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StoreProductPagedQueryResult {
    extendedError: number;
    hasMoreResults: boolean;
    products: Object;
    constructor();

    getNextAsync(callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

  }

  export class StorePurchaseProperties {
    name: string;
    extendedJsonData: string;
    constructor();
    constructor(name: string);

  }

  export class StoreLicense {
    expirationDate: Date;
    extendedJsonData: string;
    inAppOfferToken: string;
    isActive: boolean;
    skuStoreId: string;
    constructor();

  }

  export class StoreImage {
    caption: string;
    height: number;
    imagePurposeTag: string;
    uri: Object;
    width: number;
    constructor();

  }

  export class StoreVideo {
    caption: string;
    height: number;
    previewImage: StoreImage;
    uri: Object;
    videoPurposeTag: string;
    width: number;
    constructor();

  }

  export class StoreSku {
    availabilities: Object;
    bundledSkus: Object;
    collectionData: StoreCollectionData;
    customDeveloperData: string;
    description: string;
    extendedJsonData: string;
    images: Object;
    isInUserCollection: boolean;
    isSubscription: boolean;
    isTrial: boolean;
    language: string;
    price: StorePrice;
    storeId: string;
    subscriptionInfo: StoreSubscriptionInfo;
    title: string;
    videos: Object;
    constructor();

    getIsInstalledAsync(callback: (error: Error, result: boolean) => void): void ;

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StorePrice {
    currencyCode: string;
    formattedBasePrice: string;
    formattedPrice: string;
    formattedRecurrencePrice: string;
    isOnSale: boolean;
    saleEndDate: Date;
    constructor();

  }

  export class StorePurchaseResult {
    extendedError: number;
    status: StorePurchaseStatus;
    constructor();

  }

  export class StoreAvailability {
    endDate: Date;
    extendedJsonData: string;
    price: StorePrice;
    storeId: string;
    constructor();

    requestPurchaseAsync(callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

  }

  export class StoreCollectionData {
    acquiredDate: Date;
    campaignId: string;
    developerOfferId: string;
    endDate: Date;
    extendedJsonData: string;
    isTrial: boolean;
    startDate: Date;
    trialTimeRemaining: number;
    constructor();

  }

  export class StoreSubscriptionInfo {
    billingPeriod: number;
    billingPeriodUnit: StoreDurationUnit;
    hasTrialPeriod: boolean;
    trialPeriod: number;
    trialPeriodUnit: StoreDurationUnit;
    constructor();

  }

  export class StoreContext {
    user: Object;
    canSilentlyDownloadStorePackageUpdates: boolean;
    constructor();

    static getDefault(): StoreContext;


    static getForUser(user: Object): StoreContext;


    getCustomerPurchaseIdAsync(serviceTicket: string, publisherUserId: string, callback: (error: Error, result: string) => void): void ;

    getCustomerCollectionsIdAsync(serviceTicket: string, publisherUserId: string, callback: (error: Error, result: string) => void): void ;

    getAppLicenseAsync(callback: (error: Error, result: StoreAppLicense) => void): void ;

    getStoreProductForCurrentAppAsync(callback: (error: Error, result: StoreProductResult) => void): void ;

    getStoreProductsAsync(productKinds: Object, storeIds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;
    getStoreProductsAsync(productKinds: Object, storeIds: Object, storeProductOptions: StoreProductOptions, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getAssociatedStoreProductsAsync(productKinds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getAssociatedStoreProductsWithPagingAsync(productKinds: Object, maxItemsToRetrievePerPage: number, callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

    getUserCollectionAsync(productKinds: Object, callback: (error: Error, result: StoreProductQueryResult) => void): void ;

    getUserCollectionWithPagingAsync(productKinds: Object, maxItemsToRetrievePerPage: number, callback: (error: Error, result: StoreProductPagedQueryResult) => void): void ;

    reportConsumableFulfillmentAsync(productStoreId: string, quantity: number, trackingId: string, callback: (error: Error, result: StoreConsumableResult) => void): void ;

    getConsumableBalanceRemainingAsync(productStoreId: string, callback: (error: Error, result: StoreConsumableResult) => void): void ;

    acquireStoreLicenseForOptionalPackageAsync(optionalPackage: Object, callback: (error: Error, result: StoreAcquireLicenseResult) => void): void ;

    requestPurchaseAsync(storeId: string, callback: (error: Error, result: StorePurchaseResult) => void): void ;
    requestPurchaseAsync(storeId: string, storePurchaseProperties: StorePurchaseProperties, callback: (error: Error, result: StorePurchaseResult) => void): void ;

    getAppAndOptionalStorePackageUpdatesAsync(callback: (error: Error, result: Object) => void): void ;

    requestDownloadStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestDownloadAndInstallStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestDownloadAndInstallStorePackagesAsync(storeIds: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;
    requestDownloadAndInstallStorePackagesAsync(storeIds: Object, storePackageInstallOptions: StorePackageInstallOptions, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    findStoreProductForPackageAsync(productKinds: Object, package: Object, callback: (error: Error, result: StoreProductResult) => void): void ;

    trySilentDownloadStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    trySilentDownloadAndInstallStorePackageUpdatesAsync(storePackageUpdates: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    canAcquireStoreLicenseForOptionalPackageAsync(optionalPackage: Object, callback: (error: Error, result: StoreCanAcquireLicenseResult) => void): void ;

    canAcquireStoreLicenseAsync(productStoreId: string, callback: (error: Error, result: StoreCanAcquireLicenseResult) => void): void ;

    getAssociatedStoreQueueItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getStoreQueueItemsAsync(storeIds: Object, callback: (error: Error, result: Object) => void): void ;

    downloadAndInstallStorePackagesAsync(storeIds: Object, callback: (error: Error, result: StorePackageUpdateResult) => void): void ;

    requestUninstallStorePackageAsync(package: Object, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    requestUninstallStorePackageByStoreIdAsync(storeId: string, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    uninstallStorePackageAsync(package: Object, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    uninstallStorePackageByStoreIdAsync(storeId: string, callback: (error: Error, result: StoreUninstallStorePackageResult) => void): void ;

    addListener(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    on(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    off(type: "OfflineLicensesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StoreSendRequestResult {
    extendedError: number;
    response: string;
    httpStatusCode: number;
    constructor();

  }

  export class StoreAppLicense {
    addOnLicenses: Object;
    expirationDate: Date;
    extendedJsonData: string;
    isActive: boolean;
    isTrial: boolean;
    isTrialOwnedByThisUser: boolean;
    skuStoreId: string;
    trialTimeRemaining: number;
    trialUniqueId: string;
    constructor();

  }

  export class StoreProductResult {
    extendedError: number;
    product: StoreProduct;
    constructor();

  }

  export class StoreProductQueryResult {
    extendedError: number;
    products: Object;
    constructor();

  }

  export class StoreConsumableResult {
    balanceRemaining: number;
    extendedError: number;
    status: StoreConsumableStatus;
    trackingId: string;
    constructor();

  }

  export class StoreAcquireLicenseResult {
    extendedError: number;
    storePackageLicense: StorePackageLicense;
    constructor();

  }

  export class StorePackageUpdate {
    mandatory: boolean;
    package: Object;
    constructor();

  }

  export class StorePackageUpdateResult {
    overallState: StorePackageUpdateState;
    storePackageUpdateStatuses: Object;
    storeQueueItems: Object;
    constructor();

  }

  export class StoreCanAcquireLicenseResult {
    extendedError: number;
    licensableSku: string;
    status: StoreCanLicenseStatus;
    constructor();

  }

  export class StoreProductOptions {
    actionFilters: Object;
    constructor();

  }

  export class StoreQueueItem {
    installKind: StoreQueueItemKind;
    packageFamilyName: string;
    productId: string;
    constructor();

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

  export class StorePackageInstallOptions {
    allowForcedAppRestart: boolean;
    constructor();

  }

  export class StoreUninstallStorePackageResult {
    extendedError: number;
    status: StoreUninstallStorePackageStatus;
    constructor();

  }

  export class StoreQueueItemStatus {
    extendedError: number;
    packageInstallExtendedState: StoreQueueItemExtendedState;
    packageInstallState: StoreQueueItemState;
    updateStatus: StorePackageUpdateStatus;
    constructor();

  }

  export class StoreQueueItemCompletedEventArgs {
    status: StoreQueueItemStatus;
    constructor();

  }

  export class StorePackageLicense {
    isValid: boolean;
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

  export class StoreRequestHelper {
    constructor();

    static sendRequestAsync(context: StoreContext, requestKind: number, parametersAsJson: string, callback: (error: Error, result: StoreSendRequestResult) => void): void ;


  }

