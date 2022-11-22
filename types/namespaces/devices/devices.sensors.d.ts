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
    deviceId: String;
    sensorType: SensorType;
    constructor();

  }

  export class Accelerometer {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    readingType: AccelerometerReadingType;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Accelerometer) => void): void ;


    static getDeviceSelector(readingType: AccelerometerReadingType): String;


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
    accelerationX: Number;
    accelerationY: Number;
    accelerationZ: Number;
    timestamp: Date;
    performanceCount: Number;
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
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    readingType: SensorReadingType;
    reportLatency: Number;
    maxBatchSize: Number;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Inclinometer) => void): void ;


    static getDeviceSelector(readingType: SensorReadingType): String;


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
    pitchDegrees: Number;
    rollDegrees: Number;
    timestamp: Date;
    yawDegrees: Number;
    performanceCount: Number;
    properties: Object;
    yawAccuracy: MagnetometerAccuracy;
    constructor();

  }

  export class InclinometerReadingChangedEventArgs {
    reading: InclinometerReading;
    constructor();

  }

  export class Gyrometer {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Gyrometer) => void): void ;


    static getDeviceSelector(): String;


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
    angularVelocityX: Number;
    angularVelocityY: Number;
    angularVelocityZ: Number;
    timestamp: Date;
    performanceCount: Number;
    properties: Object;
    constructor();

  }

  export class GyrometerReadingChangedEventArgs {
    reading: GyrometerReading;
    constructor();

  }

  export class Compass {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Compass) => void): void ;


    static getDeviceSelector(): String;


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
    headingMagneticNorth: Number;
    headingTrueNorth: Number;
    timestamp: Date;
    performanceCount: Number;
    properties: Object;
    headingAccuracy: MagnetometerAccuracy;
    constructor();

  }

  export class CompassReadingChangedEventArgs {
    reading: CompassReading;
    constructor();

  }

  export class LightSensor {
    reportInterval: Number;
    minimumReportInterval: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: LightSensor) => void): void ;


    static getDeviceSelector(): String;


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
    illuminanceInLux: Number;
    timestamp: Date;
    performanceCount: Number;
    properties: Object;
    constructor();

  }

  export class LightSensorReadingChangedEventArgs {
    reading: LightSensorReading;
    constructor();

  }

  export class SensorRotationMatrix {
    m11: Number;
    m12: Number;
    m13: Number;
    m21: Number;
    m22: Number;
    m23: Number;
    m31: Number;
    m32: Number;
    m33: Number;
    constructor();

  }

  export class SensorQuaternion {
    w: Number;
    x: Number;
    y: Number;
    z: Number;
    constructor();

  }

  export class OrientationSensor {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    readingType: SensorReadingType;
    reportLatency: Number;
    maxBatchSize: Number;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: OrientationSensor) => void): void ;


    static getDeviceSelector(readingType: SensorReadingType): String;
    static getDeviceSelector(readingType: SensorReadingType, optimizationGoal: SensorOptimizationGoal): String;


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
    performanceCount: Number;
    properties: Object;
    yawAccuracy: MagnetometerAccuracy;
    constructor();

  }

  export class OrientationSensorReadingChangedEventArgs {
    reading: OrientationSensorReading;
    constructor();

  }

  export class SimpleOrientationSensor {
    readingTransform: Number;
    deviceId: String;
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
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Magnetometer) => void): void ;


    static getDeviceSelector(): String;


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
    magneticFieldX: Number;
    magneticFieldY: Number;
    magneticFieldZ: Number;
    timestamp: Date;
    performanceCount: Number;
    properties: Object;
    constructor();

  }

  export class MagnetometerReadingChangedEventArgs {
    reading: MagnetometerReading;
    constructor();

  }

  export class ActivitySensor {
    deviceId: String;
    minimumReportInterval: Number;
    powerInMilliwatts: Number;
    subscribedActivities: Object;
    supportedActivities: Object;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: ActivitySensor) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: ActivitySensor) => void): void ;


    static getSystemHistoryAsync(fromTime: Date, callback: (error: Error, result: Object) => void): void ;
    static getSystemHistoryAsync(fromTime: Date, duration: Number, callback: (error: Error, result: Object) => void): void ;


    static getDeviceSelector(): String;


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
    reportInterval: Number;
    deviceId: String;
    minimumReportInterval: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Barometer) => void): void ;


    static getDeviceSelector(): String;


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
    stationPressureInHectopascals: Number;
    timestamp: Date;
    performanceCount: Number;
    properties: Object;
    constructor();

  }

  export class BarometerReadingChangedEventArgs {
    reading: BarometerReading;
    constructor();

  }

  export class PedometerReading {
    cumulativeSteps: Number;
    cumulativeStepsDuration: Number;
    stepKind: PedometerStepKind;
    timestamp: Date;
    constructor();

  }

  export class Pedometer {
    reportInterval: Number;
    deviceId: String;
    minimumReportInterval: Number;
    powerInMilliwatts: Number;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: Pedometer) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: Pedometer) => void): void ;


    static getSystemHistoryAsync(fromTime: Date, callback: (error: Error, result: Object) => void): void ;
    static getSystemHistoryAsync(fromTime: Date, duration: Number, callback: (error: Error, result: Object) => void): void ;


    static getReadingsFromTriggerDetails(triggerDetails: SensorDataThresholdTriggerDetails): Object;


    static getDeviceSelector(): String;


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
    constructor(sensor: Pedometer, stepGoal: Number);

  }

  export class ProximitySensor {
    deviceId: String;
    maxDistanceInMillimeters: Number;
    minDistanceInMillimeters: Number;
    constructor();

    static getReadingsFromTriggerDetails(triggerDetails: SensorDataThresholdTriggerDetails): Object;


    static getDeviceSelector(): String;


    static fromId(sensorId: String): ProximitySensor;


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
    distanceInMillimeters: Number;
    isDetected: Boolean;
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
    reportInterval: Number;
    deviceId: String;
    minimumReportInterval: Number;
    reportLatency: Number;
    maxBatchSize: Number;
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
    altitudeChangeInMeters: Number;
    timestamp: Date;
    performanceCount: Number;
    properties: Object;
    constructor();

  }

  export class AltimeterReadingChangedEventArgs {
    reading: AltimeterReading;
    constructor();

  }

export * as custom from "./devices.sensors.custom.js";