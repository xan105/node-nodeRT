/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.userdataaccounts
  name: "windows.applicationmodel.userdataaccounts",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
    "Windows.ApplicationModel.Appointments",
    "Windows.ApplicationModel.Email",
    "Windows.ApplicationModel.Contacts",
    "Windows.ApplicationModel.UserDataTasks",
    "Windows.System",
  ]
};

export const {
  UserDataAccountContentKinds,
  UserDataAccountOtherAppReadAccess,
  UserDataAccountStoreAccessType,
  UserDataAccount,
  UserDataAccountManager,
  UserDataAccountManagerForUser,
  UserDataAccountStore,
  UserDataAccountStoreChangedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as provider from "./applicationmodel.userdataaccounts.provider.js";
export * as systemaccess from "./applicationmodel.userdataaccounts.systemaccess.js";