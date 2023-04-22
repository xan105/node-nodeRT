  export class Color {
    constructor();
  }

  export enum UserActivityState {
    new,
    published,
  }

  export class UserActivityAttribution {
    iconUri: Object;
    alternateText: string;
    addImageQuery: boolean;
    constructor();
    constructor(iconUri: Object);

  }

  export class IUserActivityContentInfo {
    constructor();

    toJson(): string;

  }

  export class UserActivityContentInfo {
    constructor();

    static fromJson(value: string): UserActivityContentInfo;


    toJson(): string;

  }

  export class UserActivityVisualElements {
    displayText: string;
    description: string;
    content: Object;
    backgroundColor: Object;
    attribution: UserActivityAttribution;
    attributionDisplayText: string;
    constructor();

  }

  export class UserActivitySession {
    activityId: string;
    constructor();

    close(): void;
  }

  export class UserActivity {
    fallbackUri: Object;
    contentUri: Object;
    contentType: string;
    contentInfo: IUserActivityContentInfo;
    activationUri: Object;
    activityId: string;
    state: UserActivityState;
    visualElements: UserActivityVisualElements;
    constructor();
    constructor(activityId: string);

    static tryParseFromJson(json: string): UserActivity;


    static tryParseFromJsonArray(json: string): Object;


    static toJsonArray(activities: Object): string;


    saveAsync(callback: (error: Error) => void): void ;

    createSession(): UserActivitySession;

    toJson(): string;

  }

  export class UserActivityChannel {
    constructor();

    static disableAutoSessionCreation(): void;


    static tryGetForWebAccount(account: Object): UserActivityChannel;


    static getDefault(): UserActivityChannel;


    getOrCreateUserActivityAsync(activityId: string, callback: (error: Error, result: UserActivity) => void): void ;

    deleteActivityAsync(activityId: string, callback: (error: Error) => void): void ;

    deleteAllActivitiesAsync(callback: (error: Error) => void): void ;

    getRecentUserActivitiesAsync(maxUniqueActivities: number, callback: (error: Error, result: Object) => void): void ;

    getSessionHistoryItemsForUserActivityAsync(activityId: string, startTime: Date, callback: (error: Error, result: Object) => void): void ;

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