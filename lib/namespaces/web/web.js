/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web
  name: "windows.web",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  WebErrorStatus,
  IUriToStreamResolver,
  WebError,
} = load(namespace.name);

reference(namespace.externalReference);

export * as atompub from "./web.atompub.js";
export * as http from "./web.http.js";
export * as syndication from "./web.syndication.js";
export * as ui from "./web.ui.js";