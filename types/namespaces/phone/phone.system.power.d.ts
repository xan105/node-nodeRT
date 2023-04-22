  export enum PowerSavingMode {
    off,
    on,
  }

  export class PowerManager {
    static powerSavingMode: PowerSavingMode;
    static powerSavingModeEnabled: boolean;
    constructor();

    addListener(type: "PowerSavingModeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PowerSavingModeChanged", listener: (ev: Event) => void): void ;
    on(type: "PowerSavingModeChanged", listener: (ev: Event) => void): void ;
    off(type: "PowerSavingModeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

