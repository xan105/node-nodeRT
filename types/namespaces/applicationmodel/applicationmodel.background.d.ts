  export class BackgroundAlarmApplicationContract {
    constructor();
  }

  export enum AlarmAccessStatus {
    unspecified,
    allowedWithWakeupCapability,
    allowedWithoutWakeupCapability,
    denied,
  }

  export enum ApplicationTriggerResult {
    allowed,
    currentlyRunning,
    disabledByPolicy,
    unknownError,
  }

  export enum MediaProcessingTriggerResult {
    allowed,
    currentlyRunning,
    disabledByPolicy,
    unknownError,
  }

  export enum SystemTriggerType {
    invalid,
    smsReceived,
    userPresent,
    userAway,
    networkStateChange,
    controlChannelReset,
    internetAvailable,
    sessionConnected,
    servicingComplete,
    lockScreenApplicationAdded,
    lockScreenApplicationRemoved,
    timeZoneChange,
    onlineIdConnectedStateChange,
    backgroundWorkCostChange,
    powerStateChange,
    defaultSignInAccountChange,
  }

  export enum SystemConditionType {
    invalid,
    userPresent,
    userNotPresent,
    internetAvailable,
    internetNotAvailable,
    sessionConnected,
    sessionDisconnected,
    freeNetworkAvailable,
    backgroundWorkCostNotHigh,
  }

  export enum CustomSystemEventTriggerRecurrence {
    once,
    always,
  }

  export enum BackgroundAccessStatus {
    unspecified,
    allowedWithAlwaysOnRealTimeConnectivity,
    allowedMayUseActiveRealTimeConnectivity,
    denied,
    alwaysAllowed,
    allowedSubjectToSystemPolicy,
    deniedBySystemPolicy,
    deniedByUser,
  }

  export enum BackgroundAccessRequestKind {
    alwaysAllowed,
    allowedSubjectToSystemPolicy,
  }

  export enum BackgroundTaskCancellationReason {
    abort,
    terminating,
    loggingOff,
    servicingUpdate,
    idleTask,
    uninstall,
    conditionLoss,
    systemPolicy,
    quietHoursEntered,
    executionTimeExceeded,
    resourceRevocation,
    energySaver,
  }

  export enum BackgroundWorkCostValue {
    low,
    medium,
    high,
  }

  export enum BackgroundTaskThrottleCounter {
    all,
    cpu,
    network,
  }

  export enum DeviceTriggerResult {
    allowed,
    deniedByUser,
    deniedBySystem,
    lowBattery,
  }

  export enum LocationTriggerType {
    geofence,
  }

  export class AlarmApplicationManager {
    constructor();

    static requestAccessAsync(callback: (error: Error, result: AlarmAccessStatus) => void): void ;


    static getAccessStatus(): AlarmAccessStatus;


  }

  export class PhoneTrigger {
    oneShot: boolean;
    triggerType: number;
    constructor();
    constructor(type: number, oneShot: boolean);

  }

  export class CommunicationBlockingAppSetAsActiveTrigger {
    constructor();

  }

  export class SmartCardTrigger {
    triggerType: number;
    constructor();
    constructor(triggerType: number);

  }

  export class ApplicationTrigger {
    constructor();

    requestAsync(callback: (error: Error, result: ApplicationTriggerResult) => void): void ;
    requestAsync(arguments: Object, callback: (error: Error, result: ApplicationTriggerResult) => void): void ;

  }

  export class ApplicationTriggerDetails {
    arguments: Object;
    constructor();

  }

  export class MediaProcessingTrigger {
    constructor();

    requestAsync(callback: (error: Error, result: MediaProcessingTriggerResult) => void): void ;
    requestAsync(arguments: Object, callback: (error: Error, result: MediaProcessingTriggerResult) => void): void ;

  }

  export class ContentPrefetchTrigger {
    waitInterval: number;
    constructor();
    constructor(waitInterval: number);

  }

  export class SecondaryAuthenticationFactorAuthenticationTrigger {
    constructor();

  }

  export class SystemTrigger {
    oneShot: boolean;
    triggerType: SystemTriggerType;
    constructor();
    constructor(triggerType: SystemTriggerType, oneShot: boolean);

  }

  export class SystemCondition {
    conditionType: SystemConditionType;
    constructor();
    constructor(conditionType: SystemConditionType);

  }

  export class NetworkOperatorNotificationTrigger {
    networkAccountId: string;
    constructor();
    constructor(networkAccountId: string);

  }

  export class DeviceManufacturerNotificationTrigger {
    oneShot: boolean;
    triggerQualifier: string;
    constructor();
    constructor(triggerQualifier: string, oneShot: boolean);

  }

  export class CustomSystemEventTrigger {
    recurrence: CustomSystemEventTriggerRecurrence;
    triggerId: string;
    constructor();
    constructor(triggerId: string, recurrence: CustomSystemEventTriggerRecurrence);

  }

  export class CachedFileUpdaterTriggerDetails {
    canRequestUserInput: boolean;
    updateRequest: Object;
    updateTarget: number;
    constructor();

  }

  export class CachedFileUpdaterTrigger {
    constructor();

  }

  export class TimeTrigger {
    freshnessTime: number;
    oneShot: boolean;
    constructor();
    constructor(freshnessTime: number, oneShot: boolean);

  }

  export class MaintenanceTrigger {
    freshnessTime: number;
    oneShot: boolean;
    constructor();
    constructor(freshnessTime: number, oneShot: boolean);

  }

  export class AppointmentStoreNotificationTrigger {
    constructor();

  }

  export class BackgroundExecutionManager {
    constructor();

    static requestAccessKindAsync(requestedAccess: BackgroundAccessRequestKind, reason: string, callback: (error: Error, result: boolean) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: BackgroundAccessStatus) => void): void ;
    static requestAccessAsync(applicationId: string, callback: (error: Error, result: BackgroundAccessStatus) => void): void ;


    static removeAccess(): void;
    static removeAccess(applicationId: string): void;


    static getAccessStatus(): BackgroundAccessStatus;
    static getAccessStatus(applicationId: string): BackgroundAccessStatus;


  }

  export class IBackgroundTaskInstance {
    instanceId: string;
    progress: number;
    suspendedCount: number;
    task: BackgroundTaskRegistration;
    triggerDetails: Object;
    constructor();

    getDeferral(): BackgroundTaskDeferral;

    addListener(type: "Canceled", listener: (ev: Event) => void): void ;
    removeListener(type: "Canceled", listener: (ev: Event) => void): void ;
    on(type: "Canceled", listener: (ev: Event) => void): void ;
    off(type: "Canceled", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BackgroundTaskRegistration {
    static allTasks: Object;
    static allTaskGroups: Object;
    name: string;
    taskId: string;
    trigger: IBackgroundTrigger;
    taskGroup: BackgroundTaskRegistrationGroup;
    constructor();

    static getTaskGroup(groupId: string): BackgroundTaskRegistrationGroup;


    unregister(cancelTask: boolean): void;

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Progress", listener: (ev: Event) => void): void ;
    removeListener(type: "Progress", listener: (ev: Event) => void): void ;
    on(type: "Progress", listener: (ev: Event) => void): void ;
    off(type: "Progress", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BackgroundTaskDeferral {
    constructor();

    complete(): void;

  }

  export class BackgroundTaskProgressEventArgs {
    instanceId: string;
    progress: number;
    constructor();

  }

  export class BackgroundTaskCompletedEventArgs {
    instanceId: string;
    constructor();

    checkResult(): void;

  }

  export class IBackgroundTaskInstance2 {
    constructor();

    getThrottleCount(counter: BackgroundTaskThrottleCounter): number;

  }

  export class IBackgroundTaskInstance4 {
    user: Object;
    constructor();

  }

  export class IBackgroundTask {
    constructor();

    run(taskInstance: IBackgroundTaskInstance): void;

  }

  export class IBackgroundTaskRegistration {
    name: string;
    taskId: string;
    constructor();

    unregister(cancelTask: boolean): void;

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Progress", listener: (ev: Event) => void): void ;
    removeListener(type: "Progress", listener: (ev: Event) => void): void ;
    on(type: "Progress", listener: (ev: Event) => void): void ;
    off(type: "Progress", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IBackgroundTaskRegistration2 {
    trigger: IBackgroundTrigger;
    constructor();

  }

  export class IBackgroundTrigger {
    constructor();

  }

  export class IBackgroundTaskRegistration3 {
    taskGroup: BackgroundTaskRegistrationGroup;
    constructor();

  }

  export class BackgroundTaskRegistrationGroup {
    allTasks: Object;
    id: string;
    name: string;
    constructor();
    constructor(id: string);
    constructor(id: string, name: string);

    addListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    removeListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    on(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    off(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IBackgroundCondition {
    constructor();

  }

  export class BackgroundTaskBuilder {
    taskEntryPoint: string;
    name: string;
    cancelOnConditionLoss: boolean;
    isNetworkRequested: boolean;
    taskGroup: BackgroundTaskRegistrationGroup;
    constructor();

    setTrigger(trigger: IBackgroundTrigger): void;

    addCondition(condition: IBackgroundCondition): void;

    register(): BackgroundTaskRegistration;

  }

  export class BackgroundWorkCost {
    static currentBackgroundWorkCost: BackgroundWorkCostValue;
    constructor();

  }

  export class ChatMessageNotificationTrigger {
    constructor();

  }

  export class ChatMessageReceivedNotificationTrigger {
    constructor();

  }

  export class RcsEndUserMessageAvailableTrigger {
    constructor();

  }

  export class ContactStoreNotificationTrigger {
    constructor();

  }

  export class EmailStoreNotificationTrigger {
    constructor();

  }

  export class MobileBroadbandRegistrationStateChangeTrigger {
    constructor();

  }

  export class MobileBroadbandRadioStateChangeTrigger {
    constructor();

  }

  export class MobileBroadbandPinLockStateChangeTrigger {
    constructor();

  }

  export class MobileBroadbandDeviceServiceNotificationTrigger {
    constructor();

  }

  export class NetworkOperatorDataUsageTrigger {
    constructor();

  }

  export class TetheringEntitlementCheckTrigger {
    constructor();

  }

  export class MobileBroadbandPcoDataChangeTrigger {
    constructor();

  }

  export class SmsMessageReceivedTrigger {
    constructor();
    constructor(filterRules: Object);

  }

  export class StorageLibraryContentChangedTrigger {
    constructor();

    static create(storageLibrary: Object): StorageLibraryContentChangedTrigger;


    static createFromLibraries(storageLibraries: Object): StorageLibraryContentChangedTrigger;


  }

  export class StorageLibraryChangeTrackerTrigger {
    constructor();
    constructor(tracker: Object);

  }

  export class PaymentAppCanMakePaymentTrigger {
    constructor();

  }

  export class DeviceUseTrigger {
    constructor();

    requestAsync(deviceId: string, callback: (error: Error, result: DeviceTriggerResult) => void): void ;
    requestAsync(deviceId: string, arguments: string, callback: (error: Error, result: DeviceTriggerResult) => void): void ;

  }

  export class DeviceServicingTrigger {
    constructor();

    requestAsync(deviceId: string, expectedDuration: number, callback: (error: Error, result: DeviceTriggerResult) => void): void ;
    requestAsync(deviceId: string, expectedDuration: number, arguments: string, callback: (error: Error, result: DeviceTriggerResult) => void): void ;

  }

  export class RfcommConnectionTrigger {
    remoteHostName: Object;
    protectionLevel: number;
    allowMultipleConnections: boolean;
    inboundConnection: Object;
    outboundConnection: Object;
    constructor();

  }

  export class DeviceConnectionChangeTrigger {
    maintainConnection: boolean;
    canMaintainConnection: boolean;
    deviceId: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: DeviceConnectionChangeTrigger) => void): void ;


  }

  export class GattCharacteristicNotificationTrigger {
    characteristic: Object;
    eventTriggeringMode: number;
    constructor();
    constructor(characteristic: Object, eventTriggeringMode: number);
    constructor(characteristic: Object);

  }

  export class GattServiceProviderTrigger {
    advertisingParameters: Object;
    service: Object;
    triggerId: string;
    constructor();

    static createAsync(triggerId: string, serviceUuid: string, callback: (error: Error, result: GattServiceProviderTriggerResult) => void): void ;


  }

  export class GattServiceProviderTriggerResult {
    error: number;
    trigger: GattServiceProviderTrigger;
    constructor();

  }

  export class BluetoothLEAdvertisementWatcherTrigger {
    signalStrengthFilter: Object;
    advertisementFilter: Object;
    maxOutOfRangeTimeout: number;
    maxSamplingInterval: number;
    minOutOfRangeTimeout: number;
    minSamplingInterval: number;
    constructor();

  }

  export class BluetoothLEAdvertisementPublisherTrigger {
    advertisement: Object;
    constructor();

  }

  export class DeviceWatcherTrigger {
    constructor();

  }

  export class LocationTrigger {
    triggerType: LocationTriggerType;
    constructor();
    constructor(triggerType: LocationTriggerType);

  }

  export class GeovisitTrigger {
    monitoringScope: number;
    constructor();

  }

  export class ActivitySensorTrigger {
    minimumReportInterval: number;
    reportInterval: number;
    subscribedActivities: Object;
    supportedActivities: Object;
    constructor();
    constructor(reportIntervalInMilliseconds: number);

  }

  export class SensorDataThresholdTrigger {
    constructor();
    constructor(threshold: Object);

  }

  export class NetworkOperatorHotspotAuthenticationTrigger {
    constructor();

  }

  export class SocketActivityTrigger {
    isWakeFromLowPowerSupported: boolean;
    constructor();

  }

  export class PushNotificationTrigger {
    constructor();
    constructor(applicationId: string);

  }

  export class ToastNotificationHistoryChangedTrigger {
    constructor();
    constructor(applicationId: string);

  }

  export class ToastNotificationActionTrigger {
    constructor();
    constructor(applicationId: string);

  }

  export class UserNotificationChangedTrigger {
    constructor();
    constructor(notificationKinds: number);

  }

  export class AppBroadcastTriggerProviderInfo {
    videoKeyFrameInterval: number;
    maxVideoWidth: number;
    maxVideoHeight: number;
    maxVideoBitrate: number;
    logoResource: string;
    displayNameResource: string;
    constructor();

  }

  export class AppBroadcastTrigger {
    providerInfo: AppBroadcastTriggerProviderInfo;
    constructor();
    constructor(providerKey: string);

  }

