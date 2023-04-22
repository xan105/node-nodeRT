  export class Rect {
    constructor();
  }

  export class PointerDeviceUsage {
    usagePage: number;
    usage: number;
    minLogical: number;
    maxLogical: number;
    minPhysical: number;
    maxPhysical: number;
    unit: number;
    physicalMultiplier: number;
    constructor();
  }

  export class MouseDelta {
    x: number;
    y: number;
    constructor();
  }

  export enum PointerDeviceType {
    touch,
    pen,
    mouse,
  }

  export class PointerDevice {
    isIntegrated: boolean;
    maxContacts: number;
    physicalDeviceRect: Object;
    pointerDeviceType: PointerDeviceType;
    screenRect: Object;
    supportedUsages: Object;
    maxPointersWithZDistance: number;
    constructor();

    static getPointerDevice(pointerId: number): PointerDevice;


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
    horizontalWheelPresent: number;
    mousePresent: number;
    numberOfButtons: number;
    swapButtons: number;
    verticalWheelPresent: number;
    constructor();

  }

  export class KeyboardCapabilities {
    keyboardPresent: number;
    constructor();

  }

  export class TouchCapabilities {
    contacts: number;
    touchPresent: number;
    constructor();

  }

export * as preview from "./devices.input.preview.js";