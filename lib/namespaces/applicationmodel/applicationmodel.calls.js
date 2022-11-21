/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.calls
  name: "windows.applicationmodel.calls",
  externalReference: [
    "Windows.Foundation",
    "Windows.ApplicationModel.Contacts",
    "Windows.System",
  ]
};

export const {
  PhoneNetworkState,
  PhoneVoicemailType,
  PhoneCallMedia,
  PhoneLineTransport,
  PhoneSimState,
  PhoneAudioRoutingEndpoint,
  PhoneLineWatcherStatus,
  PhoneLineNetworkOperatorDisplayTextLocation,
  CellularDtmfMode,
  VoipPhoneCallMedia,
  VoipPhoneCallRejectReason,
  VoipPhoneCallState,
  VoipPhoneCallResourceReservationStatus,
  PhoneCallHistoryEntryOtherAppReadAccess,
  PhoneCallHistoryEntryMedia,
  PhoneCallHistoryEntryRawAddressKind,
  PhoneCallHistoryEntryQueryDesiredMedia,
  PhoneCallHistoryStoreAccessType,
  PhoneCallHistorySourceIdKind,
  PhoneLine,
  PhoneVoicemail,
  PhoneLineCellularDetails,
  PhoneCallVideoCapabilities,
  PhoneLineConfiguration,
  PhoneDialOptions,
  PhoneLineWatcher,
  PhoneLineWatcherEventArgs,
  PhoneCallStore,
  PhoneCallManager,
  PhoneCallVideoCapabilitiesManager,
  PhoneCallBlocking,
  CallStateChangeEventArgs,
  CallAnswerEventArgs,
  CallRejectEventArgs,
  VoipPhoneCall,
  MuteChangeEventArgs,
  VoipCallCoordinator,
  LockScreenCallEndCallDeferral,
  LockScreenCallUI,
  LockScreenCallEndRequestedEventArgs,
  PhoneCallHistoryEntryAddress,
  PhoneCallHistoryEntry,
  PhoneCallHistoryEntryReader,
  PhoneCallHistoryEntryQueryOptions,
  PhoneCallHistoryStore,
  PhoneCallHistoryManagerForUser,
  PhoneCallHistoryManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as background from "./applicationmodel.calls.background.js";
export * as provider from "./applicationmodel.calls.provider.js";