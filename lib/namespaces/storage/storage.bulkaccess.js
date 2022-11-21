/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.storage.bulkaccess
  name: "windows.storage.bulkaccess",
  externalReference: [
    "Windows.Storage.FileProperties",
    "Windows.Storage.Search",
    "Windows.Storage",
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  IStorageItemInformation,
  FileInformationFactory,
  FileInformation,
  FolderInformation,
} = load(namespace.name);

reference(namespace.externalReference);
