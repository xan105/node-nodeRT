/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.viewmanagement
  name: "windows.ui.viewmanagement",
  externalReference: [
    "Windows.Foundation",
    "Windows.UI.WindowManagement",
    "Windows.UI",
    "Windows.UI.Core",
    "Windows.Devices.Enumeration",
    "Windows.UI.Popups",
  ]
};

export const {
  ApplicationViewBoundsMode,
  ApplicationViewMode,
  ApplicationViewOrientation,
  ApplicationViewState,
  ApplicationViewSwitchingOptions,
  ApplicationViewWindowingMode,
  FullScreenSystemOverlayMode,
  HandPreference,
  ScreenCaptureDisabledBehavior,
  UIColorType,
  UIElementType,
  UserInteractionMode,
  ViewSizePreference,
  AccessibilitySettings,
  ActivationViewSwitcher,
  ApplicationView,
  ApplicationViewConsolidatedEventArgs,
  ApplicationViewScaling,
  ApplicationViewSwitcher,
  ApplicationViewTitleBar,
  ApplicationViewTransferContext,
  InputPane,
  InputPaneVisibilityEventArgs,
  ProjectionManager,
  StatusBar,
  StatusBarProgressIndicator,
  UISettings,
  UISettingsAnimationsEnabledChangedEventArgs,
  UISettingsAutoHideScrollBarsChangedEventArgs,
  UISettingsMessageDurationChangedEventArgs,
  UIViewSettings,
  ViewModePreferences,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.viewmanagement.core.js";