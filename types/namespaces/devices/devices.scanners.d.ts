  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class ScannerDeviceContract {
    constructor();
  }

  export class ImageScannerResolution {
    dpiX: number;
    dpiY: number;
    constructor();
  }

  export enum ImageScannerFormat {
    jpeg,
    png,
    deviceIndependentBitmap,
    tiff,
    xps,
    openXps,
    pdf,
  }

  export enum ImageScannerAutoCroppingMode {
    disabled,
    singleRegion,
    multipleRegion,
  }

  export enum ImageScannerColorMode {
    color,
    grayscale,
    monochrome,
    autoColor,
  }

  export enum ImageScannerScanSource {
    default,
    flatbed,
    feeder,
    autoConfigured,
  }

  export class IImageScannerFormatConfiguration {
    defaultFormat: ImageScannerFormat;
    format: ImageScannerFormat;
    constructor();

    isFormatSupported(value: ImageScannerFormat): boolean;

  }

  export class ImageScannerAutoConfiguration {
    format: ImageScannerFormat;
    defaultFormat: ImageScannerFormat;
    constructor();

    isFormatSupported(value: ImageScannerFormat): boolean;

  }

  export class IImageScannerSourceConfiguration {
    actualResolution: ImageScannerResolution;
    autoCroppingMode: ImageScannerAutoCroppingMode;
    brightness: number;
    brightnessStep: number;
    colorMode: ImageScannerColorMode;
    contrast: number;
    contrastStep: number;
    defaultBrightness: number;
    defaultColorMode: ImageScannerColorMode;
    defaultContrast: number;
    desiredResolution: ImageScannerResolution;
    maxBrightness: number;
    maxContrast: number;
    maxResolution: ImageScannerResolution;
    maxScanArea: Object;
    minBrightness: number;
    minContrast: number;
    minResolution: ImageScannerResolution;
    minScanArea: Object;
    opticalResolution: ImageScannerResolution;
    selectedScanRegion: Object;
    constructor();

    isAutoCroppingModeSupported(value: ImageScannerAutoCroppingMode): boolean;

    isColorModeSupported(value: ImageScannerColorMode): boolean;

  }

  export class ImageScannerFlatbedConfiguration {
    format: ImageScannerFormat;
    defaultFormat: ImageScannerFormat;
    selectedScanRegion: Object;
    desiredResolution: ImageScannerResolution;
    contrast: number;
    brightness: number;
    autoCroppingMode: ImageScannerAutoCroppingMode;
    colorMode: ImageScannerColorMode;
    contrastStep: number;
    defaultBrightness: number;
    defaultColorMode: ImageScannerColorMode;
    defaultContrast: number;
    actualResolution: ImageScannerResolution;
    maxBrightness: number;
    maxContrast: number;
    maxResolution: ImageScannerResolution;
    maxScanArea: Object;
    minBrightness: number;
    brightnessStep: number;
    minContrast: number;
    minResolution: ImageScannerResolution;
    opticalResolution: ImageScannerResolution;
    minScanArea: Object;
    constructor();

    isFormatSupported(value: ImageScannerFormat): boolean;

    isAutoCroppingModeSupported(value: ImageScannerAutoCroppingMode): boolean;

    isColorModeSupported(value: ImageScannerColorMode): boolean;

  }

  export class ImageScannerFeederConfiguration {
    scanAhead: boolean;
    autoDetectPageSize: boolean;
    duplex: boolean;
    maxNumberOfPages: number;
    pageOrientation: number;
    pageSize: number;
    pageSizeDimensions: Object;
    canScanDuplex: boolean;
    canScanAhead: boolean;
    canAutoDetectPageSize: boolean;
    format: ImageScannerFormat;
    defaultFormat: ImageScannerFormat;
    desiredResolution: ImageScannerResolution;
    contrast: number;
    colorMode: ImageScannerColorMode;
    autoCroppingMode: ImageScannerAutoCroppingMode;
    brightness: number;
    selectedScanRegion: Object;
    minBrightness: number;
    minContrast: number;
    minResolution: ImageScannerResolution;
    minScanArea: Object;
    opticalResolution: ImageScannerResolution;
    maxScanArea: Object;
    maxResolution: ImageScannerResolution;
    maxContrast: number;
    maxBrightness: number;
    defaultContrast: number;
    defaultColorMode: ImageScannerColorMode;
    defaultBrightness: number;
    contrastStep: number;
    brightnessStep: number;
    actualResolution: ImageScannerResolution;
    constructor();

    isFormatSupported(value: ImageScannerFormat): boolean;

    isAutoCroppingModeSupported(value: ImageScannerAutoCroppingMode): boolean;

    isColorModeSupported(value: ImageScannerColorMode): boolean;

    isPageSizeSupported(pageSize: number, pageOrientation: number): boolean;

  }

  export class ImageScannerScanResult {
    scannedFiles: Object;
    constructor();

  }

  export class ImageScannerPreviewResult {
    format: ImageScannerFormat;
    succeeded: boolean;
    constructor();

  }

  export class ImageScanner {
    autoConfiguration: ImageScannerAutoConfiguration;
    defaultScanSource: ImageScannerScanSource;
    deviceId: string;
    feederConfiguration: ImageScannerFeederConfiguration;
    flatbedConfiguration: ImageScannerFlatbedConfiguration;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: ImageScanner) => void): void ;


    static getDeviceSelector(): string;


    scanPreviewToStreamAsync(scanSource: ImageScannerScanSource, targetStream: Object, callback: (error: Error, result: ImageScannerPreviewResult) => void): void ;

    scanFilesToFolderAsync(scanSource: ImageScannerScanSource, storageFolder: Object, callback: (error: Error, result: ImageScannerScanResult) => void): void ;

    isScanSourceSupported(value: ImageScannerScanSource): boolean;

    isPreviewSupported(scanSource: ImageScannerScanSource): boolean;

  }

