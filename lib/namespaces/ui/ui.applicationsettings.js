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
    "Windows.Foundation",
    "Windows.System",
    "Windows.Security.Credentials",
    "Windows.UI.Popups",
  ]
};

export const {
  SettingsEdgeLocation,
  SupportedWebAccountActions,
  WebAccountAction,
  AccountsSettingsPane,
  AccountsSettingsPaneCommandsRequestedEventArgs,
  AccountsSettingsPaneEventDeferral,
  CredentialCommand,
  SettingsCommand,
  SettingsPane,
  SettingsPaneCommandsRequest,
  SettingsPaneCommandsRequestedEventArgs,
  WebAccountCommand,
  WebAccountInvokedArgs,
  WebAccountProviderCommand,
} = load(namespace.name);

reference(namespace.externalReference);
