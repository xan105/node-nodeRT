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
    "Windows.Globalization",
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.Storage.Streams",
  ]
};

export const {
  AccountPictureKind,
  SetAccountPictureResult,
  SetImageFeedResult,
  AdvertisingManager,
  AdvertisingManagerForUser,
  AssignedAccessSettings,
  DiagnosticsSettings,
  FirstSignInSettings,
  GlobalizationPreferences,
  GlobalizationPreferencesForUser,
  LockScreen,
  UserInformation,
  UserProfilePersonalizationSettings,
} = load(namespace.name);

reference(namespace.externalReference);
