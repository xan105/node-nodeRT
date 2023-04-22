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

  export enum PhoneVoicemailType {
    none,
    traditional,
    visual,
  }

  export enum PhoneCallMedia {
    audio,
    audioAndVideo,
    audioAndRealTimeText,
  }

  export enum PhoneLineTransport {
    cellular,
    voipApp,
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

  export enum PhoneAudioRoutingEndpoint {
    default,
    bluetooth,
    speakerphone,
  }

  export enum PhoneLineWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopped,
  }

  export enum PhoneLineNetworkOperatorDisplayTextLocation {
    default,
    tile,
    dialer,
    inCallUI,
  }

  export enum CellularDtmfMode {
    continuous,
    burst,
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

  export enum VoipPhoneCallState {
    ended,
    held,
    active,
    incoming,
    outgoing,
  }

  export enum VoipPhoneCallResourceReservationStatus {
    success,
    resourcesNotAvailable,
  }

  export enum PhoneCallHistoryEntryOtherAppReadAccess {
    full,
    systemOnly,
  }

  export enum PhoneCallHistoryEntryMedia {
    audio,
    video,
  }

  export enum PhoneCallHistoryEntryRawAddressKind {
    phoneNumber,
    custom,
  }

  export enum PhoneCallHistoryEntryQueryDesiredMedia {
    none,
    audio,
    video,
    all,
  }

  export enum PhoneCallHistoryStoreAccessType {
    appEntriesReadWrite,
    allEntriesLimitedReadWrite,
    allEntriesReadWrite,
  }

  export enum PhoneCallHistorySourceIdKind {
    cellularPhoneLineId,
    packageFamilyName,
  }

  export class PhoneLine {
    canDial: boolean;
    cellularDetails: PhoneLineCellularDetails;
    displayColor: Object;
    displayName: string;
    id: string;
    lineConfiguration: PhoneLineConfiguration;
    networkName: string;
    networkState: PhoneNetworkState;
    supportsTile: boolean;
    transport: PhoneLineTransport;
    videoCallingCapabilities: PhoneCallVideoCapabilities;
    voicemail: PhoneVoicemail;
    constructor();

    static fromIdAsync(lineId: string, callback: (error: Error, result: PhoneLine) => void): void ;


    isImmediateDialNumberAsync(number: string, callback: (error: Error, result: boolean) => void): void ;

    dial(number: string, displayName: string): void;

    dialWithOptions(options: PhoneDialOptions): void;

    addListener(type: "LineChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LineChanged", listener: (ev: Event) => void): void ;
    on(type: "LineChanged", listener: (ev: Event) => void): void ;
    off(type: "LineChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhoneVoicemail {
    messageCount: number;
    number: string;
    type: PhoneVoicemailType;
    constructor();

    dialVoicemailAsync(callback: (error: Error) => void): void ;

  }

  export class PhoneLineCellularDetails {
    isModemOn: boolean;
    registrationRejectCode: number;
    simSlotIndex: number;
    simState: PhoneSimState;
    constructor();

    getNetworkOperatorDisplayText(location: PhoneLineNetworkOperatorDisplayTextLocation): string;

  }

  export class PhoneCallVideoCapabilities {
    isVideoCallingCapable: boolean;
    constructor();

  }

  export class PhoneLineConfiguration {
    extendedProperties: Object;
    isVideoCallingEnabled: boolean;
    constructor();

  }

  export class PhoneDialOptions {
    number: string;
    media: PhoneCallMedia;
    displayName: string;
    contactPhone: Object;
    contact: Object;
    audioEndpoint: PhoneAudioRoutingEndpoint;
    constructor();

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
    lineId: string;
    constructor();

  }

  export class PhoneCallStore {
    constructor();

    isEmergencyPhoneNumberAsync(number: string, callback: (error: Error, result: boolean) => void): void ;

    getDefaultLineAsync(callback: (error: Error, result: string) => void): void ;

    requestLineWatcher(): PhoneLineWatcher;

  }

  export class PhoneCallManager {
    static isCallActive: boolean;
    static isCallIncoming: boolean;
    constructor();

    static requestStoreAsync(callback: (error: Error, result: PhoneCallStore) => void): void ;


    static showPhoneCallSettingsUI(): void;


    static showPhoneCallUI(phoneNumber: string, displayName: string): void;


    addListener(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    on(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    off(type: "CallStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PhoneCallVideoCapabilitiesManager {
    constructor();

    static getCapabilitiesAsync(phoneNumber: string, callback: (error: Error, result: PhoneCallVideoCapabilities) => void): void ;


  }

  export class PhoneCallBlocking {
    static blockUnknownNumbers: boolean;
    static blockPrivateNumbers: boolean;
    constructor();

    static setCallBlockingListAsync(phoneNumberList: Object, callback: (error: Error, result: boolean) => void): void ;


  }

  export class CallStateChangeEventArgs {
    state: VoipPhoneCallState;
    constructor();

  }

  export class CallAnswerEventArgs {
    acceptedMedia: VoipPhoneCallMedia;
    constructor();

  }

  export class CallRejectEventArgs {
    rejectReason: VoipPhoneCallRejectReason;
    constructor();

  }

  export class VoipPhoneCall {
    startTime: Date;
    contactName: string;
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

  export class MuteChangeEventArgs {
    muted: boolean;
    constructor();

  }

  export class VoipCallCoordinator {
    constructor();

    static getDefault(): VoipCallCoordinator;


    reserveCallResourcesAsync(taskEntryPoint: string, callback: (error: Error, result: VoipPhoneCallResourceReservationStatus) => void): void ;

    requestNewIncomingCall(context: string, contactName: string, contactNumber: string, contactImage: Object, serviceName: string, brandingImage: Object, callDetails: string, ringtone: Object, media: VoipPhoneCallMedia, ringTimeout: number): VoipPhoneCall;
    requestNewIncomingCall(context: string, contactName: string, contactNumber: string, contactImage: Object, serviceName: string, brandingImage: Object, callDetails: string, ringtone: Object, media: VoipPhoneCallMedia, ringTimeout: number, contactRemoteId: string): VoipPhoneCall;

    requestNewOutgoingCall(context: string, contactName: string, serviceName: string, media: VoipPhoneCallMedia): VoipPhoneCall;

    notifyMuted(): void;

    notifyUnmuted(): void;

    requestOutgoingUpgradeToVideoCall(callUpgradeGuid: string, context: string, contactName: string, serviceName: string): VoipPhoneCall;

    requestIncomingUpgradeToVideoCall(context: string, contactName: string, contactNumber: string, contactImage: Object, serviceName: string, brandingImage: Object, callDetails: string, ringtone: Object, ringTimeout: number): VoipPhoneCall;

    terminateCellularCall(callUpgradeGuid: string): void;

    cancelUpgrade(callUpgradeGuid: string): void;

    setupNewAcceptedCall(context: string, contactName: string, contactNumber: string, serviceName: string, media: VoipPhoneCallMedia): VoipPhoneCall;

    requestNewAppInitiatedCall(context: string, contactName: string, contactNumber: string, serviceName: string, media: VoipPhoneCallMedia): VoipPhoneCall;

    addListener(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    on(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    off(type: "MuteStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LockScreenCallEndCallDeferral {
    constructor();

    complete(): void;

  }

  export class LockScreenCallUI {
    callTitle: string;
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

  export class LockScreenCallEndRequestedEventArgs {
    deadline: Date;
    constructor();

    getDeferral(): LockScreenCallEndCallDeferral;

  }

  export class PhoneCallHistoryEntryAddress {
    rawAddressKind: PhoneCallHistoryEntryRawAddressKind;
    rawAddress: string;
    displayName: string;
    contactId: string;
    constructor();
    constructor(rawAddress: string, rawAddressKind: PhoneCallHistoryEntryRawAddressKind);

  }

  export class PhoneCallHistoryEntry {
    media: PhoneCallHistoryEntryMedia;
    isMissed: boolean;
    isIncoming: boolean;
    isCallerIdBlocked: boolean;
    isSeen: boolean;
    duration: number;
    isEmergency: boolean;
    isSuppressed: boolean;
    startTime: Date;
    sourceIdKind: PhoneCallHistorySourceIdKind;
    address: PhoneCallHistoryEntryAddress;
    sourceId: string;
    remoteId: string;
    otherAppReadAccess: PhoneCallHistoryEntryOtherAppReadAccess;
    isRinging: boolean;
    isVoicemail: boolean;
    id: string;
    sourceDisplayName: string;
    constructor();

  }

  export class PhoneCallHistoryEntryReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class PhoneCallHistoryEntryQueryOptions {
    desiredMedia: PhoneCallHistoryEntryQueryDesiredMedia;
    sourceIds: Object;
    constructor();

  }

  export class PhoneCallHistoryStore {
    constructor();

    getEntryAsync(callHistoryEntryId: string, callback: (error: Error, result: PhoneCallHistoryEntry) => void): void ;

    saveEntryAsync(callHistoryEntry: PhoneCallHistoryEntry, callback: (error: Error) => void): void ;

    deleteEntryAsync(callHistoryEntry: PhoneCallHistoryEntry, callback: (error: Error) => void): void ;

    deleteEntriesAsync(callHistoryEntries: Object, callback: (error: Error) => void): void ;

    markEntryAsSeenAsync(callHistoryEntry: PhoneCallHistoryEntry, callback: (error: Error) => void): void ;

    markEntriesAsSeenAsync(callHistoryEntries: Object, callback: (error: Error) => void): void ;

    getUnseenCountAsync(callback: (error: Error, result: number) => void): void ;

    markAllAsSeenAsync(callback: (error: Error) => void): void ;

    getSourcesUnseenCountAsync(sourceIds: Object, callback: (error: Error, result: number) => void): void ;

    markSourcesAsSeenAsync(sourceIds: Object, callback: (error: Error) => void): void ;

    getEntryReader(): PhoneCallHistoryEntryReader;
    getEntryReader(queryOptions: PhoneCallHistoryEntryQueryOptions): PhoneCallHistoryEntryReader;

  }

  export class PhoneCallHistoryManagerForUser {
    user: Object;
    constructor();

    requestStoreAsync(accessType: PhoneCallHistoryStoreAccessType, callback: (error: Error, result: PhoneCallHistoryStore) => void): void ;

  }

  export class PhoneCallHistoryManager {
    constructor();

    static requestStoreAsync(accessType: PhoneCallHistoryStoreAccessType, callback: (error: Error, result: PhoneCallHistoryStore) => void): void ;


    static getForUser(user: Object): PhoneCallHistoryManagerForUser;


  }

export * as background from "./applicationmodel.calls.background.js";
export * as provider from "./applicationmodel.calls.provider.js";