  export class CustomSensor {
    reportInterval: Number;
    deviceId: String;
    minimumReportInterval: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    constructor();

    static fromIdAsync(sensorId: String, callback: (error: Error, result: CustomSensor) => void): void ;


    static getDeviceSelector(interfaceId: String): String;


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
    performanceCount: Number;
    constructor();

  }

  export class CustomSensorReadingChangedEventArgs {
    reading: CustomSensorReading;
    constructor();

  }

