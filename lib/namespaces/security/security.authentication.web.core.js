/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.authentication.web.core
  name: "windows.security.authentication.web.core",
  externalReference: [
    "Windows.Security.Credentials",
    "Windows.System",
    "Windows.Foundation",
  ]
};

export const {
  FindAllWebAccountsStatus,
  WebTokenRequestPromptType,
  WebTokenRequestStatus,
  FindAllAccountsResult,
  WebAccountEventArgs,
  WebAccountMonitor,
  WebAuthenticationCoreManager,
  WebProviderError,
  WebTokenRequest,
  WebTokenRequestResult,
  WebTokenResponse,
} = load(namespace.name);

reference(namespace.externalReference);
