/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.shell
  name: "windows.ui.shell",
  externalReference: [
    "Windows.Foundation",
    "Windows.ApplicationModel.Core",
    "Windows.UI.StartScreen",
  ]
};

export const {
  SecurityAppKind,
  SecurityAppState,
  SecurityAppSubstatus,
  ShareWindowCommand,
  AdaptiveCardBuilder,
  FocusSession,
  FocusSessionManager,
  IAdaptiveCard,
  IAdaptiveCardBuilderStatics,
  SecurityAppManager,
  ShareWindowCommandEventArgs,
  ShareWindowCommandSource,
  TaskbarManager,
} = load(namespace.name);

reference(namespace.externalReference);
