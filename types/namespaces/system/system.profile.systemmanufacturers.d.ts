  export class SystemManufacturersContract {
    constructor();
  }

  export class OemSupportInfo {
    supportAppLink: Object;
    supportLink: Object;
    supportProvider: string;
    constructor();

  }

  export class SystemSupportInfo {
    static localSystemEdition: string;
    static oemSupportInfo: OemSupportInfo;
    constructor();

  }

  export class SmbiosInformation {
    static serialNumber: string;
    constructor();

  }

