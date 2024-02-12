/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.conversationalagent
  name: "windows.applicationmodel.conversationalagent",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Media.Audio",
  ]
};

export const {
  ActivationSignalDetectionConfigurationCreationStatus,
  ActivationSignalDetectionConfigurationRemovalResult,
  ActivationSignalDetectionConfigurationSetModelDataResult,
  ActivationSignalDetectionConfigurationStateChangeResult,
  ActivationSignalDetectionTrainingDataFormat,
  ActivationSignalDetectorKind,
  ActivationSignalDetectorPowerState,
  ConversationalAgentActivationKind,
  ConversationalAgentActivationResult,
  ConversationalAgentSessionUpdateResponse,
  ConversationalAgentState,
  ConversationalAgentSystemStateChangeType,
  ConversationalAgentVoiceActivationPrerequisiteKind,
  DetectionConfigurationAvailabilityChangeKind,
  DetectionConfigurationTrainingStatus,
  SignalDetectorResourceKind,
  ActivationSignalDetectionConfiguration,
  ActivationSignalDetectionConfigurationCreationResult,
  ActivationSignalDetector,
  ConversationalAgentDetectorManager,
  ConversationalAgentSession,
  ConversationalAgentSessionInterruptedEventArgs,
  ConversationalAgentSignal,
  ConversationalAgentSignalDetectedEventArgs,
  ConversationalAgentSystemStateChangedEventArgs,
  DetectionConfigurationAvailabilityChangedEventArgs,
  DetectionConfigurationAvailabilityInfo,
} = load(namespace.name);

reference(namespace.externalReference);
