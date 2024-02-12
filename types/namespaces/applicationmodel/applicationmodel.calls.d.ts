  export class Color {
    constructor();
  }

  export class CallsPhoneContract {
    constructor();
  }

  export class CallsVoipContract {
    constructor();
  }

  export class LockScreenCallContract {
    constructor();
  }

  export enum CellularDtmfMode {
    continuous,
    burst,
  }

  export enum DtmfKey {
    d0,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d9,
    star,
    pound,
  }

  export enum DtmfToneAudioPlayback {
    play,
    doNotPlay,
  }

  export enum PhoneAudioRoutingEndpoint {
    default,
    bluetooth,
    speakerphone,
  }

  export enum PhoneCallAudioDevice {
    unknown,
    localDevice,
    remoteDevice,
  }

  export enum PhoneCallDirection {
    unknown,
    incoming,
    outgoing,
  }

  export enum PhoneCallHistoryEntryMedia {
    audio,
    video,
  }

  export enum PhoneCallHistoryEntryOtherAppReadAccess {
    full,
    systemOnly,
  }

  export enum PhoneCallHistoryEntryQueryDesiredMedia {
    none,
    audio,
    video,
    all,
  }

  export enum PhoneCallHistoryEntryRawAddressKind {
    phoneNumber,
    custom,
  }

  export enum PhoneCallHistorySourceIdKind {
    cellularPhoneLineId,
    packageFamilyName,
  }

  export enum PhoneCallHistoryStoreAccessType {
    appEntriesReadWrite,
    allEntriesLimitedReadWrite,
    allEntriesReadWrite,
  }

  export enum PhoneCallMedia {
    audio,
    audioAndVideo,
    audioAndRealTimeText,
  }

  export enum PhoneCallOperationStatus {
    succeeded,
    otherFailure,
    timedOut,
    connectionLost,
    invalidCallState,
  }

  export enum PhoneCallStatus {
    lost,
    incoming,
    dialing,
    talking,
    held,
    ended,
  }

  export enum PhoneLineNetworkOperatorDisplayTextLocation {
    default,
    tile,
    dialer,
    inCallUI,
  }

  export enum PhoneLineOperationStatus {
    succeeded,
    otherFailure,
    timedOut,
    connectionLost,
    invalidCallState,
  }

  export enum PhoneLineTransport {
    cellular,
    voipApp,
    bluetooth,
  }

  export enum PhoneLineWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopped,
  }

  export enum PhoneNetworkState {
    unknown,
    noSignal,
    deregistered,
    denied,
    searching,
    home,
    roamingInternational,
    roamingDomestic,
  }

  export enum PhoneSimState {
    unknown,
    pinNotRequired,
    pinUnlocked,
    pinLocked,
    pukLocked,
    notInserted,
    invalid,
    disabled,
  }

  export enum PhoneVoicemailType {
    none,
    traditional,
    visual,
  }

  export enum TransportDeviceAudioRoutingStatus {
    unknown,
    canRouteToLocalDevice,
    cannotRouteToLocalDevice,
  }

  export enum VoipPhoneCallMedia {
    none,
    audio,
    video,
  }

  export enum VoipPhoneCallRejectReason {
    userIgnored,
    timedOut,
    otherIncomingCall,
    emergencyCallExists,
    invalidCallState,
  }

  export enum VoipPhoneCallResourceReservationStatus {
    success,
    resourcesNotAvailable,
  }

  export enum VoipPhoneCallState {
    ended,
    held,
    active,
    incoming,
    outgoing,
  }

  export class CallAnswerEventArgs {
    acceptedMedia: VoipPhoneCallMedia;
    constructor();

  }

  export class CallRejectEventArgs {
    rejectReason: VoipPhoneCallRejectReason;
    constructor();

  }

  export class CallStateChangeEventArgs {
    state: VoipPhoneCallState;
    constructor();

  }

  export class LockScreenCallEndCallDeferral {
    constructor();

    complete(): void;

  }

  export class LockScreenCallEndRequestedEventArgs {
    deadline: Date;
    constructor();

    getDeferral(): LockScreenCallEndCallDeferral;

  }

  export class LockScreenCallUI {
    callTitle: String;
    constructor();

    dismiss(): void;

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "EndRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "EndRequested", listener: (ev: Event) => void): void ;
    on(type: "EndRequested", listener: (ev: Event) => void): void ;
    off(type: "EndRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MuteChangeEventArgs {
    muted: Boolean;
    constructor();

  }

  export class PhoneCall {
    audioDevice: PhoneCallAudioDevice;
    callId: String;
    isMuted: Boolean;
    status: PhoneCallStatus;
    constructor();

    static getFromId(callId: String): PhoneCall;


    getPhoneCallInfoAsync(callback: (error: Error, result: PhoneCallInfo) => void): void ;

    endAsync(callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    sendDtmfKeyAsync(key: DtmfKey, dtmfToneAudioPlayback: DtmfToneAudioPlayback, callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    acceptIncomingAsync(callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    holdAsync(callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    resumeFromHoldAsync(callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    muteAsync(callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    unmuteAsync(callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    rejectIncomingAsync(callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    changeAudioDeviceAsync(endpoint: PhoneCallAudioDevice, callback: (error: Error, result: PhoneCallOperationStatus) => void): void ;

    getPhoneCallInfo(): PhoneCallInfo;

    end(): PhoneCallOperationStatus;

    sendDtmfKey(key: DtmfKey, dtmfToneAudioPlayback: DtmfToneAudioPlayback): PhoneCallOperationStatus;

    acceptIncoming(): PhoneCallOperationStatus;

    hold(): PhoneCallOperationStatus;

    resumeFromHold(): PhoneCallOperationStatus;

    mute(): PhoneCallOperationStatus;

    unmute(): PhoneCallOperationStatus;

    rejectIncoming(): PhoneCallOperationStatus;

    changeAudioDevice(endpoint: PhoneCallAudioDevice): PhoneCallOperationStatus;

    addListener(type: "AudioDeviceChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioDeviceChanged", listener: (ev: Event) => void): void ;
    on(type: "AudioDeviceChanged", listener: (ev: Event) => void): void ;
    off(type: "AudioDeviceChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    on(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    off(type: "IsMutedChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhoneCallBlocking {
    static blockUnknownNumbers: Boolean;
    static blockPrivateNumbers: Boolean;
    constructor();

    static setCallBlockingListAsync(phoneNumberList: Object, callback: (error: Error, result: Boolean) => void): void ;


  }

  export class PhoneCallHistoryEntry {
    media: PhoneCallHistoryEntryMedia;
    isMissed: Boolean;
    isIncoming: Boolean;
    isCallerIdBlocked: Boolean;
    isSeen: Boolean;
    duration: Number;
    isEmergency: Boolean;
    isSuppressed: Boolean;
    startTime: Date;
    sourceIdKind: PhoneCallHistorySourceIdKind;
    address: PhoneCallHistoryEntryAddress;
    sourceId: String;
    remoteId: String;
    otherAppReadAccess: PhoneCallHistoryEntryOtherAppReadAccess;
    isRinging: Boolean;
    isVoicemail: Boolean;
    id: String;
    sourceDisplayName: String;
    constructor();

  }

  export class PhoneCallHistoryEntryAddress {
    rawAddressKind: PhoneCallHistoryEntryRawAddressKind;
    rawAddress: String;
    displayName: String;
    contactId: String;
    constructor();
    constructor(rawAddress: String, rawAddressKind: PhoneCallHistoryEntryRawAddressKind);

  }

  export class PhoneCallHistoryEntryQueryOptions {
    desiredMedia: PhoneCallHistoryEntryQueryDesiredMedia;
    sourceIds: Object;
    constructor();

  }

  export class PhoneCallHistoryEntryReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class PhoneCallHistoryManager {
    constructor();

    static requestStoreAsync(accessType: PhoneCallHistoryStoreAccessType, callback: (error: Error, result: PhoneCallHistoryStore) => void): void ;


    static getForUser(user: Object): PhoneCallHistoryManagerForUser;


  }

  export class PhoneCallHistoryManagerForUser {
    user: Object;
    constructor();

    requestStoreAsync(accessType: PhoneCallHistoryStoreAccessType, callback: (error: Error, result: PhoneCallHistoryStore) => void): void ;

  }

  export class PhoneCallHistoryStore {
    constructor();

    getEntryAsync(callHistoryEntryId: String, callback: (error: Error, result: PhoneCallHistoryEntry) => void): void ;

    saveEntryAsync(callHistoryEntry: PhoneCallHistoryEntry, callback: (error: Error) => void): void ;

    deleteEntryAsync(callHistoryEntry: PhoneCallHistoryEntry, callback: (error: Error) => void): void ;

    deleteEntriesAsync(callHistoryEntries: Object, callback: (error: Error) => void): void ;

    markEntryAsSeenAsync(callHistoryEntry: PhoneCallHistoryEntry, callback: (error: Error) => void): void ;

    markEntriesAsSeenAsync(callHistoryEntries: Object, callback: (error: Error) => void): void ;

    getUnseenCountAsync(callback: (error: Error, result: Number) => void): void ;

    markAllAsSeenAsync(callback: (error: Error) => void): void ;

    getSourcesUnseenCountAsync(sourceIds: Object, callback: (error: Error, result: Number) => void): void ;

    markSourcesAsSeenAsync(sourceIds: Object, callback: (error: Error) => void): void ;

    getEntryReader(): PhoneCallHistoryEntryReader;
    getEntryReader(queryOptions: PhoneCallHistoryEntryQueryOptions): PhoneCallHistoryEntryReader;

  }

  export class PhoneCallInfo {
    callDirection: PhoneCallDirection;
    displayName: String;
    isHoldSupported: Boolean;
    lineId: String;
    phoneNumber: String;
    startTime: Date;
    constructor();

  }

  export class PhoneCallManager {
    static isCallActive: Boolean;
    static isCallIncoming: Boolean;
    constructor();

    static requestStoreAsync(callback: (error: Error, result: PhoneCallStore) => void): void ;


    static showPhoneCallSettingsUI(): void;


    static showPhoneCallUI(phoneNumber: String, displayName: String): void;


    addListener(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    on(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    off(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhoneCallStore {
    constructor();

    isEmergencyPhoneNumberAsync(number: String, callback: (error: Error, result: Boolean) => void): void ;

    getDefaultLineAsync(callback: (error: Error, result: String) => void): void ;

    requestLineWatcher(): PhoneLineWatcher;

  }

  export class PhoneCallVideoCapabilities {
    isVideoCallingCapable: Boolean;
    constructor();

  }

  export class PhoneCallVideoCapabilitiesManager {
    constructor();

    static getCapabilitiesAsync(phoneNumber: String, callback: (error: Error, result: PhoneCallVideoCapabilities) => void): void ;


  }

  export class PhoneCallsResult {
    allActivePhoneCalls: Object;
    operationStatus: PhoneLineOperationStatus;
    constructor();

  }

  export class PhoneDialOptions {
    number: String;
    media: PhoneCallMedia;
    displayName: String;
    contactPhone: Object;
    contact: Object;
    audioEndpoint: PhoneAudioRoutingEndpoint;
    constructor();

  }

  export class PhoneLine {
    canDial: Boolean;
    cellularDetails: PhoneLineCellularDetails;
    displayColor: Object;
    displayName: String;
    id: String;
    lineConfiguration: PhoneLineConfiguration;
    networkName: String;
    networkState: PhoneNetworkState;
    supportsTile: Boolean;
    transport: PhoneLineTransport;
    videoCallingCapabilities: PhoneCallVideoCapabilities;
    voicemail: PhoneVoicemail;
    transportDeviceId: String;
    constructor();

    static fromIdAsync(lineId: String, callback: (error: Error, result: PhoneLine) => void): void ;


    isImmediateDialNumberAsync(number: String, callback: (error: Error, result: Boolean) => void): void ;

    dialWithResultAsync(number: String, displayName: String, callback: (error: Error, result: PhoneLineDialResult) => void): void ;

    getAllActivePhoneCallsAsync(callback: (error: Error, result: PhoneCallsResult) => void): void ;

    dial(number: String, displayName: String): void;

    dialWithOptions(options: PhoneDialOptions): void;

    enableTextReply(value: Boolean): void;

    dialWithResult(number: String, displayName: String): PhoneLineDialResult;

    getAllActivePhoneCalls(): PhoneCallsResult;

    addListener(type: "LineChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LineChanged", listener: (ev: Event) => void): void ;
    on(type: "LineChanged", listener: (ev: Event) => void): void ;
    off(type: "LineChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhoneLineCellularDetails {
    isModemOn: Boolean;
    registrationRejectCode: Number;
    simSlotIndex: Number;
    simState: PhoneSimState;
    constructor();

    getNetworkOperatorDisplayText(location: PhoneLineNetworkOperatorDisplayTextLocation): String;

  }

  export class PhoneLineConfiguration {
    extendedProperties: Object;
    isVideoCallingEnabled: Boolean;
    constructor();

  }

  export class PhoneLineDialResult {
    dialCallStatus: PhoneCallOperationStatus;
    dialedCall: PhoneCall;
    constructor();

  }

  export class PhoneLineTransportDevice {
    deviceId: String;
    transport: PhoneLineTransport;
    audioRoutingStatus: TransportDeviceAudioRoutingStatus;
    inBandRingingEnabled: Boolean;
    constructor();

    static fromId(id: String): PhoneLineTransportDevice;


    static getDeviceSelector(): String;
    static getDeviceSelector(transport: PhoneLineTransport): String;


    requestAccessAsync(callback: (error: Error, result: Number) => void): void ;

    connectAsync(callback: (error: Error, result: Boolean) => void): void ;

    registerApp(): void;

    registerAppForUser(user: Object): void;

    unregisterApp(): void;

    unregisterAppForUser(user: Object): void;

    isRegistered(): Boolean;

    connect(): Boolean;

    addListener(type: "AudioRoutingStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioRoutingStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "AudioRoutingStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "AudioRoutingStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "InBandRingingEnabledChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "InBandRingingEnabledChanged", listener: (ev: Event) => void): void ;
    on(type: "InBandRingingEnabledChanged", listener: (ev: Event) => void): void ;
    off(type: "InBandRingingEnabledChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhoneLineWatcher {
    status: PhoneLineWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "LineAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "LineAdded", listener: (ev: Event) => void): void ;
    on(type: "LineAdded", listener: (ev: Event) => void): void ;
    off(type: "LineAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "LineRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "LineRemoved", listener: (ev: Event) => void): void ;
    on(type: "LineRemoved", listener: (ev: Event) => void): void ;
    off(type: "LineRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "LineUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "LineUpdated", listener: (ev: Event) => void): void ;
    on(type: "LineUpdated", listener: (ev: Event) => void): void ;
    off(type: "LineUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhoneLineWatcherEventArgs {
    lineId: String;
    constructor();

  }

  export class PhoneVoicemail {
    messageCount: Number;
    number: String;
    type: PhoneVoicemailType;
    constructor();

    dialVoicemailAsync(callback: (error: Error) => void): void ;

  }

  export class VoipCallCoordinator {
    constructor();

    static getDefault(): VoipCallCoordinator;


    reserveCallResourcesAsync(taskEntryPoint: String, callback: (error: Error, result: VoipPhoneCallResourceReservationStatus) => void): void ;
    reserveCallResourcesAsync(callback: (error: Error, result: VoipPhoneCallResourceReservationStatus) => void): void ;

    requestNewIncomingCall(context: String, contactName: String, contactNumber: String, contactImage: Object, serviceName: String, brandingImage: Object, callDetails: String, ringtone: Object, media: VoipPhoneCallMedia, ringTimeout: Number): VoipPhoneCall;
    requestNewIncomingCall(context: String, contactName: String, contactNumber: String, contactImage: Object, serviceName: String, brandingImage: Object, callDetails: String, ringtone: Object, media: VoipPhoneCallMedia, ringTimeout: Number, contactRemoteId: String): VoipPhoneCall;

    requestNewOutgoingCall(context: String, contactName: String, serviceName: String, media: VoipPhoneCallMedia): VoipPhoneCall;

    notifyMuted(): void;

    notifyUnmuted(): void;

    requestOutgoingUpgradeToVideoCall(callUpgradeGuid: String, context: String, contactName: String, serviceName: String): VoipPhoneCall;

    requestIncomingUpgradeToVideoCall(context: String, contactName: String, contactNumber: String, contactImage: Object, serviceName: String, brandingImage: Object, callDetails: String, ringtone: Object, ringTimeout: Number): VoipPhoneCall;

    terminateCellularCall(callUpgradeGuid: String): void;

    cancelUpgrade(callUpgradeGuid: String): void;

    setupNewAcceptedCall(context: String, contactName: String, contactNumber: String, serviceName: String, media: VoipPhoneCallMedia): VoipPhoneCall;

    requestNewAppInitiatedCall(context: String, contactName: String, contactNumber: String, serviceName: String, media: VoipPhoneCallMedia): VoipPhoneCall;

    addListener(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    on(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    off(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VoipPhoneCall {
    startTime: Date;
    contactName: String;
    callMedia: VoipPhoneCallMedia;
    constructor();

    notifyCallHeld(): void;

    notifyCallActive(): void;

    notifyCallEnded(): void;

    notifyCallReady(): void;

    tryShowAppUI(): void;

    notifyCallAccepted(media: VoipPhoneCallMedia): void;

    addListener(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    on(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    off(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "EndRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "EndRequested", listener: (ev: Event) => void): void ;
    on(type: "EndRequested", listener: (ev: Event) => void): void ;
    off(type: "EndRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "HoldRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "HoldRequested", listener: (ev: Event) => void): void ;
    on(type: "HoldRequested", listener: (ev: Event) => void): void ;
    off(type: "HoldRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "RejectRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "RejectRequested", listener: (ev: Event) => void): void ;
    on(type: "RejectRequested", listener: (ev: Event) => void): void ;
    off(type: "RejectRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ResumeRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ResumeRequested", listener: (ev: Event) => void): void ;
    on(type: "ResumeRequested", listener: (ev: Event) => void): void ;
    off(type: "ResumeRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export const CellularDtmfMode: any;
export const DtmfKey: any;
export const DtmfToneAudioPlayback: any;
export const PhoneAudioRoutingEndpoint: any;
export const PhoneCallAudioDevice: any;
export const PhoneCallDirection: any;
export const PhoneCallHistoryEntryMedia: any;
export const PhoneCallHistoryEntryOtherAppReadAccess: any;
export const PhoneCallHistoryEntryQueryDesiredMedia: any;
export const PhoneCallHistoryEntryRawAddressKind: any;
export const PhoneCallHistorySourceIdKind: any;
export const PhoneCallHistoryStoreAccessType: any;
export const PhoneCallMedia: any;
export const PhoneCallOperationStatus: any;
export const PhoneCallStatus: any;
export const PhoneLineNetworkOperatorDisplayTextLocation: any;
export const PhoneLineOperationStatus: any;
export const PhoneLineTransport: any;
export const PhoneLineWatcherStatus: any;
export const PhoneNetworkState: any;
export const PhoneSimState: any;
export const PhoneVoicemailType: any;
export const TransportDeviceAudioRoutingStatus: any;
export const VoipPhoneCallMedia: any;
export const VoipPhoneCallRejectReason: any;
export const VoipPhoneCallResourceReservationStatus: any;
export const VoipPhoneCallState: any;
export const CallAnswerEventArgs: any;
export const CallRejectEventArgs: any;
export const CallStateChangeEventArgs: any;
export const LockScreenCallEndCallDeferral: any;
export const LockScreenCallEndRequestedEventArgs: any;
export const LockScreenCallUI: any;
export const MuteChangeEventArgs: any;
export const PhoneCall: any;
export const PhoneCallBlocking: any;
export const PhoneCallHistoryEntry: any;
export const PhoneCallHistoryEntryAddress: any;
export const PhoneCallHistoryEntryQueryOptions: any;
export const PhoneCallHistoryEntryReader: any;
export const PhoneCallHistoryManager: any;
export const PhoneCallHistoryManagerForUser: any;
export const PhoneCallHistoryStore: any;
export const PhoneCallInfo: any;
export const PhoneCallManager: any;
export const PhoneCallStore: any;
export const PhoneCallVideoCapabilities: any;
export const PhoneCallVideoCapabilitiesManager: any;
export const PhoneCallsResult: any;
export const PhoneDialOptions: any;
export const PhoneLine: any;
export const PhoneLineCellularDetails: any;
export const PhoneLineConfiguration: any;
export const PhoneLineDialResult: any;
export const PhoneLineTransportDevice: any;
export const PhoneLineWatcher: any;
export const PhoneLineWatcherEventArgs: any;
export const PhoneVoicemail: any;
export const VoipCallCoordinator: any;
export const VoipPhoneCall: any;
export * as background from "./applicationmodel.calls.background.js";
export * as provider from "./applicationmodel.calls.provider.js";
