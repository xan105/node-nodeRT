/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.datatransfer
  name: "windows.applicationmodel.datatransfer",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Storage",
    "Windows.Security.EnterpriseData",
  ]
};

export const {
  DataPackageOperation,
  ShareUITheme,
  StandardDataFormats,
  DataPackagePropertySetView,
  DataPackagePropertySet,
  DataProviderDeferral,
  DataProviderRequest,
  OperationCompletedEventArgs,
  ShareProviderOperation,
  ShareProvider,
  DataPackageView,
  ShareTargetInfo,
  ShareCompletedEventArgs,
  DataPackage,
  HtmlFormatHelper,
  Clipboard,
  ShareUIOptions,
  DataRequestDeferral,
  DataRequest,
  DataRequestedEventArgs,
  ShareProvidersRequestedEventArgs,
  TargetApplicationChosenEventArgs,
  DataTransferManager,
  SharedStorageAccessManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as dragdrop from "./applicationmodel.datatransfer.dragdrop.js";
export * as sharetarget from "./applicationmodel.datatransfer.sharetarget.js";