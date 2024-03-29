/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.input.inking.analysis
  name: "windows.ui.input.inking.analysis",
  externalReference: [
    "Windows.UI.Input.Inking",
  ]
};

export const {
  InkAnalysisDrawingKind,
  InkAnalysisNodeKind,
  InkAnalysisStatus,
  InkAnalysisStrokeKind,
  IInkAnalysisNode,
  IInkAnalyzerFactory,
  InkAnalysisInkBullet,
  InkAnalysisInkDrawing,
  InkAnalysisInkWord,
  InkAnalysisLine,
  InkAnalysisListItem,
  InkAnalysisNode,
  InkAnalysisParagraph,
  InkAnalysisResult,
  InkAnalysisRoot,
  InkAnalysisWritingRegion,
  InkAnalyzer,
} = load(namespace.name);

reference(namespace.externalReference);
