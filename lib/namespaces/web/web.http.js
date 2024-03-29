/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web.http
  name: "windows.web.http",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Web.Http.Headers",
    "Windows.Web.Http.Filters",
    "Windows.Foundation",
    "Windows.Security.Cryptography.Certificates",
    "Windows.Networking.Sockets",
  ]
};

export const {
  HttpCompletionOption,
  HttpProgressStage,
  HttpResponseMessageSource,
  HttpStatusCode,
  HttpVersion,
  HttpBufferContent,
  HttpClient,
  HttpCookie,
  HttpCookieCollection,
  HttpCookieManager,
  HttpFormUrlEncodedContent,
  HttpGetBufferResult,
  HttpGetInputStreamResult,
  HttpGetStringResult,
  HttpMethod,
  HttpMultipartContent,
  HttpMultipartFormDataContent,
  HttpRequestMessage,
  HttpRequestResult,
  HttpResponseMessage,
  HttpStreamContent,
  HttpStringContent,
  HttpTransportInformation,
  IHttpContent,
} = load(namespace.name);

reference(namespace.externalReference);

export * as diagnostics from "./web.http.diagnostics.js";
export * as filters from "./web.http.filters.js";
export * as headers from "./web.http.headers.js";