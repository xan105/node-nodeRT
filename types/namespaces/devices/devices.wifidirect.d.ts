  export enum WiFiDirectAdvertisementListenStateDiscoverability {
    none,
    normal,
    intensive,
  }

  export enum WiFiDirectAdvertisementPublisherStatus {
    created,
    started,
    stopped,
    aborted,
  }

  export enum WiFiDirectConfigurationMethod {
    providePin,
    displayPin,
    pushButton,
  }

  export enum WiFiDirectConnectionStatus {
    disconnected,
    connected,
  }

  export enum WiFiDirectDeviceSelectorType {
    deviceInterface,
    associationEndpoint,
  }

  export enum WiFiDirectError {
    success,
    radioNotAvailable,
    resourceInUse,
  }

  export enum WiFiDirectPairingProcedure {
    groupOwnerNegotiation,
    invitation,
  }

  export class WiFiDirectAdvertisement {
    listenStateDiscoverability: WiFiDirectAdvertisementListenStateDiscoverability;
    isAutonomousGroupOwnerEnabled: Boolean;
    informationElements: Object;
    legacySettings: WiFiDirectLegacySettings;
    supportedConfigurationMethods: Object;
    constructor();

  }

  export class WiFiDirectAdvertisementPublisher {
    advertisement: WiFiDirectAdvertisement;
    status: WiFiDirectAdvertisementPublisherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WiFiDirectAdvertisementPublisherStatusChangedEventArgs {
    error: WiFiDirectError;
    status: WiFiDirectAdvertisementPublisherStatus;
    constructor();

  }

  export class WiFiDirectConnectionListener {
    constructor();

    addListener(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    on(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    off(type: "ConnectionRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WiFiDirectConnectionParameters {
    groupOwnerIntent: Number;
    preferredPairingProcedure: WiFiDirectPairingProcedure;
    preferenceOrderedConfigurationMethods: Object;
    constructor();

    static getDevicePairingKinds(configurationMethod: WiFiDirectConfigurationMethod): Number;


  }

  export class WiFiDirectConnectionRequest {
    deviceInformation: Object;
    constructor();

    close(): void;
  }

  export class WiFiDirectConnectionRequestedEventArgs {
    constructor();

    getConnectionRequest(): WiFiDirectConnectionRequest;

  }

  export class WiFiDirectDevice {
    connectionStatus: WiFiDirectConnectionStatus;
    deviceId: String;
    constructor();

    static fromIdAsync(deviceId: String, connectionParameters: WiFiDirectConnectionParameters, callback: (error: Error, result: WiFiDirectDevice) => void): void ;
    static fromIdAsync(deviceId: String, callback: (error: Error, result: WiFiDirectDevice) => void): void ;


    static getDeviceSelector(type: WiFiDirectDeviceSelectorType): String;
    static getDeviceSelector(): String;


    getConnectionEndpointPairs(): Object;

    close(): void;
    addListener(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "ConnectionStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WiFiDirectInformationElement {
    value: Object;
    ouiType: Number;
    oui: Object;
    constructor();

    static createFromBuffer(buffer: Object): Object;


    static createFromDeviceInformation(deviceInformation: Object): Object;


  }

  export class WiFiDirectLegacySettings {
    ssid: String;
    passphrase: Object;
    isEnabled: Boolean;
    constructor();

  }

export const WiFiDirectAdvertisementListenStateDiscoverability: any;
export const WiFiDirectAdvertisementPublisherStatus: any;
export const WiFiDirectConfigurationMethod: any;
export const WiFiDirectConnectionStatus: any;
export const WiFiDirectDeviceSelectorType: any;
export const WiFiDirectError: any;
export const WiFiDirectPairingProcedure: any;
export const WiFiDirectAdvertisement: any;
export const WiFiDirectAdvertisementPublisher: any;
export const WiFiDirectAdvertisementPublisherStatusChangedEventArgs: any;
export const WiFiDirectConnectionListener: any;
export const WiFiDirectConnectionParameters: any;
export const WiFiDirectConnectionRequest: any;
export const WiFiDirectConnectionRequestedEventArgs: any;
export const WiFiDirectDevice: any;
export const WiFiDirectInformationElement: any;
export const WiFiDirectLegacySettings: any;
export * as services from "./devices.wifidirect.services.js";
