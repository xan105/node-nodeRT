  export class BitmapBounds {
    x: Number;
    y: Number;
    width: Number;
    height: Number;
    constructor();
  }

  export class BitmapSize {
    width: Number;
    height: Number;
    constructor();
  }

  export class DetectedFace {
    faceBox: BitmapBounds;
    constructor();

  }

  export class FaceTracker {
    static isSupported: Boolean;
    minDetectableFaceSize: BitmapSize;
    maxDetectableFaceSize: BitmapSize;
    constructor();

    static createAsync(callback: (error: Error, result: FaceTracker) => void): void ;


    static getSupportedBitmapPixelFormats(): Object;


    static isBitmapPixelFormatSupported(bitmapPixelFormat: Number): Boolean;


    processNextFrameAsync(videoFrame: Object, callback: (error: Error, result: Object) => void): void ;

  }

  export class FaceDetector {
    static isSupported: Boolean;
    minDetectableFaceSize: BitmapSize;
    maxDetectableFaceSize: BitmapSize;
    constructor();

    static createAsync(callback: (error: Error, result: FaceDetector) => void): void ;


    static getSupportedBitmapPixelFormats(): Object;


    static isBitmapPixelFormatSupported(bitmapPixelFormat: Number): Boolean;


    detectFacesAsync(image: Object, callback: (error: Error, result: Object) => void): void ;
    detectFacesAsync(image: Object, searchArea: BitmapBounds, callback: (error: Error, result: Object) => void): void ;

  }

