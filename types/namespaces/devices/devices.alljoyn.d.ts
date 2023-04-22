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
    static authenticationFailed: number;
    static authenticationRejectedByUser: number;
    static connectionRefused: number;
    static fail: number;
    static insufficientSecurity: number;
    static invalidArgument1: number;
    static invalidArgument2: number;
    static invalidArgument3: number;
    static invalidArgument4: number;
    static invalidArgument5: number;
    static invalidArgument6: number;
    static invalidArgument7: number;
    static invalidArgument8: number;
    static ok: number;
    static operationTimedOut: number;
    static otherEndClosed: number;
    static sslConnectFailed: number;
    static sslIdentityVerificationFailed: number;
    constructor();

  }

  export class AllJoynAboutData {
    defaultDescription: string;
    defaultAppName: string;
    dateOfManufacture: Date;
    defaultManufacturer: string;
    appId: string;
    supportUrl: Object;
    softwareVersion: string;
    modelNumber: string;
    isEnabled: boolean;
    appNames: Object;
    manufacturers: Object;
    descriptions: Object;
    constructor();

  }

  export class AllJoynBusAttachment {
    aboutData: AllJoynAboutData;
    authenticationMechanisms: Object;
    connectionSpecification: string;
    state: AllJoynBusAttachmentState;
    uniqueName: string;
    constructor();
    constructor(connectionSpecification: string);

    static getDefault(): AllJoynBusAttachment;


    static getWatcher(requiredInterfaces: Object): Object;


    pingAsync(uniqueName: string, callback: (error: Error, result: number) => void): void ;

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
    status: number;
    constructor();

  }

  export class AllJoynCredentialsRequestedEventArgs {
    attemptCount: number;
    credentials: AllJoynCredentials;
    peerUniqueName: string;
    requestedUserName: string;
    constructor();

    getDeferral(): Object;

  }

  export class AllJoynCredentialsVerificationRequestedEventArgs {
    authenticationMechanism: AllJoynAuthenticationMechanism;
    peerCertificate: Object;
    peerCertificateErrorSeverity: number;
    peerCertificateErrors: Object;
    peerIntermediateCertificates: Object;
    peerUniqueName: string;
    constructor();

    accept(): void;

    getDeferral(): Object;

  }

  export class AllJoynAuthenticationCompleteEventArgs {
    authenticationMechanism: AllJoynAuthenticationMechanism;
    peerUniqueName: string;
    succeeded: boolean;
    constructor();

  }

  export class AllJoynServiceInfo {
    objectPath: string;
    sessionPort: number;
    uniqueName: string;
    constructor();
    constructor(uniqueName: string, objectPath: string, sessionPort: number);

    static fromIdAsync(deviceId: string, callback: (error: Error, result: AllJoynServiceInfo) => void): void ;


  }

  export class AllJoynAboutDataView {
    aJSoftwareVersion: string;
    appId: string;
    appName: string;
    dateOfManufacture: Date;
    defaultLanguage: Object;
    description: string;
    deviceId: string;
    deviceName: string;
    hardwareVersion: string;
    manufacturer: string;
    modelNumber: string;
    properties: Object;
    softwareVersion: string;
    status: number;
    supportUrl: Object;
    supportedLanguages: Object;
    constructor();

    static getDataBySessionPortAsync(uniqueName: string, busAttachment: AllJoynBusAttachment, sessionPort: number, callback: (error: Error, result: AllJoynAboutDataView) => void): void ;
    static getDataBySessionPortAsync(uniqueName: string, busAttachment: AllJoynBusAttachment, sessionPort: number, language: Object, callback: (error: Error, result: AllJoynAboutDataView) => void): void ;


  }

  export class AllJoynAcceptSessionJoinerEventArgs {
    sameNetwork: boolean;
    samePhysicalNode: boolean;
    sessionPort: number;
    trafficType: AllJoynTrafficType;
    uniqueName: string;
    constructor();
    constructor(uniqueName: string, sessionPort: number, trafficType: AllJoynTrafficType, proximity: number, acceptSessionJoiner: IAllJoynAcceptSessionJoiner);

    accept(): void;

  }

  export class AllJoynSessionJoinedEventArgs {
    session: AllJoynSession;
    constructor();
    constructor(session: AllJoynSession);

  }

  export class AllJoynCredentials {
    timeout: number;
    passwordCredential: Object;
    certificate: Object;
    authenticationMechanism: AllJoynAuthenticationMechanism;
    constructor();

  }

  export class AllJoynSession {
    id: number;
    status: number;
    constructor();

    static getFromServiceInfoAsync(serviceInfo: AllJoynServiceInfo, callback: (error: Error, result: AllJoynSession) => void): void ;
    static getFromServiceInfoAsync(serviceInfo: AllJoynServiceInfo, busAttachment: AllJoynBusAttachment, callback: (error: Error, result: AllJoynSession) => void): void ;


    removeMemberAsync(uniqueName: string, callback: (error: Error, result: number) => void): void ;

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
    uniqueName: string;
    constructor();
    constructor(uniqueName: string);

  }

  export class AllJoynSessionMemberRemovedEventArgs {
    uniqueName: string;
    constructor();
    constructor(uniqueName: string);

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
    constructor(objectPath: string);
    constructor(objectPath: string, busAttachment: AllJoynBusAttachment);

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
    status: number;
    constructor();
    constructor(status: number);

  }

  export class IAllJoynAcceptSessionJoiner {
    constructor();

    accept(): void;

  }

  export class AllJoynProducerStoppedEventArgs {
    status: number;
    constructor();
    constructor(status: number);

  }

  export class AllJoynWatcherStoppedEventArgs {
    status: number;
    constructor();
    constructor(status: number);

  }

  export class AllJoynServiceInfoRemovedEventArgs {
    uniqueName: string;
    constructor();
    constructor(uniqueName: string);

  }

  export class AllJoynMessageInfo {
    senderUniqueName: string;
    constructor();
    constructor(senderUniqueName: string);

  }

