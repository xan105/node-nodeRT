/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.authentication.identity
  name: "windows.security.authentication.identity",
  externalReference: [
  ]
};

export const {
  EnterpriseKeyCredentialRegistrationInfo,
  EnterpriseKeyCredentialRegistrationManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./security.authentication.identity.core.js";
export * as provider from "./security.authentication.identity.provider.js";