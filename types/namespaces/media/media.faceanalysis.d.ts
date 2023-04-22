  export class BitmapBounds {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor();
  }

  export class BitmapSize {
    width: number;
    height: number;
    constructor();
  }

  export class DetectedFace {
    faceBox: BitmapBounds;
    constructor();

  }

  export class FaceTracker {
    static isSupported: boolean;
    minDetectableFaceSize: BitmapSize;
    maxDetectableFaceSize: BitmapSize;
    constructor();

    static createAsync(callback: (error: Error, result: FaceTracker) => void): void ;


    static getSupportedBitmapPixelFormats(): Object;


    static isBitmapPixelFormatSupported(bitmapPixelFormat: number): boolean;


    processNextFrameAsync(videoFrame: Object, callback: (error: Error, result: Object) => void): void ;

  }

  export class FaceDetector {
    static isSupported: boolean;
    minDetectableFaceSize: BitmapSize;
    maxDetectableFaceSize: BitmapSize;
    constructor();

    static createAsync(callback: (error: Error, result: FaceDetector) => void): void ;


    static getSupportedBitmapPixelFormats(): Object;


    static isBitmapPixelFormatSupported(bitmapPixelFormat: number): boolean;


    detectFacesAsync(image: Object, callback: (error: Error, result: Object) => void): void ;
    detectFacesAsync(image: Object, searchArea: BitmapBounds, callback: (error: Error, result: Object) => void): void ;

  }

