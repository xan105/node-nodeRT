/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.networking.backgroundtransfer
  name: "windows.networking.backgroundtransfer",
  externalReference: [
    "Windows.UI.Notifications",
    "Windows.Security.Credentials",
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.Background",
    "Windows.Web",
  ]
};

export const {
  BackgroundTransferBehavior,
  BackgroundTransferCostPolicy,
  BackgroundTransferPriority,
  BackgroundTransferStatus,
  BackgroundDownloader,
  BackgroundTransferCompletionGroup,
  BackgroundTransferCompletionGroupTriggerDetails,
  BackgroundTransferContentPart,
  BackgroundTransferError,
  BackgroundTransferGroup,
  BackgroundTransferRangesDownloadedEventArgs,
  BackgroundUploader,
  ContentPrefetcher,
  DownloadOperation,
  IBackgroundTransferBase,
  IBackgroundTransferContentPartFactory,
  IBackgroundTransferOperation,
  IBackgroundTransferOperationPriority,
  ResponseInformation,
  UnconstrainedTransferRequestResult,
  UploadOperation,
} = load(namespace.name);

reference(namespace.externalReference);
