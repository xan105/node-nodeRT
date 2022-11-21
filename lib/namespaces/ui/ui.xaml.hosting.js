/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.xaml.hosting
  name: "windows.ui.xaml.hosting",
  externalReference: [
    "Windows.UI.Xaml",
    "Windows.UI.Composition",
    "Windows.UI.Xaml.Controls",
    "Windows.Foundation",
    "Windows.UI.Xaml.Controls.Primitives",
  ]
};

export const {
  DesignerAppViewState,
  ElementCompositionPreview,
  IXamlUIPresenterHost,
  IXamlUIPresenterHost2,
  IXamlUIPresenterHost3,
  DesignerAppExitedEventArgs,
  DesignerAppManager,
  DesignerAppView,
  XamlUIPresenter,
} = load(namespace.name);

reference(namespace.externalReference);
