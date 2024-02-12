/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel
  name: "windows.applicationmodel",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.System",
    "Windows.Foundation",
    "Windows.ApplicationModel.Activation",
    "Windows.Storage",
    "Windows.ApplicationModel.Core",
  ]
};

export const {
  AddResourcePackageOptions,
  AppExecutionContext,
  AppInstallerPolicySource,
  FullTrustLaunchResult,
  LimitedAccessFeatureStatus,
  PackageContentGroupState,
  PackageRelationship,
  PackageSignatureKind,
  PackageUpdateAvailability,
  StartupTaskState,
  AppDisplayInfo,
  AppInfo,
  AppInstallerInfo,
  AppInstance,
  CameraApplicationManager,
  DesignMode,
  EnteredBackgroundEventArgs,
  FindRelatedPackagesOptions,
  FullTrustProcessLaunchResult,
  FullTrustProcessLauncher,
  IEnteredBackgroundEventArgs,
  ILeavingBackgroundEventArgs,
  IPackageCatalogStatics2,
  ISuspendingDeferral,
  ISuspendingEventArgs,
  ISuspendingOperation,
  LeavingBackgroundEventArgs,
  LimitedAccessFeatureRequestResult,
  LimitedAccessFeatures,
  Package,
  PackageCatalog,
  PackageCatalogAddOptionalPackageResult,
  PackageCatalogAddResourcePackageResult,
  PackageCatalogRemoveOptionalPackagesResult,
  PackageCatalogRemoveResourcePackagesResult,
  PackageContentGroup,
  PackageContentGroupStagingEventArgs,
  PackageId,
  PackageInstallingEventArgs,
  PackageStagingEventArgs,
  PackageStatus,
  PackageStatusChangedEventArgs,
  PackageUninstallingEventArgs,
  PackageUpdateAvailabilityResult,
  PackageUpdatingEventArgs,
  StartupTask,
  SuspendingDeferral,
  SuspendingEventArgs,
  SuspendingOperation,
} = load(namespace.name);

reference(namespace.externalReference);

export * as activation from "./applicationmodel.activation.js";
export * as appextensions from "./applicationmodel.appextensions.js";
export * as appointments from "./applicationmodel.appointments.js";
export * as appservice from "./applicationmodel.appservice.js";
export * as background from "./applicationmodel.background.js";
export * as calls from "./applicationmodel.calls.js";
export * as chat from "./applicationmodel.chat.js";
export * as communicationblocking from "./applicationmodel.communicationblocking.js";
export * as contacts from "./applicationmodel.contacts.js";
export * as conversationalagent from "./applicationmodel.conversationalagent.js";
export * as core from "./applicationmodel.core.js";
export * as datatransfer from "./applicationmodel.datatransfer.js";
export * as email from "./applicationmodel.email.js";
export * as extendedexecution from "./applicationmodel.extendedexecution.js";
export * as holographic from "./applicationmodel.holographic.js";
export * as lockscreen from "./applicationmodel.lockscreen.js";
export * as payments from "./applicationmodel.payments.js";
export * as resources from "./applicationmodel.resources.js";
export * as search from "./applicationmodel.search.js";
export * as socialinfo from "./applicationmodel.socialinfo.js";
export * as store from "./applicationmodel.store.js";
export * as useractivities from "./applicationmodel.useractivities.js";
export * as userdataaccounts from "./applicationmodel.userdataaccounts.js";
export * as userdatatasks from "./applicationmodel.userdatatasks.js";
export * as voicecommands from "./applicationmodel.voicecommands.js";
export * as wallet from "./applicationmodel.wallet.js";