  export enum WiFiAccessStatus {
    unspecified,
    allowed,
    deniedByUser,
    deniedBySystem,
  }

  export enum WiFiConnectionMethod {
    default,
    wpsPin,
    wpsPushButton,
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

  export enum WiFiNetworkKind {
    any,
    infrastructure,
    adhoc,
  }

  export enum WiFiOnDemandHotspotAvailability {
    available,
    unavailable,
  }

  export enum WiFiOnDemandHotspotCellularBars {
    zeroBars,
    oneBar,
    twoBars,
    threeBars,
    fourBars,
    fiveBars,
  }

  export enum WiFiOnDemandHotspotConnectStatus {
    unspecifiedFailure,
    success,
    appTimedOut,
    invalidCredential,
    networkNotAvailable,
    unsupportedAuthenticationProtocol,
    bluetoothConnectFailed,
    bluetoothTransmissionError,
    operationCanceledByUser,
    entitlementCheckFailed,
    noCellularSignal,
    cellularDataTurnedOff,
    wlanConnectFailed,
    wlanNotVisible,
    accessPointCannotConnect,
    cellularConnectTimedOut,
    roamingNotAllowed,
    pairingRequired,
    dataLimitReached,
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
    hE,
    eht,
  }

  export enum WiFiReconnectionKind {
    automatic,
    manual,
  }

  export enum WiFiWpsConfigurationStatus {
    unspecifiedFailure,
    success,
    timeout,
  }

  export enum WiFiWpsKind {
    unknown,
    pin,
    pushButton,
    nfc,
    ethernet,
    usb,
  }

  export class WiFiAdapter {
    networkAdapter: Object;
    networkReport: WiFiNetworkReport;
    constructor();

    static findAllAdaptersAsync(callback: (error: Error, result: Object) => void): void ;


    static fromIdAsync(deviceId: String, callback: (error: Error, result: WiFiAdapter) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: WiFiAccessStatus) => void): void ;


    static getDeviceSelector(): String;


    scanAsync(callback: (error: Error) => void): void ;

    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, ssid: String, callback: (error: Error, result: WiFiConnectionResult) => void): void ;
    connectAsync(availableNetwork: WiFiAvailableNetwork, reconnectionKind: WiFiReconnectionKind, passwordCredential: Object, ssid: String, connectionMethod: WiFiConnectionMethod, callback: (error: Error, result: WiFiConnectionResult) => void): void ;

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

  export class WiFiAvailableNetwork {
    beaconInterval: Number;
    bssid: String;
    channelCenterFrequencyInKilohertz: Number;
    isWiFiDirect: Boolean;
    networkKind: WiFiNetworkKind;
    networkRssiInDecibelMilliwatts: Number;
    phyKind: WiFiPhyKind;
    securitySettings: Object;
    signalBars: Number;
    ssid: String;
    uptime: Number;
    constructor();

  }

  export class WiFiConnectionResult {
    connectionStatus: WiFiConnectionStatus;
    constructor();

  }

  export class WiFiNetworkReport {
    availableNetworks: Object;
    timestamp: Date;
    constructor();

  }

  export class WiFiOnDemandHotspotConnectTriggerDetails {
    requestedNetwork: WiFiOnDemandHotspotNetwork;
    constructor();

    connectAsync(callback: (error: Error, result: WiFiOnDemandHotspotConnectionResult) => void): void ;

    reportError(status: WiFiOnDemandHotspotConnectStatus): void;

    connect(): WiFiOnDemandHotspotConnectionResult;

  }

  export class WiFiOnDemandHotspotConnectionResult {
    status: WiFiOnDemandHotspotConnectStatus;
    constructor();

  }

  export class WiFiOnDemandHotspotNetwork {
    id: String;
    constructor();

    static getOrCreateById(networkId: String): WiFiOnDemandHotspotNetwork;


    getProperties(): WiFiOnDemandHotspotNetworkProperties;

    updateProperties(newProperties: WiFiOnDemandHotspotNetworkProperties): void;

  }

  export class WiFiOnDemandHotspotNetworkProperties {
    ssid: String;
    remainingBatteryPercent: Number;
    password: Object;
    isMetered: Boolean;
    displayName: String;
    cellularBars: WiFiOnDemandHotspotCellularBars;
    availability: WiFiOnDemandHotspotAvailability;
    constructor();

  }

  export class WiFiWpsConfigurationResult {
    status: WiFiWpsConfigurationStatus;
    supportedWpsKinds: Object;
    constructor();

  }

