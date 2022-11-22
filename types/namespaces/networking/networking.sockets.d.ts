  export class RoundTripTimeStatistics {
    variance: Number;
    max: Number;
    min: Number;
    sum: Number;
    constructor();
  }

  export class BandwidthStatistics {
    outboundBitsPerSecond: Number;
    inboundBitsPerSecond: Number;
    outboundBitsPerSecondInstability: Number;
    inboundBitsPerSecondInstability: Number;
    outboundBandwidthPeaked: Boolean;
    inboundBandwidthPeaked: Boolean;
    constructor();
  }

  export class ControlChannelTriggerContract {
    constructor();
  }

  export enum ControlChannelTriggerStatus {
    hardwareSlotRequested,
    softwareSlotAllocated,
    hardwareSlotAllocated,
    policyError,
    systemError,
    transportDisconnected,
    serviceUnavailable,
  }

  export enum SocketMessageType {
    binary,
    utf8,
  }

  export enum SocketProtectionLevel {
    plainSocket,
    ssl,
    sslAllowNullEncryption,
    bluetoothEncryptionAllowNullAuthentication,
    bluetoothEncryptionWithAuthentication,
    ssl3AllowWeakEncryption,
    tls10,
    tls11,
    tls12,
    unspecified,
  }

  export enum SocketQualityOfService {
    normal,
    lowLatency,
  }

  export enum SocketErrorStatus {
    unknown,
    operationAborted,
    httpInvalidServerResponse,
    connectionTimedOut,
    addressFamilyNotSupported,
    socketTypeNotSupported,
    hostNotFound,
    noDataRecordOfRequestedType,
    nonAuthoritativeHostNotFound,
    classTypeNotFound,
    addressAlreadyInUse,
    cannotAssignRequestedAddress,
    connectionRefused,
    networkIsUnreachable,
    unreachableHost,
    networkIsDown,
    networkDroppedConnectionOnReset,
    softwareCausedConnectionAbort,
    connectionResetByPeer,
    hostIsDown,
    noAddressesFound,
    tooManyOpenFiles,
    messageTooLong,
    certificateExpired,
    certificateUntrustedRoot,
    certificateCommonNameIsIncorrect,
    certificateWrongUsage,
    certificateRevoked,
    certificateNoRevocationCheck,
    certificateRevocationServerOffline,
    certificateIsInvalid,
  }

  export enum SocketSslErrorSeverity {
    none,
    ignorable,
    fatal,
  }

  export enum SocketActivityKind {
    none,
    streamSocketListener,
    datagramSocket,
    streamSocket,
  }

  export enum SocketActivityTriggerReason {
    none,
    socketActivity,
    connectionAccepted,
    keepAliveTimerExpired,
    socketClosed,
  }

  export enum SocketActivityConnectedStandbyAction {
    doNotWake,
    wake,
  }

  export enum MessageWebSocketReceiveMode {
    fullMessage,
    partialMessage,
  }

  export enum ControlChannelTriggerResourceType {
    requestSoftwareSlot,
    requestHardwareSlot,
  }

  export enum ControlChannelTriggerResetReason {
    fastUserSwitched,
    lowPowerExit,
    quietHoursExit,
    applicationRestart,
  }

  export class SocketActivityContext {
    data: Object;
    constructor();
    constructor(data: Object);

  }

  export class DatagramSocket {
    control: DatagramSocketControl;
    information: DatagramSocketInformation;
    outputStream: Object;
    constructor();

    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: String, callback: (error: Error, result: Object) => void): void ;
    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: String, sortOptions: Number, callback: (error: Error, result: Object) => void): void ;


    connectAsync(remoteHostName: Object, remoteServiceName: String, callback: (error: Error) => void): void ;
    connectAsync(endpointPair: Object, callback: (error: Error) => void): void ;

    bindServiceNameAsync(localServiceName: String, callback: (error: Error) => void): void ;
    bindServiceNameAsync(localServiceName: String, adapter: Object, callback: (error: Error) => void): void ;

    bindEndpointAsync(localHostName: Object, localServiceName: String, callback: (error: Error) => void): void ;

    getOutputStreamAsync(remoteHostName: Object, remoteServiceName: String, callback: (error: Error, result: Object) => void): void ;
    getOutputStreamAsync(endpointPair: Object, callback: (error: Error, result: Object) => void): void ;

    cancelIOAsync(callback: (error: Error) => void): void ;

    joinMulticastGroup(host: Object): void;

    close(): void;
    enableTransferOwnership(taskId: String): void;
    enableTransferOwnership(taskId: String, connectedStandbyAction: SocketActivityConnectedStandbyAction): void;

    transferOwnership(socketId: String): void;
    transferOwnership(socketId: String, data: SocketActivityContext): void;
    transferOwnership(socketId: String, data: SocketActivityContext, keepAliveTime: Number): void;

    addListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    on(type: "MessageReceived", listener: (ev: Event) => void): void ;
    off(type: "MessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StreamSocket {
    control: StreamSocketControl;
    information: StreamSocketInformation;
    inputStream: Object;
    outputStream: Object;
    constructor();

    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: String, callback: (error: Error, result: Object) => void): void ;
    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: String, sortOptions: Number, callback: (error: Error, result: Object) => void): void ;


    connectAsync(endpointPair: Object, callback: (error: Error) => void): void ;
    connectAsync(remoteHostName: Object, remoteServiceName: String, callback: (error: Error) => void): void ;
    connectAsync(endpointPair: Object, protectionLevel: SocketProtectionLevel, callback: (error: Error) => void): void ;
    connectAsync(remoteHostName: Object, remoteServiceName: String, protectionLevel: SocketProtectionLevel, callback: (error: Error) => void): void ;
    connectAsync(remoteHostName: Object, remoteServiceName: String, protectionLevel: SocketProtectionLevel, adapter: Object, callback: (error: Error) => void): void ;

    upgradeToSslAsync(protectionLevel: SocketProtectionLevel, validationHostName: Object, callback: (error: Error) => void): void ;

    cancelIOAsync(callback: (error: Error) => void): void ;

    close(): void;
    enableTransferOwnership(taskId: String): void;
    enableTransferOwnership(taskId: String, connectedStandbyAction: SocketActivityConnectedStandbyAction): void;

    transferOwnership(socketId: String): void;
    transferOwnership(socketId: String, data: SocketActivityContext): void;
    transferOwnership(socketId: String, data: SocketActivityContext, keepAliveTime: Number): void;

  }

  export class StreamSocketListener {
    control: StreamSocketListenerControl;
    information: StreamSocketListenerInformation;
    constructor();

    bindServiceNameAsync(localServiceName: String, callback: (error: Error) => void): void ;
    bindServiceNameAsync(localServiceName: String, protectionLevel: SocketProtectionLevel, callback: (error: Error) => void): void ;
    bindServiceNameAsync(localServiceName: String, protectionLevel: SocketProtectionLevel, adapter: Object, callback: (error: Error) => void): void ;

    bindEndpointAsync(localHostName: Object, localServiceName: String, callback: (error: Error) => void): void ;

    cancelIOAsync(callback: (error: Error) => void): void ;

    close(): void;
    enableTransferOwnership(taskId: String): void;
    enableTransferOwnership(taskId: String, connectedStandbyAction: SocketActivityConnectedStandbyAction): void;

    transferOwnership(socketId: String): void;
    transferOwnership(socketId: String, data: SocketActivityContext): void;

    addListener(type: "ConnectionReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionReceived", listener: (ev: Event) => void): void ;
    on(type: "ConnectionReceived", listener: (ev: Event) => void): void ;
    off(type: "ConnectionReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SocketActivityInformation {
    static allSockets: Object;
    context: SocketActivityContext;
    datagramSocket: DatagramSocket;
    id: String;
    socketKind: SocketActivityKind;
    streamSocket: StreamSocket;
    streamSocketListener: StreamSocketListener;
    taskId: String;
    constructor();

  }

  export class DatagramSocketControl {
    qualityOfService: SocketQualityOfService;
    outboundUnicastHopLimit: Number;
    inboundBufferSizeInBytes: Number;
    dontFragment: Boolean;
    multicastOnly: Boolean;
    constructor();

  }

  export class DatagramSocketInformation {
    localAddress: Object;
    localPort: String;
    remoteAddress: Object;
    remotePort: String;
    constructor();

  }

  export class DatagramSocketMessageReceivedEventArgs {
    localAddress: Object;
    remoteAddress: Object;
    remotePort: String;
    constructor();

    getDataReader(): Object;

    getDataStream(): Object;

  }

  export class StreamSocketControl {
    qualityOfService: SocketQualityOfService;
    outboundUnicastHopLimit: Number;
    outboundBufferSizeInBytes: Number;
    noDelay: Boolean;
    keepAlive: Boolean;
    ignorableServerCertificateErrors: Object;
    serializeConnectionAttempts: Boolean;
    clientCertificate: Object;
    minProtectionLevel: SocketProtectionLevel;
    constructor();

  }

  export class StreamSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    localPort: String;
    protectionLevel: SocketProtectionLevel;
    remoteAddress: Object;
    remoteHostName: Object;
    remotePort: String;
    remoteServiceName: String;
    roundTripTimeStatistics: RoundTripTimeStatistics;
    sessionKey: Object;
    serverCertificate: Object;
    serverCertificateErrorSeverity: SocketSslErrorSeverity;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

  }

  export class StreamSocketListenerControl {
    qualityOfService: SocketQualityOfService;
    outboundUnicastHopLimit: Number;
    outboundBufferSizeInBytes: Number;
    noDelay: Boolean;
    keepAlive: Boolean;
    constructor();

  }

  export class StreamSocketListenerInformation {
    localPort: String;
    constructor();

  }

  export class StreamSocketListenerConnectionReceivedEventArgs {
    socket: StreamSocket;
    constructor();

  }

  export class IWebSocketControl {
    outboundBufferSizeInBytes: Number;
    proxyCredential: Object;
    serverCredential: Object;
    supportedProtocols: Object;
    constructor();

  }

  export class IWebSocketControl2 {
    ignorableServerCertificateErrors: Object;
    constructor();

  }

  export class IWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: String;
    constructor();

  }

  export class IWebSocketInformation2 {
    serverCertificate: Object;
    serverCertificateErrorSeverity: SocketSslErrorSeverity;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

  }

  export class IWebSocket {
    outputStream: Object;
    constructor();

    connectAsync(uri: Object, callback: (error: Error) => void): void ;

    setRequestHeader(headerName: String, headerValue: String): void;

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebSocketClosedEventArgs {
    code: Number;
    reason: String;
    constructor();

  }

  export class MessageWebSocketControl {
    messageType: SocketMessageType;
    maxMessageSize: Number;
    receiveMode: MessageWebSocketReceiveMode;
    desiredUnsolicitedPongInterval: Number;
    clientCertificate: Object;
    actualUnsolicitedPongInterval: Number;
    serverCredential: Object;
    proxyCredential: Object;
    outboundBufferSizeInBytes: Number;
    supportedProtocols: Object;
    ignorableServerCertificateErrors: Object;
    constructor();

  }

  export class MessageWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: String;
    serverCertificate: Object;
    serverCertificateErrorSeverity: SocketSslErrorSeverity;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

  }

  export class MessageWebSocket {
    control: MessageWebSocketControl;
    information: MessageWebSocketInformation;
    outputStream: Object;
    constructor();

    connectAsync(uri: Object, callback: (error: Error) => void): void ;

    sendNonfinalFrameAsync(data: Object, callback: (error: Error, result: Number) => void): void ;

    sendFinalFrameAsync(data: Object, callback: (error: Error, result: Number) => void): void ;

    setRequestHeader(headerName: String, headerValue: String): void;

    close(): void;
    addListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    on(type: "MessageReceived", listener: (ev: Event) => void): void ;
    off(type: "MessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    on(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    off(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MessageWebSocketMessageReceivedEventArgs {
    messageType: SocketMessageType;
    isMessageComplete: Boolean;
    constructor();

    getDataReader(): Object;

    getDataStream(): Object;

  }

  export class WebSocketServerCustomValidationRequestedEventArgs {
    serverCertificate: Object;
    serverCertificateErrorSeverity: SocketSslErrorSeverity;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

    reject(): void;

    getDeferral(): Object;

  }

  export class StreamWebSocketControl {
    noDelay: Boolean;
    desiredUnsolicitedPongInterval: Number;
    clientCertificate: Object;
    actualUnsolicitedPongInterval: Number;
    serverCredential: Object;
    proxyCredential: Object;
    outboundBufferSizeInBytes: Number;
    supportedProtocols: Object;
    ignorableServerCertificateErrors: Object;
    constructor();

  }

  export class StreamWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: String;
    serverCertificate: Object;
    serverCertificateErrorSeverity: SocketSslErrorSeverity;
    serverCertificateErrors: Object;
    serverIntermediateCertificates: Object;
    constructor();

  }

  export class StreamWebSocket {
    control: StreamWebSocketControl;
    information: StreamWebSocketInformation;
    inputStream: Object;
    outputStream: Object;
    constructor();

    connectAsync(uri: Object, callback: (error: Error) => void): void ;

    setRequestHeader(headerName: String, headerValue: String): void;

    close(): void;
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    on(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    off(type: "ServerCustomValidationRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ServerMessageWebSocket {
    control: ServerMessageWebSocketControl;
    information: ServerMessageWebSocketInformation;
    outputStream: Object;
    constructor();

    close(): void;
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "MessageReceived", listener: (ev: Event) => void): void ;
    on(type: "MessageReceived", listener: (ev: Event) => void): void ;
    off(type: "MessageReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ServerMessageWebSocketControl {
    messageType: SocketMessageType;
    constructor();

  }

  export class ServerMessageWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: String;
    constructor();

  }

  export class ServerStreamWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: String;
    constructor();

  }

  export class ServerStreamWebSocket {
    information: ServerStreamWebSocketInformation;
    inputStream: Object;
    outputStream: Object;
    constructor();

    close(): void;
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WebSocketKeepAlive {
    constructor();

    run(taskInstance: Object): void;

  }

  export class SocketError {
    constructor();

    static getStatus(hresult: Number): SocketErrorStatus;


  }

  export class WebSocketError {
    constructor();

    static getStatus(hresult: Number): Number;


  }

  export class SocketActivityTriggerDetails {
    reason: SocketActivityTriggerReason;
    socketInformation: SocketActivityInformation;
    constructor();

  }

  export class ControlChannelTrigger {
    serverKeepAliveIntervalInMinutes: Number;
    controlChannelTriggerId: String;
    currentKeepAliveIntervalInMinutes: Number;
    keepAliveTrigger: Object;
    pushNotificationTrigger: Object;
    transportObject: Object;
    isWakeFromLowPowerSupported: Boolean;
    constructor();
    constructor(channelId: String, serverKeepAliveIntervalInMinutes: Number);
    constructor(channelId: String, serverKeepAliveIntervalInMinutes: Number, resourceRequestType: ControlChannelTriggerResourceType);

    usingTransport(transport: Object): void;

    waitForPushEnabled(): ControlChannelTriggerStatus;

    decreaseNetworkKeepAliveInterval(): void;

    flushTransport(): void;

    close(): void;
  }

  export class IControlChannelTriggerEventDetails {
    controlChannelTrigger: ControlChannelTrigger;
    constructor();

  }

  export class IControlChannelTriggerResetEventDetails {
    hardwareSlotReset: Boolean;
    resetReason: ControlChannelTriggerResetReason;
    softwareSlotReset: Boolean;
    constructor();

  }

