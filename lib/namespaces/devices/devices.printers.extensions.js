/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.printers.extensions
  name: "windows.devices.printers.extensions",
  externalReference: [
  ]
};

export const {
  Print3DWorkflowDetail,
  Print3DWorkflowStatus,
  Print3DWorkflow,
  Print3DWorkflowPrintRequestedEventArgs,
  Print3DWorkflowPrinterChangedEventArgs,
  PrintExtensionContext,
  PrintNotificationEventDetails,
  PrintTaskConfiguration,
  PrintTaskConfigurationSaveRequest,
  PrintTaskConfigurationSaveRequestedDeferral,
  PrintTaskConfigurationSaveRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
