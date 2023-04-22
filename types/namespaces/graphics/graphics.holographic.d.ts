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
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class Vector2 {
    x: number;
    y: number;
    constructor();
  }

  export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor();
  }

  export class HolographicStereoTransform {
    left: Matrix4x4;
    right: Matrix4x4;
    constructor();
  }

  export class HolographicAdapterId {
    lowPart: number;
    highPart: number;
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
    viewportScaleFactor: number;
    id: number;
    isStereo: boolean;
    renderTargetSize: Object;
    display: HolographicDisplay;
    leftViewportParameters: HolographicCameraViewportParameters;
    rightViewportParameters: HolographicCameraViewportParameters;
    isPrimaryLayerEnabled: boolean;
    maxQuadLayerCount: number;
    quadLayers: Object;
    canOverrideViewport: boolean;
    constructor();

    setNearPlaneDistance(value: number): void;

    setFarPlaneDistance(value: number): void;

  }

  export class HolographicSpace {
    static isAvailable: boolean;
    static isSupported: boolean;
    static isConfigured: boolean;
    primaryAdapterId: HolographicAdapterId;
    userPresence: HolographicSpaceUserPresence;
    constructor();

    static createForCoreWindow(window: Object): HolographicSpace;


    setDirect3D11Device(value: Object): void;

    createNextFrame(): HolographicFrame;

    waitForNextFrameReady(): void;

    waitForNextFrameReadyWithHeadStart(requestedHeadStartDuration: number): void;

    createFramePresentationMonitor(maxQueuedReports: number): HolographicFramePresentationMonitor;

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
    duration: number;
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
    farPlaneDistance: number;
    holographicCamera: HolographicCamera;
    nearPlaneDistance: number;
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
    isContentProtectionEnabled: boolean;
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
    pixelFormat: number;
    size: Object;
    constructor();
    constructor(size: Object);
    constructor(size: Object, pixelFormat: number);

    close(): void;
  }

  export class HolographicQuadLayerUpdateParameters {
    constructor();

    acquireBufferToUpdateContent(): Object;

    updateViewport(value: Object): void;

    updateContentProtectionEnabled(value: boolean): void;

    updateExtents(value: Vector2): void;

    updateLocationWithStationaryMode(coordinateSystem: Object, position: Vector3, orientation: Quaternion): void;

    updateLocationWithDisplayRelativeMode(position: Vector3, orientation: Quaternion): void;

  }

  export class HolographicFramePresentationReport {
    appGpuDuration: number;
    appGpuOverrun: number;
    compositorGpuDuration: number;
    missedPresentationOpportunityCount: number;
    presentationCount: number;
    constructor();

  }

  export class HolographicCameraViewportParameters {
    hiddenAreaMesh: Array<Vector2>;
    visibleAreaMesh: Array<Vector2>;
    constructor();

  }

  export class HolographicDisplay {
    adapterId: HolographicAdapterId;
    displayName: string;
    isOpaque: boolean;
    isStereo: boolean;
    maxViewportSize: Object;
    spatialLocator: Object;
    refreshRate: number;
    constructor();

    static getDefault(): HolographicDisplay;


  }

