/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.casting
  name: "windows.media.casting",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Devices.Enumeration",
    "Windows.UI.Popups",
    "Windows.Foundation",
  ]
};

export const {
  CastingConnectionErrorStatus,
  CastingConnectionState,
  CastingPlaybackTypes,
  CastingConnection,
  CastingConnectionErrorOccurredEventArgs,
  CastingDevice,
  CastingDevicePicker,
  CastingDevicePickerFilter,
  CastingDeviceSelectedEventArgs,
  CastingSource,
} = load(namespace.name);

reference(namespace.externalReference);
