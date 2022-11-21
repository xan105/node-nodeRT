/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml
  name: "windows.ui.xaml",
  externalReference: [
    "Windows.UI.Xaml.Controls",
    "Windows.UI.Core",
    "Windows.UI.Xaml.Media.Imaging",
    "Windows.Graphics.Imaging",
    "Windows.ApplicationModel.Core",
    "Windows.ApplicationModel.DataTransfer",
    "Windows.ApplicationModel.DataTransfer.DragDrop",
    "Windows.Foundation",
    "Windows.UI.Xaml.Input",
    "Windows.UI.Xaml.Media",
    "Windows.UI.Xaml.Media.Animation",
    "Windows.UI.Xaml.Media.Media3D",
    "Windows.UI.Xaml.Controls.Primitives",
    "Windows.UI.Input",
    "Windows.UI.Xaml.Automation.Peers",
    "Windows.UI.Xaml.Data",
    "Windows.ApplicationModel",
    "Windows.ApplicationModel.Activation",
    "Windows.UI.Composition",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);

export * as automation from "./ui.xaml.automation.js";
export * as controls from "./ui.xaml.controls.js";
export * as data from "./ui.xaml.data.js";
export * as documents from "./ui.xaml.documents.js";
export * as hosting from "./ui.xaml.hosting.js";
export * as input from "./ui.xaml.input.js";
export * as interop from "./ui.xaml.interop.js";
export * as markup from "./ui.xaml.markup.js";
export * as media from "./ui.xaml.media.js";
export * as navigation from "./ui.xaml.navigation.js";
export * as printing from "./ui.xaml.printing.js";
export * as resources from "./ui.xaml.resources.js";
export * as shapes from "./ui.xaml.shapes.js";