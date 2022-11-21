/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.storage.search
  name: "windows.storage.search",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Storage",
    "Windows.Storage.FileProperties",
  ]
};

export const {
  DateStackOption,
  IndexerOption,
  FolderDepth,
  CommonFileQuery,
  CommonFolderQuery,
  IndexedState,
  ContentIndexer,
  IIndexableContent,
  ValueAndLanguage,
  ContentIndexerQuery,
  IndexableContent,
  QueryOptions,
  IStorageQueryResultBase,
  IStorageFolderQueryOperations,
  StorageFileQueryResult,
  StorageFolderQueryResult,
  StorageItemQueryResult,
  SortEntryVector,
  StorageLibraryContentChangedTriggerDetails,
  StorageLibraryChangeTrackerTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
