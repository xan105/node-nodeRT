  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class SpatialBoundingFrustum {
    near: Plane;
    far: Plane;
    right: Plane;
    left: Plane;
    top: Plane;
    bottom: Plane;
    constructor();
  }

  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Vector2 {
    x: Number;
    y: Number;
    constructor();
  }

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export class HolographicStereoTransform {
    left: Matrix4x4;
    right: Matrix4x4;
    constructor();
  }

  export class HolographicAdapterId {
    lowPart: Number;
    highPart: Number;
    constructor();
  }

  export enum HolographicFramePresentResult {
    success,
    deviceRemoved,
  }

  export enum HolographicFramePresentWaitBehavior {
    waitForFrameToFinish,
    doNotWaitForFrameToFinish,
  }

  export enum HolographicSpaceUserPresence {
    absent,
    presentPassive,
    presentActive,
  }

  export enum HolographicReprojectionMode {
    positionAndOrientation,
    orientationOnly,
    disabled,
  }

  export class HolographicCamera {
    viewportScaleFactor: Number;
    id: Number;
    isStereo: Boolean;
    renderTargetSize: Object;
    display: HolographicDisplay;
    leftViewportParameters: HolographicCameraViewportParameters;
    rightViewportParameters: HolographicCameraViewportParameters;
    isPrimaryLayerEnabled: Boolean;
    maxQuadLayerCount: Number;
    quadLayers: Object;
    canOverrideViewport: Boolean;
    constructor();

    setNearPlaneDistance(value: Number): void;

    setFarPlaneDistance(value: Number): void;

  }

  export class HolographicSpace {
    static isAvailable: Boolean;
    static isSupported: Boolean;
    static isConfigured: Boolean;
    primaryAdapterId: HolographicAdapterId;
    userPresence: HolographicSpaceUserPresence;
    constructor();

    static createForCoreWindow(window: Object): HolographicSpace;


    setDirect3D11Device(value: Object): void;

    createNextFrame(): HolographicFrame;

    waitForNextFrameReady(): void;

    waitForNextFrameReadyWithHeadStart(requestedHeadStartDuration: Number): void;

    createFramePresentationMonitor(maxQueuedReports: Number): HolographicFramePresentationMonitor;

    addListener(type: "CameraAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraAdded", listener: (ev: Event) => void): void ;
    on(type: "CameraAdded", listener: (ev: Event) => void): void ;
    off(type: "CameraAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraRemoved", listener: (ev: Event) => void): void ;
    on(type: "CameraRemoved", listener: (ev: Event) => void): void ;
    off(type: "CameraRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserPresenceChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserPresenceChanged", listener: (ev: Event) => void): void ;
    on(type: "UserPresenceChanged", listener: (ev: Event) => void): void ;
    off(type: "UserPresenceChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsAvailableChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsAvailableChanged", listener: (ev: Event) => void): void ;
    on(type: "IsAvailableChanged", listener: (ev: Event) => void): void ;
    off(type: "IsAvailableChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HolographicSpaceCameraAddedEventArgs {
    camera: HolographicCamera;
    constructor();

    getDeferral(): Object;

  }

  export class HolographicSpaceCameraRemovedEventArgs {
    camera: HolographicCamera;
    constructor();

  }

  export class HolographicFrame {
    addedCameras: Object;
    currentPrediction: HolographicFramePrediction;
    duration: Number;
    removedCameras: Object;
    constructor();

    getRenderingParameters(cameraPose: HolographicCameraPose): HolographicCameraRenderingParameters;

    updateCurrentPrediction(): void;

    presentUsingCurrentPrediction(): HolographicFramePresentResult;
    presentUsingCurrentPrediction(waitBehavior: HolographicFramePresentWaitBehavior): HolographicFramePresentResult;

    waitForFrameToFinish(): void;

    getQuadLayerUpdateParameters(layer: HolographicQuadLayer): HolographicQuadLayerUpdateParameters;

  }

  export class HolographicFramePresentationMonitor {
    constructor();

    readReports(): Object;

    close(): void;
  }

  export class HolographicCameraPose {
    farPlaneDistance: Number;
    holographicCamera: HolographicCamera;
    nearPlaneDistance: Number;
    projectionTransform: HolographicStereoTransform;
    viewport: Object;
    constructor();

    tryGetViewTransform(coordinateSystem: Object): HolographicStereoTransform;

    tryGetCullingFrustum(coordinateSystem: Object): SpatialBoundingFrustum;

    tryGetVisibleFrustum(coordinateSystem: Object): SpatialBoundingFrustum;

    overrideViewTransform(coordinateSystem: Object, coordinateSystemToViewTransform: HolographicStereoTransform): void;

    overrideProjectionTransform(projectionTransform: HolographicStereoTransform): void;

    overrideViewport(leftViewport: Object, rightViewport: Object): void;

  }

  export class HolographicCameraRenderingParameters {
    direct3D11BackBuffer: Object;
    direct3D11Device: Object;
    reprojectionMode: HolographicReprojectionMode;
    isContentProtectionEnabled: Boolean;
    constructor();

    setFocusPoint(coordinateSystem: Object, position: Vector3): void;
    setFocusPoint(coordinateSystem: Object, position: Vector3, normal: Vector3): void;
    setFocusPoint(coordinateSystem: Object, position: Vector3, normal: Vector3, linearVelocity: Vector3): void;

    commitDirect3D11DepthBuffer(value: Object): void;

  }

  export class HolographicFramePrediction {
    cameraPoses: Object;
    timestamp: Object;
    constructor();

  }

  export class HolographicQuadLayer {
    pixelFormat: Number;
    size: Object;
    constructor();
    constructor(size: Object);
    constructor(size: Object, pixelFormat: Number);

    close(): void;
  }

  export class HolographicQuadLayerUpdateParameters {
    constructor();

    acquireBufferToUpdateContent(): Object;

    updateViewport(value: Object): void;

    updateContentProtectionEnabled(value: Boolean): void;

    updateExtents(value: Vector2): void;

    updateLocationWithStationaryMode(coordinateSystem: Object, position: Vector3, orientation: Quaternion): void;

    updateLocationWithDisplayRelativeMode(position: Vector3, orientation: Quaternion): void;

  }

  export class HolographicFramePresentationReport {
    appGpuDuration: Number;
    appGpuOverrun: Number;
    compositorGpuDuration: Number;
    missedPresentationOpportunityCount: Number;
    presentationCount: Number;
    constructor();

  }

  export class HolographicCameraViewportParameters {
    hiddenAreaMesh: Array<Vector2>;
    visibleAreaMesh: Array<Vector2>;
    constructor();

  }

  export class HolographicDisplay {
    adapterId: HolographicAdapterId;
    displayName: String;
    isOpaque: Boolean;
    isStereo: Boolean;
    maxViewportSize: Object;
    spatialLocator: Object;
    refreshRate: Number;
    constructor();

    static getDefault(): HolographicDisplay;


  }

