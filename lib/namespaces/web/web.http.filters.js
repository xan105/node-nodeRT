/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web.http.filters
  name: "windows.web.http.filters",
  externalReference: [
    "Windows.Security.Credentials",
    "Windows.Security.Cryptography.Certificates",
    "Windows.Web.Http",
    "Windows.System",
    "Windows.Networking.Sockets",
    "Windows.Foundation",
  ]
};

export const {
  HttpCacheReadBehavior,
  HttpCacheWriteBehavior,
  HttpCookieUsageBehavior,
  HttpBaseProtocolFilter,
  HttpCacheControl,
  HttpServerCustomValidationRequestedEventArgs,
  IHttpFilter,
} = load(namespace.name);

reference(namespace.externalReference);
