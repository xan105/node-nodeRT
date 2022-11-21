/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.cryptography.core
  name: "windows.security.cryptography.core",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Security.Cryptography.Certificates",
  ]
};

export const {
  CryptographicPrivateKeyBlobType,
  CryptographicPublicKeyBlobType,
  Capi1KdfTargetAlgorithm,
  CryptographicPadding,
  KeyDerivationParameters,
  CryptographicKey,
  CryptographicHash,
  PersistedKeyProvider,
  EncryptedAndAuthenticatedData,
  CryptographicEngine,
  HashAlgorithmProvider,
  MacAlgorithmProvider,
  KeyDerivationAlgorithmProvider,
  SymmetricKeyAlgorithmProvider,
  AsymmetricKeyAlgorithmProvider,
  HashAlgorithmNames,
  MacAlgorithmNames,
  SymmetricAlgorithmNames,
  AsymmetricAlgorithmNames,
  EccCurveNames,
  KeyDerivationAlgorithmNames,
} = load(namespace.name);

reference(namespace.externalReference);
