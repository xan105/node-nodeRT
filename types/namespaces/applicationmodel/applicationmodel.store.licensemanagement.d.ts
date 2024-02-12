  export enum LicenseRefreshOption {
    runningLicenses,
    allLicenses,
  }

  export class LicenseManager {
    constructor();

    static refreshLicensesAsync(refreshOption: LicenseRefreshOption, callback: (error: Error) => void): void ;


    static addLicenseAsync(license: Object, callback: (error: Error) => void): void ;


    static getSatisfactionInfosAsync(contentIds: Object, keyIds: Object, callback: (error: Error, result: LicenseSatisfactionResult) => void): void ;


  }

  export class LicenseSatisfactionInfo {
    isSatisfied: Boolean;
    satisfiedByDevice: Boolean;
    satisfiedByInstallMedia: Boolean;
    satisfiedByOpenLicense: Boolean;
    satisfiedByPass: Boolean;
    satisfiedBySignedInUser: Boolean;
    satisfiedByTrial: Boolean;
    constructor();

  }

  export class LicenseSatisfactionResult {
    extendedError: Number;
    licenseSatisfactionInfos: Object;
    constructor();

  }

