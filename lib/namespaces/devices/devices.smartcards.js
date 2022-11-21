/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.smartcards
  name: "windows.devices.smartcards",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Security.Cryptography.Core",
  ]
};

export const {
  SmartCardTriggerType,
  SmartCardLaunchBehavior,
  SmartCardEmulatorEnablementPolicy,
  SmartCardEmulationCategory,
  SmartCardEmulationType,
  SmartCardAppletIdGroupActivationPolicy,
  SmartCardActivationPolicyChangeResult,
  SmartCardEmulatorConnectionDeactivatedReason,
  SmartCardEmulatorConnectionSource,
  SmartCardAutomaticResponseStatus,
  SmartCardUnlockPromptingBehavior,
  SmartCardCryptogramStorageKeyAlgorithm,
  SmartCardCryptogramMaterialType,
  SmartCardCryptogramMaterialProtectionMethod,
  SmartCardCryptogramAlgorithm,
  SmartCardCryptogramMaterialPackageFormat,
  SmartCardCryptogramStorageKeyCapabilities,
  SmartCardCryptogramMaterialPackageConfirmationResponseFormat,
  SmartCardCryptogramPlacementOptions,
  SmartCardCryptogramGeneratorOperationStatus,
  SmartCardCryptographicKeyAttestationStatus,
  SmartCardReaderKind,
  SmartCardReaderStatus,
  SmartCardStatus,
  SmartCardPinCharacterPolicyOption,
  SmartCardTriggerDetails,
  SmartCardEmulator,
  SmartCardAppletIdGroupRegistration,
  SmartCardAppletIdGroup,
  SmartCardEmulatorApduReceivedEventArgs,
  SmartCardEmulatorConnectionDeactivatedEventArgs,
  SmartCardEmulatorConnectionProperties,
  SmartCardAutomaticResponseApdu,
  SmartCardCryptogramPlacementStep,
  SmartCardCryptogramStorageKeyCharacteristics,
  SmartCardCryptogramMaterialPackageCharacteristics,
  SmartCardCryptogramMaterialCharacteristics,
  SmartCardCryptogramGenerator,
  SmartCardCryptogramStorageKeyInfo,
  SmartCardCryptogramMaterialPossessionProof,
  SmartCardCryptogramGetAllCryptogramStorageKeyCharacteristicsResult,
  SmartCardCryptogramGetAllCryptogramMaterialPackageCharacteristicsResult,
  SmartCardCryptogramGetAllCryptogramMaterialCharacteristicsResult,
  SmartCardReader,
  SmartCard,
  CardAddedEventArgs,
  CardRemovedEventArgs,
  SmartCardProvisioning,
  SmartCardPinPolicy,
  SmartCardChallengeContext,
  SmartCardPinResetRequest,
  SmartCardPinResetDeferral,
  SmartCardConnection,
} = load(namespace.name);

reference(namespace.externalReference);
