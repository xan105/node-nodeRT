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
    "Windows.Storage.Streams",
    "Windows.ApplicationModel.Email",
    "Windows.ApplicationModel.Appointments",
  ]
};

export const {
  AccessoryNotificationType,
  CalendarChangedEvent,
  PhoneCallAudioEndpoint,
  PhoneCallDirection,
  PhoneCallState,
  PhoneCallTransport,
  PhoneLineRegistrationState,
  PhoneMediaType,
  PhoneNotificationType,
  PlaybackCapability,
  PlaybackCommand,
  PlaybackStatus,
  ReminderState,
  VibrateState,
  AccessoryManager,
  AlarmNotificationTriggerDetails,
  AppNotificationInfo,
  BinaryId,
  CalendarChangedNotificationTriggerDetails,
  CortanaTileNotificationTriggerDetails,
  EmailAccountInfo,
  EmailFolderInfo,
  EmailNotificationTriggerDetails,
  EmailReadNotificationTriggerDetails,
  IAccessoryNotificationTriggerDetails,
  MediaControlsTriggerDetails,
  MediaMetadata,
  PhoneCallDetails,
  PhoneLineDetails,
  PhoneNotificationTriggerDetails,
  ReminderNotificationTriggerDetails,
  SpeedDialEntry,
  TextResponse,
  ToastNotificationTriggerDetails,
  VolumeInfo,
} = load(namespace.name);

reference(namespace.externalReference);
