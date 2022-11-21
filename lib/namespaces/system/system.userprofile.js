/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.system.userprofile
  name: "windows.system.userprofile",
  externalReference: [
    "Windows.System",
    "Windows.Storage",
    "Windows.Globalization",
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  AccountPictureKind,
  SetAccountPictureResult,
  SetImageFeedResult,
  AdvertisingManagerForUser,
  AdvertisingManager,
  DiagnosticsSettings,
  UserProfilePersonalizationSettings,
  GlobalizationPreferencesForUser,
  GlobalizationPreferences,
  FirstSignInSettings,
  UserInformation,
  LockScreen,
} = load(namespace.name);

reference(namespace.externalReference);
