  export class Size {
    constructor();
  }

  export class FullTrustAppContract {
    constructor();
  }

  export class PackageInstallProgress {
    percentComplete: Number;
    constructor();
  }

  export class PackageVersion {
    major: Number;
    minor: Number;
    build: Number;
    revision: Number;
    constructor();
  }

  export class StartupTaskContract {
    constructor();
  }

  export enum AddResourcePackageOptions {
    none,
    forceTargetAppShutdown,
    applyUpdateIfAvailable,
  }

  export enum AppExecutionContext {
    unknown,
    host,
    guest,
  }

  export enum AppInstallerPolicySource {
    default,
    system,
  }

  export enum FullTrustLaunchResult {
    success,
    accessDenied,
    fileNotFound,
    unknown,
  }

  export enum LimitedAccessFeatureStatus {
    unavailable,
    available,
    availableWithoutToken,
    unknown,
  }

  export enum PackageContentGroupState {
    notStaged,
    queued,
    staging,
    staged,
  }

  export enum PackageRelationship {
    dependencies,
    dependents,
    all,
  }

  export enum PackageSignatureKind {
    none,
    developer,
    enterprise,
    store,
    system,
  }

  export enum PackageUpdateAvailability {
    unknown,
    noUpdates,
    available,
    required,
    error,
  }

  export enum StartupTaskState {
    disabled,
    disabledByUser,
    enabled,
    disabledByPolicy,
    enabledByPolicy,
  }

  export class AppDisplayInfo {
    description: String;
    displayName: String;
    constructor();

    getLogo(size: Object): Object;

  }

  export class AppInfo {
    static current: AppInfo;
    appUserModelId: String;
    displayInfo: AppDisplayInfo;
    id: String;
    packageFamilyName: String;
    package: Package;
    executionContext: AppExecutionContext;
    supportedFileExtensions: Array<String>;
    constructor();

    static getFromAppUserModelId(appUserModelId: String): AppInfo;


    static getFromAppUserModelIdForUser(user: Object, appUserModelId: String): AppInfo;


  }

  export class AppInstallerInfo {
    uri: Object;
    automaticBackgroundTask: Boolean;
    dependencyPackageUris: Object;
    forceUpdateFromAnyVersion: Boolean;
    hoursBetweenUpdateChecks: Number;
    isAutoRepairEnabled: Boolean;
    lastChecked: Date;
    onLaunch: Boolean;
    optionalPackageUris: Object;
    pausedUntil: Date;
    policySource: AppInstallerPolicySource;
    repairUris: Object;
    showPrompt: Boolean;
    updateBlocksActivation: Boolean;
    updateUris: Object;
    version: PackageVersion;
    constructor();

  }

  export class AppInstance {
    static recommendedInstance: AppInstance;
    isCurrentInstance: Boolean;
    key: String;
    constructor();

    static getActivatedEventArgs(): Object;


    static findOrRegisterInstanceForKey(key: String): AppInstance;


    static unregister(): void;


    static getInstances(): Object;


    redirectActivationTo(): void;

  }

  export class CameraApplicationManager {
    constructor();

    static showInstalledApplicationsUI(): void;


  }

  export class DesignMode {
    static designModeEnabled: Boolean;
    static designMode2Enabled: Boolean;
    constructor();

  }

  export class EnteredBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class FindRelatedPackagesOptions {
    relationship: PackageRelationship;
    includeResources: Boolean;
    includeOptionals: Boolean;
    includeHostRuntimes: Boolean;
    includeFrameworks: Boolean;
    constructor();
    constructor(Relationship: PackageRelationship);

  }

  export class FullTrustProcessLaunchResult {
    extendedError: Number;
    launchResult: FullTrustLaunchResult;
    constructor();

  }

  export class FullTrustProcessLauncher {
    constructor();

    static launchFullTrustProcessForCurrentAppWithArgumentsAsync(commandLine: String, callback: (error: Error, result: FullTrustProcessLaunchResult) => void): void ;


    static launchFullTrustProcessForAppWithArgumentsAsync(fullTrustPackageRelativeAppId: String, commandLine: String, callback: (error: Error, result: FullTrustProcessLaunchResult) => void): void ;


    static launchFullTrustProcessForCurrentAppAsync(callback: (error: Error) => void): void ;
    static launchFullTrustProcessForCurrentAppAsync(parameterGroupId: String, callback: (error: Error) => void): void ;


    static launchFullTrustProcessForAppAsync(fullTrustPackageRelativeAppId: String, callback: (error: Error) => void): void ;
    static launchFullTrustProcessForAppAsync(fullTrustPackageRelativeAppId: String, parameterGroupId: String, callback: (error: Error) => void): void ;


  }

  export class IEnteredBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class ILeavingBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class IPackageCatalogStatics2 {
    constructor();

    openForPackage(package: Package): PackageCatalog;

  }

  export class ISuspendingDeferral {
    constructor();

    complete(): void;

  }

  export class ISuspendingEventArgs {
    suspendingOperation: SuspendingOperation;
    constructor();

  }

  export class ISuspendingOperation {
    deadline: Date;
    constructor();

    getDeferral(): SuspendingDeferral;

  }

  export class LeavingBackgroundEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class LimitedAccessFeatureRequestResult {
    estimatedRemovalDate: Date;
    featureId: String;
    status: LimitedAccessFeatureStatus;
    constructor();

  }

  export class LimitedAccessFeatures {
    constructor();

    static tryUnlockFeature(featureId: String, token: String, attestation: String): LimitedAccessFeatureRequestResult;


  }

  export class Package {
    static current: Package;
    dependencies: Object;
    id: PackageId;
    installedLocation: Object;
    isFramework: Boolean;
    description: String;
    displayName: String;
    isBundle: Boolean;
    isDevelopmentMode: Boolean;
    isResourcePackage: Boolean;
    logo: Object;
    publisherDisplayName: String;
    installedDate: Date;
    status: PackageStatus;
    isOptional: Boolean;
    signatureKind: PackageSignatureKind;
    effectiveLocation: Object;
    mutableLocation: Object;
    effectiveExternalLocation: Object;
    effectiveExternalPath: String;
    effectivePath: String;
    installedPath: String;
    isStub: Boolean;
    machineExternalLocation: Object;
    machineExternalPath: String;
    mutablePath: String;
    userExternalLocation: Object;
    userExternalPath: String;
    sourceUriSchemeName: String;
    installDate: Date;
    constructor();

    getAppListEntriesAsync(callback: (error: Error, result: Object) => void): void ;

    verifyContentIntegrityAsync(callback: (error: Error, result: Boolean) => void): void ;

    getContentGroupsAsync(callback: (error: Error, result: Object) => void): void ;

    getContentGroupAsync(name: String, callback: (error: Error, result: PackageContentGroup) => void): void ;

    stageContentGroupsAsync(names: Object, callback: (error: Error, result: Object) => void): void ;
    stageContentGroupsAsync(names: Object, moveToHeadOfQueue: Boolean, callback: (error: Error, result: Object) => void): void ;

    setInUseAsync(inUse: Boolean, callback: (error: Error, result: Boolean) => void): void ;

    checkUpdateAvailabilityAsync(callback: (error: Error, result: PackageUpdateAvailabilityResult) => void): void ;

    getThumbnailToken(): String;

    launch(parameters: String): void;

    getAppInstallerInfo(): AppInstallerInfo;

    getLogoAsRandomAccessStreamReference(size: Object): Object;

    getAppListEntries(): Object;

    findRelatedPackages(options: FindRelatedPackagesOptions): Object;

  }

  export class PackageCatalog {
    constructor();

    static openForPackage(package: Package): PackageCatalog;


    static openForCurrentPackage(): PackageCatalog;


    static openForCurrentUser(): PackageCatalog;


    addOptionalPackageAsync(optionalPackageFamilyName: String, callback: (error: Error, result: PackageCatalogAddOptionalPackageResult) => void): void ;

    removeOptionalPackagesAsync(optionalPackageFamilyNames: Object, callback: (error: Error, result: PackageCatalogRemoveOptionalPackagesResult) => void): void ;

    addResourcePackageAsync(resourcePackageFamilyName: String, resourceID: String, options: AddResourcePackageOptions, callback: (error: Error, result: PackageCatalogAddResourcePackageResult) => void): void ;

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
    extendedError: Number;
    package: Package;
    constructor();

  }

  export class PackageCatalogAddResourcePackageResult {
    extendedError: Number;
    isComplete: Boolean;
    package: Package;
    constructor();

  }

  export class PackageCatalogRemoveOptionalPackagesResult {
    extendedError: Number;
    packagesRemoved: Object;
    constructor();

  }

  export class PackageCatalogRemoveResourcePackagesResult {
    extendedError: Number;
    packagesRemoved: Object;
    constructor();

  }

  export class PackageContentGroup {
    static requiredGroupName: String;
    isRequired: Boolean;
    name: String;
    package: Package;
    state: PackageContentGroupState;
    constructor();

  }

  export class PackageContentGroupStagingEventArgs {
    activityId: String;
    contentGroupName: String;
    errorCode: Number;
    isComplete: Boolean;
    isContentGroupRequired: Boolean;
    package: Package;
    progress: Number;
    constructor();

  }

  export class PackageId {
    architecture: Number;
    familyName: String;
    fullName: String;
    name: String;
    publisher: String;
    publisherId: String;
    resourceId: String;
    version: PackageVersion;
    author: String;
    productId: String;
    constructor();

  }

  export class PackageInstallingEventArgs {
    activityId: String;
    errorCode: Number;
    isComplete: Boolean;
    package: Package;
    progress: Number;
    constructor();

  }

  export class PackageStagingEventArgs {
    activityId: String;
    errorCode: Number;
    isComplete: Boolean;
    package: Package;
    progress: Number;
    constructor();

  }

  export class PackageStatus {
    dataOffline: Boolean;
    dependencyIssue: Boolean;
    deploymentInProgress: Boolean;
    disabled: Boolean;
    licenseIssue: Boolean;
    modified: Boolean;
    needsRemediation: Boolean;
    notAvailable: Boolean;
    packageOffline: Boolean;
    servicing: Boolean;
    tampered: Boolean;
    isPartiallyStaged: Boolean;
    constructor();

    verifyIsOK(): Boolean;

  }

  export class PackageStatusChangedEventArgs {
    package: Package;
    constructor();

  }

  export class PackageUninstallingEventArgs {
    activityId: String;
    errorCode: Number;
    isComplete: Boolean;
    package: Package;
    progress: Number;
    constructor();

  }

  export class PackageUpdateAvailabilityResult {
    availability: PackageUpdateAvailability;
    extendedError: Number;
    constructor();

  }

  export class PackageUpdatingEventArgs {
    activityId: String;
    errorCode: Number;
    isComplete: Boolean;
    progress: Number;
    sourcePackage: Package;
    targetPackage: Package;
    constructor();

  }

  export class StartupTask {
    state: StartupTaskState;
    taskId: String;
    constructor();

    static getForCurrentPackageAsync(callback: (error: Error, result: Object) => void): void ;


    static getAsync(taskId: String, callback: (error: Error, result: StartupTask) => void): void ;


    requestEnableAsync(callback: (error: Error, result: StartupTaskState) => void): void ;

    disable(): void;

  }

  export class SuspendingDeferral {
    constructor();

    complete(): void;

  }

  export class SuspendingEventArgs {
    suspendingOperation: SuspendingOperation;
    constructor();

  }

  export class SuspendingOperation {
    deadline: Date;
    constructor();

    getDeferral(): SuspendingDeferral;

  }

