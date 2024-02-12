  export class DisplayAdapterId {
    lowPart: Number;
    highPart: Number;
    constructor();
  }

  export class DisplayId {
    value: Number;
    constructor();
  }

  export class PointInt32 {
    x: Number;
    y: Number;
    constructor();
  }

  export class RectInt32 {
    x: Number;
    y: Number;
    width: Number;
    height: Number;
    constructor();
  }

  export class SizeInt32 {
    width: Number;
    height: Number;
    constructor();
  }

  export class IGeometrySource2D {
    constructor();

  }

export const IGeometrySource2D: any;
export * as capture from "./graphics.capture.js";
export * as directx from "./graphics.directx.js";
export * as display from "./graphics.display.js";
export * as effects from "./graphics.effects.js";
export * as holographic from "./graphics.holographic.js";
export * as imaging from "./graphics.imaging.js";
export * as printing from "./graphics.printing.js";
export * as printing3d from "./graphics.printing3d.js";
