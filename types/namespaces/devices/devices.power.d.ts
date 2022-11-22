  export class BatteryReport {
    chargeRateInMilliwatts: Number;
    designCapacityInMilliwattHours: Number;
    fullChargeCapacityInMilliwattHours: Number;
    remainingCapacityInMilliwattHours: Number;
    status: Number;
    constructor();

  }

  export class Battery {
    static aggregateBattery: Battery;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Battery) => void): void ;


    static getDeviceSelector(): String;


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

