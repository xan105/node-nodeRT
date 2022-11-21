/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.authentication.identity.provider
  name: "windows.security.authentication.identity.provider",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  SecondaryAuthenticationFactorDeviceCapabilities,
  SecondaryAuthenticationFactorDeviceFindScope,
  SecondaryAuthenticationFactorAuthenticationStage,
  SecondaryAuthenticationFactorRegistrationStatus,
  SecondaryAuthenticationFactorDevicePresenceMonitoringRegistrationStatus,
  SecondaryAuthenticationFactorAuthenticationStatus,
  SecondaryAuthenticationFactorFinishAuthenticationStatus,
  SecondaryAuthenticationFactorAuthenticationScenario,
  SecondaryAuthenticationFactorAuthenticationMessage,
  SecondaryAuthenticationFactorDevicePresence,
  SecondaryAuthenticationFactorDevicePresenceMonitoringMode,
  SecondaryAuthenticationFactorRegistration,
  SecondaryAuthenticationFactorRegistrationResult,
  SecondaryAuthenticationFactorAuthentication,
  SecondaryAuthenticationFactorAuthenticationResult,
  SecondaryAuthenticationFactorInfo,
  SecondaryAuthenticationFactorAuthenticationStageChangedEventArgs,
  SecondaryAuthenticationFactorAuthenticationStageInfo,
} = load(namespace.name);

reference(namespace.externalReference);
