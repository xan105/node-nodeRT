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

  export enum ToastNotificationMode {
    unrestricted,
    priorityOnly,
    alarmsOnly,
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
    text: String;
    language: String;
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
    static createBadgeUpdaterForApplication(applicationId: String): BadgeUpdater;


    static createBadgeUpdaterForSecondaryTile(tileId: String): BadgeUpdater;


    static getTemplateContent(type: BadgeTemplateType): Object;


  }

  export class BadgeUpdateManagerForUser {
    user: Object;
    constructor();

    createBadgeUpdaterForApplication(): BadgeUpdater;
    createBadgeUpdaterForApplication(applicationId: String): BadgeUpdater;

    createBadgeUpdaterForSecondaryTile(tileId: String): BadgeUpdater;

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
    static align: String;
    static maxLines: String;
    static minLines: String;
    static style: String;
    static textStacking: String;
    static wrap: String;
    constructor();

  }

  export class KnownAdaptiveNotificationTextStyles {
    static base: String;
    static baseSubtle: String;
    static body: String;
    static bodySubtle: String;
    static caption: String;
    static captionSubtle: String;
    static header: String;
    static headerNumeral: String;
    static headerNumeralSubtle: String;
    static headerSubtle: String;
    static subheader: String;
    static subheaderNumeral: String;
    static subheaderNumeralSubtle: String;
    static subheaderSubtle: String;
    static subtitle: String;
    static subtitleSubtle: String;
    static title: String;
    static titleNumeral: String;
    static titleSubtle: String;
    constructor();

  }

  export class KnownNotificationBindings {
    static toastGeneric: String;
    constructor();

  }

  export class Notification {
    visual: NotificationVisual;
    expirationTime: Date;
    constructor();

  }

  export class NotificationBinding {
    template: String;
    language: String;
    hints: Object;
    constructor();

    getTextElements(): Object;

  }

  export class NotificationData {
    sequenceNumber: Number;
    values: Object;
    constructor();
    constructor(initialValues: Object, sequenceNumber: Number);
    constructor(initialValues: Object);

  }

  export class NotificationVisual {
    language: String;
    bindings: Object;
    constructor();

    getBinding(templateName: String): NotificationBinding;

  }

  export class ScheduledTileNotification {
    tag: String;
    id: String;
    expirationTime: Date;
    content: Object;
    deliveryTime: Date;
    constructor();
    constructor(content: Object, deliveryTime: Date);

  }

  export class ScheduledToastNotification {
    id: String;
    content: Object;
    deliveryTime: Date;
    maximumSnoozeCount: Number;
    snoozeInterval: Number;
    tag: String;
    suppressPopup: Boolean;
    group: String;
    remoteId: String;
    notificationMirroring: NotificationMirroring;
    expirationTime: Date;
    constructor();
    constructor(content: Object, deliveryTime: Date);
    constructor(content: Object, deliveryTime: Date, snoozeInterval: Number, maximumSnoozeCount: Number);

  }

  export class ScheduledToastNotificationShowingEventArgs {
    cancel: Boolean;
    scheduledToastNotification: ScheduledToastNotification;
    constructor();

    getDeferral(): Object;

  }

  export class ShownTileNotification {
    arguments: String;
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
    static createTileFlyoutUpdaterForApplication(applicationId: String): TileFlyoutUpdater;


    static createTileFlyoutUpdaterForSecondaryTile(tileId: String): TileFlyoutUpdater;


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
    tag: String;
    expirationTime: Date;
    content: Object;
    constructor();
    constructor(content: Object);

  }

  export class TileUpdateManager {
    constructor();

    static getForUser(user: Object): TileUpdateManagerForUser;


    static createTileUpdaterForApplication(): TileUpdater;
    static createTileUpdaterForApplication(applicationId: String): TileUpdater;


    static createTileUpdaterForSecondaryTile(tileId: String): TileUpdater;


    static getTemplateContent(type: TileTemplateType): Object;


  }

  export class TileUpdateManagerForUser {
    user: Object;
    constructor();

    createTileUpdaterForApplicationForUser(): TileUpdater;

    createTileUpdaterForApplication(applicationId: String): TileUpdater;

    createTileUpdaterForSecondaryTile(tileId: String): TileUpdater;

  }

  export class TileUpdater {
    setting: NotificationSetting;
    constructor();

    update(notification: TileNotification): void;

    clear(): void;

    enableNotificationQueue(enable: Boolean): void;

    addToSchedule(scheduledTile: ScheduledTileNotification): void;

    removeFromSchedule(scheduledTile: ScheduledTileNotification): void;

    getScheduledTileNotifications(): Object;

    startPeriodicUpdate(tileContent: Object, requestedInterval: PeriodicUpdateRecurrence): void;
    startPeriodicUpdate(tileContent: Object, startTime: Date, requestedInterval: PeriodicUpdateRecurrence): void;

    stopPeriodicUpdate(): void;

    startPeriodicUpdateBatch(tileContents: Object, requestedInterval: PeriodicUpdateRecurrence): void;
    startPeriodicUpdateBatch(tileContents: Object, startTime: Date, requestedInterval: PeriodicUpdateRecurrence): void;

    enableNotificationQueueForSquare150x150(enable: Boolean): void;

    enableNotificationQueueForWide310x150(enable: Boolean): void;

    enableNotificationQueueForSquare310x310(enable: Boolean): void;

  }

  export class ToastActivatedEventArgs {
    arguments: String;
    userInput: Object;
    constructor();

  }

  export class ToastCollection {
    launchArgs: String;
    icon: Object;
    displayName: String;
    id: String;
    constructor();
    constructor(collectionId: String, displayName: String, launchArgs: String, iconUri: Object);

  }

  export class ToastCollectionManager {
    appId: String;
    user: Object;
    constructor();

    saveToastCollectionAsync(collection: ToastCollection, callback: (error: Error) => void): void ;

    findAllToastCollectionsAsync(callback: (error: Error, result: Object) => void): void ;

    getToastCollectionAsync(collectionId: String, callback: (error: Error, result: ToastCollection) => void): void ;

    removeToastCollectionAsync(collectionId: String, callback: (error: Error) => void): void ;

    removeAllToastCollectionsAsync(callback: (error: Error) => void): void ;

  }

  export class ToastDismissedEventArgs {
    reason: ToastDismissalReason;
    constructor();

  }

  export class ToastFailedEventArgs {
    errorCode: Number;
    constructor();

  }

  export class ToastNotification {
    expirationTime: Date;
    content: Object;
    tag: String;
    suppressPopup: Boolean;
    group: String;
    remoteId: String;
    notificationMirroring: NotificationMirroring;
    priority: ToastNotificationPriority;
    data: NotificationData;
    expiresOnReboot: Boolean;
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
    argument: String;
    userInput: Object;
    constructor();

  }

  export class ToastNotificationHistory {
    constructor();

    getHistory(): Object;
    getHistory(applicationId: String): Object;

    removeGroup(group: String): void;
    removeGroup(group: String, applicationId: String): void;

    remove(tag: String, group: String, applicationId: String): void;
    remove(tag: String, group: String): void;
    remove(tag: String): void;

    clear(): void;
    clear(applicationId: String): void;

  }

  export class ToastNotificationHistoryChangedTriggerDetail {
    changeType: ToastHistoryChangedType;
    collectionId: String;
    constructor();

  }

  export class ToastNotificationManager {
    static history: ToastNotificationHistory;
    constructor();

    static getDefault(): ToastNotificationManagerForUser;


    static getForUser(user: Object): ToastNotificationManagerForUser;


    static configureNotificationMirroring(value: NotificationMirroring): void;


    static createToastNotifier(): ToastNotifier;
    static createToastNotifier(applicationId: String): ToastNotifier;


    static getTemplateContent(type: ToastTemplateType): Object;


  }

  export class ToastNotificationManagerForUser {
    history: ToastNotificationHistory;
    user: Object;
    notificationMode: ToastNotificationMode;
    constructor();

    getToastNotifierForToastCollectionIdAsync(collectionId: String, callback: (error: Error, result: ToastNotifier) => void): void ;

    getHistoryForToastCollectionIdAsync(collectionId: String, callback: (error: Error, result: ToastNotificationHistory) => void): void ;

    createToastNotifier(): ToastNotifier;
    createToastNotifier(applicationId: String): ToastNotifier;

    getToastCollectionManager(): ToastCollectionManager;
    getToastCollectionManager(appId: String): ToastCollectionManager;

    addListener(type: "NotificationModeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NotificationModeChanged", listener: (ev: Event) => void): void ;
    on(type: "NotificationModeChanged", listener: (ev: Event) => void): void ;
    off(type: "NotificationModeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ToastNotifier {
    setting: NotificationSetting;
    constructor();

    show(notification: ToastNotification): void;

    hide(notification: ToastNotification): void;

    addToSchedule(scheduledToast: ScheduledToastNotification): void;

    removeFromSchedule(scheduledToast: ScheduledToastNotification): void;

    getScheduledToastNotifications(): Object;

    update(data: NotificationData, tag: String, group: String): NotificationUpdateResult;
    update(data: NotificationData, tag: String): NotificationUpdateResult;

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
    id: Number;
    notification: Notification;
    constructor();

  }

  export class UserNotificationChangedEventArgs {
    changeKind: UserNotificationChangedKind;
    userNotificationId: Number;
    constructor();

  }

export const AdaptiveNotificationContentKind: any;
export const BadgeTemplateType: any;
export const NotificationKinds: any;
export const NotificationMirroring: any;
export const NotificationSetting: any;
export const NotificationUpdateResult: any;
export const PeriodicUpdateRecurrence: any;
export const TileFlyoutTemplateType: any;
export const TileTemplateType: any;
export const ToastDismissalReason: any;
export const ToastHistoryChangedType: any;
export const ToastNotificationMode: any;
export const ToastNotificationPriority: any;
export const ToastTemplateType: any;
export const UserNotificationChangedKind: any;
export const AdaptiveNotificationText: any;
export const BadgeNotification: any;
export const BadgeUpdateManager: any;
export const BadgeUpdateManagerForUser: any;
export const BadgeUpdater: any;
export const IAdaptiveNotificationContent: any;
export const KnownAdaptiveNotificationHints: any;
export const KnownAdaptiveNotificationTextStyles: any;
export const KnownNotificationBindings: any;
export const Notification: any;
export const NotificationBinding: any;
export const NotificationData: any;
export const NotificationVisual: any;
export const ScheduledTileNotification: any;
export const ScheduledToastNotification: any;
export const ScheduledToastNotificationShowingEventArgs: any;
export const ShownTileNotification: any;
export const TileFlyoutNotification: any;
export const TileFlyoutUpdateManager: any;
export const TileFlyoutUpdater: any;
export const TileNotification: any;
export const TileUpdateManager: any;
export const TileUpdateManagerForUser: any;
export const TileUpdater: any;
export const ToastActivatedEventArgs: any;
export const ToastCollection: any;
export const ToastCollectionManager: any;
export const ToastDismissedEventArgs: any;
export const ToastFailedEventArgs: any;
export const ToastNotification: any;
export const ToastNotificationActionTriggerDetail: any;
export const ToastNotificationHistory: any;
export const ToastNotificationHistoryChangedTriggerDetail: any;
export const ToastNotificationManager: any;
export const ToastNotificationManagerForUser: any;
export const ToastNotifier: any;
export const UserNotification: any;
export const UserNotificationChangedEventArgs: any;
export * as management from "./ui.notifications.management.js";
