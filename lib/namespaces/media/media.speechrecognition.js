/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.speechrecognition
  name: "windows.media.speechrecognition",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.Globalization",
  ]
};

export const {
  SpeechContinuousRecognitionMode,
  SpeechRecognitionAudioProblem,
  SpeechRecognitionConfidence,
  SpeechRecognitionConstraintProbability,
  SpeechRecognitionConstraintType,
  SpeechRecognitionResultStatus,
  SpeechRecognitionScenario,
  SpeechRecognizerState,
  ISpeechRecognitionConstraint,
  SpeechContinuousRecognitionCompletedEventArgs,
  SpeechContinuousRecognitionResultGeneratedEventArgs,
  SpeechContinuousRecognitionSession,
  SpeechRecognitionCompilationResult,
  SpeechRecognitionGrammarFileConstraint,
  SpeechRecognitionHypothesis,
  SpeechRecognitionHypothesisGeneratedEventArgs,
  SpeechRecognitionListConstraint,
  SpeechRecognitionQualityDegradingEventArgs,
  SpeechRecognitionResult,
  SpeechRecognitionSemanticInterpretation,
  SpeechRecognitionTopicConstraint,
  SpeechRecognitionVoiceCommandDefinitionConstraint,
  SpeechRecognizer,
  SpeechRecognizerStateChangedEventArgs,
  SpeechRecognizerTimeouts,
  SpeechRecognizerUIOptions,
  VoiceCommandManager,
  VoiceCommandSet,
} = load(namespace.name);

reference(namespace.externalReference);
