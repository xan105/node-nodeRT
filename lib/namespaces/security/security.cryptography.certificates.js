/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.cryptography.certificates
  name: "windows.security.cryptography.certificates",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Networking",
  ]
};

export const {
  CertificateChainPolicy,
  ChainValidationResult,
  EnrollKeyUsages,
  ExportOption,
  InstallOptions,
  KeyProtectionLevel,
  KeySize,
  SignatureValidationResult,
  Certificate,
  CertificateChain,
  CertificateEnrollmentManager,
  CertificateExtension,
  CertificateKeyUsages,
  CertificateQuery,
  CertificateRequestProperties,
  CertificateStore,
  CertificateStores,
  ChainBuildingParameters,
  ChainValidationParameters,
  CmsAttachedSignature,
  CmsDetachedSignature,
  CmsSignerInfo,
  CmsTimestampInfo,
  KeyAlgorithmNames,
  KeyAttestationHelper,
  KeyStorageProviderNames,
  PfxImportParameters,
  StandardCertificateStoreNames,
  SubjectAlternativeNameInfo,
  UserCertificateEnrollmentManager,
  UserCertificateStore,
} = load(namespace.name);

reference(namespace.externalReference);
