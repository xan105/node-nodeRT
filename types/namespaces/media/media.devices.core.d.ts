  export class Vector2 {
    x: number;
    y: number;
    constructor();
  }

  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class Matrix4x4 {
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    constructor();
  }

  export class Point {
    constructor();
  }

  export enum FrameFlashMode {
    disable,
    enable,
    global,
  }

  export class VariablePhotoSequenceController {
    photosPerSecondLimit: number;
    desiredFrameControllers: Object;
    frameCapabilities: FrameControlCapabilities;
    maxPhotosPerSecond: number;
    supported: boolean;
    constructor();

    getHighestConcurrentFrameRate(captureProperties: Object): Object;

    getCurrentFrameRate(): Object;

  }

  export class FrameExposureCapabilities {
    max: number;
    min: number;
    step: number;
    supported: boolean;
    constructor();

  }

  export class FrameExposureCompensationCapabilities {
    max: number;
    min: number;
    step: number;
    supported: boolean;
    constructor();

  }

  export class FrameIsoSpeedCapabilities {
    max: number;
    min: number;
    step: number;
    supported: boolean;
    constructor();

  }

  export class FrameFocusCapabilities {
    max: number;
    min: number;
    step: number;
    supported: boolean;
    constructor();

  }

  export class FrameFlashCapabilities {
    powerSupported: boolean;
    redEyeReductionSupported: boolean;
    supported: boolean;
    constructor();

  }

  export class FrameControlCapabilities {
    exposure: FrameExposureCapabilities;
    exposureCompensation: FrameExposureCompensationCapabilities;
    focus: FrameFocusCapabilities;
    isoSpeed: FrameIsoSpeedCapabilities;
    photoConfirmationSupported: boolean;
    flash: FrameFlashCapabilities;
    constructor();

  }

  export class FrameExposureControl {
    value: number;
    auto: boolean;
    constructor();

  }

  export class FrameExposureCompensationControl {
    value: number;
    constructor();

  }

  export class FrameIsoSpeedControl {
    value: number;
    auto: boolean;
    constructor();

  }

  export class FrameFocusControl {
    value: number;
    constructor();

  }

  export class FrameFlashControl {
    redEyeReduction: boolean;
    powerPercent: number;
    mode: FrameFlashMode;
    auto: boolean;
    constructor();

  }

  export class FrameController {
    photoConfirmationEnabled: boolean;
    exposureCompensationControl: FrameExposureCompensationControl;
    exposureControl: FrameExposureControl;
    focusControl: FrameFocusControl;
    isoSpeedControl: FrameIsoSpeedControl;
    flashControl: FrameFlashControl;
    constructor();

  }

  export class CameraIntrinsics {
    focalLength: Vector2;
    imageHeight: number;
    imageWidth: number;
    principalPoint: Vector2;
    radialDistortion: Vector3;
    tangentialDistortion: Vector2;
    undistortedProjectionTransform: Matrix4x4;
    constructor();

    projectOntoFrame(coordinate: Vector3): Object;

    unprojectAtUnitDepth(pixelCoordinate: Object): Vector2;

    projectManyOntoFrame();
    unprojectPixelsAtUnitDepth();
    distortPoint(input: Object): Object;

    distortPoints();
    undistortPoint(input: Object): Object;

    undistortPoints();
  }

  export class DepthCorrelatedCoordinateMapper {
    constructor();

    unprojectPoint(sourcePoint: Object, targetCoordinateSystem: Object): Vector3;

    unprojectPoints();
    mapPoint(sourcePoint: Object, targetCoordinateSystem: Object, targetCameraIntrinsics: CameraIntrinsics): Object;

    mapPoints();
    close(): void;
  }

