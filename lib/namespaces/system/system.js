/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.system
  name: "windows.system",
  externalReference: [
    "Windows.ApplicationModel",
    "Windows.System.Diagnostics",
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.UI.ViewManagement",
    "Windows.Storage.Search",
    "Windows.UI.Popups",
    "Windows.Storage.Streams",
    "Windows.System.RemoteSystems",
  ]
};

export const {
  AppDiagnosticInfoWatcherStatus,
  AppMemoryUsageLevel,
  AppResourceGroupEnergyQuotaState,
  AppResourceGroupExecutionState,
  AppResourceGroupInfoWatcherStatus,
  AutoUpdateTimeZoneStatus,
  DiagnosticAccessStatus,
  DispatcherQueuePriority,
  LaunchFileStatus,
  LaunchQuerySupportStatus,
  LaunchQuerySupportType,
  LaunchUriStatus,
  PowerState,
  ProcessorArchitecture,
  RemoteLaunchUriStatus,
  ShutdownKind,
  UserAgeConsentGroup,
  UserAgeConsentResult,
  UserAuthenticationStatus,
  UserPictureSize,
  UserType,
  UserWatcherStatus,
  UserWatcherUpdateKind,
  VirtualKey,
  VirtualKeyModifiers,
  AppActivationResult,
  AppDiagnosticInfo,
  AppDiagnosticInfoWatcher,
  AppDiagnosticInfoWatcherEventArgs,
  AppExecutionStateChangeResult,
  AppMemoryReport,
  AppMemoryUsageLimitChangingEventArgs,
  AppResourceGroupBackgroundTaskReport,
  AppResourceGroupInfo,
  AppResourceGroupInfoWatcher,
  AppResourceGroupInfoWatcherEventArgs,
  AppResourceGroupInfoWatcherExecutionStateChangedEventArgs,
  AppResourceGroupMemoryReport,
  AppResourceGroupStateReport,
  AppUriHandlerHost,
  AppUriHandlerRegistration,
  AppUriHandlerRegistrationManager,
  DateTimeSettings,
  DispatcherQueue,
  DispatcherQueueController,
  DispatcherQueueShutdownStartingEventArgs,
  DispatcherQueueTimer,
  FolderLauncherOptions,
  ILauncherViewOptions,
  KnownUserProperties,
  LaunchUriResult,
  Launcher,
  LauncherOptions,
  LauncherUIOptions,
  MemoryManager,
  ProcessLauncher,
  ProcessLauncherOptions,
  ProcessLauncherResult,
  ProcessMemoryReport,
  ProtocolForResultsOperation,
  RemoteLauncher,
  RemoteLauncherOptions,
  ShutdownManager,
  TimeZoneSettings,
  User,
  UserAuthenticationStatusChangeDeferral,
  UserAuthenticationStatusChangingEventArgs,
  UserChangedEventArgs,
  UserDeviceAssociation,
  UserDeviceAssociationChangedEventArgs,
  UserPicker,
  UserWatcher,
} = load(namespace.name);

reference(namespace.externalReference);

export * as diagnostics from "./system.diagnostics.js";
export * as display from "./system.display.js";
export * as implementation from "./system.implementation.js";
export * as inventory from "./system.inventory.js";
export * as power from "./system.power.js";
export * as profile from "./system.profile.js";
export * as remotedesktop from "./system.remotedesktop.js";
export * as remotesystems from "./system.remotesystems.js";
export * as threading from "./system.threading.js";
export * as update from "./system.update.js";
export * as userprofile from "./system.userprofile.js";