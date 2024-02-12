/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.search.core
  name: "windows.applicationmodel.search.core",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.Search",
  ]
};

export const {
  SearchSuggestionKind,
  RequestingFocusOnKeyboardInputEventArgs,
  SearchSuggestion,
  SearchSuggestionManager,
  SearchSuggestionsRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
