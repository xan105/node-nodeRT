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
    "Windows.System",
    "Windows.Foundation",
    "Windows.ApplicationModel.Contacts",
    "Windows.Devices.Enumeration",
  ]
};

export const {
  CellularDtmfMode,
  DtmfKey,
  DtmfToneAudioPlayback,
  PhoneAudioRoutingEndpoint,
  PhoneCallAudioDevice,
  PhoneCallDirection,
  PhoneCallHistoryEntryMedia,
  PhoneCallHistoryEntryOtherAppReadAccess,
  PhoneCallHistoryEntryQueryDesiredMedia,
  PhoneCallHistoryEntryRawAddressKind,
  PhoneCallHistorySourceIdKind,
  PhoneCallHistoryStoreAccessType,
  PhoneCallMedia,
  PhoneCallOperationStatus,
  PhoneCallStatus,
  PhoneLineNetworkOperatorDisplayTextLocation,
  PhoneLineOperationStatus,
  PhoneLineTransport,
  PhoneLineWatcherStatus,
  PhoneNetworkState,
  PhoneSimState,
  PhoneVoicemailType,
  TransportDeviceAudioRoutingStatus,
  VoipPhoneCallMedia,
  VoipPhoneCallRejectReason,
  VoipPhoneCallResourceReservationStatus,
  VoipPhoneCallState,
  CallAnswerEventArgs,
  CallRejectEventArgs,
  CallStateChangeEventArgs,
  LockScreenCallEndCallDeferral,
  LockScreenCallEndRequestedEventArgs,
  LockScreenCallUI,
  MuteChangeEventArgs,
  PhoneCall,
  PhoneCallBlocking,
  PhoneCallHistoryEntry,
  PhoneCallHistoryEntryAddress,
  PhoneCallHistoryEntryQueryOptions,
  PhoneCallHistoryEntryReader,
  PhoneCallHistoryManager,
  PhoneCallHistoryManagerForUser,
  PhoneCallHistoryStore,
  PhoneCallInfo,
  PhoneCallManager,
  PhoneCallStore,
  PhoneCallVideoCapabilities,
  PhoneCallVideoCapabilitiesManager,
  PhoneCallsResult,
  PhoneDialOptions,
  PhoneLine,
  PhoneLineCellularDetails,
  PhoneLineConfiguration,
  PhoneLineDialResult,
  PhoneLineTransportDevice,
  PhoneLineWatcher,
  PhoneLineWatcherEventArgs,
  PhoneVoicemail,
  VoipCallCoordinator,
  VoipPhoneCall,
} = load(namespace.name);

reference(namespace.externalReference);

export * as background from "./applicationmodel.calls.background.js";
export * as provider from "./applicationmodel.calls.provider.js";