  export class LegacySmsApiContract {
    constructor();
  }

  export class SmsEncodedLength {
    segmentCount: Number;
    characterCountLastSegment: Number;
    charactersPerSegment: Number;
    byteCountLastSegment: Number;
    bytesPerSegment: Number;
    constructor();
  }

  export enum CellularClass {
    none,
    gsm,
    cdma,
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

  export enum SmsDataFormat {
    unknown,
    cdmaSubmit,
    gsmSubmit,
    cdmaDeliver,
    gsmDeliver,
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

  export enum SmsFilterActionType {
    acceptImmediately,
    drop,
    peek,
    accept,
  }

  export enum SmsGeographicalScope {
    none,
    cellWithImmediateDisplay,
    locationArea,
    plmn,
    cell,
  }

  export enum SmsMessageClass {
    none,
    class0,
    class1,
    class2,
    class3,
  }

  export enum SmsMessageFilter {
    all,
    unread,
    read,
    sent,
    draft,
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

  export class DeleteSmsMessageOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class DeleteSmsMessagesOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class GetSmsDeviceOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): SmsDevice;

    cancel(): void;

    close(): void;

  }

  export class GetSmsMessageOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): ISmsMessage;

    cancel(): void;

    close(): void;

  }

  export class GetSmsMessagesOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    progress: Object;
    completed: Object;
    constructor();

    getResults(): Object;

    cancel(): void;

    close(): void;

  }

  export class ISmsBinaryMessage {
    format: SmsDataFormat;
    constructor();

    getData(): Array<Number>;

    setData(value: Array<Number>): void;

  }

  export class ISmsDevice {
    accountPhoneNumber: String;
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

  export class ISmsMessage {
    id: Number;
    messageClass: SmsMessageClass;
    constructor();

  }

  export class ISmsMessageBase {
    cellularClass: CellularClass;
    deviceId: String;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: String;
    constructor();

  }

  export class ISmsTextMessage {
    body: String;
    encoding: SmsEncoding;
    from: String;
    partCount: Number;
    partNumber: Number;
    partReferenceId: Number;
    timestamp: Date;
    to: String;
    constructor();

    toBinaryMessages(format: SmsDataFormat): Object;

  }

  export class SendSmsMessageOperation {
    errorCode: Number;
    id: Number;
    status: Number;
    completed: Object;
    constructor();

    getResults(): void;

    cancel(): void;

    close(): void;

  }

  export class SmsAppMessage {
    protocolId: Number;
    portNumber: Number;
    isDeliveryNotificationEnabled: Boolean;
    retryAttemptCount: Number;
    encoding: SmsEncoding;
    body: String;
    callbackNumber: String;
    binaryBody: Object;
    to: String;
    teleserviceId: Number;
    from: String;
    timestamp: Date;
    cellularClass: CellularClass;
    deviceId: String;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: String;
    constructor();

  }

  export class SmsBinaryMessage {
    format: SmsDataFormat;
    id: Number;
    messageClass: SmsMessageClass;
    constructor();

    getData(): Array<Number>;

    setData(value: Array<Number>): void;

  }

  export class SmsBroadcastMessage {
    body: String;
    broadcastType: SmsBroadcastType;
    channel: Number;
    geographicalScope: SmsGeographicalScope;
    isEmergencyAlert: Boolean;
    isUserPopupRequested: Boolean;
    messageCode: Number;
    timestamp: Date;
    to: String;
    updateNumber: Number;
    cellularClass: CellularClass;
    deviceId: String;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: String;
    constructor();

  }

  export class SmsDevice {
    accountPhoneNumber: String;
    cellularClass: CellularClass;
    deviceStatus: SmsDeviceStatus;
    messageStore: SmsDeviceMessageStore;
    constructor();

    static fromNetworkAccountIdAsync(networkAccountId: String, callback: (error: Error, result: SmsDevice) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: SmsDevice) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: SmsDevice) => void): void ;


    static getDeviceSelector(): String;


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

  export class SmsDevice2 {
    smscAddress: String;
    accountPhoneNumber: String;
    cellularClass: CellularClass;
    deviceId: String;
    deviceStatus: SmsDeviceStatus;
    parentDeviceId: String;
    constructor();

    static getDeviceSelector(): String;


    static fromId(deviceId: String): SmsDevice2;


    static getDefault(): SmsDevice2;


    static fromParentId(parentDeviceId: String): SmsDevice2;


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

  export class SmsDeviceMessageStore {
    maxMessages: Number;
    constructor();

    deleteMessageAsync(messageId: Number, callback: (error: Error) => void): void ;

    deleteMessagesAsync(messageFilter: SmsMessageFilter, callback: (error: Error) => void): void ;

    getMessageAsync(messageId: Number, callback: (error: Error, result: ISmsMessage) => void): void ;

    getMessagesAsync(messageFilter: SmsMessageFilter, callback: (error: Error, result: Object) => void): void ;

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

  export class SmsMessageReceivedEventArgs {
    binaryMessage: SmsBinaryMessage;
    textMessage: SmsTextMessage;
    constructor();

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

  export class SmsMessageRegistration {
    static allRegistrations: Object;
    id: String;
    constructor();

    static register(id: String, filterRules: SmsFilterRules): SmsMessageRegistration;


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

  export class SmsReceivedEventDetails {
    deviceId: String;
    messageIndex: Number;
    binaryMessage: SmsBinaryMessage;
    messageClass: SmsMessageClass;
    constructor();

  }

  export class SmsSendMessageResult {
    cellularClass: CellularClass;
    isErrorTransient: Boolean;
    isSuccessful: Boolean;
    messageReferenceNumbers: Object;
    modemErrorCode: SmsModemErrorCode;
    networkCauseCode: Number;
    transportFailureCause: Number;
    constructor();

  }

  export class SmsStatusMessage {
    cellularClass: CellularClass;
    deviceId: String;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: String;
    status: Number;
    body: String;
    dischargeTime: Date;
    from: String;
    messageReferenceNumber: Number;
    serviceCenterTimestamp: Date;
    to: String;
    constructor();

  }

  export class SmsTextMessage {
    id: Number;
    messageClass: SmsMessageClass;
    to: String;
    from: String;
    encoding: SmsEncoding;
    body: String;
    partCount: Number;
    partNumber: Number;
    partReferenceId: Number;
    timestamp: Date;
    constructor();

    static fromBinaryMessage(binaryMessage: SmsBinaryMessage): SmsTextMessage;


    static fromBinaryData(format: SmsDataFormat, value: Array<Number>): SmsTextMessage;


    toBinaryMessages(format: SmsDataFormat): Object;

  }

  export class SmsTextMessage2 {
    messageType: SmsMessageType;
    deviceId: String;
    cellularClass: CellularClass;
    messageClass: SmsMessageClass;
    simIccId: String;
    retryAttemptCount: Number;
    to: String;
    isDeliveryNotificationEnabled: Boolean;
    encoding: SmsEncoding;
    callbackNumber: String;
    body: String;
    protocolId: Number;
    from: String;
    timestamp: Date;
    teleserviceId: Number;
    constructor();

  }

  export class SmsVoicemailMessage {
    cellularClass: CellularClass;
    deviceId: String;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: String;
    body: String;
    messageCount: Number;
    timestamp: Date;
    to: String;
    constructor();

  }

  export class SmsWapMessage {
    cellularClass: CellularClass;
    deviceId: String;
    messageClass: SmsMessageClass;
    messageType: SmsMessageType;
    simIccId: String;
    timestamp: Date;
    applicationId: String;
    binaryBody: Object;
    contentType: String;
    from: String;
    headers: Object;
    to: String;
    constructor();

  }

