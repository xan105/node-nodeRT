  export enum MediaFrameReaderStartStatus {
    success,
    unknownFailure,
    deviceNotAvailable,
    outputFormatNotSupported,
    exclusiveControlNotAvailable,
  }

  export enum MediaFrameSourceSetPropertyStatus {
    success,
    unknownFailure,
    notSupported,
    invalidValue,
    deviceNotAvailable,
    notInControl,
  }

  export enum MediaFrameSourceGetPropertyStatus {
    success,
    unknownFailure,
    notSupported,
    deviceNotAvailable,
    maxPropertyValueSizeTooSmall,
    maxPropertyValueSizeRequired,
  }

  export enum MediaFrameSourceKind {
    custom,
    color,
    infrared,
    depth,
    audio,
    image,
  }

  export enum MultiSourceMediaFrameReaderStartStatus {
    success,
    notSupported,
    insufficientResources,
    deviceNotAvailable,
    unknownFailure,
  }

  export enum MediaFrameReaderAcquisitionMode {
    realtime,
    buffered,
  }

  export class MediaFrameSourceInfo {
    coordinateSystem: Object;
    deviceInformation: Object;
    id: String;
    mediaStreamType: Number;
    properties: Object;
    sourceGroup: MediaFrameSourceGroup;
    sourceKind: MediaFrameSourceKind;
    profileId: String;
    videoProfileMediaDescription: Object;
    constructor();

  }

  export class MediaFrameSourceGroup {
    displayName: String;
    id: String;
    sourceInfos: Object;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: String, callback: (error: Error, result: MediaFrameSourceGroup) => void): void ;


    static getDeviceSelector(): String;


  }

  export class MediaFrameSource {
    controller: MediaFrameSourceController;
    currentFormat: MediaFrameFormat;
    info: MediaFrameSourceInfo;
    supportedFormats: Object;
    constructor();

    setFormatAsync(format: MediaFrameFormat, callback: (error: Error) => void): void ;

    tryGetCameraIntrinsics(format: MediaFrameFormat): Object;

    addListener(type: "FormatChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "FormatChanged", listener: (ev: Event) => void): void ;
    on(type: "FormatChanged", listener: (ev: Event) => void): void ;
    off(type: "FormatChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaFrameReader {
    acquisitionMode: MediaFrameReaderAcquisitionMode;
    constructor();

    startAsync(callback: (error: Error, result: MediaFrameReaderStartStatus) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    tryAcquireLatestFrame(): MediaFrameReference;

    close(): void;
    addListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    on(type: "FrameArrived", listener: (ev: Event) => void): void ;
    off(type: "FrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MultiSourceMediaFrameReader {
    acquisitionMode: MediaFrameReaderAcquisitionMode;
    constructor();

    startAsync(callback: (error: Error, result: MultiSourceMediaFrameReaderStartStatus) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    tryAcquireLatestFrame(): MultiSourceMediaFrameReference;

    close(): void;
    addListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    on(type: "FrameArrived", listener: (ev: Event) => void): void ;
    off(type: "FrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaFrameSourceController {
    videoDeviceController: Object;
    audioDeviceController: Object;
    constructor();

    getPropertyAsync(propertyId: String, callback: (error: Error, result: MediaFrameSourceGetPropertyResult) => void): void ;

    setPropertyAsync(propertyId: String, propertyValue: Object, callback: (error: Error, result: MediaFrameSourceSetPropertyStatus) => void): void ;

    getPropertyByExtendedIdAsync(extendedPropertyId: Array<Number>, maxPropertyValueSize: Number, callback: (error: Error, result: MediaFrameSourceGetPropertyResult) => void): void ;

    setPropertyByExtendedIdAsync(extendedPropertyId: Array<Number>, propertyValue: Array<Number>, callback: (error: Error, result: MediaFrameSourceSetPropertyStatus) => void): void ;

  }

  export class MediaFrameFormat {
    frameRate: Object;
    majorType: String;
    properties: Object;
    subtype: String;
    videoFormat: VideoMediaFrameFormat;
    audioEncodingProperties: Object;
    constructor();

  }

  export class MediaFrameArrivedEventArgs {
    constructor();

  }

  export class MediaFrameReference {
    bufferMediaFrame: BufferMediaFrame;
    coordinateSystem: Object;
    duration: Number;
    format: MediaFrameFormat;
    properties: Object;
    sourceKind: MediaFrameSourceKind;
    systemRelativeTime: Number;
    videoMediaFrame: VideoMediaFrame;
    audioMediaFrame: AudioMediaFrame;
    constructor();

    close(): void;
  }

  export class MultiSourceMediaFrameArrivedEventArgs {
    constructor();

  }

  export class MultiSourceMediaFrameReference {
    constructor();

    tryGetFrameReferenceBySourceId(sourceId: String): MediaFrameReference;

    close(): void;
  }

  export class MediaFrameSourceGetPropertyResult {
    status: MediaFrameSourceGetPropertyStatus;
    value: Object;
    constructor();

  }

  export class VideoMediaFrameFormat {
    depthFormat: DepthMediaFrameFormat;
    height: Number;
    mediaFrameFormat: MediaFrameFormat;
    width: Number;
    constructor();

  }

  export class DepthMediaFrameFormat {
    depthScaleInMeters: Number;
    videoFormat: VideoMediaFrameFormat;
    constructor();

  }

  export class BufferMediaFrame {
    buffer: Object;
    frameReference: MediaFrameReference;
    constructor();

  }

  export class VideoMediaFrame {
    cameraIntrinsics: Object;
    depthMediaFrame: DepthMediaFrame;
    direct3DSurface: Object;
    frameReference: MediaFrameReference;
    infraredMediaFrame: InfraredMediaFrame;
    softwareBitmap: Object;
    videoFormat: VideoMediaFrameFormat;
    constructor();

    getVideoFrame(): Object;

  }

  export class AudioMediaFrame {
    audioEncodingProperties: Object;
    frameReference: MediaFrameReference;
    constructor();

    getAudioFrame(): Object;

  }

  export class InfraredMediaFrame {
    frameReference: MediaFrameReference;
    isIlluminated: Boolean;
    videoMediaFrame: VideoMediaFrame;
    constructor();

  }

  export class DepthMediaFrame {
    depthFormat: DepthMediaFrameFormat;
    frameReference: MediaFrameReference;
    videoMediaFrame: VideoMediaFrame;
    maxReliableDepth: Number;
    minReliableDepth: Number;
    constructor();

    tryCreateCoordinateMapper(cameraIntrinsics: Object, coordinateSystem: Object): Object;

  }

