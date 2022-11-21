/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.credentials
  name: "windows.security.credentials",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Security.Cryptography.Core",
    "Windows.Foundation",
    "Windows.System",
  ]
};

export const {
  KeyCredentialStatus,
  KeyCredentialAttestationStatus,
  KeyCredentialCreationOption,
  WebAccountState,
  WebAccountPictureSize,
  KeyCredentialRetrievalResult,
  KeyCredentialOperationResult,
  KeyCredentialAttestationResult,
  KeyCredential,
  KeyCredentialManager,
  WebAccountProvider,
  WebAccount,
  IWebAccount,
  PasswordCredential,
  PasswordVault,
  PasswordCredentialPropertyStore,
} = load(namespace.name);

reference(namespace.externalReference);

export * as ui from "./security.credentials.ui.js";