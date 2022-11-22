  export class Matrix3x2 {
    m11: Number;
    m12: Number;
    m21: Number;
    m22: Number;
    m31: Number;
    m32: Number;
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum CoreWetStrokeDisposition {
    inking,
    completed,
    canceled,
  }

  export class CoreInkIndependentInputSource {
    inkPresenter: Object;
    constructor();

    static create(inkPresenter: Object): CoreInkIndependentInputSource;


    addListener(type: "PointerEntering", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntering", listener: (ev: Event) => void): void ;
    on(type: "PointerEntering", listener: (ev: Event) => void): void ;
    off(type: "PointerEntering", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExiting", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExiting", listener: (ev: Event) => void): void ;
    on(type: "PointerExiting", listener: (ev: Event) => void): void ;
    off(type: "PointerExiting", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerHovering", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerHovering", listener: (ev: Event) => void): void ;
    on(type: "PointerHovering", listener: (ev: Event) => void): void ;
    off(type: "PointerHovering", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerLost", listener: (ev: Event) => void): void ;
    on(type: "PointerLost", listener: (ev: Event) => void): void ;
    off(type: "PointerLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoving", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoving", listener: (ev: Event) => void): void ;
    on(type: "PointerMoving", listener: (ev: Event) => void): void ;
    off(type: "PointerMoving", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressing", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressing", listener: (ev: Event) => void): void ;
    on(type: "PointerPressing", listener: (ev: Event) => void): void ;
    off(type: "PointerPressing", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleasing", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleasing", listener: (ev: Event) => void): void ;
    on(type: "PointerReleasing", listener: (ev: Event) => void): void ;
    off(type: "PointerReleasing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreWetStrokeUpdateEventArgs {
    disposition: CoreWetStrokeDisposition;
    newInkPoints: Object;
    pointerId: Number;
    constructor();

  }

  export class CoreWetStrokeUpdateSource {
    inkPresenter: Object;
    constructor();

    static create(inkPresenter: Object): CoreWetStrokeUpdateSource;


    addListener(type: "WetStrokeCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "WetStrokeCanceled", listener: (ev: Event) => void): void ;
    on(type: "WetStrokeCanceled", listener: (ev: Event) => void): void ;
    off(type: "WetStrokeCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "WetStrokeCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "WetStrokeCompleted", listener: (ev: Event) => void): void ;
    on(type: "WetStrokeCompleted", listener: (ev: Event) => void): void ;
    off(type: "WetStrokeCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "WetStrokeContinuing", listener: (ev: Event) => void): void ;
    removeListener(type: "WetStrokeContinuing", listener: (ev: Event) => void): void ;
    on(type: "WetStrokeContinuing", listener: (ev: Event) => void): void ;
    off(type: "WetStrokeContinuing", listener: (ev: Event) => void): void ;
    
    addListener(type: "WetStrokeStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "WetStrokeStarting", listener: (ev: Event) => void): void ;
    on(type: "WetStrokeStarting", listener: (ev: Event) => void): void ;
    off(type: "WetStrokeStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "WetStrokeStopping", listener: (ev: Event) => void): void ;
    removeListener(type: "WetStrokeStopping", listener: (ev: Event) => void): void ;
    on(type: "WetStrokeStopping", listener: (ev: Event) => void): void ;
    off(type: "WetStrokeStopping", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreInkPresenterHost {
    rootVisual: Object;
    inkPresenter: Object;
    constructor();

  }

  export class CoreIncrementalInkStroke {
    boundingRect: Object;
    drawingAttributes: Object;
    pointTransform: Matrix3x2;
    constructor();
    constructor(drawingAttributes: Object, pointTransform: Matrix3x2);

    appendInkPoints(inkPoints: Object): Object;

    createInkStroke(): Object;

  }

