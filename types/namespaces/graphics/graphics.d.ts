  export class PointInt32 {
    x: number;
    y: number;
    constructor();
  }

  export class SizeInt32 {
    width: number;
    height: number;
    constructor();
  }

  export class RectInt32 {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor();
  }

  export class DisplayAdapterId {
    lowPart: number;
    highPart: number;
    constructor();
  }

  export class IGeometrySource2D {
    constructor();

  }

export * as capture from "./graphics.capture.js";
export * as directx from "./graphics.directx.js";
export * as display from "./graphics.display.js";
export * as effects from "./graphics.effects.js";
export * as holographic from "./graphics.holographic.js";
export * as imaging from "./graphics.imaging.js";
export * as printing from "./graphics.printing.js";
export * as printing3d from "./graphics.printing3d.js";