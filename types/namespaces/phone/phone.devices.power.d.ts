  export class Battery {
    remainingChargePercent: Number;
    remainingDischargeTime: Number;
    constructor();

    static getDefault(): Battery;


    addListener(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    on(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    off(type: "RemainingChargePercentChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

