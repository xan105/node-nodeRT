/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.printing.printticket
  name: "windows.graphics.printing.printticket",
  externalReference: [
    "Windows.Data.Xml.Dom",
    "Windows.Foundation",
  ]
};

export const {
  PrintTicketFeatureSelectionType,
  PrintTicketParameterDataType,
  PrintTicketValueType,
  PrintTicketValue,
  PrintTicketOption,
  PrintTicketFeature,
  PrintTicketParameterDefinition,
  PrintTicketCapabilities,
  PrintTicketParameterInitializer,
  WorkflowPrintTicketValidationResult,
  WorkflowPrintTicket,
} = load(namespace.name);

reference(namespace.externalReference);
