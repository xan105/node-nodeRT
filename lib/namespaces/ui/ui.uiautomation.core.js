/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.uiautomation.core
  name: "windows.ui.uiautomation.core",
  externalReference: [
    "Windows.UI.UIAutomation",
    "Windows.Foundation",
  ]
};

export const {
  AutomationRemoteOperationStatus,
  AutomationRemoteOperationResult,
  CoreAutomationRegistrar,
  CoreAutomationRemoteOperation,
  CoreAutomationRemoteOperationContext,
  ICoreAutomationConnectionBoundObjectProvider,
  ICoreAutomationRemoteOperationExtensionProvider,
  RemoteAutomationClientSession,
  RemoteAutomationConnectionRequestedEventArgs,
  RemoteAutomationDisconnectedEventArgs,
  RemoteAutomationServer,
  RemoteAutomationWindow,
} = load(namespace.name);

reference(namespace.externalReference);
