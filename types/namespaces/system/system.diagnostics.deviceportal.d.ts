  export enum DevicePortalConnectionClosedReason {
    unknown,
    resourceLimitsExceeded,
    protocolError,
    notAuthorized,
    userNotPresent,
    serviceTerminated,
  }

  export class DevicePortalConnectionClosedEventArgs {
    reason: DevicePortalConnectionClosedReason;
    constructor();

  }

  export class DevicePortalConnectionRequestReceivedEventArgs {
    requestMessage: Object;
    responseMessage: Object;
    isWebSocketUpgradeRequest: Boolean;
    webSocketProtocolsRequested: Object;
    constructor();

    getDeferral(): Object;

  }

  export class DevicePortalConnection {
    constructor();

    static getForAppServiceConnection(appServiceConnection: Object): DevicePortalConnection;


    getServerMessageWebSocketForRequest(request: Object): Object;
    getServerMessageWebSocketForRequest(request: Object, messageType: Number, protocol: String): Object;
    getServerMessageWebSocketForRequest(request: Object, messageType: Number, protocol: String, outboundBufferSizeInBytes: Number, maxMessageSize: Number, receiveMode: Number): Object;

    getServerStreamWebSocketForRequest(request: Object): Object;
    getServerStreamWebSocketForRequest(request: Object, protocol: String, outboundBufferSizeInBytes: Number, noDelay: Boolean): Object;

    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "RequestReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "RequestReceived", listener: (ev: Event) => void): void ;
    on(type: "RequestReceived", listener: (ev: Event) => void): void ;
    off(type: "RequestReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

