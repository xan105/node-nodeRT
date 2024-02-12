  export enum AppCapabilityAccessStatus {
    deniedBySystem,
    notDeclaredByApp,
    deniedByUser,
    userPromptRequired,
    allowed,
  }

  export class AppCapability {
    capabilityName: String;
    user: Object;
    displayMessage: String;
    constructor();

    static requestAccessForCapabilitiesAsync(capabilityNames: Object, callback: (error: Error, result: Object) => void): void ;


    static requestAccessForCapabilitiesForUserAsync(user: Object, capabilityNames: Object, callback: (error: Error, result: Object) => void): void ;


    static create(capabilityName: String): AppCapability;


    static createWithProcessIdForUser(user: Object, capabilityName: String, pid: Number): AppCapability;


    requestAccessAsync(callback: (error: Error, result: AppCapabilityAccessStatus) => void): void ;

    checkAccess(): AppCapabilityAccessStatus;

    addListener(type: "AccessChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AccessChanged", listener: (ev: Event) => void): void ;
    on(type: "AccessChanged", listener: (ev: Event) => void): void ;
    off(type: "AccessChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppCapabilityAccessChangedEventArgs {
    constructor();

  }

