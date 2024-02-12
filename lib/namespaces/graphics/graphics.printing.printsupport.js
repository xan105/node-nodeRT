/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.printing.printsupport
  name: "windows.graphics.printing.printsupport",
  externalReference: [
    "Windows.Devices.Printers",
    "Windows.Data.Xml.Dom",
    "Windows.Foundation",
    "Windows.Graphics.Printing.PrintTicket",
    "Windows.ApplicationModel",
    "Windows.UI.Shell",
    "Windows.ApplicationModel.Activation",
    "Windows.System",
  ]
};

export const {
  SettingsLaunchKind,
  WorkflowPrintTicketValidationStatus,
  PrintSupportExtensionSession,
  PrintSupportExtensionTriggerDetails,
  PrintSupportPrintDeviceCapabilitiesChangedEventArgs,
  PrintSupportPrintDeviceCapabilitiesUpdatePolicy,
  PrintSupportPrintTicketElement,
  PrintSupportPrintTicketValidationRequestedEventArgs,
  PrintSupportPrinterSelectedEventArgs,
  PrintSupportSessionInfo,
  PrintSupportSettingsActivatedEventArgs,
  PrintSupportSettingsUISession,
} = load(namespace.name);

reference(namespace.externalReference);
