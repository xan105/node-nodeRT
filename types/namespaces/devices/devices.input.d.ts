  export class Rect {
    constructor();
  }

  export class MouseDelta {
    x: Number;
    y: Number;
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

  export enum PointerDeviceType {
    touch,
    pen,
    mouse,
  }

  export class KeyboardCapabilities {
    keyboardPresent: Number;
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

  export class PenButtonListener {
    constructor();

    static getDefault(): PenButtonListener;


    isSupported(): Boolean;

    addListener(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    on(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    off(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "TailButtonClicked", listener: (ev: Event) => void): void ;
    removeListener(type: "TailButtonClicked", listener: (ev: Event) => void): void ;
    on(type: "TailButtonClicked", listener: (ev: Event) => void): void ;
    off(type: "TailButtonClicked", listener: (ev: Event) => void): void ;
    
    addListener(type: "TailButtonDoubleClicked", listener: (ev: Event) => void): void ;
    removeListener(type: "TailButtonDoubleClicked", listener: (ev: Event) => void): void ;
    on(type: "TailButtonDoubleClicked", listener: (ev: Event) => void): void ;
    off(type: "TailButtonDoubleClicked", listener: (ev: Event) => void): void ;
    
    addListener(type: "TailButtonLongPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "TailButtonLongPressed", listener: (ev: Event) => void): void ;
    on(type: "TailButtonLongPressed", listener: (ev: Event) => void): void ;
    off(type: "TailButtonLongPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PenDevice {
    penId: String;
    simpleHapticsController: Object;
    constructor();

    static getFromPointerId(pointerId: Number): PenDevice;


  }

  export class PenDockListener {
    constructor();

    static getDefault(): PenDockListener;


    isSupported(): Boolean;

    addListener(type: "Docked", listener: (ev: Event) => void): void ;
    removeListener(type: "Docked", listener: (ev: Event) => void): void ;
    on(type: "Docked", listener: (ev: Event) => void): void ;
    off(type: "Docked", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    on(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    off(type: "IsSupportedChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Undocked", listener: (ev: Event) => void): void ;
    removeListener(type: "Undocked", listener: (ev: Event) => void): void ;
    on(type: "Undocked", listener: (ev: Event) => void): void ;
    off(type: "Undocked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PenDockedEventArgs {
    constructor();

  }

  export class PenTailButtonClickedEventArgs {
    constructor();

  }

  export class PenTailButtonDoubleClickedEventArgs {
    constructor();

  }

  export class PenTailButtonLongPressedEventArgs {
    constructor();

  }

  export class PenUndockedEventArgs {
    constructor();

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

  export class TouchCapabilities {
    contacts: Number;
    touchPresent: Number;
    constructor();

  }

