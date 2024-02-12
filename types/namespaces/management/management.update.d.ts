  export class WindowsUpdateContract {
    constructor();
  }

  export enum WindowsUpdateAdministratorOptions {
    none,
    requireAdministratorApprovalForScans,
    requireAdministratorApprovalForUpdates,
    requireAdministratorApprovalForActions,
  }

  export enum WindowsUpdateAdministratorStatus {
    succeeded,
    noAdministratorRegistered,
    otherAdministratorIsRegistered,
  }

  export enum WindowsUpdateAttentionRequiredReason {
    none,
    seekerUpdate,
    readyToReboot,
    needNonMeteredNetwork,
    needUserAgreementForMeteredNetwork,
    needNetwork,
    needMoreSpace,
    batterySaverEnabled,
    needUserInteraction,
    needUserAgreementForPolicy,
    compatibilityError,
    needUserInteractionForEula,
    needUserInteractionForCta,
    regulated,
    externalReboot,
    otherUpdate,
    blockedByProvider,
    blockedByPostRebootFailure,
    userEngaged,
    blockedByBattery,
    exclusivity,
    blockedBySerialization,
    conflictClass,
    blockedByAdminApproval,
    blockedByTooManyAttempts,
    blockedByFailure,
    demotion,
    blockedByActiveHours,
    scheduledForMaintenance,
    policyScheduledInstallTime,
    blockedByOobe,
    deferredDuringOobe,
    deferredForSustainableTime,
  }

  export class PreviewBuildsManager {
    arePreviewBuildsAllowed: Boolean;
    constructor();

    static getDefault(): PreviewBuildsManager;


    static isSupported(): Boolean;


    syncAsync(callback: (error: Error, result: Boolean) => void): void ;

    getCurrentState(): PreviewBuildsState;

  }

  export class PreviewBuildsState {
    properties: Object;
    constructor();

  }

  export class WindowsUpdate {
    actionProgress: WindowsUpdateActionProgress;
    actionResult: WindowsUpdateActionResult;
    attentionRequiredInfo: WindowsUpdateAttentionRequiredInfo;
    currentAction: String;
    deadline: Date;
    description: String;
    eulaText: String;
    isCritical: Boolean;
    isDriver: Boolean;
    isEulaAccepted: Boolean;
    isFeatureUpdate: Boolean;
    isForOS: Boolean;
    isMandatory: Boolean;
    isMinorImpact: Boolean;
    isSecurity: Boolean;
    isSeeker: Boolean;
    isUrgent: Boolean;
    moreInfoUrl: Object;
    providerId: String;
    supportUrl: Object;
    title: String;
    updateId: String;
    constructor();

    getPropertyValue(propertyName: String): Object;

    acceptEula(): void;

  }

  export class WindowsUpdateActionCompletedEventArgs {
    action: String;
    extendedError: Number;
    succeeded: Boolean;
    update: WindowsUpdate;
    constructor();

  }

  export class WindowsUpdateActionProgress {
    action: String;
    progress: Number;
    constructor();

  }

  export class WindowsUpdateActionResult {
    action: String;
    extendedError: Number;
    succeeded: Boolean;
    timestamp: Date;
    constructor();

  }

  export class WindowsUpdateAdministrator {
    constructor();

    static getRegisteredAdministrator(organizationName: String): WindowsUpdateGetAdministratorResult;


    static registerForAdministration(organizationName: String, options: WindowsUpdateAdministratorOptions): WindowsUpdateAdministratorStatus;


    static unregisterForAdministration(organizationName: String): WindowsUpdateAdministratorStatus;


    static getRegisteredAdministratorName(): String;


    static requestRestart(restartOptions: WindowsUpdateRestartRequestOptions): String;


    static cancelRestartRequest(requestRestartToken: String): void;


    startAdministratorScan(): void;

    approveWindowsUpdateAction(updateId: String, action: String): void;

    revokeWindowsUpdateActionApproval(updateId: String, action: String): void;

    approveWindowsUpdate(updateId: String, approvalData: WindowsUpdateApprovalData): void;

    revokeWindowsUpdateApproval(updateId: String): void;

    getUpdates(): Object;

  }

  export class WindowsUpdateApprovalData {
    seeker: Boolean;
    optOutOfAutoReboot: Boolean;
    complianceGracePeriodInDays: Number;
    complianceDeadlineInDays: Number;
    allowDownloadOnMetered: Boolean;
    constructor();

  }

  export class WindowsUpdateAttentionRequiredInfo {
    reason: WindowsUpdateAttentionRequiredReason;
    timestamp: Date;
    constructor();

  }

  export class WindowsUpdateAttentionRequiredReasonChangedEventArgs {
    reason: WindowsUpdateAttentionRequiredReason;
    update: WindowsUpdate;
    constructor();

  }

  export class WindowsUpdateGetAdministratorResult {
    administrator: WindowsUpdateAdministrator;
    status: WindowsUpdateAdministratorStatus;
    constructor();

  }

  export class WindowsUpdateItem {
    category: String;
    description: String;
    moreInfoUrl: Object;
    operation: String;
    providerId: String;
    timestamp: Date;
    title: String;
    updateId: String;
    constructor();

  }

  export class WindowsUpdateManager {
    isScanning: Boolean;
    isWorking: Boolean;
    lastSuccessfulScanTimestamp: Date;
    constructor();
    constructor(clientId: String);

    getMostRecentCompletedUpdatesAsync(count: Number, callback: (error: Error, result: Object) => void): void ;

    getApplicableUpdates(): Object;

    getMostRecentCompletedUpdates(count: Number): Object;

    startScan(userInitiated: Boolean): void;

    addListener(type: "ActionCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ActionCompleted", listener: (ev: Event) => void): void ;
    on(type: "ActionCompleted", listener: (ev: Event) => void): void ;
    off(type: "ActionCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "AttentionRequiredReasonChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AttentionRequiredReasonChanged", listener: (ev: Event) => void): void ;
    on(type: "AttentionRequiredReasonChanged", listener: (ev: Event) => void): void ;
    off(type: "AttentionRequiredReasonChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ProgressChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ProgressChanged", listener: (ev: Event) => void): void ;
    on(type: "ProgressChanged", listener: (ev: Event) => void): void ;
    off(type: "ProgressChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ScanCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ScanCompleted", listener: (ev: Event) => void): void ;
    on(type: "ScanCompleted", listener: (ev: Event) => void): void ;
    off(type: "ScanCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ScanningStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ScanningStateChanged", listener: (ev: Event) => void): void ;
    on(type: "ScanningStateChanged", listener: (ev: Event) => void): void ;
    off(type: "ScanningStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "WorkingStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "WorkingStateChanged", listener: (ev: Event) => void): void ;
    on(type: "WorkingStateChanged", listener: (ev: Event) => void): void ;
    off(type: "WorkingStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WindowsUpdateProgressChangedEventArgs {
    actionProgress: WindowsUpdateActionProgress;
    update: WindowsUpdate;
    constructor();

  }

  export class WindowsUpdateRestartRequestOptions {
    title: String;
    organizationName: String;
    optOutOfAutoReboot: Boolean;
    moreInfoUrl: Object;
    description: String;
    complianceGracePeriodInDays: Number;
    complianceDeadlineInDays: Number;
    constructor();
    constructor(title: String, description: String, moreInfoUrl: Object, complianceDeadlineInDays: Number, complianceGracePeriodInDays: Number);

  }

  export class WindowsUpdateScanCompletedEventArgs {
    extendedError: Number;
    providerId: String;
    succeeded: Boolean;
    updates: Object;
    constructor();

  }

