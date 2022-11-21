/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.automation
  name: "windows.ui.xaml.automation",
  externalReference: [
    "Windows.UI.Xaml",
    "Windows.UI.Xaml.Automation.Peers",
    "Windows.UI.Core",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);

export * as peers from "./ui.xaml.automation.peers.js";
export * as provider from "./ui.xaml.automation.provider.js";
export * as text from "./ui.xaml.automation.text.js";