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
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Storage",
  ]
};

export const {
  PhotoImportAccessMode,
  PhotoImportConnectionTransport,
  PhotoImportContentType,
  PhotoImportContentTypeFilter,
  PhotoImportImportMode,
  PhotoImportItemSelectionMode,
  PhotoImportPowerSource,
  PhotoImportSourceType,
  PhotoImportStage,
  PhotoImportStorageMediumType,
  PhotoImportSubfolderCreationMode,
  PhotoImportSubfolderDateFormat,
  PhotoImportDeleteImportedItemsFromSourceResult,
  PhotoImportFindItemsResult,
  PhotoImportImportItemsResult,
  PhotoImportItem,
  PhotoImportItemImportedEventArgs,
  PhotoImportManager,
  PhotoImportOperation,
  PhotoImportSelectionChangedEventArgs,
  PhotoImportSession,
  PhotoImportSidecar,
  PhotoImportSource,
  PhotoImportStorageMedium,
  PhotoImportVideoSegment,
} = load(namespace.name);

reference(namespace.externalReference);
