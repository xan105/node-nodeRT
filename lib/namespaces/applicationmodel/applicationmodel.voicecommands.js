/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.voicecommands
  name: "windows.applicationmodel.voicecommands",
  externalReference: [
    "Windows.Media.SpeechRecognition",
    "Windows.Storage",
    "Windows.Foundation",
    "Windows.Globalization",
    "Windows.ApplicationModel.AppService",
  ]
};

export const {
  VoiceCommandCompletionReason,
  VoiceCommandContentTileType,
  VoiceCommand,
  VoiceCommandCompletedEventArgs,
  VoiceCommandConfirmationResult,
  VoiceCommandContentTile,
  VoiceCommandDefinition,
  VoiceCommandDefinitionManager,
  VoiceCommandDisambiguationResult,
  VoiceCommandResponse,
  VoiceCommandServiceConnection,
  VoiceCommandUserMessage,
} = load(namespace.name);

reference(namespace.externalReference);
