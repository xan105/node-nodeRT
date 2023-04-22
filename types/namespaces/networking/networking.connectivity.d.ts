  export class NetworkUsageStates {
    roaming: TriStates;
    shared: TriStates;
    constructor();
  }

  export class WwanContract {
    constructor();
  }

  export enum NetworkCostType {
    unknown,
    unrestricted,
    fixed,
    variable,
  }

  export enum NetworkConnectivityLevel {
    none,
    localAccess,
    constrainedInternetAccess,
    internetAccess,
  }

  export enum NetworkTypes {
    none,
    internet,
    privateNetwork,
  }

  export enum RoamingStates {
    none,
    notRoaming,
    roaming,
  }

  export enum NetworkAuthenticationType {
    none,
    unknown,
    open80211,
    sharedKey80211,
    wpa,
    wpaPsk,
    wpaNone,
    rsna,
    rsnaPsk,
    ihv,
  }

  export enum NetworkEncryptionType {
    none,
    unknown,
    wep,
    wep40,
    wep104,
    tkip,
    ccmp,
    wpaUseGroup,
    rsnUseGroup,
    ihv,
  }

  export enum DomainConnectivityLevel {
    none,
    unauthenticated,
    authenticated,
  }

  export enum DataUsageGranularity {
    perMinute,
    perHour,
    perDay,
    total,
  }

  export enum CellularApnAuthenticationType {
    none,
    pap,
    chap,
    mschapv2,
  }

  export enum TriStates {
    doNotCare,
    no,
    yes,
  }

  export enum WwanNetworkRegistrationState {
    none,
    deregistered,
    searching,
    home,
    roaming,
    partner,
    denied,
  }

  export enum WwanNetworkIPKind {
    none,
    ipv4,
    ipv6,
    ipv4v6,
    ipv4v6v4Xlat,
  }

  export enum WwanDataClass {
    none,
    gprs,
    edge,
    umts,
    hsdpa,
    hsupa,
    lteAdvanced,
    cdma1xRtt,
    cdma1xEvdo,
    cdma1xEvdoRevA,
    cdma1xEvdv,
    cdma3xRtt,
    cdma1xEvdoRevB,
    cdmaUmb,
    custom,
  }

  export class IPInformation {
    networkAdapter: NetworkAdapter;
    prefixLength: number;
    constructor();

  }

  export class DataPlanUsage {
    lastSyncTime: Date;
    megabytesUsed: number;
    constructor();

  }

  export class ConnectionCost {
    approachingDataLimit: boolean;
    networkCostType: NetworkCostType;
    overDataLimit: boolean;
    roaming: boolean;
    backgroundDataUsageRestricted: boolean;
    constructor();

  }

  export class DataPlanStatus {
    dataLimitInMegabytes: number;
    dataPlanUsage: DataPlanUsage;
    inboundBitsPerSecond: number;
    maxTransferSizeInMegabytes: number;
    nextBillingCycle: Date;
    outboundBitsPerSecond: number;
    constructor();

  }

  export class NetworkAdapter {
    ianaInterfaceType: number;
    inboundMaxBitsPerSecond: number;
    networkAdapterId: string;
    networkItem: NetworkItem;
    outboundMaxBitsPerSecond: number;
    constructor();

    getConnectedProfileAsync(callback: (error: Error, result: ConnectionProfile) => void): void ;

  }

  export class DataUsage {
    bytesReceived: number;
    bytesSent: number;
    constructor();

  }

  export class NetworkSecuritySettings {
    networkAuthenticationType: NetworkAuthenticationType;
    networkEncryptionType: NetworkEncryptionType;
    constructor();

  }

  export class WlanConnectionProfileDetails {
    constructor();

    getConnectedSsid(): string;

  }

  export class NetworkUsage {
    bytesReceived: number;
    bytesSent: number;
    connectionDuration: number;
    constructor();

  }

  export class ConnectivityInterval {
    connectionDuration: number;
    startTime: Date;
    constructor();

  }

  export class AttributedNetworkUsage {
    attributionId: string;
    attributionName: string;
    attributionThumbnail: Object;
    bytesReceived: number;
    bytesSent: number;
    constructor();

  }

  export class ProviderNetworkUsage {
    bytesReceived: number;
    bytesSent: number;
    providerId: string;
    constructor();

  }

  export class LanIdentifierData {
    type: number;
    value: Object;
    constructor();

  }

  export class ConnectionProfile {
    networkAdapter: NetworkAdapter;
    networkSecuritySettings: NetworkSecuritySettings;
    profileName: string;
    isWlanConnectionProfile: boolean;
    isWwanConnectionProfile: boolean;
    serviceProviderGuid: string;
    wlanConnectionProfileDetails: WlanConnectionProfileDetails;
    wwanConnectionProfileDetails: WwanConnectionProfileDetails;
    constructor();

    getNetworkUsageAsync(startTime: Date, endTime: Date, granularity: DataUsageGranularity, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    getConnectivityIntervalsAsync(startTime: Date, endTime: Date, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    getAttributedNetworkUsageAsync(startTime: Date, endTime: Date, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    getProviderNetworkUsageAsync(startTime: Date, endTime: Date, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    getNetworkConnectivityLevel(): NetworkConnectivityLevel;

    getNetworkNames(): Object;

    getConnectionCost(): ConnectionCost;

    getDataPlanStatus(): DataPlanStatus;

    getLocalUsage(StartTime: Date, EndTime: Date): DataUsage;
    getLocalUsage(StartTime: Date, EndTime: Date, States: RoamingStates): DataUsage;

    getSignalBars(): number;

    getDomainConnectivityLevel(): DomainConnectivityLevel;

  }

  export class LanIdentifier {
    infrastructureId: LanIdentifierData;
    networkAdapterId: string;
    portId: LanIdentifierData;
    constructor();

  }

  export class ProxyConfiguration {
    canConnectDirectly: boolean;
    proxyUris: Object;
    constructor();

  }

  export class ConnectionProfileFilter {
    serviceProviderGuid: string;
    networkCostType: NetworkCostType;
    isWwanConnectionProfile: boolean;
    isWlanConnectionProfile: boolean;
    isConnected: boolean;
    isRoaming: boolean;
    isOverDataLimit: boolean;
    isBackgroundDataUsageRestricted: boolean;
    rawData: Object;
    purposeGuid: string;
    constructor();

  }

  export class NetworkItem {
    networkId: string;
    constructor();

    getNetworkTypes(): NetworkTypes;

  }

  export class RoutePolicy {
    connectionProfile: ConnectionProfile;
    hostName: Object;
    hostNameType: number;
    constructor();
    constructor(connectionProfile: ConnectionProfile, hostName: Object, type: number);

  }

  export class CellularApnContext {
    userName: string;
    providerId: string;
    password: string;
    isCompressionEnabled: boolean;
    authenticationType: CellularApnAuthenticationType;
    accessPointName: string;
    profileName: string;
    constructor();

  }

  export class ConnectionSession {
    connectionProfile: ConnectionProfile;
    constructor();

    close(): void;
  }

  export class NetworkInformation {
    constructor();

    static findConnectionProfilesAsync(pProfileFilter: ConnectionProfileFilter, callback: (error: Error, result: Object) => void): void ;


    static getProxyConfigurationAsync(uri: Object, callback: (error: Error, result: ProxyConfiguration) => void): void ;


    static getConnectionProfiles(): Object;


    static getInternetConnectionProfile(): ConnectionProfile;


    static getLanIdentifiers(): Object;


    static getHostNames(): Object;


    static getSortedEndpointPairs(destinationList: Object, sortOptions: number): Object;


    addListener(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ConnectivityManager {
    constructor();

    static acquireConnectionAsync(cellularApnContext: CellularApnContext, callback: (error: Error, result: ConnectionSession) => void): void ;


    static addHttpRoutePolicy(routePolicy: RoutePolicy): void;


    static removeHttpRoutePolicy(routePolicy: RoutePolicy): void;


  }

  export class NetworkStateChangeEventDetails {
    hasNewConnectionCost: boolean;
    hasNewDomainConnectivityLevel: boolean;
    hasNewHostNameList: boolean;
    hasNewInternetConnectionProfile: boolean;
    hasNewNetworkConnectivityLevel: boolean;
    hasNewWwanRegistrationState: boolean;
    hasNewTetheringClientCount: boolean;
    hasNewTetheringOperationalState: boolean;
    constructor();

  }

  export class WwanConnectionProfileDetails {
    accessPointName: string;
    homeProviderId: string;
    iPKind: WwanNetworkIPKind;
    purposeGuids: Object;
    constructor();

    getNetworkRegistrationState(): WwanNetworkRegistrationState;

    getCurrentDataClass(): WwanDataClass;

  }

