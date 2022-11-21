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
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.DataTransfer",
  ]
};

export const {
  PrintMediaSize,
  PrintMediaType,
  PrintOrientation,
  PrintQuality,
  PrintColorMode,
  PrintDuplex,
  PrintCollation,
  PrintStaple,
  PrintHolePunch,
  PrintBinding,
  PrintBordering,
  PrintTaskCompletion,
  PrintPageRange,
  PrintPageRangeOptions,
  IPrintTaskOptionsCoreProperties,
  PrintPageInfo,
  IPrintTaskOptionsCoreUIConfiguration,
  IPrintTaskOptionsCore,
  PrintTaskOptions,
  StandardPrintTaskOptions,
  IPrintDocumentSource,
  PrintTaskProgressingEventArgs,
  PrintTaskCompletedEventArgs,
  PrintTask,
  PrintTaskSourceRequestedDeferral,
  PrintTaskSourceRequestedArgs,
  PrintTaskRequestedDeferral,
  PrintTaskRequest,
  PrintTaskRequestedEventArgs,
  PrintManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as optiondetails from "./graphics.printing.optiondetails.js";
export * as printticket from "./graphics.printing.printticket.js";
export * as workflow from "./graphics.printing.workflow.js";