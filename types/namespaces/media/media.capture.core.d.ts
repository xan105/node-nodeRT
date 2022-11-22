  export class VariablePhotoSequenceCapture {
    constructor();

    startAsync(callback: (error: Error) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    finishAsync(callback: (error: Error) => void): void ;

    updateSettingsAsync(callback: (error: Error) => void): void ;

    addListener(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    removeListener(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    on(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    off(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VariablePhotoCapturedEventArgs {
    captureTimeOffset: Number;
    capturedFrameControlValues: Object;
    frame: Object;
    usedFrameControllerIndex: Number;
    constructor();

  }

