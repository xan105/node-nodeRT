  export class BitmapSize {
    width: number;
    height: number;
    constructor();
  }

  export class BitmapBounds {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor();
  }

  export class BitmapPlaneDescription {
    startIndex: number;
    width: number;
    height: number;
    stride: number;
    constructor();
  }

  export enum BitmapInterpolationMode {
    nearestNeighbor,
    linear,
    cubic,
    fant,
  }

  export enum BitmapFlip {
    none,
    horizontal,
    vertical,
  }

  export enum BitmapRotation {
    none,
    clockwise90Degrees,
    clockwise180Degrees,
    clockwise270Degrees,
  }

  export enum ColorManagementMode {
    doNotColorManage,
    colorManageToSRgb,
  }

  export enum ExifOrientationMode {
    ignoreExifOrientation,
    respectExifOrientation,
  }

  export enum PngFilterMode {
    automatic,
    none,
    sub,
    up,
    average,
    paeth,
    adaptive,
  }

  export enum TiffCompressionMode {
    automatic,
    none,
    ccitt3,
    ccitt4,
    lzw,
    rle,
    zip,
    lzwhDifferencing,
  }

  export enum JpegSubsamplingMode {
    default,
    y4Cb2Cr0,
    y4Cb2Cr2,
    y4Cb4Cr4,
  }

  export enum BitmapPixelFormat {
    unknown,
    rgba16,
    rgba8,
    gray16,
    gray8,
    bgra8,
    nv12,
    p010,
    yuy2,
  }

  export enum BitmapAlphaMode {
    premultiplied,
    straight,
    ignore,
  }

  export enum BitmapBufferAccessMode {
    read,
    readWrite,
    write,
  }

  export class BitmapTransform {
    scaledWidth: number;
    scaledHeight: number;
    rotation: BitmapRotation;
    interpolationMode: BitmapInterpolationMode;
    flip: BitmapFlip;
    bounds: BitmapBounds;
    constructor();

  }

  export class BitmapTypedValue {
    type: number;
    value: Object;
    constructor();
    constructor(value: Object, type: number);

  }

  export class BitmapPropertySet {
    constructor();

    lookup(key: string): BitmapTypedValue;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: BitmapTypedValue): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

  }

  export class IBitmapPropertiesView {
    constructor();

    getPropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: BitmapPropertySet) => void): void ;

  }

  export class BitmapPropertiesView {
    constructor();

    getPropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: BitmapPropertySet) => void): void ;

  }

  export class BitmapProperties {
    constructor();

    setPropertiesAsync(propertiesToSet: Object, callback: (error: Error) => void): void ;

    getPropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: BitmapPropertySet) => void): void ;

  }

  export class PixelDataProvider {
    constructor();

    detachPixelData(): Array<number>;

  }

  export class ImageStream {
    contentType: string;
    size: number;
    canRead: boolean;
    canWrite: boolean;
    position: number;
    constructor();

    readAsync(buffer: Object, count: number, options: number, callback: (error: Error, result: Object) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    getInputStreamAt(position: number): Object;

    getOutputStreamAt(position: number): Object;

    seek(position: number): void;

    cloneStream(): Object;

    close(): void;
  }

  export class IBitmapFrame {
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    bitmapProperties: BitmapPropertiesView;
    dpiX: number;
    dpiY: number;
    orientedPixelHeight: number;
    orientedPixelWidth: number;
    pixelHeight: number;
    pixelWidth: number;
    constructor();

    getThumbnailAsync(callback: (error: Error, result: ImageStream) => void): void ;

    getPixelDataAsync(callback: (error: Error, result: PixelDataProvider) => void): void ;
    getPixelDataAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: PixelDataProvider) => void): void ;

  }

  export class IBitmapFrameWithSoftwareBitmap {
    constructor();

    getSoftwareBitmapAsync(callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;

  }

  export class BitmapFrame {
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    bitmapProperties: BitmapPropertiesView;
    dpiX: number;
    dpiY: number;
    orientedPixelHeight: number;
    orientedPixelWidth: number;
    pixelHeight: number;
    pixelWidth: number;
    constructor();

    getThumbnailAsync(callback: (error: Error, result: ImageStream) => void): void ;

    getPixelDataAsync(callback: (error: Error, result: PixelDataProvider) => void): void ;
    getPixelDataAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: PixelDataProvider) => void): void ;

    getSoftwareBitmapAsync(callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;

  }

  export class BitmapCodecInformation {
    codecId: string;
    fileExtensions: Object;
    friendlyName: string;
    mimeTypes: Object;
    constructor();

  }

  export class BitmapDecoder {
    static bmpDecoderId: string;
    static gifDecoderId: string;
    static icoDecoderId: string;
    static jpegDecoderId: string;
    static jpegXRDecoderId: string;
    static pngDecoderId: string;
    static tiffDecoderId: string;
    bitmapContainerProperties: BitmapPropertiesView;
    decoderInformation: BitmapCodecInformation;
    frameCount: number;
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    bitmapProperties: BitmapPropertiesView;
    dpiX: number;
    dpiY: number;
    orientedPixelHeight: number;
    orientedPixelWidth: number;
    pixelHeight: number;
    pixelWidth: number;
    constructor();

    static createAsync(stream: Object, callback: (error: Error, result: BitmapDecoder) => void): void ;
    static createAsync(decoderId: string, stream: Object, callback: (error: Error, result: BitmapDecoder) => void): void ;


    static getDecoderInformationEnumerator(): Object;


    getPreviewAsync(callback: (error: Error, result: ImageStream) => void): void ;

    getFrameAsync(frameIndex: number, callback: (error: Error, result: BitmapFrame) => void): void ;

    getThumbnailAsync(callback: (error: Error, result: ImageStream) => void): void ;

    getPixelDataAsync(callback: (error: Error, result: PixelDataProvider) => void): void ;
    getPixelDataAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: PixelDataProvider) => void): void ;

    getSoftwareBitmapAsync(callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;

  }

  export class BitmapEncoder {
    static bmpEncoderId: string;
    static gifEncoderId: string;
    static jpegEncoderId: string;
    static jpegXREncoderId: string;
    static pngEncoderId: string;
    static tiffEncoderId: string;
    isThumbnailGenerated: boolean;
    generatedThumbnailWidth: number;
    generatedThumbnailHeight: number;
    bitmapContainerProperties: BitmapProperties;
    bitmapProperties: BitmapProperties;
    bitmapTransform: BitmapTransform;
    encoderInformation: BitmapCodecInformation;
    constructor();

    static createAsync(encoderId: string, stream: Object, callback: (error: Error, result: BitmapEncoder) => void): void ;
    static createAsync(encoderId: string, stream: Object, encodingOptions: Object, callback: (error: Error, result: BitmapEncoder) => void): void ;


    static createForTranscodingAsync(stream: Object, bitmapDecoder: BitmapDecoder, callback: (error: Error, result: BitmapEncoder) => void): void ;


    static createForInPlacePropertyEncodingAsync(bitmapDecoder: BitmapDecoder, callback: (error: Error, result: BitmapEncoder) => void): void ;


    static getEncoderInformationEnumerator(): Object;


    goToNextFrameAsync(callback: (error: Error) => void): void ;
    goToNextFrameAsync(encodingOptions: Object, callback: (error: Error) => void): void ;

    flushAsync(callback: (error: Error) => void): void ;

    setPixelData(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, width: number, height: number, dpiX: number, dpiY: number, pixels: Array<number>): void;

    setSoftwareBitmap(bitmap: SoftwareBitmap): void;

  }

  export class BitmapBuffer {
    constructor();

    getPlaneCount(): number;

    getPlaneDescription(index: number): BitmapPlaneDescription;

    createReference(): Object;

    close(): void;
  }

  export class SoftwareBitmap {
    dpiY: number;
    dpiX: number;
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    isReadOnly: boolean;
    pixelHeight: number;
    pixelWidth: number;
    constructor();
    constructor(format: BitmapPixelFormat, width: number, height: number);
    constructor(format: BitmapPixelFormat, width: number, height: number, alpha: BitmapAlphaMode);

    static createCopyFromSurfaceAsync(surface: Object, callback: (error: Error, result: SoftwareBitmap) => void): void ;
    static createCopyFromSurfaceAsync(surface: Object, alpha: BitmapAlphaMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;


    static copy(source: SoftwareBitmap): SoftwareBitmap;


    static convert(source: SoftwareBitmap, format: BitmapPixelFormat): SoftwareBitmap;
    static convert(source: SoftwareBitmap, format: BitmapPixelFormat, alpha: BitmapAlphaMode): SoftwareBitmap;


    static createCopyFromBuffer(source: Object, format: BitmapPixelFormat, width: number, height: number): SoftwareBitmap;
    static createCopyFromBuffer(source: Object, format: BitmapPixelFormat, width: number, height: number, alpha: BitmapAlphaMode): SoftwareBitmap;


    lockBuffer(mode: BitmapBufferAccessMode): BitmapBuffer;

    copyTo(bitmap: SoftwareBitmap): void;

    copyFromBuffer(buffer: Object): void;

    copyToBuffer(buffer: Object): void;

    getReadOnlyView(): SoftwareBitmap;

    close(): void;
  }

