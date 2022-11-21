/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.notifications
  name: "windows.ui.notifications",
  externalReference: [
    "Windows.Foundation",
    "Windows.System",
    "Windows.Data.Xml.Dom",
    "Windows.ApplicationModel",
  ]
};

export const {
  NotificationSetting,
  ToastDismissalReason,
  BadgeTemplateType,
  TileFlyoutTemplateType,
  TileTemplateType,
  ToastTemplateType,
  PeriodicUpdateRecurrence,
  ToastHistoryChangedType,
  AdaptiveNotificationContentKind,
  NotificationMirroring,
  NotificationKinds,
  UserNotificationChangedKind,
  NotificationUpdateResult,
  ToastNotificationPriority,
  ShownTileNotification,
  Notification,
  NotificationBinding,
  IAdaptiveNotificationContent,
  AdaptiveNotificationText,
  TileUpdater,
  TileUpdateManagerForUser,
  TileNotification,
  ScheduledTileNotification,
  TileFlyoutUpdater,
  TileFlyoutNotification,
  BadgeUpdater,
  BadgeUpdateManagerForUser,
  BadgeNotification,
  ToastNotifier,
  ToastNotification,
  ScheduledToastNotification,
  NotificationData,
  ToastCollection,
  ToastDismissedEventArgs,
  ToastFailedEventArgs,
  NotificationVisual,
  ToastNotificationHistory,
  ToastNotificationManagerForUser,
  ToastCollectionManager,
  UserNotificationChangedEventArgs,
  UserNotification,
  KnownAdaptiveNotificationHints,
  KnownNotificationBindings,
  KnownAdaptiveNotificationTextStyles,
  TileUpdateManager,
  BadgeUpdateManager,
  TileFlyoutUpdateManager,
  ToastNotificationManager,
  ToastActivatedEventArgs,
  ToastNotificationHistoryChangedTriggerDetail,
  ToastNotificationActionTriggerDetail,
} = load(namespace.name);

reference(namespace.externalReference);

export * as management from "./ui.notifications.management.js";