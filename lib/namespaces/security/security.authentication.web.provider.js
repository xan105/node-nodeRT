/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.security.authentication.web.provider
  name: "windows.security.authentication.web.provider",
  externalReference: [
    "Windows.Foundation",
    "Windows.Security.Authentication.Web.Core",
    "Windows.Security.Credentials",
    "Windows.Security.Cryptography.Core",
    "Windows.Security.Authentication.Web",
    "Windows.Storage.Streams",
    "Windows.System",
    "Windows.Web.Http",
  ]
};

export const {
  WebAccountProviderOperationKind,
  WebAccountSelectionOptions,
  WebAccountClientViewType,
  WebAccountScope,
  IWebAccountProviderOperation,
  WebProviderTokenRequest,
  WebProviderTokenResponse,
  WebAccountClientView,
  WebAccountManager,
  IWebAccountProviderBaseReportOperation,
  IWebAccountProviderUIReportOperation,
  IWebAccountProviderSilentReportOperation,
  IWebAccountProviderTokenOperation,
  WebAccountProviderRequestTokenOperation,
  WebAccountProviderGetTokenSilentOperation,
  WebAccountProviderAddAccountOperation,
  WebAccountProviderManageAccountOperation,
  WebAccountProviderDeleteAccountOperation,
  WebAccountProviderSignOutAccountOperation,
  WebAccountProviderRetrieveCookiesOperation,
  IWebAccountProviderTokenObjects,
  IWebAccountProviderTokenObjects2,
  WebAccountProviderTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
