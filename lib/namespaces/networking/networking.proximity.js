/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.networking.proximity
  name: "windows.networking.proximity",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Networking.Sockets",
    "Windows.Networking",
    "Windows.Foundation",
  ]
};

export const {
  PeerDiscoveryTypes,
  PeerRole,
  PeerWatcherStatus,
  TriggeredConnectState,
  ConnectionRequestedEventArgs,
  PeerFinder,
  PeerInformation,
  PeerWatcher,
  ProximityDevice,
  ProximityMessage,
  TriggeredConnectionStateChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);
