  export class DeploymentProgress {
    state: DeploymentProgressState;
    percentage: number;
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
    activityId: string;
    errorText: string;
    extendedErrorCode: number;
    isRegistered: boolean;
    constructor();

  }

  export class PackageUserInformation {
    installState: PackageInstallState;
    userSecurityId: string;
    constructor();

  }

  export class PackageVolume {
    isOffline: boolean;
    isSystemVolume: boolean;
    mountPoint: string;
    name: string;
    packageStorePath: string;
    supportsHardLinks: boolean;
    isAppxInstallSupported: boolean;
    isFullTrustPackageSupported: boolean;
    constructor();

    getAvailableSpaceAsync(callback: (error: Error, result: number) => void): void ;

    findPackages(): Object;
    findPackages(packageName: string, packagePublisher: string): Object;
    findPackages(packageFamilyName: string): Object;

    findPackagesWithPackageTypes(packageTypes: PackageTypes): Object;
    findPackagesWithPackageTypes(packageTypes: PackageTypes, packageName: string, packagePublisher: string): Object;
    findPackagesWithPackageTypes(packageTypes: PackageTypes, packageFamilyName: string): Object;

    findPackage(packageFullName: string): Object;

    findPackagesForUser(userSecurityId: string): Object;
    findPackagesForUser(userSecurityId: string, packageName: string, packagePublisher: string): Object;
    findPackagesForUser(userSecurityId: string, packageFamilyName: string): Object;

    findPackagesForUserWithPackageTypes(userSecurityId: string, packageTypes: PackageTypes): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: string, packageTypes: PackageTypes, packageName: string, packagePublisher: string): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: string, packageTypes: PackageTypes, packageFamilyName: string): Object;

    findPackageForUser(userSecurityId: string, packageFullName: string): Object;

  }

  export class PackageManagerDebugSettings {
    constructor();

    setContentGroupStateAsync(package: Object, contentGroupName: string, state: number, callback: (error: Error) => void): void ;
    setContentGroupStateAsync(package: Object, contentGroupName: string, state: number, completionPercentage: number, callback: (error: Error) => void): void ;

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

    removePackageAsync(packageFullName: string, callback: (error: Error, result: DeploymentResult) => void): void ;
    removePackageAsync(packageFullName: string, removalOptions: RemovalOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    registerPackageAsync(manifestUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;
    registerPackageAsync(manifestUri: Object, dependencyPackageUris: Object, deploymentOptions: DeploymentOptions, appDataVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    cleanupPackageForUserAsync(packageName: string, userSecurityId: string, callback: (error: Error, result: DeploymentResult) => void): void ;

    registerPackageByFullNameAsync(mainPackageFullName: string, dependencyPackageFullNames: Object, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    stageUserDataAsync(packageFullName: string, callback: (error: Error, result: DeploymentResult) => void): void ;
    stageUserDataAsync(packageFullName: string, deploymentOptions: DeploymentOptions, callback: (error: Error, result: DeploymentResult) => void): void ;

    addPackageVolumeAsync(packageStorePath: string, callback: (error: Error, result: PackageVolume) => void): void ;

    movePackageToVolumeAsync(packageFullName: string, deploymentOptions: DeploymentOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    removePackageVolumeAsync(volume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    setPackageVolumeOfflineAsync(packageVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    setPackageVolumeOnlineAsync(packageVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    getPackageVolumesAsync(callback: (error: Error, result: Object) => void): void ;

    registerPackageByFamilyNameAsync(mainPackageFamilyName: string, dependencyPackageFamilyNames: Object, deploymentOptions: DeploymentOptions, appDataVolume: PackageVolume, optionalPackageFamilyNames: Object, callback: (error: Error, result: DeploymentResult) => void): void ;

    provisionPackageForAllUsersAsync(packageFamilyName: string, callback: (error: Error, result: DeploymentResult) => void): void ;

    addPackageByAppInstallerFileAsync(appInstallerFileUri: Object, options: AddPackageByAppInstallerOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    requestAddPackageByAppInstallerFileAsync(appInstallerFileUri: Object, options: AddPackageByAppInstallerOptions, targetVolume: PackageVolume, callback: (error: Error, result: DeploymentResult) => void): void ;

    findPackages(): Object;
    findPackages(packageName: string, packagePublisher: string): Object;
    findPackages(packageFamilyName: string): Object;

    findPackagesForUser(userSecurityId: string): Object;
    findPackagesForUser(userSecurityId: string, packageName: string, packagePublisher: string): Object;
    findPackagesForUser(userSecurityId: string, packageFamilyName: string): Object;

    findUsers(packageFullName: string): Object;

    setPackageState(packageFullName: string, packageState: PackageState): void;

    findPackage(packageFullName: string): Object;

    findPackageForUser(userSecurityId: string, packageFullName: string): Object;

    findPackagesWithPackageTypes(packageTypes: PackageTypes): Object;
    findPackagesWithPackageTypes(packageName: string, packagePublisher: string, packageTypes: PackageTypes): Object;
    findPackagesWithPackageTypes(packageFamilyName: string, packageTypes: PackageTypes): Object;

    findPackagesForUserWithPackageTypes(userSecurityId: string, packageTypes: PackageTypes): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: string, packageName: string, packagePublisher: string, packageTypes: PackageTypes): Object;
    findPackagesForUserWithPackageTypes(userSecurityId: string, packageFamilyName: string, packageTypes: PackageTypes): Object;

    clearPackageStatus(packageFullName: string, status: PackageStatus): void;

    findPackageVolume(volumeName: string): PackageVolume;

    findPackageVolumes(): Object;

    getDefaultPackageVolume(): PackageVolume;

    setDefaultPackageVolume(volume: PackageVolume): void;

    setPackageStatus(packageFullName: string, status: PackageStatus): void;

  }

export * as preview from "./management.deployment.preview.js";