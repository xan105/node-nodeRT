  export class Size {
    constructor();
  }

  export class FullTrustAppContract {
    constructor();
  }

  export class StartupTaskContract {
    constructor();
  }

  export class PackageVersion {
    major: number;
    minor: number;
    build: number;
    revision: number;
    constructor();
  }

  export class PackageInstallProgress {
    percentComplete: number;
    constructor();
  }

  export enum StartupTaskState {
    disabled,
    disabledByUser,
    enabled,
    disabledByPolicy,
    enabledByPolicy,
  }

  export enum PackageSignatureKind {
    none,
    developer,
    enterprise,
    store,
    system,
  }

  export enum AddResourcePackageOptions {
    none,
    forceTargetAppShutdown,
    applyUpdateIfAvailable,
  }

  export enum PackageContentGroupState {
    notStaged,
    queued,
    staging,
    staged,
  }

  export class FullTrustProcessLauncher {
    constructor();

    static launchFullTrustProcessForCurrentAppAsync(callback: (error: Error) => void): void ;
    static launchFullTrustProcessForCurrentAppAsync(parameterGroupId: string, callback: (error: Error) => void): void ;


    static launchFullTrustProcessForAppAsync(fullTrustPackageRelativeAppId: string, callback: (error: Error) => void): void ;
    static launchFullTrustProcessForAppAsync(fullTrustPackageRelativeAppId: string, parameterGroupId: string, callback: (error: Error) => void): void ;


  }

  export class StartupTask {
    state: StartupTaskState;
    taskId: string;
    constructor();

    static getForCurrentPackageAsync(callback: (error: Error, result: Object) => void): void ;


    static getAsync(taskId: string, callback: (error: Error, result: StartupTask) => void): void ;


    requestEnableAsync(callback: (error: Error, result: StartupTaskState) => void): void ;

    disable(): void;

  }

  export class AppDisplayInfo {
    description: string;
    displayName: string;
    constructor();

    getLogo(size: Object): Object;

  }

  export class AppInfo {
    appUserModelId: string;
    displayInfo: AppDisplayInfo;
    id: string;
    packageFamilyName: string;
    constructor();

  }

  export class PackageStatus {
    dataOffline: boolean;
    dependencyIssue: boolean;
    deploymentInProgress: boolean;
    disabled: boolean;
    licenseIssue: boolean;
    modified: boolean;
    needsRemediation: boolean;
    notAvailable: boolean;
    packageOffline: boolean;
    servicing: boolean;
    tampered: boolean;
    isPartiallyStaged: boolean;
    constructor();

    verifyIsOK(): boolean;

  }

  export class PackageId {
    architecture: number;
    familyName: string;
    fullName: string;
    name: string;
    publisher: string;
    publisherId: string;
    resourceId: string;
    version: PackageVersion;
    author: string;
    productId: string;
    constructor();

  }

  export class Package {
    static current: Package;
    dependencies: Object;
    id: PackageId;
    installedLocation: Object;
    isFramework: boolean;
    description: string;
    displayName: string;
    isBundle: boolean;
    isDevelopmentMode: boolean;
    isResourcePackage: boolean;
    logo: Object;
    publisherDisplayName: string;
    installedDate: Date;
    status: PackageStatus;
    isOptional: boolean;
    signatureKind: PackageSignatureKind;
    installDate: Date;
    constructor();

    getAppListEntriesAsync(callback: (error: Error, result: Object) => void): void ;

    verifyContentIntegrityAsync(callback: (error: Error, result: boolean) => void): void ;

    getContentGroupsAsync(callback: (error: Error, result: Object) => void): void ;

    getContentGroupAsync(name: string, callback: (error: Error, result: PackageContentGroup) => void): void ;

    stageContentGroupsAsync(names: Object, callback: (error: Error, result: Object) => void): void ;
    stageContentGroupsAsync(names: Object, moveToHeadOfQueue: boolean, callback: (error: Error, result: Object) => void): void ;

    setInUseAsync(inUse: boolean, callback: (error: Error, result: boolean) => void): void ;

    getThumbnailToken(): string;

    launch(parameters: string): void;

  }

  export class PackageContentGroup {
    static requiredGroupName: string;
    isRequired: boolean;
    name: string;
    package: Package;
    state: PackageContentGroupState;
    constructor();

  }

  export class PackageStagingEventArgs {
    activityId: string;
    errorCode: number;
    isComplete: boolean;
    package: Package;
    progress: number;
    constructor();

  }

  export class PackageInstallingEventArgs {
    activityId: string;
    errorCode: number;
    isComplete: boolean;
    package: Package;
    progress: number;
    constructor();

  }

  export class PackageUpdatingEventArgs {
    activityId: string;
    errorCode: number;
    isComplete: boolean;
    progress: number;
    sourcePackage: Package;
    targetPackage: Package;
    constructor();

  }

  export class PackageUninstallingEventArgs {
    activityId: string;
    errorCode: number;
    isComplete: boolean;
    package: Package;
    progress: number;
    constructor();

  }

  export class PackageStatusChangedEventArgs {
    package: Package;
    constructor();

  }

  export class PackageContentGroupStagingEventArgs {
    activityId: string;
    contentGroupName: string;
    errorCode: number;
    isComplete: boolean;
    isContentGroupRequired: boolean;
    package: Package;
    progress: number;
    constructor();

  }

  export class PackageCatalog {
    constructor();

    static openForCurrentPackage(): PackageCatalog;


    static openForCurrentUser(): PackageCatalog;


    addOptionalPackageAsync(optionalPackageFamilyName: string, callback: (error: Error, result: PackageCatalogAddOptionalPackageResult) => void): void ;

    removeOptionalPackagesAsync(optionalPackageFamilyNames: Object, callback: (error: Error, result: PackageCatalogRemoveOptionalPackagesResult) => void): void ;

    addResourcePackageAsync(resourcePackageFamilyName: string, resourceID: string, options: AddResourcePackageOptions, callback: (error: Error, result: PackageCatalogAddResourcePackageResult) => void): void ;

    removeResourcePackagesAsync(resourcePackages: Object, callback: (error: Error, result: PackageCatalogRemoveResourcePackagesResult) => void): void ;

    addListener(type: "PackageInstalling", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageInstalling", listener: (ev: Event) => void): void ;
    on(type: "PackageInstalling", listener: (ev: Event) => void): void ;
    off(type: "PackageInstalling", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageStaging", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageStaging", listener: (ev: Event) => void): void ;
    on(type: "PackageStaging", listener: (ev: Event) => void): void ;
    off(type: "PackageStaging", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "PackageStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    on(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    off(type: "PackageUninstalling", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    on(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    off(type: "PackageUpdating", listener: (ev: Event) => void): void ;
    
    addListener(type: "PackageContentGroupStaging", listener: (ev: Event) => void): void ;
    removeListener(type: "PackageContentGroupStaging", listener: (ev: Event) => void): void ;
    on(type: "PackageContentGroupStaging", listener: (ev: Event) => void): void ;
    off(type: "PackageContentGroupStaging", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PackageCatalogAddOptionalPackageResult {
    extendedError: number;
    package: Package;
    constructor();

  }

  export class PackageCatalogRemoveOptionalPackagesResult {
    extendedError: number;
    packagesRemoved: Object;
    constructor();

  }

  export class PackageCatalogRemoveResourcePackagesResult {
    extendedError: number;
    packagesRemoved: Object;
    constructor();

  }

  export class PackageCatalogAddResourcePackageResult {
    extendedError: number;
    isComplete: boolean;
    package: Package;
    constructor();

  }

  export class DesignMode {
    static designModeEnabled: boolean;
    static designMode2Enabled: boolean;
    constructor();

  }

  export class AppInstance {
    static recommendedInstance: AppInstance;
    isCurrentInstance: boolean;
    key: string;
    constructor();

    static getActivatedEventArgs(): Object;


    static findOrRegisterInstanceForKey(key: string): AppInstance;


    static unregister(): void;


    static getInstances(): Object;


    redirectActivationTo(): void;

  }

  export class SuspendingEventArgs {
    suspendingOperation: SuspendingOperation;
    constructor();

  }

  export class LeavingBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class EnteredBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class ISuspendingDeferral {
    constructor();

    complete(): void;

  }

  export class SuspendingDeferral {
    constructor();

    complete(): void;

  }

  export class ISuspendingOperation {
    deadline: Date;
    constructor();

    getDeferral(): SuspendingDeferral;

  }

  export class SuspendingOperation {
    deadline: Date;
    constructor();

    getDeferral(): SuspendingDeferral;

  }

  export class ISuspendingEventArgs {
    suspendingOperation: SuspendingOperation;
    constructor();

  }

  export class ILeavingBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class IEnteredBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class CameraApplicationManager {
    constructor();

    static showInstalledApplicationsUI(): void;


  }

export * as activation from "./applicationmodel.activation.js";
export * as appextensions from "./applicationmodel.appextensions.js";
export * as appointments from "./applicationmodel.appointments.js";
export * as appservice from "./applicationmodel.appservice.js";
export * as background from "./applicationmodel.background.js";
export * as calls from "./applicationmodel.calls.js";
export * as chat from "./applicationmodel.chat.js";
export * as communicationblocking from "./applicationmodel.communicationblocking.js";
export * as contacts from "./applicationmodel.contacts.js";
export * as core from "./applicationmodel.core.js";
export * as datatransfer from "./applicationmodel.datatransfer.js";
export * as email from "./applicationmodel.email.js";
export * as extendedexecution from "./applicationmodel.extendedexecution.js";
export * as lockscreen from "./applicationmodel.lockscreen.js";
export * as payments from "./applicationmodel.payments.js";
export * as preview from "./applicationmodel.preview.js";
export * as resources from "./applicationmodel.resources.js";
export * as search from "./applicationmodel.search.js";
export * as socialinfo from "./applicationmodel.socialinfo.js";
export * as store from "./applicationmodel.store.js";
export * as useractivities from "./applicationmodel.useractivities.js";
export * as userdataaccounts from "./applicationmodel.userdataaccounts.js";
export * as userdatatasks from "./applicationmodel.userdatatasks.js";
export * as voicecommands from "./applicationmodel.voicecommands.js";
export * as wallet from "./applicationmodel.wallet.js";