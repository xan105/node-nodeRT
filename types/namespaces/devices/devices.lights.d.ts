  export class Color {
    constructor();
  }

  export class Lamp {
    isEnabled: boolean;
    color: Object;
    brightnessLevel: number;
    deviceId: string;
    isColorSettable: boolean;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Lamp) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: Lamp) => void): void ;


    static getDeviceSelector(): string;


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
    isAvailable: boolean;
    constructor();

  }

