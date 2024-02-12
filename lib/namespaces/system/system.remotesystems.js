/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.system.remotesystems
  name: "windows.system.remotesystems",
  externalReference: [
    "Windows.System",
    "Windows.Networking",
    "Windows.ApplicationModel.AppService",
    "Windows.Foundation",
    "Windows.Security.Credentials",
  ]
};

export const {
  RemoteSystemAccessStatus,
  RemoteSystemAuthorizationKind,
  RemoteSystemDiscoveryType,
  RemoteSystemPlatform,
  RemoteSystemSessionCreationStatus,
  RemoteSystemSessionDisconnectedReason,
  RemoteSystemSessionJoinStatus,
  RemoteSystemSessionMessageChannelReliability,
  RemoteSystemSessionParticipantWatcherStatus,
  RemoteSystemSessionWatcherStatus,
  RemoteSystemStatus,
  RemoteSystemStatusType,
  RemoteSystemWatcherError,
  IRemoteSystemFilter,
  KnownRemoteSystemCapabilities,
  RemoteSystem,
  RemoteSystemAddedEventArgs,
  RemoteSystemApp,
  RemoteSystemAppRegistration,
  RemoteSystemAuthorizationKindFilter,
  RemoteSystemConnectionInfo,
  RemoteSystemConnectionRequest,
  RemoteSystemDiscoveryTypeFilter,
  RemoteSystemEnumerationCompletedEventArgs,
  RemoteSystemKindFilter,
  RemoteSystemKinds,
  RemoteSystemRemovedEventArgs,
  RemoteSystemSession,
  RemoteSystemSessionAddedEventArgs,
  RemoteSystemSessionController,
  RemoteSystemSessionCreationResult,
  RemoteSystemSessionDisconnectedEventArgs,
  RemoteSystemSessionInfo,
  RemoteSystemSessionInvitation,
  RemoteSystemSessionInvitationListener,
  RemoteSystemSessionInvitationReceivedEventArgs,
  RemoteSystemSessionJoinRequest,
  RemoteSystemSessionJoinRequestedEventArgs,
  RemoteSystemSessionJoinResult,
  RemoteSystemSessionMessageChannel,
  RemoteSystemSessionOptions,
  RemoteSystemSessionParticipant,
  RemoteSystemSessionParticipantAddedEventArgs,
  RemoteSystemSessionParticipantRemovedEventArgs,
  RemoteSystemSessionParticipantWatcher,
  RemoteSystemSessionRemovedEventArgs,
  RemoteSystemSessionUpdatedEventArgs,
  RemoteSystemSessionValueSetReceivedEventArgs,
  RemoteSystemSessionWatcher,
  RemoteSystemStatusTypeFilter,
  RemoteSystemUpdatedEventArgs,
  RemoteSystemWatcher,
  RemoteSystemWatcherErrorOccurredEventArgs,
  RemoteSystemWebAccountFilter,
} = load(namespace.name);

reference(namespace.externalReference);
