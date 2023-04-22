  export class DeviceLockdownContract {
    constructor();
  }

  export class DeviceLockdownProfileInformation {
    name: string;
    constructor();

  }

  export class DeviceLockdownProfile {
    constructor();

    static applyLockdownProfileAsync(profileID: string, callback: (error: Error) => void): void ;


    static getSupportedLockdownProfiles(): Object;


    static getCurrentLockdownProfile(): string;


    static getLockdownProfileInformation(profileID: string): DeviceLockdownProfileInformation;


  }

