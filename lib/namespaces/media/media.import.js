/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.import
  name: "windows.media.import",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Storage",
    "Windows.Foundation",
  ]
};

export const {
  PhotoImportStage,
  PhotoImportAccessMode,
  PhotoImportImportMode,
  PhotoImportSourceType,
  PhotoImportContentType,
  PhotoImportPowerSource,
  PhotoImportStorageMediumType,
  PhotoImportContentTypeFilter,
  PhotoImportItemSelectionMode,
  PhotoImportSubfolderDateFormat,
  PhotoImportConnectionTransport,
  PhotoImportSubfolderCreationMode,
  PhotoImportSource,
  PhotoImportOperation,
  PhotoImportManager,
  PhotoImportSession,
  PhotoImportFindItemsResult,
  PhotoImportImportItemsResult,
  PhotoImportDeleteImportedItemsFromSourceResult,
  PhotoImportStorageMedium,
  PhotoImportSidecar,
  PhotoImportVideoSegment,
  PhotoImportItem,
  PhotoImportSelectionChangedEventArgs,
  PhotoImportItemImportedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
