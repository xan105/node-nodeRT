  export class PackageVersion {
    major: Number;
    minor: Number;
    build: Number;
    revision: Number;
    constructor();
  }

  export class DeploymentProgress {
    state: DeploymentProgressState;
    percentage: Number;
    constructor();
  }

  export class SharedPackageContainerContract {
    constructor();
  }

  export enum AddPackageByAppInstallerOptions {
    none,
    installAllResources,
    forceTargetAppShutdown,
    requiredContentGroupOnly,
    limitToExistingPackages,
  }

  export enum DeploymentOptions {
    none,
    forceApplicationShutdown,
    developmentMode,
    installAllResources,
    forceTargetApplicationShutdown,
    requiredContentGroupOnly,
    forceUpdateFromAnyVersion,
    retainFilesOnFailure,
    stageInPlace,
  }

  export enum DeploymentProgressState {
    queued,
    processing,
  }

  export enum PackageInstallState {
    notInstalled,
    staged,
    installed,
    paused,
  }

  export enum PackageState {
    normal,
    licenseInvalid,
    modified,
    tampered,
  }

  export enum PackageStatus {
    oK,
    licenseIssue,
    modified,
    tampered,
    disabled,
  }

  export enum PackageStubPreference {
    full,
    stub,
  }

  export enum PackageTypes {
    none,
    main,
    framework,
    resource,
    bundle,
    xap,
    optional,
    all,
  }

  export enum RemovalOptions {
    none,
    preserveApplicationData,
    preserveRoamableApplicationData,
    removeForAllUsers,
  }

  export enum SharedPackageContainerCreationCollisionOptions {
    failIfExists,
    mergeWithExisting,
    replaceExisting,
  }

  export enum SharedPackageContainerOperationStatus {
    success,
    blockedByPolicy,
    alreadyExists,
    packageFamilyExistsInAnotherContainer,
    notFound,
    unknownFailure,
  }

  export enum StubPackageOption {
    default,
    installFull,
    installStub,
    usePreference,
  }

  export class AddPackageOptions {
    targetVolume: PackageVolume;
    stubPackageOption: StubPackageOption;
    stageInPlace: Boolean;
    retainFilesOnFailure: Boolean;
    requiredContentGroupOnly: Boolean;
    installAllResources: Boolean;
    forceUpdateFromAnyVersion: Boolean;
    forceTargetAppShutdown: Boolean;
    forceAppShutdown: Boolean;
    externalLocationUri: Object;
    developerMode: Boolean;
    deferRegistrationWhenPackagesAreInUse: Boolean;
    allowUnsigned: Boolean;
    dependencyPackageUris: Object;
    optionalPackageFamilyNames: Object;
    optionalPackageUris: Object;
    relatedPackageUris: Object;
    constructor();

  }

  export class AppInstallerManager {
    constructor();

    static getDefault(): AppInstallerManager;


    static getForSystem(): AppInstallerManager;


    setAutoUpdateSettings(packageFamilyName: String, appInstallerInfo: AutoUpdateSettingsOptions): void;

    clearAutoUpdateSettings(packageFamilyName: String): void;

    pauseAutoUpdatesUntil(packageFamilyName: String, dateTime: Date): void;

  }

  export class AutoUpdateSettingsOptions {
    version: PackageVersion;
    updateBlocksActivation: Boolean;
    showPrompt: Boolean;
    onLaunch: Boolean;
    isAutoRepairEnabled: Boolean;
    hoursBetweenUpdateChecks: Number;
    forceUpdateFromAnyVersion: Boolean;
    automaticBackgroundTask: Boolean;
    appInstallerUri: Object;
    dependencyPackageUris: Object;
    optionalPackageUris: Object;
    repairUris: Object;
    updateUris: Object;
    constructor();

    static createFromAppInstallerInfo(appInstallerInfo: Object): AutoUpdateSettingsOptions;


  }

  export class CreateSharedPackageContainerOptions {
    forceAppShutdown: Boolean;
    createCollisionOption: SharedPackageContainerCreationCollisionOptions;
    members: Object;
    constructor();

  }

  export class CreateSharedPackageContainerResult {
    container: SharedPackageContainer;
    extendedError: Number;
    status: SharedPackageContainerOperationStatus;
    constructor();

  }

  export class DeleteSharedPackageContainerOptions {
    forceAppShutdown: Boolean;
    allUsers: Boolean;
    constructor();

  }

  export class DeleteSharedPackageContainerResult {
    extendedError: Number;
    status: SharedPackageContainerOperationStatus;
    constructor();

  }

  export class DeploymentResult {
    activityId: String;
    errorText: String;
    extendedErrorCode: Number;
    isRegistered: Boolean;
    constructor();

  }

  export class FindSharedPackageContainerOptions {
    packageFamilyName: String;
    name: String;
    constructor();

  }

  export class PackageAllUserProvisioningOptions {
    optionalPackageFamilyNames: Object;
    projectionOrderPackageFamilyNames: Object;
    constructor();

  }

  export class PackageManager {
    debugSettings: PackageManagerDebugSettings;
    constructor();

    stagePackageAsync(packageUri: Object, dependencyPackageUris: Object, options: DeploymentOptions, targetVolume: PackageVolume, optionalPackageFamilyNames: Object, packageUrisToInstall: Object, relatedPackageUris: Object, callback: (error: Error, result: DeploymentResult) => void): void ;
    stagePackageAsync(packageUri: Object, dependencyPackageUris: Object, callback: (error: Error, result: DeploymentResult) => void): void ;
    stagePackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;
    stagePackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;
    stagePackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, optionalPackageFamilyNames: Object, externalPackageUris: Object, callback: (error: Error, result: DeploymentResult) => void): void ;

    requestAddPackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, optionalPackageFamilyNames: Object, relatedPackageUris: Object, callback: (error: Error, result: DeploymentResult) => void): void ;
    requestAddPackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, optionalPackageFamilyNames: Object, relatedPackageUris: Object, packageUrisToInstall: Object, callback: (error: Error, result: DeploymentResult) => void): void ;

    deprovisionPackageForAllUsersAsync(packageFamilyName: String, callback: (error: Error, result: DeploymentResult) => void): void ;

    addPackageByUriAsync(packageUri: Object, options: AddPackageOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    stagePackageByUriAsync(packageUri: Object, options: StagePackageOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    registerPackageByUriAsync(manifestUri: Object, options: RegisterPackageOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    registerPackagesByFullNameAsync(packageFullNames: Object, options: RegisterPackageOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    provisionPackageForAllUsersAsync(mainPackageFamilyName: String, options: PackageAllUserProvisioningOptions, callback: (error: Error, result: DeploymentResult) => void): void ;
    provisionPackageForAllUsersAsync(packageFamilyName: String, callback: (error: Error, result: DeploymentResult) => void): void ;

    addPackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;
    addPackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;
    addPackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, optionalPackageFamilyNames: Object, externalPackageUris: Object, callback: (error: Error, result: DeploymentResult) => void): void ;
    addPackageAsync(packageUri: Object, dependencyPackageUris: Object, options: DeploymentOptions, targetVolume: PackageVolume, optionalPackageFamilyNames: Object, packageUrisToInstall: Object, relatedPackageUris: Object, callback: (error: Error, result: DeploymentResult) => void): void ;

    updatePackageAsync(packageUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    removePackageAsync(packageFullName: String, callback: (error: Error, result: DeploymentResult) => void): void ;
    removePackageAsync(packageFullName: String, removalOptions: RemovalOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    registerPackageAsync(manifestUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;
    registerPackageAsync(manifestUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, appDataVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    cleanupPackageForUserAsync(packageName: String, userSecurityId: String, callback: (error: Error, result: DeploymentResult) => void): void ;

    registerPackageByFullNameAsync(mainPackageFullName: String, dependencyPackageFullNames: Object, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    stageUserDataAsync(packageFullName: String, callback: (error: Error, result: DeploymentResult) => void): void ;
    stageUserDataAsync(packageFullName: String, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    addPackageVolumeAsync(packageStorePath: String, callback: (error: Error, result: PackageVolume) => void): void ;

    movePackageToVolumeAsync(packageFullName: String, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    removePackageVolumeAsync(volume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    setPackageVolumeOfflineAsync(packageVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    setPackageVolumeOnlineAsync(packageVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    getPackageVolumesAsync(callback: (error: Error, result: Object) => void): void ;

    registerPackageByFamilyNameAsync(mainPackageFamilyName: String, dependencyPackageFamilyNames: Object, deploymentOptions: DeploymentOptions, appDataVolume: PackageVolume, optionalPackageFamilyNames: Object, callback: (error: Error, result: DeploymentResult) => void): void ;

    addPackageByAppInstallerFileAsync(appInstallerFileUri: Object, options: AddPackageByAppInstallerOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    requestAddPackageByAppInstallerFileAsync(appInstallerFileUri: Object, options: AddPackageByAppInstallerOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    findProvisionedPackages(): Object;

    setPackageStubPreference(packageFamilyName: String, useStub: PackageStubPreference): void;

    getPackageStubPreference(packageFamilyName: String): PackageStubPreference;

    findPackages(): Object;
    findPackages(packageName: String, packagePublisher: String): Object;
    findPackages(packageFamilyName: String): Object;

    findPackagesForUser(userSecurityId: String): Object;
    findPackagesForUser(userSecurityId: String, packageName: String, packagePublisher: String): Object;
    findPackagesForUser(userSecurityId: String, packageFamilyName: String): Object;

    findUsers(packageFullName: String): Object;

    setPackageState(packageFullName: String, packageState: PackageState): void;

    findPackage(packageFullName: String): Object;

    findPackageForUser(userSecurityId: String, packageFullName: String): Object;

    findPackagesWithPackageTypes(packageTypes: PackageTypes): Object;
    findPackagesWithPackageTypes(packageName: String, packagePublisher: String, packageTypes: PackageTypes): Object;
    findPackagesWithPackageTypes(packageFamilyName: String, packageTypes: PackageTypes): Object;

    findPackagesForUserWithPackageTypes(userSecurityId: String, packageTypes: PackageTypes): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: String, packageName: String, packagePublisher: String, packageTypes: PackageTypes): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: String, packageFamilyName: String, packageTypes: PackageTypes): Object;

    clearPackageStatus(packageFullName: String, status: PackageStatus): void;

    findPackageVolume(volumeName: String): PackageVolume;

    findPackageVolumes(): Object;

    getDefaultPackageVolume(): PackageVolume;

    setDefaultPackageVolume(volume: PackageVolume): void;

    setPackageStatus(packageFullName: String, status: PackageStatus): void;

  }

  export class PackageManagerDebugSettings {
    constructor();

    setContentGroupStateAsync(package: Object, contentGroupName: String, state: Number, callback: (error: Error) => void): void ;
    setContentGroupStateAsync(package: Object, contentGroupName: String, state: Number, completionPercentage: Number, callback: (error: Error) => void): void ;

  }

  export class PackageUserInformation {
    installState: PackageInstallState;
    userSecurityId: String;
    constructor();

  }

  export class PackageVolume {
    isOffline: Boolean;
    isSystemVolume: Boolean;
    mountPoint: String;
    name: String;
    packageStorePath: String;
    supportsHardLinks: Boolean;
    isAppxInstallSupported: Boolean;
    isFullTrustPackageSupported: Boolean;
    constructor();

    getAvailableSpaceAsync(callback: (error: Error, result: Number) => void): void ;

    findPackages(): Object;
    findPackages(packageName: String, packagePublisher: String): Object;
    findPackages(packageFamilyName: String): Object;

    findPackagesWithPackageTypes(packageTypes: PackageTypes): Object;
    findPackagesWithPackageTypes(packageTypes: PackageTypes, packageName: String, packagePublisher: String): Object;
    findPackagesWithPackageTypes(packageTypes: PackageTypes, packageFamilyName: String): Object;

    findPackage(packageFullName: String): Object;

    findPackagesForUser(userSecurityId: String): Object;
    findPackagesForUser(userSecurityId: String, packageName: String, packagePublisher: String): Object;
    findPackagesForUser(userSecurityId: String, packageFamilyName: String): Object;

    findPackagesForUserWithPackageTypes(userSecurityId: String, packageTypes: PackageTypes): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: String, packageTypes: PackageTypes, packageName: String, packagePublisher: String): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: String, packageTypes: PackageTypes, packageFamilyName: String): Object;

    findPackageForUser(userSecurityId: String, packageFullName: String): Object;

  }

  export class RegisterPackageOptions {
    stageInPlace: Boolean;
    installAllResources: Boolean;
    forceUpdateFromAnyVersion: Boolean;
    forceTargetAppShutdown: Boolean;
    forceAppShutdown: Boolean;
    externalLocationUri: Object;
    developerMode: Boolean;
    deferRegistrationWhenPackagesAreInUse: Boolean;
    appDataVolume: PackageVolume;
    allowUnsigned: Boolean;
    dependencyPackageUris: Object;
    optionalPackageFamilyNames: Object;
    constructor();

  }

  export class SharedPackageContainer {
    id: String;
    name: String;
    constructor();

    getMembers(): Object;

    removePackageFamily(packageFamilyName: String, options: UpdateSharedPackageContainerOptions): UpdateSharedPackageContainerResult;

    resetData(): UpdateSharedPackageContainerResult;

  }

  export class SharedPackageContainerManager {
    constructor();

    static getDefault(): SharedPackageContainerManager;


    static getForUser(userSid: String): SharedPackageContainerManager;


    static getForProvisioning(): SharedPackageContainerManager;


    createContainer(name: String, options: CreateSharedPackageContainerOptions): CreateSharedPackageContainerResult;

    deleteContainer(id: String, options: DeleteSharedPackageContainerOptions): DeleteSharedPackageContainerResult;

    getContainer(id: String): SharedPackageContainer;

    findContainers(): Object;
    findContainers(options: FindSharedPackageContainerOptions): Object;

  }

  export class SharedPackageContainerMember {
    packageFamilyName: String;
    constructor();
    constructor(packageFamilyName: String);

  }

  export class StagePackageOptions {
    targetVolume: PackageVolume;
    stubPackageOption: StubPackageOption;
    stageInPlace: Boolean;
    requiredContentGroupOnly: Boolean;
    installAllResources: Boolean;
    forceUpdateFromAnyVersion: Boolean;
    externalLocationUri: Object;
    developerMode: Boolean;
    allowUnsigned: Boolean;
    dependencyPackageUris: Object;
    optionalPackageFamilyNames: Object;
    optionalPackageUris: Object;
    relatedPackageUris: Object;
    constructor();

  }

  export class UpdateSharedPackageContainerOptions {
    requirePackagesPresent: Boolean;
    forceAppShutdown: Boolean;
    constructor();

  }

  export class UpdateSharedPackageContainerResult {
    extendedError: Number;
    status: SharedPackageContainerOperationStatus;
    constructor();

  }

