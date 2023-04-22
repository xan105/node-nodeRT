  export enum WiFiNetworkKind {
    any,
    infrastructure,
    adhoc,
  }

  export enum WiFiPhyKind {
    unknown,
    fhss,
    dsss,
    iRBaseband,
    ofdm,
    hrdsss,
    erp,
    hT,
    vht,
    dmg,
  }

  export enum WiFiAccessStatus {
    unspecified,
    allowed,
    deniedByUser,
    deniedBySystem,
  }

  export enum WiFiReconnectionKind {
    automatic,
    manual,
  }

  export enum WiFiConnectionStatus {
    unspecifiedFailure,
    success,
    accessRevoked,
    invalidCredential,
    networkNotAvailable,
    timeout,
    unsupportedAuthenticationProtocol,
  }

  export enum WiFiConnectionMethod {
    default,
    wpsPin,
    wpsPushButton,
  }

  export enum WiFiWpsKind {
    unknown,
    pin,
    pushButton,
    nfc,
    ethernet,
    usb,
  }

  export enum WiFiWpsConfigurationStatus {
    unspecifiedFailure,
    success,
    timeout,
  }

  export class WiFiAdapter {
    networkAdapter: Object;
    networkReport: WiFiNetworkReport;
    constructor();

    static findAllAdaptersAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(deviceId: string, callback: (error: Error, result: WiFiAdapter) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: WiFiAccessStatus) => void): void ;


    static getDeviceSelector(): string;


    scanAsync(callback: (error: Error) => void): void ;

    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, ssid: string, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, ssid: string, connectionMethod: WiFiConnectionMethod, callback: (error: Error, result: WiFiConnectionResult) => void): void ;

    getWpsConfigurationAsync(availableNetwork: WiFiAvailableNetwork, callback: (error: Error, result: WiFiWpsConfigurationResult) => void): void ;

    disconnect(): void;

    addListener(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailableNetworksChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WiFiNetworkReport {
    availableNetworks: Object;
    timestamp: Date;
    constructor();

  }

  export class WiFiAvailableNetwork {
    beaconInterval: number;
    bssid: string;
    channelCenterFrequencyInKilohertz: number;
    isWiFiDirect: boolean;
    networkKind: WiFiNetworkKind;
    networkRssiInDecibelMilliwatts: number;
    phyKind: WiFiPhyKind;
    securitySettings: Object;
    signalBars: number;
    ssid: string;
    uptime: number;
    constructor();

  }

  export class WiFiConnectionResult {
    connectionStatus: WiFiConnectionStatus;
    constructor();

  }

  export class WiFiWpsConfigurationResult {
    status: WiFiWpsConfigurationStatus;
    supportedWpsKinds: Object;
    constructor();

  }

