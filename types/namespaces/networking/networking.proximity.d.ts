  export enum PeerDiscoveryTypes {
    none,
    browse,
    triggered,
  }

  export enum PeerRole {
    peer,
    host,
    client,
  }

  export enum PeerWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export enum TriggeredConnectState {
    peerFound,
    listening,
    connecting,
    completed,
    canceled,
    failed,
  }

  export class ConnectionRequestedEventArgs {
    peerInformation: PeerInformation;
    constructor();

  }

  export class PeerFinder {
    static displayName: String;
    static allowWiFiDirect: Boolean;
    static allowInfrastructure: Boolean;
    static allowBluetooth: Boolean;
    static alternateIdentities: Object;
    static supportedDiscoveryTypes: PeerDiscoveryTypes;
    static role: PeerRole;
    static discoveryData: Object;
    constructor();

    static findAllPeersAsync(callback: (error: Error, result: Object) => void): void ;


    static connectAsync(peerInformation: PeerInformation, callback: (error: Error, result: Object) => void): void ;


    static createWatcher(): PeerWatcher;


    static start(): void;
    static start(peerMessage: String): void;


    static stop(): void;


    addListener(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    on(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    off(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "TriggeredConnectionStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TriggeredConnectionStateChanged", listener: (ev: Event) => void): void ;
    on(type: "TriggeredConnectionStateChanged", listener: (ev: Event) => void): void ;
    off(type: "TriggeredConnectionStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PeerInformation {
    displayName: String;
    discoveryData: Object;
    id: String;
    hostName: Object;
    serviceName: String;
    constructor();

  }

  export class PeerWatcher {
    status: PeerWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ProximityDevice {
    bitsPerSecond: Number;
    deviceId: String;
    maxMessageBytes: Number;
    constructor();

    static getDeviceSelector(): String;


    static getDefault(): ProximityDevice;


    static fromId(deviceId: String): ProximityDevice;


    subscribeForMessage(messageType: String, messageReceivedHandler: Object): Number;

    publishMessage(messageType: String, message: String): Number;
    publishMessage(messageType: String, message: String, messageTransmittedHandler: Object): Number;

    publishBinaryMessage(messageType: String, message: Object): Number;
    publishBinaryMessage(messageType: String, message: Object, messageTransmittedHandler: Object): Number;

    publishUriMessage(message: Object): Number;
    publishUriMessage(message: Object, messageTransmittedHandler: Object): Number;

    stopSubscribingForMessage(subscriptionId: Number): void;

    stopPublishingMessage(messageId: Number): void;

    addListener(type: "DeviceArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "DeviceArrived", listener: (ev: Event) => void): void ;
    on(type: "DeviceArrived", listener: (ev: Event) => void): void ;
    off(type: "DeviceArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: "DeviceDeparted", listener: (ev: Event) => void): void ;
    removeListener(type: "DeviceDeparted", listener: (ev: Event) => void): void ;
    on(type: "DeviceDeparted", listener: (ev: Event) => void): void ;
    off(type: "DeviceDeparted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ProximityMessage {
    data: Object;
    dataAsString: String;
    messageType: String;
    subscriptionId: Number;
    constructor();

  }

  export class TriggeredConnectionStateChangedEventArgs {
    id: Number;
    socket: Object;
    state: TriggeredConnectState;
    constructor();

  }

