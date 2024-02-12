  export class SpatialRay {
    origin: Vector3;
    direction: Vector3;
    constructor();
  }

  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class HandMeshVertex {
    position: Vector3;
    normal: Vector3;
    constructor();
  }

  export class JointPose {
    orientation: Quaternion;
    position: Vector3;
    radius: Number;
    accuracy: JointPoseAccuracy;
    constructor();
  }

  export enum HandJointKind {
    palm,
    wrist,
    thumbMetacarpal,
    thumbProximal,
    thumbDistal,
    thumbTip,
    indexMetacarpal,
    indexProximal,
    indexIntermediate,
    indexDistal,
    indexTip,
    middleMetacarpal,
    middleProximal,
    middleIntermediate,
    middleDistal,
    middleTip,
    ringMetacarpal,
    ringProximal,
    ringIntermediate,
    ringDistal,
    ringTip,
    littleMetacarpal,
    littleProximal,
    littleIntermediate,
    littleDistal,
    littleTip,
  }

  export enum JointPoseAccuracy {
    high,
    approximate,
  }

  export class EyesPose {
    gaze: SpatialRay;
    isCalibrationValid: Boolean;
    updateTimestamp: Object;
    constructor();

    static requestAccessAsync(callback: (error: Error, result: Number) => void): void ;


    static isSupported(): Boolean;


  }

  export class HandMeshObserver {
    modelId: Number;
    neutralPose: HandPose;
    neutralPoseVersion: Number;
    source: Object;
    triangleIndexCount: Number;
    vertexCount: Number;
    constructor();

    getTriangleIndices();
    getVertexStateForPose(handPose: HandPose): HandMeshVertexState;

  }

  export class HandMeshVertexState {
    coordinateSystem: Object;
    updateTimestamp: Object;
    constructor();

    getVertices();
  }

  export class HandPose {
    constructor();

    tryGetJoint(coordinateSystem: Object, joint: HandJointKind, jointPose: JointPose): Boolean;

    tryGetJoints();
    getRelativeJoint(joint: HandJointKind, referenceJoint: HandJointKind): JointPose;

    getRelativeJoints();
  }

  export class HeadPose {
    forwardDirection: Vector3;
    position: Vector3;
    upDirection: Vector3;
    constructor();

  }

