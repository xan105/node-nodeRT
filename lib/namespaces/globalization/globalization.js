/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.globalization
  name: "windows.globalization",
  externalReference: [
    "Windows.System",
  ]
};

export const {
  DayOfWeek,
  LanguageLayoutDirection,
  CalendarIdentifiers,
  ClockIdentifiers,
  NumeralSystemIdentifiers,
  CurrencyIdentifiers,
  GeographicRegion,
  Language,
  Calendar,
  ApplicationLanguages,
  JapanesePhoneme,
  JapanesePhoneticAnalyzer,
} = load(namespace.name);

reference(namespace.externalReference);

export * as collation from "./globalization.collation.js";
export * as datetimeformatting from "./globalization.datetimeformatting.js";
export * as fonts from "./globalization.fonts.js";
export * as numberformatting from "./globalization.numberformatting.js";
export * as phonenumberformatting from "./globalization.phonenumberformatting.js";