  export class ProfileHardwareTokenContract {
    constructor();
  }

  export class ProfileRetailInfoContract {
    constructor();
  }

  export class ProfileSharedModeContract {
    constructor();
  }

  export enum PlatformDataCollectionLevel {
    security,
    basic,
    enhanced,
    full,
  }

  export enum SystemIdentificationSource {
    none,
    tpm,
    uefi,
    registry,
  }

  export enum SystemOutOfBoxExperienceState {
    notStarted,
    inProgress,
    completed,
  }

  export enum UnsupportedAppRequirementReasons {
    unknown,
    deniedBySystem,
  }

  export class AnalyticsInfo {
    static deviceForm: String;
    static versionInfo: AnalyticsVersionInfo;
    constructor();

    static getSystemPropertiesAsync(attributeNames: Object, callback: (error: Error, result: Object) => void): void ;


  }

  export class AnalyticsVersionInfo {
    deviceFamily: String;
    deviceFamilyVersion: String;
    productName: String;
    constructor();

  }

  export class AppApplicability {
    constructor();

    static getUnsupportedAppRequirements(capabilities: Object): Object;


  }

  export class EducationSettings {
    static isEducationEnvironment: Boolean;
    constructor();

  }

  export class HardwareIdentification {
    constructor();

    static getPackageSpecificToken(nonce: Object): HardwareToken;


  }

  export class HardwareToken {
    certificate: Object;
    id: Object;
    signature: Object;
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

  export class RetailInfo {
    static isDemoModeEnabled: Boolean;
    static properties: Object;
    constructor();

  }

  export class SharedModeSettings {
    static isEnabled: Boolean;
    static shouldAvoidLocalStorage: Boolean;
    constructor();

  }

  export class SmartAppControlPolicy {
    static isEnabled: Boolean;
    constructor();

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SystemIdentification {
    constructor();

    static getSystemIdForPublisher(): SystemIdentificationInfo;


    static getSystemIdForUser(user: Object): SystemIdentificationInfo;


  }

  export class SystemIdentificationInfo {
    id: Object;
    source: SystemIdentificationSource;
    constructor();

  }

  export class SystemSetupInfo {
    static outOfBoxExperienceState: SystemOutOfBoxExperienceState;
    constructor();

    addListener(type: "OutOfBoxExperienceStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OutOfBoxExperienceStateChanged", listener: (ev: Event) => void): void ;
    on(type: "OutOfBoxExperienceStateChanged", listener: (ev: Event) => void): void ;
    off(type: "OutOfBoxExperienceStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UnsupportedAppRequirement {
    reasons: UnsupportedAppRequirementReasons;
    requirement: String;
    constructor();

  }

  export class WindowsIntegrityPolicy {
    static canDisable: Boolean;
    static isDisableSupported: Boolean;
    static isEnabled: Boolean;
    static isEnabledForTrial: Boolean;
    constructor();

    addListener(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    on(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    off(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export const PlatformDataCollectionLevel: any;
export const SystemIdentificationSource: any;
export const SystemOutOfBoxExperienceState: any;
export const UnsupportedAppRequirementReasons: any;
export const AnalyticsInfo: any;
export const AnalyticsVersionInfo: any;
export const AppApplicability: any;
export const EducationSettings: any;
export const HardwareIdentification: any;
export const HardwareToken: any;
export const KnownRetailInfoProperties: any;
export const PlatformDiagnosticsAndUsageDataSettings: any;
export const RetailInfo: any;
export const SharedModeSettings: any;
export const SmartAppControlPolicy: any;
export const SystemIdentification: any;
export const SystemIdentificationInfo: any;
export const SystemSetupInfo: any;
export const UnsupportedAppRequirement: any;
export const WindowsIntegrityPolicy: any;
export * as systemmanufacturers from "./system.profile.systemmanufacturers.js";
