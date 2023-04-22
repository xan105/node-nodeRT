  export class CustomSensor {
    reportInterval: number;
    deviceId: string;
    minimumReportInterval: number;
    reportLatency: number;
    maxBatchSize: number;
    constructor();

    static fromIdAsync(sensorId: string, callback: (error: Error, result: CustomSensor) => void): void ;


    static getDeviceSelector(interfaceId: string): string;


    getCurrentReading(): CustomSensorReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CustomSensorReading {
    properties: Object;
    timestamp: Date;
    performanceCount: number;
    constructor();

  }

  export class CustomSensorReadingChangedEventArgs {
    reading: CustomSensorReading;
    constructor();

  }

