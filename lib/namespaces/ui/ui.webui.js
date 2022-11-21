/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.webui
  name: "windows.ui.webui",
  externalReference: [
    "Windows.ApplicationModel.Activation",
    "Windows.Devices.Printers.Extensions",
    "Windows.ApplicationModel.Calls",
    "Windows.ApplicationModel.Contacts.Provider",
    "Windows.ApplicationModel.Contacts",
    "Windows.ApplicationModel.Search",
    "Windows.ApplicationModel.Wallet",
    "Windows.System",
    "Windows.ApplicationModel.Appointments.AppointmentsProvider",
    "Windows.ApplicationModel.DataTransfer.ShareTarget",
    "Windows.ApplicationModel.UserDataAccounts.Provider",
    "Windows.Devices.Enumeration",
    "Windows.Media.SpeechRecognition",
    "Windows.Storage",
    "Windows.Storage.Search",
    "Windows.Foundation",
    "Windows.Storage.Pickers.Provider",
    "Windows.Storage.Provider",
    "Windows.Security.Authentication.Web",
    "Windows.Security.Authentication.Web.Provider",
    "Windows.ApplicationModel",
    "Windows.ApplicationModel.Background",
    "Windows.ApplicationModel.Core",
  ]
};

export const {
  PrintContent,
  WebUIPrintTaskSettingsActivatedEventArgs,
  WebUIPrint3DWorkflowActivatedEventArgs,
  WebUILockScreenCallActivatedEventArgs,
  WebUICameraSettingsActivatedEventArgs,
  WebUIContactPickerActivatedEventArgs,
  WebUIContactCallActivatedEventArgs,
  WebUIContactMessageActivatedEventArgs,
  WebUIContactMapActivatedEventArgs,
  WebUIContactPostActivatedEventArgs,
  WebUIContactVideoCallActivatedEventArgs,
  WebUISearchActivatedEventArgs,
  WebUIWalletActionActivatedEventArgs,
  WebUIAppointmentsProviderAddAppointmentActivatedEventArgs,
  WebUIAppointmentsProviderReplaceAppointmentActivatedEventArgs,
  WebUIAppointmentsProviderRemoveAppointmentActivatedEventArgs,
  WebUIAppointmentsProviderShowAppointmentDetailsActivatedEventArgs,
  WebUIAppointmentsProviderShowTimeFrameActivatedEventArgs,
  WebUIContactPanelActivatedEventArgs,
  WebUIShareTargetActivatedEventArgs,
  WebUIUserDataAccountProviderActivatedEventArgs,
  WebUIDevicePairingActivatedEventArgs,
  WebUIVoiceCommandActivatedEventArgs,
  ActivatedDeferral,
  ActivatedOperation,
  IActivatedEventArgsDeferral,
  WebUILaunchActivatedEventArgs,
  WebUIFileActivatedEventArgs,
  WebUIProtocolActivatedEventArgs,
  WebUIProtocolForResultsActivatedEventArgs,
  WebUIFileOpenPickerActivatedEventArgs,
  WebUIFileSavePickerActivatedEventArgs,
  WebUICachedFileUpdaterActivatedEventArgs,
  WebUIDeviceActivatedEventArgs,
  WebUILockScreenActivatedEventArgs,
  WebUIRestrictedLaunchActivatedEventArgs,
  WebUIFileOpenPickerContinuationEventArgs,
  WebUIFileSavePickerContinuationEventArgs,
  WebUIFolderPickerContinuationEventArgs,
  WebUIWebAuthenticationBrokerContinuationEventArgs,
  WebUIWebAccountProviderActivatedEventArgs,
  WebUIDialReceiverActivatedEventArgs,
  WebUIToastNotificationActivatedEventArgs,
  WebUILockScreenComponentActivatedEventArgs,
  WebUIPrintWorkflowForegroundTaskActivatedEventArgs,
  WebUICommandLineActivatedEventArgs,
  WebUIStartupTaskActivatedEventArgs,
  WebUIBarcodeScannerPreviewActivatedEventArgs,
  IWebUINavigatedEventArgs,
  WebUINavigatedOperation,
  SuspendingDeferral,
  SuspendingOperation,
  SuspendingEventArgs,
  LeavingBackgroundEventArgs,
  EnteredBackgroundEventArgs,
  IWebUIBackgroundTaskInstance,
  WebUIBackgroundTaskInstanceRuntimeClass,
  WebUIBackgroundTaskInstance,
  WebUINavigatedDeferral,
  WebUINavigatedEventArgs,
  WebUIApplication,
  HtmlPrintDocumentSource,
} = load(namespace.name);

reference(namespace.externalReference);

export * as core from "./ui.webui.core.js";