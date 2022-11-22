  export class SystemManufacturersContract {
    constructor();
  }

  export class OemSupportInfo {
    supportAppLink: Object;
    supportLink: Object;
    supportProvider: String;
    constructor();

  }

  export class SystemSupportInfo {
    static localSystemEdition: String;
    static oemSupportInfo: OemSupportInfo;
    constructor();

  }

  export class SmbiosInformation {
    static serialNumber: String;
    constructor();

  }

