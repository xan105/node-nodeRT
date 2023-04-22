  export enum LicenseRefreshOption {
    runningLicenses,
    allLicenses,
  }

  export class LicenseSatisfactionInfo {
    isSatisfied: boolean;
    satisfiedByDevice: boolean;
    satisfiedByInstallMedia: boolean;
    satisfiedByOpenLicense: boolean;
    satisfiedByPass: boolean;
    satisfiedBySignedInUser: boolean;
    satisfiedByTrial: boolean;
    constructor();

  }

  export class LicenseSatisfactionResult {
    extendedError: number;
    licenseSatisfactionInfos: Object;
    constructor();

  }

  export class LicenseManager {
    constructor();

    static refreshLicensesAsync(refreshOption: LicenseRefreshOption, callback: (error: Error) => void): void ;


    static addLicenseAsync(license: Object, callback: (error: Error) => void): void ;


    static getSatisfactionInfosAsync(contentIds: Object, keyIds: Object, callback: (error: Error, result: LicenseSatisfactionResult) => void): void ;


  }

