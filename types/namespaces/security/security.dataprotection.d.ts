  export enum UserDataAvailability {
    always,
    afterFirstUnlock,
    whileUnlocked,
  }

  export enum UserDataBufferUnprotectStatus {
    succeeded,
    unavailable,
  }

  export enum UserDataStorageItemProtectionStatus {
    succeeded,
    notProtectable,
    dataUnavailable,
  }

  export class UserDataAvailabilityStateChangedEventArgs {
    constructor();

    getDeferral(): Object;

  }

  export class UserDataBufferUnprotectResult {
    status: UserDataBufferUnprotectStatus;
    unprotectedBuffer: Object;
    constructor();

  }

  export class UserDataProtectionManager {
    constructor();

    static tryGetDefault(): UserDataProtectionManager;


    static tryGetForUser(user: Object): UserDataProtectionManager;


    protectStorageItemAsync(storageItem: Object, availability: UserDataAvailability, callback: (error: Error, result: UserDataStorageItemProtectionStatus) => void): void ;

    getStorageItemProtectionInfoAsync(storageItem: Object, callback: (error: Error, result: UserDataStorageItemProtectionInfo) => void): void ;

    protectBufferAsync(unprotectedBuffer: Object, availability: UserDataAvailability, callback: (error: Error, result: Object) => void): void ;

    unprotectBufferAsync(protectedBuffer: Object, callback: (error: Error, result: UserDataBufferUnprotectResult) => void): void ;

    isContinuedDataAvailabilityExpected(availability: UserDataAvailability): Boolean;

    addListener(type: "DataAvailabilityStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataAvailabilityStateChanged", listener: (ev: Event) => void): void ;
    on(type: "DataAvailabilityStateChanged", listener: (ev: Event) => void): void ;
    off(type: "DataAvailabilityStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UserDataStorageItemProtectionInfo {
    availability: UserDataAvailability;
    constructor();

  }

