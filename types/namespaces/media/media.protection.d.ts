  export class ProtectionRenewalContract {
    constructor();
  }

  export enum GraphicsTrustStatus {
    trustNotRequired,
    trustEstablished,
    environmentNotSupported,
    driverNotSupported,
    driverSigningFailure,
    unknownFailure,
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

  export enum ProtectionCapabilityResult {
    notSupported,
    maybe,
    probably,
  }

  export enum RenewalStatus {
    notStarted,
    updatesInProgress,
    userCancelled,
    appComponentsMayNeedUpdating,
    noComponentsFound,
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

  export class ComponentLoadFailedEventArgs {
    completion: MediaProtectionServiceCompletion;
    information: RevocationAndRenewalInformation;
    constructor();

  }

  export class ComponentRenewal {
    constructor();

    static renewSystemComponentsAsync(information: RevocationAndRenewalInformation, callback: (error: Error, result: RenewalStatus) => void): void ;


  }

  export class HdcpSession {
    constructor();

    setDesiredMinProtectionAsync(protection: HdcpProtection, callback: (error: Error, result: HdcpSetProtectionResult) => void): void ;

    isEffectiveProtectionAtLeast(protection: HdcpProtection): Boolean;

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

  export class IMediaProtectionServiceRequest {
    protectionSystem: String;
    type: String;
    constructor();

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

  export class MediaProtectionPMPServer {
    properties: Object;
    constructor();
    constructor(pProperties: Object);

  }

  export class MediaProtectionServiceCompletion {
    constructor();

    complete(success: Boolean): void;

  }

  export class ProtectionCapabilities {
    constructor();

    isTypeSupported(type: String, keySystem: String): ProtectionCapabilityResult;

  }

  export class RevocationAndRenewalInformation {
    items: Object;
    constructor();

  }

  export class RevocationAndRenewalItem {
    headerHash: String;
    name: String;
    publicKeyHash: String;
    reasons: RevocationAndRenewalReasons;
    renewalId: String;
    constructor();

  }

  export class ServiceRequestedEventArgs {
    completion: MediaProtectionServiceCompletion;
    request: IMediaProtectionServiceRequest;
    mediaPlaybackItem: Object;
    constructor();

  }

export const GraphicsTrustStatus: any;
export const HdcpProtection: any;
export const HdcpSetProtectionResult: any;
export const ProtectionCapabilityResult: any;
export const RenewalStatus: any;
export const RevocationAndRenewalReasons: any;
export const ComponentLoadFailedEventArgs: any;
export const ComponentRenewal: any;
export const HdcpSession: any;
export const IMediaProtectionServiceRequest: any;
export const MediaProtectionManager: any;
export const MediaProtectionPMPServer: any;
export const MediaProtectionServiceCompletion: any;
export const ProtectionCapabilities: any;
export const RevocationAndRenewalInformation: any;
export const RevocationAndRenewalItem: any;
export const ServiceRequestedEventArgs: any;
export * as playready from "./media.protection.playready.js";
