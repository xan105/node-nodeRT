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
  SmartCardActivationPolicyChangeResult,
  SmartCardAppletIdGroupActivationPolicy,
  SmartCardAutomaticResponseStatus,
  SmartCardCryptogramAlgorithm,
  SmartCardCryptogramGeneratorOperationStatus,
  SmartCardCryptogramMaterialPackageConfirmationResponseFormat,
  SmartCardCryptogramMaterialPackageFormat,
  SmartCardCryptogramMaterialProtectionMethod,
  SmartCardCryptogramMaterialType,
  SmartCardCryptogramPlacementOptions,
  SmartCardCryptogramStorageKeyAlgorithm,
  SmartCardCryptogramStorageKeyCapabilities,
  SmartCardCryptographicKeyAttestationStatus,
  SmartCardEmulationCategory,
  SmartCardEmulationType,
  SmartCardEmulatorConnectionDeactivatedReason,
  SmartCardEmulatorConnectionSource,
  SmartCardEmulatorEnablementPolicy,
  SmartCardLaunchBehavior,
  SmartCardPinCharacterPolicyOption,
  SmartCardReaderKind,
  SmartCardReaderStatus,
  SmartCardStatus,
  SmartCardTriggerType,
  SmartCardUnlockPromptingBehavior,
  CardAddedEventArgs,
  CardRemovedEventArgs,
  KnownSmartCardAppletIds,
  SmartCard,
  SmartCardAppletIdGroup,
  SmartCardAppletIdGroupRegistration,
  SmartCardAutomaticResponseApdu,
  SmartCardChallengeContext,
  SmartCardConnection,
  SmartCardCryptogramGenerator,
  SmartCardCryptogramGetAllCryptogramMaterialCharacteristicsResult,
  SmartCardCryptogramGetAllCryptogramMaterialPackageCharacteristicsResult,
  SmartCardCryptogramGetAllCryptogramStorageKeyCharacteristicsResult,
  SmartCardCryptogramMaterialCharacteristics,
  SmartCardCryptogramMaterialPackageCharacteristics,
  SmartCardCryptogramMaterialPossessionProof,
  SmartCardCryptogramPlacementStep,
  SmartCardCryptogramStorageKeyCharacteristics,
  SmartCardCryptogramStorageKeyInfo,
  SmartCardEmulator,
  SmartCardEmulatorApduReceivedEventArgs,
  SmartCardEmulatorConnectionDeactivatedEventArgs,
  SmartCardEmulatorConnectionProperties,
  SmartCardPinPolicy,
  SmartCardPinResetDeferral,
  SmartCardPinResetRequest,
  SmartCardProvisioning,
  SmartCardReader,
  SmartCardTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
