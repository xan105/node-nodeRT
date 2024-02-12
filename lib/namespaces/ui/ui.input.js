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
    "Windows.Devices.Input",
    "Windows.Foundation",
    "Windows.UI.Core",
    "Windows.Devices.Haptics",
    "Windows.Storage.Streams",
    "Windows.System",
  ]
};

export const {
  CrossSlidingState,
  DraggingState,
  EdgeGestureKind,
  GazeInputAccessStatus,
  GestureSettings,
  HoldingState,
  InputActivationState,
  PointerUpdateKind,
  RadialControllerMenuKnownIcon,
  RadialControllerSystemMenuItemKind,
  AttachableInputObject,
  CrossSlidingEventArgs,
  DraggingEventArgs,
  EdgeGesture,
  EdgeGestureEventArgs,
  GestureRecognizer,
  HoldingEventArgs,
  IPointerPointTransform,
  InputActivationListener,
  InputActivationListenerActivationChangedEventArgs,
  KeyboardDeliveryInterceptor,
  ManipulationCompletedEventArgs,
  ManipulationInertiaStartingEventArgs,
  ManipulationStartedEventArgs,
  ManipulationUpdatedEventArgs,
  MouseWheelParameters,
  PointerPoint,
  PointerPointProperties,
  PointerVisualizationSettings,
  RadialController,
  RadialControllerButtonClickedEventArgs,
  RadialControllerButtonHoldingEventArgs,
  RadialControllerButtonPressedEventArgs,
  RadialControllerButtonReleasedEventArgs,
  RadialControllerConfiguration,
  RadialControllerControlAcquiredEventArgs,
  RadialControllerMenu,
  RadialControllerMenuItem,
  RadialControllerRotationChangedEventArgs,
  RadialControllerScreenContact,
  RadialControllerScreenContactContinuedEventArgs,
  RadialControllerScreenContactEndedEventArgs,
  RadialControllerScreenContactStartedEventArgs,
  RightTappedEventArgs,
  SystemButtonEventController,
  SystemFunctionButtonEventArgs,
  SystemFunctionLockChangedEventArgs,
  SystemFunctionLockIndicatorChangedEventArgs,
  TappedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.input.core.js";
export * as inking from "./ui.input.inking.js";
export * as spatial from "./ui.input.spatial.js";