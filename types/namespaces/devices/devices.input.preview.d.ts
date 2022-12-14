  export class Point {
    constructor();
  }

  export enum GazeDeviceConfigurationStatePreview {
    unknown,
    ready,
    configuring,
    screenSetupNeeded,
    userCalibrationNeeded,
  }

  export class GazeInputSourcePreview {
    constructor();

    static getForCurrentView(): GazeInputSourcePreview;


    static createWatcher(): GazeDeviceWatcherPreview;


    addListener(type: "GazeEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "GazeEntered", listener: (ev: Event) => void): void ;
    on(type: "GazeEntered", listener: (ev: Event) => void): void ;
    off(type: "GazeEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "GazeExited", listener: (ev: Event) => void): void ;
    removeListener(type: "GazeExited", listener: (ev: Event) => void): void ;
    on(type: "GazeExited", listener: (ev: Event) => void): void ;
    off(type: "GazeExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "GazeMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "GazeMoved", listener: (ev: Event) => void): void ;
    on(type: "GazeMoved", listener: (ev: Event) => void): void ;
    off(type: "GazeMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GazeDeviceWatcherPreview {
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GazeDeviceWatcherAddedPreviewEventArgs {
    device: GazeDevicePreview;
    constructor();

  }

  export class GazeDeviceWatcherRemovedPreviewEventArgs {
    device: GazeDevicePreview;
    constructor();

  }

  export class GazeDeviceWatcherUpdatedPreviewEventArgs {
    device: GazeDevicePreview;
    constructor();

  }

  export class GazeMovedPreviewEventArgs {
    handled: Boolean;
    currentPoint: GazePointPreview;
    constructor();

    getIntermediatePoints(): Object;

  }

  export class GazeEnteredPreviewEventArgs {
    handled: Boolean;
    currentPoint: GazePointPreview;
    constructor();

  }

  export class GazeExitedPreviewEventArgs {
    handled: Boolean;
    currentPoint: GazePointPreview;
    constructor();

  }

  export class GazeDevicePreview {
    canTrackEyes: Boolean;
    canTrackHead: Boolean;
    configurationState: GazeDeviceConfigurationStatePreview;
    id: Number;
    constructor();

    requestCalibrationAsync(callback: (error: Error, result: Boolean) => void): void ;

    getNumericControlDescriptions(usagePage: Number, usageId: Number): Object;

    getBooleanControlDescriptions(usagePage: Number, usageId: Number): Object;

  }

  export class GazePointPreview {
    eyeGazePosition: Object;
    headGazePosition: Object;
    hidInputReport: Object;
    sourceDevice: GazeDevicePreview;
    timestamp: Number;
    constructor();

  }

