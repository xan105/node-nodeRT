/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.services.store
  name: "windows.services.store",
  externalReference: [
    "Windows.Foundation",
    "Windows.System",
    "Windows.ApplicationModel",
    "Windows.Web.Http",
  ]
};

export const {
  StorePurchaseStatus,
  StoreConsumableStatus,
  StoreDurationUnit,
  StorePackageUpdateState,
  StoreCanLicenseStatus,
  StoreQueueItemState,
  StoreQueueItemExtendedState,
  StoreQueueItemKind,
  StoreUninstallStorePackageStatus,
  StoreProduct,
  StoreProductPagedQueryResult,
  StorePurchaseProperties,
  StoreLicense,
  StoreImage,
  StoreVideo,
  StoreSku,
  StorePrice,
  StorePurchaseResult,
  StoreAvailability,
  StoreCollectionData,
  StoreSubscriptionInfo,
  StoreContext,
  StoreSendRequestResult,
  StoreAppLicense,
  StoreProductResult,
  StoreProductQueryResult,
  StoreConsumableResult,
  StoreAcquireLicenseResult,
  StorePackageUpdate,
  StorePackageUpdateResult,
  StoreCanAcquireLicenseResult,
  StoreProductOptions,
  StoreQueueItem,
  StorePackageInstallOptions,
  StoreUninstallStorePackageResult,
  StoreQueueItemStatus,
  StoreQueueItemCompletedEventArgs,
  StorePackageLicense,
  StoreRequestHelper,
} = load(namespace.name);

reference(namespace.externalReference);
