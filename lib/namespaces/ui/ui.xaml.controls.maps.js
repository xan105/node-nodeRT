/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.controls.maps
  name: "windows.ui.xaml.controls.maps",
  externalReference: [
    "Windows.Devices.Geolocation",
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.UI.Core",
    "Windows.UI.Xaml",
    "Windows.Services.Maps",
    "Windows.UI.Xaml.Media",
    "Windows.UI.Text",
    "Windows.UI.Xaml.Input",
    "Windows.UI.Xaml.Media.Animation",
    "Windows.UI.Xaml.Media.Media3D",
    "Windows.UI.Xaml.Controls.Primitives",
    "Windows.Services.Maps.LocalSearch",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);
