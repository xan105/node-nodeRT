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
    "Windows.Networking",
    "Windows.Foundation",
  ]
};

export const {
  RemoteSystemStatus,
  RemoteSystemDiscoveryType,
  RemoteSystemStatusType,
  RemoteSystemAccessStatus,
  RemoteSystemAuthorizationKind,
  RemoteSystemPlatform,
  RemoteSystemWatcherError,
  RemoteSystemSessionJoinStatus,
  RemoteSystemSessionWatcherStatus,
  RemoteSystemSessionParticipantWatcherStatus,
  RemoteSystemSessionCreationStatus,
  RemoteSystemSessionDisconnectedReason,
  RemoteSystemSessionMessageChannelReliability,
  IRemoteSystemFilter,
  RemoteSystem,
  RemoteSystemWatcher,
  KnownRemoteSystemCapabilities,
  RemoteSystemAuthorizationKindFilter,
  RemoteSystemAddedEventArgs,
  RemoteSystemUpdatedEventArgs,
  RemoteSystemRemovedEventArgs,
  RemoteSystemEnumerationCompletedEventArgs,
  RemoteSystemWatcherErrorOccurredEventArgs,
  RemoteSystemConnectionRequest,
  RemoteSystemKinds,
  RemoteSystemKindFilter,
  RemoteSystemDiscoveryTypeFilter,
  RemoteSystemStatusTypeFilter,
  RemoteSystemSession,
  RemoteSystemSessionJoinResult,
  RemoteSystemSessionInfo,
  RemoteSystemSessionAddedEventArgs,
  RemoteSystemSessionUpdatedEventArgs,
  RemoteSystemSessionRemovedEventArgs,
  RemoteSystemSessionWatcher,
  RemoteSystemSessionInvitation,
  RemoteSystemSessionInvitationReceivedEventArgs,
  RemoteSystemSessionInvitationListener,
  RemoteSystemSessionParticipant,
  RemoteSystemSessionParticipantAddedEventArgs,
  RemoteSystemSessionParticipantRemovedEventArgs,
  RemoteSystemSessionParticipantWatcher,
  RemoteSystemSessionJoinRequest,
  RemoteSystemSessionJoinRequestedEventArgs,
  RemoteSystemSessionCreationResult,
  RemoteSystemSessionOptions,
  RemoteSystemSessionController,
  RemoteSystemSessionDisconnectedEventArgs,
  RemoteSystemSessionValueSetReceivedEventArgs,
  RemoteSystemSessionMessageChannel,
} = load(namespace.name);

reference(namespace.externalReference);
