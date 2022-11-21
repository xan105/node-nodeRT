/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.input
  name: "windows.ui.input",
  externalReference: [
    "Windows.UI.Core",
    "Windows.Devices.Input",
    "Windows.Foundation",
    "Windows.Devices.Haptics",
    "Windows.Storage.Streams",
  ]
};

export const {
  EdgeGestureKind,
  HoldingState,
  DraggingState,
  CrossSlidingState,
  GestureSettings,
  PointerUpdateKind,
  RadialControllerSystemMenuItemKind,
  RadialControllerMenuKnownIcon,
  EdgeGestureEventArgs,
  EdgeGesture,
  KeyboardDeliveryInterceptor,
  MouseWheelParameters,
  GestureRecognizer,
  TappedEventArgs,
  RightTappedEventArgs,
  HoldingEventArgs,
  DraggingEventArgs,
  ManipulationStartedEventArgs,
  ManipulationUpdatedEventArgs,
  ManipulationInertiaStartingEventArgs,
  ManipulationCompletedEventArgs,
  CrossSlidingEventArgs,
  PointerPoint,
  IPointerPointTransform,
  PointerPointProperties,
  PointerVisualizationSettings,
  RadialControllerScreenContact,
  RadialControllerMenu,
  RadialController,
  RadialControllerScreenContactStartedEventArgs,
  RadialControllerScreenContactContinuedEventArgs,
  RadialControllerRotationChangedEventArgs,
  RadialControllerButtonClickedEventArgs,
  RadialControllerControlAcquiredEventArgs,
  RadialControllerButtonPressedEventArgs,
  RadialControllerButtonHoldingEventArgs,
  RadialControllerButtonReleasedEventArgs,
  RadialControllerMenuItem,
  RadialControllerConfiguration,
  RadialControllerScreenContactEndedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.input.core.js";
export * as inking from "./ui.input.inking.js";
export * as preview from "./ui.input.preview.js";
export * as spatial from "./ui.input.spatial.js";