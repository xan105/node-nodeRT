/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.cryptography
  name: "windows.security.cryptography",
  externalReference: [
    "Windows.Storage.Streams",
  ]
};

export const {
  BinaryStringEncoding,
  CryptographicBuffer,
} = load(namespace.name);

reference(namespace.externalReference);

export * as certificates from "./security.cryptography.certificates.js";
export * as core from "./security.cryptography.core.js";
export * as dataprotection from "./security.cryptography.dataprotection.js";