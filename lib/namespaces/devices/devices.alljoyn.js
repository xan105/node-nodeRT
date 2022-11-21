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
    "Windows.Security.Cryptography.Certificates",
    "Windows.Networking.Sockets",
    "Windows.Security.Credentials",
  ]
};

export const {
  AllJoynAuthenticationMechanism,
  AllJoynBusAttachmentState,
  AllJoynTrafficType,
  AllJoynSessionLostReason,
  AllJoynStatus,
  AllJoynAboutData,
  AllJoynBusAttachment,
  AllJoynBusAttachmentStateChangedEventArgs,
  AllJoynCredentialsRequestedEventArgs,
  AllJoynCredentialsVerificationRequestedEventArgs,
  AllJoynAuthenticationCompleteEventArgs,
  AllJoynServiceInfo,
  AllJoynAboutDataView,
  AllJoynAcceptSessionJoinerEventArgs,
  AllJoynSessionJoinedEventArgs,
  AllJoynCredentials,
  AllJoynSession,
  AllJoynSessionMemberAddedEventArgs,
  AllJoynSessionMemberRemovedEventArgs,
  AllJoynSessionLostEventArgs,
  IAllJoynProducer,
  AllJoynBusObject,
  AllJoynBusObjectStoppedEventArgs,
  IAllJoynAcceptSessionJoiner,
  AllJoynProducerStoppedEventArgs,
  AllJoynWatcherStoppedEventArgs,
  AllJoynServiceInfoRemovedEventArgs,
  AllJoynMessageInfo,
} = load(namespace.name);

reference(namespace.externalReference);
