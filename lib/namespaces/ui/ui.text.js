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
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  CaretType,
  FindOptions,
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
  SelectionOptions,
  SelectionType,
  TabAlignment,
  TabLeader,
  TextGetOptions,
  TextSetOptions,
  TextRangeUnit,
  TextScript,
  UnderlineType,
  VerticalCharacterAlignment,
  FontStretch,
  FontStyle,
  TextDecorations,
  TextConstants,
  ITextDocument,
  ITextRange,
  ITextSelection,
  ITextCharacterFormat,
  ITextParagraphFormat,
  RichEditTextDocument,
  RichEditTextRange,
  ContentLinkInfo,
  FontWeights,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.text.core.js";