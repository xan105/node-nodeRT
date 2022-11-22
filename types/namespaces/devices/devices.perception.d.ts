  export class Rect {
    constructor();
  }

  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
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
    status: Number;
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
    status: Number;
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
    status: Number;
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
    active: Boolean;
    available: Boolean;
    availableVideoProfiles: Object;
    cameraIntrinsics: Object;
    deviceKind: String;
    displayName: String;
    id: String;
    isControlled: Boolean;
    properties: Object;
    supportedVideoProfiles: Object;
    videoProfile: PerceptionVideoProfile;
    deviceId: String;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: String, callback: (error: Error, result: PerceptionColorFrameSource) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: PerceptionFrameSourceAccessStatus) => void): void ;


    static createWatcher(): PerceptionColorFrameSourceWatcher;


    tryGetDepthCorrelatedCameraIntrinsicsAsync(correlatedDepthFrameSource: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCameraIntrinsics) => void): void ;

    tryGetDepthCorrelatedCoordinateMapperAsync(targetSourceId: String, correlatedDepthFrameSource: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCoordinateMapper) => void): void ;

    trySetVideoProfileAsync(controlSession: PerceptionControlSession, profile: PerceptionVideoProfile, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

    acquireControlSession(): PerceptionControlSession;

    canControlIndependentlyFrom(targetId: String): Boolean;

    isCorrelatedWith(targetId: String): Boolean;

    tryGetTransformTo(targetId: String, result: Matrix4x4): Boolean;

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
    active: Boolean;
    available: Boolean;
    availableVideoProfiles: Object;
    cameraIntrinsics: Object;
    deviceKind: String;
    displayName: String;
    id: String;
    isControlled: Boolean;
    properties: Object;
    supportedVideoProfiles: Object;
    videoProfile: PerceptionVideoProfile;
    deviceId: String;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: String, callback: (error: Error, result: PerceptionDepthFrameSource) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: PerceptionFrameSourceAccessStatus) => void): void ;


    static createWatcher(): PerceptionDepthFrameSourceWatcher;


    tryGetDepthCorrelatedCameraIntrinsicsAsync(target: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCameraIntrinsics) => void): void ;

    tryGetDepthCorrelatedCoordinateMapperAsync(targetId: String, depthFrameSourceToMapWith: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCoordinateMapper) => void): void ;

    trySetVideoProfileAsync(controlSession: PerceptionControlSession, profile: PerceptionVideoProfile, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

    acquireControlSession(): PerceptionControlSession;

    canControlIndependentlyFrom(targetId: String): Boolean;

    isCorrelatedWith(targetId: String): Boolean;

    tryGetTransformTo(targetId: String, result: Matrix4x4): Boolean;

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
    active: Boolean;
    available: Boolean;
    availableVideoProfiles: Object;
    cameraIntrinsics: Object;
    deviceKind: String;
    displayName: String;
    id: String;
    isControlled: Boolean;
    properties: Object;
    supportedVideoProfiles: Object;
    videoProfile: PerceptionVideoProfile;
    deviceId: String;
    constructor();

    static findAllAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(id: String, callback: (error: Error, result: PerceptionInfraredFrameSource) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: PerceptionFrameSourceAccessStatus) => void): void ;


    static createWatcher(): PerceptionInfraredFrameSourceWatcher;


    tryGetDepthCorrelatedCameraIntrinsicsAsync(target: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCameraIntrinsics) => void): void ;

    tryGetDepthCorrelatedCoordinateMapperAsync(targetId: String, depthFrameSourceToMapWith: PerceptionDepthFrameSource, callback: (error: Error, result: PerceptionDepthCorrelatedCoordinateMapper) => void): void ;

    trySetVideoProfileAsync(controlSession: PerceptionControlSession, profile: PerceptionVideoProfile, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

    acquireControlSession(): PerceptionControlSession;

    canControlIndependentlyFrom(targetId: String): Boolean;

    isCorrelatedWith(targetId: String): Boolean;

    tryGetTransformTo(targetId: String, result: Matrix4x4): Boolean;

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

    trySetPropertyAsync(name: String, value: Object, callback: (error: Error, result: PerceptionFrameSourcePropertyChangeResult) => void): void ;

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
    collectionChange: Number;
    key: String;
    constructor();

  }

  export class PerceptionVideoProfile {
    bitmapAlphaMode: Number;
    bitmapPixelFormat: Number;
    frameDuration: Number;
    height: Number;
    width: Number;
    constructor();

    isEqual(other: PerceptionVideoProfile): Boolean;

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
    isPaused: Boolean;
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
    isPaused: Boolean;
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
    isPaused: Boolean;
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
    relativeTime: Number;
    constructor();

    tryOpenFrame(): PerceptionColorFrame;

  }

  export class PerceptionColorFrame {
    videoFrame: Object;
    constructor();

    close(): void;
  }

  export class PerceptionDepthFrameArrivedEventArgs {
    relativeTime: Number;
    constructor();

    tryOpenFrame(): PerceptionDepthFrame;

  }

  export class PerceptionDepthFrame {
    videoFrame: Object;
    constructor();

    close(): void;
  }

  export class PerceptionInfraredFrameArrivedEventArgs {
    relativeTime: Number;
    constructor();

    tryOpenFrame(): PerceptionInfraredFrame;

  }

  export class PerceptionInfraredFrame {
    videoFrame: Object;
    constructor();

    close(): void;
  }

  export class KnownPerceptionFrameSourceProperties {
    static deviceModelVersion: String;
    static enclosureLocation: String;
    static frameKind: String;
    static id: String;
    static physicalDeviceIds: String;
    static deviceId: String;
    constructor();

  }

  export class KnownPerceptionVideoFrameSourceProperties {
    static availableVideoProfiles: String;
    static cameraIntrinsics: String;
    static isMirrored: String;
    static supportedVideoProfiles: String;
    static videoProfile: String;
    constructor();

  }

  export class KnownPerceptionInfraredFrameSourceProperties {
    static activeIlluminationEnabled: String;
    static ambientSubtractionEnabled: String;
    static autoExposureEnabled: String;
    static exposure: String;
    static exposureCompensation: String;
    static interleavedIlluminationEnabled: String;
    static structureLightPatternEnabled: String;
    constructor();

  }

  export class KnownPerceptionDepthFrameSourceProperties {
    static maxDepth: String;
    static minDepth: String;
    constructor();

  }

  export class KnownPerceptionColorFrameSourceProperties {
    static autoExposureEnabled: String;
    static exposure: String;
    static exposureCompensation: String;
    constructor();

  }

  export class KnownPerceptionVideoProfileProperties {
    static bitmapAlphaMode: String;
    static bitmapPixelFormat: String;
    static frameDuration: String;
    static height: String;
    static width: String;
    constructor();

  }

  export class KnownCameraIntrinsicsProperties {
    static focalLength: String;
    static principalPoint: String;
    static radialDistortion: String;
    static tangentialDistortion: String;
    constructor();

  }

export * as provider from "./devices.perception.provider.js";