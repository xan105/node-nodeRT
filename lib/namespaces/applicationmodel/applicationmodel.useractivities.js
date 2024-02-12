/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.useractivities
  name: "windows.applicationmodel.useractivities",
  externalReference: [
    "Windows.Foundation",
    "Windows.System",
    "Windows.Security.Credentials",
    "Windows.UI.Shell",
  ]
};

export const {
  UserActivityState,
  IUserActivityContentInfo,
  UserActivity,
  UserActivityAttribution,
  UserActivityChannel,
  UserActivityContentInfo,
  UserActivityRequest,
  UserActivityRequestManager,
  UserActivityRequestedEventArgs,
  UserActivitySession,
  UserActivitySessionHistoryItem,
  UserActivityVisualElements,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./applicationmodel.useractivities.core.js";