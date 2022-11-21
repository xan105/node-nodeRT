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
    "Windows.Web.Http",
    "Windows.Security.Credentials",
    "Windows.Security.Cryptography.Certificates",
    "Windows.Networking.Sockets",
    "Windows.Foundation",
  ]
};

export const {
  HttpCacheReadBehavior,
  HttpCacheWriteBehavior,
  HttpCookieUsageBehavior,
  IHttpFilter,
  HttpBaseProtocolFilter,
  HttpCacheControl,
  HttpServerCustomValidationRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
