/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.phone
  name: "windows.phone",
  externalReference: [
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);

export * as applicationmodel from "./phone.applicationmodel.js";
export * as devices from "./phone.devices.js";
export * as management from "./phone.management.js";
export * as media from "./phone.media.js";
export * as notification from "./phone.notification.js";
export * as personalinformation from "./phone.personalinformation.js";
export * as speech from "./phone.speech.js";
export * as startscreen from "./phone.startscreen.js";
export * as system from "./phone.system.js";
export * as ui from "./phone.ui.js";