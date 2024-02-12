  export class NetworkUsageStates {
    roaming: TriStates;
    shared: TriStates;
    constructor();
  }

  export class WwanContract {
    constructor();
  }

  export enum CellularApnAuthenticationType {
    none,
    pap,
    chap,
    mschapv2,
  }

  export enum ConnectionProfileDeleteStatus {
    success,
    deniedByUser,
    deniedBySystem,
    unknownError,
  }

  export enum DataUsageGranularity {
    perMinute,
    perHour,
    perDay,
    total,
  }

  export enum DomainAuthenticationKind {
    none,
    ldap,
    tls,
  }

  export enum DomainConnectivityLevel {
    none,
    unauthenticated,
    authenticated,
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
    wpa3,
    wpa3Enterprise192Bits,
    wpa3Sae,
    owe,
    wpa3Enterprise,
  }

  export enum NetworkConnectivityLevel {
    none,
    localAccess,
    constrainedInternetAccess,
    internetAccess,
  }

  export enum NetworkCostType {
    unknown,
    unrestricted,
    fixed,
    variable,
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
    gcmp,
    gcmp256,
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

  export enum TriStates {
    doNotCare,
    no,
    yes,
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

  export enum WwanNetworkIPKind {
    none,
    ipv4,
    ipv6,
    ipv4v6,
    ipv4v6v4Xlat,
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

  export class AttributedNetworkUsage {
    attributionId: String;
    attributionName: String;
    attributionThumbnail: Object;
    bytesReceived: Number;
    bytesSent: Number;
    constructor();

  }

  export class CellularApnContext {
    userName: String;
    providerId: String;
    password: String;
    isCompressionEnabled: Boolean;
    authenticationType: CellularApnAuthenticationType;
    accessPointName: String;
    profileName: String;
    constructor();

  }

  export class ConnectionCost {
    approachingDataLimit: Boolean;
    networkCostType: NetworkCostType;
    overDataLimit: Boolean;
    roaming: Boolean;
    backgroundDataUsageRestricted: Boolean;
    constructor();

  }

  export class ConnectionProfile {
    networkAdapter: NetworkAdapter;
    networkSecuritySettings: NetworkSecuritySettings;
    profileName: String;
    isWlanConnectionProfile: Boolean;
    isWwanConnectionProfile: Boolean;
    serviceProviderGuid: String;
    wlanConnectionProfileDetails: WlanConnectionProfileDetails;
    wwanConnectionProfileDetails: WwanConnectionProfileDetails;
    canDelete: Boolean;
    constructor();

    getNetworkUsageAsync(startTime: Date, endTime: Date, granularity: DataUsageGranularity, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    getConnectivityIntervalsAsync(startTime: Date, endTime: Date, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    getAttributedNetworkUsageAsync(startTime: Date, endTime: Date, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    getProviderNetworkUsageAsync(startTime: Date, endTime: Date, states: NetworkUsageStates, callback: (error: Error, result: Object) => void): void ;

    tryDeleteAsync(callback: (error: Error, result: ConnectionProfileDeleteStatus) => void): void ;

    getNetworkConnectivityLevel(): NetworkConnectivityLevel;

    getNetworkNames(): Object;

    getConnectionCost(): ConnectionCost;

    getDataPlanStatus(): DataPlanStatus;

    getLocalUsage(StartTime: Date, EndTime: Date): DataUsage;
    getLocalUsage(StartTime: Date, EndTime: Date, States: RoamingStates): DataUsage;

    getSignalBars(): Number;

    getDomainConnectivityLevel(): DomainConnectivityLevel;

    isDomainAuthenticatedBy(kind: DomainAuthenticationKind): Boolean;

  }

  export class ConnectionProfileFilter {
    serviceProviderGuid: String;
    networkCostType: NetworkCostType;
    isWwanConnectionProfile: Boolean;
    isWlanConnectionProfile: Boolean;
    isConnected: Boolean;
    isRoaming: Boolean;
    isOverDataLimit: Boolean;
    isBackgroundDataUsageRestricted: Boolean;
    rawData: Object;
    purposeGuid: String;
    constructor();

  }

  export class ConnectionSession {
    connectionProfile: ConnectionProfile;
    constructor();

    close(): void;
  }

  export class ConnectivityInterval {
    connectionDuration: Number;
    startTime: Date;
    constructor();

  }

  export class ConnectivityManager {
    constructor();

    static acquireConnectionAsync(cellularApnContext: CellularApnContext, callback: (error: Error, result: ConnectionSession) => void): void ;


    static addHttpRoutePolicy(routePolicy: RoutePolicy): void;


    static removeHttpRoutePolicy(routePolicy: RoutePolicy): void;


  }

  export class DataPlanStatus {
    dataLimitInMegabytes: Number;
    dataPlanUsage: DataPlanUsage;
    inboundBitsPerSecond: Number;
    maxTransferSizeInMegabytes: Number;
    nextBillingCycle: Date;
    outboundBitsPerSecond: Number;
    constructor();

  }

  export class DataPlanUsage {
    lastSyncTime: Date;
    megabytesUsed: Number;
    constructor();

  }

  export class DataUsage {
    bytesReceived: Number;
    bytesSent: Number;
    constructor();

  }

  export class IPInformation {
    networkAdapter: NetworkAdapter;
    prefixLength: Number;
    constructor();

  }

  export class LanIdentifier {
    infrastructureId: LanIdentifierData;
    networkAdapterId: String;
    portId: LanIdentifierData;
    constructor();

  }

  export class LanIdentifierData {
    type: Number;
    value: Object;
    constructor();

  }

  export class NetworkAdapter {
    ianaInterfaceType: Number;
    inboundMaxBitsPerSecond: Number;
    networkAdapterId: String;
    networkItem: NetworkItem;
    outboundMaxBitsPerSecond: Number;
    constructor();

    getConnectedProfileAsync(callback: (error: Error, result: ConnectionProfile) => void): void ;

  }

  export class NetworkInformation {
    constructor();

    static findConnectionProfilesAsync(pProfileFilter: ConnectionProfileFilter, callback: (error: Error, result: Object) => void): void ;


    static getProxyConfigurationAsync(uri: Object, callback: (error: Error, result: ProxyConfiguration) => void): void ;


    static getConnectionProfiles(): Object;


    static getInternetConnectionProfile(): ConnectionProfile;


    static getLanIdentifiers(): Object;


    static getHostNames(): Object;


    static getSortedEndpointPairs(destinationList: Object, sortOptions: Number): Object;


    addListener(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "NetworkStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class NetworkItem {
    networkId: String;
    constructor();

    getNetworkTypes(): NetworkTypes;

  }

  export class NetworkSecuritySettings {
    networkAuthenticationType: NetworkAuthenticationType;
    networkEncryptionType: NetworkEncryptionType;
    constructor();

  }

  export class NetworkStateChangeEventDetails {
    hasNewConnectionCost: Boolean;
    hasNewDomainConnectivityLevel: Boolean;
    hasNewHostNameList: Boolean;
    hasNewInternetConnectionProfile: Boolean;
    hasNewNetworkConnectivityLevel: Boolean;
    hasNewWwanRegistrationState: Boolean;
    hasNewTetheringClientCount: Boolean;
    hasNewTetheringOperationalState: Boolean;
    constructor();

  }

  export class NetworkUsage {
    bytesReceived: Number;
    bytesSent: Number;
    connectionDuration: Number;
    constructor();

  }

  export class ProviderNetworkUsage {
    bytesReceived: Number;
    bytesSent: Number;
    providerId: String;
    constructor();

  }

  export class ProxyConfiguration {
    canConnectDirectly: Boolean;
    proxyUris: Object;
    constructor();

  }

  export class RoutePolicy {
    connectionProfile: ConnectionProfile;
    hostName: Object;
    hostNameType: Number;
    constructor();
    constructor(connectionProfile: ConnectionProfile, hostName: Object, type: Number);

  }

  export class WlanConnectionProfileDetails {
    constructor();

    getConnectedSsid(): String;

  }

  export class WwanConnectionProfileDetails {
    accessPointName: String;
    homeProviderId: String;
    iPKind: WwanNetworkIPKind;
    purposeGuids: Object;
    constructor();

    getNetworkRegistrationState(): WwanNetworkRegistrationState;

    getCurrentDataClass(): WwanDataClass;

  }

