/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.gaming.xboxlive.storage
  name: "windows.gaming.xboxlive.storage",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.System",
  ]
};

export const {
  GameSaveErrorStatus,
  GameSaveContainer,
  GameSaveOperationResult,
  GameSaveContainerInfoQuery,
  GameSaveProviderGetResult,
  GameSaveProvider,
  GameSaveBlobGetResult,
  GameSaveBlobInfoQuery,
  GameSaveContainerInfo,
  GameSaveBlobInfo,
  GameSaveContainerInfoGetResult,
  GameSaveBlobInfoGetResult,
} = load(namespace.name);

reference(namespace.externalReference);
