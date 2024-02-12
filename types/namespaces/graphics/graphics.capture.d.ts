  export class SizeInt32 {
    width: Number;
    height: Number;
    constructor();
  }

  export class WindowId {
    value: Number;
    constructor();
  }

  export class DisplayId {
    value: Number;
    constructor();
  }

  export enum GraphicsCaptureAccessKind {
    borderless,
    programmatic,
  }

  export class Direct3D11CaptureFrame {
    contentSize: SizeInt32;
    surface: Object;
    systemRelativeTime: Number;
    constructor();

    close(): void;
  }

  export class Direct3D11CaptureFramePool {
    dispatcherQueue: Object;
    constructor();

    static createFreeThreaded(device: Object, pixelFormat: Number, numberOfBuffers: Number, size: SizeInt32): Direct3D11CaptureFramePool;


    static create(device: Object, pixelFormat: Number, numberOfBuffers: Number, size: SizeInt32): Direct3D11CaptureFramePool;


    recreate(device: Object, pixelFormat: Number, numberOfBuffers: Number, size: SizeInt32): void;

    tryGetNextFrame(): Direct3D11CaptureFrame;

    createCaptureSession(item: GraphicsCaptureItem): GraphicsCaptureSession;

    close(): void;
    addListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "FrameArrived", listener: (ev: Event) => void): void ;
    on(type: "FrameArrived", listener: (ev: Event) => void): void ;
    off(type: "FrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GraphicsCaptureAccess {
    constructor();

    static requestAccessAsync(request: GraphicsCaptureAccessKind, callback: (error: Error, result: Number) => void): void ;


  }

  export class GraphicsCaptureItem {
    displayName: String;
    size: SizeInt32;
    constructor();

    static tryCreateFromWindowId(windowId: WindowId): GraphicsCaptureItem;


    static tryCreateFromDisplayId(displayId: DisplayId): GraphicsCaptureItem;


    static createFromVisual(visual: Object): GraphicsCaptureItem;


    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GraphicsCapturePicker {
    constructor();

    pickSingleItemAsync(callback: (error: Error, result: GraphicsCaptureItem) => void): void ;

  }

  export class GraphicsCaptureSession {
    isCursorCaptureEnabled: Boolean;
    isBorderRequired: Boolean;
    constructor();

    static isSupported(): Boolean;


    startCapture(): void;

    close(): void;
  }

