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
  ]
};

export const {
  MagnetometerAccuracy,
  ActivityType,
  ActivitySensorReadingConfidence,
  SensorReadingType,
  AccelerometerReadingType,
  SensorOptimizationGoal,
  SensorType,
  SimpleOrientation,
  PedometerStepKind,
  ISensorDataThreshold,
  SensorDataThresholdTriggerDetails,
  Accelerometer,
  AccelerometerReading,
  AccelerometerReadingChangedEventArgs,
  AccelerometerShakenEventArgs,
  Inclinometer,
  InclinometerReading,
  InclinometerReadingChangedEventArgs,
  Gyrometer,
  GyrometerReading,
  GyrometerReadingChangedEventArgs,
  Compass,
  CompassReading,
  CompassReadingChangedEventArgs,
  LightSensor,
  LightSensorReading,
  LightSensorReadingChangedEventArgs,
  SensorRotationMatrix,
  SensorQuaternion,
  OrientationSensor,
  OrientationSensorReading,
  OrientationSensorReadingChangedEventArgs,
  SimpleOrientationSensor,
  SimpleOrientationSensorOrientationChangedEventArgs,
  Magnetometer,
  MagnetometerReading,
  MagnetometerReadingChangedEventArgs,
  ActivitySensor,
  ActivitySensorReading,
  ActivitySensorReadingChangedEventArgs,
  ActivitySensorReadingChangeReport,
  ActivitySensorTriggerDetails,
  Barometer,
  BarometerReading,
  BarometerReadingChangedEventArgs,
  PedometerReading,
  Pedometer,
  PedometerReadingChangedEventArgs,
  PedometerDataThreshold,
  ProximitySensor,
  ProximitySensorReading,
  ProximitySensorReadingChangedEventArgs,
  ProximitySensorDisplayOnOffController,
  ProximitySensorDataThreshold,
  Altimeter,
  AltimeterReading,
  AltimeterReadingChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as custom from "./devices.sensors.custom.js";