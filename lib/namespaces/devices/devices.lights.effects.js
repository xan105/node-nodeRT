/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.lights.effects
  name: "windows.devices.lights.effects",
  externalReference: [
    "Windows.Devices.Lights",
    "Windows.Graphics.Imaging",
    "Windows.UI",
  ]
};

export const {
  LampArrayEffectCompletionBehavior,
  LampArrayEffectStartMode,
  LampArrayRepetitionMode,
  ILampArrayEffect,
  LampArrayBitmapEffect,
  LampArrayBitmapRequestedEventArgs,
  LampArrayBlinkEffect,
  LampArrayColorRampEffect,
  LampArrayCustomEffect,
  LampArrayEffectPlaylist,
  LampArraySolidEffect,
  LampArrayUpdateRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
