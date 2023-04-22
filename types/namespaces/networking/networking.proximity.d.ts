  export enum TriggeredConnectState {
    peerFound,
    listening,
    connecting,
    completed,
    canceled,
    failed,
  }

  export enum PeerWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

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

  export class ProximityMessage {
    data: Object;
    dataAsString: string;
    messageType: string;
    subscriptionId: number;
    constructor();

  }

  export class ProximityDevice {
    bitsPerSecond: number;
    deviceId: string;
    maxMessageBytes: number;
    constructor();

    static getDeviceSelector(): string;


    static getDefault(): ProximityDevice;


    static fromId(deviceId: string): ProximityDevice;


    subscribeForMessage(messageType: string, messageReceivedHandler: Object): number;

    publishMessage(messageType: string, message: string): number;
    publishMessage(messageType: string, message: string, messageTransmittedHandler: Object): number;

    publishBinaryMessage(messageType: string, message: Object): number;
    publishBinaryMessage(messageType: string, message: Object, messageTransmittedHandler: Object): number;

    publishUriMessage(message: Object): number;
    publishUriMessage(message: Object, messageTransmittedHandler: Object): number;

    stopSubscribingForMessage(subscriptionId: number): void;

    stopPublishingMessage(messageId: number): void;

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

  export class TriggeredConnectionStateChangedEventArgs {
    id: number;
    socket: Object;
    state: TriggeredConnectState;
    constructor();

  }

  export class PeerInformation {
    displayName: string;
    discoveryData: Object;
    id: string;
    hostName: Object;
    serviceName: string;
    constructor();

  }

  export class ConnectionRequestedEventArgs {
    peerInformation: PeerInformation;
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

  export class PeerFinder {
    static displayName: string;
    static allowWiFiDirect: boolean;
    static allowInfrastructure: boolean;
    static allowBluetooth: boolean;
    static alternateIdentities: Object;
    static supportedDiscoveryTypes: PeerDiscoveryTypes;
    static role: PeerRole;
    static discoveryData: Object;
    constructor();

    static findAllPeersAsync(callback: (error: Error, result: Object) => void): void ;


    static connectAsync(peerInformation: PeerInformation, callback: (error: Error, result: Object) => void): void ;


    static createWatcher(): PeerWatcher;


    static start(): void;
    static start(peerMessage: string): void;


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

