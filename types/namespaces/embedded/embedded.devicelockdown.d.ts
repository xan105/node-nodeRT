  export class DeviceLockdownContract {
    constructor();
  }

  export class DeviceLockdownProfile {
    constructor();

    static applyLockdownProfileAsync(profileID: String, callback: (error: Error) => void): void ;


    static getSupportedLockdownProfiles(): Object;


    static getCurrentLockdownProfile(): String;


    static getLockdownProfileInformation(profileID: String): DeviceLockdownProfileInformation;


  }

  export class DeviceLockdownProfileInformation {
    name: String;
    constructor();

  }

