  export class Color {
    constructor();
  }

  export enum UserActivityState {
    new,
    published,
  }

  export class IUserActivityContentInfo {
    constructor();

    toJson(): String;

  }

  export class UserActivity {
    fallbackUri: Object;
    contentUri: Object;
    contentType: String;
    contentInfo: IUserActivityContentInfo;
    activationUri: Object;
    activityId: String;
    state: UserActivityState;
    visualElements: UserActivityVisualElements;
    isRoamable: Boolean;
    constructor();
    constructor(activityId: String);

    static tryParseFromJson(json: String): UserActivity;


    static tryParseFromJsonArray(json: String): Object;


    static toJsonArray(activities: Object): String;


    saveAsync(callback: (error: Error) => void): void ;

    createSession(): UserActivitySession;

    toJson(): String;

  }

  export class UserActivityAttribution {
    iconUri: Object;
    alternateText: String;
    addImageQuery: Boolean;
    constructor();
    constructor(iconUri: Object);

  }

  export class UserActivityChannel {
    constructor();

    static getForUser(user: Object): UserActivityChannel;


    static disableAutoSessionCreation(): void;


    static tryGetForWebAccount(account: Object): UserActivityChannel;


    static getDefault(): UserActivityChannel;


    getOrCreateUserActivityAsync(activityId: String, callback: (error: Error, result: UserActivity) => void): void ;

    deleteActivityAsync(activityId: String, callback: (error: Error) => void): void ;

    deleteAllActivitiesAsync(callback: (error: Error) => void): void ;

    getRecentUserActivitiesAsync(maxUniqueActivities: Number, callback: (error: Error, result: Object) => void): void ;

    getSessionHistoryItemsForUserActivityAsync(activityId: String, startTime: Date, callback: (error: Error, result: Object) => void): void ;

  }

  export class UserActivityContentInfo {
    constructor();

    static fromJson(value: String): UserActivityContentInfo;


    toJson(): String;

  }

  export class UserActivityRequest {
    constructor();

    setUserActivity(activity: UserActivity): void;

  }

  export class UserActivityRequestManager {
    constructor();

    static getForCurrentView(): UserActivityRequestManager;


    addListener(type: "UserActivityRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "UserActivityRequested", listener: (ev: Event) => void): void ;
    on(type: "UserActivityRequested", listener: (ev: Event) => void): void ;
    off(type: "UserActivityRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UserActivityRequestedEventArgs {
    request: UserActivityRequest;
    constructor();

    getDeferral(): Object;

  }

  export class UserActivitySession {
    activityId: String;
    constructor();

    close(): void;
  }

  export class UserActivitySessionHistoryItem {
    endTime: Date;
    startTime: Date;
    userActivity: UserActivity;
    constructor();

  }

  export class UserActivityVisualElements {
    displayText: String;
    description: String;
    content: Object;
    backgroundColor: Object;
    attribution: UserActivityAttribution;
    attributionDisplayText: String;
    constructor();

  }

export const UserActivityState: any;
export const IUserActivityContentInfo: any;
export const UserActivity: any;
export const UserActivityAttribution: any;
export const UserActivityChannel: any;
export const UserActivityContentInfo: any;
export const UserActivityRequest: any;
export const UserActivityRequestManager: any;
export const UserActivityRequestedEventArgs: any;
export const UserActivitySession: any;
export const UserActivitySessionHistoryItem: any;
export const UserActivityVisualElements: any;
export * as core from "./applicationmodel.useractivities.core.js";
