  export class Point {
    constructor();
  }

  export class NitRange {
    minNits: number;
    maxNits: number;
    stepSizeNits: number;
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
    logicalDpi: number;
    nativeOrientation: DisplayOrientations;
    rawDpiX: number;
    rawDpiY: number;
    resolutionScale: ResolutionScale;
    stereoEnabled: boolean;
    rawPixelsPerViewPixel: number;
    diagonalSizeInInches: number;
    screenHeightInRawPixels: number;
    screenWidthInRawPixels: number;
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
    maxAverageFullFrameLuminanceInNits: number;
    maxLuminanceInNits: number;
    minLuminanceInNits: number;
    redPrimary: Object;
    sdrWhiteLevelInNits: number;
    whitePoint: Object;
    constructor();

    isHdrMetadataFormatCurrentlySupported(format: HdrMetadataFormat): boolean;

    isAdvancedColorKindAvailable(kind: AdvancedColorKind): boolean;

  }

  export class DisplayProperties {
    static autoRotationPreferences: DisplayOrientations;
    static currentOrientation: DisplayOrientations;
    static logicalDpi: number;
    static nativeOrientation: DisplayOrientations;
    static resolutionScale: ResolutionScale;
    static stereoEnabled: boolean;
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
    brightnessLevel: number;
    isOverrideActive: boolean;
    isSupported: boolean;
    constructor();

    static saveForSystemAsync(value: BrightnessOverride, callback: (error: Error, result: boolean) => void): void ;


    static getDefaultForSystem(): BrightnessOverride;


    static getForCurrentView(): BrightnessOverride;


    setBrightnessLevel(brightnessLevel: number, options: DisplayBrightnessOverrideOptions): void;

    setBrightnessScenario(scenario: DisplayBrightnessScenario, options: DisplayBrightnessOverrideOptions): void;

    getLevelForScenario(scenario: DisplayBrightnessScenario): number;

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
    desiredLevel: number;
    desiredNits: number;
    constructor();

    static createFromLevel(level: number): BrightnessOverrideSettings;


    static createFromNits(nits: number): BrightnessOverrideSettings;


    static createFromDisplayBrightnessOverrideScenario(overrideScenario: DisplayBrightnessOverrideScenario): BrightnessOverrideSettings;


  }

  export class ColorOverrideSettings {
    desiredDisplayColorOverrideScenario: DisplayColorOverrideScenario;
    constructor();

    static createFromDisplayColorOverrideScenario(overrideScenario: DisplayColorOverrideScenario): ColorOverrideSettings;


  }

  export class DisplayEnhancementOverrideCapabilities {
    isBrightnessControlSupported: boolean;
    isBrightnessNitsControlSupported: boolean;
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
    canOverride: boolean;
    isOverrideActive: boolean;
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

export * as core from "./graphics.display.core.js";