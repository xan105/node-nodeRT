  export enum BitmapCreateOptions {
    none,
    ignoreImageCache,
  }

  export enum DecodePixelType {
    physical,
    logical,
  }

  export enum SvgImageSourceLoadStatus {
    success,
    networkError,
    invalidFormat,
    other,
  }

  export class DownloadProgressEventArgs {
    progress: Number;
    constructor();

  }

  export class BitmapSource {
    static pixelHeightProperty: Object;
    static pixelWidthProperty: Object;
    pixelHeight: Number;
    pixelWidth: Number;
    dispatcher: Object;
    constructor();

    setSourceAsync(streamSource: Object, callback: (error: Error) => void): void ;

    setSource(streamSource: Object): void;

  }

  export class RenderTargetBitmap {
    static pixelHeightProperty: Object;
    static pixelWidthProperty: Object;
    pixelHeight: Number;
    pixelWidth: Number;
    dispatcher: Object;
    constructor();

    renderAsync(element: Object, callback: (error: Error) => void): void ;
    renderAsync(element: Object, scaledWidth: Number, scaledHeight: Number, callback: (error: Error) => void): void ;

    getPixelsAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class SurfaceImageSource {
    dispatcher: Object;
    constructor();
    constructor(pixelWidth: Number, pixelHeight: Number);
    constructor(pixelWidth: Number, pixelHeight: Number, isOpaque: Boolean);

  }

  export class BitmapImage {
    static createOptionsProperty: Object;
    static decodePixelHeightProperty: Object;
    static decodePixelWidthProperty: Object;
    static uriSourceProperty: Object;
    static decodePixelTypeProperty: Object;
    static autoPlayProperty: Object;
    static isAnimatedBitmapProperty: Object;
    static isPlayingProperty: Object;
    static pixelHeightProperty: Object;
    static pixelWidthProperty: Object;
    uriSource: Object;
    decodePixelWidth: Number;
    decodePixelHeight: Number;
    createOptions: BitmapCreateOptions;
    decodePixelType: DecodePixelType;
    autoPlay: Boolean;
    isAnimatedBitmap: Boolean;
    isPlaying: Boolean;
    pixelHeight: Number;
    pixelWidth: Number;
    dispatcher: Object;
    constructor();
    constructor(uriSource: Object);

    play(): void;

    stop(): void;

    addListener(type: "DownloadProgress", listener: (ev: Event) => void): void ;
    removeListener(type: "DownloadProgress", listener: (ev: Event) => void): void ;
    on(type: "DownloadProgress", listener: (ev: Event) => void): void ;
    off(type: "DownloadProgress", listener: (ev: Event) => void): void ;
    
    addListener(type: "ImageFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "ImageFailed", listener: (ev: Event) => void): void ;
    on(type: "ImageFailed", listener: (ev: Event) => void): void ;
    off(type: "ImageFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ImageOpened", listener: (ev: Event) => void): void ;
    removeListener(type: "ImageOpened", listener: (ev: Event) => void): void ;
    on(type: "ImageOpened", listener: (ev: Event) => void): void ;
    off(type: "ImageOpened", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VirtualSurfaceImageSource {
    dispatcher: Object;
    constructor();
    constructor(pixelWidth: Number, pixelHeight: Number);
    constructor(pixelWidth: Number, pixelHeight: Number, isOpaque: Boolean);

  }

  export class WriteableBitmap {
    static pixelHeightProperty: Object;
    static pixelWidthProperty: Object;
    pixelBuffer: Object;
    pixelHeight: Number;
    pixelWidth: Number;
    dispatcher: Object;
    constructor();
    constructor(pixelWidth: Number, pixelHeight: Number);

    invalidate(): void;

  }

  export class SvgImageSourceFailedEventArgs {
    status: SvgImageSourceLoadStatus;
    constructor();

  }

  export class SvgImageSourceOpenedEventArgs {
    constructor();

  }

  export class XamlRenderingBackgroundTask {
    constructor();

    onRun(taskInstance: Object): void;

  }

  export class SoftwareBitmapSource {
    dispatcher: Object;
    constructor();

    setBitmapAsync(softwareBitmap: Object, callback: (error: Error) => void): void ;

    close(): void;
  }

  export class SvgImageSource {
    static rasterizePixelHeightProperty: Object;
    static rasterizePixelWidthProperty: Object;
    static uriSourceProperty: Object;
    uriSource: Object;
    rasterizePixelWidth: Number;
    rasterizePixelHeight: Number;
    dispatcher: Object;
    constructor();
    constructor(uriSource: Object);

    setSourceAsync(streamSource: Object, callback: (error: Error, result: SvgImageSourceLoadStatus) => void): void ;

    addListener(type: "OpenFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "OpenFailed", listener: (ev: Event) => void): void ;
    on(type: "OpenFailed", listener: (ev: Event) => void): void ;
    off(type: "OpenFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Opened", listener: (ev: Event) => void): void ;
    removeListener(type: "Opened", listener: (ev: Event) => void): void ;
    on(type: "Opened", listener: (ev: Event) => void): void ;
    off(type: "Opened", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

