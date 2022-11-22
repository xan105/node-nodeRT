  export class Rect {
    constructor();
  }

  export class PointerDeviceUsage {
    usagePage: Number;
    usage: Number;
    minLogical: Number;
    maxLogical: Number;
    minPhysical: Number;
    maxPhysical: Number;
    unit: Number;
    physicalMultiplier: Number;
    constructor();
  }

  export class MouseDelta {
    x: Number;
    y: Number;
    constructor();
  }

  export enum PointerDeviceType {
    touch,
    pen,
    mouse,
  }

  export class PointerDevice {
    isIntegrated: Boolean;
    maxContacts: Number;
    physicalDeviceRect: Object;
    pointerDeviceType: PointerDeviceType;
    screenRect: Object;
    supportedUsages: Object;
    maxPointersWithZDistance: Number;
    constructor();

    static getPointerDevice(pointerId: Number): PointerDevice;


    static getPointerDevices(): Object;


  }

  export class MouseDevice {
    constructor();

    static getForCurrentView(): MouseDevice;


    addListener(type: "MouseMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "MouseMoved", listener: (ev: Event) => void): void ;
    on(type: "MouseMoved", listener: (ev: Event) => void): void ;
    off(type: "MouseMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MouseEventArgs {
    mouseDelta: MouseDelta;
    constructor();

  }

  export class MouseCapabilities {
    horizontalWheelPresent: Number;
    mousePresent: Number;
    numberOfButtons: Number;
    swapButtons: Number;
    verticalWheelPresent: Number;
    constructor();

  }

  export class KeyboardCapabilities {
    keyboardPresent: Number;
    constructor();

  }

  export class TouchCapabilities {
    contacts: Number;
    touchPresent: Number;
    constructor();

  }

export * as preview from "./devices.input.preview.js";