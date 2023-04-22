  export class BatteryReport {
    chargeRateInMilliwatts: number;
    designCapacityInMilliwattHours: number;
    fullChargeCapacityInMilliwattHours: number;
    remainingCapacityInMilliwattHours: number;
    status: number;
    constructor();

  }

  export class Battery {
    static aggregateBattery: Battery;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Battery) => void): void ;


    static getDeviceSelector(): string;


    getReport(): BatteryReport;

    addListener(type: "ReportUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "ReportUpdated", listener: (ev: Event) => void): void ;
    on(type: "ReportUpdated", listener: (ev: Event) => void): void ;
    off(type: "ReportUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

