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

  export enum BackgroundAccessRequestKind {
    alwaysAllowed,
    allowedSubjectToSystemPolicy,
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

  export enum BackgroundTaskThrottleCounter {
    all,
    cpu,
    network,
  }

  export enum BackgroundWorkCostValue {
    low,
    medium,
    high,
  }

  export enum CustomSystemEventTriggerRecurrence {
    once,
    always,
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

  export enum MediaProcessingTriggerResult {
    allowed,
    currentlyRunning,
    disabledByPolicy,
    unknownError,
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

  export class ActivitySensorTrigger {
    minimumReportInterval: Number;
    reportInterval: Number;
    subscribedActivities: Object;
    supportedActivities: Object;
    constructor();
    constructor(reportIntervalInMilliseconds: Number);

  }

  export class AlarmApplicationManager {
    constructor();

    static requestAccessAsync(callback: (error: Error, result: AlarmAccessStatus) => void): void ;


    static getAccessStatus(): AlarmAccessStatus;


  }

  export class AppBroadcastTrigger {
    providerInfo: AppBroadcastTriggerProviderInfo;
    constructor();
    constructor(providerKey: String);

  }

  export class AppBroadcastTriggerProviderInfo {
    videoKeyFrameInterval: Number;
    maxVideoWidth: Number;
    maxVideoHeight: Number;
    maxVideoBitrate: Number;
    logoResource: String;
    displayNameResource: String;
    constructor();

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

  export class AppointmentStoreNotificationTrigger {
    constructor();

  }

  export class BackgroundExecutionManager {
    constructor();

    static requestAccessKindForModernStandbyAsync(requestedAccess: BackgroundAccessRequestKind, reason: String, callback: (error: Error, result: Boolean) => void): void ;


    static requestAccessKindAsync(requestedAccess: BackgroundAccessRequestKind, reason: String, callback: (error: Error, result: Boolean) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: BackgroundAccessStatus) => void): void ;
    static requestAccessAsync(applicationId: String, callback: (error: Error, result: BackgroundAccessStatus) => void): void ;


    static getAccessStatusForModernStandby(): BackgroundAccessStatus;
    static getAccessStatusForModernStandby(applicationId: String): BackgroundAccessStatus;


    static removeAccess(): void;
    static removeAccess(applicationId: String): void;


    static getAccessStatus(): BackgroundAccessStatus;
    static getAccessStatus(applicationId: String): BackgroundAccessStatus;


  }

  export class BackgroundTaskBuilder {
    taskEntryPoint: String;
    name: String;
    cancelOnConditionLoss: Boolean;
    isNetworkRequested: Boolean;
    taskGroup: BackgroundTaskRegistrationGroup;
    constructor();

    setTrigger(trigger: IBackgroundTrigger): void;

    addCondition(condition: IBackgroundCondition): void;

    register(): BackgroundTaskRegistration;

    setTaskEntryPointClsid(TaskEntryPoint: String): void;

  }

  export class BackgroundTaskCompletedEventArgs {
    instanceId: String;
    constructor();

    checkResult(): void;

  }

  export class BackgroundTaskDeferral {
    constructor();

    complete(): void;

  }

  export class BackgroundTaskProgressEventArgs {
    instanceId: String;
    progress: Number;
    constructor();

  }

  export class BackgroundTaskRegistration {
    static allTasks: Object;
    static allTaskGroups: Object;
    name: String;
    taskId: String;
    trigger: IBackgroundTrigger;
    taskGroup: BackgroundTaskRegistrationGroup;
    constructor();

    static getTaskGroup(groupId: String): BackgroundTaskRegistrationGroup;


    unregister(cancelTask: Boolean): void;

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

  export class BackgroundTaskRegistrationGroup {
    allTasks: Object;
    id: String;
    name: String;
    constructor();
    constructor(id: String);
    constructor(id: String, name: String);

    addListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    removeListener(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    on(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    off(type: "BackgroundActivated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class BackgroundWorkCost {
    static currentBackgroundWorkCost: BackgroundWorkCostValue;
    constructor();

  }

  export class BluetoothLEAdvertisementPublisherTrigger {
    advertisement: Object;
    useExtendedFormat: Boolean;
    preferredTransmitPowerLevelInDBm: Number;
    isAnonymous: Boolean;
    includeTransmitPowerLevel: Boolean;
    constructor();

  }

  export class BluetoothLEAdvertisementWatcherTrigger {
    signalStrengthFilter: Object;
    advertisementFilter: Object;
    maxOutOfRangeTimeout: Number;
    maxSamplingInterval: Number;
    minOutOfRangeTimeout: Number;
    minSamplingInterval: Number;
    allowExtendedAdvertisements: Boolean;
    constructor();

  }

  export class CachedFileUpdaterTrigger {
    constructor();

  }

  export class CachedFileUpdaterTriggerDetails {
    canRequestUserInput: Boolean;
    updateRequest: Object;
    updateTarget: Number;
    constructor();

  }

  export class ChatMessageNotificationTrigger {
    constructor();

  }

  export class ChatMessageReceivedNotificationTrigger {
    constructor();

  }

  export class CommunicationBlockingAppSetAsActiveTrigger {
    constructor();

  }

  export class ContactStoreNotificationTrigger {
    constructor();

  }

  export class ContentPrefetchTrigger {
    waitInterval: Number;
    constructor();
    constructor(waitInterval: Number);

  }

  export class ConversationalAgentTrigger {
    constructor();

  }

  export class CustomSystemEventTrigger {
    recurrence: CustomSystemEventTriggerRecurrence;
    triggerId: String;
    constructor();
    constructor(triggerId: String, recurrence: CustomSystemEventTriggerRecurrence);

  }

  export class DeviceConnectionChangeTrigger {
    maintainConnection: Boolean;
    canMaintainConnection: Boolean;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: DeviceConnectionChangeTrigger) => void): void ;


  }

  export class DeviceManufacturerNotificationTrigger {
    oneShot: Boolean;
    triggerQualifier: String;
    constructor();
    constructor(triggerQualifier: String, oneShot: Boolean);

  }

  export class DeviceServicingTrigger {
    constructor();

    requestAsync(deviceId: String, expectedDuration: Number, callback: (error: Error, result: DeviceTriggerResult) => void): void ;
    requestAsync(deviceId: String, expectedDuration: Number, arguments: String, callback: (error: Error, result: DeviceTriggerResult) => void): void ;

  }

  export class DeviceUseTrigger {
    constructor();

    requestAsync(deviceId: String, callback: (error: Error, result: DeviceTriggerResult) => void): void ;
    requestAsync(deviceId: String, arguments: String, callback: (error: Error, result: DeviceTriggerResult) => void): void ;

  }

  export class DeviceWatcherTrigger {
    constructor();

  }

  export class EmailStoreNotificationTrigger {
    constructor();

  }

  export class GattCharacteristicNotificationTrigger {
    characteristic: Object;
    eventTriggeringMode: Number;
    constructor();
    constructor(characteristic: Object, eventTriggeringMode: Number);
    constructor(characteristic: Object);

  }

  export class GattServiceProviderTrigger {
    advertisingParameters: Object;
    service: Object;
    triggerId: String;
    constructor();

    static createAsync(triggerId: String, serviceUuid: String, callback: (error: Error, result: GattServiceProviderTriggerResult) => void): void ;


  }

  export class GattServiceProviderTriggerResult {
    error: Number;
    trigger: GattServiceProviderTrigger;
    constructor();

  }

  export class GeovisitTrigger {
    monitoringScope: Number;
    constructor();

  }

  export class IBackgroundCondition {
    constructor();

  }

  export class IBackgroundTask {
    constructor();

    run(taskInstance: IBackgroundTaskInstance): void;

  }

  export class IBackgroundTaskInstance {
    instanceId: String;
    progress: Number;
    suspendedCount: Number;
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

  export class IBackgroundTaskInstance2 {
    constructor();

    getThrottleCount(counter: BackgroundTaskThrottleCounter): Number;

  }

  export class IBackgroundTaskInstance4 {
    user: Object;
    constructor();

  }

  export class IBackgroundTaskRegistration {
    name: String;
    taskId: String;
    constructor();

    unregister(cancelTask: Boolean): void;

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

  export class IBackgroundTaskRegistration3 {
    taskGroup: BackgroundTaskRegistrationGroup;
    constructor();

  }

  export class IBackgroundTrigger {
    constructor();

  }

  export class LocationTrigger {
    triggerType: LocationTriggerType;
    constructor();
    constructor(triggerType: LocationTriggerType);

  }

  export class MaintenanceTrigger {
    freshnessTime: Number;
    oneShot: Boolean;
    constructor();
    constructor(freshnessTime: Number, oneShot: Boolean);

  }

  export class MediaProcessingTrigger {
    constructor();

    requestAsync(callback: (error: Error, result: MediaProcessingTriggerResult) => void): void ;
    requestAsync(arguments: Object, callback: (error: Error, result: MediaProcessingTriggerResult) => void): void ;

  }

  export class MobileBroadbandDeviceServiceNotificationTrigger {
    constructor();

  }

  export class MobileBroadbandPcoDataChangeTrigger {
    constructor();

  }

  export class MobileBroadbandPinLockStateChangeTrigger {
    constructor();

  }

  export class MobileBroadbandRadioStateChangeTrigger {
    constructor();

  }

  export class MobileBroadbandRegistrationStateChangeTrigger {
    constructor();

  }

  export class NetworkOperatorDataUsageTrigger {
    constructor();

  }

  export class NetworkOperatorHotspotAuthenticationTrigger {
    constructor();

  }

  export class NetworkOperatorNotificationTrigger {
    networkAccountId: String;
    constructor();
    constructor(networkAccountId: String);

  }

  export class PaymentAppCanMakePaymentTrigger {
    constructor();

  }

  export class PhoneTrigger {
    oneShot: Boolean;
    triggerType: Number;
    constructor();
    constructor(type: Number, oneShot: Boolean);

  }

  export class PushNotificationTrigger {
    constructor();
    constructor(applicationId: String);

  }

  export class RcsEndUserMessageAvailableTrigger {
    constructor();

  }

  export class RfcommConnectionTrigger {
    remoteHostName: Object;
    protectionLevel: Number;
    allowMultipleConnections: Boolean;
    inboundConnection: Object;
    outboundConnection: Object;
    constructor();

  }

  export class SecondaryAuthenticationFactorAuthenticationTrigger {
    constructor();

  }

  export class SensorDataThresholdTrigger {
    constructor();
    constructor(threshold: Object);

  }

  export class SmartCardTrigger {
    triggerType: Number;
    constructor();
    constructor(triggerType: Number);

  }

  export class SmsMessageReceivedTrigger {
    constructor();
    constructor(filterRules: Object);

  }

  export class SocketActivityTrigger {
    isWakeFromLowPowerSupported: Boolean;
    constructor();

  }

  export class StorageLibraryChangeTrackerTrigger {
    constructor();
    constructor(tracker: Object);

  }

  export class StorageLibraryContentChangedTrigger {
    constructor();

    static create(storageLibrary: Object): StorageLibraryContentChangedTrigger;


    static createFromLibraries(storageLibraries: Object): StorageLibraryContentChangedTrigger;


  }

  export class SystemCondition {
    conditionType: SystemConditionType;
    constructor();
    constructor(conditionType: SystemConditionType);

  }

  export class SystemTrigger {
    oneShot: Boolean;
    triggerType: SystemTriggerType;
    constructor();
    constructor(triggerType: SystemTriggerType, oneShot: Boolean);

  }

  export class TetheringEntitlementCheckTrigger {
    constructor();

  }

  export class TimeTrigger {
    freshnessTime: Number;
    oneShot: Boolean;
    constructor();
    constructor(freshnessTime: Number, oneShot: Boolean);

  }

  export class ToastNotificationActionTrigger {
    constructor();
    constructor(applicationId: String);

  }

  export class ToastNotificationHistoryChangedTrigger {
    constructor();
    constructor(applicationId: String);

  }

  export class UserNotificationChangedTrigger {
    constructor();
    constructor(notificationKinds: Number);

  }

  export class WiFiOnDemandHotspotConnectTrigger {
    constructor();

  }

  export class WiFiOnDemandHotspotUpdateMetadataTrigger {
    constructor();

  }

