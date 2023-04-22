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

  export enum ReminderState {
    active,
    snoozed,
    dismissed,
  }

  export enum PhoneNotificationType {
    newCall,
    callChanged,
    lineChanged,
    phoneCallAudioEndpointChanged,
    phoneMuteChanged,
  }

  export enum PhoneCallTransport {
    cellular,
    voip,
  }

  export enum PhoneMediaType {
    audioOnly,
    audioVideo,
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

  export enum PhoneCallAudioEndpoint {
    default,
    speaker,
    handsfree,
  }

  export enum PhoneLineRegistrationState {
    disconnected,
    home,
    roaming,
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

  export enum PlaybackStatus {
    none,
    trackChanged,
    stopped,
    playing,
    paused,
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

  export enum VibrateState {
    ringerOffVibrateOff,
    ringerOffVibrateOn,
    ringerOnVibrateOff,
    ringerOnVibrateOn,
  }

  export class TextResponse {
    content: string;
    id: number;
    constructor();

  }

  export class AppNotificationInfo {
    id: string;
    name: string;
    constructor();

  }

  export class EmailAccountInfo {
    displayName: string;
    isNotificationEnabled: boolean;
    constructor();

  }

  export class EmailFolderInfo {
    displayName: string;
    isNotificationEnabled: boolean;
    constructor();

  }

  export class BinaryId {
    id: number;
    length: number;
    constructor();

  }

  export class IAccessoryNotificationTriggerDetails {
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    startedProcessing: boolean;
    timeCreated: Date;
    constructor();

  }

  export class AlarmNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    alarmId: string;
    reminderState: ReminderState;
    timestamp: Date;
    title: string;
    instanceId: string;
    constructor();

  }

  export class EmailReadNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    accountName: string;
    isRead: boolean;
    messageEntryId: BinaryId;
    parentFolderName: string;
    constructor();

  }

  export class EmailNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    accountName: string;
    emailMessage: Object;
    parentFolderName: string;
    senderAddress: string;
    senderName: string;
    timestamp: Date;
    messageEntryId: BinaryId;
    constructor();

  }

  export class PhoneLineDetails {
    defaultOutgoingLine: boolean;
    displayName: string;
    lineId: string;
    lineNumber: string;
    registrationState: PhoneLineRegistrationState;
    voicemailCount: number;
    missedCallCount: number;
    constructor();

  }

  export class PhoneCallDetails {
    callDirection: PhoneCallDirection;
    callId: number;
    callMediaType: PhoneMediaType;
    callTransport: PhoneCallTransport;
    conferenceCallId: number;
    contactName: string;
    endTime: Date;
    phoneLine: string;
    phoneNumber: string;
    presetTextResponses: Object;
    startTime: Date;
    state: PhoneCallState;
    constructor();

  }

  export class PhoneNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    callDetails: PhoneCallDetails;
    phoneLineChangedId: string;
    phoneNotificationType: PhoneNotificationType;
    constructor();

  }

  export class SpeedDialEntry {
    contactName: string;
    numberType: string;
    phoneNumber: string;
    constructor();

  }

  export class ReminderNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    appointment: Object;
    description: string;
    details: string;
    reminderId: string;
    reminderState: ReminderState;
    timestamp: Date;
    title: string;
    instanceId: string;
    constructor();

  }

  export class CalendarChangedNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    eventType: CalendarChangedEvent;
    itemId: string;
    constructor();

  }

  export class ToastNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    suppressPopup: boolean;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    instanceId: string;
    constructor();

  }

  export class CortanaTileNotificationTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    content: string;
    emphasizedText: string;
    largeContent1: string;
    largeContent2: string;
    nonWrappedSmallContent1: string;
    nonWrappedSmallContent2: string;
    nonWrappedSmallContent3: string;
    nonWrappedSmallContent4: string;
    source: string;
    tileId: string;
    constructor();

  }

  export class MediaMetadata {
    album: string;
    artist: string;
    duration: number;
    subtitle: string;
    thumbnail: Object;
    title: string;
    track: number;
    constructor();

  }

  export class MediaControlsTriggerDetails {
    startedProcessing: boolean;
    accessoryNotificationType: AccessoryNotificationType;
    appDisplayName: string;
    appId: string;
    timeCreated: Date;
    mediaMetadata: MediaMetadata;
    playbackStatus: PlaybackStatus;
    constructor();

  }

  export class VolumeInfo {
    callVolume: number;
    isMuted: boolean;
    isVibrateEnabled: VibrateState;
    mediaVolume: number;
    systemVolume: number;
    constructor();

  }

  export class AccessoryManager {
    static phoneMute: boolean;
    static phoneCallAudioEndpoint: PhoneCallAudioEndpoint;
    static batterySaverState: boolean;
    static doNotDisturbEnabled: boolean;
    static drivingModeEnabled: boolean;
    static mediaPlaybackCapabilities: PlaybackCapability;
    static mediaPlaybackStatus: PlaybackStatus;
    static phoneLineDetails: Object;
    static isPhonePinLocked: boolean;
    static speedDialList: Object;
    static volumeInfo: VolumeInfo;
    constructor();

    static snoozeAlarmByInstanceId(instanceId: string): void;


    static dismissAlarmByInstanceId(instanceId: string): void;


    static snoozeReminderByInstanceId(instanceId: string): void;


    static dismissReminderByInstanceId(instanceId: string): void;


    static ringDevice(): void;


    static clearToast(instanceId: string): void;


    static increaseVolume(step: number): void;


    static decreaseVolume(step: number): void;


    static setMute(mute: boolean): void;


    static setRingerVibrate(ringer: boolean, vibrate: boolean): void;


    static getAllEmailAccounts(): Object;


    static getFolders(emailAccount: string): Object;


    static enableEmailNotificationEmailAccount(emailAccount: string): void;


    static disableEmailNotificationEmailAccount(emailAccount: string): void;


    static enableEmailNotificationFolderFilter(emailAccount: string, folders: Object): void;


    static updateEmailReadStatus(messageEntryId: BinaryId, isRead: boolean): void;


    static registerAccessoryApp(): string;


    static getNextTriggerDetails(): IAccessoryNotificationTriggerDetails;


    static processTriggerDetails(pDetails: IAccessoryNotificationTriggerDetails): void;


    static getPhoneLineDetails(phoneLine: string): PhoneLineDetails;


    static acceptPhoneCall(phoneCallId: number): void;
    static acceptPhoneCall(phoneCallId: number, endPoint: PhoneCallAudioEndpoint): void;


    static acceptPhoneCallWithVideo(phoneCallId: number): void;
    static acceptPhoneCallWithVideo(phoneCallId: number, endPoint: PhoneCallAudioEndpoint): void;


    static rejectPhoneCall(phoneCallId: number): void;
    static rejectPhoneCall(phoneCallId: number, textResponseID: number): void;


    static makePhoneCall(phoneLine: string, phoneNumber: string): void;
    static makePhoneCall(phoneLine: string, phoneNumber: string, endPoint: PhoneCallAudioEndpoint): void;


    static makePhoneCallWithVideo(phoneLine: string, phoneNumber: string): void;
    static makePhoneCallWithVideo(phoneLine: string, phoneNumber: string, endPoint: PhoneCallAudioEndpoint): void;


    static swapPhoneCalls(phoneCallIdToHold: number, phoneCallIdOnHold: number): void;


    static holdPhoneCall(phoneCallId: number, holdCall: boolean): void;


    static endPhoneCall(phoneCallId: number): void;


    static snoozeAlarm(alarmId: string): void;
    static snoozeAlarm(alarmId: string, timeSpan: number): void;


    static dismissAlarm(alarmId: string): void;


    static snoozeReminder(reminderId: string): void;
    static snoozeReminder(reminderId: string, timeSpan: number): void;


    static dismissReminder(reminderId: string): void;


    static getMediaMetadata(): MediaMetadata;


    static performMediaPlaybackCommand(command: PlaybackCommand): void;


    static getApps(): Object;


    static enableNotificationsForApplication(appId: string): void;


    static disableNotificationsForApplication(appId: string): void;


    static isNotificationEnabledForApplication(appId: string): boolean;


    static getEnabledAccessoryNotificationTypes(): number;


    static enableAccessoryNotificationTypes(accessoryNotificationTypes: number): void;


    static disableAllAccessoryNotificationTypes(): void;


    static getUserConsent(): boolean;


    static getAppIcon(appId: string): Object;


  }

