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
    bytesDownloaded: number;
    downloadSizeInBytes: number;
    errorCode: number;
    installState: AppInstallState;
    percentComplete: number;
    readyForLaunch: boolean;
    user: Object;
    isStaged: boolean;
    constructor();

  }

  export class AppInstallItem {
    installType: AppInstallType;
    isUserInitiated: boolean;
    packageFamilyName: string;
    productId: string;
    children: Object;
    itemOperationsMightAffectOtherItems: boolean;
    launchAfterInstall: boolean;
    constructor();

    getCurrentStatus(): AppInstallStatus;

    cancel(): void;
    cancel(correlationVector: string): void;

    pause(): void;
    pause(correlationVector: string): void;

    restart(): void;
    restart(correlationVector: string): void;

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
    catalogId: string;
    allowForcedAppRestart: boolean;
    constructor();

  }

  export class AppInstallOptions {
    targetVolume: Object;
    repair: boolean;
    launchAfterInstall: boolean;
    forceUseOfNonRemovableStorage: boolean;
    catalogId: string;
    allowForcedAppRestart: boolean;
    constructor();

  }

  export class AppInstallManager {
    autoUpdateSetting: AutoUpdateSetting;
    acquisitionIdentity: string;
    appInstallItems: Object;
    appInstallItemsWithGroupSupport: Object;
    constructor();

    getIsApplicableAsync(productId: string, skuId: string, callback: (error: Error, result: boolean) => void): void ;

    startAppInstallAsync(productId: string, skuId: string, repair: boolean, forceUseOfNonRemovableStorage: boolean, callback: (error: Error, result: AppInstallItem) => void): void ;
    startAppInstallAsync(productId: string, skuId: string, repair: boolean, forceUseOfNonRemovableStorage: boolean, catalogId: string, bundleId: string, correlationVector: string, callback: (error: Error, result: AppInstallItem) => void): void ;

    updateAppByPackageFamilyNameAsync(packageFamilyName: string, callback: (error: Error, result: AppInstallItem) => void): void ;
    updateAppByPackageFamilyNameAsync(packageFamilyName: string, correlationVector: string, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForUpdatesAsync(productId: string, skuId: string, callback: (error: Error, result: AppInstallItem) => void): void ;
    searchForUpdatesAsync(productId: string, skuId: string, catalogId: string, correlationVector: string, callback: (error: Error, result: AppInstallItem) => void): void ;
    searchForUpdatesAsync(productId: string, skuId: string, correlationVector: string, clientId: string, updateOptions: AppUpdateOptions, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForAllUpdatesAsync(callback: (error: Error, result: Object) => void): void ;
    searchForAllUpdatesAsync(correlationVector: string, callback: (error: Error, result: Object) => void): void ;
    searchForAllUpdatesAsync(correlationVector: string, clientId: string, updateOptions: AppUpdateOptions, callback: (error: Error, result: Object) => void): void ;

    isStoreBlockedByPolicyAsync(storeClientName: string, storeClientPublisher: string, callback: (error: Error, result: boolean) => void): void ;

    getIsAppAllowedToInstallAsync(productId: string, callback: (error: Error, result: boolean) => void): void ;
    getIsAppAllowedToInstallAsync(productId: string, skuId: string, catalogId: string, correlationVector: string, callback: (error: Error, result: boolean) => void): void ;

    startProductInstallAsync(productId: string, catalogId: string, flightId: string, clientId: string, repair: boolean, forceUseOfNonRemovableStorage: boolean, correlationVector: string, targetVolume: Object, callback: (error: Error, result: Object) => void): void ;
    startProductInstallAsync(productId: string, flightId: string, clientId: string, correlationVector: string, installOptions: AppInstallOptions, callback: (error: Error, result: Object) => void): void ;

    startProductInstallForUserAsync(user: Object, productId: string, catalogId: string, flightId: string, clientId: string, repair: boolean, forceUseOfNonRemovableStorage: boolean, correlationVector: string, targetVolume: Object, callback: (error: Error, result: Object) => void): void ;
    startProductInstallForUserAsync(user: Object, productId: string, flightId: string, clientId: string, correlationVector: string, installOptions: AppInstallOptions, callback: (error: Error, result: Object) => void): void ;

    updateAppByPackageFamilyNameForUserAsync(user: Object, packageFamilyName: string, correlationVector: string, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForUpdatesForUserAsync(user: Object, productId: string, skuId: string, catalogId: string, correlationVector: string, callback: (error: Error, result: AppInstallItem) => void): void ;
    searchForUpdatesForUserAsync(user: Object, productId: string, skuId: string, correlationVector: string, clientId: string, updateOptions: AppUpdateOptions, callback: (error: Error, result: AppInstallItem) => void): void ;

    searchForAllUpdatesForUserAsync(user: Object, correlationVector: string, callback: (error: Error, result: Object) => void): void ;
    searchForAllUpdatesForUserAsync(user: Object, correlationVector: string, clientId: string, updateOptions: AppUpdateOptions, callback: (error: Error, result: Object) => void): void ;

    getIsAppAllowedToInstallForUserAsync(user: Object, productId: string, skuId: string, catalogId: string, correlationVector: string, callback: (error: Error, result: boolean) => void): void ;

    getIsApplicableForUserAsync(user: Object, productId: string, skuId: string, callback: (error: Error, result: boolean) => void): void ;

    getFreeUserEntitlementAsync(storeId: string, campaignId: string, correlationVector: string, callback: (error: Error, result: GetEntitlementResult) => void): void ;

    getFreeUserEntitlementForUserAsync(user: Object, storeId: string, campaignId: string, correlationVector: string, callback: (error: Error, result: GetEntitlementResult) => void): void ;

    getFreeDeviceEntitlementAsync(storeId: string, campaignId: string, correlationVector: string, callback: (error: Error, result: GetEntitlementResult) => void): void ;

    getIsPackageIdentityAllowedToInstallAsync(correlationVector: string, packageIdentityName: string, publisherCertificateName: string, callback: (error: Error, result: boolean) => void): void ;

    getIsPackageIdentityAllowedToInstallForUserAsync(user: Object, correlationVector: string, packageIdentityName: string, publisherCertificateName: string, callback: (error: Error, result: boolean) => void): void ;

    cancel(productId: string): void;
    cancel(productId: string, correlationVector: string): void;

    pause(productId: string): void;
    pause(productId: string, correlationVector: string): void;

    restart(productId: string): void;
    restart(productId: string, correlationVector: string): void;

    moveToFrontOfDownloadQueue(productId: string, correlationVector: string): void;

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

