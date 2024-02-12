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
  IWebViewControl2,
  WebViewControlContentLoadingEventArgs,
  WebViewControlDOMContentLoadedEventArgs,
  WebViewControlDeferredPermissionRequest,
  WebViewControlLongRunningScriptDetectedEventArgs,
  WebViewControlNavigationCompletedEventArgs,
  WebViewControlNavigationStartingEventArgs,
  WebViewControlNewWindowRequestedEventArgs,
  WebViewControlPermissionRequest,
  WebViewControlPermissionRequestedEventArgs,
  WebViewControlScriptNotifyEventArgs,
  WebViewControlSettings,
  WebViewControlUnsupportedUriSchemeIdentifiedEventArgs,
  WebViewControlUnviewableContentIdentifiedEventArgs,
  WebViewControlWebResourceRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as interop from "./web.ui.interop.js";