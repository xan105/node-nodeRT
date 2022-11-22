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
    bordered: Boolean;
    compulsory: Boolean;
    label: String;
    constructor();

  }

  export class IVpnRouteFactory {
    constructor();

    createVpnRoute(address: Object, prefixSize: Number): VpnRoute;

  }

  export class VpnRoute {
    prefixSize: Number;
    address: Object;
    constructor();
    constructor(address: Object, prefixSize: Number);

  }

  export class IVpnNamespaceInfoFactory {
    constructor();

    createVpnNamespaceInfo(name: String, dnsServerList: Object, proxyServerList: Object): VpnNamespaceInfo;

  }

  export class VpnNamespaceInfo {
    webProxyServers: Object;
    namespace: String;
    dnsServers: Object;
    constructor();
    constructor(name: String, dnsServerList: Object, proxyServerList: Object);

  }

  export class IVpnInterfaceIdFactory {
    constructor();

    createVpnInterfaceId(address: Array<Number>): VpnInterfaceId;

  }

  export class VpnInterfaceId {
    constructor();
    constructor(address: Array<Number>);

    getAddressInfo(id: Array<Number>): void;

  }

  export class IVpnCredential {
    additionalPin: String;
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
    excludeLocalSubnets: Boolean;
    constructor();

  }

  export class VpnNamespaceAssignment {
    proxyAutoConfigUri: Object;
    namespaceList: Object;
    constructor();

  }

  export class VpnPickedCredential {
    additionalPin: String;
    oldPasswordCredential: Object;
    passkeyCredential: Object;
    constructor();

  }

  export class VpnPacketBuffer {
    transportAffinity: Number;
    status: VpnPacketBufferStatus;
    buffer: Object;
    appId: VpnAppId;
    transportContext: Object;
    constructor();
    constructor(parentBuffer: VpnPacketBuffer, offset: Number, length: Number);

  }

  export class VpnChannelConfiguration {
    customField: String;
    serverHostNameList: Object;
    serverServiceName: String;
    serverUris: Object;
    constructor();

  }

  export class VpnChannel {
    plugInContext: Object;
    configuration: VpnChannelConfiguration;
    id: Number;
    systemHealth: VpnSystemHealth;
    currentRequestTransportContext: Object;
    constructor();

    static processEventAsync(thirdPartyPlugIn: Object, event: Object): void;


    requestCustomPromptAsync(customPromptElement: Object, callback: (error: Error) => void): void ;

    requestCredentialsAsync(credType: VpnCredentialType, credOptions: Number, certificate: Object, callback: (error: Error, result: VpnCredential) => void): void ;
    requestCredentialsAsync(credType: VpnCredentialType, credOptions: Number, callback: (error: Error, result: VpnCredential) => void): void ;
    requestCredentialsAsync(credType: VpnCredentialType, callback: (error: Error, result: VpnCredential) => void): void ;

    associateTransport(mainOuterTunnelTransport: Object, optionalOuterTunnelTransport: Object): void;

    start(assignedClientIPv4list: Object, assignedClientIPv6list: Object, vpnInterfaceId: VpnInterfaceId, routeScope: VpnRouteAssignment, namespaceScope: VpnNamespaceAssignment, mtuSize: Number, maxFrameSize: Number, optimizeForLowCostNetwork: Boolean, mainOuterTunnelTransport: Object, optionalOuterTunnelTransport: Object): void;

    stop(): void;

    requestCredentials(credType: VpnCredentialType, isRetry: Boolean, isSingleSignOnCredential: Boolean, certificate: Object): VpnPickedCredential;

    requestVpnPacketBuffer(type: VpnDataPathType, vpnPacketBuffer: Object): void;

    logDiagnosticMessage(message: String): void;

    requestCustomPrompt(customPrompt: Object): void;

    setErrorMessage(message: String): void;

    setAllowedSslTlsVersions(tunnelTransport: Object, useTls12: Boolean): void;

    startWithMainTransport(assignedClientIPv4list: Object, assignedClientIPv6list: Object, vpnInterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedDomainName: VpnDomainNameAssignment, mtuSize: Number, maxFrameSize: Number, Reserved: Boolean, mainOuterTunnelTransport: Object): void;

    startExistingTransports(assignedClientIPv4list: Object, assignedClientIPv6list: Object, vpnInterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedDomainName: VpnDomainNameAssignment, mtuSize: Number, maxFrameSize: Number, Reserved: Boolean): void;

    getVpnSendPacketBuffer(): VpnPacketBuffer;

    getVpnReceivePacketBuffer(): VpnPacketBuffer;

    terminateConnection(message: String): void;

    startWithTrafficFilter(assignedClientIpv4List: Object, assignedClientIpv6List: Object, vpnInterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedNamespace: VpnDomainNameAssignment, mtuSize: Number, maxFrameSize: Number, reserved: Boolean, mainOuterTunnelTransport: Object, optionalOuterTunnelTransport: Object, assignedTrafficFilters: VpnTrafficFilterAssignment): void;
    startWithTrafficFilter(assignedClientIpv4Addresses: Object, assignedClientIpv6Addresses: Object, vpninterfaceId: VpnInterfaceId, assignedRoutes: VpnRouteAssignment, assignedNamespace: VpnDomainNameAssignment, mtuSize: Number, maxFrameSize: Number, reserved: Boolean, transports: Object, assignedTrafficFilters: VpnTrafficFilterAssignment): void;

    addAndAssociateTransport(transport: Object, context: Object): void;

    replaceAndAssociateTransport(transport: Object, context: Object): void;

    startReconnectingTransport(transport: Object, context: Object): void;

    getSlotTypeForTransportContext(context: Object): Number;

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
    compulsory: Boolean;
    displayName: String;
    emphasized: Boolean;
    constructor();

  }

  export class VpnCredential {
    additionalPin: String;
    certificateCredential: Object;
    oldPasswordCredential: Object;
    passkeyCredential: Object;
    constructor();

  }

  export class VpnTrafficFilterAssignment {
    allowOutbound: Boolean;
    allowInbound: Boolean;
    trafficFilterList: Object;
    constructor();

  }

  export class IVpnChannelStatics {
    constructor();

    processEventAsync(thirdPartyPlugIn: Object, event: Object): void;

  }

  export class IVpnPacketBufferFactory {
    constructor();

    createVpnPacketBuffer(parentBuffer: VpnPacketBuffer, offset: Number, length: Number): VpnPacketBuffer;

  }

  export class VpnAppId {
    value: String;
    type: VpnAppIdType;
    constructor();
    constructor(type: VpnAppIdType, value: String);

  }

  export class IVpnDomainNameInfoFactory {
    constructor();

    createVpnDomainNameInfo(name: String, nameType: VpnDomainNameType, dnsServerList: Object, proxyServerList: Object): VpnDomainNameInfo;

  }

  export class VpnDomainNameInfo {
    domainNameType: VpnDomainNameType;
    domainName: Object;
    dnsServers: Object;
    webProxyServers: Object;
    webProxyUris: Object;
    constructor();
    constructor(name: String, nameType: VpnDomainNameType, dnsServerList: Object, proxyServerList: Object);

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
    alwaysOn: Boolean;
    appTriggers: Object;
    domainNameInfoList: Object;
    profileName: String;
    rememberCredentials: Boolean;
    routes: Object;
    trafficFilters: Object;
    constructor();

  }

  export class VpnPacketBufferList {
    status: VpnPacketBufferStatus;
    size: Number;
    constructor();

    append(nextVpnPacketBuffer: VpnPacketBuffer): void;

    addAtBegin(nextVpnPacketBuffer: VpnPacketBuffer): void;

    removeAtEnd(): VpnPacketBuffer;

    removeAtBegin(): VpnPacketBuffer;

    clear(): void;

    first(): Object;

  }

  export class VpnCustomEditBox {
    noEcho: Boolean;
    defaultText: String;
    text: String;
    label: String;
    compulsory: Boolean;
    bordered: Boolean;
    constructor();

  }

  export class VpnCustomPromptTextInput {
    emphasized: Boolean;
    displayName: String;
    compulsory: Boolean;
    placeholderText: String;
    isTextHidden: Boolean;
    text: String;
    constructor();

  }

  export class VpnCustomComboBox {
    optionsText: Object;
    selected: Number;
    label: String;
    compulsory: Boolean;
    bordered: Boolean;
    constructor();

  }

  export class VpnCustomPromptOptionSelector {
    emphasized: Boolean;
    displayName: String;
    compulsory: Boolean;
    options: Object;
    selectedIndex: Number;
    constructor();

  }

  export class VpnCustomTextBox {
    label: String;
    compulsory: Boolean;
    bordered: Boolean;
    displayText: String;
    constructor();

  }

  export class VpnCustomPromptText {
    emphasized: Boolean;
    displayName: String;
    compulsory: Boolean;
    text: String;
    constructor();

  }

  export class VpnCustomCheckBox {
    initialCheckState: Boolean;
    checked: Boolean;
    label: String;
    compulsory: Boolean;
    bordered: Boolean;
    constructor();

  }

  export class VpnCustomPromptBooleanInput {
    initialValue: Boolean;
    value: Boolean;
    emphasized: Boolean;
    displayName: String;
    compulsory: Boolean;
    constructor();

  }

  export class VpnCustomErrorBox {
    label: String;
    compulsory: Boolean;
    bordered: Boolean;
    constructor();

  }

  export class VpnPlugInProfile {
    vpnPluginPackageFamilyName: String;
    customConfiguration: String;
    serverUris: Object;
    requireVpnClientAppUI: Boolean;
    connectionStatus: VpnManagementConnectionStatus;
    profileName: String;
    rememberCredentials: Boolean;
    alwaysOn: Boolean;
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
    eapConfiguration: String;
    nativeProtocolType: VpnNativeProtocolType;
    servers: Object;
    requireVpnClientAppUI: Boolean;
    connectionStatus: VpnManagementConnectionStatus;
    profileName: String;
    rememberCredentials: Boolean;
    alwaysOn: Boolean;
    routes: Object;
    appTriggers: Object;
    trafficFilters: Object;
    domainNameInfoList: Object;
    constructor();

  }

  export class VpnManagementAgent {
    constructor();

    addProfileFromXmlAsync(xml: String, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    addProfileFromObjectAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    updateProfileFromXmlAsync(xml: String, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    updateProfileFromObjectAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    getProfilesAsync(callback: (error: Error, result: Object) => void): void ;

    deleteProfileAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    connectProfileAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    connectProfileWithPasswordCredentialAsync(profile: IVpnProfile, passwordCredential: Object, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

    disconnectProfileAsync(profile: IVpnProfile, callback: (error: Error, result: VpnManagementErrorStatus) => void): void ;

  }

