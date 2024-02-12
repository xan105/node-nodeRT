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
    "Windows.Data.Xml.Dom",
    "Windows.System",
    "Windows.Foundation",
    "Windows.ApplicationModel",
  ]
};

export const {
  AdaptiveNotificationContentKind,
  BadgeTemplateType,
  NotificationKinds,
  NotificationMirroring,
  NotificationSetting,
  NotificationUpdateResult,
  PeriodicUpdateRecurrence,
  TileFlyoutTemplateType,
  TileTemplateType,
  ToastDismissalReason,
  ToastHistoryChangedType,
  ToastNotificationMode,
  ToastNotificationPriority,
  ToastTemplateType,
  UserNotificationChangedKind,
  AdaptiveNotificationText,
  BadgeNotification,
  BadgeUpdateManager,
  BadgeUpdateManagerForUser,
  BadgeUpdater,
  IAdaptiveNotificationContent,
  KnownAdaptiveNotificationHints,
  KnownAdaptiveNotificationTextStyles,
  KnownNotificationBindings,
  Notification,
  NotificationBinding,
  NotificationData,
  NotificationVisual,
  ScheduledTileNotification,
  ScheduledToastNotification,
  ScheduledToastNotificationShowingEventArgs,
  ShownTileNotification,
  TileFlyoutNotification,
  TileFlyoutUpdateManager,
  TileFlyoutUpdater,
  TileNotification,
  TileUpdateManager,
  TileUpdateManagerForUser,
  TileUpdater,
  ToastActivatedEventArgs,
  ToastCollection,
  ToastCollectionManager,
  ToastDismissedEventArgs,
  ToastFailedEventArgs,
  ToastNotification,
  ToastNotificationActionTriggerDetail,
  ToastNotificationHistory,
  ToastNotificationHistoryChangedTriggerDetail,
  ToastNotificationManager,
  ToastNotificationManagerForUser,
  ToastNotifier,
  UserNotification,
  UserNotificationChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as management from "./ui.notifications.management.js";