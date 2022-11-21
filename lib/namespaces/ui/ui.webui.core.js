/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.webui.core
  name: "windows.ui.webui.core",
  externalReference: [
    "Windows.Foundation",
  ]
};

export const {
  WebUICommandBarClosedDisplayMode,
  WebUICommandBarItemInvokedEventArgs,
  IWebUICommandBarElement,
  IWebUICommandBarIcon,
  WebUICommandBarIconButton,
  WebUICommandBarConfirmationButton,
  WebUICommandBarBitmapIcon,
  WebUICommandBarSymbolIcon,
  WebUICommandBarSizeChangedEventArgs,
  WebUICommandBar,
} = load(namespace.name);

reference(namespace.externalReference);
