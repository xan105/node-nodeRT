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
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.Activation",
    "Windows.System",
  ]
};

export const {
  PrintWorkflowSessionStatus,
  PrintWorkflowSubmittedStatus,
  PrintWorkflowBackgroundSession,
  PrintWorkflowBackgroundSetupRequestedEventArgs,
  PrintWorkflowSubmittedEventArgs,
  PrintWorkflowForegroundSession,
  PrintWorkflowForegroundSetupRequestedEventArgs,
  PrintWorkflowXpsDataAvailableEventArgs,
  PrintWorkflowConfiguration,
  PrintWorkflowSourceContent,
  PrintWorkflowSubmittedOperation,
  PrintWorkflowTarget,
  PrintWorkflowStreamTarget,
  PrintWorkflowObjectModelTargetPackage,
  PrintWorkflowSpoolStreamContent,
  PrintWorkflowObjectModelSourceFileContent,
  PrintWorkflowUIActivatedEventArgs,
  PrintWorkflowTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
