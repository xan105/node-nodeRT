  export enum GetEntitlementStatus {
    succeeded,
    noStoreAccount,
    networkError,
    serverError,
  }

  export enum AppInstallState {
    pending,
    starting,
    acquiringLicense,
    downloading,
    restoringData,
    installing,
    completed,
    canceled,
    paused,
    error,
    pausedLowBattery,
    pausedWiFiRecommended,
    pausedWiFiRequired,
    readyToDownload,
  }

  export enum AppInstallType {
    install,
    update,
    repair,
  }

  export enum AutoUpdateSetting {
    disabled,
    enabled,
    disabledByPolicy,
    enabledByPolicy,
  }

  export class AppInstallStatus {
    bytesDownloaded: Number;
    downloadSizeInBytes: Number;
    errorCode: Number;
    installState: AppInstallState;
    percentComplete: Number;
    readyForLaunch: Boolean;
    user: Object;
    isStaged: Boolean;
    constructor();

  }

  export class AppInstallItem {
    installType: AppInstallType;
    isUserInitiated: Boolean;
    packageFamilyName: String;
    productId: String;
    children: Object;
    itemOperationsMightAffectOtherItems: Boolean;
    launchAfterInstall: Boolean;
    constructor();

    getCurrentStatus(): AppInstallStatus;

    cancel(): void;
    cancel(correlationVector: String): void;

    pause(): void;
    pause(correlationVector: String): void;

    restart(): void;
    restart(correlationVector: String): void;

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

  export class GetEntitlementResult {
    status: GetEntitlementStatus;
    constructor();

  }

  export class AppInstallManagerItemEventArgs {
    item: AppInstallItem;
    constructor();

  }

  export class AppUpdateOptions {
    catalogId: String;
    allowForcedAppRestart: Boolean;
    constructor();

  }

  export class AppInstallOptions {
    targetVolume: Object;
    repair: Boolean;
    launchAfterInstall: Boolean;
    forceUseOfNonRemovableStorage: Boolean;
    catalogId: String;
    allowForcedAppRestart: Boolean;
    constructor();

  }

  export class AppInstallManager {
    autoUpdateSetting: AutoUpdateSetting;
    acquisitionIdentity: String;
    appInstallItems: Object;
    appInstallItemsWithGroupSupport: Object;
    constructor();

    getIsApplicableAsync(productId: String, skuId: String, callback: (error: Error, result: Boolean) => void): void ;

    startAppInstallAsync(productId: String, skuId: String, repair: Boolean, forceUseOfNonRemovableStorage: Boolean, callback: (error: Error, result: AppInstallItem) => void): void ;
    startAppInstallAsync(productId: String, skuId: String, repair: Boolean, forceUseOfNonRemovableStorage: Boolean, catalogId: String, bundleId: String, correlationVector: String, callback: (error: Error, result: AppInstallItem) => void): void ;

    updateAppByPackageFamilyNameAsync(packageFamilyName: String, callback: (error: Error, result: AppInstallItem) => void): void ;
    updateAppByPackageFamilyNameAsync(packageFamilyName: String, correlationVector: String, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForUpdatesAsync(productId: String, skuId: String, callback: (error: Error, result: AppInstallItem) => void): void ;
    searchForUpdatesAsync(productId: String, skuId: String, catalogId: String, correlationVector: String, callback: (error: Error, result: AppInstallItem) => void): void ;
    searchForUpdatesAsync(productId: String, skuId: String, correlationVector: String, clientId: String, updateOptions: AppUpdateOptions, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForAllUpdatesAsync(callback: (error: Error, result: Object) => void): void ;
    searchForAllUpdatesAsync(correlationVector: String, callback: (error: Error, result: Object) => void): void ;
    searchForAllUpdatesAsync(correlationVector: String, clientId: String, updateOptions: AppUpdateOptions, callback: (error: Error, result: Object) => void): void ;

    isStoreBlockedByPolicyAsync(storeClientName: String, storeClientPublisher: String, callback: (error: Error, result: Boolean) => void): void ;

    getIsAppAllowedToInstallAsync(productId: String, callback: (error: Error, result: Boolean) => void): void ;
    getIsAppAllowedToInstallAsync(productId: String, skuId: String, catalogId: String, correlationVector: String, callback: (error: Error, result: Boolean) => void): void ;

    startProductInstallAsync(productId: String, catalogId: String, flightId: String, clientId: String, repair: Boolean, forceUseOfNonRemovableStorage: Boolean, correlationVector: String, targetVolume: Object, callback: (error: Error, result: Object) => void): void ;
    startProductInstallAsync(productId: String, flightId: String, clientId: String, correlationVector: String, installOptions: AppInstallOptions, callback: (error: Error, result: Object) => void): void ;

    startProductInstallForUserAsync(user: Object, productId: String, catalogId: String, flightId: String, clientId: String, repair: Boolean, forceUseOfNonRemovableStorage: Boolean, correlationVector: String, targetVolume: Object, callback: (error: Error, result: Object) => void): void ;
    startProductInstallForUserAsync(user: Object, productId: String, flightId: String, clientId: String, correlationVector: String, installOptions: AppInstallOptions, callback: (error: Error, result: Object) => void): void ;

    updateAppByPackageFamilyNameForUserAsync(user: Object, packageFamilyName: String, correlationVector: String, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForUpdatesForUserAsync(user: Object, productId: String, skuId: String, catalogId: String, correlationVector: String, callback: (error: Error, result: AppInstallItem) => void): void ;
    searchForUpdatesForUserAsync(user: Object, productId: String, skuId: String, correlationVector: String, clientId: String, updateOptions: AppUpdateOptions, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForAllUpdatesForUserAsync(user: Object, correlationVector: String, callback: (error: Error, result: Object) => void): void ;
    searchForAllUpdatesForUserAsync(user: Object, correlationVector: String, clientId: String, updateOptions: AppUpdateOptions, callback: (error: Error, result: Object) => void): void ;

    getIsAppAllowedToInstallForUserAsync(user: Object, productId: String, skuId: String, catalogId: String, correlationVector: String, callback: (error: Error, result: Boolean) => void): void ;

    getIsApplicableForUserAsync(user: Object, productId: String, skuId: String, callback: (error: Error, result: Boolean) => void): void ;

    getFreeUserEntitlementAsync(storeId: String, campaignId: String, correlationVector: String, callback: (error: Error, result: GetEntitlementResult) => void): void ;

    getFreeUserEntitlementForUserAsync(user: Object, storeId: String, campaignId: String, correlationVector: String, callback: (error: Error, result: GetEntitlementResult) => void): void ;

    getFreeDeviceEntitlementAsync(storeId: String, campaignId: String, correlationVector: String, callback: (error: Error, result: GetEntitlementResult) => void): void ;

    getIsPackageIdentityAllowedToInstallAsync(correlationVector: String, packageIdentityName: String, publisherCertificateName: String, callback: (error: Error, result: Boolean) => void): void ;

    getIsPackageIdentityAllowedToInstallForUserAsync(user: Object, correlationVector: String, packageIdentityName: String, publisherCertificateName: String, callback: (error: Error, result: Boolean) => void): void ;

    cancel(productId: String): void;
    cancel(productId: String, correlationVector: String): void;

    pause(productId: String): void;
    pause(productId: String, correlationVector: String): void;

    restart(productId: String): void;
    restart(productId: String, correlationVector: String): void;

    moveToFrontOfDownloadQueue(productId: String, correlationVector: String): void;

    addListener(type: "ItemCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemCompleted", listener: (ev: Event) => void): void ;
    on(type: "ItemCompleted", listener: (ev: Event) => void): void ;
    off(type: "ItemCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ItemStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "ItemStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "ItemStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

