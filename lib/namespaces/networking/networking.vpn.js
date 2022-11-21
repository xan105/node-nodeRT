/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.networking.vpn
  name: "windows.networking.vpn",
  externalReference: [
    "Windows.Networking",
    "Windows.Security.Cryptography.Certificates",
    "Windows.Security.Credentials",
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Networking.Sockets",
  ]
};

export const {
  VpnDataPathType,
  VpnChannelActivityEventType,
  VpnCredentialType,
  VpnPacketBufferStatus,
  VpnChannelRequestCredentialsOptions,
  VpnDomainNameType,
  VpnAppIdType,
  VpnIPProtocol,
  VpnRoutingPolicyType,
  VpnManagementConnectionStatus,
  VpnNativeProtocolType,
  VpnAuthenticationMethod,
  VpnManagementErrorStatus,
  IVpnPlugIn,
  IVpnCustomPrompt,
  IVpnRouteFactory,
  VpnRoute,
  IVpnNamespaceInfoFactory,
  VpnNamespaceInfo,
  IVpnInterfaceIdFactory,
  VpnInterfaceId,
  IVpnCredential,
  VpnRouteAssignment,
  VpnNamespaceAssignment,
  VpnPickedCredential,
  VpnPacketBuffer,
  VpnChannelConfiguration,
  VpnChannel,
  VpnChannelActivityEventArgs,
  VpnSystemHealth,
  VpnDomainNameAssignment,
  VpnChannelActivityStateChangedArgs,
  IVpnCustomPromptElement,
  VpnCredential,
  VpnTrafficFilterAssignment,
  IVpnChannelStatics,
  IVpnPacketBufferFactory,
  VpnAppId,
  IVpnDomainNameInfoFactory,
  VpnDomainNameInfo,
  VpnTrafficFilter,
  IVpnProfile,
  VpnPacketBufferList,
  VpnCustomEditBox,
  VpnCustomPromptTextInput,
  VpnCustomComboBox,
  VpnCustomPromptOptionSelector,
  VpnCustomTextBox,
  VpnCustomPromptText,
  VpnCustomCheckBox,
  VpnCustomPromptBooleanInput,
  VpnCustomErrorBox,
  VpnPlugInProfile,
  VpnNativeProfile,
  VpnManagementAgent,
} = load(namespace.name);

reference(namespace.externalReference);
