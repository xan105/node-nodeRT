/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.display
  name: "windows.graphics.display",
  externalReference: [
    "Windows.Storage.Streams",
  ]
};

export const {
  AdvancedColorKind,
  HdrMetadataFormat,
  DisplayOrientations,
  ResolutionScale,
  DisplayBrightnessScenario,
  DisplayBrightnessOverrideOptions,
  DisplayColorOverrideScenario,
  DisplayBrightnessOverrideScenario,
  DisplayInformation,
  AdvancedColorInfo,
  DisplayProperties,
  BrightnessOverride,
  BrightnessOverrideSettings,
  ColorOverrideSettings,
  DisplayEnhancementOverrideCapabilities,
  DisplayEnhancementOverrideCapabilitiesChangedEventArgs,
  DisplayEnhancementOverride,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./graphics.display.core.js";