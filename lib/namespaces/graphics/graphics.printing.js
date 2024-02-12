/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.printing
  name: "windows.graphics.printing",
  externalReference: [
    "Windows.ApplicationModel.DataTransfer",
    "Windows.Storage.Streams",
  ]
};

export const {
  PrintBinding,
  PrintBordering,
  PrintCollation,
  PrintColorMode,
  PrintDuplex,
  PrintHolePunch,
  PrintMediaSize,
  PrintMediaType,
  PrintOrientation,
  PrintQuality,
  PrintStaple,
  PrintTaskCompletion,
  IPrintDocumentSource,
  IPrintTaskOptionsCore,
  IPrintTaskOptionsCoreProperties,
  IPrintTaskOptionsCoreUIConfiguration,
  PrintManager,
  PrintPageInfo,
  PrintPageRange,
  PrintPageRangeOptions,
  PrintTask,
  PrintTaskCompletedEventArgs,
  PrintTaskOptions,
  PrintTaskProgressingEventArgs,
  PrintTaskRequest,
  PrintTaskRequestedDeferral,
  PrintTaskRequestedEventArgs,
  PrintTaskSourceRequestedArgs,
  PrintTaskSourceRequestedDeferral,
  StandardPrintTaskOptions,
} = load(namespace.name);

reference(namespace.externalReference);

export * as optiondetails from "./graphics.printing.optiondetails.js";
export * as printsupport from "./graphics.printing.printsupport.js";
export * as printticket from "./graphics.printing.printticket.js";
export * as workflow from "./graphics.printing.workflow.js";