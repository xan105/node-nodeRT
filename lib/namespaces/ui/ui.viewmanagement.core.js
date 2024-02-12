/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.viewmanagement.core
  name: "windows.ui.viewmanagement.core",
  externalReference: [
    "Windows.UI",
  ]
};

export const {
  CoreInputViewKind,
  CoreInputViewOcclusionKind,
  CoreInputViewXYFocusTransferDirection,
  CoreFrameworkInputView,
  CoreFrameworkInputViewAnimationStartingEventArgs,
  CoreFrameworkInputViewOcclusionsChangedEventArgs,
  CoreInputView,
  CoreInputViewAnimationStartingEventArgs,
  CoreInputViewHidingEventArgs,
  CoreInputViewOcclusion,
  CoreInputViewOcclusionsChangedEventArgs,
  CoreInputViewShowingEventArgs,
  CoreInputViewTransferringXYFocusEventArgs,
  UISettingsController,
} = load(namespace.name);

reference(namespace.externalReference);
