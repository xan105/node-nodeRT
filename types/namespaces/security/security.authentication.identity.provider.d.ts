  export enum SecondaryAuthenticationFactorDeviceCapabilities {
    none,
    secureStorage,
    storeKeys,
    confirmUserIntentToAuthenticate,
    supportSecureUserPresenceCheck,
    transmittedDataIsEncrypted,
    hMacSha256,
    closeRangeDataTransmission,
  }

  export enum SecondaryAuthenticationFactorDeviceFindScope {
    user,
    allUsers,
  }

  export enum SecondaryAuthenticationFactorAuthenticationStage {
    notStarted,
    waitingForUserConfirmation,
    collectingCredential,
    suspendingAuthentication,
    credentialCollected,
    credentialAuthenticated,
    stoppingAuthentication,
    readyForLock,
    checkingDevicePresence,
  }

  export enum SecondaryAuthenticationFactorRegistrationStatus {
    failed,
    started,
    canceledByUser,
    pinSetupRequired,
    disabledByPolicy,
  }

  export enum SecondaryAuthenticationFactorDevicePresenceMonitoringRegistrationStatus {
    unsupported,
    succeeded,
    disabledByPolicy,
  }

  export enum SecondaryAuthenticationFactorAuthenticationStatus {
    failed,
    started,
    unknownDevice,
    disabledByPolicy,
    invalidAuthenticationStage,
  }

  export enum SecondaryAuthenticationFactorFinishAuthenticationStatus {
    failed,
    completed,
    nonceExpired,
  }

  export enum SecondaryAuthenticationFactorAuthenticationScenario {
    signIn,
    credentialPrompt,
  }

  export enum SecondaryAuthenticationFactorAuthenticationMessage {
    invalid,
    swipeUpWelcome,
    tapWelcome,
    deviceNeedsAttention,
    lookingForDevice,
    lookingForDevicePluggedin,
    bluetoothIsDisabled,
    nfcIsDisabled,
    wiFiIsDisabled,
    extraTapIsRequired,
    disabledByPolicy,
    tapOnDeviceRequired,
    holdFinger,
    scanFinger,
    unauthorizedUser,
    reregisterRequired,
    tryAgain,
    sayPassphrase,
    readyToSignIn,
    useAnotherSignInOption,
    connectionRequired,
    timeLimitExceeded,
    canceledByUser,
    centerHand,
    moveHandCloser,
    moveHandFarther,
    placeHandAbove,
    recognitionFailed,
    deviceUnavailable,
  }

  export enum SecondaryAuthenticationFactorDevicePresence {
    absent,
    present,
  }

  export enum SecondaryAuthenticationFactorDevicePresenceMonitoringMode {
    unsupported,
    appManaged,
    systemManaged,
  }

  export class SecondaryAuthenticationFactorRegistration {
    constructor();

    static registerDevicePresenceMonitoringAsync(deviceId: string, deviceInstancePath: string, monitoringMode: SecondaryAuthenticationFactorDevicePresenceMonitoringMode, callback: (error: Error, result: SecondaryAuthenticationFactorDevicePresenceMonitoringRegistrationStatus) => void): void ;
    static registerDevicePresenceMonitoringAsync(deviceId: string, deviceInstancePath: string, monitoringMode: SecondaryAuthenticationFactorDevicePresenceMonitoringMode, deviceFriendlyName: string, deviceModelNumber: string, deviceConfigurationData: Object, callback: (error: Error, result: SecondaryAuthenticationFactorDevicePresenceMonitoringRegistrationStatus) => void): void ;


    static unregisterDevicePresenceMonitoringAsync(deviceId: string, callback: (error: Error) => void): void ;


    static requestStartRegisteringDeviceAsync(deviceId: string, capabilities: SecondaryAuthenticationFactorDeviceCapabilities, deviceFriendlyName: string, deviceModelNumber: string, deviceKey: Object, mutualAuthenticationKey: Object, callback: (error: Error, result: SecondaryAuthenticationFactorRegistrationResult) => void): void ;


    static findAllRegisteredDeviceInfoAsync(queryType: SecondaryAuthenticationFactorDeviceFindScope, callback: (error: Error, result: Object) => void): void ;


    static unregisterDeviceAsync(deviceId: string, callback: (error: Error) => void): void ;


    static updateDeviceConfigurationDataAsync(deviceId: string, deviceConfigurationData: Object, callback: (error: Error) => void): void ;


    static isDevicePresenceMonitoringSupported(): boolean;


    finishRegisteringDeviceAsync(deviceConfigurationData: Object, callback: (error: Error) => void): void ;

    abortRegisteringDeviceAsync(errorLogMessage: string, callback: (error: Error) => void): void ;

  }

  export class SecondaryAuthenticationFactorRegistrationResult {
    registration: SecondaryAuthenticationFactorRegistration;
    status: SecondaryAuthenticationFactorRegistrationStatus;
    constructor();

  }

  export class SecondaryAuthenticationFactorAuthentication {
    deviceConfigurationData: Object;
    deviceNonce: Object;
    serviceAuthenticationHmac: Object;
    sessionNonce: Object;
    constructor();

    static showNotificationMessageAsync(deviceName: string, message: SecondaryAuthenticationFactorAuthenticationMessage, callback: (error: Error) => void): void ;


    static startAuthenticationAsync(deviceId: string, serviceAuthenticationNonce: Object, callback: (error: Error, result: SecondaryAuthenticationFactorAuthenticationResult) => void): void ;


    static getAuthenticationStageInfoAsync(callback: (error: Error, result: SecondaryAuthenticationFactorAuthenticationStageInfo) => void): void ;


    finishAuthenticationAsync(deviceHmac: Object, sessionHmac: Object, callback: (error: Error, result: SecondaryAuthenticationFactorFinishAuthenticationStatus) => void): void ;

    abortAuthenticationAsync(errorLogMessage: string, callback: (error: Error) => void): void ;

    addListener(type: "AuthenticationStageChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AuthenticationStageChanged", listener: (ev: Event) => void): void ;
    on(type: "AuthenticationStageChanged", listener: (ev: Event) => void): void ;
    off(type: "AuthenticationStageChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SecondaryAuthenticationFactorAuthenticationResult {
    authentication: SecondaryAuthenticationFactorAuthentication;
    status: SecondaryAuthenticationFactorAuthenticationStatus;
    constructor();

  }

  export class SecondaryAuthenticationFactorInfo {
    deviceConfigurationData: Object;
    deviceFriendlyName: string;
    deviceId: string;
    deviceModelNumber: string;
    isAuthenticationSupported: boolean;
    presenceMonitoringMode: SecondaryAuthenticationFactorDevicePresenceMonitoringMode;
    constructor();

    updateDevicePresenceAsync(presenceState: SecondaryAuthenticationFactorDevicePresence, callback: (error: Error) => void): void ;

  }

  export class SecondaryAuthenticationFactorAuthenticationStageChangedEventArgs {
    stageInfo: SecondaryAuthenticationFactorAuthenticationStageInfo;
    constructor();

  }

  export class SecondaryAuthenticationFactorAuthenticationStageInfo {
    deviceId: string;
    scenario: SecondaryAuthenticationFactorAuthenticationScenario;
    stage: SecondaryAuthenticationFactorAuthenticationStage;
    constructor();

  }

