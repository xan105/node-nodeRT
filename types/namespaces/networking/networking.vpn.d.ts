  export enum VpnDataPathType {
    send,
    receive,
  }

  export enum VpnChannelActivityEventType {
    idle,
    active,
  }

  export enum VpnCredentialType {
    usernamePassword,
    usernameOtpPin,
    usernamePasswordAndPin,
    usernamePasswordChange,
    smartCard,
    protectedCertificate,
    unProtectedCertificate,
  }

  export enum VpnPacketBufferStatus {
    ok,
    invalidBufferSize,
  }

  export enum VpnChannelRequestCredentialsOptions {
    none,
    retrying,
    useForSingleSignIn,
  }

  export enum VpnDomainNameType {
    suffix,
    fullyQualified,
    reserved,
  }

  export enum VpnAppIdType {
    packageFamilyName,
    fullyQualifiedBinaryName,
    filePath,
  }

  export enum VpnIPProtocol {
    none,
    tcp,
    udp,
    icmp,
    ipv6Icmp,
    igmp,
    pgm,
  }

  export enum VpnRoutingPolicyType {
    splitRouting,
    forceAllTrafficOverVpn,
  }

  export enum VpnManagementConnectionStatus {
    disconnected,
    disconnecting,
    connected,
    connecting,
  }

  export enum VpnNativeProtocolType {
    pptp,
    l2tp,
    ipsecIkev2,
  }

  export enum VpnAuthenticationMethod {
    mschapv2,
    eap,
    certificate,
    presharedKey,
  }

  export enum VpnManagementErrorStatus {
    ok,
    other,
    invalidXmlSyntax,
    profileNameTooLong,
    profileInvalidAppId,
    accessDenied,
    cannotFindProfile,
    alreadyDisconnecting,
    alreadyConnected,
    generalAuthenticationFailure,
    eapFailure,
    smartCardFailure,
    certificateFailure,
    serverConfiguration,
    noConnection,
    serverConnection,
    userNamePassword,
    dnsNotResolvable,
    invalidIP,
  }

  export class IVpnPlugIn {
    constructor();

    connect(channel: VpnChannel): void;

    disconnect(channel: VpnChannel): void;

    getKeepAlivePayload(channel: VpnChannel, keepAlivePacket: Object): void;

    encapsulate(channel: VpnChannel, packets: VpnPacketBufferList, encapulatedPackets: VpnPacketBufferList): void;

    decapsulate(channel: VpnChannel, encapBuffer: VpnPacketBuffer, decapsulatedPackets: VpnPacketBufferList, controlPacketsToSend: VpnPacketBufferList): void;

  }

  export class IVpnCustomPrompt {
    bordered: boolean;
    compulsory: boolean;
    label: string;
    constructor();

  }

  export class IVpnRouteFactory {
    constructor();

    createVpnRoute(address: Object, prefixSize: number): VpnRoute;

  }

  export class VpnRoute {
    prefixSize: number;
    address: Object;
    constructor();
    constructor(address: Object, prefixSize: number);

  }

  export class IVpnNamespaceInfoFactory {
    constructor();

    createVpnNamespaceInfo(name: string, dnsServerList: Object, proxyServerList: Object): VpnNamespaceInfo;

  }

  export class VpnNamespaceInfo {
    webProxyServers: Object;
    namespace: string;
    dnsServers: Object;
    constructor();
    constructor(name: string, dnsServerList: Object, proxyServerList: Object);

  }

  export class IVpnInterfaceIdFactory {
    constructor();

    createVpnInterfaceId(address: Array<number>): VpnInterfaceId;

  }

  export class VpnInterfaceId {
    constructor();
    constructor(address: Array<number>);

    getAddressInfo(id: Array<number>): void;

  }

  export class IVpnCredential {
    additionalPin: string;
    certificateCredential: Object;
    oldPasswordCredential: Object;
    passkeyCredential: Object;
    constructor();

  }

  export class VpnRouteAssignment {
    ipv6InclusionRoutes: Object;
    ipv6ExclusionRoutes: Object;
    ipv4InclusionRoutes: Object;
    ipv4ExclusionRoutes: Object;
    excludeLocalSubnets: boolean;
    constructor();

  }

  export class VpnNamespaceAssignment {
    proxyAutoConfigUri: Object;
    namespaceList: Object;
    constructor();

  }

  export class VpnPickedCredential {
    additionalPin: string;
    oldPasswordCredential: Object;
    passkeyCredential: Object;
    constructor();

  }

  export class VpnPacketBuffer {
    transportAffinity: number;
    status: VpnPacketBufferStatus;
    buffer: Object;
    appId: VpnAppId;
    transportContext: Object;
    constructor();
    constructor(parentBuffer: VpnPacketBuffer, offset: number, length: number);

  }

  export class VpnChannelConfiguration {
    customField: string;
    serverHostNameList: Object;
    serverServiceName: string;
    serverUris: Object;
    constructor();

  }

  export class VpnChannel {
    plugInContext: Object;
    configuration: VpnChannelConfiguration;
    id: number;
    systemHealth: VpnSystemHealth;
    currentRequestTransportContext: Object;
    constructor();

    static processEventAsync(thirdPartyPlugIn: Object, event: Object): void;


    requestCustomPromptAsync(customPromptElement: Object, callback: (error: Error) => void): void ;

    requestCredentialsAsync(credType: VpnCredentialType, credOptions: number, certificate: Object, callback: (error: Error, result: VpnCredential) => void): void ;
    requestCredentialsAsync(credType: VpnCredentialType, credOptions: number, callback: (error: Error, result: VpnCredential) => void): void ;
    requestCredentialsAsync(credType: VpnCredentialType, callback: (error: Error, result: VpnCredential) => void): void ;

    associateTransport(mainOuterTunnelTransport: Object, optionalOuterTunnelTransport: Object): void;

    start(assignedClientIPv4list: Object, assignedClientIPv6list: Object, vpnInterfaceId: VpnInterfaceId, routeScope: VpnRouteAssignment, namespaceScope: VpnNamespaceAssignment, mtuSize: number, maxFrameSize: number, optimizeForLowCostNetwork: boolean, mainOuterTunnelTransport: Object, optionalOuterTunnelTransport: Object): void;

    stop(): void;

    requestCredentials(credType: VpnCredentialType, isRetry: boolean, isSingleSignOnCredential: boolean, certificate: Object): VpnPickedCredential;

    requestVpnPacketBuffer(type: VpnDataPathType, vpnPacketBuffer: Object): void;

    logDiagnosticMessage(message: string): void;

    requestCustomPrompt(customPrompt: Object): void;

    setErrorMessage(message: string): void;

    setAllowedSslTlsVersions(tunnelTransport: Object, useTls12: boolean): void;

    startWithMainTransport(assignedClientIPv4list: Object, assignedClientIPv6list: Object, vpnInterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedDomainName: VpnDomainNameAssignment, mtuSize: number, maxFrameSize: number, Reserved: boolean, mainOuterTunnelTransport: Object): void;

    startExistingTransports(assignedClientIPv4list: Object, assignedClientIPv6list: Object, vpnInterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedDomainName: VpnDomainNameAssignment, mtuSize: number, maxFrameSize: number, Reserved: boolean): void;

    getVpnSendPacketBuffer(): VpnPacketBuffer;

    getVpnReceivePacketBuffer(): VpnPacketBuffer;

    terminateConnection(message: string): void;

    startWithTrafficFilter(assignedClientIpv4List: Object, assignedClientIpv6List: Object, vpnInterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedNamespace: VpnDomainNameAssignment, mtuSize: number, maxFrameSize: number, reserved: boolean, mainOuterTunnelTransport: Object, optionalOuterTunnelTransport: Object, assignedTrafficFilters: VpnTrafficFilterAssignment): void;
    startWithTrafficFilter(assignedClientIpv4Addresses: Object, assignedClientIpv6Addresses: Object, vpninterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedNamespace: VpnDomainNameAssignment, mtuSize: number, maxFrameSize: number, reserved: boolean, transports: Object, assignedTrafficFilters: VpnTrafficFilterAssignment): void;

    addAndAssociateTransport(transport: Object, context: Object): void;

    replaceAndAssociateTransport(transport: Object, context: Object): void;

    startReconnectingTransport(transport: Object, context: Object): void;

    getSlotTypeForTransportContext(context: Object): number;

    addListener(type: "ActivityChange", listener: (ev: Event) => void): void ;
    removeListener(type: "ActivityChange", listener: (ev: Event) => void): void ;
    on(type: "ActivityChange", listener: (ev: Event) => void): void ;
    off(type: "ActivityChange", listener: (ev: Event) => void): void ;
    
    addListener(type: "ActivityStateChange", listener: (ev: Event) => void): void ;
    removeListener(type: "ActivityStateChange", listener: (ev: Event) => void): void ;
    on(type: "ActivityStateChange", listener: (ev: Event) => void): void ;
    off(type: "ActivityStateChange", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class VpnChannelActivityEventArgs {
    type: VpnChannelActivityEventType;
    constructor();

  }

  export class VpnSystemHealth {
    statementOfHealth: Object;
    constructor();

  }

  export class VpnDomainNameAssignment {
    proxyAutoConfigurationUri: Object;
    domainNameList: Object;
    constructor();

  }

  export class VpnChannelActivityStateChangedArgs {
    activityState: VpnChannelActivityEventType;
    constructor();

  }

  export class IVpnCustomPromptElement {
    compulsory: boolean;
    displayName: string;
    emphasized: boolean;
    constructor();

  }

  export class VpnCredential {
    additionalPin: string;
    certificateCredential: Object;
    oldPasswordCredential: Object;
    passkeyCredential: Object;
    constructor();

  }

  export class VpnTrafficFilterAssignment {
    allowOutbound: boolean;
    allowInbound: boolean;
    trafficFilterList: Object;
    constructor();

  }

  export class IVpnChannelStatics {
    constructor();

    processEventAsync(thirdPartyPlugIn: Object, event: Object): void;

  }

  export class IVpnPacketBufferFactory {
    constructor();

    createVpnPacketBuffer(parentBuffer: VpnPacketBuffer, offset: number, length: number): VpnPacketBuffer;

  }

  export class VpnAppId {
    value: string;
    type: VpnAppIdType;
    constructor();
    constructor(type: VpnAppIdType, value: string);

  }

  export class IVpnDomainNameInfoFactory {
    constructor();

    createVpnDomainNameInfo(name: string, nameType: VpnDomainNameType, dnsServerList: Object, proxyServerList: Object): VpnDomainNameInfo;

  }

  export class VpnDomainNameInfo {
    domainNameType: VpnDomainNameType;
    domainName: Object;
    dnsServers: Object;
    webProxyServers: Object;
    webProxyUris: Object;
    constructor();
    constructor(name: string, nameType: VpnDomainNameType, dnsServerList: Object, proxyServerList: Object);

  }

  export class VpnTrafficFilter {
    routingPolicyType: VpnRoutingPolicyType;
    protocol: VpnIPProtocol;
    appId: VpnAppId;
    appClaims: Object;
    localAddressRanges: Object;
    localPortRanges: Object;
    remoteAddressRanges: Object;
    remotePortRanges: Object;
    constructor();
    constructor(appId: VpnAppId);

  }

  export class IVpnProfile {
    alwaysOn: boolean;
    appTriggers: Object;
    domainNameInfoList: Object;
    profileName: string;
    rememberCredentials: boolean;
    routes: Object;
    trafficFilters: Object;
    constructor();

  }

  export class VpnPacketBufferList {
    status: VpnPacketBufferStatus;
    size: number;
    constructor();

    append(nextVpnPacketBuffer: VpnPacketBuffer): void;

    addAtBegin(nextVpnPacketBuffer: VpnPacketBuffer): void;

    removeAtEnd(): VpnPacketBuffer;

    removeAtBegin(): VpnPacketBuffer;

    clear(): void;

    first(): Object;

  }

  export class VpnCustomEditBox {
    noEcho: boolean;
    defaultText: string;
    text: string;
    label: string;
    compulsory: boolean;
    bordered: boolean;
    constructor();

  }

  export class VpnCustomPromptTextInput {
    emphasized: boolean;
    displayName: string;
    compulsory: boolean;
    placeholderText: string;
    isTextHidden: boolean;
    text: string;
    constructor();

  }

  export class VpnCustomComboBox {
    optionsText: Object;
    selected: number;
    label: string;
    compulsory: boolean;
    bordered: boolean;
    constructor();

  }

  export class VpnCustomPromptOptionSelector {
    emphasized: boolean;
    displayName: string;
    compulsory: boolean;
    options: Object;
    selectedIndex: number;
    constructor();

  }

  export class VpnCustomTextBox {
    label: string;
    compulsory: boolean;
    bordered: boolean;
    displayText: string;
    constructor();

  }

  export class VpnCustomPromptText {
    emphasized: boolean;
    displayName: string;
    compulsory: boolean;
    text: string;
    constructor();

  }

  export class VpnCustomCheckBox {
    initialCheckState: boolean;
    checked: boolean;
    label: string;
    compulsory: boolean;
    bordered: boolean;
    constructor();

  }

  export class VpnCustomPromptBooleanInput {
    initialValue: boolean;
    value: boolean;
    emphasized: boolean;
    displayName: string;
    compulsory: boolean;
    constructor();

  }

  export class VpnCustomErrorBox {
    label: string;
    compulsory: boolean;
    bordered: boolean;
    constructor();

  }

  export class VpnPlugInProfile {
    vpnPluginPackageFamilyName: string;
    customConfiguration: string;
    serverUris: Object;
    requireVpnClientAppUI: boolean;
    connectionStatus: VpnManagementConnectionStatus;
    profileName: string;
    rememberCredentials: boolean;
    alwaysOn: boolean;
    appTriggers: Object;
    domainNameInfoList: Object;
    routes: Object;
    trafficFilters: Object;
    constructor();

  }

  export class VpnNativeProfile {
    userAuthenticationMethod: VpnAuthenticationMethod;
    tunnelAuthenticationMethod: VpnAuthenticationMethod;
    routingPolicyType: VpnRoutingPolicyType;
    eapConfiguration: string;
    nativeProtocolType: VpnNativeProtocolType;
    servers: Object;
    requireVpnClientAppUI: boolean;
    connectionStatus: VpnManagementConnectionStatus;
    profileName: string;
    rememberCredentials: boolean;
    alwaysOn: boolean;
    routes: Object;
    appTriggers: Object;
    trafficFilters: Object;
    domainNameInfoList: Object;
    constructor();

  }

  export class VpnManagementAgent {
    constructor();

    addProfileFromXmlAsync(xml: string, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    addProfileFromObjectAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    updateProfileFromXmlAsync(xml: string, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    updateProfileFromObjectAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    getProfilesAsync(callback: (error: Error, result: Object) => void): void ;

    deleteProfileAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    connectProfileAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    connectProfileWithPasswordCredentialAsync(profile: IVpnProfile, passwordCredential: Object, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    disconnectProfileAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

  }

