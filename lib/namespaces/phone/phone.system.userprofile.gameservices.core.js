/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.phone.system.userprofile.gameservices.core
  name: "windows.phone.system.userprofile.gameservices.core",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  GameServiceGameOutcome,
  GameServiceScoreKind,
  GameService,
  GameServicePropertyCollection,
} = load(namespace.name);

reference(namespace.externalReference);
