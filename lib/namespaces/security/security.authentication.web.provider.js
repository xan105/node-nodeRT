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
    "Windows.Security.Authentication.Web.Core",
    "Windows.System",
    "Windows.Foundation",
    "Windows.Security.Credentials",
    "Windows.Web.Http",
    "Windows.Storage.Streams",
    "Windows.Security.Cryptography.Core",
    "Windows.Security.Authentication.Web",
  ]
};

export const {
  WebAccountClientViewType,
  WebAccountProviderOperationKind,
  WebAccountScope,
  WebAccountSelectionOptions,
  IWebAccountProviderBaseReportOperation,
  IWebAccountProviderOperation,
  IWebAccountProviderSilentReportOperation,
  IWebAccountProviderTokenObjects,
  IWebAccountProviderTokenObjects2,
  IWebAccountProviderTokenOperation,
  IWebAccountProviderUIReportOperation,
  WebAccountClientView,
  WebAccountManager,
  WebAccountProviderAddAccountOperation,
  WebAccountProviderDeleteAccountOperation,
  WebAccountProviderGetTokenSilentOperation,
  WebAccountProviderManageAccountOperation,
  WebAccountProviderRequestTokenOperation,
  WebAccountProviderRetrieveCookiesOperation,
  WebAccountProviderSignOutAccountOperation,
  WebAccountProviderTriggerDetails,
  WebProviderTokenRequest,
  WebProviderTokenResponse,
} = load(namespace.name);

reference(namespace.externalReference);
