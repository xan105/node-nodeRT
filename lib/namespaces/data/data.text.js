/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.data.text
  name: "windows.data.text",
  externalReference: [
  ]
};

export const {
  UnicodeGeneralCategory,
  UnicodeNumericType,
  AlternateNormalizationFormat,
  SemanticTextQuery,
  UnicodeCharacters,
  AlternateWordForm,
  WordSegment,
  WordsSegmenter,
  SelectableWordSegment,
  SelectableWordsSegmenter,
  TextPredictionGenerator,
  TextConversionGenerator,
  TextReverseConversionGenerator,
  TextPhoneme,
} = load(namespace.name);

reference(namespace.externalReference);
