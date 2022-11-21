/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web.ui.interop
  name: "windows.web.ui.interop",
  externalReference: [
    "Windows.Foundation",
    "Windows.Web.UI",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.DataTransfer",
    "Windows.Web",
    "Windows.Web.Http",
    "Windows.UI.Core",
    "Windows.System",
  ]
};

export const {
  WebViewControlMoveFocusReason,
  WebViewControlProcessCapabilityState,
  WebViewControlAcceleratorKeyRoutingStage,
  WebViewControlProcess,
  WebViewControl,
  WebViewControlMoveFocusRequestedEventArgs,
  WebViewControlAcceleratorKeyPressedEventArgs,
  WebViewControlProcessOptions,
} = load(namespace.name);

reference(namespace.externalReference);
