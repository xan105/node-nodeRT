  export class Point {
    constructor();
  }

  export enum CoreDragUIContentMode {
    auto,
    deferred,
  }

  export class ICoreDropOperationTarget {
    constructor();

    enterAsync(dragInfo: CoreDragInfo, dragUIOverride: CoreDragUIOverride, callback: (error: Error, result: Number) => void): void ;

    overAsync(dragInfo: CoreDragInfo, dragUIOverride: CoreDragUIOverride, callback: (error: Error, result: Number) => void): void ;

    leaveAsync(dragInfo: CoreDragInfo, callback: (error: Error) => void): void ;

    dropAsync(dragInfo: CoreDragInfo, callback: (error: Error, result: Number) => void): void ;

  }

  export class CoreDragInfo {
    data: Object;
    modifiers: Number;
    position: Object;
    allowedOperations: Number;
    constructor();

  }

  export class CoreDragUIOverride {
    isGlyphVisible: Boolean;
    isContentVisible: Boolean;
    isCaptionVisible: Boolean;
    caption: String;
    constructor();

    setContentFromSoftwareBitmap(softwareBitmap: Object): void;
    setContentFromSoftwareBitmap(softwareBitmap: Object, anchorPoint: Object): void;

    clear(): void;

  }

  export class CoreDragDropManager {
    areConcurrentOperationsEnabled: Boolean;
    constructor();

    static getForCurrentView(): CoreDragDropManager;


    addListener(type: "TargetRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "TargetRequested", listener: (ev: Event) => void): void ;
    on(type: "TargetRequested", listener: (ev: Event) => void): void ;
    off(type: "TargetRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreDropOperationTargetRequestedEventArgs {
    constructor();

    setTarget(target: ICoreDropOperationTarget): void;

  }

  export class CoreDragOperation {
    dragUIContentMode: CoreDragUIContentMode;
    data: Object;
    allowedOperations: Number;
    constructor();

    startAsync(callback: (error: Error, result: Number) => void): void ;

    setPointerId(pointerId: Number): void;

    setDragUIContentFromSoftwareBitmap(softwareBitmap: Object): void;
    setDragUIContentFromSoftwareBitmap(softwareBitmap: Object, anchorPoint: Object): void;

  }

