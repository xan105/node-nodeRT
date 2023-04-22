  export class RoundTripTimeStatistics {
    variance: number;
    max: number;
    min: number;
    sum: number;
    constructor();
  }

  export class BandwidthStatistics {
    outboundBitsPerSecond: number;
    inboundBitsPerSecond: number;
    outboundBitsPerSecondInstability: number;
    inboundBitsPerSecondInstability: number;
    outboundBandwidthPeaked: boolean;
    inboundBandwidthPeaked: boolean;
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

    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: string, callback: (error: Error, result: Object) => void): void ;
    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: string, sortOptions: number, callback: (error: Error, result: Object) => void): void ;


    connectAsync(remoteHostName: Object, remoteServiceName: string, callback: (error: Error) => void): void ;
    connectAsync(endpointPair: Object, callback: (error: Error) => void): void ;

    bindServiceNameAsync(localServiceName: string, callback: (error: Error) => void): void ;
    bindServiceNameAsync(localServiceName: string, adapter: Object, callback: (error: Error) => void): void ;

    bindEndpointAsync(localHostName: Object, localServiceName: string, callback: (error: Error) => void): void ;

    getOutputStreamAsync(remoteHostName: Object, remoteServiceName: string, callback: (error: Error, result: Object) => void): void ;
    getOutputStreamAsync(endpointPair: Object, callback: (error: Error, result: Object) => void): void ;

    cancelIOAsync(callback: (error: Error) => void): void ;

    joinMulticastGroup(host: Object): void;

    close(): void;
    enableTransferOwnership(taskId: string): void;
    enableTransferOwnership(taskId: string, connectedStandbyAction: SocketActivityConnectedStandbyAction): void;

    transferOwnership(socketId: string): void;
    transferOwnership(socketId: string, data: SocketActivityContext): void;
    transferOwnership(socketId: string, data: SocketActivityContext, keepAliveTime: number): void;

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

    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: string, callback: (error: Error, result: Object) => void): void ;
    static getEndpointPairsAsync(remoteHostName: Object, remoteServiceName: string, sortOptions: number, callback: (error: Error, result: Object) => void): void ;


    connectAsync(endpointPair: Object, callback: (error: Error) => void): void ;
    connectAsync(remoteHostName: Object, remoteServiceName: string, callback: (error: Error) => void): void ;
    connectAsync(endpointPair: Object, protectionLevel: SocketProtectionLevel, callback: (error: Error) => void): void ;
    connectAsync(remoteHostName: Object, remoteServiceName: string, protectionLevel: SocketProtectionLevel, callback: (error: Error) => void): void ;
    connectAsync(remoteHostName: Object, remoteServiceName: string, protectionLevel: SocketProtectionLevel, adapter: Object, callback: (error: Error) => void): void ;

    upgradeToSslAsync(protectionLevel: SocketProtectionLevel, validationHostName: Object, callback: (error: Error) => void): void ;

    cancelIOAsync(callback: (error: Error) => void): void ;

    close(): void;
    enableTransferOwnership(taskId: string): void;
    enableTransferOwnership(taskId: string, connectedStandbyAction: SocketActivityConnectedStandbyAction): void;

    transferOwnership(socketId: string): void;
    transferOwnership(socketId: string, data: SocketActivityContext): void;
    transferOwnership(socketId: string, data: SocketActivityContext, keepAliveTime: number): void;

  }

  export class StreamSocketListener {
    control: StreamSocketListenerControl;
    information: StreamSocketListenerInformation;
    constructor();

    bindServiceNameAsync(localServiceName: string, callback: (error: Error) => void): void ;
    bindServiceNameAsync(localServiceName: string, protectionLevel: SocketProtectionLevel, callback: (error: Error) => void): void ;
    bindServiceNameAsync(localServiceName: string, protectionLevel: SocketProtectionLevel, adapter: Object, callback: (error: Error) => void): void ;

    bindEndpointAsync(localHostName: Object, localServiceName: string, callback: (error: Error) => void): void ;

    cancelIOAsync(callback: (error: Error) => void): void ;

    close(): void;
    enableTransferOwnership(taskId: string): void;
    enableTransferOwnership(taskId: string, connectedStandbyAction: SocketActivityConnectedStandbyAction): void;

    transferOwnership(socketId: string): void;
    transferOwnership(socketId: string, data: SocketActivityContext): void;

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
    id: string;
    socketKind: SocketActivityKind;
    streamSocket: StreamSocket;
    streamSocketListener: StreamSocketListener;
    taskId: string;
    constructor();

  }

  export class DatagramSocketControl {
    qualityOfService: SocketQualityOfService;
    outboundUnicastHopLimit: number;
    inboundBufferSizeInBytes: number;
    dontFragment: boolean;
    multicastOnly: boolean;
    constructor();

  }

  export class DatagramSocketInformation {
    localAddress: Object;
    localPort: string;
    remoteAddress: Object;
    remotePort: string;
    constructor();

  }

  export class DatagramSocketMessageReceivedEventArgs {
    localAddress: Object;
    remoteAddress: Object;
    remotePort: string;
    constructor();

    getDataReader(): Object;

    getDataStream(): Object;

  }

  export class StreamSocketControl {
    qualityOfService: SocketQualityOfService;
    outboundUnicastHopLimit: number;
    outboundBufferSizeInBytes: number;
    noDelay: boolean;
    keepAlive: boolean;
    ignorableServerCertificateErrors: Object;
    serializeConnectionAttempts: boolean;
    clientCertificate: Object;
    minProtectionLevel: SocketProtectionLevel;
    constructor();

  }

  export class StreamSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    localPort: string;
    protectionLevel: SocketProtectionLevel;
    remoteAddress: Object;
    remoteHostName: Object;
    remotePort: string;
    remoteServiceName: string;
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
    outboundUnicastHopLimit: number;
    outboundBufferSizeInBytes: number;
    noDelay: boolean;
    keepAlive: boolean;
    constructor();

  }

  export class StreamSocketListenerInformation {
    localPort: string;
    constructor();

  }

  export class StreamSocketListenerConnectionReceivedEventArgs {
    socket: StreamSocket;
    constructor();

  }

  export class IWebSocketControl {
    outboundBufferSizeInBytes: number;
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
    protocol: string;
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

    setRequestHeader(headerName: string, headerValue: string): void;

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
    code: number;
    reason: string;
    constructor();

  }

  export class MessageWebSocketControl {
    messageType: SocketMessageType;
    maxMessageSize: number;
    receiveMode: MessageWebSocketReceiveMode;
    desiredUnsolicitedPongInterval: number;
    clientCertificate: Object;
    actualUnsolicitedPongInterval: number;
    serverCredential: Object;
    proxyCredential: Object;
    outboundBufferSizeInBytes: number;
    supportedProtocols: Object;
    ignorableServerCertificateErrors: Object;
    constructor();

  }

  export class MessageWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: string;
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

    sendNonfinalFrameAsync(data: Object, callback: (error: Error, result: number) => void): void ;

    sendFinalFrameAsync(data: Object, callback: (error: Error, result: number) => void): void ;

    setRequestHeader(headerName: string, headerValue: string): void;

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
    isMessageComplete: boolean;
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
    noDelay: boolean;
    desiredUnsolicitedPongInterval: number;
    clientCertificate: Object;
    actualUnsolicitedPongInterval: number;
    serverCredential: Object;
    proxyCredential: Object;
    outboundBufferSizeInBytes: number;
    supportedProtocols: Object;
    ignorableServerCertificateErrors: Object;
    constructor();

  }

  export class StreamWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: string;
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

    setRequestHeader(headerName: string, headerValue: string): void;

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
    protocol: string;
    constructor();

  }

  export class ServerStreamWebSocketInformation {
    bandwidthStatistics: BandwidthStatistics;
    localAddress: Object;
    protocol: string;
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

    static getStatus(hresult: number): SocketErrorStatus;


  }

  export class WebSocketError {
    constructor();

    static getStatus(hresult: number): number;


  }

  export class SocketActivityTriggerDetails {
    reason: SocketActivityTriggerReason;
    socketInformation: SocketActivityInformation;
    constructor();

  }

  export class ControlChannelTrigger {
    serverKeepAliveIntervalInMinutes: number;
    controlChannelTriggerId: string;
    currentKeepAliveIntervalInMinutes: number;
    keepAliveTrigger: Object;
    pushNotificationTrigger: Object;
    transportObject: Object;
    isWakeFromLowPowerSupported: boolean;
    constructor();
    constructor(channelId: string, serverKeepAliveIntervalInMinutes: number);
    constructor(channelId: string, serverKeepAliveIntervalInMinutes: number, resourceRequestType: ControlChannelTriggerResourceType);

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
    hardwareSlotReset: boolean;
    resetReason: ControlChannelTriggerResetReason;
    softwareSlotReset: boolean;
    constructor();

  }

