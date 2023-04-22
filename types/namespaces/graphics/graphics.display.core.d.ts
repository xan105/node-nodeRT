  export class HdmiDisplayHdr2086Metadata {
    redPrimaryX: number;
    redPrimaryY: number;
    greenPrimaryX: number;
    greenPrimaryY: number;
    bluePrimaryX: number;
    bluePrimaryY: number;
    whitePointX: number;
    whitePointY: number;
    maxMasteringLuminance: number;
    minMasteringLuminance: number;
    maxContentLightLevel: number;
    maxFrameAverageLightLevel: number;
    constructor();
  }

  export enum HdmiDisplayColorSpace {
    rgbLimited,
    rgbFull,
    bT2020,
    bT709,
  }

  export enum HdmiDisplayPixelEncoding {
    rgb444,
    ycc444,
    ycc422,
    ycc420,
  }

  export enum HdmiDisplayHdrOption {
    none,
    eotfSdr,
    eotf2084,
  }

  export class HdmiDisplayMode {
    bitsPerPixel: number;
    colorSpace: HdmiDisplayColorSpace;
    is2086MetadataSupported: boolean;
    isSdrLuminanceSupported: boolean;
    isSmpte2084Supported: boolean;
    pixelEncoding: HdmiDisplayPixelEncoding;
    refreshRate: number;
    resolutionHeightInRawPixels: number;
    resolutionWidthInRawPixels: number;
    stereoEnabled: boolean;
    constructor();

    isEqual(mode: HdmiDisplayMode): boolean;

  }

  export class HdmiDisplayInformation {
    constructor();

    static getForCurrentView(): HdmiDisplayInformation;


    setDefaultDisplayModeAsync(callback: (error: Error) => void): void ;

    requestSetCurrentDisplayModeAsync(mode: HdmiDisplayMode, callback: (error: Error, result: boolean) => void): void ;
    requestSetCurrentDisplayModeAsync(mode: HdmiDisplayMode, hdrOption: HdmiDisplayHdrOption, callback: (error: Error, result: boolean) => void): void ;
    requestSetCurrentDisplayModeAsync(mode: HdmiDisplayMode, hdrOption: HdmiDisplayHdrOption, hdrMetadata: HdmiDisplayHdr2086Metadata, callback: (error: Error, result: boolean) => void): void ;

    getSupportedDisplayModes(): Object;

    getCurrentDisplayMode(): HdmiDisplayMode;

    addListener(type: "DisplayModesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DisplayModesChanged", listener: (ev: Event) => void): void ;
    on(type: "DisplayModesChanged", listener: (ev: Event) => void): void ;
    off(type: "DisplayModesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

