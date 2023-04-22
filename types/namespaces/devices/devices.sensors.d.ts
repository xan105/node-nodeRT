  export enum MagnetometerAccuracy {
    unknown,
    unreliable,
    approximate,
    high,
  }

  export enum ActivityType {
    unknown,
    idle,
    stationary,
    fidgeting,
    walking,
    running,
    inVehicle,
    biking,
  }

  export enum ActivitySensorReadingConfidence {
    high,
    low,
  }

  export enum SensorReadingType {
    absolute,
    relative,
  }

  export enum AccelerometerReadingType {
    standard,
    linear,
    gravity,
  }

  export enum SensorOptimizationGoal {
    precision,
    powerEfficiency,
  }

  export enum SensorType {
    accelerometer,
    activitySensor,
    barometer,
    compass,
    customSensor,
    gyroscope,
    proximitySensor,
    inclinometer,
    lightSensor,
    orientationSensor,
    pedometer,
    relativeInclinometer,
    relativeOrientationSensor,
    simpleOrientationSensor,
  }

  export enum SimpleOrientation {
    notRotated,
    rotated90DegreesCounterclockwise,
    rotated180DegreesCounterclockwise,
    rotated270DegreesCounterclockwise,
    faceup,
    facedown,
  }

  export enum PedometerStepKind {
    unknown,
    walking,
    running,
  }

  export class ISensorDataThreshold {
    constructor();

  }

  export class SensorDataThresholdTriggerDetails {
    deviceId: string;
    sensorType: SensorType;
    constructor();

  }

  export class Accelerometer {
    reportInterval: number;
    minimumReportInterval: number;
    readingTransform: number;
    reportLatency: number;
    maxBatchSize: number;
    readingType: AccelerometerReadingType;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Accelerometer) => void): void ;


    static getDeviceSelector(readingType: AccelerometerReadingType): string;


    static getDefault(readingType: AccelerometerReadingType): Accelerometer;
    static getDefault(): Accelerometer;


    getCurrentReading(): AccelerometerReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Shaken", listener: (ev: Event) => void): void ;
    removeListener(type: "Shaken", listener: (ev: Event) => void): void ;
    on(type: "Shaken", listener: (ev: Event) => void): void ;
    off(type: "Shaken", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AccelerometerReading {
    accelerationX: number;
    accelerationY: number;
    accelerationZ: number;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    constructor();

  }

  export class AccelerometerReadingChangedEventArgs {
    reading: AccelerometerReading;
    constructor();

  }

  export class AccelerometerShakenEventArgs {
    timestamp: Date;
    constructor();

  }

  export class Inclinometer {
    reportInterval: number;
    minimumReportInterval: number;
    readingTransform: number;
    readingType: SensorReadingType;
    reportLatency: number;
    maxBatchSize: number;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Inclinometer) => void): void ;


    static getDeviceSelector(readingType: SensorReadingType): string;


    static getDefault(sensorReadingtype: SensorReadingType): Inclinometer;
    static getDefault(): Inclinometer;


    static getDefaultForRelativeReadings(): Inclinometer;


    getCurrentReading(): InclinometerReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class InclinometerReading {
    pitchDegrees: number;
    rollDegrees: number;
    timestamp: Date;
    yawDegrees: number;
    performanceCount: number;
    properties: Object;
    yawAccuracy: MagnetometerAccuracy;
    constructor();

  }

  export class InclinometerReadingChangedEventArgs {
    reading: InclinometerReading;
    constructor();

  }

  export class Gyrometer {
    reportInterval: number;
    minimumReportInterval: number;
    readingTransform: number;
    reportLatency: number;
    maxBatchSize: number;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Gyrometer) => void): void ;


    static getDeviceSelector(): string;


    static getDefault(): Gyrometer;


    getCurrentReading(): GyrometerReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GyrometerReading {
    angularVelocityX: number;
    angularVelocityY: number;
    angularVelocityZ: number;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    constructor();

  }

  export class GyrometerReadingChangedEventArgs {
    reading: GyrometerReading;
    constructor();

  }

  export class Compass {
    reportInterval: number;
    minimumReportInterval: number;
    readingTransform: number;
    reportLatency: number;
    maxBatchSize: number;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Compass) => void): void ;


    static getDeviceSelector(): string;


    static getDefault(): Compass;


    getCurrentReading(): CompassReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CompassReading {
    headingMagneticNorth: number;
    headingTrueNorth: number;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    headingAccuracy: MagnetometerAccuracy;
    constructor();

  }

  export class CompassReadingChangedEventArgs {
    reading: CompassReading;
    constructor();

  }

  export class LightSensor {
    reportInterval: number;
    minimumReportInterval: number;
    reportLatency: number;
    maxBatchSize: number;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: LightSensor) => void): void ;


    static getDeviceSelector(): string;


    static getDefault(): LightSensor;


    getCurrentReading(): LightSensorReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LightSensorReading {
    illuminanceInLux: number;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    constructor();

  }

  export class LightSensorReadingChangedEventArgs {
    reading: LightSensorReading;
    constructor();

  }

  export class SensorRotationMatrix {
    m11: number;
    m12: number;
    m13: number;
    m21: number;
    m22: number;
    m23: number;
    m31: number;
    m32: number;
    m33: number;
    constructor();

  }

  export class SensorQuaternion {
    w: number;
    x: number;
    y: number;
    z: number;
    constructor();

  }

  export class OrientationSensor {
    reportInterval: number;
    minimumReportInterval: number;
    readingTransform: number;
    readingType: SensorReadingType;
    reportLatency: number;
    maxBatchSize: number;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: OrientationSensor) => void): void ;


    static getDeviceSelector(readingType: SensorReadingType): string;
    static getDeviceSelector(readingType: SensorReadingType, optimizationGoal: SensorOptimizationGoal): string;


    static getDefault(sensorReadingtype: SensorReadingType): OrientationSensor;
    static getDefault(sensorReadingType: SensorReadingType, optimizationGoal: SensorOptimizationGoal): OrientationSensor;
    static getDefault(): OrientationSensor;


    static getDefaultForRelativeReadings(): OrientationSensor;


    getCurrentReading(): OrientationSensorReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class OrientationSensorReading {
    quaternion: SensorQuaternion;
    rotationMatrix: SensorRotationMatrix;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    yawAccuracy: MagnetometerAccuracy;
    constructor();

  }

  export class OrientationSensorReadingChangedEventArgs {
    reading: OrientationSensorReading;
    constructor();

  }

  export class SimpleOrientationSensor {
    readingTransform: number;
    deviceId: string;
    constructor();

    static getDefault(): SimpleOrientationSensor;


    getCurrentOrientation(): SimpleOrientation;

    addListener(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    on(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    off(type: "OrientationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SimpleOrientationSensorOrientationChangedEventArgs {
    orientation: SimpleOrientation;
    timestamp: Date;
    constructor();

  }

  export class Magnetometer {
    reportInterval: number;
    minimumReportInterval: number;
    readingTransform: number;
    reportLatency: number;
    maxBatchSize: number;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Magnetometer) => void): void ;


    static getDeviceSelector(): string;


    static getDefault(): Magnetometer;


    getCurrentReading(): MagnetometerReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MagnetometerReading {
    directionalAccuracy: MagnetometerAccuracy;
    magneticFieldX: number;
    magneticFieldY: number;
    magneticFieldZ: number;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    constructor();

  }

  export class MagnetometerReadingChangedEventArgs {
    reading: MagnetometerReading;
    constructor();

  }

  export class ActivitySensor {
    deviceId: string;
    minimumReportInterval: number;
    powerInMilliwatts: number;
    subscribedActivities: Object;
    supportedActivities: Object;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: ActivitySensor) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: ActivitySensor) => void): void ;


    static getSystemHistoryAsync(fromTime: Date, callback: (error: Error, result: Object) => void): void ;
    static getSystemHistoryAsync(fromTime: Date, duration: number, callback: (error: Error, result: Object) => void): void ;


    static getDeviceSelector(): string;


    getCurrentReadingAsync(callback: (error: Error, result: ActivitySensorReading) => void): void ;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ActivitySensorReading {
    activity: ActivityType;
    confidence: ActivitySensorReadingConfidence;
    timestamp: Date;
    constructor();

  }

  export class ActivitySensorReadingChangedEventArgs {
    reading: ActivitySensorReading;
    constructor();

  }

  export class ActivitySensorReadingChangeReport {
    reading: ActivitySensorReading;
    constructor();

  }

  export class ActivitySensorTriggerDetails {
    constructor();

    readReports(): Object;

  }

  export class Barometer {
    reportInterval: number;
    deviceId: string;
    minimumReportInterval: number;
    reportLatency: number;
    maxBatchSize: number;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Barometer) => void): void ;


    static getDeviceSelector(): string;


    static getDefault(): Barometer;


    getCurrentReading(): BarometerReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BarometerReading {
    stationPressureInHectopascals: number;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    constructor();

  }

  export class BarometerReadingChangedEventArgs {
    reading: BarometerReading;
    constructor();

  }

  export class PedometerReading {
    cumulativeSteps: number;
    cumulativeStepsDuration: number;
    stepKind: PedometerStepKind;
    timestamp: Date;
    constructor();

  }

  export class Pedometer {
    reportInterval: number;
    deviceId: string;
    minimumReportInterval: number;
    powerInMilliwatts: number;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: Pedometer) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: Pedometer) => void): void ;


    static getSystemHistoryAsync(fromTime: Date, callback: (error: Error, result: Object) => void): void ;
    static getSystemHistoryAsync(fromTime: Date, duration: number, callback: (error: Error, result: Object) => void): void ;


    static getReadingsFromTriggerDetails(triggerDetails: SensorDataThresholdTriggerDetails): Object;


    static getDeviceSelector(): string;


    getCurrentReadings(): Object;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PedometerReadingChangedEventArgs {
    reading: PedometerReading;
    constructor();

  }

  export class PedometerDataThreshold {
    constructor();
    constructor(sensor: Pedometer, stepGoal: number);

  }

  export class ProximitySensor {
    deviceId: string;
    maxDistanceInMillimeters: number;
    minDistanceInMillimeters: number;
    constructor();

    static getReadingsFromTriggerDetails(triggerDetails: SensorDataThresholdTriggerDetails): Object;


    static getDeviceSelector(): string;


    static fromId(sensorId: string): ProximitySensor;


    getCurrentReading(): ProximitySensorReading;

    createDisplayOnOffController(): ProximitySensorDisplayOnOffController;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ProximitySensorReading {
    distanceInMillimeters: number;
    isDetected: boolean;
    timestamp: Date;
    constructor();

  }

  export class ProximitySensorReadingChangedEventArgs {
    reading: ProximitySensorReading;
    constructor();

  }

  export class ProximitySensorDisplayOnOffController {
    constructor();

    close(): void;
  }

  export class ProximitySensorDataThreshold {
    constructor();
    constructor(sensor: ProximitySensor);

  }

  export class Altimeter {
    reportInterval: number;
    deviceId: string;
    minimumReportInterval: number;
    reportLatency: number;
    maxBatchSize: number;
    constructor();

    static getDefault(): Altimeter;


    getCurrentReading(): AltimeterReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AltimeterReading {
    altitudeChangeInMeters: number;
    timestamp: Date;
    performanceCount: number;
    properties: Object;
    constructor();

  }

  export class AltimeterReadingChangedEventArgs {
    reading: AltimeterReading;
    constructor();

  }

export * as custom from "./devices.sensors.custom.js";