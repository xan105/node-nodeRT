  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export class Vector2 {
    x: Number;
    y: Number;
    constructor();
  }

  export class HolographicKeyboard {
    constructor();

    static getDefault(): HolographicKeyboard;


    setPlacementOverride(coordinateSystem: Object, topCenterPosition: Vector3, orientation: Quaternion): void;
    setPlacementOverride(coordinateSystem: Object, topCenterPosition: Vector3, orientation: Quaternion, maxSize: Vector2): void;

    resetPlacementOverride(): void;

  }

