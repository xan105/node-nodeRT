  export class ProtectionRenewalContract {
    constructor();
  }

  export enum RevocationAndRenewalReasons {
    userModeComponentLoad,
    kernelModeComponentLoad,
    appComponent,
    globalRevocationListLoadFailed,
    invalidGlobalRevocationListSignature,
    globalRevocationListAbsent,
    componentRevoked,
    invalidComponentCertificateExtendedKeyUse,
    componentCertificateRevoked,
    invalidComponentCertificateRoot,
    componentHighSecurityCertificateRevoked,
    componentLowSecurityCertificateRevoked,
    bootDriverVerificationFailed,
    componentSignedWithTestCertificate,
    encryptionFailure,
  }

  export enum GraphicsTrustStatus {
    trustNotRequired,
    trustEstablished,
    environmentNotSupported,
    driverNotSupported,
    driverSigningFailure,
    unknownFailure,
  }

  export enum ProtectionCapabilityResult {
    notSupported,
    maybe,
    probably,
  }

  export enum HdcpProtection {
    off,
    on,
    onWithTypeEnforcement,
  }

  export enum HdcpSetProtectionResult {
    success,
    timedOut,
    notSupported,
    unknownFailure,
  }

  export enum RenewalStatus {
    notStarted,
    updatesInProgress,
    userCancelled,
    appComponentsMayNeedUpdating,
    noComponentsFound,
  }

  export class MediaProtectionManager {
    properties: Object;
    constructor();

    addListener(type: "ComponentLoadFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "ComponentLoadFailed", listener: (ev: Event) => void): void ;
    on(type: "ComponentLoadFailed", listener: (ev: Event) => void): void ;
    off(type: "ComponentLoadFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "RebootNeeded", listener: (ev: Event) => void): void ;
    removeListener(type: "RebootNeeded", listener: (ev: Event) => void): void ;
    on(type: "RebootNeeded", listener: (ev: Event) => void): void ;
    off(type: "RebootNeeded", listener: (ev: Event) => void): void ;
    
    addListener(type: "ServiceRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ServiceRequested", listener: (ev: Event) => void): void ;
    on(type: "ServiceRequested", listener: (ev: Event) => void): void ;
    off(type: "ServiceRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ServiceRequestedEventArgs {
    completion: MediaProtectionServiceCompletion;
    request: IMediaProtectionServiceRequest;
    mediaPlaybackItem: Object;
    constructor();

  }

  export class ComponentLoadFailedEventArgs {
    completion: MediaProtectionServiceCompletion;
    information: RevocationAndRenewalInformation;
    constructor();

  }

  export class MediaProtectionServiceCompletion {
    constructor();

    complete(success: boolean): void;

  }

  export class RevocationAndRenewalInformation {
    items: Object;
    constructor();

  }

  export class RevocationAndRenewalItem {
    headerHash: string;
    name: string;
    publicKeyHash: string;
    reasons: RevocationAndRenewalReasons;
    renewalId: string;
    constructor();

  }

  export class MediaProtectionPMPServer {
    properties: Object;
    constructor();
    constructor(pProperties: Object);

  }

  export class IMediaProtectionServiceRequest {
    protectionSystem: string;
    type: string;
    constructor();

  }

  export class ProtectionCapabilities {
    constructor();

    isTypeSupported(type: string, keySystem: string): ProtectionCapabilityResult;

  }

  export class HdcpSession {
    constructor();

    setDesiredMinProtectionAsync(protection: HdcpProtection, callback: (error: Error, result: HdcpSetProtectionResult) => void): void ;

    isEffectiveProtectionAtLeast(protection: HdcpProtection): boolean;

    getEffectiveProtection(): HdcpProtection;

    close(): void;
    addListener(type: "ProtectionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ProtectionChanged", listener: (ev: Event) => void): void ;
    on(type: "ProtectionChanged", listener: (ev: Event) => void): void ;
    off(type: "ProtectionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ComponentRenewal {
    constructor();

    static renewSystemComponentsAsync(information: RevocationAndRenewalInformation, callback: (error: Error, result: RenewalStatus) => void): void ;


  }

export * as playready from "./media.protection.playready.js";