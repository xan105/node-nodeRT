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
    "Windows.Storage",
    "Windows.Globalization",
    "Windows.Foundation",
  ]
};

export const {
  SpeechRecognitionConstraintProbability,
  SpeechRecognitionConfidence,
  SpeechRecognitionScenario,
  SpeechRecognitionConstraintType,
  SpeechRecognizerState,
  SpeechRecognitionAudioProblem,
  SpeechRecognitionResultStatus,
  SpeechContinuousRecognitionMode,
  SpeechRecognitionSemanticInterpretation,
  SpeechRecognitionResult,
  ISpeechRecognitionConstraint,
  SpeechRecognitionTopicConstraint,
  SpeechRecognitionListConstraint,
  SpeechRecognitionGrammarFileConstraint,
  SpeechRecognizerTimeouts,
  SpeechRecognizerUIOptions,
  SpeechRecognitionCompilationResult,
  SpeechRecognizer,
  SpeechRecognitionQualityDegradingEventArgs,
  SpeechRecognizerStateChangedEventArgs,
  SpeechRecognitionVoiceCommandDefinitionConstraint,
  SpeechContinuousRecognitionSession,
  SpeechRecognitionHypothesisGeneratedEventArgs,
  SpeechRecognitionHypothesis,
  SpeechContinuousRecognitionCompletedEventArgs,
  SpeechContinuousRecognitionResultGeneratedEventArgs,
  VoiceCommandManager,
  VoiceCommandSet,
} = load(namespace.name);

reference(namespace.externalReference);
