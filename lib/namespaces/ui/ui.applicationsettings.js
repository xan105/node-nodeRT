/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.applicationsettings
  name: "windows.ui.applicationsettings",
  externalReference: [
    "Windows.UI.Popups",
    "Windows.Security.Credentials",
    "Windows.System",
    "Windows.Foundation",
  ]
};

export const {
  WebAccountAction,
  SupportedWebAccountActions,
  SettingsEdgeLocation,
  SettingsCommand,
  WebAccountProviderCommand,
  WebAccountCommand,
  WebAccountInvokedArgs,
  CredentialCommand,
  AccountsSettingsPaneEventDeferral,
  AccountsSettingsPaneCommandsRequestedEventArgs,
  AccountsSettingsPane,
  SettingsPaneCommandsRequest,
  SettingsPaneCommandsRequestedEventArgs,
  SettingsPane,
} = load(namespace.name);

reference(namespace.externalReference);
