  export class Rect {
    constructor();
  }

  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class Point {
    constructor();
  }

  export enum PerceptionFrameSourceAccessStatus {
    unspecified,
    allowed,
    deniedByUser,
    deniedBySystem,
  }

  export enum PerceptionFrameSourcePropertyChangeStatus {
    unknown,
    accepted,
    lostControl,
    propertyNotSupported,
    propertyReadOnly,
    valueOutOfRange,
  }

  export class PerceptionColorFrameSourceWatcher {
    status: number;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceAdded", listener: (ev: Event) => void): void ;
    on(type: "SourceAdded", listener: (ev: Event) => void): void ;
    off(type: "SourceAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    on(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    off(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PerceptionColorFrameSourceAddedEventArgs {
    frameSource: PerceptionColorFrameSource;
    constructor();

  }

  export class PerceptionColorFrameSourceRemovedEventArgs {
    frameSource: PerceptionColorFrameSource;
    constructor();

  }

  export class PerceptionDepthFrameSourceWatcher {
    status: number;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceAdded", listener: (ev: Event) => void): void ;
    on(type: "SourceAdded", listener: (ev: Event) => void): void ;
    off(type: "SourceAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    on(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    off(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PerceptionDepthFrameSourceAddedEventArgs {
    frameSource: PerceptionDepthFrameSource;
    constructor();

  }

  export class PerceptionDepthFrameSourceRemovedEventArgs {
    frameSource: PerceptionDepthFrameSource;
    constructor();

  }

  export class PerceptionInfraredFrameSourceWatcher {
    status: number;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceAdded", listener: (ev: Event) => void): void ;
    on(type: "SourceAdded", listener: (ev: Event) => void): void ;
    off(type: "SourceAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    on(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    off(type: "SourceRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PerceptionInfraredFrameSourceAddedEventArgs {
    frameSource: PerceptionInfraredFrameSource;
    constructor();

  }

  export class PerceptionInfraredFrameSourceRemovedEventArgs {
    frameSource: PerceptionInfraredFrameSource;
    constructor();

  }

  export class PerceptionColorFrameSource {
    active: boolean;
    available: boolean;
    availableVideoProfiles: Object;
    cameraIntrinsics: Object;
    deviceKind: string;
    displayName: string;
    id: string;
    isControlled: boolean;
    properties: Object;
    supportedVideoProfiles: Object;
    videoProfile: PerceptionVideoProfile;
    deviceId: string;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: string, callback: (error: Error, result: PerceptionColorFrameSource) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: PerceptionFrameSourceAccessStatus) => void): void ;


    static createWatcher(): PerceptionColorFrameSourceWatcher;


    tryGetDepthCorrelatedCameraIntrinsicsAsync(correlatedDepthFrameSource: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCameraIntrinsics) => void): void ;

    tryGetDepthCorrelatedCoordinateMapperAsync(targetSourceId: string, correlatedDepthFrameSource: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCoordinateMapper) => void): void ;

    trySetVideoProfileAsync(controlSession: PerceptionControlSession, profile: PerceptionVideoProfile, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

    acquireControlSession(): PerceptionControlSession;

    canControlIndependentlyFrom(targetId: string): boolean;

    isCorrelatedWith(targetId: string): boolean;

    tryGetTransformTo(targetId: string, result: Matrix4x4): boolean;

    openReader(): PerceptionColorFrameReader;

    addListener(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    on(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    off(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    on(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    off(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    on(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    off(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    on(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    off(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PerceptionDepthFrameSource {
    active: boolean;
    available: boolean;
    availableVideoProfiles: Object;
    cameraIntrinsics: Object;
    deviceKind: string;
    displayName: string;
    id: string;
    isControlled: boolean;
    properties: Object;
    supportedVideoProfiles: Object;
    videoProfile: PerceptionVideoProfile;
    deviceId: string;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: string, callback: (error: Error, result: PerceptionDepthFrameSource) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: PerceptionFrameSourceAccessStatus) => void): void ;


    static createWatcher(): PerceptionDepthFrameSourceWatcher;


    tryGetDepthCorrelatedCameraIntrinsicsAsync(target: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCameraIntrinsics) => void): void ;

    tryGetDepthCorrelatedCoordinateMapperAsync(targetId: string, depthFrameSourceToMapWith: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCoordinateMapper) => void): void ;

    trySetVideoProfileAsync(controlSession: PerceptionControlSession, profile: PerceptionVideoProfile, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

    acquireControlSession(): PerceptionControlSession;

    canControlIndependentlyFrom(targetId: string): boolean;

    isCorrelatedWith(targetId: string): boolean;

    tryGetTransformTo(targetId: string, result: Matrix4x4): boolean;

    openReader(): PerceptionDepthFrameReader;

    addListener(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    on(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    off(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    on(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    off(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    on(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    off(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    on(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    off(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PerceptionInfraredFrameSource {
    active: boolean;
    available: boolean;
    availableVideoProfiles: Object;
    cameraIntrinsics: Object;
    deviceKind: string;
    displayName: string;
    id: string;
    isControlled: boolean;
    properties: Object;
    supportedVideoProfiles: Object;
    videoProfile: PerceptionVideoProfile;
    deviceId: string;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: string, callback: (error: Error, result: PerceptionInfraredFrameSource) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: PerceptionFrameSourceAccessStatus) => void): void ;


    static createWatcher(): PerceptionInfraredFrameSourceWatcher;


    tryGetDepthCorrelatedCameraIntrinsicsAsync(target: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCameraIntrinsics) => void): void ;

    tryGetDepthCorrelatedCoordinateMapperAsync(targetId: string, depthFrameSourceToMapWith: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCoordinateMapper) => void): void ;

    trySetVideoProfileAsync(controlSession: PerceptionControlSession, profile: PerceptionVideoProfile, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

    acquireControlSession(): PerceptionControlSession;

    canControlIndependentlyFrom(targetId: string): boolean;

    isCorrelatedWith(targetId: string): boolean;

    tryGetTransformTo(targetId: string, result: Matrix4x4): boolean;

    openReader(): PerceptionInfraredFrameReader;

    addListener(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    on(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    off(type: "ActiveChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailableChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    on(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    off(type: "CameraIntrinsicsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    on(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    off(type: "PropertiesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    on(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    off(type: "VideoProfileChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PerceptionControlSession {
    constructor();

    trySetPropertyAsync(name: string, value: Object, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

    close(): void;
    addListener(type: "ControlLost", listener: (ev: Event) => void): void ;
    removeListener(type: "ControlLost", listener: (ev: Event) => void): void ;
    on(type: "ControlLost", listener: (ev: Event) => void): void ;
    off(type: "ControlLost", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PerceptionFrameSourcePropertyChangeResult {
    newValue: Object;
    status: PerceptionFrameSourcePropertyChangeStatus;
    constructor();

  }

  export class PerceptionFrameSourcePropertiesChangedEventArgs {
    collectionChange: number;
    key: string;
    constructor();

  }

  export class PerceptionVideoProfile {
    bitmapAlphaMode: number;
    bitmapPixelFormat: number;
    frameDuration: number;
    height: number;
    width: number;
    constructor();

    isEqual(other: PerceptionVideoProfile): boolean;

  }

  export class PerceptionDepthCorrelatedCameraIntrinsics {
    constructor();

    unprojectRegionPixelsAtCorrelatedDepthAsync(region: Object, depthFrame: PerceptionDepthFrame, results: Array<Vector3>, callback: (error: Error) => void): void ;

    unprojectAllPixelsAtCorrelatedDepthAsync(depthFrame: PerceptionDepthFrame, results: Array<Vector3>, callback: (error: Error) => void): void ;

    unprojectPixelAtCorrelatedDepth(pixelCoordinate: Object, depthFrame: PerceptionDepthFrame): Vector3;

    unprojectPixelsAtCorrelatedDepth();
  }

  export class PerceptionDepthCorrelatedCoordinateMapper {
    constructor();

    mapRegionOfPixelsToTargetAsync(region: Object, depthFrame: PerceptionDepthFrame, targetCoordinates: Array<Object>, callback: (error: Error) => void): void ;

    mapAllPixelsToTargetAsync(depthFrame: PerceptionDepthFrame, targetCoordinates: Array<Object>, callback: (error: Error) => void): void ;

    mapPixelToTarget(sourcePixelCoordinate: Object, depthFrame: PerceptionDepthFrame): Object;

    mapPixelsToTarget();
  }

  export class PerceptionColorFrameReader {
    isPaused: boolean;
    source: PerceptionColorFrameSource;
    constructor();

    tryReadLatestFrame(): PerceptionColorFrame;

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

  export class PerceptionDepthFrameReader {
    isPaused: boolean;
    source: PerceptionDepthFrameSource;
    constructor();

    tryReadLatestFrame(): PerceptionDepthFrame;

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

  export class PerceptionInfraredFrameReader {
    isPaused: boolean;
    source: PerceptionInfraredFrameSource;
    constructor();

    tryReadLatestFrame(): PerceptionInfraredFrame;

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

  export class PerceptionColorFrameArrivedEventArgs {
    relativeTime: number;
    constructor();

    tryOpenFrame(): PerceptionColorFrame;

  }

  export class PerceptionColorFrame {
    videoFrame: Object;
    constructor();

    close(): void;
  }

  export class PerceptionDepthFrameArrivedEventArgs {
    relativeTime: number;
    constructor();

    tryOpenFrame(): PerceptionDepthFrame;

  }

  export class PerceptionDepthFrame {
    videoFrame: Object;
    constructor();

    close(): void;
  }

  export class PerceptionInfraredFrameArrivedEventArgs {
    relativeTime: number;
    constructor();

    tryOpenFrame(): PerceptionInfraredFrame;

  }

  export class PerceptionInfraredFrame {
    videoFrame: Object;
    constructor();

    close(): void;
  }

  export class KnownPerceptionFrameSourceProperties {
    static deviceModelVersion: string;
    static enclosureLocation: string;
    static frameKind: string;
    static id: string;
    static physicalDeviceIds: string;
    static deviceId: string;
    constructor();

  }

  export class KnownPerceptionVideoFrameSourceProperties {
    static availableVideoProfiles: string;
    static cameraIntrinsics: string;
    static isMirrored: string;
    static supportedVideoProfiles: string;
    static videoProfile: string;
    constructor();

  }

  export class KnownPerceptionInfraredFrameSourceProperties {
    static activeIlluminationEnabled: string;
    static ambientSubtractionEnabled: string;
    static autoExposureEnabled: string;
    static exposure: string;
    static exposureCompensation: string;
    static interleavedIlluminationEnabled: string;
    static structureLightPatternEnabled: string;
    constructor();

  }

  export class KnownPerceptionDepthFrameSourceProperties {
    static maxDepth: string;
    static minDepth: string;
    constructor();

  }

  export class KnownPerceptionColorFrameSourceProperties {
    static autoExposureEnabled: string;
    static exposure: string;
    static exposureCompensation: string;
    constructor();

  }

  export class KnownPerceptionVideoProfileProperties {
    static bitmapAlphaMode: string;
    static bitmapPixelFormat: string;
    static frameDuration: string;
    static height: string;
    static width: string;
    constructor();

  }

  export class KnownCameraIntrinsicsProperties {
    static focalLength: string;
    static principalPoint: string;
    static radialDistortion: string;
    static tangentialDistortion: string;
    constructor();

  }

export * as provider from "./devices.perception.provider.js";