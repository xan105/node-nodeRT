  export class EnterpriseDataContract {
    constructor();
  }

  export enum DataProtectionStatus {
    protectedToOtherIdentity,
    protected,
    revoked,
    unprotected,
    licenseExpired,
    accessSuspended,
  }

  export enum EnforcementLevel {
    noProtection,
    silent,
    override,
    block,
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

  export enum ProtectionPolicyAuditAction {
    decrypt,
    copyToLocation,
    sendToRecipient,
    other,
  }

  export enum ProtectionPolicyEvaluationResult {
    allowed,
    blocked,
    consentRequired,
  }

  export enum ProtectionPolicyRequestAccessBehavior {
    decrypt,
    treatOverridePolicyAsBlock,
  }

  export class BufferProtectUnprotectResult {
    buffer: Object;
    protectionInfo: DataProtectionInfo;
    constructor();

  }

  export class DataProtectionInfo {
    identity: String;
    status: DataProtectionStatus;
    constructor();

  }

  export class DataProtectionManager {
    constructor();

    static protectAsync(data: Object, identity: String, callback: (error: Error, result: BufferProtectUnprotectResult) => void): void ;


    static unprotectAsync(data: Object, callback: (error: Error, result: BufferProtectUnprotectResult) => void): void ;


    static protectStreamAsync(unprotectedStream: Object, identity: String, protectedStream: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


    static unprotectStreamAsync(protectedStream: Object, unprotectedStream: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


    static getProtectionInfoAsync(protectedData: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


    static getStreamProtectionInfoAsync(protectedStream: Object, callback: (error: Error, result: DataProtectionInfo) => void): void ;


  }

  export class FileProtectionInfo {
    identity: String;
    isRoamable: Boolean;
    status: FileProtectionStatus;
    isProtectWhileOpenSupported: Boolean;
    constructor();

  }

  export class FileProtectionManager {
    constructor();

    static unprotectAsync(target: Object, callback: (error: Error, result: FileProtectionInfo) => void): void ;
    static unprotectAsync(target: Object, options: FileUnprotectOptions, callback: (error: Error, result: FileProtectionInfo) => void): void ;


    static isContainerAsync(file: Object, callback: (error: Error, result: Boolean) => void): void ;


    static loadFileFromContainerAsync(containerFile: Object, target: Object, collisionOption: Number, callback: (error: Error, result: ProtectedContainerImportResult) => void): void ;
    static loadFileFromContainerAsync(containerFile: Object, callback: (error: Error, result: ProtectedContainerImportResult) => void): void ;
    static loadFileFromContainerAsync(containerFile: Object, target: Object, callback: (error: Error, result: ProtectedContainerImportResult) => void): void ;


    static saveFileAsContainerAsync(protectedFile: Object, sharedWithIdentities: Object, callback: (error: Error, result: ProtectedContainerExportResult) => void): void ;
    static saveFileAsContainerAsync(protectedFile: Object, callback: (error: Error, result: ProtectedContainerExportResult) => void): void ;


    static protectAsync(target: Object, identity: String, callback: (error: Error, result: FileProtectionInfo) => void): void ;


    static copyProtectionAsync(source: Object, target: Object, callback: (error: Error, result: Boolean) => void): void ;


    static getProtectionInfoAsync(source: Object, callback: (error: Error, result: FileProtectionInfo) => void): void ;


    static createProtectedAndOpenAsync(parentFolder: Object, desiredName: String, identity: String, collisionOption: Number, callback: (error: Error, result: ProtectedFileCreateResult) => void): void ;


  }

  export class FileRevocationManager {
    constructor();

    static protectAsync(storageItem: Object, enterpriseIdentity: String, callback: (error: Error, result: FileProtectionStatus) => void): void ;


    static copyProtectionAsync(sourceStorageItem: Object, targetStorageItem: Object, callback: (error: Error, result: Boolean) => void): void ;


    static getStatusAsync(storageItem: Object, callback: (error: Error, result: FileProtectionStatus) => void): void ;


    static revoke(enterpriseIdentity: String): void;


  }

  export class FileUnprotectOptions {
    audit: Boolean;
    constructor();
    constructor(audit: Boolean);

  }

  export class ProtectedAccessResumedEventArgs {
    identities: Object;
    constructor();

  }

  export class ProtectedAccessSuspendingEventArgs {
    deadline: Date;
    identities: Object;
    constructor();

    getDeferral(): Object;

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

  export class ProtectedContentRevokedEventArgs {
    identities: Object;
    constructor();

  }

  export class ProtectedFileCreateResult {
    file: Object;
    protectionInfo: FileProtectionInfo;
    stream: Object;
    constructor();

  }

  export class ProtectionPolicyAuditInfo {
    targetDescription: String;
    sourceDescription: String;
    dataDescription: String;
    action: ProtectionPolicyAuditAction;
    constructor();
    constructor(action: ProtectionPolicyAuditAction, dataDescription: String, sourceDescription: String, targetDescription: String);
    constructor(action: ProtectionPolicyAuditAction, dataDescription: String);

  }

  export class ProtectionPolicyManager {
    static isProtectionEnabled: Boolean;
    static primaryManagedIdentity: String;
    identity: String;
    showEnterpriseIndicator: Boolean;
    constructor();

    static requestAccessAsync(sourceIdentity: String, targetIdentity: String, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: String, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessAsync(sourceIdentity: String, targetIdentity: String, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessAsync(sourceIdentity: String, targetIdentity: String, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: String, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessAsync(sourceIdentity: String, targetIdentity: String, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static requestAccessForAppAsync(sourceIdentity: String, appPackageFamilyName: String, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: String, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessForAppAsync(sourceIdentity: String, appPackageFamilyName: String, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessForAppAsync(sourceIdentity: String, appPackageFamilyName: String, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: String, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessForAppAsync(sourceIdentity: String, appPackageFamilyName: String, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static requestAccessToFilesForAppAsync(sourceItemList: Object, appPackageFamilyName: String, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessToFilesForAppAsync(sourceItemList: Object, appPackageFamilyName: String, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: String, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static requestAccessToFilesForProcessAsync(sourceItemList: Object, processId: Number, auditInfo: ProtectionPolicyAuditInfo, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;
    static requestAccessToFilesForProcessAsync(sourceItemList: Object, processId: Number, auditInfo: ProtectionPolicyAuditInfo, messageFromApp: String, behavior: ProtectionPolicyRequestAccessBehavior, callback: (error: Error, result: ProtectionPolicyEvaluationResult) => void): void ;


    static isFileProtectionRequiredAsync(target: Object, identity: String, callback: (error: Error, result: Boolean) => void): void ;


    static isFileProtectionRequiredForNewFileAsync(parentFolder: Object, identity: String, desiredName: String, callback: (error: Error, result: Boolean) => void): void ;


    static getPrimaryManagedIdentityForNetworkEndpointAsync(endpointHost: Object, callback: (error: Error, result: String) => void): void ;


    static isRoamableProtectionEnabled(identity: String): Boolean;


    static getPrimaryManagedIdentityForIdentity(identity: String): String;


    static logAuditEvent(sourceIdentity: String, targetIdentity: String, auditInfo: ProtectionPolicyAuditInfo): void;


    static hasContentBeenRevokedSince(identity: String, since: Date): Boolean;


    static checkAccessForApp(sourceIdentity: String, appPackageFamilyName: String): ProtectionPolicyEvaluationResult;


    static getEnforcementLevel(identity: String): EnforcementLevel;


    static isUserDecryptionAllowed(identity: String): Boolean;


    static isProtectionUnderLockRequired(identity: String): Boolean;


    static isIdentityManaged(identity: String): Boolean;


    static tryApplyProcessUIPolicy(identity: String): Boolean;


    static clearProcessUIPolicy(): void;


    static createCurrentThreadNetworkContext(identity: String): ThreadNetworkContext;


    static revokeContent(identity: String): void;


    static getForCurrentView(): ProtectionPolicyManager;


    static checkAccess(sourceIdentity: String, targetIdentity: String): ProtectionPolicyEvaluationResult;


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

  export class ThreadNetworkContext {
    constructor();

    close(): void;
  }

