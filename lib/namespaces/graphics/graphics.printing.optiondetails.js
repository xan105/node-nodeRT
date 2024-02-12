/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.printing.optiondetails
  name: "windows.graphics.printing.optiondetails",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Graphics.Printing",
  ]
};

export const {
  PrintOptionStates,
  PrintOptionType,
  IPrintCustomOptionDetails,
  IPrintItemListOptionDetails,
  IPrintNumberOptionDetails,
  IPrintOptionDetails,
  IPrintTextOptionDetails,
  PrintBindingOptionDetails,
  PrintBorderingOptionDetails,
  PrintCollationOptionDetails,
  PrintColorModeOptionDetails,
  PrintCopiesOptionDetails,
  PrintCustomItemDetails,
  PrintCustomItemListOptionDetails,
  PrintCustomTextOptionDetails,
  PrintCustomToggleOptionDetails,
  PrintDuplexOptionDetails,
  PrintHolePunchOptionDetails,
  PrintMediaSizeOptionDetails,
  PrintMediaTypeOptionDetails,
  PrintOrientationOptionDetails,
  PrintPageRangeOptionDetails,
  PrintQualityOptionDetails,
  PrintStapleOptionDetails,
  PrintTaskOptionChangedEventArgs,
  PrintTaskOptionDetails,
} = load(namespace.name);

reference(namespace.externalReference);
