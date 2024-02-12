/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.authentication.web
  name: "windows.security.authentication.web",
  externalReference: [
    "Windows.Foundation",
  ]
};

export const {
  TokenBindingKeyType,
  WebAuthenticationOptions,
  WebAuthenticationStatus,
  WebAuthenticationBroker,
  WebAuthenticationResult,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./security.authentication.web.core.js";
export * as provider from "./security.authentication.web.provider.js";