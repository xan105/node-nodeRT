  export class ProfileHardwareTokenContract {
    constructor();
  }

  export class ProfileRetailInfoContract {
    constructor();
  }

  export class ProfileSharedModeContract {
    constructor();
  }

  export enum SystemIdentificationSource {
    none,
    tpm,
    uefi,
    registry,
  }

  export enum PlatformDataCollectionLevel {
    security,
    basic,
    enhanced,
    full,
  }

  export class SystemIdentificationInfo {
    id: Object;
    source: SystemIdentificationSource;
    constructor();

  }

  export class SystemIdentification {
    constructor();

    static getSystemIdForPublisher(): SystemIdentificationInfo;


    static getSystemIdForUser(user: Object): SystemIdentificationInfo;


  }

  export class AnalyticsVersionInfo {
    deviceFamily: String;
    deviceFamilyVersion: String;
    constructor();

  }

  export class AnalyticsInfo {
    static deviceForm: String;
    static versionInfo: AnalyticsVersionInfo;
    constructor();

    static getSystemPropertiesAsync(attributeNames: Object, callback: (error: Error, result: Object) => void): void ;


  }

  export class EducationSettings {
    static isEducationEnvironment: Boolean;
    constructor();

  }

  export class PlatformDiagnosticsAndUsageDataSettings {
    static collectionLevel: PlatformDataCollectionLevel;
    constructor();

    static canCollectDiagnostics(level: PlatformDataCollectionLevel): Boolean;


    addListener(type: "CollectionLevelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CollectionLevelChanged", listener: (ev: Event) => void): void ;
    on(type: "CollectionLevelChanged", listener: (ev: Event) => void): void ;
    off(type: "CollectionLevelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HardwareToken {
    certificate: Object;
    id: Object;
    signature: Object;
    constructor();

  }

  export class HardwareIdentification {
    constructor();

    static getPackageSpecificToken(nonce: Object): HardwareToken;


  }

  export class RetailInfo {
    static isDemoModeEnabled: Boolean;
    static properties: Object;
    constructor();

  }

  export class KnownRetailInfoProperties {
    static batteryLifeDescription: String;
    static displayDescription: String;
    static displayModelName: String;
    static formFactor: String;
    static frontCameraDescription: String;
    static graphicsDescription: String;
    static hasNfc: String;
    static hasOpticalDrive: String;
    static hasSdSlot: String;
    static isFeatured: String;
    static isOfficeInstalled: String;
    static manufacturerName: String;
    static memory: String;
    static modelName: String;
    static price: String;
    static processorDescription: String;
    static rearCameraDescription: String;
    static retailAccessCode: String;
    static screenSize: String;
    static storageDescription: String;
    static weight: String;
    static windowsEdition: String;
    constructor();

  }

  export class SharedModeSettings {
    static isEnabled: Boolean;
    static shouldAvoidLocalStorage: Boolean;
    constructor();

  }

export * as systemmanufacturers from "./system.profile.systemmanufacturers.js";