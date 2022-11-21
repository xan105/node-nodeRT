/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.storage.provider
  name: "windows.storage.provider",
  externalReference: [
    "Windows.Storage",
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  CachedFileTarget,
  UIStatus,
  FileUpdateStatus,
  CachedFileOptions,
  ReadActivationMode,
  WriteActivationMode,
  StorageProviderHydrationPolicy,
  StorageProviderPopulationPolicy,
  StorageProviderHydrationPolicyModifier,
  StorageProviderInSyncPolicy,
  StorageProviderHardlinkPolicy,
  StorageProviderProtectionMode,
  StorageProviderUriSourceStatus,
  CachedFileUpdaterUI,
  FileUpdateRequestedEventArgs,
  FileUpdateRequest,
  FileUpdateRequestDeferral,
  CachedFileUpdater,
  IStorageProviderPropertyCapabilities,
  StorageProviderItemProperty,
  StorageProviderItemProperties,
  IStorageProviderItemPropertySource,
  StorageProviderItemPropertyDefinition,
  StorageProviderSyncRootInfo,
  StorageProviderGetContentInfoForPathResult,
  StorageProviderGetPathForContentUriResult,
  IStorageProviderUriSource,
  StorageProviderSyncRootManager,
} = load(namespace.name);

reference(namespace.externalReference);
