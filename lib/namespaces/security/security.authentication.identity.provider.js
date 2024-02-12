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
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  SecondaryAuthenticationFactorAuthenticationMessage,
  SecondaryAuthenticationFactorAuthenticationScenario,
  SecondaryAuthenticationFactorAuthenticationStage,
  SecondaryAuthenticationFactorAuthenticationStatus,
  SecondaryAuthenticationFactorDeviceCapabilities,
  SecondaryAuthenticationFactorDeviceFindScope,
  SecondaryAuthenticationFactorDevicePresence,
  SecondaryAuthenticationFactorDevicePresenceMonitoringMode,
  SecondaryAuthenticationFactorDevicePresenceMonitoringRegistrationStatus,
  SecondaryAuthenticationFactorFinishAuthenticationStatus,
  SecondaryAuthenticationFactorRegistrationStatus,
  SecondaryAuthenticationFactorAuthentication,
  SecondaryAuthenticationFactorAuthenticationResult,
  SecondaryAuthenticationFactorAuthenticationStageChangedEventArgs,
  SecondaryAuthenticationFactorAuthenticationStageInfo,
  SecondaryAuthenticationFactorInfo,
  SecondaryAuthenticationFactorRegistration,
  SecondaryAuthenticationFactorRegistrationResult,
} = load(namespace.name);

reference(namespace.externalReference);
