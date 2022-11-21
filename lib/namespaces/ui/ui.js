/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui
  name: "windows.ui",
  externalReference: [
  ]
};

export const {
  ColorHelper,
  Colors,
} = load(namespace.name);

reference(namespace.externalReference);

export * as applicationsettings from "./ui.applicationsettings.js";
export * as composition from "./ui.composition.js";
export * as core from "./ui.core.js";
export * as input from "./ui.input.js";
export * as notifications from "./ui.notifications.js";
export * as popups from "./ui.popups.js";
export * as shell from "./ui.shell.js";
export * as startscreen from "./ui.startscreen.js";
export * as text from "./ui.text.js";
export * as viewmanagement from "./ui.viewmanagement.js";
export * as webui from "./ui.webui.js";
export * as xaml from "./ui.xaml.js";