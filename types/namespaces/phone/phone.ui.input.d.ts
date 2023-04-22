  export class BackPressedEventArgs {
    handled: boolean;
    constructor();

  }

  export class CameraEventArgs {
    constructor();

  }

  export class HardwareButtons {
    constructor();

    addListener(type: "BackPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "BackPressed", listener: (ev: Event) => void): void ;
    on(type: "BackPressed", listener: (ev: Event) => void): void ;
    off(type: "BackPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraHalfPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraHalfPressed", listener: (ev: Event) => void): void ;
    on(type: "CameraHalfPressed", listener: (ev: Event) => void): void ;
    off(type: "CameraHalfPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraPressed", listener: (ev: Event) => void): void ;
    on(type: "CameraPressed", listener: (ev: Event) => void): void ;
    off(type: "CameraPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraReleased", listener: (ev: Event) => void): void ;
    on(type: "CameraReleased", listener: (ev: Event) => void): void ;
    off(type: "CameraReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

