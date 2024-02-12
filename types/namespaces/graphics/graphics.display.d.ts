  export class Point {
    constructor();
  }

  export class NitRange {
    minNits: Number;
    maxNits: Number;
    stepSizeNits: Number;
    constructor();
  }

  export enum AdvancedColorKind {
    standardDynamicRange,
    wideColorGamut,
    highDynamicRange,
  }

  export enum HdrMetadataFormat {
    hdr10,
    hdr10Plus,
  }

  export enum DisplayOrientations {
    none,
    landscape,
    portrait,
    landscapeFlipped,
    portraitFlipped,
  }

  export enum ResolutionScale {
    invalid,
    scale100Percent,
    scale120Percent,
    scale125Percent,
    scale140Percent,
    scale150Percent,
    scale160Percent,
    scale175Percent,
    scale180Percent,
    scale200Percent,
    scale225Percent,
    scale250Percent,
    scale300Percent,
    scale350Percent,
    scale400Percent,
    scale450Percent,
    scale500Percent,
  }

  export enum DisplayBrightnessScenario {
    defaultBrightness,
    idleBrightness,
    barcodeReadingBrightness,
    fullBrightness,
  }

  export enum DisplayBrightnessOverrideOptions {
    none,
    useDimmedPolicyWhenBatteryIsLow,
  }

  export enum DisplayColorOverrideScenario {
    accurate,
  }

  export enum DisplayBrightnessOverrideScenario {
    idleBrightness,
    barcodeReadingBrightness,
    fullBrightness,
  }

  export class DisplayInformation {
    static autoRotationPreferences: DisplayOrientations;
    currentOrientation: DisplayOrientations;
    logicalDpi: Number;
    nativeOrientation: DisplayOrientations;
    rawDpiX: Number;
    rawDpiY: Number;
    resolutionScale: ResolutionScale;
    stereoEnabled: Boolean;
    rawPixelsPerViewPixel: Number;
    diagonalSizeInInches: Number;
    screenHeightInRawPixels: Number;
    screenWidthInRawPixels: Number;
    constructor();

    static getForCurrentView(): DisplayInformation;


    getColorProfileAsync(callback: (error: Error, result: Object) => void): void ;

    getAdvancedColorInfo(): AdvancedColorInfo;

    addListener(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    on(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    off(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DpiChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DpiChanged", listener: (ev: Event) => void): void ;
    on(type: "DpiChanged", listener: (ev: Event) => void): void ;
    off(type: "DpiChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    on(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    off(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AdvancedColorInfoChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AdvancedColorInfoChanged", listener: (ev: Event) => void): void ;
    on(type: "AdvancedColorInfoChanged", listener: (ev: Event) => void): void ;
    off(type: "AdvancedColorInfoChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    removeListener(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    on(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    off(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AdvancedColorInfo {
    bluePrimary: Object;
    currentAdvancedColorKind: AdvancedColorKind;
    greenPrimary: Object;
    maxAverageFullFrameLuminanceInNits: Number;
    maxLuminanceInNits: Number;
    minLuminanceInNits: Number;
    redPrimary: Object;
    sdrWhiteLevelInNits: Number;
    whitePoint: Object;
    constructor();

    isHdrMetadataFormatCurrentlySupported(format: HdrMetadataFormat): Boolean;

    isAdvancedColorKindAvailable(kind: AdvancedColorKind): Boolean;

  }

  export class DisplayProperties {
    static autoRotationPreferences: DisplayOrientations;
    static currentOrientation: DisplayOrientations;
    static logicalDpi: Number;
    static nativeOrientation: DisplayOrientations;
    static resolutionScale: ResolutionScale;
    static stereoEnabled: Boolean;
    constructor();

    static getColorProfileAsync(callback: (error: Error, result: Object) => void): void ;


    addListener(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    on(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    off(type: "ColorProfileChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    removeListener(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    on(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    off(type: "DisplayContentsInvalidated", listener: (ev: Event) => void): void ;
    
    addListener(type: "LogicalDpiChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LogicalDpiChanged", listener: (ev: Event) => void): void ;
    on(type: "LogicalDpiChanged", listener: (ev: Event) => void): void ;
    off(type: "LogicalDpiChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    on(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    off(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "StereoEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BrightnessOverride {
    brightnessLevel: Number;
    isOverrideActive: Boolean;
    isSupported: Boolean;
    constructor();

    static saveForSystemAsync(value: BrightnessOverride, callback: (error: Error, result: Boolean) => void): void ;


    static getDefaultForSystem(): BrightnessOverride;


    static getForCurrentView(): BrightnessOverride;


    setBrightnessLevel(brightnessLevel: Number, options: DisplayBrightnessOverrideOptions): void;

    setBrightnessScenario(scenario: DisplayBrightnessScenario, options: DisplayBrightnessOverrideOptions): void;

    getLevelForScenario(scenario: DisplayBrightnessScenario): Number;

    startOverride(): void;

    stopOverride(): void;

    addListener(type: "BrightnessLevelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BrightnessLevelChanged", listener: (ev: Event) => void): void ;
    on(type: "BrightnessLevelChanged", listener: (ev: Event) => void): void ;
    off(type: "BrightnessLevelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    on(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    off(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    on(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    off(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BrightnessOverrideSettings {
    desiredLevel: Number;
    desiredNits: Number;
    constructor();

    static createFromLevel(level: Number): BrightnessOverrideSettings;


    static createFromNits(nits: Number): BrightnessOverrideSettings;


    static createFromDisplayBrightnessOverrideScenario(overrideScenario: DisplayBrightnessOverrideScenario): BrightnessOverrideSettings;


  }

  export class ColorOverrideSettings {
    desiredDisplayColorOverrideScenario: DisplayColorOverrideScenario;
    constructor();

    static createFromDisplayColorOverrideScenario(overrideScenario: DisplayColorOverrideScenario): ColorOverrideSettings;


  }

  export class DisplayEnhancementOverrideCapabilities {
    isBrightnessControlSupported: Boolean;
    isBrightnessNitsControlSupported: Boolean;
    constructor();

    getSupportedNitRanges(): Object;

  }

  export class DisplayEnhancementOverrideCapabilitiesChangedEventArgs {
    capabilities: DisplayEnhancementOverrideCapabilities;
    constructor();

  }

  export class DisplayEnhancementOverride {
    colorOverrideSettings: ColorOverrideSettings;
    brightnessOverrideSettings: BrightnessOverrideSettings;
    canOverride: Boolean;
    isOverrideActive: Boolean;
    constructor();

    static getForCurrentView(): DisplayEnhancementOverride;


    getCurrentDisplayEnhancementOverrideCapabilities(): DisplayEnhancementOverrideCapabilities;

    requestOverride(): void;

    stopOverride(): void;

    addListener(type: "CanOverrideChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CanOverrideChanged", listener: (ev: Event) => void): void ;
    on(type: "CanOverrideChanged", listener: (ev: Event) => void): void ;
    off(type: "CanOverrideChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DisplayEnhancementOverrideCapabilitiesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DisplayEnhancementOverrideCapabilitiesChanged", listener: (ev: Event) => void): void ;
    on(type: "DisplayEnhancementOverrideCapabilitiesChanged", listener: (ev: Event) => void): void ;
    off(type: "DisplayEnhancementOverrideCapabilitiesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    on(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    off(type: "IsOverrideActiveChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export const AdvancedColorKind: any;
export const HdrMetadataFormat: any;
export const DisplayOrientations: any;
export const ResolutionScale: any;
export const DisplayBrightnessScenario: any;
export const DisplayBrightnessOverrideOptions: any;
export const DisplayColorOverrideScenario: any;
export const DisplayBrightnessOverrideScenario: any;
export const DisplayInformation: any;
export const AdvancedColorInfo: any;
export const DisplayProperties: any;
export const BrightnessOverride: any;
export const BrightnessOverrideSettings: any;
export const ColorOverrideSettings: any;
export const DisplayEnhancementOverrideCapabilities: any;
export const DisplayEnhancementOverrideCapabilitiesChangedEventArgs: any;
export const DisplayEnhancementOverride: any;
export * as core from "./graphics.display.core.js";
