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
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.ApplicationModel",
    "Windows.System.Diagnostics",
    "Windows.UI.Popups",
    "Windows.UI.ViewManagement",
    "Windows.Storage.Search",
    "Windows.Storage",
    "Windows.System.RemoteSystems",
  ]
};

export const {
  ProcessorArchitecture,
  DispatcherQueuePriority,
  UserAuthenticationStatus,
  UserType,
  UserPictureSize,
  UserWatcherStatus,
  AppMemoryUsageLevel,
  DiagnosticAccessStatus,
  AppDiagnosticInfoWatcherStatus,
  AppResourceGroupExecutionState,
  AppResourceGroupInfoWatcherStatus,
  AppResourceGroupEnergyQuotaState,
  VirtualKeyModifiers,
  VirtualKey,
  LaunchQuerySupportType,
  LaunchQuerySupportStatus,
  LaunchUriStatus,
  LaunchFileStatus,
  RemoteLaunchUriStatus,
  ShutdownKind,
  PowerState,
  AutoUpdateTimeZoneStatus,
  DispatcherQueueTimer,
  DispatcherQueue,
  DispatcherQueueShutdownStartingEventArgs,
  DispatcherQueueController,
  UserWatcher,
  User,
  UserChangedEventArgs,
  UserAuthenticationStatusChangingEventArgs,
  UserAuthenticationStatusChangeDeferral,
  KnownUserProperties,
  UserPicker,
  UserDeviceAssociationChangedEventArgs,
  UserDeviceAssociation,
  AppMemoryUsageLimitChangingEventArgs,
  AppMemoryReport,
  ProcessMemoryReport,
  MemoryManager,
  ProtocolForResultsOperation,
  AppDiagnosticInfo,
  AppDiagnosticInfoWatcher,
  AppResourceGroupInfo,
  AppActivationResult,
  AppResourceGroupInfoWatcher,
  AppDiagnosticInfoWatcherEventArgs,
  AppExecutionStateChangeResult,
  AppResourceGroupBackgroundTaskReport,
  AppResourceGroupMemoryReport,
  AppResourceGroupStateReport,
  AppResourceGroupInfoWatcherEventArgs,
  AppResourceGroupInfoWatcherExecutionStateChangedEventArgs,
  LaunchUriResult,
  LauncherUIOptions,
  ILauncherViewOptions,
  LauncherOptions,
  RemoteLauncherOptions,
  FolderLauncherOptions,
  Launcher,
  RemoteLauncher,
  DateTimeSettings,
  ProcessLauncherOptions,
  ProcessLauncherResult,
  ProcessLauncher,
  ShutdownManager,
  TimeZoneSettings,
} = load(namespace.name);

reference(namespace.externalReference);

export * as diagnostics from "./system.diagnostics.js";
export * as display from "./system.display.js";
export * as inventory from "./system.inventory.js";
export * as power from "./system.power.js";
export * as profile from "./system.profile.js";
export * as remotedesktop from "./system.remotedesktop.js";
export * as remotesystems from "./system.remotesystems.js";
export * as threading from "./system.threading.js";
export * as userprofile from "./system.userprofile.js";