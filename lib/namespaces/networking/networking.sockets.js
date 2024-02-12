/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.networking.sockets
  name: "windows.networking.sockets",
  externalReference: [
    "Windows.ApplicationModel.Background",
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Networking",
    "Windows.Networking.Connectivity",
    "Windows.Security.Credentials",
    "Windows.Security.Cryptography.Certificates",
    "Windows.Web",
  ]
};

export const {
  ControlChannelTriggerResetReason,
  ControlChannelTriggerResourceType,
  ControlChannelTriggerStatus,
  MessageWebSocketReceiveMode,
  SocketActivityConnectedStandbyAction,
  SocketActivityKind,
  SocketActivityTriggerReason,
  SocketErrorStatus,
  SocketMessageType,
  SocketProtectionLevel,
  SocketQualityOfService,
  SocketSslErrorSeverity,
  ControlChannelTrigger,
  DatagramSocket,
  DatagramSocketControl,
  DatagramSocketInformation,
  DatagramSocketMessageReceivedEventArgs,
  IControlChannelTriggerEventDetails,
  IControlChannelTriggerResetEventDetails,
  IWebSocket,
  IWebSocketControl,
  IWebSocketControl2,
  IWebSocketInformation,
  IWebSocketInformation2,
  MessageWebSocket,
  MessageWebSocketControl,
  MessageWebSocketInformation,
  MessageWebSocketMessageReceivedEventArgs,
  ServerMessageWebSocket,
  ServerMessageWebSocketControl,
  ServerMessageWebSocketInformation,
  ServerStreamWebSocket,
  ServerStreamWebSocketInformation,
  SocketActivityContext,
  SocketActivityInformation,
  SocketActivityTriggerDetails,
  SocketError,
  StreamSocket,
  StreamSocketControl,
  StreamSocketInformation,
  StreamSocketListener,
  StreamSocketListenerConnectionReceivedEventArgs,
  StreamSocketListenerControl,
  StreamSocketListenerInformation,
  StreamWebSocket,
  StreamWebSocketControl,
  StreamWebSocketInformation,
  WebSocketClosedEventArgs,
  WebSocketError,
  WebSocketKeepAlive,
  WebSocketServerCustomValidationRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
