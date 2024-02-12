/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.system.profile
  name: "windows.system.profile",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.System",
  ]
};

export const {
  PlatformDataCollectionLevel,
  SystemIdentificationSource,
  SystemOutOfBoxExperienceState,
  UnsupportedAppRequirementReasons,
  AnalyticsInfo,
  AnalyticsVersionInfo,
  AppApplicability,
  EducationSettings,
  HardwareIdentification,
  HardwareToken,
  KnownRetailInfoProperties,
  PlatformDiagnosticsAndUsageDataSettings,
  RetailInfo,
  SharedModeSettings,
  SmartAppControlPolicy,
  SystemIdentification,
  SystemIdentificationInfo,
  SystemSetupInfo,
  UnsupportedAppRequirement,
  WindowsIntegrityPolicy,
} = load(namespace.name);

reference(namespace.externalReference);

export * as systemmanufacturers from "./system.profile.systemmanufacturers.js";