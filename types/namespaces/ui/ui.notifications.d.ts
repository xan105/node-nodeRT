  export enum AdaptiveNotificationContentKind {
    text,
  }

  export enum BadgeTemplateType {
    badgeGlyph,
    badgeNumber,
  }

  export enum NotificationKinds {
    unknown,
    toast,
  }

  export enum NotificationMirroring {
    allowed,
    disabled,
  }

  export enum NotificationSetting {
    enabled,
    disabledForApplication,
    disabledForUser,
    disabledByGroupPolicy,
    disabledByManifest,
  }

  export enum NotificationUpdateResult {
    succeeded,
    failed,
    notificationNotFound,
  }

  export enum PeriodicUpdateRecurrence {
    halfHour,
    hour,
    sixHours,
    twelveHours,
    daily,
  }

  export enum TileFlyoutTemplateType {
    tileFlyoutTemplate01,
  }

  export enum TileTemplateType {
    tileSquareImage,
    tileSquareBlock,
    tileSquareText01,
    tileSquareText02,
    tileSquareText03,
    tileSquareText04,
    tileSquarePeekImageAndText01,
    tileSquarePeekImageAndText02,
    tileSquarePeekImageAndText03,
    tileSquarePeekImageAndText04,
    tileWideImage,
    tileWideImageCollection,
    tileWideImageAndText01,
    tileWideImageAndText02,
    tileWideBlockAndText01,
    tileWideBlockAndText02,
    tileWidePeekImageCollection01,
    tileWidePeekImageCollection02,
    tileWidePeekImageCollection03,
    tileWidePeekImageCollection04,
    tileWidePeekImageCollection05,
    tileWidePeekImageCollection06,
    tileWidePeekImageAndText01,
    tileWidePeekImageAndText02,
    tileWidePeekImage01,
    tileWidePeekImage02,
    tileWidePeekImage03,
    tileWidePeekImage04,
    tileWidePeekImage05,
    tileWidePeekImage06,
    tileWideSmallImageAndText01,
    tileWideSmallImageAndText02,
    tileWideSmallImageAndText03,
    tileWideSmallImageAndText04,
    tileWideSmallImageAndText05,
    tileWideText01,
    tileWideText02,
    tileWideText03,
    tileWideText04,
    tileWideText05,
    tileWideText06,
    tileWideText07,
    tileWideText08,
    tileWideText09,
    tileWideText10,
    tileWideText11,
    tileSquare150x150Image,
    tileSquare150x150Block,
    tileSquare150x150Text01,
    tileSquare150x150Text02,
    tileSquare150x150Text03,
    tileSquare150x150Text04,
    tileSquare150x150PeekImageAndText01,
    tileSquare150x150PeekImageAndText02,
    tileSquare150x150PeekImageAndText03,
    tileSquare150x150PeekImageAndText04,
    tileWide310x150Image,
    tileWide310x150ImageCollection,
    tileWide310x150ImageAndText01,
    tileWide310x150ImageAndText02,
    tileWide310x150BlockAndText01,
    tileWide310x150BlockAndText02,
    tileWide310x150PeekImageCollection01,
    tileWide310x150PeekImageCollection02,
    tileWide310x150PeekImageCollection03,
    tileWide310x150PeekImageCollection04,
    tileWide310x150PeekImageCollection05,
    tileWide310x150PeekImageCollection06,
    tileWide310x150PeekImageAndText01,
    tileWide310x150PeekImageAndText02,
    tileWide310x150PeekImage01,
    tileWide310x150PeekImage02,
    tileWide310x150PeekImage03,
    tileWide310x150PeekImage04,
    tileWide310x150PeekImage05,
    tileWide310x150PeekImage06,
    tileWide310x150SmallImageAndText01,
    tileWide310x150SmallImageAndText02,
    tileWide310x150SmallImageAndText03,
    tileWide310x150SmallImageAndText04,
    tileWide310x150SmallImageAndText05,
    tileWide310x150Text01,
    tileWide310x150Text02,
    tileWide310x150Text03,
    tileWide310x150Text04,
    tileWide310x150Text05,
    tileWide310x150Text06,
    tileWide310x150Text07,
    tileWide310x150Text08,
    tileWide310x150Text09,
    tileWide310x150Text10,
    tileWide310x150Text11,
    tileSquare310x310BlockAndText01,
    tileSquare310x310BlockAndText02,
    tileSquare310x310Image,
    tileSquare310x310ImageAndText01,
    tileSquare310x310ImageAndText02,
    tileSquare310x310ImageAndTextOverlay01,
    tileSquare310x310ImageAndTextOverlay02,
    tileSquare310x310ImageAndTextOverlay03,
    tileSquare310x310ImageCollectionAndText01,
    tileSquare310x310ImageCollectionAndText02,
    tileSquare310x310ImageCollection,
    tileSquare310x310SmallImagesAndTextList01,
    tileSquare310x310SmallImagesAndTextList02,
    tileSquare310x310SmallImagesAndTextList03,
    tileSquare310x310SmallImagesAndTextList04,
    tileSquare310x310Text01,
    tileSquare310x310Text02,
    tileSquare310x310Text03,
    tileSquare310x310Text04,
    tileSquare310x310Text05,
    tileSquare310x310Text06,
    tileSquare310x310Text07,
    tileSquare310x310Text08,
    tileSquare310x310TextList01,
    tileSquare310x310TextList02,
    tileSquare310x310TextList03,
    tileSquare310x310SmallImageAndText01,
    tileSquare310x310SmallImagesAndTextList05,
    tileSquare310x310Text09,
    tileSquare71x71IconWithBadge,
    tileSquare150x150IconWithBadge,
    tileWide310x150IconWithBadgeAndText,
    tileSquare71x71Image,
    tileTall150x310Image,
  }

  export enum ToastDismissalReason {
    userCanceled,
    applicationHidden,
    timedOut,
  }

  export enum ToastHistoryChangedType {
    cleared,
    removed,
    expired,
    added,
  }

  export enum ToastNotificationPriority {
    default,
    high,
  }

  export enum ToastTemplateType {
    toastImageAndText01,
    toastImageAndText02,
    toastImageAndText03,
    toastImageAndText04,
    toastText01,
    toastText02,
    toastText03,
    toastText04,
  }

  export enum UserNotificationChangedKind {
    added,
    removed,
  }

  export class AdaptiveNotificationText {
    hints: Object;
    kind: AdaptiveNotificationContentKind;
    text: string;
    language: string;
    constructor();

  }

  export class BadgeNotification {
    expirationTime: Date;
    content: Object;
    constructor();
    constructor(content: Object);

  }

  export class BadgeUpdateManager {
    constructor();

    static getForUser(user: Object): BadgeUpdateManagerForUser;


    static createBadgeUpdaterForApplication(): BadgeUpdater;
    static createBadgeUpdaterForApplication(applicationId: string): BadgeUpdater;


    static createBadgeUpdaterForSecondaryTile(tileId: string): BadgeUpdater;


    static getTemplateContent(type: BadgeTemplateType): Object;


  }

  export class BadgeUpdateManagerForUser {
    user: Object;
    constructor();

    createBadgeUpdaterForApplication(): BadgeUpdater;
    createBadgeUpdaterForApplication(applicationId: string): BadgeUpdater;

    createBadgeUpdaterForSecondaryTile(tileId: string): BadgeUpdater;

  }

  export class BadgeUpdater {
    constructor();

    update(notification: BadgeNotification): void;

    clear(): void;

    startPeriodicUpdate(badgeContent: Object, requestedInterval: PeriodicUpdateRecurrence): void;
    startPeriodicUpdate(badgeContent: Object, startTime: Date, requestedInterval: PeriodicUpdateRecurrence): void;

    stopPeriodicUpdate(): void;

  }

  export class IAdaptiveNotificationContent {
    hints: Object;
    kind: AdaptiveNotificationContentKind;
    constructor();

  }

  export class KnownAdaptiveNotificationHints {
    static align: string;
    static maxLines: string;
    static minLines: string;
    static style: string;
    static textStacking: string;
    static wrap: string;
    constructor();

  }

  export class KnownAdaptiveNotificationTextStyles {
    static base: string;
    static baseSubtle: string;
    static body: string;
    static bodySubtle: string;
    static caption: string;
    static captionSubtle: string;
    static header: string;
    static headerNumeral: string;
    static headerNumeralSubtle: string;
    static headerSubtle: string;
    static subheader: string;
    static subheaderNumeral: string;
    static subheaderNumeralSubtle: string;
    static subheaderSubtle: string;
    static subtitle: string;
    static subtitleSubtle: string;
    static title: string;
    static titleNumeral: string;
    static titleSubtle: string;
    constructor();

  }

  export class KnownNotificationBindings {
    static toastGeneric: string;
    constructor();

  }

  export class Notification {
    visual: NotificationVisual;
    expirationTime: Date;
    constructor();

  }

  export class NotificationBinding {
    template: string;
    language: string;
    hints: Object;
    constructor();

    getTextElements(): Object;

  }

  export class NotificationData {
    sequenceNumber: number;
    values: Object;
    constructor();
    constructor(initialValues: Object, sequenceNumber: number);
    constructor(initialValues: Object);

  }

  export class NotificationVisual {
    language: string;
    bindings: Object;
    constructor();

    getBinding(templateName: string): NotificationBinding;

  }

  export class ScheduledTileNotification {
    tag: string;
    id: string;
    expirationTime: Date;
    content: Object;
    deliveryTime: Date;
    constructor();
    constructor(content: Object, deliveryTime: Date);

  }

  export class ScheduledToastNotification {
    id: string;
    content: Object;
    deliveryTime: Date;
    maximumSnoozeCount: number;
    snoozeInterval: number;
    tag: string;
    suppressPopup: boolean;
    group: string;
    remoteId: string;
    notificationMirroring: NotificationMirroring;
    expirationTime: Date;
    constructor();
    constructor(content: Object, deliveryTime: Date);
    constructor(content: Object, deliveryTime: Date, snoozeInterval: number, maximumSnoozeCount: number);

  }

  export class ScheduledToastNotificationShowingEventArgs {
    cancel: boolean;
    scheduledToastNotification: ScheduledToastNotification;
    constructor();

    getDeferral(): Object;

  }

  export class ShownTileNotification {
    arguments: string;
    constructor();

  }

  export class TileFlyoutNotification {
    expirationTime: Date;
    content: Object;
    constructor();
    constructor(content: Object);

  }

  export class TileFlyoutUpdateManager {
    constructor();

    static createTileFlyoutUpdaterForApplication(): TileFlyoutUpdater;
    static createTileFlyoutUpdaterForApplication(applicationId: string): TileFlyoutUpdater;


    static createTileFlyoutUpdaterForSecondaryTile(tileId: string): TileFlyoutUpdater;


    static getTemplateContent(type: TileFlyoutTemplateType): Object;


  }

  export class TileFlyoutUpdater {
    setting: NotificationSetting;
    constructor();

    update(notification: TileFlyoutNotification): void;

    clear(): void;

    startPeriodicUpdate(tileFlyoutContent: Object, requestedInterval: PeriodicUpdateRecurrence): void;
    startPeriodicUpdate(tileFlyoutContent: Object, startTime: Date, requestedInterval: PeriodicUpdateRecurrence): void;

    stopPeriodicUpdate(): void;

  }

  export class TileNotification {
    tag: string;
    expirationTime: Date;
    content: Object;
    constructor();
    constructor(content: Object);

  }

  export class TileUpdateManager {
    constructor();

    static getForUser(user: Object): TileUpdateManagerForUser;


    static createTileUpdaterForApplication(): TileUpdater;
    static createTileUpdaterForApplication(applicationId: string): TileUpdater;


    static createTileUpdaterForSecondaryTile(tileId: string): TileUpdater;


    static getTemplateContent(type: TileTemplateType): Object;


  }

  export class TileUpdateManagerForUser {
    user: Object;
    constructor();

    createTileUpdaterForApplicationForUser(): TileUpdater;

    createTileUpdaterForApplication(applicationId: string): TileUpdater;

    createTileUpdaterForSecondaryTile(tileId: string): TileUpdater;

  }

  export class TileUpdater {
    setting: NotificationSetting;
    constructor();

    update(notification: TileNotification): void;

    clear(): void;

    enableNotificationQueue(enable: boolean): void;

    addToSchedule(scheduledTile: ScheduledTileNotification): void;

    removeFromSchedule(scheduledTile: ScheduledTileNotification): void;

    getScheduledTileNotifications(): Object;

    startPeriodicUpdate(tileContent: Object, requestedInterval: PeriodicUpdateRecurrence): void;
    startPeriodicUpdate(tileContent: Object, startTime: Date, requestedInterval: PeriodicUpdateRecurrence): void;

    stopPeriodicUpdate(): void;

    startPeriodicUpdateBatch(tileContents: Object, requestedInterval: PeriodicUpdateRecurrence): void;
    startPeriodicUpdateBatch(tileContents: Object, startTime: Date, requestedInterval: PeriodicUpdateRecurrence): void;

    enableNotificationQueueForSquare150x150(enable: boolean): void;

    enableNotificationQueueForWide310x150(enable: boolean): void;

    enableNotificationQueueForSquare310x310(enable: boolean): void;

  }

  export class ToastActivatedEventArgs {
    arguments: string;
    userInput: Object;
    constructor();

  }

  export class ToastCollection {
    launchArgs: string;
    icon: Object;
    displayName: string;
    id: string;
    constructor();
    constructor(collectionId: string, displayName: string, launchArgs: string, iconUri: Object);

  }

  export class ToastCollectionManager {
    appId: string;
    user: Object;
    constructor();

    saveToastCollectionAsync(collection: ToastCollection, callback: (error: Error) => void): void ;

    findAllToastCollectionsAsync(callback: (error: Error, result: Object) => void): void ;

    getToastCollectionAsync(collectionId: string, callback: (error: Error, result: ToastCollection) => void): void ;

    removeToastCollectionAsync(collectionId: string, callback: (error: Error) => void): void ;

    removeAllToastCollectionsAsync(callback: (error: Error) => void): void ;

  }

  export class ToastDismissedEventArgs {
    reason: ToastDismissalReason;
    constructor();

  }

  export class ToastFailedEventArgs {
    errorCode: number;
    constructor();

  }

  export class ToastNotification {
    expirationTime: Date;
    content: Object;
    tag: string;
    suppressPopup: boolean;
    group: string;
    remoteId: string;
    notificationMirroring: NotificationMirroring;
    priority: ToastNotificationPriority;
    data: NotificationData;
    expiresOnReboot: boolean;
    constructor();
    constructor(content: Object);

    addListener(type: "Activated", listener: (ev: Event) => void): void ;
    removeListener(type: "Activated", listener: (ev: Event) => void): void ;
    on(type: "Activated", listener: (ev: Event) => void): void ;
    off(type: "Activated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Dismissed", listener: (ev: Event) => void): void ;
    removeListener(type: "Dismissed", listener: (ev: Event) => void): void ;
    on(type: "Dismissed", listener: (ev: Event) => void): void ;
    off(type: "Dismissed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Failed", listener: (ev: Event) => void): void ;
    removeListener(type: "Failed", listener: (ev: Event) => void): void ;
    on(type: "Failed", listener: (ev: Event) => void): void ;
    off(type: "Failed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ToastNotificationActionTriggerDetail {
    argument: string;
    userInput: Object;
    constructor();

  }

  export class ToastNotificationHistory {
    constructor();

    getHistory(): Object;
    getHistory(applicationId: string): Object;

    removeGroup(group: string): void;
    removeGroup(group: string, applicationId: string): void;

    remove(tag: string, group: string, applicationId: string): void;
    remove(tag: string, group: string): void;
    remove(tag: string): void;

    clear(): void;
    clear(applicationId: string): void;

  }

  export class ToastNotificationHistoryChangedTriggerDetail {
    changeType: ToastHistoryChangedType;
    collectionId: string;
    constructor();

  }

  export class ToastNotificationManager {
    static history: ToastNotificationHistory;
    constructor();

    static getDefault(): ToastNotificationManagerForUser;


    static getForUser(user: Object): ToastNotificationManagerForUser;


    static configureNotificationMirroring(value: NotificationMirroring): void;


    static createToastNotifier(): ToastNotifier;
    static createToastNotifier(applicationId: string): ToastNotifier;


    static getTemplateContent(type: ToastTemplateType): Object;


  }

  export class ToastNotificationManagerForUser {
    history: ToastNotificationHistory;
    user: Object;
    constructor();

    getToastNotifierForToastCollectionIdAsync(collectionId: string, callback: (error: Error, result: ToastNotifier) => void): void ;

    getHistoryForToastCollectionIdAsync(collectionId: string, callback: (error: Error, result: ToastNotificationHistory) => void): void ;

    createToastNotifier(): ToastNotifier;
    createToastNotifier(applicationId: string): ToastNotifier;

    getToastCollectionManager(): ToastCollectionManager;
    getToastCollectionManager(appId: string): ToastCollectionManager;

  }

  export class ToastNotifier {
    setting: NotificationSetting;
    constructor();

    show(notification: ToastNotification): void;

    hide(notification: ToastNotification): void;

    addToSchedule(scheduledToast: ScheduledToastNotification): void;

    removeFromSchedule(scheduledToast: ScheduledToastNotification): void;

    getScheduledToastNotifications(): Object;

    update(data: NotificationData, tag: string, group: string): NotificationUpdateResult;
    update(data: NotificationData, tag: string): NotificationUpdateResult;

    addListener(type: "ScheduledToastNotificationShowing", listener: (ev: Event) => void): void ;
    removeListener(type: "ScheduledToastNotificationShowing", listener: (ev: Event) => void): void ;
    on(type: "ScheduledToastNotificationShowing", listener: (ev: Event) => void): void ;
    off(type: "ScheduledToastNotificationShowing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UserNotification {
    appInfo: Object;
    creationTime: Date;
    id: number;
    notification: Notification;
    constructor();

  }

  export class UserNotificationChangedEventArgs {
    changeKind: UserNotificationChangedKind;
    userNotificationId: number;
    constructor();

  }

export * as management from "./ui.notifications.management.js";