  export class EasContract {
    constructor();
  }

  export enum EasDisallowConvenienceLogonResult {
    notEvaluated,
    compliant,
    canBeCompliant,
    requestedPolicyIsStricter,
  }

  export enum EasEncryptionProviderType {
    notEvaluated,
    windowsEncryption,
    otherEncryption,
  }

  export enum EasMaxInactivityTimeLockResult {
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

  export class EasClientDeviceInformation {
    friendlyName: String;
    id: String;
    operatingSystem: String;
    systemManufacturer: String;
    systemProductName: String;
    systemSku: String;
    systemFirmwareVersion: String;
    systemHardwareVersion: String;
    constructor();

  }

  export class EasClientSecurityPolicy {
    requireEncryption: Boolean;
    passwordHistory: Number;
    passwordExpiration: Number;
    minPasswordLength: Number;
    minPasswordComplexCharacters: Number;
    maxPasswordFailedAttempts: Number;
    maxInactivityTimeLock: Number;
    disallowConvenienceLogon: Boolean;
    constructor();

    applyAsync(callback: (error: Error, result: EasComplianceResults) => void): void ;

    checkCompliance(): EasComplianceResults;

  }

  export class EasComplianceResults {
    compliant: Boolean;
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

