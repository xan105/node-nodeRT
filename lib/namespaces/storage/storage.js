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
    "Windows.Foundation",
    "Windows.Storage.Provider",
    "Windows.Storage.Streams",
    "Windows.Storage.FileProperties",
    "Windows.Storage.Search",
  ]
};

export const {
  ApplicationDataCreateDisposition,
  ApplicationDataLocality,
  CreationCollisionOption,
  FileAccessMode,
  FileAttributes,
  KnownFolderId,
  KnownFoldersAccessStatus,
  KnownLibraryId,
  NameCollisionOption,
  StorageDeleteOption,
  StorageItemTypes,
  StorageLibraryChangeType,
  StorageOpenOptions,
  StreamedFileFailureMode,
  AppDataPaths,
  ApplicationData,
  ApplicationDataCompositeValue,
  ApplicationDataContainer,
  ApplicationDataContainerSettings,
  CachedFileManager,
  DownloadsFolder,
  FileIO,
  IStorageFile,
  IStorageFile2,
  IStorageFilePropertiesWithAvailability,
  IStorageFolder,
  IStorageFolder2,
  IStorageItem,
  IStorageItem2,
  IStorageItemProperties,
  IStorageItemProperties2,
  IStorageItemPropertiesWithProvider,
  IStreamedFileDataRequest,
  KnownFolders,
  PathIO,
  SetVersionDeferral,
  SetVersionRequest,
  StorageFile,
  StorageFolder,
  StorageLibrary,
  StorageLibraryChange,
  StorageLibraryChangeReader,
  StorageLibraryChangeTracker,
  StorageLibraryChangeTrackerOptions,
  StorageLibraryLastChangeId,
  StorageProvider,
  StorageStreamTransaction,
  StreamedFileDataRequest,
  SystemAudioProperties,
  SystemDataPaths,
  SystemGPSProperties,
  SystemImageProperties,
  SystemMediaProperties,
  SystemMusicProperties,
  SystemPhotoProperties,
  SystemProperties,
  SystemVideoProperties,
  UserDataPaths,
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