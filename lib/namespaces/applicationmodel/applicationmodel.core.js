/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.core
  name: "windows.applicationmodel.core",
  externalReference: [
    "Windows.ApplicationModel",
    "Windows.System",
    "Windows.ApplicationModel.Activation",
    "Windows.Foundation",
    "Windows.UI.Core",
  ]
};

export const {
  AppRestartFailureReason,
  AppListEntry,
  CoreApplication,
  CoreApplicationView,
  CoreApplicationViewTitleBar,
  HostedViewClosingEventArgs,
  ICoreApplicationUnhandledError,
  IFrameworkView,
  IFrameworkViewSource,
  UnhandledError,
  UnhandledErrorDetectedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
