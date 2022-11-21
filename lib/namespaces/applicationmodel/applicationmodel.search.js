/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.search
  name: "windows.applicationmodel.search",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Storage",
  ]
};

export const {
  SearchPaneVisibilityChangedEventArgs,
  ISearchPaneQueryChangedEventArgs,
  SearchPaneQueryChangedEventArgs,
  SearchPaneQuerySubmittedEventArgs,
  SearchPaneResultSuggestionChosenEventArgs,
  SearchPaneSuggestionsRequestDeferral,
  SearchPaneSuggestionsRequest,
  SearchPaneSuggestionsRequestedEventArgs,
  SearchPane,
  SearchPaneQueryLinguisticDetails,
  SearchSuggestionCollection,
  LocalContentSuggestionSettings,
  SearchQueryLinguisticDetails,
  SearchSuggestionsRequestDeferral,
  SearchSuggestionsRequest,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./applicationmodel.search.core.js";