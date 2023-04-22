  export class Rect {
    constructor();
  }

  export enum CoreInputViewOcclusionKind {
    docked,
    floating,
    overlay,
  }

  export enum CoreInputViewXYFocusTransferDirection {
    up,
    right,
    down,
    left,
  }

  export class CoreInputView {
    constructor();

    static getForCurrentView(): CoreInputView;


    getCoreInputViewOcclusions(): Object;

    tryShowPrimaryView(): boolean;

    tryHidePrimaryView(): boolean;

    tryTransferXYFocusToPrimaryView(origin: Object, direction: CoreInputViewXYFocusTransferDirection): boolean;

    addListener(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    on(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    off(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "XYFocusTransferredToPrimaryView", listener: (ev: Event) => void): void ;
    removeListener(type: "XYFocusTransferredToPrimaryView", listener: (ev: Event) => void): void ;
    on(type: "XYFocusTransferredToPrimaryView", listener: (ev: Event) => void): void ;
    off(type: "XYFocusTransferredToPrimaryView", listener: (ev: Event) => void): void ;
    
    addListener(type: "XYFocusTransferringFromPrimaryView", listener: (ev: Event) => void): void ;
    removeListener(type: "XYFocusTransferringFromPrimaryView", listener: (ev: Event) => void): void ;
    on(type: "XYFocusTransferringFromPrimaryView", listener: (ev: Event) => void): void ;
    off(type: "XYFocusTransferringFromPrimaryView", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreInputViewOcclusionsChangedEventArgs {
    handled: boolean;
    occlusions: Object;
    constructor();

  }

  export class CoreInputViewOcclusion {
    occludingRect: Object;
    occlusionKind: CoreInputViewOcclusionKind;
    constructor();

  }

  export class CoreInputViewTransferringXYFocusEventArgs {
    transferHandled: boolean;
    keepPrimaryViewVisible: boolean;
    direction: CoreInputViewXYFocusTransferDirection;
    origin: Object;
    constructor();

  }

