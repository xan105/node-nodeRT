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
    "Windows.System",
    "Windows.Foundation",
  ]
};

export const {
  UserDataTaskStoreAccessType,
  UserDataTaskListOtherAppReadAccess,
  UserDataTaskListOtherAppWriteAccess,
  UserDataTaskKind,
  UserDataTaskPriority,
  UserDataTaskSensitivity,
  UserDataTaskDetailsKind,
  UserDataTaskRecurrenceUnit,
  UserDataTaskRegenerationUnit,
  UserDataTaskDaysOfWeek,
  UserDataTaskQuerySortProperty,
  UserDataTaskQueryKind,
  UserDataTaskWeekOfMonth,
  UserDataTaskListSyncStatus,
  UserDataTaskManager,
  UserDataTaskStore,
  UserDataTaskList,
  UserDataTaskListLimitedWriteOperations,
  UserDataTaskListSyncManager,
  UserDataTaskReader,
  UserDataTaskQueryOptions,
  UserDataTask,
  UserDataTaskBatch,
  UserDataTaskRecurrenceProperties,
  UserDataTaskRegenerationProperties,
} = load(namespace.name);

reference(namespace.externalReference);

export * as dataprovider from "./applicationmodel.userdatatasks.dataprovider.js";