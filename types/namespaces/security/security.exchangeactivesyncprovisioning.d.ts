  export class EasContract {
    constructor();
  }

  export enum EasRequireEncryptionResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    notProvisionedOnAllVolumes,
    deFixedDataNotSupported,
    fixedDataNotSupported,
    deHardwareNotCompliant,
    hardwareNotCompliant,
    deWinReNotConfigured,
    lockNotConfigured,
    deProtectionSuspended,
    protectionSuspended,
    deOsVolumeNotProtected,
    osVolumeNotProtected,
    deProtectionNotYetEnabled,
    protectionNotYetEnabled,
    noFeatureLicense,
    osNotProtected,
    unexpectedFailure,
  }

  export enum EasEncryptionProviderType {
    notEvaluated,
    windowsEncryption,
    otherEncryption,
  }

  export enum EasMinPasswordLengthResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
    requestedPolicyNotEnforceable,
    invalidParameter,
    currentUserHasBlankPassword,
    adminsHaveBlankPassword,
    userCannotChangePassword,
    adminsCannotChangePassword,
    localControlledUsersCannotChangePassword,
    connectedAdminsProviderPolicyIsWeak,
    connectedUserProviderPolicyIsWeak,
    changeConnectedAdminsPassword,
    changeConnectedUserPassword,
  }

  export enum EasDisallowConvenienceLogonResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
  }

  export enum EasMinPasswordComplexCharactersResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
    requestedPolicyNotEnforceable,
    invalidParameter,
    currentUserHasBlankPassword,
    adminsHaveBlankPassword,
    userCannotChangePassword,
    adminsCannotChangePassword,
    localControlledUsersCannotChangePassword,
    connectedAdminsProviderPolicyIsWeak,
    connectedUserProviderPolicyIsWeak,
    changeConnectedAdminsPassword,
    changeConnectedUserPassword,
  }

  export enum EasPasswordExpirationResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
    requestedExpirationIncompatible,
    invalidParameter,
    userCannotChangePassword,
    adminsCannotChangePassword,
    localControlledUsersCannotChangePassword,
  }

  export enum EasPasswordHistoryResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
    invalidParameter,
  }

  export enum EasMaxPasswordFailedAttemptsResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
    invalidParameter,
  }

  export enum EasMaxInactivityTimeLockResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
    invalidParameter,
  }

  export class EasClientDeviceInformation {
    friendlyName: string;
    id: string;
    operatingSystem: string;
    systemManufacturer: string;
    systemProductName: string;
    systemSku: string;
    systemFirmwareVersion: string;
    systemHardwareVersion: string;
    constructor();

  }

  export class EasComplianceResults {
    compliant: boolean;
    disallowConvenienceLogonResult: EasDisallowConvenienceLogonResult;
    maxInactivityTimeLockResult: EasMaxInactivityTimeLockResult;
    maxPasswordFailedAttemptsResult: EasMaxPasswordFailedAttemptsResult;
    minPasswordComplexCharactersResult: EasMinPasswordComplexCharactersResult;
    minPasswordLengthResult: EasMinPasswordLengthResult;
    passwordExpirationResult: EasPasswordExpirationResult;
    passwordHistoryResult: EasPasswordHistoryResult;
    requireEncryptionResult: EasRequireEncryptionResult;
    encryptionProviderType: EasEncryptionProviderType;
    constructor();

  }

  export class EasClientSecurityPolicy {
    requireEncryption: boolean;
    passwordHistory: number;
    passwordExpiration: number;
    minPasswordLength: number;
    minPasswordComplexCharacters: number;
    maxPasswordFailedAttempts: number;
    maxInactivityTimeLock: number;
    disallowConvenienceLogon: boolean;
    constructor();

    applyAsync(callback: (error: Error, result: EasComplianceResults) => void): void ;

    checkCompliance(): EasComplianceResults;

  }

