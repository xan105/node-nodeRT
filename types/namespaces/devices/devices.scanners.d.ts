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
    dpiX: Number;
    dpiY: Number;
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

    isFormatSupported(value: ImageScannerFormat): Boolean;

  }

  export class ImageScannerAutoConfiguration {
    format: ImageScannerFormat;
    defaultFormat: ImageScannerFormat;
    constructor();

    isFormatSupported(value: ImageScannerFormat): Boolean;

  }

  export class IImageScannerSourceConfiguration {
    actualResolution: ImageScannerResolution;
    autoCroppingMode: ImageScannerAutoCroppingMode;
    brightness: Number;
    brightnessStep: Number;
    colorMode: ImageScannerColorMode;
    contrast: Number;
    contrastStep: Number;
    defaultBrightness: Number;
    defaultColorMode: ImageScannerColorMode;
    defaultContrast: Number;
    desiredResolution: ImageScannerResolution;
    maxBrightness: Number;
    maxContrast: Number;
    maxResolution: ImageScannerResolution;
    maxScanArea: Object;
    minBrightness: Number;
    minContrast: Number;
    minResolution: ImageScannerResolution;
    minScanArea: Object;
    opticalResolution: ImageScannerResolution;
    selectedScanRegion: Object;
    constructor();

    isAutoCroppingModeSupported(value: ImageScannerAutoCroppingMode): Boolean;

    isColorModeSupported(value: ImageScannerColorMode): Boolean;

  }

  export class ImageScannerFlatbedConfiguration {
    format: ImageScannerFormat;
    defaultFormat: ImageScannerFormat;
    selectedScanRegion: Object;
    desiredResolution: ImageScannerResolution;
    contrast: Number;
    brightness: Number;
    autoCroppingMode: ImageScannerAutoCroppingMode;
    colorMode: ImageScannerColorMode;
    contrastStep: Number;
    defaultBrightness: Number;
    defaultColorMode: ImageScannerColorMode;
    defaultContrast: Number;
    actualResolution: ImageScannerResolution;
    maxBrightness: Number;
    maxContrast: Number;
    maxResolution: ImageScannerResolution;
    maxScanArea: Object;
    minBrightness: Number;
    brightnessStep: Number;
    minContrast: Number;
    minResolution: ImageScannerResolution;
    opticalResolution: ImageScannerResolution;
    minScanArea: Object;
    constructor();

    isFormatSupported(value: ImageScannerFormat): Boolean;

    isAutoCroppingModeSupported(value: ImageScannerAutoCroppingMode): Boolean;

    isColorModeSupported(value: ImageScannerColorMode): Boolean;

  }

  export class ImageScannerFeederConfiguration {
    scanAhead: Boolean;
    autoDetectPageSize: Boolean;
    duplex: Boolean;
    maxNumberOfPages: Number;
    pageOrientation: Number;
    pageSize: Number;
    pageSizeDimensions: Object;
    canScanDuplex: Boolean;
    canScanAhead: Boolean;
    canAutoDetectPageSize: Boolean;
    format: ImageScannerFormat;
    defaultFormat: ImageScannerFormat;
    desiredResolution: ImageScannerResolution;
    contrast: Number;
    colorMode: ImageScannerColorMode;
    autoCroppingMode: ImageScannerAutoCroppingMode;
    brightness: Number;
    selectedScanRegion: Object;
    minBrightness: Number;
    minContrast: Number;
    minResolution: ImageScannerResolution;
    minScanArea: Object;
    opticalResolution: ImageScannerResolution;
    maxScanArea: Object;
    maxResolution: ImageScannerResolution;
    maxContrast: Number;
    maxBrightness: Number;
    defaultContrast: Number;
    defaultColorMode: ImageScannerColorMode;
    defaultBrightness: Number;
    contrastStep: Number;
    brightnessStep: Number;
    actualResolution: ImageScannerResolution;
    constructor();

    isFormatSupported(value: ImageScannerFormat): Boolean;

    isAutoCroppingModeSupported(value: ImageScannerAutoCroppingMode): Boolean;

    isColorModeSupported(value: ImageScannerColorMode): Boolean;

    isPageSizeSupported(pageSize: Number, pageOrientation: Number): Boolean;

  }

  export class ImageScannerScanResult {
    scannedFiles: Object;
    constructor();

  }

  export class ImageScannerPreviewResult {
    format: ImageScannerFormat;
    succeeded: Boolean;
    constructor();

  }

  export class ImageScanner {
    autoConfiguration: ImageScannerAutoConfiguration;
    defaultScanSource: ImageScannerScanSource;
    deviceId: String;
    feederConfiguration: ImageScannerFeederConfiguration;
    flatbedConfiguration: ImageScannerFlatbedConfiguration;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: ImageScanner) => void): void ;


    static getDeviceSelector(): String;


    scanPreviewToStreamAsync(scanSource: ImageScannerScanSource, targetStream: Object, callback: (error: Error, result: ImageScannerPreviewResult) => void): void ;

    scanFilesToFolderAsync(scanSource: ImageScannerScanSource, storageFolder: Object, callback: (error: Error, result: ImageScannerScanResult) => void): void ;

    isScanSourceSupported(value: ImageScannerScanSource): Boolean;

    isPreviewSupported(scanSource: ImageScannerScanSource): Boolean;

  }

