/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.gaming.input
  name: "windows.gaming.input",
  externalReference: [
    "Windows.System",
    "Windows.Devices.Power",
    "Windows.Gaming.Input.ForceFeedback",
    "Windows.Devices.Haptics",
  ]
};

export const {
  ArcadeStickButtons,
  FlightStickButtons,
  GameControllerButtonLabel,
  GameControllerSwitchKind,
  GameControllerSwitchPosition,
  GamepadButtons,
  OptionalUINavigationButtons,
  RacingWheelButtons,
  RequiredUINavigationButtons,
  ArcadeStick,
  FlightStick,
  Gamepad,
  Headset,
  IGameController,
  IGameControllerBatteryInfo,
  RacingWheel,
  RawGameController,
  UINavigationController,
} = load(namespace.name);

reference(namespace.externalReference);

export * as custom from "./gaming.input.custom.js";
export * as forcefeedback from "./gaming.input.forcefeedback.js";