  export class Transform3D {
    dispatcher: Object;
    constructor();

  }

  export class CompositeTransform3D {
    static centerXProperty: Object;
    static centerYProperty: Object;
    static centerZProperty: Object;
    static rotationXProperty: Object;
    static rotationYProperty: Object;
    static rotationZProperty: Object;
    static scaleXProperty: Object;
    static scaleYProperty: Object;
    static scaleZProperty: Object;
    static translateXProperty: Object;
    static translateYProperty: Object;
    static translateZProperty: Object;
    rotationZ: number;
    rotationY: number;
    rotationX: number;
    centerZ: number;
    centerY: number;
    centerX: number;
    translateZ: number;
    translateY: number;
    translateX: number;
    scaleZ: number;
    scaleY: number;
    scaleX: number;
    dispatcher: Object;
    constructor();

  }

  export class PerspectiveTransform3D {
    static depthProperty: Object;
    static offsetXProperty: Object;
    static offsetYProperty: Object;
    offsetY: number;
    offsetX: number;
    depth: number;
    dispatcher: Object;
    constructor();

  }

