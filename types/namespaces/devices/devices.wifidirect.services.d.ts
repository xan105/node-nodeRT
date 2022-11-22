  export enum WiFiDirectServiceConfigurationMethod {
    default,
    pinDisplay,
    pinEntry,
  }

  export enum WiFiDirectServiceStatus {
    available,
    busy,
    custom,
  }

  export enum WiFiDirectServiceSessionStatus {
    closed,
    initiated,
    requested,
    open,
  }

  export enum WiFiDirectServiceSessionErrorStatus {
    ok,
    disassociated,
    localClose,
    remoteClose,
    systemFailure,
    noResponseFromRemote,
  }

  export enum WiFiDirectServiceAdvertisementStatus {
    created,
    started,
    stopped,
    aborted,
  }

  export enum WiFiDirectServiceError {
    success,
    radioNotAvailable,
    resourceInUse,
    unsupportedHardware,
    noHardware,
  }

  export enum WiFiDirectServiceIPProtocol {
    tcp,
    udp,
  }

  export class WiFiDirectServiceProvisioningInfo {
    isGroupFormationNeeded: Boolean;
    selectedConfigurationMethod: WiFiDirectServiceConfigurationMethod;
    constructor();

  }

  export class WiFiDirectServiceSession {
    advertisementId: Number;
    errorStatus: WiFiDirectServiceSessionErrorStatus;
    serviceAddress: String;
    serviceName: String;
    sessionAddress: String;
    sessionId: Number;
    status: WiFiDirectServiceSessionStatus;
    constructor();

    addStreamSocketListenerAsync(value: Object, callback: (error: Error) => void): void ;

    addDatagramSocketAsync(value: Object, callback: (error: Error) => void): void ;

    getConnectionEndpointPairs(): Object;

    close(): void;
    addListener(type: "RemotePortAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "RemotePortAdded", listener: (ev: Event) => void): void ;
    on(type: "RemotePortAdded", listener: (ev: Event) => void): void ;
    off(type: "RemotePortAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "SessionStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WiFiDirectServiceAutoAcceptSessionConnectedEventArgs {
    session: WiFiDirectServiceSession;
    sessionInfo: Object;
    constructor();

  }

  export class WiFiDirectServiceRemotePortAddedEventArgs {
    endpointPairs: Object;
    protocol: WiFiDirectServiceIPProtocol;
    constructor();

  }

  export class WiFiDirectServiceSessionDeferredEventArgs {
    deferredSessionInfo: Object;
    constructor();

  }

  export class WiFiDirectServiceSessionRequest {
    deviceInformation: Object;
    provisioningInfo: WiFiDirectServiceProvisioningInfo;
    sessionInfo: Object;
    constructor();

    close(): void;
  }

  export class WiFiDirectServiceSessionRequestedEventArgs {
    constructor();

    getSessionRequest(): WiFiDirectServiceSessionRequest;

  }

  export class WiFiDirectServiceAdvertiser {
    serviceStatus: WiFiDirectServiceStatus;
    serviceInfo: Object;
    preferGroupOwnerMode: Boolean;
    deferredSessionInfo: Object;
    customServiceStatusCode: Number;
    autoAcceptSession: Boolean;
    serviceError: WiFiDirectServiceError;
    preferredConfigurationMethods: Object;
    serviceName: String;
    serviceNamePrefixes: Object;
    advertisementStatus: WiFiDirectServiceAdvertisementStatus;
    constructor();
    constructor(serviceName: String);

    connectAsync(deviceInfo: Object, callback: (error: Error, result: WiFiDirectServiceSession) => void): void ;
    connectAsync(deviceInfo: Object, pin: String, callback: (error: Error, result: WiFiDirectServiceSession) => void): void ;

    start(): void;

    stop(): void;

    addListener(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "AdvertisementStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AutoAcceptSessionConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "AutoAcceptSessionConnected", listener: (ev: Event) => void): void ;
    on(type: "AutoAcceptSessionConnected", listener: (ev: Event) => void): void ;
    off(type: "AutoAcceptSessionConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "SessionRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "SessionRequested", listener: (ev: Event) => void): void ;
    on(type: "SessionRequested", listener: (ev: Event) => void): void ;
    off(type: "SessionRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WiFiDirectService {
    sessionInfo: Object;
    preferGroupOwnerMode: Boolean;
    remoteServiceInfo: Object;
    serviceError: WiFiDirectServiceError;
    supportedConfigurationMethods: Object;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: WiFiDirectService) => void): void ;


    static getSelector(serviceName: String): String;
    static getSelector(serviceName: String, serviceInfoFilter: Object): String;


    getProvisioningInfoAsync(selectedConfigurationMethod: WiFiDirectServiceConfigurationMethod, callback: (error: Error, result: WiFiDirectServiceProvisioningInfo) => void): void ;

    connectAsync(callback: (error: Error, result: WiFiDirectServiceSession) => void): void ;
    connectAsync(pin: String, callback: (error: Error, result: WiFiDirectServiceSession) => void): void ;

    addListener(type: "SessionDeferred", listener: (ev: Event) => void): void ;
    removeListener(type: "SessionDeferred", listener: (ev: Event) => void): void ;
    on(type: "SessionDeferred", listener: (ev: Event) => void): void ;
    off(type: "SessionDeferred", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

