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
    "Windows.Globalization",
    "Windows.Web.Http",
    "Windows.Networking",
  ]
};

export const {
  HttpCacheDirectiveHeaderValueCollection,
  HttpChallengeHeaderValue,
  HttpChallengeHeaderValueCollection,
  HttpConnectionOptionHeaderValue,
  HttpConnectionOptionHeaderValueCollection,
  HttpContentCodingHeaderValue,
  HttpContentCodingHeaderValueCollection,
  HttpContentCodingWithQualityHeaderValue,
  HttpContentCodingWithQualityHeaderValueCollection,
  HttpContentDispositionHeaderValue,
  HttpContentHeaderCollection,
  HttpContentRangeHeaderValue,
  HttpCookiePairHeaderValue,
  HttpCookiePairHeaderValueCollection,
  HttpCredentialsHeaderValue,
  HttpDateOrDeltaHeaderValue,
  HttpExpectationHeaderValue,
  HttpExpectationHeaderValueCollection,
  HttpLanguageHeaderValueCollection,
  HttpLanguageRangeWithQualityHeaderValue,
  HttpLanguageRangeWithQualityHeaderValueCollection,
  HttpMediaTypeHeaderValue,
  HttpMediaTypeWithQualityHeaderValue,
  HttpMediaTypeWithQualityHeaderValueCollection,
  HttpMethodHeaderValueCollection,
  HttpNameValueHeaderValue,
  HttpProductHeaderValue,
  HttpProductInfoHeaderValue,
  HttpProductInfoHeaderValueCollection,
  HttpRequestHeaderCollection,
  HttpResponseHeaderCollection,
  HttpTransferCodingHeaderValue,
  HttpTransferCodingHeaderValueCollection,
} = load(namespace.name);

reference(namespace.externalReference);
