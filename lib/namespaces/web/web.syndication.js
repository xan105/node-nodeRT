/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.web.syndication
  name: "windows.web.syndication",
  externalReference: [
    "Windows.Security.Credentials",
    "Windows.Foundation",
    "Windows.Data.Xml.Dom",
  ]
};

export const {
  SyndicationErrorStatus,
  SyndicationFormat,
  SyndicationTextType,
  ISyndicationClient,
  ISyndicationNode,
  ISyndicationText,
  SyndicationAttribute,
  SyndicationCategory,
  SyndicationClient,
  SyndicationContent,
  SyndicationError,
  SyndicationFeed,
  SyndicationGenerator,
  SyndicationItem,
  SyndicationLink,
  SyndicationNode,
  SyndicationPerson,
  SyndicationText,
} = load(namespace.name);

reference(namespace.externalReference);
