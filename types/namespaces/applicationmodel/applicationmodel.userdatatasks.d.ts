  export enum UserDataTaskDaysOfWeek {
    none,
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
  }

  export enum UserDataTaskDetailsKind {
    plainText,
    html,
  }

  export enum UserDataTaskKind {
    single,
    recurring,
    regenerating,
  }

  export enum UserDataTaskListOtherAppReadAccess {
    full,
    systemOnly,
    none,
  }

  export enum UserDataTaskListOtherAppWriteAccess {
    limited,
    none,
  }

  export enum UserDataTaskListSyncStatus {
    idle,
    syncing,
    upToDate,
    authenticationError,
    policyError,
    unknownError,
  }

  export enum UserDataTaskPriority {
    normal,
    low,
    high,
  }

  export enum UserDataTaskQueryKind {
    all,
    incomplete,
    complete,
  }

  export enum UserDataTaskQuerySortProperty {
    dueDate,
  }

  export enum UserDataTaskRecurrenceUnit {
    daily,
    weekly,
    monthly,
    monthlyOnDay,
    yearly,
    yearlyOnDay,
  }

  export enum UserDataTaskRegenerationUnit {
    daily,
    weekly,
    monthly,
    yearly,
  }

  export enum UserDataTaskSensitivity {
    public,
    private,
  }

  export enum UserDataTaskStoreAccessType {
    appTasksReadWrite,
    allTasksLimitedReadWrite,
  }

  export enum UserDataTaskWeekOfMonth {
    first,
    second,
    third,
    fourth,
    last,
  }

  export class UserDataTask {
    regenerationProperties: UserDataTaskRegenerationProperties;
    priority: UserDataTaskPriority;
    completedDate: Date;
    dueDate: Date;
    detailsKind: UserDataTaskDetailsKind;
    startDate: Date;
    details: String;
    subject: String;
    sensitivity: UserDataTaskSensitivity;
    remoteId: String;
    reminder: Date;
    recurrenceProperties: UserDataTaskRecurrenceProperties;
    id: String;
    kind: UserDataTaskKind;
    listId: String;
    constructor();

  }

  export class UserDataTaskBatch {
    tasks: Object;
    constructor();

  }

  export class UserDataTaskList {
    otherAppWriteAccess: UserDataTaskListOtherAppWriteAccess;
    otherAppReadAccess: UserDataTaskListOtherAppReadAccess;
    displayName: String;
    id: String;
    limitedWriteOperations: UserDataTaskListLimitedWriteOperations;
    sourceDisplayName: String;
    syncManager: UserDataTaskListSyncManager;
    userDataAccountId: String;
    constructor();

    registerSyncManagerAsync(callback: (error: Error) => void): void ;

    getTaskAsync(userDataTask: String, callback: (error: Error, result: UserDataTask) => void): void ;

    saveTaskAsync(userDataTask: UserDataTask, callback: (error: Error) => void): void ;

    deleteTaskAsync(userDataTaskId: String, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;

    saveAsync(callback: (error: Error) => void): void ;

    getTaskReader(): UserDataTaskReader;
    getTaskReader(options: UserDataTaskQueryOptions): UserDataTaskReader;

  }

  export class UserDataTaskListLimitedWriteOperations {
    constructor();

    tryCompleteTaskAsync(userDataTaskId: String, callback: (error: Error, result: String) => void): void ;

    tryCreateOrUpdateTaskAsync(userDataTask: UserDataTask, callback: (error: Error, result: Boolean) => void): void ;

    tryDeleteTaskAsync(userDataTaskId: String, callback: (error: Error, result: Boolean) => void): void ;

    trySkipOccurrenceAsync(userDataTaskId: String, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class UserDataTaskListSyncManager {
    status: UserDataTaskListSyncStatus;
    lastSuccessfulSyncTime: Date;
    lastAttemptedSyncTime: Date;
    constructor();

    syncAsync(callback: (error: Error, result: Boolean) => void): void ;

    addListener(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "SyncStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UserDataTaskManager {
    user: Object;
    constructor();

    static getDefault(): UserDataTaskManager;


    static getForUser(user: Object): UserDataTaskManager;


    requestStoreAsync(accessType: UserDataTaskStoreAccessType, callback: (error: Error, result: UserDataTaskStore) => void): void ;

  }

  export class UserDataTaskQueryOptions {
    sortProperty: UserDataTaskQuerySortProperty;
    kind: UserDataTaskQueryKind;
    constructor();

  }

  export class UserDataTaskReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: UserDataTaskBatch) => void): void ;

  }

  export class UserDataTaskRecurrenceProperties {
    weekOfMonth: UserDataTaskWeekOfMonth;
    until: Date;
    unit: UserDataTaskRecurrenceUnit;
    occurrences: Number;
    month: Number;
    interval: Number;
    daysOfWeek: UserDataTaskDaysOfWeek;
    day: Number;
    constructor();

  }

  export class UserDataTaskRegenerationProperties {
    until: Date;
    unit: UserDataTaskRegenerationUnit;
    occurrences: Number;
    interval: Number;
    constructor();

  }

  export class UserDataTaskStore {
    constructor();

    createListAsync(name: String, callback: (error: Error, result: UserDataTaskList) => void): void ;
    createListAsync(name: String, userDataAccountId: String, callback: (error: Error, result: UserDataTaskList) => void): void ;

    findListsAsync(callback: (error: Error, result: Object) => void): void ;

    getListAsync(taskListId: String, callback: (error: Error, result: UserDataTaskList) => void): void ;

  }

export const UserDataTaskDaysOfWeek: any;
export const UserDataTaskDetailsKind: any;
export const UserDataTaskKind: any;
export const UserDataTaskListOtherAppReadAccess: any;
export const UserDataTaskListOtherAppWriteAccess: any;
export const UserDataTaskListSyncStatus: any;
export const UserDataTaskPriority: any;
export const UserDataTaskQueryKind: any;
export const UserDataTaskQuerySortProperty: any;
export const UserDataTaskRecurrenceUnit: any;
export const UserDataTaskRegenerationUnit: any;
export const UserDataTaskSensitivity: any;
export const UserDataTaskStoreAccessType: any;
export const UserDataTaskWeekOfMonth: any;
export const UserDataTask: any;
export const UserDataTaskBatch: any;
export const UserDataTaskList: any;
export const UserDataTaskListLimitedWriteOperations: any;
export const UserDataTaskListSyncManager: any;
export const UserDataTaskManager: any;
export const UserDataTaskQueryOptions: any;
export const UserDataTaskReader: any;
export const UserDataTaskRecurrenceProperties: any;
export const UserDataTaskRegenerationProperties: any;
export const UserDataTaskStore: any;
export * as dataprovider from "./applicationmodel.userdatatasks.dataprovider.js";
