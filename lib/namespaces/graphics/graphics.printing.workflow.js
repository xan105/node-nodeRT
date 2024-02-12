/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.printing.workflow
  name: "windows.graphics.printing.workflow",
  externalReference: [
    "Windows.Graphics.Printing.PrintTicket",
    "Windows.Foundation",
    "Windows.ApplicationModel.Activation",
    "Windows.System",
    "Windows.Devices.Printers",
    "Windows.Storage.Streams",
    "Windows.Storage",
  ]
};

export const {
  PdlConversionHostBasedProcessingOperations,
  PrintWorkflowAttributesMergePolicy,
  PrintWorkflowJobAbortReason,
  PrintWorkflowPdlConversionType,
  PrintWorkflowPrinterJobStatus,
  PrintWorkflowSessionStatus,
  PrintWorkflowSubmittedStatus,
  PrintWorkflowUICompletionStatus,
  PrintWorkflowBackgroundSession,
  PrintWorkflowBackgroundSetupRequestedEventArgs,
  PrintWorkflowConfiguration,
  PrintWorkflowForegroundSession,
  PrintWorkflowForegroundSetupRequestedEventArgs,
  PrintWorkflowJobActivatedEventArgs,
  PrintWorkflowJobBackgroundSession,
  PrintWorkflowJobNotificationEventArgs,
  PrintWorkflowJobStartingEventArgs,
  PrintWorkflowJobTriggerDetails,
  PrintWorkflowJobUISession,
  PrintWorkflowObjectModelSourceFileContent,
  PrintWorkflowObjectModelTargetPackage,
  PrintWorkflowPdlConverter,
  PrintWorkflowPdlDataAvailableEventArgs,
  PrintWorkflowPdlModificationRequestedEventArgs,
  PrintWorkflowPdlSourceContent,
  PrintWorkflowPdlTargetStream,
  PrintWorkflowPrinterJob,
  PrintWorkflowSourceContent,
  PrintWorkflowSpoolStreamContent,
  PrintWorkflowStreamTarget,
  PrintWorkflowSubmittedEventArgs,
  PrintWorkflowSubmittedOperation,
  PrintWorkflowTarget,
  PrintWorkflowTriggerDetails,
  PrintWorkflowUIActivatedEventArgs,
  PrintWorkflowUILauncher,
  PrintWorkflowXpsDataAvailableEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
