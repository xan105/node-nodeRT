/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.alljoyn
  name: "windows.devices.alljoyn",
  externalReference: [
    "Windows.Foundation",
    "Windows.Globalization",
    "Windows.Devices.Enumeration",
    "Windows.Security.Credentials",
    "Windows.Security.Cryptography.Certificates",
    "Windows.Networking.Sockets",
  ]
};

export const {
  AllJoynAuthenticationMechanism,
  AllJoynBusAttachmentState,
  AllJoynSessionLostReason,
  AllJoynTrafficType,
  AllJoynAboutData,
  AllJoynAboutDataView,
  AllJoynAcceptSessionJoinerEventArgs,
  AllJoynAuthenticationCompleteEventArgs,
  AllJoynBusAttachment,
  AllJoynBusAttachmentStateChangedEventArgs,
  AllJoynBusObject,
  AllJoynBusObjectStoppedEventArgs,
  AllJoynCredentials,
  AllJoynCredentialsRequestedEventArgs,
  AllJoynCredentialsVerificationRequestedEventArgs,
  AllJoynMessageInfo,
  AllJoynProducerStoppedEventArgs,
  AllJoynServiceInfo,
  AllJoynServiceInfoRemovedEventArgs,
  AllJoynSession,
  AllJoynSessionJoinedEventArgs,
  AllJoynSessionLostEventArgs,
  AllJoynSessionMemberAddedEventArgs,
  AllJoynSessionMemberRemovedEventArgs,
  AllJoynStatus,
  AllJoynWatcherStoppedEventArgs,
  IAllJoynAcceptSessionJoiner,
  IAllJoynProducer,
} = load(namespace.name);

reference(namespace.externalReference);
