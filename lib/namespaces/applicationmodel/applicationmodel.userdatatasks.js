/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.userdatatasks
  name: "windows.applicationmodel.userdatatasks",
  externalReference: [
    "Windows.Foundation",
    "Windows.System",
  ]
};

export const {
  UserDataTaskDaysOfWeek,
  UserDataTaskDetailsKind,
  UserDataTaskKind,
  UserDataTaskListOtherAppReadAccess,
  UserDataTaskListOtherAppWriteAccess,
  UserDataTaskListSyncStatus,
  UserDataTaskPriority,
  UserDataTaskQueryKind,
  UserDataTaskQuerySortProperty,
  UserDataTaskRecurrenceUnit,
  UserDataTaskRegenerationUnit,
  UserDataTaskSensitivity,
  UserDataTaskStoreAccessType,
  UserDataTaskWeekOfMonth,
  UserDataTask,
  UserDataTaskBatch,
  UserDataTaskList,
  UserDataTaskListLimitedWriteOperations,
  UserDataTaskListSyncManager,
  UserDataTaskManager,
  UserDataTaskQueryOptions,
  UserDataTaskReader,
  UserDataTaskRecurrenceProperties,
  UserDataTaskRegenerationProperties,
  UserDataTaskStore,
} = load(namespace.name);

reference(namespace.externalReference);

export * as dataprovider from "./applicationmodel.userdatatasks.dataprovider.js";