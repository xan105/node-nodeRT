  export enum EnterpriseStatus {
    enrolled,
    disabled,
    revoked,
    expired,
  }

  export enum EnterpriseEnrollmentStatus {
    success,
    cancelledByUser,
    unknownFailure,
  }

  export class Enterprise {
    enrollmentValidFrom: Date;
    enrollmentValidTo: Date;
    id: String;
    name: String;
    status: EnterpriseStatus;
    workplaceId: Number;
    constructor();

  }

  export class EnterpriseEnrollmentResult {
    enrolledEnterprise: Enterprise;
    status: EnterpriseEnrollmentStatus;
    constructor();

  }

  export class PackageInstallResult {
    installState: Number;
    productId: String;
    errorText: String;
    constructor();

  }

  export class InstallationManager {
    constructor();

    static removePackageAsync(packageFullName: String, removalOptions: Number, callback: (error: Error, result: PackageInstallResult) => void): void ;


    static registerPackageAsync(manifestUri: Object, dependencyPackageUris: Object, deploymentOptions: Number, callback: (error: Error, result: PackageInstallResult) => void): void ;


    static addPackageAsync(title: String, sourceLocation: Object, callback: (error: Error, result: PackageInstallResult) => void): void ;
    static addPackageAsync(title: String, sourceLocation: Object, instanceId: String, offerId: String, license: Object, callback: (error: Error, result: PackageInstallResult) => void): void ;


    static findPackages(packageName: String, packagePublisher: String): Object;
    static findPackages(): Object;


    static getPendingPackageInstalls(): Object;


    static findPackagesForCurrentPublisher(): Object;


  }

  export class EnterpriseEnrollmentManager {
    static currentEnterprise: Enterprise;
    static enrolledEnterprises: Object;
    constructor();

    static validateEnterprisesAsync(callback: (error: Error) => void): void ;


    static requestEnrollmentAsync(enrollmentToken: String, callback: (error: Error, result: EnterpriseEnrollmentResult) => void): void ;


    static requestUnenrollmentAsync(enterprise: Enterprise, callback: (error: Error, result: Boolean) => void): void ;


  }

