/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web.ui
  name: "windows.web.ui",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.DataTransfer",
    "Windows.Web",
    "Windows.Web.Http",
  ]
};

export const {
  WebViewControlPermissionState,
  WebViewControlPermissionType,
  IWebViewControl,
  WebViewControlSettings,
  WebViewControlDeferredPermissionRequest,
  WebViewControlNavigationStartingEventArgs,
  WebViewControlContentLoadingEventArgs,
  WebViewControlDOMContentLoadedEventArgs,
  WebViewControlNavigationCompletedEventArgs,
  WebViewControlScriptNotifyEventArgs,
  WebViewControlLongRunningScriptDetectedEventArgs,
  WebViewControlUnviewableContentIdentifiedEventArgs,
  WebViewControlPermissionRequestedEventArgs,
  WebViewControlUnsupportedUriSchemeIdentifiedEventArgs,
  WebViewControlNewWindowRequestedEventArgs,
  WebViewControlWebResourceRequestedEventArgs,
  WebViewControlPermissionRequest,
} = load(namespace.name);

reference(namespace.externalReference);

export * as interop from "./web.ui.interop.js";