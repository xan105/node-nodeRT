/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.storage
  name: "windows.storage",
  externalReference: [
    "Windows.System",
    "Windows.Storage.FileProperties",
    "Windows.Storage.Search",
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Storage.Provider",
  ]
};

export const {
  KnownLibraryId,
  KnownFolderId,
  CreationCollisionOption,
  NameCollisionOption,
  StorageDeleteOption,
  StorageItemTypes,
  FileAttributes,
  FileAccessMode,
  StorageLibraryChangeType,
  StreamedFileFailureMode,
  StorageOpenOptions,
  ApplicationDataLocality,
  ApplicationDataCreateDisposition,
  StorageLibrary,
  StorageFolder,
  StorageLibraryChangeTracker,
  KnownFolders,
  UserDataPaths,
  AppDataPaths,
  SystemDataPaths,
  StorageFile,
  DownloadsFolder,
  IStorageItem,
  StorageLibraryChange,
  StorageLibraryChangeReader,
  IStreamedFileDataRequest,
  StreamedFileDataRequest,
  StorageStreamTransaction,
  IStorageFolder,
  IStorageFile,
  IStorageItem2,
  IStorageItemProperties,
  IStorageItemProperties2,
  IStorageItemPropertiesWithProvider,
  StorageProvider,
  IStorageFilePropertiesWithAvailability,
  IStorageFolder2,
  IStorageFile2,
  FileIO,
  PathIO,
  CachedFileManager,
  SystemAudioProperties,
  SystemGPSProperties,
  SystemImageProperties,
  SystemMediaProperties,
  SystemMusicProperties,
  SystemPhotoProperties,
  SystemVideoProperties,
  SystemProperties,
  ApplicationData,
  SetVersionRequest,
  ApplicationDataContainer,
  SetVersionDeferral,
  ApplicationDataContainerSettings,
  ApplicationDataCompositeValue,
} = load(namespace.name);

reference(namespace.externalReference);

export * as accesscache from "./storage.accesscache.js";
export * as bulkaccess from "./storage.bulkaccess.js";
export * as compression from "./storage.compression.js";
export * as fileproperties from "./storage.fileproperties.js";
export * as pickers from "./storage.pickers.js";
export * as provider from "./storage.provider.js";
export * as search from "./storage.search.js";
export * as streams from "./storage.streams.js";