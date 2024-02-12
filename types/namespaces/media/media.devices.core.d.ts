  export class Vector2 {
    x: Number;
    y: Number;
    constructor();
  }

  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Matrix4x4 {
    m11: Number;
    m12: Number;
    m13: Number;
    m14: Number;
    m21: Number;
    m22: Number;
    m23: Number;
    m24: Number;
    m31: Number;
    m32: Number;
    m33: Number;
    m34: Number;
    m41: Number;
    m42: Number;
    m43: Number;
    m44: Number;
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

  export class CameraIntrinsics {
    focalLength: Vector2;
    imageHeight: Number;
    imageWidth: Number;
    principalPoint: Vector2;
    radialDistortion: Vector3;
    tangentialDistortion: Vector2;
    undistortedProjectionTransform: Matrix4x4;
    constructor();
    constructor(focalLength: Vector2, principalPoint: Vector2, radialDistortion: Vector3, tangentialDistortion: Vector2, imageWidth: Number, imageHeight: Number);

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

  export class FrameControlCapabilities {
    exposure: FrameExposureCapabilities;
    exposureCompensation: FrameExposureCompensationCapabilities;
    focus: FrameFocusCapabilities;
    isoSpeed: FrameIsoSpeedCapabilities;
    photoConfirmationSupported: Boolean;
    flash: FrameFlashCapabilities;
    constructor();

  }

  export class FrameController {
    photoConfirmationEnabled: Boolean;
    exposureCompensationControl: FrameExposureCompensationControl;
    exposureControl: FrameExposureControl;
    focusControl: FrameFocusControl;
    isoSpeedControl: FrameIsoSpeedControl;
    flashControl: FrameFlashControl;
    constructor();

  }

  export class FrameExposureCapabilities {
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    constructor();

  }

  export class FrameExposureCompensationCapabilities {
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    constructor();

  }

  export class FrameExposureCompensationControl {
    value: Number;
    constructor();

  }

  export class FrameExposureControl {
    value: Number;
    auto: Boolean;
    constructor();

  }

  export class FrameFlashCapabilities {
    powerSupported: Boolean;
    redEyeReductionSupported: Boolean;
    supported: Boolean;
    constructor();

  }

  export class FrameFlashControl {
    redEyeReduction: Boolean;
    powerPercent: Number;
    mode: FrameFlashMode;
    auto: Boolean;
    constructor();

  }

  export class FrameFocusCapabilities {
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    constructor();

  }

  export class FrameFocusControl {
    value: Number;
    constructor();

  }

  export class FrameIsoSpeedCapabilities {
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    constructor();

  }

  export class FrameIsoSpeedControl {
    value: Number;
    auto: Boolean;
    constructor();

  }

  export class VariablePhotoSequenceController {
    photosPerSecondLimit: Number;
    desiredFrameControllers: Object;
    frameCapabilities: FrameControlCapabilities;
    maxPhotosPerSecond: Number;
    supported: Boolean;
    constructor();

    getHighestConcurrentFrameRate(captureProperties: Object): Object;

    getCurrentFrameRate(): Object;

  }

