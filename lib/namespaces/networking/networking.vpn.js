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
    "Windows.Security.Cryptography.Certificates",
    "Windows.Security.Credentials",
    "Windows.Networking",
    "Windows.Foundation",
    "Windows.Networking.Sockets",
    "Windows.ApplicationModel.Activation",
    "Windows.System",
    "Windows.Storage.Streams",
  ]
};

export const {
  VpnAppIdType,
  VpnAuthenticationMethod,
  VpnChannelActivityEventType,
  VpnChannelRequestCredentialsOptions,
  VpnCredentialType,
  VpnDataPathType,
  VpnDomainNameType,
  VpnIPProtocol,
  VpnManagementConnectionStatus,
  VpnManagementErrorStatus,
  VpnNativeProtocolType,
  VpnPacketBufferStatus,
  VpnRoutingPolicyType,
  IVpnChannelStatics,
  IVpnCredential,
  IVpnCustomPrompt,
  IVpnCustomPromptElement,
  IVpnDomainNameInfoFactory,
  IVpnInterfaceIdFactory,
  IVpnNamespaceInfoFactory,
  IVpnPacketBufferFactory,
  IVpnPlugIn,
  IVpnProfile,
  IVpnRouteFactory,
  VpnAppId,
  VpnChannel,
  VpnChannelActivityEventArgs,
  VpnChannelActivityStateChangedArgs,
  VpnChannelConfiguration,
  VpnCredential,
  VpnCustomCheckBox,
  VpnCustomComboBox,
  VpnCustomEditBox,
  VpnCustomErrorBox,
  VpnCustomPromptBooleanInput,
  VpnCustomPromptOptionSelector,
  VpnCustomPromptText,
  VpnCustomPromptTextInput,
  VpnCustomTextBox,
  VpnDomainNameAssignment,
  VpnDomainNameInfo,
  VpnForegroundActivatedEventArgs,
  VpnForegroundActivationOperation,
  VpnInterfaceId,
  VpnManagementAgent,
  VpnNamespaceAssignment,
  VpnNamespaceInfo,
  VpnNativeProfile,
  VpnPacketBuffer,
  VpnPacketBufferList,
  VpnPickedCredential,
  VpnPlugInProfile,
  VpnRoute,
  VpnRouteAssignment,
  VpnSystemHealth,
  VpnTrafficFilter,
  VpnTrafficFilterAssignment,
} = load(namespace.name);

reference(namespace.externalReference);
