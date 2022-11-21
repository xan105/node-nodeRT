/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.store.preview
  name: "windows.applicationmodel.store.preview",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.System",
    "Windows.Security.Authentication.Web.Core",
    "Windows.UI.Xaml",
    "Windows.Security.Credentials",
  ]
};

export const {
  StorePreviewProductPurchaseStatus,
  StoreSystemFeature,
  StoreLogOptions,
  StorePreviewSkuInfo,
  StorePreviewPurchaseResults,
  StorePreviewProductInfo,
  StoreHardwareManufacturerInfo,
  StorePreview,
  StoreConfiguration,
  WebAuthenticationCoreManagerHelper,
} = load(namespace.name);

reference(namespace.externalReference);

export * as installcontrol from "./applicationmodel.store.preview.installcontrol.js";