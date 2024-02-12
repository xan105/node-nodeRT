/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.phone.personalinformation
  name: "windows.phone.personalinformation",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  ContactChangeType,
  ContactQueryResultOrdering,
  ContactStoreApplicationAccessMode,
  ContactStoreSystemAccessMode,
  VCardFormat,
  ContactAddress,
  ContactChangeRecord,
  ContactInformation,
  ContactQueryOptions,
  ContactQueryResult,
  ContactStore,
  IContactInformation,
  IContactInformation2,
  KnownContactProperties,
  StoredContact,
} = load(namespace.name);

reference(namespace.externalReference);

export * as provisioning from "./phone.personalinformation.provisioning.js";