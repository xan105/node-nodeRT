/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.socialinfo
  name: "windows.applicationmodel.socialinfo",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  SocialItemBadgeStyle,
  SocialFeedKind,
  SocialFeedItemStyle,
  SocialFeedUpdateMode,
  SocialUserInfo,
  SocialFeedContent,
  SocialItemThumbnail,
  SocialFeedSharedItem,
  SocialFeedChildItem,
  SocialFeedItem,
} = load(namespace.name);

reference(namespace.externalReference);

export * as provider from "./applicationmodel.socialinfo.provider.js";