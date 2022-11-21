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
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.Networking",
    "Windows.Networking.Connectivity",
    "Windows.Security.Cryptography.Certificates",
    "Windows.Security.Credentials",
    "Windows.ApplicationModel.Background",
    "Windows.Web",
  ]
};

export const {
  ControlChannelTriggerStatus,
  SocketMessageType,
  SocketProtectionLevel,
  SocketQualityOfService,
  SocketErrorStatus,
  SocketSslErrorSeverity,
  SocketActivityKind,
  SocketActivityTriggerReason,
  SocketActivityConnectedStandbyAction,
  MessageWebSocketReceiveMode,
  ControlChannelTriggerResourceType,
  ControlChannelTriggerResetReason,
  SocketActivityContext,
  DatagramSocket,
  StreamSocket,
  StreamSocketListener,
  SocketActivityInformation,
  DatagramSocketControl,
  DatagramSocketInformation,
  DatagramSocketMessageReceivedEventArgs,
  StreamSocketControl,
  StreamSocketInformation,
  StreamSocketListenerControl,
  StreamSocketListenerInformation,
  StreamSocketListenerConnectionReceivedEventArgs,
  IWebSocketControl,
  IWebSocketControl2,
  IWebSocketInformation,
  IWebSocketInformation2,
  IWebSocket,
  WebSocketClosedEventArgs,
  MessageWebSocketControl,
  MessageWebSocketInformation,
  MessageWebSocket,
  MessageWebSocketMessageReceivedEventArgs,
  WebSocketServerCustomValidationRequestedEventArgs,
  StreamWebSocketControl,
  StreamWebSocketInformation,
  StreamWebSocket,
  ServerMessageWebSocket,
  ServerMessageWebSocketControl,
  ServerMessageWebSocketInformation,
  ServerStreamWebSocketInformation,
  ServerStreamWebSocket,
  WebSocketKeepAlive,
  SocketError,
  WebSocketError,
  SocketActivityTriggerDetails,
  ControlChannelTrigger,
  IControlChannelTriggerEventDetails,
  IControlChannelTriggerResetEventDetails,
} = load(namespace.name);

reference(namespace.externalReference);
