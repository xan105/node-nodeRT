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
    "Windows.Security.Credentials",
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.Web",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.Background",
    "Windows.UI.Notifications",
  ]
};

export const {
  BackgroundTransferStatus,
  BackgroundTransferCostPolicy,
  BackgroundTransferPriority,
  BackgroundTransferBehavior,
  IBackgroundTransferBase,
  DownloadOperation,
  UnconstrainedTransferRequestResult,
  UploadOperation,
  BackgroundTransferGroup,
  BackgroundTransferCompletionGroup,
  BackgroundTransferContentPart,
  IBackgroundTransferOperation,
  ResponseInformation,
  IBackgroundTransferOperationPriority,
  BackgroundTransferRangesDownloadedEventArgs,
  BackgroundDownloader,
  BackgroundUploader,
  IBackgroundTransferContentPartFactory,
  BackgroundTransferError,
  ContentPrefetcher,
  BackgroundTransferCompletionGroupTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
