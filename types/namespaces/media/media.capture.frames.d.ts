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
    id: string;
    mediaStreamType: number;
    properties: Object;
    sourceGroup: MediaFrameSourceGroup;
    sourceKind: MediaFrameSourceKind;
    profileId: string;
    videoProfileMediaDescription: Object;
    constructor();

  }

  export class MediaFrameSourceGroup {
    displayName: string;
    id: string;
    sourceInfos: Object;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: string, callback: (error: Error, result: MediaFrameSourceGroup) => void): void ;


    static getDeviceSelector(): string;


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

    getPropertyAsync(propertyId: string, callback: (error: Error, result: MediaFrameSourceGetPropertyResult) => void): void ;

    setPropertyAsync(propertyId: string, propertyValue: Object, callback: (error: Error, result: MediaFrameSourceSetPropertyStatus) => void): void ;

    getPropertyByExtendedIdAsync(extendedPropertyId: Array<number>, maxPropertyValueSize: number, callback: (error: Error, result: MediaFrameSourceGetPropertyResult) => void): void ;

    setPropertyByExtendedIdAsync(extendedPropertyId: Array<number>, propertyValue: Array<number>, callback: (error: Error, result: MediaFrameSourceSetPropertyStatus) => void): void ;

  }

  export class MediaFrameFormat {
    frameRate: Object;
    majorType: string;
    properties: Object;
    subtype: string;
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
    duration: number;
    format: MediaFrameFormat;
    properties: Object;
    sourceKind: MediaFrameSourceKind;
    systemRelativeTime: number;
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

    tryGetFrameReferenceBySourceId(sourceId: string): MediaFrameReference;

    close(): void;
  }

  export class MediaFrameSourceGetPropertyResult {
    status: MediaFrameSourceGetPropertyStatus;
    value: Object;
    constructor();

  }

  export class VideoMediaFrameFormat {
    depthFormat: DepthMediaFrameFormat;
    height: number;
    mediaFrameFormat: MediaFrameFormat;
    width: number;
    constructor();

  }

  export class DepthMediaFrameFormat {
    depthScaleInMeters: number;
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
    isIlluminated: boolean;
    videoMediaFrame: VideoMediaFrame;
    constructor();

  }

  export class DepthMediaFrame {
    depthFormat: DepthMediaFrameFormat;
    frameReference: MediaFrameReference;
    videoMediaFrame: VideoMediaFrame;
    maxReliableDepth: number;
    minReliableDepth: number;
    constructor();

    tryCreateCoordinateMapper(cameraIntrinsics: Object, coordinateSystem: Object): Object;

  }

