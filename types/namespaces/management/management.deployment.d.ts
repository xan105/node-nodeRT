  export class DeploymentProgress {
    state: DeploymentProgressState;
    percentage: Number;
    constructor();
  }

  export enum DeploymentProgressState {
    queued,
    processing,
  }

  export enum DeploymentOptions {
    none,
    forceApplicationShutdown,
    developmentMode,
    installAllResources,
    forceTargetApplicationShutdown,
    requiredContentGroupOnly,
  }

  export enum RemovalOptions {
    none,
    preserveApplicationData,
  }

  export enum AddPackageByAppInstallerOptions {
    none,
    installAllResources,
    forceTargetAppShutdown,
    requiredContentGroupOnly,
  }

  export enum PackageTypes {
    none,
    main,
    framework,
    resource,
    bundle,
    xap,
    optional,
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

  export class DeploymentResult {
    activityId: String;
    errorText: String;
    extendedErrorCode: Number;
    isRegistered: Boolean;
    constructor();

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

  export class PackageManagerDebugSettings {
    constructor();

    setContentGroupStateAsync(package: Object, contentGroupName: String, state: Number, callback: (error: Error) => void): void ;
    setContentGroupStateAsync(package: Object, contentGroupName: String, state: Number, completionPercentage: Number, callback: (error: Error) => void): void ;

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

    provisionPackageForAllUsersAsync(packageFamilyName: String, callback: (error: Error, result: DeploymentResult) => void): void ;

    addPackageByAppInstallerFileAsync(appInstallerFileUri: Object, options: AddPackageByAppInstallerOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    requestAddPackageByAppInstallerFileAsync(appInstallerFileUri: Object, options: AddPackageByAppInstallerOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

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

export * as preview from "./management.deployment.preview.js";