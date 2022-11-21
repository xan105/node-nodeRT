/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.phone.notification.management
  name: "windows.phone.notification.management",
  externalReference: [
    "Windows.ApplicationModel.Email",
    "Windows.ApplicationModel.Appointments",
    "Windows.Storage.Streams",
  ]
};

export const {
  AccessoryNotificationType,
  ReminderState,
  PhoneNotificationType,
  PhoneCallTransport,
  PhoneMediaType,
  PhoneCallDirection,
  PhoneCallState,
  PhoneCallAudioEndpoint,
  PhoneLineRegistrationState,
  CalendarChangedEvent,
  PlaybackStatus,
  PlaybackCapability,
  PlaybackCommand,
  VibrateState,
  TextResponse,
  AppNotificationInfo,
  EmailAccountInfo,
  EmailFolderInfo,
  BinaryId,
  IAccessoryNotificationTriggerDetails,
  AlarmNotificationTriggerDetails,
  EmailReadNotificationTriggerDetails,
  EmailNotificationTriggerDetails,
  PhoneLineDetails,
  PhoneCallDetails,
  PhoneNotificationTriggerDetails,
  SpeedDialEntry,
  ReminderNotificationTriggerDetails,
  CalendarChangedNotificationTriggerDetails,
  ToastNotificationTriggerDetails,
  CortanaTileNotificationTriggerDetails,
  MediaMetadata,
  MediaControlsTriggerDetails,
  VolumeInfo,
  AccessoryManager,
} = load(namespace.name);

reference(namespace.externalReference);
