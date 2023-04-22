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
    id: string;
    name: string;
    status: EnterpriseStatus;
    workplaceId: number;
    constructor();

  }

  export class EnterpriseEnrollmentResult {
    enrolledEnterprise: Enterprise;
    status: EnterpriseEnrollmentStatus;
    constructor();

  }

  export class PackageInstallResult {
    installState: number;
    productId: string;
    errorText: string;
    constructor();

  }

  export class InstallationManager {
    constructor();

    static removePackageAsync(packageFullName: string, removalOptions: number, callback: (error: Error, result: PackageInstallResult) => void): void ;


    static registerPackageAsync(manifestUri: Object, dependencyPackageUris: Object, deploymentOptions: number, callback: (error: Error, result: PackageInstallResult) => void): void ;


    static addPackageAsync(title: string, sourceLocation: Object, callback: (error: Error, result: PackageInstallResult) => void): void ;
    static addPackageAsync(title: string, sourceLocation: Object, instanceId: string, offerId: string, license: Object, callback: (error: Error, result: PackageInstallResult) => void): void ;


    static findPackages(packageName: string, packagePublisher: string): Object;
    static findPackages(): Object;


    static getPendingPackageInstalls(): Object;


    static findPackagesForCurrentPublisher(): Object;


  }

  export class EnterpriseEnrollmentManager {
    static currentEnterprise: Enterprise;
    static enrolledEnterprises: Object;
    constructor();

    static validateEnterprisesAsync(callback: (error: Error) => void): void ;


    static requestEnrollmentAsync(enrollmentToken: string, callback: (error: Error, result: EnterpriseEnrollmentResult) => void): void ;


    static requestUnenrollmentAsync(enterprise: Enterprise, callback: (error: Error, result: boolean) => void): void ;


  }

