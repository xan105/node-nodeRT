/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.sensors
  name: "windows.devices.sensors",
  externalReference: [
    "Windows.Graphics.Display",
    "Windows.Foundation",
  ]
};

export const {
  AccelerometerReadingType,
  ActivitySensorReadingConfidence,
  ActivityType,
  HumanEngagement,
  HumanPresence,
  MagnetometerAccuracy,
  PedometerStepKind,
  SensorOptimizationGoal,
  SensorReadingType,
  SensorType,
  SimpleOrientation,
  Accelerometer,
  AccelerometerDataThreshold,
  AccelerometerReading,
  AccelerometerReadingChangedEventArgs,
  AccelerometerShakenEventArgs,
  ActivitySensor,
  ActivitySensorReading,
  ActivitySensorReadingChangeReport,
  ActivitySensorReadingChangedEventArgs,
  ActivitySensorTriggerDetails,
  Altimeter,
  AltimeterReading,
  AltimeterReadingChangedEventArgs,
  Barometer,
  BarometerDataThreshold,
  BarometerReading,
  BarometerReadingChangedEventArgs,
  Compass,
  CompassDataThreshold,
  CompassReading,
  CompassReadingChangedEventArgs,
  Gyrometer,
  GyrometerDataThreshold,
  GyrometerReading,
  GyrometerReadingChangedEventArgs,
  HingeAngleReading,
  HingeAngleSensor,
  HingeAngleSensorReadingChangedEventArgs,
  HumanPresenceFeatures,
  HumanPresenceSensor,
  HumanPresenceSensorReading,
  HumanPresenceSensorReadingChangedEventArgs,
  HumanPresenceSettings,
  ISensorDataThreshold,
  Inclinometer,
  InclinometerDataThreshold,
  InclinometerReading,
  InclinometerReadingChangedEventArgs,
  LightSensor,
  LightSensorDataThreshold,
  LightSensorReading,
  LightSensorReadingChangedEventArgs,
  Magnetometer,
  MagnetometerDataThreshold,
  MagnetometerReading,
  MagnetometerReadingChangedEventArgs,
  OrientationSensor,
  OrientationSensorReading,
  OrientationSensorReadingChangedEventArgs,
  Pedometer,
  PedometerDataThreshold,
  PedometerReading,
  PedometerReadingChangedEventArgs,
  ProximitySensor,
  ProximitySensorDataThreshold,
  ProximitySensorDisplayOnOffController,
  ProximitySensorReading,
  ProximitySensorReadingChangedEventArgs,
  SensorDataThresholdTriggerDetails,
  SensorQuaternion,
  SensorRotationMatrix,
  SimpleOrientationSensor,
  SimpleOrientationSensorOrientationChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as custom from "./devices.sensors.custom.js";