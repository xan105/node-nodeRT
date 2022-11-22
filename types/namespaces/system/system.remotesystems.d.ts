  export enum RemoteSystemStatus {
    unavailable,
    discoveringAvailability,
    available,
    unknown,
  }

  export enum RemoteSystemDiscoveryType {
    any,
    proximal,
    cloud,
    spatiallyProximal,
  }

  export enum RemoteSystemStatusType {
    any,
    available,
  }

  export enum RemoteSystemAccessStatus {
    unspecified,
    allowed,
    deniedByUser,
    deniedBySystem,
  }

  export enum RemoteSystemAuthorizationKind {
    sameUser,
    anonymous,
  }

  export enum RemoteSystemPlatform {
    unknown,
    windows,
    android,
    ios,
    linux,
  }

  export enum RemoteSystemWatcherError {
    unknown,
    internetNotAvailable,
    authenticationError,
  }

  export enum RemoteSystemSessionJoinStatus {
    success,
    sessionLimitsExceeded,
    operationAborted,
    sessionUnavailable,
    rejectedByController,
  }

  export enum RemoteSystemSessionWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export enum RemoteSystemSessionParticipantWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export enum RemoteSystemSessionCreationStatus {
    success,
    sessionLimitsExceeded,
    operationAborted,
  }

  export enum RemoteSystemSessionDisconnectedReason {
    sessionUnavailable,
    removedByController,
    sessionClosed,
  }

  export enum RemoteSystemSessionMessageChannelReliability {
    reliable,
    unreliable,
  }

  export class IRemoteSystemFilter {
    constructor();

  }

  export class RemoteSystem {
    displayName: String;
    id: String;
    isAvailableByProximity: Boolean;
    kind: String;
    status: RemoteSystemStatus;
    isAvailableBySpatialProximity: Boolean;
    manufacturerDisplayName: String;
    modelDisplayName: String;
    platform: RemoteSystemPlatform;
    constructor();

    static findByHostNameAsync(hostName: Object, callback: (error: Error, result: RemoteSystem) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: RemoteSystemAccessStatus) => void): void ;


    static isAuthorizationKindEnabled(kind: RemoteSystemAuthorizationKind): Boolean;


    static createWatcher(): RemoteSystemWatcher;
    static createWatcher(filters: Object): RemoteSystemWatcher;


    getCapabilitySupportedAsync(capabilityName: String, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class RemoteSystemWatcher {
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "RemoteSystemAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "RemoteSystemAdded", listener: (ev: Event) => void): void ;
    on(type: "RemoteSystemAdded", listener: (ev: Event) => void): void ;
    off(type: "RemoteSystemAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "RemoteSystemRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "RemoteSystemRemoved", listener: (ev: Event) => void): void ;
    on(type: "RemoteSystemRemoved", listener: (ev: Event) => void): void ;
    off(type: "RemoteSystemRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "RemoteSystemUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "RemoteSystemUpdated", listener: (ev: Event) => void): void ;
    on(type: "RemoteSystemUpdated", listener: (ev: Event) => void): void ;
    off(type: "RemoteSystemUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    removeListener(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    on(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    off(type: "ErrorOccurred", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class KnownRemoteSystemCapabilities {
    static appService: String;
    static launchUri: String;
    static remoteSession: String;
    static spatialEntity: String;
    constructor();

  }

  export class RemoteSystemAuthorizationKindFilter {
    remoteSystemAuthorizationKind: RemoteSystemAuthorizationKind;
    constructor();
    constructor(remoteSystemAuthorizationKind: RemoteSystemAuthorizationKind);

  }

  export class RemoteSystemAddedEventArgs {
    remoteSystem: RemoteSystem;
    constructor();

  }

  export class RemoteSystemUpdatedEventArgs {
    remoteSystem: RemoteSystem;
    constructor();

  }

  export class RemoteSystemRemovedEventArgs {
    remoteSystemId: String;
    constructor();

  }

  export class RemoteSystemEnumerationCompletedEventArgs {
    constructor();

  }

  export class RemoteSystemWatcherErrorOccurredEventArgs {
    error: RemoteSystemWatcherError;
    constructor();

  }

  export class RemoteSystemConnectionRequest {
    remoteSystem: RemoteSystem;
    constructor();
    constructor(remoteSystem: RemoteSystem);

  }

  export class RemoteSystemKinds {
    static desktop: String;
    static holographic: String;
    static hub: String;
    static phone: String;
    static xbox: String;
    static iot: String;
    static laptop: String;
    static tablet: String;
    constructor();

  }

  export class RemoteSystemKindFilter {
    remoteSystemKinds: Object;
    constructor();
    constructor(remoteSystemKinds: Object);

  }

  export class RemoteSystemDiscoveryTypeFilter {
    remoteSystemDiscoveryType: RemoteSystemDiscoveryType;
    constructor();
    constructor(discoveryType: RemoteSystemDiscoveryType);

  }

  export class RemoteSystemStatusTypeFilter {
    remoteSystemStatusType: RemoteSystemStatusType;
    constructor();
    constructor(remoteSystemStatusType: RemoteSystemStatusType);

  }

  export class RemoteSystemSession {
    controllerDisplayName: String;
    displayName: String;
    id: String;
    constructor();

    static createWatcher(): RemoteSystemSessionWatcher;


    sendInvitationAsync(invitee: RemoteSystem, callback: (error: Error, result: Boolean) => void): void ;

    createParticipantWatcher(): RemoteSystemSessionParticipantWatcher;

    close(): void;
    addListener(type: "Disconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "Disconnected", listener: (ev: Event) => void): void ;
    on(type: "Disconnected", listener: (ev: Event) => void): void ;
    off(type: "Disconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RemoteSystemSessionJoinResult {
    session: RemoteSystemSession;
    status: RemoteSystemSessionJoinStatus;
    constructor();

  }

  export class RemoteSystemSessionInfo {
    controllerDisplayName: String;
    displayName: String;
    constructor();

    joinAsync(callback: (error: Error, result: RemoteSystemSessionJoinResult) => void): void ;

  }

  export class RemoteSystemSessionAddedEventArgs {
    sessionInfo: RemoteSystemSessionInfo;
    constructor();

  }

  export class RemoteSystemSessionUpdatedEventArgs {
    sessionInfo: RemoteSystemSessionInfo;
    constructor();

  }

  export class RemoteSystemSessionRemovedEventArgs {
    sessionInfo: RemoteSystemSessionInfo;
    constructor();

  }

  export class RemoteSystemSessionWatcher {
    status: RemoteSystemSessionWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RemoteSystemSessionInvitation {
    sender: RemoteSystem;
    sessionInfo: RemoteSystemSessionInfo;
    constructor();

  }

  export class RemoteSystemSessionInvitationReceivedEventArgs {
    invitation: RemoteSystemSessionInvitation;
    constructor();

  }

  export class RemoteSystemSessionInvitationListener {
    constructor();

    addListener(type: "InvitationReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "InvitationReceived", listener: (ev: Event) => void): void ;
    on(type: "InvitationReceived", listener: (ev: Event) => void): void ;
    off(type: "InvitationReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RemoteSystemSessionParticipant {
    remoteSystem: RemoteSystem;
    constructor();

    getHostNames(): Object;

  }

  export class RemoteSystemSessionParticipantAddedEventArgs {
    participant: RemoteSystemSessionParticipant;
    constructor();

  }

  export class RemoteSystemSessionParticipantRemovedEventArgs {
    participant: RemoteSystemSessionParticipant;
    constructor();

  }

  export class RemoteSystemSessionParticipantWatcher {
    status: RemoteSystemSessionParticipantWatcherStatus;
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
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RemoteSystemSessionJoinRequest {
    participant: RemoteSystemSessionParticipant;
    constructor();

    accept(): void;

  }

  export class RemoteSystemSessionJoinRequestedEventArgs {
    joinRequest: RemoteSystemSessionJoinRequest;
    constructor();

    getDeferral(): Object;

  }

  export class RemoteSystemSessionCreationResult {
    session: RemoteSystemSession;
    status: RemoteSystemSessionCreationStatus;
    constructor();

  }

  export class RemoteSystemSessionOptions {
    isInviteOnly: Boolean;
    constructor();

  }

  export class RemoteSystemSessionController {
    constructor();
    constructor(displayName: String);
    constructor(displayName: String, options: RemoteSystemSessionOptions);

    removeParticipantAsync(pParticipant: RemoteSystemSessionParticipant, callback: (error: Error, result: Boolean) => void): void ;

    createSessionAsync(callback: (error: Error, result: RemoteSystemSessionCreationResult) => void): void ;

    addListener(type: "JoinRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "JoinRequested", listener: (ev: Event) => void): void ;
    on(type: "JoinRequested", listener: (ev: Event) => void): void ;
    off(type: "JoinRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RemoteSystemSessionDisconnectedEventArgs {
    reason: RemoteSystemSessionDisconnectedReason;
    constructor();

  }

  export class RemoteSystemSessionValueSetReceivedEventArgs {
    message: Object;
    sender: RemoteSystemSessionParticipant;
    constructor();

  }

  export class RemoteSystemSessionMessageChannel {
    session: RemoteSystemSession;
    constructor();
    constructor(session: RemoteSystemSession, channelName: String);
    constructor(session: RemoteSystemSession, channelName: String, reliability: RemoteSystemSessionMessageChannelReliability);

    broadcastValueSetAsync(messageData: Object, callback: (error: Error, result: Boolean) => void): void ;

    sendValueSetAsync(messageData: Object, participant: RemoteSystemSessionParticipant, callback: (error: Error, result: Boolean) => void): void ;

    sendValueSetToParticipantsAsync(messageData: Object, participants: Object, callback: (error: Error, result: Boolean) => void): void ;

    addListener(type: "ValueSetReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ValueSetReceived", listener: (ev: Event) => void): void ;
    on(type: "ValueSetReceived", listener: (ev: Event) => void): void ;
    off(type: "ValueSetReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

