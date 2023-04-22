  export class EnterpriseDataContract {
    constructor();
  }

  export enum ProtectionPolicyEvaluationResult {
    allowed,
    blocked,
    consentRequired,
  }

  export enum FileProtectionStatus {
    undetermined,
    unknown,
    unprotected,
    revoked,
    protected,
    protectedByOtherUser,
    protectedToOtherEnterprise,
    notProtectable,
    protectedToOtherIdentity,
    licenseExpired,
    accessSuspended,
    fileInUse,
  }

  export enum ProtectedImportExportStatus {
    ok,
    undetermined,
    unprotected,
    revoked,
    notRoamable,
    protectedToOtherIdentity,
    licenseExpired,
    accessSuspended,
  }

  export enum DataProtectionStatus {
    protectedToOtherIdentity,
    protected,
    revoked,
    unprotected,
    licenseExpired,
    accessSuspended,
  }

  export enum ProtectionPolicyAuditAction {
    decrypt,
    copyToLocation,
    sendToRecipient,
    other,
  }

  export enum ProtectionPolicyRequestAccessBehavior {
    decrypt,
    treatOverridePolicyAsBlock,
  }

  export enum EnforcementLevel {
    noProtection,
    silent,
    override,
    block,
  }

  export class FileProtectionInfo {
    identity: string;
    isRoamable: boolean;
    status: FileProtectionStatus;
    isProtectWhileOpenSupported: boolean;
    constructor();

  }

  export class ProtectedContainerExportResult {
    file: Object;
    status: ProtectedImportExportStatus;
    constructor();

  }

  export class ProtectedContainerImportResult {
    file: Object;
    status: ProtectedImportExportStatus;
    constructor();

  }

  export class ProtectedFileCreateResult {
    file: Object;
    protectionInfo: FileProtectionInfo;
    stream: Object;
    constructor();

  }

  export class FileUnprotectOptions {
    audit: boolean;
    constructor();
    constructor(audit: boolean);

  }

  export class BufferProtectUnprotectResult {
    buffer: Object;
    protectionInfo: DataProtectionInfo;
    constructor();

  }

  export class DataProtectionInfo {
    identity: string;
    status: DataProtectionStatus;
    constructor();

  }

  export class ProtectionPolicyAuditInfo {
    targetDescription: string;
    sourceDescription: string;
    dataDescription: string;
    action: ProtectionPolicyAuditAction;
    constructor();
    constructor(action: ProtectionPolicyAuditAction, dataDescription: string, sourceDescription: string, targetDescription: string);
    constructor(action: ProtectionPolicyAuditAction, dataDescription: string);

  }

  export class ThreadNetworkContext {
    constructor();

    close(): void;
  }

  export class ProtectionPolicyManager {
    static isProtectionEnabled: boolean;
    static primaryManagedIdentity: string;
    identity: string;
    showEnterpriseIndicator: boolean;
    constructor();

    static requestAccessAsync(sourceIdentity: string, targetIdentity: string, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: string, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessAsync(sourceIdentity: string, targetIdentity: string, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessAsync(sourceIdentity: string, targetIdentity: string, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: string, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessAsync(sourceIdentity: string, targetIdentity: string, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static requestAccessForAppAsync(sourceIdentity: string, appPackageFamilyName: string, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: string, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessForAppAsync(sourceIdentity: string, appPackageFamilyName: string, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessForAppAsync(sourceIdentity: string, appPackageFamilyName: string, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: string, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessForAppAsync(sourceIdentity: string, appPackageFamilyName: string, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static requestAccessToFilesForAppAsync(sourceItemList: Object, appPackageFamilyName: string, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessToFilesForAppAsync(sourceItemList: Object, appPackageFamilyName: string, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: string, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static requestAccessToFilesForProcessAsync(sourceItemList: Object, processId: number, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessToFilesForProcessAsync(sourceItemList: Object, processId: number, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: string, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static isFileProtectionRequiredAsync(target: Object, identity: string, callback: (error: Error, result: boolean) => void): void ;


    static isFileProtectionRequiredForNewFileAsync(parentFolder: Object, identity: string, desiredName: string, callback: (error: Error, result: boolean) => void): void ;


    static getPrimaryManagedIdentityForNetworkEndpointAsync(endpointHost: Object, callback: (error: Error, result: string) => void): void ;


    static isRoamableProtectionEnabled(identity: string): boolean;


    static getPrimaryManagedIdentityForIdentity(identity: string): string;


    static logAuditEvent(sourceIdentity: string, targetIdentity: string, auditInfo: ProtectionPolicyAuditInfo): void;


    static hasContentBeenRevokedSince(identity: string, since: Date): boolean;


    static checkAccessForApp(sourceIdentity: string, appPackageFamilyName: string): ProtectionPolicyEvaluationResult;


    static getEnforcementLevel(identity: string): EnforcementLevel;


    static isUserDecryptionAllowed(identity: string): boolean;


    static isProtectionUnderLockRequired(identity: string): boolean;


    static isIdentityManaged(identity: string): boolean;


    static tryApplyProcessUIPolicy(identity: string): boolean;


    static clearProcessUIPolicy(): void;


    static createCurrentThreadNetworkContext(identity: string): ThreadNetworkContext;


    static revokeContent(identity: string): void;


    static getForCurrentView(): ProtectionPolicyManager;


    static checkAccess(sourceIdentity: string, targetIdentity: string): ProtectionPolicyEvaluationResult;


    addListener(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    on(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    off(type: "PolicyChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProtectedAccessResumed", listener: (ev: Event) => void): void ;
    removeListener(type: "ProtectedAccessResumed", listener: (ev: Event) => void): void ;
    on(type: "ProtectedAccessResumed", listener: (ev: Event) => void): void ;
    off(type: "ProtectedAccessResumed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProtectedAccessSuspending", listener: (ev: Event) => void): void ;
    removeListener(type: "ProtectedAccessSuspending", listener: (ev: Event) => void): void ;
    on(type: "ProtectedAccessSuspending", listener: (ev: Event) => void): void ;
    off(type: "ProtectedAccessSuspending", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProtectedContentRevoked", listener: (ev: Event) => void): void ;
    removeListener(type: "ProtectedContentRevoked", listener: (ev: Event) => void): void ;
    on(type: "ProtectedContentRevoked", listener: (ev: Event) => void): void ;
    off(type: "ProtectedContentRevoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ProtectedAccessSuspendingEventArgs {
    deadline: Date;
    identities: Object;
    constructor();

    getDeferral(): Object;

  }

  export class ProtectedAccessResumedEventArgs {
    identities: Object;
    constructor();

  }

  export class ProtectedContentRevokedEventArgs {
    identities: Object;
    constructor();

  }

  export class FileRevocationManager {
    constructor();

    static protectAsync(storageItem: Object, enterpriseIdentity: string, callback: (error: Error, result: FileProtectionStatus) => void): void ;


    static copyProtectionAsync(sourceStorageItem: Object, targetStorageItem: Object, callback: (error: Error, result: boolean) => void): void ;


    static getStatusAsync(storageItem: Object, callback: (error: Error, result: FileProtectionStatus) => void): void ;


    static revoke(enterpriseIdentity: string): void;


  }

  export class FileProtectionManager {
    constructor();

    static unprotectAsync(target: Object, callback: (error: Error, result: FileProtectionInfo) => void): void ;
    static unprotectAsync(target: Object, options: FileUnprotectOptions, callback: (error: Error, result: FileProtectionInfo) => void): void ;


    static isContainerAsync(file: Object, callback: (error: Error, result: boolean) => void): void ;


    static loadFileFromContainerAsync(containerFile: Object, target: Object, collisionOption: number, callback: (error: Error, result: ProtectedContainerImportResult) => void): void ;
    static loadFileFromContainerAsync(containerFile: Object, callback: (error: Error, result: ProtectedContainerImportResult) => void): void ;
    static loadFileFromContainerAsync(containerFile: Object, target: Object, callback: (error: Error, result: ProtectedContainerImportResult) => void): void ;


    static saveFileAsContainerAsync(protectedFile: Object, sharedWithIdentities: Object, callback: (error: Error, result: ProtectedContainerExportResult) => void): void ;
    static saveFileAsContainerAsync(protectedFile: Object, callback: (error: Error, result: ProtectedContainerExportResult) => void): void ;


    static protectAsync(target: Object, identity: string, callback: (error: Error, result: FileProtectionInfo) => void): void ;


    static copyProtectionAsync(source: Object, target: Object, callback: (error: Error, result: boolean) => void): void ;


    static getProtectionInfoAsync(source: Object, callback: (error: Error, result: FileProtectionInfo) => void): void ;


    static createProtectedAndOpenAsync(parentFolder: Object, desiredName: string, identity: string, collisionOption: number, callback: (error: Error, result: ProtectedFileCreateResult) => void): void ;


  }

  export class DataProtectionManager {
    constructor();

    static protectAsync(data: Object, identity: string, callback: (error: Error, result: BufferProtectUnprotectResult) => void): void ;


    static unprotectAsync(data: Object, callback: (error: Error, result: BufferProtectUnprotectResult) => void): void ;


    static protectStreamAsync(unprotectedStream: Object, identity: string, protectedStream: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


    static unprotectStreamAsync(protectedStream: Object, unprotectedStream: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


    static getProtectionInfoAsync(protectedData: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


    static getStreamProtectionInfoAsync(protectedStream: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


  }

