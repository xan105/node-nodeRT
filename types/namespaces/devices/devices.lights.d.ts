  export class Color {
    constructor();
  }

  export class Lamp {
    isEnabled: Boolean;
    color: Object;
    brightnessLevel: Number;
    deviceId: String;
    isColorSettable: Boolean;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Lamp) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: Lamp) => void): void ;


    static getDeviceSelector(): String;


    close(): void;
    addListener(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LampAvailabilityChangedEventArgs {
    isAvailable: Boolean;
    constructor();

  }

