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
    isWebSocketUpgradeRequest: boolean;
    webSocketProtocolsRequested: Object;
    constructor();

    getDeferral(): Object;

  }

  export class DevicePortalConnection {
    constructor();

    static getForAppServiceConnection(appServiceConnection: Object): DevicePortalConnection;


    getServerMessageWebSocketForRequest(request: Object): Object;
    getServerMessageWebSocketForRequest(request: Object, messageType: number, protocol: string): Object;
    getServerMessageWebSocketForRequest(request: Object, messageType: number, protocol: string, outboundBufferSizeInBytes: number, maxMessageSize: number, receiveMode: number): Object;

    getServerStreamWebSocketForRequest(request: Object): Object;
    getServerStreamWebSocketForRequest(request: Object, protocol: string, outboundBufferSizeInBytes: number, noDelay: boolean): Object;

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

