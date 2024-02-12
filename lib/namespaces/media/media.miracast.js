/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.miracast
  name: "windows.media.miracast",
  externalReference: [
    "Windows.ApplicationModel.Core",
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Media.Core",
  ]
};

export const {
  MiracastReceiverApplySettingsStatus,
  MiracastReceiverAuthorizationMethod,
  MiracastReceiverDisconnectReason,
  MiracastReceiverGameControllerDeviceUsageMode,
  MiracastReceiverListeningStatus,
  MiracastReceiverSessionStartStatus,
  MiracastReceiverWiFiStatus,
  MiracastTransmitterAuthorizationStatus,
  MiracastReceiver,
  MiracastReceiverApplySettingsResult,
  MiracastReceiverConnection,
  MiracastReceiverConnectionCreatedEventArgs,
  MiracastReceiverCursorImageChannel,
  MiracastReceiverCursorImageChannelSettings,
  MiracastReceiverDisconnectedEventArgs,
  MiracastReceiverGameControllerDevice,
  MiracastReceiverInputDevices,
  MiracastReceiverKeyboardDevice,
  MiracastReceiverMediaSourceCreatedEventArgs,
  MiracastReceiverSession,
  MiracastReceiverSessionStartResult,
  MiracastReceiverSettings,
  MiracastReceiverStatus,
  MiracastReceiverStreamControl,
  MiracastReceiverVideoStreamSettings,
  MiracastTransmitter,
} = load(namespace.name);

reference(namespace.externalReference);
