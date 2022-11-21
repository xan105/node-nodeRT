/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web.http.headers
  name: "windows.web.http.headers",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Networking",
    "Windows.Globalization",
    "Windows.Web.Http",
  ]
};

export const {
  HttpContentHeaderCollection,
  HttpRequestHeaderCollection,
  HttpResponseHeaderCollection,
  HttpContentDispositionHeaderValue,
  HttpContentCodingHeaderValueCollection,
  HttpLanguageHeaderValueCollection,
  HttpContentRangeHeaderValue,
  HttpMediaTypeHeaderValue,
  HttpMediaTypeWithQualityHeaderValueCollection,
  HttpContentCodingWithQualityHeaderValueCollection,
  HttpLanguageRangeWithQualityHeaderValueCollection,
  HttpCredentialsHeaderValue,
  HttpCacheDirectiveHeaderValueCollection,
  HttpConnectionOptionHeaderValueCollection,
  HttpCookiePairHeaderValueCollection,
  HttpExpectationHeaderValueCollection,
  HttpTransferCodingHeaderValueCollection,
  HttpProductInfoHeaderValueCollection,
  HttpMethodHeaderValueCollection,
  HttpChallengeHeaderValueCollection,
  HttpDateOrDeltaHeaderValue,
  HttpNameValueHeaderValue,
  HttpChallengeHeaderValue,
  HttpConnectionOptionHeaderValue,
  HttpContentCodingHeaderValue,
  HttpCookiePairHeaderValue,
  HttpExpectationHeaderValue,
  HttpLanguageRangeWithQualityHeaderValue,
  HttpMediaTypeWithQualityHeaderValue,
  HttpProductHeaderValue,
  HttpProductInfoHeaderValue,
  HttpContentCodingWithQualityHeaderValue,
  HttpTransferCodingHeaderValue,
} = load(namespace.name);

reference(namespace.externalReference);
