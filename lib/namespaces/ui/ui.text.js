/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.text
  name: "windows.ui.text",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  CaretType,
  FindOptions,
  FontStretch,
  FontStyle,
  FormatEffect,
  HorizontalCharacterAlignment,
  LetterCase,
  LineSpacingRule,
  LinkType,
  MarkerAlignment,
  MarkerStyle,
  MarkerType,
  ParagraphAlignment,
  ParagraphStyle,
  PointOptions,
  RangeGravity,
  RichEditMathMode,
  SelectionOptions,
  SelectionType,
  TabAlignment,
  TabLeader,
  TextDecorations,
  TextGetOptions,
  TextRangeUnit,
  TextScript,
  TextSetOptions,
  UnderlineType,
  VerticalCharacterAlignment,
  ContentLinkInfo,
  FontWeights,
  ITextCharacterFormat,
  ITextDocument,
  ITextParagraphFormat,
  ITextRange,
  ITextSelection,
  RichEditTextDocument,
  RichEditTextRange,
  TextConstants,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.text.core.js";