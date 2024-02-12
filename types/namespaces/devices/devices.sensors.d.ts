  export enum AccelerometerReadingType {
    standard,
    linear,
    gravity,
  }

  export enum ActivitySensorReadingConfidence {
    high,
    low,
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

  export enum HumanEngagement {
    unknown,
    engaged,
    unengaged,
  }

  export enum HumanPresence {
    unknown,
    present,
    notPresent,
  }

  export enum MagnetometerAccuracy {
    unknown,
    unreliable,
    approximate,
    high,
  }

  export enum PedometerStepKind {
    unknown,
    walking,
    running,
  }

  export enum SensorOptimizationGoal {
    precision,
    powerEfficiency,
  }

  export enum SensorReadingType {
    absolute,
    relative,
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

  export class Accelerometer {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    readingType: AccelerometerReadingType;
    reportThreshold: AccelerometerDataThreshold;
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

  export class AccelerometerDataThreshold {
    zAxisInGForce: Number;
    yAxisInGForce: Number;
    xAxisInGForce: Number;
    constructor();

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

  export class ActivitySensorReadingChangeReport {
    reading: ActivitySensorReading;
    constructor();

  }

  export class ActivitySensorReadingChangedEventArgs {
    reading: ActivitySensorReading;
    constructor();

  }

  export class ActivitySensorTriggerDetails {
    constructor();

    readReports(): Object;

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

  export class Barometer {
    reportInterval: Number;
    deviceId: String;
    minimumReportInterval: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    reportThreshold: BarometerDataThreshold;
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

  export class BarometerDataThreshold {
    hectopascals: Number;
    constructor();

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

  export class Compass {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    reportThreshold: CompassDataThreshold;
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

  export class CompassDataThreshold {
    degrees: Number;
    constructor();

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

  export class Gyrometer {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    reportThreshold: GyrometerDataThreshold;
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

  export class GyrometerDataThreshold {
    zAxisInDegreesPerSecond: Number;
    yAxisInDegreesPerSecond: Number;
    xAxisInDegreesPerSecond: Number;
    constructor();

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

  export class HingeAngleReading {
    angleInDegrees: Number;
    properties: Object;
    timestamp: Date;
    constructor();

  }

  export class HingeAngleSensor {
    reportThresholdInDegrees: Number;
    deviceId: String;
    minReportThresholdInDegrees: Number;
    constructor();

    static getDefaultAsync(callback: (error: Error, result: HingeAngleSensor) => void): void ;


    static getRelatedToAdjacentPanelsAsync(firstPanelId: String, secondPanelId: String, callback: (error: Error, result: HingeAngleSensor) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: HingeAngleSensor) => void): void ;


    static getDeviceSelector(): String;


    getCurrentReadingAsync(callback: (error: Error, result: HingeAngleReading) => void): void ;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HingeAngleSensorReadingChangedEventArgs {
    reading: HingeAngleReading;
    constructor();

  }

  export class HumanPresenceFeatures {
    isAttentionAwareDimmingSupported: Boolean;
    isLockOnLeaveSupported: Boolean;
    isWakeOnApproachSupported: Boolean;
    sensorId: String;
    supportedWakeOrLockDistancesInMillimeters: Object;
    constructor();

  }

  export class HumanPresenceSensor {
    deviceId: String;
    maxDetectableDistanceInMillimeters: Number;
    minDetectableDistanceInMillimeters: Number;
    constructor();

    static fromIdAsync(sensorId: String, callback: (error: Error, result: HumanPresenceSensor) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: HumanPresenceSensor) => void): void ;


    static getDeviceSelector(): String;


    getCurrentReading(): HumanPresenceSensorReading;

    addListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    on(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    off(type: "ReadingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class HumanPresenceSensorReading {
    distanceInMillimeters: Number;
    engagement: HumanEngagement;
    presence: HumanPresence;
    timestamp: Date;
    constructor();

  }

  export class HumanPresenceSensorReadingChangedEventArgs {
    reading: HumanPresenceSensorReading;
    constructor();

  }

  export class HumanPresenceSettings {
    wakeOnApproachDistanceInMillimeters: Number;
    sensorId: String;
    lockOnLeaveTimeout: Number;
    lockOnLeaveDistanceInMillimeters: Number;
    isWakeOnApproachEnabled: Boolean;
    isLockOnLeaveEnabled: Boolean;
    isAttentionAwareDimmingEnabled: Boolean;
    constructor();

    static getCurrentSettingsAsync(callback: (error: Error, result: HumanPresenceSettings) => void): void ;


    static updateSettingsAsync(settings: HumanPresenceSettings, callback: (error: Error) => void): void ;


    static getSupportedFeaturesForSensorIdAsync(sensorId: String, callback: (error: Error, result: HumanPresenceFeatures) => void): void ;


    static getCurrentSettings(): HumanPresenceSettings;


    static updateSettings(settings: HumanPresenceSettings): void;


    static getSupportedFeaturesForSensorId(sensorId: String): HumanPresenceFeatures;


    static getSupportedLockOnLeaveTimeouts(): Object;


    addListener(type: "SettingsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SettingsChanged", listener: (ev: Event) => void): void ;
    on(type: "SettingsChanged", listener: (ev: Event) => void): void ;
    off(type: "SettingsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ISensorDataThreshold {
    constructor();

  }

  export class Inclinometer {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    readingType: SensorReadingType;
    reportLatency: Number;
    maxBatchSize: Number;
    reportThreshold: InclinometerDataThreshold;
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

  export class InclinometerDataThreshold {
    yawInDegrees: Number;
    rollInDegrees: Number;
    pitchInDegrees: Number;
    constructor();

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

  export class LightSensor {
    reportInterval: Number;
    minimumReportInterval: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    reportThreshold: LightSensorDataThreshold;
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

  export class LightSensorDataThreshold {
    luxPercentage: Number;
    absoluteLux: Number;
    constructor();

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

  export class Magnetometer {
    reportInterval: Number;
    minimumReportInterval: Number;
    readingTransform: Number;
    reportLatency: Number;
    maxBatchSize: Number;
    reportThreshold: MagnetometerDataThreshold;
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

  export class MagnetometerDataThreshold {
    zAxisMicroteslas: Number;
    yAxisMicroteslas: Number;
    xAxisMicroteslas: Number;
    constructor();

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

  export class PedometerDataThreshold {
    constructor();
    constructor(sensor: Pedometer, stepGoal: Number);

  }

  export class PedometerReading {
    cumulativeSteps: Number;
    cumulativeStepsDuration: Number;
    stepKind: PedometerStepKind;
    timestamp: Date;
    constructor();

  }

  export class PedometerReadingChangedEventArgs {
    reading: PedometerReading;
    constructor();

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

  export class ProximitySensorDataThreshold {
    constructor();
    constructor(sensor: ProximitySensor);

  }

  export class ProximitySensorDisplayOnOffController {
    constructor();

    close(): void;
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

  export class SensorDataThresholdTriggerDetails {
    deviceId: String;
    sensorType: SensorType;
    constructor();

  }

  export class SensorQuaternion {
    w: Number;
    x: Number;
    y: Number;
    z: Number;
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

  export class SimpleOrientationSensor {
    readingTransform: Number;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: SimpleOrientationSensor) => void): void ;


    static getDeviceSelector(): String;


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

export const AccelerometerReadingType: any;
export const ActivitySensorReadingConfidence: any;
export const ActivityType: any;
export const HumanEngagement: any;
export const HumanPresence: any;
export const MagnetometerAccuracy: any;
export const PedometerStepKind: any;
export const SensorOptimizationGoal: any;
export const SensorReadingType: any;
export const SensorType: any;
export const SimpleOrientation: any;
export const Accelerometer: any;
export const AccelerometerDataThreshold: any;
export const AccelerometerReading: any;
export const AccelerometerReadingChangedEventArgs: any;
export const AccelerometerShakenEventArgs: any;
export const ActivitySensor: any;
export const ActivitySensorReading: any;
export const ActivitySensorReadingChangeReport: any;
export const ActivitySensorReadingChangedEventArgs: any;
export const ActivitySensorTriggerDetails: any;
export const Altimeter: any;
export const AltimeterReading: any;
export const AltimeterReadingChangedEventArgs: any;
export const Barometer: any;
export const BarometerDataThreshold: any;
export const BarometerReading: any;
export const BarometerReadingChangedEventArgs: any;
export const Compass: any;
export const CompassDataThreshold: any;
export const CompassReading: any;
export const CompassReadingChangedEventArgs: any;
export const Gyrometer: any;
export const GyrometerDataThreshold: any;
export const GyrometerReading: any;
export const GyrometerReadingChangedEventArgs: any;
export const HingeAngleReading: any;
export const HingeAngleSensor: any;
export const HingeAngleSensorReadingChangedEventArgs: any;
export const HumanPresenceFeatures: any;
export const HumanPresenceSensor: any;
export const HumanPresenceSensorReading: any;
export const HumanPresenceSensorReadingChangedEventArgs: any;
export const HumanPresenceSettings: any;
export const ISensorDataThreshold: any;
export const Inclinometer: any;
export const InclinometerDataThreshold: any;
export const InclinometerReading: any;
export const InclinometerReadingChangedEventArgs: any;
export const LightSensor: any;
export const LightSensorDataThreshold: any;
export const LightSensorReading: any;
export const LightSensorReadingChangedEventArgs: any;
export const Magnetometer: any;
export const MagnetometerDataThreshold: any;
export const MagnetometerReading: any;
export const MagnetometerReadingChangedEventArgs: any;
export const OrientationSensor: any;
export const OrientationSensorReading: any;
export const OrientationSensorReadingChangedEventArgs: any;
export const Pedometer: any;
export const PedometerDataThreshold: any;
export const PedometerReading: any;
export const PedometerReadingChangedEventArgs: any;
export const ProximitySensor: any;
export const ProximitySensorDataThreshold: any;
export const ProximitySensorDisplayOnOffController: any;
export const ProximitySensorReading: any;
export const ProximitySensorReadingChangedEventArgs: any;
export const SensorDataThresholdTriggerDetails: any;
export const SensorQuaternion: any;
export const SensorRotationMatrix: any;
export const SimpleOrientationSensor: any;
export const SimpleOrientationSensorOrientationChangedEventArgs: any;
export * as custom from "./devices.sensors.custom.js";
