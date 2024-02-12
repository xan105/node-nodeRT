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
    "Windows.Storage",
    "Windows.Storage.Streams",
  ]
};

export const {
  ISearchPaneQueryChangedEventArgs,
  LocalContentSuggestionSettings,
  SearchPane,
  SearchPaneQueryChangedEventArgs,
  SearchPaneQueryLinguisticDetails,
  SearchPaneQuerySubmittedEventArgs,
  SearchPaneResultSuggestionChosenEventArgs,
  SearchPaneSuggestionsRequest,
  SearchPaneSuggestionsRequestDeferral,
  SearchPaneSuggestionsRequestedEventArgs,
  SearchPaneVisibilityChangedEventArgs,
  SearchQueryLinguisticDetails,
  SearchSuggestionCollection,
  SearchSuggestionsRequest,
  SearchSuggestionsRequestDeferral,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./applicationmodel.search.core.js";