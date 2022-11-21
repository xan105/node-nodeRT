/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.phone.system
  name: "windows.phone.system",
  externalReference: [
  ]
};

export const {
  SystemProtection,
} = load(namespace.name);

reference(namespace.externalReference);

export * as power from "./phone.system.power.js";
export * as profile from "./phone.system.profile.js";
export * as userprofile from "./phone.system.userprofile.js";