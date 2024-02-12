  export class BitmapBounds {
    x: Number;
    y: Number;
    width: Number;
    height: Number;
    constructor();
  }

  export class BitmapPlaneDescription {
    startIndex: Number;
    width: Number;
    height: Number;
    stride: Number;
    constructor();
  }

  export class BitmapSize {
    width: Number;
    height: Number;
    constructor();
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

  export enum BitmapFlip {
    none,
    horizontal,
    vertical,
  }

  export enum BitmapInterpolationMode {
    nearestNeighbor,
    linear,
    cubic,
    fant,
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

  export enum JpegSubsamplingMode {
    default,
    y4Cb2Cr0,
    y4Cb2Cr2,
    y4Cb4Cr4,
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

  export class BitmapBuffer {
    constructor();

    getPlaneCount(): Number;

    getPlaneDescription(index: Number): BitmapPlaneDescription;

    createReference(): Object;

    close(): void;
  }

  export class BitmapCodecInformation {
    codecId: String;
    fileExtensions: Object;
    friendlyName: String;
    mimeTypes: Object;
    constructor();

  }

  export class BitmapDecoder {
    static bmpDecoderId: String;
    static gifDecoderId: String;
    static icoDecoderId: String;
    static jpegDecoderId: String;
    static jpegXRDecoderId: String;
    static pngDecoderId: String;
    static tiffDecoderId: String;
    static heifDecoderId: String;
    static webpDecoderId: String;
    bitmapContainerProperties: BitmapPropertiesView;
    decoderInformation: BitmapCodecInformation;
    frameCount: Number;
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    bitmapProperties: BitmapPropertiesView;
    dpiX: Number;
    dpiY: Number;
    orientedPixelHeight: Number;
    orientedPixelWidth: Number;
    pixelHeight: Number;
    pixelWidth: Number;
    constructor();

    static createAsync(stream: Object, callback: (error: Error, result: BitmapDecoder) => void): void ;
    static createAsync(decoderId: String, stream: Object, callback: (error: Error, result: BitmapDecoder) => void): void ;


    static getDecoderInformationEnumerator(): Object;


    getPreviewAsync(callback: (error: Error, result: ImageStream) => void): void ;

    getFrameAsync(frameIndex: Number, callback: (error: Error, result: BitmapFrame) => void): void ;

    getThumbnailAsync(callback: (error: Error, result: ImageStream) => void): void ;

    getPixelDataAsync(callback: (error: Error, result: PixelDataProvider) => void): void ;
    getPixelDataAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: PixelDataProvider) => void): void ;

    getSoftwareBitmapAsync(callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;

  }

  export class BitmapEncoder {
    static bmpEncoderId: String;
    static gifEncoderId: String;
    static jpegEncoderId: String;
    static jpegXREncoderId: String;
    static pngEncoderId: String;
    static tiffEncoderId: String;
    static heifEncoderId: String;
    isThumbnailGenerated: Boolean;
    generatedThumbnailWidth: Number;
    generatedThumbnailHeight: Number;
    bitmapContainerProperties: BitmapProperties;
    bitmapProperties: BitmapProperties;
    bitmapTransform: BitmapTransform;
    encoderInformation: BitmapCodecInformation;
    constructor();

    static createAsync(encoderId: String, stream: Object, callback: (error: Error, result: BitmapEncoder) => void): void ;
    static createAsync(encoderId: String, stream: Object, encodingOptions: Object, callback: (error: Error, result: BitmapEncoder) => void): void ;


    static createForTranscodingAsync(stream: Object, bitmapDecoder: BitmapDecoder, callback: (error: Error, result: BitmapEncoder) => void): void ;


    static createForInPlacePropertyEncodingAsync(bitmapDecoder: BitmapDecoder, callback: (error: Error, result: BitmapEncoder) => void): void ;


    static getEncoderInformationEnumerator(): Object;


    goToNextFrameAsync(callback: (error: Error) => void): void ;
    goToNextFrameAsync(encodingOptions: Object, callback: (error: Error) => void): void ;

    flushAsync(callback: (error: Error) => void): void ;

    setPixelData(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, width: Number, height: Number, dpiX: Number, dpiY: Number, pixels: Array<Number>): void;

    setSoftwareBitmap(bitmap: SoftwareBitmap): void;

  }

  export class BitmapFrame {
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    bitmapProperties: BitmapPropertiesView;
    dpiX: Number;
    dpiY: Number;
    orientedPixelHeight: Number;
    orientedPixelWidth: Number;
    pixelHeight: Number;
    pixelWidth: Number;
    constructor();

    getThumbnailAsync(callback: (error: Error, result: ImageStream) => void): void ;

    getPixelDataAsync(callback: (error: Error, result: PixelDataProvider) => void): void ;
    getPixelDataAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: PixelDataProvider) => void): void ;

    getSoftwareBitmapAsync(callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;
    getSoftwareBitmapAsync(pixelFormat: BitmapPixelFormat, alphaMode: BitmapAlphaMode, transform: BitmapTransform, exifOrientationMode: ExifOrientationMode, colorManagementMode: ColorManagementMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;

  }

  export class BitmapProperties {
    constructor();

    setPropertiesAsync(propertiesToSet: Object, callback: (error: Error) => void): void ;

    getPropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: BitmapPropertySet) => void): void ;

  }

  export class BitmapPropertiesView {
    constructor();

    getPropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: BitmapPropertySet) => void): void ;

  }

  export class BitmapPropertySet {
    constructor();

    lookup(key: String): BitmapTypedValue;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: BitmapTypedValue): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class BitmapTransform {
    scaledWidth: Number;
    scaledHeight: Number;
    rotation: BitmapRotation;
    interpolationMode: BitmapInterpolationMode;
    flip: BitmapFlip;
    bounds: BitmapBounds;
    constructor();

  }

  export class BitmapTypedValue {
    type: Number;
    value: Object;
    constructor();
    constructor(value: Object, type: Number);

  }

  export class IBitmapFrame {
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    bitmapProperties: BitmapPropertiesView;
    dpiX: Number;
    dpiY: Number;
    orientedPixelHeight: Number;
    orientedPixelWidth: Number;
    pixelHeight: Number;
    pixelWidth: Number;
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

  export class IBitmapPropertiesView {
    constructor();

    getPropertiesAsync(propertiesToRetrieve: Object, callback: (error: Error, result: BitmapPropertySet) => void): void ;

  }

  export class ImageStream {
    contentType: String;
    size: Number;
    canRead: Boolean;
    canWrite: Boolean;
    position: Number;
    constructor();

    readAsync(buffer: Object, count: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    getInputStreamAt(position: Number): Object;

    getOutputStreamAt(position: Number): Object;

    seek(position: Number): void;

    cloneStream(): Object;

    close(): void;
  }

  export class PixelDataProvider {
    constructor();

    detachPixelData(): Array<Number>;

  }

  export class SoftwareBitmap {
    dpiY: Number;
    dpiX: Number;
    bitmapAlphaMode: BitmapAlphaMode;
    bitmapPixelFormat: BitmapPixelFormat;
    isReadOnly: Boolean;
    pixelHeight: Number;
    pixelWidth: Number;
    constructor();
    constructor(format: BitmapPixelFormat, width: Number, height: Number);
    constructor(format: BitmapPixelFormat, width: Number, height: Number, alpha: BitmapAlphaMode);

    static createCopyFromSurfaceAsync(surface: Object, callback: (error: Error, result: SoftwareBitmap) => void): void ;
    static createCopyFromSurfaceAsync(surface: Object, alpha: BitmapAlphaMode, callback: (error: Error, result: SoftwareBitmap) => void): void ;


    static copy(source: SoftwareBitmap): SoftwareBitmap;


    static convert(source: SoftwareBitmap, format: BitmapPixelFormat): SoftwareBitmap;
    static convert(source: SoftwareBitmap, format: BitmapPixelFormat, alpha: BitmapAlphaMode): SoftwareBitmap;


    static createCopyFromBuffer(source: Object, format: BitmapPixelFormat, width: Number, height: Number): SoftwareBitmap;
    static createCopyFromBuffer(source: Object, format: BitmapPixelFormat, width: Number, height: Number, alpha: BitmapAlphaMode): SoftwareBitmap;


    lockBuffer(mode: BitmapBufferAccessMode): BitmapBuffer;

    copyTo(bitmap: SoftwareBitmap): void;

    copyFromBuffer(buffer: Object): void;

    copyToBuffer(buffer: Object): void;

    getReadOnlyView(): SoftwareBitmap;

    close(): void;
  }

