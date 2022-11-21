/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.core
  name: "windows.ui.core",
  externalReference: [
    "Windows.System",
    "Windows.Foundation",
    "Windows.UI.Input",
    "Windows.UI.Popups",
  ]
};

export const {
  AppViewBackButtonVisibility,
  CoreWindowActivationState,
  CoreWindowActivationMode,
  CoreCursorType,
  CoreDispatcherPriority,
  CoreProcessEventsOption,
  CoreWindowFlowDirection,
  CoreVirtualKeyStates,
  CoreAcceleratorKeyEventType,
  CoreProximityEvaluationScore,
  CoreInputDeviceTypes,
  BackRequestedEventArgs,
  SystemNavigationManager,
  ICoreWindowEventArgs,
  ICoreWindow,
  CoreDispatcher,
  CoreCursor,
  CoreWindow,
  WindowActivatedEventArgs,
  AutomationProviderRequestedEventArgs,
  CharacterReceivedEventArgs,
  CoreWindowEventArgs,
  InputEnabledEventArgs,
  KeyEventArgs,
  PointerEventArgs,
  TouchHitTestingEventArgs,
  WindowSizeChangedEventArgs,
  VisibilityChangedEventArgs,
  ClosestInteractiveBoundsRequestedEventArgs,
  IdleDispatchedHandlerArgs,
  ICoreAcceleratorKeys,
  AcceleratorKeyEventArgs,
  CoreAcceleratorKeys,
  IInitializeWithCoreWindow,
  CoreWindowResizeManager,
  ICoreInputSourceBase,
  ICorePointerInputSource,
  ICorePointerInputSource2,
  CoreComponentInputSource,
  CoreIndependentInputSource,
  ICorePointerRedirector,
  CoreWindowPopupShowingEventArgs,
  CoreWindowDialog,
  CoreWindowFlyout,
} = load(namespace.name);

reference(namespace.externalReference);

export * as animationmetrics from "./ui.core.animationmetrics.js";
export * as preview from "./ui.core.preview.js";