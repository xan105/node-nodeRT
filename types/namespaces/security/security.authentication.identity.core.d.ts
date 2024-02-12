  export enum MicrosoftAccountMultiFactorAuthenticationType {
    user,
    device,
  }

  export enum MicrosoftAccountMultiFactorServiceResponse {
    success,
    error,
    noNetworkConnection,
    serviceUnavailable,
    totpSetupDenied,
    ngcNotSetup,
    sessionAlreadyDenied,
    sessionAlreadyApproved,
    sessionExpired,
    ngcNonceExpired,
    invalidSessionId,
    invalidSessionType,
    invalidOperation,
    invalidStateTransition,
    deviceNotFound,
    flowDisabled,
    sessionNotApproved,
    operationCanceledByUser,
    ngcDisabledByServer,
    ngcKeyNotFoundOnServer,
    uIRequired,
    deviceIdChanged,
  }

  export enum MicrosoftAccountMultiFactorSessionApprovalStatus {
    pending,
    approved,
    denied,
  }

  export enum MicrosoftAccountMultiFactorSessionAuthenticationStatus {
    authenticated,
    unauthenticated,
  }

  export class MicrosoftAccountMultiFactorAuthenticationManager {
    static current: MicrosoftAccountMultiFactorAuthenticationManager;
    constructor();

    getOneTimePassCodeAsync(userAccountId: String, codeLength: Number, callback: (error: Error, result: MicrosoftAccountMultiFactorOneTimeCodedInfo) => void): void ;

    addDeviceAsync(userAccountId: String, authenticationToken: String, wnsChannelId: String, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    removeDeviceAsync(userAccountId: String, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    updateWnsChannelAsync(userAccountId: String, channelUri: String, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    getSessionsAsync(userAccountIdList: Object, callback: (error: Error, result: MicrosoftAccountMultiFactorGetSessionsResult) => void): void ;

    getSessionsAndUnregisteredAccountsAsync(userAccountIdList: Object, callback: (error: Error, result: MicrosoftAccountMultiFactorUnregisteredAccountsAndSessionInfo) => void): void ;

    approveSessionAsync(sessionAuthentictionStatus: MicrosoftAccountMultiFactorSessionAuthenticationStatus, authenticationSessionInfo: MicrosoftAccountMultiFactorSessionInfo, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;
    approveSessionAsync(sessionAuthentictionStatus: MicrosoftAccountMultiFactorSessionAuthenticationStatus, userAccountId: String, sessionId: String, sessionAuthenticationType: MicrosoftAccountMultiFactorAuthenticationType, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    denySessionAsync(authenticationSessionInfo: MicrosoftAccountMultiFactorSessionInfo, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;
    denySessionAsync(userAccountId: String, sessionId: String, sessionAuthenticationType: MicrosoftAccountMultiFactorAuthenticationType, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

  }

  export class MicrosoftAccountMultiFactorGetSessionsResult {
    serviceResponse: MicrosoftAccountMultiFactorServiceResponse;
    sessions: Object;
    constructor();

  }

  export class MicrosoftAccountMultiFactorOneTimeCodedInfo {
    code: String;
    serviceResponse: MicrosoftAccountMultiFactorServiceResponse;
    timeInterval: Number;
    timeToLive: Number;
    constructor();

  }

  export class MicrosoftAccountMultiFactorSessionInfo {
    approvalStatus: MicrosoftAccountMultiFactorSessionApprovalStatus;
    authenticationType: MicrosoftAccountMultiFactorAuthenticationType;
    displaySessionId: String;
    expirationTime: Date;
    requestTime: Date;
    sessionId: String;
    userAccountId: String;
    constructor();

  }

  export class MicrosoftAccountMultiFactorUnregisteredAccountsAndSessionInfo {
    serviceResponse: MicrosoftAccountMultiFactorServiceResponse;
    sessions: Object;
    unregisteredAccounts: Object;
    constructor();

  }

