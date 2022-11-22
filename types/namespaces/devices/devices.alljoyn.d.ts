  export enum AllJoynAuthenticationMechanism {
    none,
    srpAnonymous,
    srpLogon,
    ecdheNull,
    ecdhePsk,
    ecdheEcdsa,
    ecdheSpeke,
  }

  export enum AllJoynBusAttachmentState {
    disconnected,
    connecting,
    connected,
    disconnecting,
  }

  export enum AllJoynTrafficType {
    unknown,
    messages,
    rawUnreliable,
    rawReliable,
  }

  export enum AllJoynSessionLostReason {
    none,
    producerLeftSession,
    producerClosedAbruptly,
    removedByProducer,
    linkTimeout,
    other,
  }

  export class AllJoynStatus {
    static authenticationFailed: Number;
    static authenticationRejectedByUser: Number;
    static connectionRefused: Number;
    static fail: Number;
    static insufficientSecurity: Number;
    static invalidArgument1: Number;
    static invalidArgument2: Number;
    static invalidArgument3: Number;
    static invalidArgument4: Number;
    static invalidArgument5: Number;
    static invalidArgument6: Number;
    static invalidArgument7: Number;
    static invalidArgument8: Number;
    static ok: Number;
    static operationTimedOut: Number;
    static otherEndClosed: Number;
    static sslConnectFailed: Number;
    static sslIdentityVerificationFailed: Number;
    constructor();

  }

  export class AllJoynAboutData {
    defaultDescription: String;
    defaultAppName: String;
    dateOfManufacture: Date;
    defaultManufacturer: String;
    appId: String;
    supportUrl: Object;
    softwareVersion: String;
    modelNumber: String;
    isEnabled: Boolean;
    appNames: Object;
    manufacturers: Object;
    descriptions: Object;
    constructor();

  }

  export class AllJoynBusAttachment {
    aboutData: AllJoynAboutData;
    authenticationMechanisms: Object;
    connectionSpecification: String;
    state: AllJoynBusAttachmentState;
    uniqueName: String;
    constructor();
    constructor(connectionSpecification: String);

    static getDefault(): AllJoynBusAttachment;


    static getWatcher(requiredInterfaces: Object): Object;


    pingAsync(uniqueName: String, callback: (error: Error, result: Number) => void): void ;

    getAboutDataAsync(serviceInfo: AllJoynServiceInfo, callback: (error: Error, result: AllJoynAboutDataView) => void): void ;
    getAboutDataAsync(serviceInfo: AllJoynServiceInfo, language: Object, callback: (error: Error, result: AllJoynAboutDataView) => void): void ;

    connect(): void;

    disconnect(): void;

    addListener(type: "AuthenticationComplete", listener: (ev: Event) => void): void ;
    removeListener(type: "AuthenticationComplete", listener: (ev: Event) => void): void ;
    on(type: "AuthenticationComplete", listener: (ev: Event) => void): void ;
    off(type: "AuthenticationComplete", listener: (ev: Event) => void): void ;
    
    addListener(type: "CredentialsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CredentialsRequested", listener: (ev: Event) => void): void ;
    on(type: "CredentialsRequested", listener: (ev: Event) => void): void ;
    off(type: "CredentialsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "CredentialsVerificationRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "CredentialsVerificationRequested", listener: (ev: Event) => void): void ;
    on(type: "CredentialsVerificationRequested", listener: (ev: Event) => void): void ;
    off(type: "CredentialsVerificationRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "AcceptSessionJoinerRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AcceptSessionJoinerRequested", listener: (ev: Event) => void): void ;
    on(type: "AcceptSessionJoinerRequested", listener: (ev: Event) => void): void ;
    off(type: "AcceptSessionJoinerRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "SessionJoined", listener: (ev: Event) => void): void ;
    removeListener(type: "SessionJoined", listener: (ev: Event) => void): void ;
    on(type: "SessionJoined", listener: (ev: Event) => void): void ;
    off(type: "SessionJoined", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AllJoynBusAttachmentStateChangedEventArgs {
    state: AllJoynBusAttachmentState;
    status: Number;
    constructor();

  }

  export class AllJoynCredentialsRequestedEventArgs {
    attemptCount: Number;
    credentials: AllJoynCredentials;
    peerUniqueName: String;
    requestedUserName: String;
    constructor();

    getDeferral(): Object;

  }

  export class AllJoynCredentialsVerificationRequestedEventArgs {
    authenticationMechanism: AllJoynAuthenticationMechanism;
    peerCertificate: Object;
    peerCertificateErrorSeverity: Number;
    peerCertificateErrors: Object;
    peerIntermediateCertificates: Object;
    peerUniqueName: String;
    constructor();

    accept(): void;

    getDeferral(): Object;

  }

  export class AllJoynAuthenticationCompleteEventArgs {
    authenticationMechanism: AllJoynAuthenticationMechanism;
    peerUniqueName: String;
    succeeded: Boolean;
    constructor();

  }

  export class AllJoynServiceInfo {
    objectPath: String;
    sessionPort: Number;
    uniqueName: String;
    constructor();
    constructor(uniqueName: String, objectPath: String, sessionPort: Number);

    static fromIdAsync(deviceId: String, callback: (error: Error, result: AllJoynServiceInfo) => void): void ;


  }

  export class AllJoynAboutDataView {
    aJSoftwareVersion: String;
    appId: String;
    appName: String;
    dateOfManufacture: Date;
    defaultLanguage: Object;
    description: String;
    deviceId: String;
    deviceName: String;
    hardwareVersion: String;
    manufacturer: String;
    modelNumber: String;
    properties: Object;
    softwareVersion: String;
    status: Number;
    supportUrl: Object;
    supportedLanguages: Object;
    constructor();

    static getDataBySessionPortAsync(uniqueName: String, busAttachment: AllJoynBusAttachment, sessionPort: Number, callback: (error: Error, result: AllJoynAboutDataView) => void): void ;
    static getDataBySessionPortAsync(uniqueName: String, busAttachment: AllJoynBusAttachment, sessionPort: Number, language: Object, callback: (error: Error, result: AllJoynAboutDataView) => void): void ;


  }

  export class AllJoynAcceptSessionJoinerEventArgs {
    sameNetwork: Boolean;
    samePhysicalNode: Boolean;
    sessionPort: Number;
    trafficType: AllJoynTrafficType;
    uniqueName: String;
    constructor();
    constructor(uniqueName: String, sessionPort: Number, trafficType: AllJoynTrafficType, proximity: Number, acceptSessionJoiner: IAllJoynAcceptSessionJoiner);

    accept(): void;

  }

  export class AllJoynSessionJoinedEventArgs {
    session: AllJoynSession;
    constructor();
    constructor(session: AllJoynSession);

  }

  export class AllJoynCredentials {
    timeout: Number;
    passwordCredential: Object;
    certificate: Object;
    authenticationMechanism: AllJoynAuthenticationMechanism;
    constructor();

  }

  export class AllJoynSession {
    id: Number;
    status: Number;
    constructor();

    static getFromServiceInfoAsync(serviceInfo: AllJoynServiceInfo, callback: (error: Error, result: AllJoynSession) => void): void ;
    static getFromServiceInfoAsync(serviceInfo: AllJoynServiceInfo, busAttachment: AllJoynBusAttachment, callback: (error: Error, result: AllJoynSession) => void): void ;


    removeMemberAsync(uniqueName: String, callback: (error: Error, result: Number) => void): void ;

    addListener(type: "Lost", listener: (ev: Event) => void): void ;
    removeListener(type: "Lost", listener: (ev: Event) => void): void ;
    on(type: "Lost", listener: (ev: Event) => void): void ;
    off(type: "Lost", listener: (ev: Event) => void): void ;
    
    addListener(type: "MemberAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "MemberAdded", listener: (ev: Event) => void): void ;
    on(type: "MemberAdded", listener: (ev: Event) => void): void ;
    off(type: "MemberAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "MemberRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "MemberRemoved", listener: (ev: Event) => void): void ;
    on(type: "MemberRemoved", listener: (ev: Event) => void): void ;
    off(type: "MemberRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AllJoynSessionMemberAddedEventArgs {
    uniqueName: String;
    constructor();
    constructor(uniqueName: String);

  }

  export class AllJoynSessionMemberRemovedEventArgs {
    uniqueName: String;
    constructor();
    constructor(uniqueName: String);

  }

  export class AllJoynSessionLostEventArgs {
    reason: AllJoynSessionLostReason;
    constructor();
    constructor(reason: AllJoynSessionLostReason);

  }

  export class IAllJoynProducer {
    constructor();

    setBusObject(busObject: AllJoynBusObject): void;

  }

  export class AllJoynBusObject {
    busAttachment: AllJoynBusAttachment;
    session: AllJoynSession;
    constructor();
    constructor(objectPath: String);
    constructor(objectPath: String, busAttachment: AllJoynBusAttachment);

    start(): void;

    stop(): void;

    addProducer(producer: IAllJoynProducer): void;

    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AllJoynBusObjectStoppedEventArgs {
    status: Number;
    constructor();
    constructor(status: Number);

  }

  export class IAllJoynAcceptSessionJoiner {
    constructor();

    accept(): void;

  }

  export class AllJoynProducerStoppedEventArgs {
    status: Number;
    constructor();
    constructor(status: Number);

  }

  export class AllJoynWatcherStoppedEventArgs {
    status: Number;
    constructor();
    constructor(status: Number);

  }

  export class AllJoynServiceInfoRemovedEventArgs {
    uniqueName: String;
    constructor();
    constructor(uniqueName: String);

  }

  export class AllJoynMessageInfo {
    senderUniqueName: String;
    constructor();
    constructor(senderUniqueName: String);

  }

