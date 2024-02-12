  export enum AccessoryNotificationType {
    none,
    phone,
    email,
    reminder,
    alarm,
    toast,
    appUninstalled,
    dnd,
    drivingMode,
    batterySaver,
    media,
    cortanaTile,
    toastCleared,
    calendarChanged,
    volumeChanged,
    emailReadStatusChanged,
  }

  export enum CalendarChangedEvent {
    lostEvents,
    appointmentAdded,
    appointmentChanged,
    appointmentDeleted,
    calendarAdded,
    calendarChanged,
    calendarDeleted,
  }

  export enum PhoneCallAudioEndpoint {
    default,
    speaker,
    handsfree,
  }

  export enum PhoneCallDirection {
    incoming,
    outgoing,
  }

  export enum PhoneCallState {
    unknown,
    ringing,
    talking,
    held,
    ended,
  }

  export enum PhoneCallTransport {
    cellular,
    voip,
  }

  export enum PhoneLineRegistrationState {
    disconnected,
    home,
    roaming,
  }

  export enum PhoneMediaType {
    audioOnly,
    audioVideo,
  }

  export enum PhoneNotificationType {
    newCall,
    callChanged,
    lineChanged,
    phoneCallAudioEndpointChanged,
    phoneMuteChanged,
  }

  export enum PlaybackCapability {
    none,
    play,
    pause,
    stop,
    record,
    fastForward,
    rewind,
    next,
    previous,
    channelUp,
    channelDown,
  }

  export enum PlaybackCommand {
    play,
    pause,
    stop,
    record,
    fastForward,
    rewind,
    next,
    previous,
    channelUp,
    channelDown,
  }

  export enum PlaybackStatus {
    none,
    trackChanged,
    stopped,
    playing,
    paused,
  }

  export enum ReminderState {
    active,
    snoozed,
    dismissed,
  }

  export enum VibrateState {
    ringerOffVibrateOff,
    ringerOffVibrateOn,
    ringerOnVibrateOff,
    ringerOnVibrateOn,
  }

  export class AccessoryManager {
    static phoneMute: Boolean;
    static phoneCallAudioEndpoint: PhoneCallAudioEndpoint;
    static batterySaverState: Boolean;
    static doNotDisturbEnabled: Boolean;
    static drivingModeEnabled: Boolean;
    static mediaPlaybackCapabilities: PlaybackCapability;
    static mediaPlaybackStatus: PlaybackStatus;
    static phoneLineDetails: Object;
    static isPhonePinLocked: Boolean;
    static speedDialList: Object;
    static volumeInfo: VolumeInfo;
    constructor();

    static snoozeAlarmByInstanceId(instanceId: String): void;


    static dismissAlarmByInstanceId(instanceId: String): void;


    static snoozeReminderByInstanceId(instanceId: String): void;


    static dismissReminderByInstanceId(instanceId: String): void;


    static ringDevice(): void;


    static clearToast(instanceId: String): void;


    static increaseVolume(step: Number): void;


    static decreaseVolume(step: Number): void;


    static setMute(mute: Boolean): void;


    static setRingerVibrate(ringer: Boolean, vibrate: Boolean): void;


    static getAllEmailAccounts(): Object;


    static getFolders(emailAccount: String): Object;


    static enableEmailNotificationEmailAccount(emailAccount: String): void;


    static disableEmailNotificationEmailAccount(emailAccount: String): void;


    static enableEmailNotificationFolderFilter(emailAccount: String, folders: Object): void;


    static updateEmailReadStatus(messageEntryId: BinaryId, isRead: Boolean): void;


    static registerAccessoryApp(): String;


    static getNextTriggerDetails(): IAccessoryNotificationTriggerDetails;


    static processTriggerDetails(pDetails: IAccessoryNotificationTriggerDetails): void;


    static getPhoneLineDetails(phoneLine: String): PhoneLineDetails;


    static acceptPhoneCall(phoneCallId: Number): void;
    static acceptPhoneCall(phoneCallId: Number, endPoint: PhoneCallAudioEndpoint): void;


    static acceptPhoneCallWithVideo(phoneCallId: Number): void;
    static acceptPhoneCallWithVideo(phoneCallId: Number, endPoint: PhoneCallAudioEndpoint): void;


    static rejectPhoneCall(phoneCallId: Number): void;
    static rejectPhoneCall(phoneCallId: Number, textResponseID: Number): void;


    static makePhoneCall(phoneLine: String, phoneNumber: String): void;
    static makePhoneCall(phoneLine: String, phoneNumber: String, endPoint: PhoneCallAudioEndpoint): void;


    static makePhoneCallWithVideo(phoneLine: String, phoneNumber: String): void;
    static makePhoneCallWithVideo(phoneLine: String, phoneNumber: String, endPoint: PhoneCallAudioEndpoint): void;


    static swapPhoneCalls(phoneCallIdToHold: Number, phoneCallIdOnHold: Number): void;


    static holdPhoneCall(phoneCallId: Number, holdCall: Boolean): void;


    static endPhoneCall(phoneCallId: Number): void;


    static snoozeAlarm(alarmId: String): void;
    static snoozeAlarm(alarmId: String, timeSpan: Number): void;


    static dismissAlarm(alarmId: String): void;


    static snoozeReminder(reminderId: String): void;
    static snoozeReminder(reminderId: String, timeSpan: Number): void;


    static dismissReminder(reminderId: String): void;


    static getMediaMetadata(): MediaMetadata;


    static performMediaPlaybackCommand(command: PlaybackCommand): void;


    static getApps(): Object;


    static enableNotificationsForApplication(appId: String): void;


    static disableNotificationsForApplication(appId: String): void;


    static isNotificationEnabledForApplication(appId: String): Boolean;


    static getEnabledAccessoryNotificationTypes(): Number;


    static enableAccessoryNotificationTypes(accessoryNotificationTypes: Number): void;


    static disableAllAccessoryNotificationTypes(): void;


    static getUserConsent(): Boolean;


    static getAppIcon(appId: String): Object;


  }

  export class AlarmNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    alarmId: String;
    reminderState: ReminderState;
    timestamp: Date;
    title: String;
    instanceId: String;
    constructor();

  }

  export class AppNotificationInfo {
    id: String;
    name: String;
    constructor();

  }

  export class BinaryId {
    id: Number;
    length: Number;
    constructor();

  }

  export class CalendarChangedNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    eventType: CalendarChangedEvent;
    itemId: String;
    constructor();

  }

  export class CortanaTileNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    content: String;
    emphasizedText: String;
    largeContent1: String;
    largeContent2: String;
    nonWrappedSmallContent1: String;
    nonWrappedSmallContent2: String;
    nonWrappedSmallContent3: String;
    nonWrappedSmallContent4: String;
    source: String;
    tileId: String;
    constructor();

  }

  export class EmailAccountInfo {
    displayName: String;
    isNotificationEnabled: Boolean;
    constructor();

  }

  export class EmailFolderInfo {
    displayName: String;
    isNotificationEnabled: Boolean;
    constructor();

  }

  export class EmailNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    accountName: String;
    emailMessage: Object;
    parentFolderName: String;
    senderAddress: String;
    senderName: String;
    timestamp: Date;
    messageEntryId: BinaryId;
    constructor();

  }

  export class EmailReadNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    accountName: String;
    isRead: Boolean;
    messageEntryId: BinaryId;
    parentFolderName: String;
    constructor();

  }

  export class IAccessoryNotificationTriggerDetails {
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    startedProcessing: Boolean;
    timeCreated: Date;
    constructor();

  }

  export class MediaControlsTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    mediaMetadata: MediaMetadata;
    playbackStatus: PlaybackStatus;
    constructor();

  }

  export class MediaMetadata {
    album: String;
    artist: String;
    duration: Number;
    subtitle: String;
    thumbnail: Object;
    title: String;
    track: Number;
    constructor();

  }

  export class PhoneCallDetails {
    callDirection: PhoneCallDirection;
    callId: Number;
    callMediaType: PhoneMediaType;
    callTransport: PhoneCallTransport;
    conferenceCallId: Number;
    contactName: String;
    endTime: Date;
    phoneLine: String;
    phoneNumber: String;
    presetTextResponses: Object;
    startTime: Date;
    state: PhoneCallState;
    constructor();

  }

  export class PhoneLineDetails {
    defaultOutgoingLine: Boolean;
    displayName: String;
    lineId: String;
    lineNumber: String;
    registrationState: PhoneLineRegistrationState;
    voicemailCount: Number;
    missedCallCount: Number;
    constructor();

  }

  export class PhoneNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    callDetails: PhoneCallDetails;
    phoneLineChangedId: String;
    phoneNotificationType: PhoneNotificationType;
    constructor();

  }

  export class ReminderNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    appointment: Object;
    description: String;
    details: String;
    reminderId: String;
    reminderState: ReminderState;
    timestamp: Date;
    title: String;
    instanceId: String;
    constructor();

  }

  export class SpeedDialEntry {
    contactName: String;
    numberType: String;
    phoneNumber: String;
    constructor();

  }

  export class TextResponse {
    content: String;
    id: Number;
    constructor();

  }

  export class ToastNotificationTriggerDetails {
    startedProcessing: Boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: String;
    appId: String;
    timeCreated: Date;
    suppressPopup: Boolean;
    text1: String;
    text2: String;
    text3: String;
    text4: String;
    instanceId: String;
    constructor();

  }

  export class VolumeInfo {
    callVolume: Number;
    isMuted: Boolean;
    isVibrateEnabled: VibrateState;
    mediaVolume: Number;
    systemVolume: Number;
    constructor();

  }

