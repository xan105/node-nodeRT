  export class HdmiDisplayHdr2086Metadata {
    redPrimaryX: Number;
    redPrimaryY: Number;
    greenPrimaryX: Number;
    greenPrimaryY: Number;
    bluePrimaryX: Number;
    bluePrimaryY: Number;
    whitePointX: Number;
    whitePointY: Number;
    maxMasteringLuminance: Number;
    minMasteringLuminance: Number;
    maxContentLightLevel: Number;
    maxFrameAverageLightLevel: Number;
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
    bitsPerPixel: Number;
    colorSpace: HdmiDisplayColorSpace;
    is2086MetadataSupported: Boolean;
    isSdrLuminanceSupported: Boolean;
    isSmpte2084Supported: Boolean;
    pixelEncoding: HdmiDisplayPixelEncoding;
    refreshRate: Number;
    resolutionHeightInRawPixels: Number;
    resolutionWidthInRawPixels: Number;
    stereoEnabled: Boolean;
    constructor();

    isEqual(mode: HdmiDisplayMode): Boolean;

  }

  export class HdmiDisplayInformation {
    constructor();

    static getForCurrentView(): HdmiDisplayInformation;


    setDefaultDisplayModeAsync(callback: (error: Error) => void): void ;

    requestSetCurrentDisplayModeAsync(mode: HdmiDisplayMode, callback: (error: Error, result: Boolean) => void): void ;
    requestSetCurrentDisplayModeAsync(mode: HdmiDisplayMode, hdrOption: HdmiDisplayHdrOption, callback: (error: Error, result: Boolean) => void): void ;
    requestSetCurrentDisplayModeAsync(mode: HdmiDisplayMode, hdrOption: HdmiDisplayHdrOption, hdrMetadata: HdmiDisplayHdr2086Metadata, callback: (error: Error, result: Boolean) => void): void ;

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

