  export class SystemManufacturersContract {
    constructor();
  }

  export class OemSupportInfo {
    supportAppLink: Object;
    supportLink: Object;
    supportProvider: String;
    constructor();

  }

  export class SmbiosInformation {
    static serialNumber: String;
    constructor();

  }

  export class SystemSupportDeviceInfo {
    friendlyName: String;
    operatingSystem: String;
    systemFirmwareVersion: String;
    systemHardwareVersion: String;
    systemManufacturer: String;
    systemProductName: String;
    systemSku: String;
    constructor();

  }

  export class SystemSupportInfo {
    static localSystemEdition: String;
    static oemSupportInfo: OemSupportInfo;
    static localDeviceInfo: SystemSupportDeviceInfo;
    constructor();

  }

