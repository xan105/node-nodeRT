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
    "Windows.UI.ViewManagement",
    "Windows.UI.Text",
    "Windows.Globalization",
  ]
};

export const {
  CoreTextFormatUpdatingReason,
  CoreTextFormatUpdatingResult,
  CoreTextInputPaneDisplayPolicy,
  CoreTextInputScope,
  CoreTextSelectionUpdatingResult,
  CoreTextTextUpdatingResult,
  CoreTextCompositionCompletedEventArgs,
  CoreTextCompositionSegment,
  CoreTextCompositionStartedEventArgs,
  CoreTextEditContext,
  CoreTextFormatUpdatingEventArgs,
  CoreTextLayoutBounds,
  CoreTextLayoutRequest,
  CoreTextLayoutRequestedEventArgs,
  CoreTextSelectionRequest,
  CoreTextSelectionRequestedEventArgs,
  CoreTextSelectionUpdatingEventArgs,
  CoreTextServicesConstants,
  CoreTextServicesManager,
  CoreTextTextRequest,
  CoreTextTextRequestedEventArgs,
  CoreTextTextUpdatingEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
