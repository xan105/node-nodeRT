/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.perception.spatial
  name: "windows.perception.spatial",
  externalReference: [
    "Windows.Perception",
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.System.RemoteSystems",
  ]
};

export const {
} = load(namespace.name);

reference(namespace.externalReference);

export * as surfaces from "./perception.spatial.surfaces.js";