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

  export enum MicrosoftAccountMultiFactorSessionAuthenticationStatus {
    authenticated,
    unauthenticated,
  }

  export enum MicrosoftAccountMultiFactorAuthenticationType {
    user,
    device,
  }

  export enum MicrosoftAccountMultiFactorSessionApprovalStatus {
    pending,
    approved,
    denied,
  }

  export class MicrosoftAccountMultiFactorSessionInfo {
    approvalStatus: MicrosoftAccountMultiFactorSessionApprovalStatus;
    authenticationType: MicrosoftAccountMultiFactorAuthenticationType;
    displaySessionId: string;
    expirationTime: Date;
    requestTime: Date;
    sessionId: string;
    userAccountId: string;
    constructor();

  }

  export class MicrosoftAccountMultiFactorOneTimeCodedInfo {
    code: string;
    serviceResponse: MicrosoftAccountMultiFactorServiceResponse;
    timeInterval: number;
    timeToLive: number;
    constructor();

  }

  export class MicrosoftAccountMultiFactorGetSessionsResult {
    serviceResponse: MicrosoftAccountMultiFactorServiceResponse;
    sessions: Object;
    constructor();

  }

  export class MicrosoftAccountMultiFactorUnregisteredAccountsAndSessionInfo {
    serviceResponse: MicrosoftAccountMultiFactorServiceResponse;
    sessions: Object;
    unregisteredAccounts: Object;
    constructor();

  }

  export class MicrosoftAccountMultiFactorAuthenticationManager {
    static current: MicrosoftAccountMultiFactorAuthenticationManager;
    constructor();

    getOneTimePassCodeAsync(userAccountId: string, codeLength: number, callback: (error: Error, result: MicrosoftAccountMultiFactorOneTimeCodedInfo) => void): void ;

    addDeviceAsync(userAccountId: string, authenticationToken: string, wnsChannelId: string, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    removeDeviceAsync(userAccountId: string, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    updateWnsChannelAsync(userAccountId: string, channelUri: string, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    getSessionsAsync(userAccountIdList: Object, callback: (error: Error, result: MicrosoftAccountMultiFactorGetSessionsResult) => void): void ;

    getSessionsAndUnregisteredAccountsAsync(userAccountIdList: Object, callback: (error: Error, result: MicrosoftAccountMultiFactorUnregisteredAccountsAndSessionInfo) => void): void ;

    approveSessionAsync(sessionAuthentictionStatus: MicrosoftAccountMultiFactorSessionAuthenticationStatus, authenticationSessionInfo: MicrosoftAccountMultiFactorSessionInfo, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;
    approveSessionAsync(sessionAuthentictionStatus: MicrosoftAccountMultiFactorSessionAuthenticationStatus, userAccountId: string, sessionId: string, sessionAuthenticationType: MicrosoftAccountMultiFactorAuthenticationType, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

    denySessionAsync(authenticationSessionInfo: MicrosoftAccountMultiFactorSessionInfo, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;
    denySessionAsync(userAccountId: string, sessionId: string, sessionAuthenticationType: MicrosoftAccountMultiFactorAuthenticationType, callback: (error: Error, result: MicrosoftAccountMultiFactorServiceResponse) => void): void ;

  }

