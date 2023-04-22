  export class LegacySmsApiContract {
    constructor();
  }

  export class SmsEncodedLength {
    segmentCount: number;
    characterCountLastSegment: number;
    charactersPerSegment: number;
    byteCountLastSegment: number;
    bytesPerSegment: number;
    constructor();
  }

  export enum SmsMessageFilter {
    all,
    unread,
    read,
    sent,
    draft,
  }

  export enum SmsMessageClass {
    none,
    class0,
    class1,
    class2,
    class3,
  }

  export enum SmsMessageType {
    binary,
    text,
    wap,
    app,
    broadcast,
    voicemail,
    status,
  }

  export enum CellularClass {
    none,
    gsm,
    cdma,
  }

  export enum SmsDataFormat {
    unknown,
    cdmaSubmit,
    gsmSubmit,
    cdmaDeliver,
    gsmDeliver,
  }

  export enum SmsEncoding {
    unknown,
    optimal,
    sevenBitAscii,
    unicode,
    gsmSevenBit,
    eightBit,
    latin,
    korean,
    iA5,
    shiftJis,
    latinHebrew,
  }

  export enum SmsGeographicalScope {
    none,
    cellWithImmediateDisplay,
    locationArea,
    plmn,
    cell,
  }

  export enum SmsBroadcastType {
    other,
    cmasPresidential,
    cmasExtreme,
    cmasSevere,
    cmasAmber,
    cmasTest,
    eUAlert1,
    eUAlert2,
    eUAlert3,
    eUAlertAmber,
    eUAlertInfo,
    etwsEarthquake,
    etwsTsunami,
    etwsTsunamiAndEarthquake,
    latAlertLocal,
  }

  export enum SmsDeviceStatus {
    off,
    ready,
    simNotInserted,
    badSim,
    deviceFailure,
    subscriptionNotActivated,
    deviceLocked,
    deviceBlocked,
  }

  export enum SmsModemErrorCode {
    other,
    messagingNetworkError,
    smsOperationNotSupportedByDevice,
    smsServiceNotSupportedByNetwork,
    deviceFailure,
    messageNotEncodedProperly,
    messageTooLarge,
    deviceNotReady,
    networkNotReady,
    invalidSmscAddress,
    networkFailure,
    fixedDialingNumberRestricted,
  }

  export enum SmsFilterActionType {
    acceptImmediately,
    drop,
    peek,
    accept,
  }

  export class ISmsMessage {
    id: number;
    messageClass: SmsMessageClass;
    constructor();

  }

  export class ISmsBinaryMessage {
    format: SmsDataFormat;
    constructor();

    getData(): Array<number>;

    setData(value: Array<number>): void;

  }

  export class SmsBinaryMessage {
    format: SmsDataFormat;
    id: number;
    messageClass: SmsMessageClass;
    constructor();

    getData(): Array<number>;

    setData(value: Array<number>): void;

  }

  export class ISmsTextMessage {
    body: string;
    encoding: SmsEncoding;
    from: string;
    partCount: number;
    partNumber: number;
    partReferenceId: number;
    timestamp: Date;
    to: string;
    constructor();

    toBinaryMessages(format: SmsDataFormat): Object;

  }

  export class SmsTextMessage {
    id: number;
    messageClass: SmsMessageClass;
    to: string;
    from: string;
    encoding: SmsEncoding;
    body: string;
    partCount: number;
    partNumber: number;
    partReferenceId: number;
    timestamp: Date;
    constructor();

    static fromBinaryMessage(binaryMessage: SmsBinaryMessage): SmsTextMessage;


    static fromBinaryData(format: SmsDataFormat, value: Array<number>): SmsTextMessage;


    toBinaryMessages(format: SmsDataFormat): Object;

  }

  export class DeleteSmsMessageOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class DeleteSmsMessagesOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class GetSmsMessageOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): ISmsMessage;

    cancel(): void;

    close(): void;

  }

  export class GetSmsMessagesOperation {
    errorCode: number;
    id: number;
    status: number;
    progress: Object;
    completed: Object;
    constructor();

    getResults(): Object;

    cancel(): void;

    close(): void;

  }

  export class SmsDeviceMessageStore {
    maxMessages: number;
    constructor();

    deleteMessageAsync(messageId: number, callback: (error: Error) => void): void ;

    deleteMessagesAsync(messageFilter: SmsMessageFilter, callback: (error: Error) => void): void ;

    getMessageAsync(messageId: number, callback: (error: Error, result: ISmsMessage) => void): void ;

    getMessagesAsync(messageFilter: SmsMessageFilter, callback: (error: Error, result: Object) => void): void ;

  }

  export class SendSmsMessageOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class SmsMessageReceivedEventArgs {
    binaryMessage: SmsBinaryMessage;
    textMessage: SmsTextMessage;
    constructor();

  }

  export class SmsDevice {
    accountPhoneNumber: string;
    cellularClass: CellularClass;
    deviceStatus: SmsDeviceStatus;
    messageStore: SmsDeviceMessageStore;
    constructor();

    static fromNetworkAccountIdAsync(networkAccountId: string, callback: (error: Error, result: SmsDevice) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: SmsDevice) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: SmsDevice) => void): void ;


    static getDeviceSelector(): string;


    sendMessageAsync(message: ISmsMessage, callback: (error: Error) => void): void ;

    calculateLength(message: SmsTextMessage): SmsEncodedLength;

    addListener(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    on(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    off(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GetSmsDeviceOperation {
    errorCode: number;
    id: number;
    status: number;
    completed: Object;
    constructor();

    getResults(): SmsDevice;

    cancel(): void;

    close(): void;

  }

  export class ISmsDevice {
    accountPhoneNumber: string;
    cellularClass: CellularClass;
    deviceStatus: SmsDeviceStatus;
    messageStore: SmsDeviceMessageStore;
    constructor();

    sendMessageAsync(message: ISmsMessage, callback: (error: Error) => void): void ;

    calculateLength(message: SmsTextMessage): SmsEncodedLength;

    addListener(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "SmsDeviceStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    on(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    off(type: "SmsMessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SmsReceivedEventDetails {
    deviceId: string;
    messageIndex: number;
    binaryMessage: SmsBinaryMessage;
    messageClass: SmsMessageClass;
    constructor();

  }

  export class ISmsMessageBase {
    cellularClass: CellularClass;
    deviceId: string;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: string;
    constructor();

  }

  export class SmsTextMessage2 {
    messageType: SmsMessageType;
    deviceId: string;
    cellularClass: CellularClass;
    messageClass: SmsMessageClass;
    simIccId: string;
    retryAttemptCount: number;
    to: string;
    isDeliveryNotificationEnabled: boolean;
    encoding: SmsEncoding;
    callbackNumber: string;
    body: string;
    protocolId: number;
    from: string;
    timestamp: Date;
    teleserviceId: number;
    constructor();

  }

  export class SmsWapMessage {
    cellularClass: CellularClass;
    deviceId: string;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: string;
    timestamp: Date;
    applicationId: string;
    binaryBody: Object;
    contentType: string;
    from: string;
    headers: Object;
    to: string;
    constructor();

  }

  export class SmsAppMessage {
    protocolId: number;
    portNumber: number;
    isDeliveryNotificationEnabled: boolean;
    retryAttemptCount: number;
    encoding: SmsEncoding;
    body: string;
    callbackNumber: string;
    binaryBody: Object;
    to: string;
    teleserviceId: number;
    from: string;
    timestamp: Date;
    cellularClass: CellularClass;
    deviceId: string;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: string;
    constructor();

  }

  export class SmsBroadcastMessage {
    body: string;
    broadcastType: SmsBroadcastType;
    channel: number;
    geographicalScope: SmsGeographicalScope;
    isEmergencyAlert: boolean;
    isUserPopupRequested: boolean;
    messageCode: number;
    timestamp: Date;
    to: string;
    updateNumber: number;
    cellularClass: CellularClass;
    deviceId: string;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: string;
    constructor();

  }

  export class SmsVoicemailMessage {
    cellularClass: CellularClass;
    deviceId: string;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: string;
    body: string;
    messageCount: number;
    timestamp: Date;
    to: string;
    constructor();

  }

  export class SmsStatusMessage {
    cellularClass: CellularClass;
    deviceId: string;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: string;
    status: number;
    body: string;
    dischargeTime: Date;
    from: string;
    messageReferenceNumber: number;
    serviceCenterTimestamp: Date;
    to: string;
    constructor();

  }

  export class SmsSendMessageResult {
    cellularClass: CellularClass;
    isErrorTransient: boolean;
    isSuccessful: boolean;
    messageReferenceNumbers: Object;
    modemErrorCode: SmsModemErrorCode;
    networkCauseCode: number;
    transportFailureCause: number;
    constructor();

  }

  export class SmsDevice2 {
    smscAddress: string;
    accountPhoneNumber: string;
    cellularClass: CellularClass;
    deviceId: string;
    deviceStatus: SmsDeviceStatus;
    parentDeviceId: string;
    constructor();

    static getDeviceSelector(): string;


    static fromId(deviceId: string): SmsDevice2;


    static getDefault(): SmsDevice2;


    static fromParentId(parentDeviceId: string): SmsDevice2;


    sendMessageAndGetResultAsync(message: ISmsMessageBase, callback: (error: Error, result: SmsSendMessageResult) => void): void ;

    calculateLength(message: ISmsMessageBase): SmsEncodedLength;

    addListener(type: "DeviceStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DeviceStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "DeviceStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "DeviceStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SmsMessageReceivedTriggerDetails {
    appMessage: SmsAppMessage;
    broadcastMessage: SmsBroadcastMessage;
    messageType: SmsMessageType;
    statusMessage: SmsStatusMessage;
    textMessage: SmsTextMessage2;
    voicemailMessage: SmsVoicemailMessage;
    wapMessage: SmsWapMessage;
    constructor();

    drop(): void;

    accept(): void;

  }

  export class SmsFilterRule {
    cellularClass: CellularClass;
    broadcastChannels: Object;
    broadcastTypes: Object;
    deviceIds: Object;
    imsiPrefixes: Object;
    messageType: SmsMessageType;
    portNumbers: Object;
    protocolIds: Object;
    senderNumbers: Object;
    teleserviceIds: Object;
    textMessagePrefixes: Object;
    wapApplicationIds: Object;
    wapContentTypes: Object;
    constructor();
    constructor(messageType: SmsMessageType);

  }

  export class SmsFilterRules {
    actionType: SmsFilterActionType;
    rules: Object;
    constructor();
    constructor(actionType: SmsFilterActionType);

  }

  export class SmsMessageRegistration {
    static allRegistrations: Object;
    id: string;
    constructor();

    static register(id: string, filterRules: SmsFilterRules): SmsMessageRegistration;


    unregister(): void;

    addListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    on(type: "MessageReceived", listener: (ev: Event) => void): void ;
    off(type: "MessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

