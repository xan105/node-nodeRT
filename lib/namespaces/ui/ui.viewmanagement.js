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
    "Windows.UI.Core",
    "Windows.Foundation",
    "Windows.Devices.Enumeration",
    "Windows.UI.Popups",
  ]
};

export const {
  ApplicationViewState,
  ApplicationViewOrientation,
  ApplicationViewSwitchingOptions,
  ViewSizePreference,
  ApplicationViewBoundsMode,
  FullScreenSystemOverlayMode,
  ApplicationViewWindowingMode,
  ApplicationViewMode,
  UserInteractionMode,
  HandPreference,
  UIColorType,
  UIElementType,
  ViewModePreferences,
  ApplicationView,
  ApplicationViewConsolidatedEventArgs,
  ApplicationViewTitleBar,
  ApplicationViewSwitcher,
  ActivationViewSwitcher,
  ApplicationViewTransferContext,
  InputPaneVisibilityEventArgs,
  InputPane,
  ProjectionManager,
  UIViewSettings,
  AccessibilitySettings,
  UISettings,
  StatusBar,
  StatusBarProgressIndicator,
  ApplicationViewScaling,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.viewmanagement.core.js";