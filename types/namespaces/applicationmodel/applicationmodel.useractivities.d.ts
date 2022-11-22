  export class Color {
    constructor();
  }

  export enum UserActivityState {
    new,
    published,
  }

  export class UserActivityAttribution {
    iconUri: Object;
    alternateText: String;
    addImageQuery: Boolean;
    constructor();
    constructor(iconUri: Object);

  }

  export class IUserActivityContentInfo {
    constructor();

    toJson(): String;

  }

  export class UserActivityContentInfo {
    constructor();

    static fromJson(value: String): UserActivityContentInfo;


    toJson(): String;

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

  export class UserActivitySession {
    activityId: String;
    constructor();

    close(): void;
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
    constructor();
    constructor(activityId: String);

    static tryParseFromJson(json: String): UserActivity;


    static tryParseFromJsonArray(json: String): Object;


    static toJsonArray(activities: Object): String;


    saveAsync(callback: (error: Error) => void): void ;

    createSession(): UserActivitySession;

    toJson(): String;

  }

  export class UserActivityChannel {
    constructor();

    static disableAutoSessionCreation(): void;


    static tryGetForWebAccount(account: Object): UserActivityChannel;


    static getDefault(): UserActivityChannel;


    getOrCreateUserActivityAsync(activityId: String, callback: (error: Error, result: UserActivity) => void): void ;

    deleteActivityAsync(activityId: String, callback: (error: Error) => void): void ;

    deleteAllActivitiesAsync(callback: (error: Error) => void): void ;

    getRecentUserActivitiesAsync(maxUniqueActivities: Number, callback: (error: Error, result: Object) => void): void ;

    getSessionHistoryItemsForUserActivityAsync(activityId: String, startTime: Date, callback: (error: Error, result: Object) => void): void ;

  }

  export class UserActivitySessionHistoryItem {
    endTime: Date;
    startTime: Date;
    userActivity: UserActivity;
    constructor();

  }

  export class UserActivityRequest {
    constructor();

    setUserActivity(activity: UserActivity): void;

  }

  export class UserActivityRequestedEventArgs {
    request: UserActivityRequest;
    constructor();

    getDeferral(): Object;

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

export * as core from "./applicationmodel.useractivities.core.js";