export const AddResourcePackageOptions: any;
export const AppExecutionContext: any;
export const AppInstallerPolicySource: any;
export const FullTrustLaunchResult: any;
export const LimitedAccessFeatureStatus: any;
export const PackageContentGroupState: any;
export const PackageRelationship: any;
export const PackageSignatureKind: any;
export const PackageUpdateAvailability: any;
export const StartupTaskState: any;
export const AppDisplayInfo: any;
export const AppInfo: any;
export const AppInstallerInfo: any;
export const AppInstance: any;
export const CameraApplicationManager: any;
export const DesignMode: any;
export const EnteredBackgroundEventArgs: any;
export const FindRelatedPackagesOptions: any;
export const FullTrustProcessLaunchResult: any;
export const FullTrustProcessLauncher: any;
export const IEnteredBackgroundEventArgs: any;
export const ILeavingBackgroundEventArgs: any;
export const IPackageCatalogStatics2: any;
export const ISuspendingDeferral: any;
export const ISuspendingEventArgs: any;
export const ISuspendingOperation: any;
export const LeavingBackgroundEventArgs: any;
export const LimitedAccessFeatureRequestResult: any;
export const LimitedAccessFeatures: any;
export const Package: any;
export const PackageCatalog: any;
export const PackageCatalogAddOptionalPackageResult: any;
export const PackageCatalogAddResourcePackageResult: any;
export const PackageCatalogRemoveOptionalPackagesResult: any;
export const PackageCatalogRemoveResourcePackagesResult: any;
export const PackageContentGroup: any;
export const PackageContentGroupStagingEventArgs: any;
export const PackageId: any;
export const PackageInstallingEventArgs: any;
export const PackageStagingEventArgs: any;
export const PackageStatus: any;
export const PackageStatusChangedEventArgs: any;
export const PackageUninstallingEventArgs: any;
export const PackageUpdateAvailabilityResult: any;
export const PackageUpdatingEventArgs: any;
export const StartupTask: any;
export const SuspendingDeferral: any;
export const SuspendingEventArgs: any;
export const SuspendingOperation: any;
export * as activation from "./applicationmodel.activation.js";
export * as appextensions from "./applicationmodel.appextensions.js";
export * as appointments from "./applicationmodel.appointments.js";
export * as appservice from "./applicationmodel.appservice.js";
export * as background from "./applicationmodel.background.js";
export * as calls from "./applicationmodel.calls.js";
export * as chat from "./applicationmodel.chat.js";
export * as communicationblocking from "./applicationmodel.communicationblocking.js";
export * as contacts from "./applicationmodel.contacts.js";
export * as conversationalagent from "./applicationmodel.conversationalagent.js";
export * as core from "./applicationmodel.core.js";
export * as datatransfer from "./applicationmodel.datatransfer.js";
export * as email from "./applicationmodel.email.js";
export * as extendedexecution from "./applicationmodel.extendedexecution.js";
export * as holographic from "./applicationmodel.holographic.js";
export * as lockscreen from "./applicationmodel.lockscreen.js";
export * as payments from "./applicationmodel.payments.js";
export * as resources from "./applicationmodel.resources.js";
export * as search from "./applicationmodel.search.js";
export * as socialinfo from "./applicationmodel.socialinfo.js";
export * as store from "./applicationmodel.store.js";
export * as useractivities from "./applicationmodel.useractivities.js";
export * as userdataaccounts from "./applicationmodel.userdataaccounts.js";
export * as userdatatasks from "./applicationmodel.userdatatasks.js";
export * as voicecommands from "./applicationmodel.voicecommands.js";
export * as wallet from "./applicationmodel.wallet.js";
