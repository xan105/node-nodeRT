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
  EnrollKeyUsages,
  KeyProtectionLevel,
  ExportOption,
  KeySize,
  InstallOptions,
  CertificateChainPolicy,
  ChainValidationResult,
  SignatureValidationResult,
  CertificateExtension,
  Certificate,
  SubjectAlternativeNameInfo,
  CertificateRequestProperties,
  UserCertificateEnrollmentManager,
  PfxImportParameters,
  CertificateEnrollmentManager,
  KeyAttestationHelper,
  CertificateQuery,
  CertificateStore,
  UserCertificateStore,
  CertificateStores,
  StandardCertificateStoreNames,
  KeyAlgorithmNames,
  KeyStorageProviderNames,
  ChainBuildingParameters,
  ChainValidationParameters,
  CertificateChain,
  CertificateKeyUsages,
  CmsTimestampInfo,
  CmsSignerInfo,
  CmsAttachedSignature,
  CmsDetachedSignature,
} = load(namespace.name);

reference(namespace.externalReference);
