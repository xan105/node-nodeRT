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
  CachedFileOptions,
  CachedFileTarget,
  FileUpdateStatus,
  ReadActivationMode,
  StorageProviderHardlinkPolicy,
  StorageProviderHydrationPolicy,
  StorageProviderHydrationPolicyModifier,
  StorageProviderInSyncPolicy,
  StorageProviderPopulationPolicy,
  StorageProviderProtectionMode,
  StorageProviderState,
  StorageProviderUICommandState,
  StorageProviderUriSourceStatus,
  UIStatus,
  WriteActivationMode,
  CachedFileUpdater,
  CachedFileUpdaterUI,
  FileUpdateRequest,
  FileUpdateRequestDeferral,
  FileUpdateRequestedEventArgs,
  IStorageProviderItemPropertySource,
  IStorageProviderPropertyCapabilities,
  IStorageProviderStatusUISource,
  IStorageProviderStatusUISourceFactory,
  IStorageProviderUICommand,
  IStorageProviderUriSource,
  StorageProviderFileTypeInfo,
  StorageProviderGetContentInfoForPathResult,
  StorageProviderGetPathForContentUriResult,
  StorageProviderItemProperties,
  StorageProviderItemProperty,
  StorageProviderItemPropertyDefinition,
  StorageProviderMoreInfoUI,
  StorageProviderQuotaUI,
  StorageProviderStatusUI,
  StorageProviderSyncRootInfo,
  StorageProviderSyncRootManager,
} = load(namespace.name);

reference(namespace.externalReference);
