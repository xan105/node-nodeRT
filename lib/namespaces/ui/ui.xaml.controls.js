/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls
  name: "windows.ui.xaml.controls",
  externalReference: [
    "Windows.Foundation",
    "Windows.ApplicationModel.DataTransfer",
    "Windows.UI.Xaml.Controls.Primitives",
    "Windows.UI.Xaml",
    "Windows.Web",
    "Windows.UI.Text",
    "Windows.ApplicationModel.Search",
    "Windows.System",
    "Windows.UI.Core",
    "Windows.UI.Xaml.Media",
    "Windows.UI.Xaml.Input",
    "Windows.UI.Xaml.Media.Animation",
    "Windows.UI.Xaml.Media.Media3D",
    "Windows.Media.Capture",
    "Windows.Media.PlayTo",
    "Windows.Media.Casting",
    "Windows.UI.Composition",
    "Windows.UI.Xaml.Documents",
    "Windows.UI.Input.Inking",
    "Windows.Media.Protection",
    "Windows.Storage.Streams",
    "Windows.Media.Core",
    "Windows.Media.Playback",
    "Windows.UI.Xaml.Navigation",
    "Windows.Web.Http",
    "Windows.ApplicationModel.Contacts",
    "Windows.UI.Xaml.Data",
    "Windows.UI.Xaml.Controls",
    "Windows.Globalization",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);

export * as maps from "./ui.xaml.controls.maps.js";
export * as primitives from "./ui.xaml.controls.primitives.js";