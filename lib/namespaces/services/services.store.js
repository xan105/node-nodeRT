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
    "Windows.System",
    "Windows.ApplicationModel",
    "Windows.Foundation",
    "Windows.Web.Http",
  ]
};

export const {
  StoreCanLicenseStatus,
  StoreConsumableStatus,
  StoreDurationUnit,
  StorePackageUpdateState,
  StorePurchaseStatus,
  StoreQueueItemExtendedState,
  StoreQueueItemKind,
  StoreQueueItemState,
  StoreRateAndReviewStatus,
  StoreUninstallStorePackageStatus,
  StoreAcquireLicenseResult,
  StoreAppLicense,
  StoreAvailability,
  StoreCanAcquireLicenseResult,
  StoreCollectionData,
  StoreConsumableResult,
  StoreContext,
  StoreImage,
  StoreLicense,
  StorePackageInstallOptions,
  StorePackageLicense,
  StorePackageUpdate,
  StorePackageUpdateResult,
  StorePrice,
  StoreProduct,
  StoreProductOptions,
  StoreProductPagedQueryResult,
  StoreProductQueryResult,
  StoreProductResult,
  StorePurchaseProperties,
  StorePurchaseResult,
  StoreQueueItem,
  StoreQueueItemCompletedEventArgs,
  StoreQueueItemStatus,
  StoreRateAndReviewResult,
  StoreRequestHelper,
  StoreSendRequestResult,
  StoreSku,
  StoreSubscriptionInfo,
  StoreUninstallStorePackageResult,
  StoreVideo,
} = load(namespace.name);

reference(namespace.externalReference);
