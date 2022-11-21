/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.text.core
  name: "windows.ui.text.core",
  externalReference: [
    "Windows.Foundation",
    "Windows.Globalization",
    "Windows.UI.ViewManagement",
    "Windows.UI.Text",
  ]
};

export const {
  CoreTextInputScope,
  CoreTextInputPaneDisplayPolicy,
  CoreTextTextUpdatingResult,
  CoreTextSelectionUpdatingResult,
  CoreTextFormatUpdatingResult,
  CoreTextFormatUpdatingReason,
  CoreTextTextRequest,
  CoreTextSelectionRequest,
  CoreTextLayoutBounds,
  CoreTextLayoutRequest,
  CoreTextCompositionSegment,
  CoreTextEditContext,
  CoreTextTextRequestedEventArgs,
  CoreTextSelectionRequestedEventArgs,
  CoreTextLayoutRequestedEventArgs,
  CoreTextTextUpdatingEventArgs,
  CoreTextSelectionUpdatingEventArgs,
  CoreTextFormatUpdatingEventArgs,
  CoreTextCompositionStartedEventArgs,
  CoreTextCompositionCompletedEventArgs,
  CoreTextServicesManager,
  CoreTextServicesConstants,
} = load(namespace.name);

reference(namespace.externalReference);
