  export class Rect {
    constructor();
  }

  export enum CoreInputViewKind {
    default,
    keyboard,
    handwriting,
    emoji,
    symbols,
    clipboard,
    dictation,
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

  export class CoreFrameworkInputView {
    constructor();

    static getForUIContext(context: Object): CoreFrameworkInputView;


    static getForCurrentView(): CoreFrameworkInputView;


    addListener(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    on(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    off(type: "OcclusionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    on(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    off(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreFrameworkInputViewAnimationStartingEventArgs {
    animationDuration: Number;
    frameworkAnimationRecommended: Boolean;
    occlusions: Object;
    constructor();

  }

  export class CoreFrameworkInputViewOcclusionsChangedEventArgs {
    handled: Boolean;
    occlusions: Object;
    constructor();

  }

  export class CoreInputView {
    constructor();

    static getForUIContext(context: Object): CoreInputView;


    static getForCurrentView(): CoreInputView;


    getCoreInputViewOcclusions(): Object;

    tryShowPrimaryView(): Boolean;

    tryHidePrimaryView(): Boolean;

    tryTransferXYFocusToPrimaryView(origin: Object, direction: CoreInputViewXYFocusTransferDirection): Boolean;

    tryShow(): Boolean;
    tryShow(type: CoreInputViewKind): Boolean;

    tryHide(): Boolean;

    isKindSupported(type: CoreInputViewKind): Boolean;

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
    
    addListener(type: "PrimaryViewHiding", listener: (ev: Event) => void): void ;
    removeListener(type: "PrimaryViewHiding", listener: (ev: Event) => void): void ;
    on(type: "PrimaryViewHiding", listener: (ev: Event) => void): void ;
    off(type: "PrimaryViewHiding", listener: (ev: Event) => void): void ;
    
    addListener(type: "PrimaryViewShowing", listener: (ev: Event) => void): void ;
    removeListener(type: "PrimaryViewShowing", listener: (ev: Event) => void): void ;
    on(type: "PrimaryViewShowing", listener: (ev: Event) => void): void ;
    off(type: "PrimaryViewShowing", listener: (ev: Event) => void): void ;
    
    addListener(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    on(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    off(type: "PrimaryViewAnimationStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "SupportedKindsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SupportedKindsChanged", listener: (ev: Event) => void): void ;
    on(type: "SupportedKindsChanged", listener: (ev: Event) => void): void ;
    off(type: "SupportedKindsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreInputViewAnimationStartingEventArgs {
    handled: Boolean;
    animationDuration: Number;
    occlusions: Object;
    constructor();

  }

  export class CoreInputViewHidingEventArgs {
    constructor();

    tryCancel(): Boolean;

  }

  export class CoreInputViewOcclusion {
    occludingRect: Object;
    occlusionKind: CoreInputViewOcclusionKind;
    constructor();

  }

  export class CoreInputViewOcclusionsChangedEventArgs {
    handled: Boolean;
    occlusions: Object;
    constructor();

  }

  export class CoreInputViewShowingEventArgs {
    constructor();

    tryCancel(): Boolean;

  }

  export class CoreInputViewTransferringXYFocusEventArgs {
    transferHandled: Boolean;
    keepPrimaryViewVisible: Boolean;
    direction: CoreInputViewXYFocusTransferDirection;
    origin: Object;
    constructor();

  }

  export class UISettingsController {
    constructor();

    static requestDefaultAsync(callback: (error: Error, result: UISettingsController) => void): void ;


    setAdvancedEffectsEnabled(value: Boolean): void;

    setAnimationsEnabled(value: Boolean): void;

    setAutoHideScrollBars(value: Boolean): void;

    setMessageDuration(value: Number): void;

    setTextScaleFactor(value: Number): void;

  }

