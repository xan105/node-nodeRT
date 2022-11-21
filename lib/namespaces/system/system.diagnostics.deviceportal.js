/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.system.diagnostics.deviceportal
  name: "windows.system.diagnostics.deviceportal",
  externalReference: [
    "Windows.Web.Http",
    "Windows.Foundation",
    "Windows.Networking.Sockets",
    "Windows.ApplicationModel.AppService",
  ]
};

export const {
  DevicePortalConnectionClosedReason,
  DevicePortalConnectionClosedEventArgs,
  DevicePortalConnectionRequestReceivedEventArgs,
  DevicePortalConnection,
} = load(namespace.name);

reference(namespace.externalReference);
