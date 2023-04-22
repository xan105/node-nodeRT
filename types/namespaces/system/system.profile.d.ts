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
    deviceFamily: string;
    deviceFamilyVersion: string;
    constructor();

  }

  export class AnalyticsInfo {
    static deviceForm: string;
    static versionInfo: AnalyticsVersionInfo;
    constructor();

    static getSystemPropertiesAsync(attributeNames: Object, callback: (error: Error, result: Object) => void): void ;


  }

  export class EducationSettings {
    static isEducationEnvironment: boolean;
    constructor();

  }

  export class PlatformDiagnosticsAndUsageDataSettings {
    static collectionLevel: PlatformDataCollectionLevel;
    constructor();

    static canCollectDiagnostics(level: PlatformDataCollectionLevel): boolean;


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
    static isDemoModeEnabled: boolean;
    static properties: Object;
    constructor();

  }

  export class KnownRetailInfoProperties {
    static batteryLifeDescription: string;
    static displayDescription: string;
    static displayModelName: string;
    static formFactor: string;
    static frontCameraDescription: string;
    static graphicsDescription: string;
    static hasNfc: string;
    static hasOpticalDrive: string;
    static hasSdSlot: string;
    static isFeatured: string;
    static isOfficeInstalled: string;
    static manufacturerName: string;
    static memory: string;
    static modelName: string;
    static price: string;
    static processorDescription: string;
    static rearCameraDescription: string;
    static retailAccessCode: string;
    static screenSize: string;
    static storageDescription: string;
    static weight: string;
    static windowsEdition: string;
    constructor();

  }

  export class SharedModeSettings {
    static isEnabled: boolean;
    static shouldAvoidLocalStorage: boolean;
    constructor();

  }

export * as systemmanufacturers from "./system.profile.systemmanufacturers.js";