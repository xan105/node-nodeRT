  export class ESimProfileInstallProgress {
    totalSizeInBytes: Number;
    installedSizeInBytes: Number;
    constructor();
  }

  export class ProfileUsage {
    usageInMegabytes: Number;
    lastSyncTime: Date;
    constructor();
  }

  export class LegacyNetworkOperatorsContract {
    constructor();
  }

  export class NetworkOperatorsFdnContract {
    constructor();
  }

  export enum DataClasses {
    none,
    gprs,
    edge,
    umts,
    hsdpa,
    hsupa,
    lteAdvanced,
    cdma1xRtt,
    cdma1xEvdo,
    cdma1xEvdoRevA,
    cdma1xEvdv,
    cdma3xRtt,
    cdma1xEvdoRevB,
    cdmaUmb,
    custom,
  }

  export enum MobileBroadbandDeviceType {
    unknown,
    embedded,
    removable,
    remote,
  }

  export enum NetworkDeviceStatus {
    deviceNotReady,
    deviceReady,
    simNotInserted,
    badSim,
    deviceHardwareFailure,
    accountNotActivated,
    deviceLocked,
    deviceBlocked,
  }

  export enum NetworkRegistrationState {
    none,
    deregistered,
    searching,
    home,
    roaming,
    partner,
    denied,
  }

  export enum MobileBroadbandRadioState {
    off,
    on,
  }

  export enum NetworkOperatorDataUsageNotificationKind {
    dataUsageProgress,
  }

  export enum NetworkOperatorEventMessageType {
    gsm,
    cdma,
    ussd,
    dataPlanThresholdReached,
    dataPlanReset,
    dataPlanDeleted,
    profileConnected,
    profileDisconnected,
    registeredRoaming,
    registeredHome,
    tetheringEntitlementCheck,
    tetheringOperationalStateChanged,
    tetheringNumberOfClientsChanged,
  }

  export enum MobileBroadbandAccountWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopped,
    aborted,
  }

  export enum TetheringOperationalState {
    unknown,
    on,
    off,
    inTransition,
  }

  export enum TetheringCapability {
    enabled,
    disabledByGroupPolicy,
    disabledByHardwareLimitation,
    disabledByOperator,
    disabledBySku,
    disabledByRequiredAppNotInstalled,
    disabledDueToUnknownCause,
    disabledBySystemCapability,
  }

  export enum TetheringOperationStatus {
    success,
    unknown,
    mobileBroadbandDeviceOff,
    wiFiDeviceOff,
    entitlementCheckTimeout,
    entitlementCheckFailure,
    operationInProgress,
    bluetoothDeviceOff,
    networkLimitedConnectivity,
  }

  export enum MobileBroadbandPinLockState {
    unknown,
    unlocked,
    pinRequired,
    pinUnblockKeyRequired,
  }

  export enum MobileBroadbandPinType {
    none,
    custom,
    pin1,
    pin2,
    simPin,
    firstSimPin,
    networkPin,
    networkSubsetPin,
    serviceProviderPin,
    corporatePin,
    subsidyLock,
  }

  export enum MobileBroadbandPinFormat {
    unknown,
    numeric,
    alphanumeric,
  }

  export enum MobileBroadbandUiccAppOperationStatus {
    success,
    invalidUiccFilePath,
    accessConditionNotHeld,
    uiccBusy,
  }

  export enum UiccAppKind {
    unknown,
    mF,
    mFSim,
    mFRuim,
    uSim,
    cSim,
    iSim,
  }

  export enum UiccAppRecordKind {
    unknown,
    transparent,
    recordOriented,
  }

  export enum UiccAccessCondition {
    alwaysAllowed,
    pin1,
    pin2,
    pin3,
    pin4,
    administrative5,
    administrative6,
    neverAllowed,
  }

  export enum MobileBroadbandModemStatus {
    success,
    otherFailure,
    busy,
    noDeviceSupport,
  }

  export enum ESimAuthenticationPreference {
    onEntry,
    onAction,
    never,
  }

  export enum ESimProfileClass {
    operational,
    test,
    provisioning,
  }

  export enum ESimOperationStatus {
    success,
    notAuthorized,
    notFound,
    policyViolation,
    insufficientSpaceOnCard,
    serverFailure,
    serverNotReachable,
    timeoutWaitingForUserConsent,
    incorrectConfirmationCode,
    confirmationCodeMaxRetriesExceeded,
    cardRemoved,
    cardBusy,
    other,
  }

  export enum ESimProfileMetadataState {
    unknown,
    waitingForInstall,
    downloading,
    installing,
    expired,
    rejectingDownload,
    noLongerAvailable,
    deniedByPolicy,
  }

  export enum ESimProfileState {
    unknown,
    disabled,
    enabled,
    deleted,
  }

  export enum ESimState {
    unknown,
    idle,
    removed,
    busy,
  }

  export enum ESimWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
  }

  export enum HotspotAuthenticationResponseCode {
    noError,
    loginSucceeded,
    loginFailed,
    radiusServerError,
    networkAdministratorError,
    loginAborted,
    accessGatewayInternalError,
  }

  export enum ProfileMediaType {
    wlan,
    wwan,
  }

  export enum UssdResultCode {
    noActionRequired,
    actionRequired,
    terminated,
    otherLocalClient,
    operationNotSupported,
    networkTimeout,
  }

  export class MobileBroadbandAccount {
    static availableNetworkAccountIds: Object;
    currentDeviceInformation: MobileBroadbandDeviceInformation;
    currentNetwork: MobileBroadbandNetwork;
    networkAccountId: String;
    serviceProviderGuid: String;
    serviceProviderName: String;
    accountExperienceUrl: Object;
    constructor();

    static createFromNetworkAccountId(networkAccountId: String): MobileBroadbandAccount;


    getConnectionProfiles(): Object;

  }

  export class MobileBroadbandNetwork {
    accessPointName: String;
    activationNetworkError: Number;
    networkAdapter: Object;
    networkRegistrationState: NetworkRegistrationState;
    packetAttachNetworkError: Number;
    registeredDataClass: DataClasses;
    registeredProviderId: String;
    registeredProviderName: String;
    registrationNetworkError: Number;
    registrationUiccApps: Object;
    constructor();

    getVoiceCallSupportAsync(callback: (error: Error, result: Boolean) => void): void ;

    getCellsInfoAsync(callback: (error: Error, result: MobileBroadbandCellsInfo) => void): void ;

    showConnectionUI(): void;

  }

  export class MobileBroadbandDeviceInformation {
    cellularClass: Number;
    currentRadioState: MobileBroadbandRadioState;
    customDataClass: String;
    dataClasses: DataClasses;
    deviceId: String;
    deviceType: MobileBroadbandDeviceType;
    firmwareInformation: String;
    manufacturer: String;
    mobileEquipmentId: String;
    model: String;
    networkDeviceStatus: NetworkDeviceStatus;
    simIccId: String;
    subscriberId: String;
    telephoneNumbers: Object;
    pinManager: MobileBroadbandPinManager;
    revision: String;
    serialNumber: String;
    simGid1: String;
    simPnn: String;
    simSpn: String;
    constructor();

  }

  export class MobileBroadbandPinManager {
    supportedPins: Object;
    constructor();

    getPin(pinType: MobileBroadbandPinType): MobileBroadbandPin;

  }

  export class MobileBroadbandUiccApp {
    id: Object;
    kind: UiccAppKind;
    constructor();

    getRecordDetailsAsync(uiccFilePath: Object, callback: (error: Error, result: MobileBroadbandUiccAppRecordDetailsResult) => void): void ;

    readRecordAsync(uiccFilePath: Object, recordIndex: Number, callback: (error: Error, result: MobileBroadbandUiccAppReadRecordResult) => void): void ;

  }

  export class MobileBroadbandCellsInfo {
    neighboringCellsCdma: Object;
    neighboringCellsGsm: Object;
    neighboringCellsLte: Object;
    neighboringCellsTdscdma: Object;
    neighboringCellsUmts: Object;
    servingCellsCdma: Object;
    servingCellsGsm: Object;
    servingCellsLte: Object;
    servingCellsTdscdma: Object;
    servingCellsUmts: Object;
    constructor();

  }

  export class NetworkOperatorDataUsageTriggerDetails {
    notificationKind: NetworkOperatorDataUsageNotificationKind;
    constructor();

  }

  export class TetheringEntitlementCheckTriggerDetails {
    networkAccountId: String;
    constructor();

    allowTethering(): void;

    denyTethering(entitlementFailureReason: String): void;

  }

  export class NetworkOperatorTetheringAccessPointConfiguration {
    ssid: String;
    passphrase: String;
    constructor();

  }

  export class NetworkOperatorTetheringOperationResult {
    additionalErrorMessage: String;
    status: TetheringOperationStatus;
    constructor();

  }

  export class NetworkOperatorTetheringManager {
    clientCount: Number;
    maxClientCount: Number;
    tetheringOperationalState: TetheringOperationalState;
    constructor();

    static createFromConnectionProfile(profile: Object, adapter: Object): NetworkOperatorTetheringManager;
    static createFromConnectionProfile(profile: Object): NetworkOperatorTetheringManager;


    static getTetheringCapabilityFromConnectionProfile(profile: Object): TetheringCapability;


    static getTetheringCapability(networkAccountId: String): TetheringCapability;


    static createFromNetworkAccountId(networkAccountId: String): NetworkOperatorTetheringManager;


    configureAccessPointAsync(configuration: NetworkOperatorTetheringAccessPointConfiguration, callback: (error: Error) => void): void ;

    startTetheringAsync(callback: (error: Error, result: NetworkOperatorTetheringOperationResult) => void): void ;

    stopTetheringAsync(callback: (error: Error, result: NetworkOperatorTetheringOperationResult) => void): void ;

    getCurrentAccessPointConfiguration(): NetworkOperatorTetheringAccessPointConfiguration;

    getTetheringClients(): Object;

  }

  export class NetworkOperatorTetheringClient {
    hostNames: Object;
    macAddress: String;
    constructor();

  }

  export class MobileBroadbandAccountEventArgs {
    networkAccountId: String;
    constructor();

  }

  export class MobileBroadbandAccountUpdatedEventArgs {
    hasDeviceInformationChanged: Boolean;
    hasNetworkChanged: Boolean;
    networkAccountId: String;
    constructor();

  }

  export class MobileBroadbandAccountWatcher {
    status: MobileBroadbandAccountWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "AccountAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "AccountAdded", listener: (ev: Event) => void): void ;
    on(type: "AccountAdded", listener: (ev: Event) => void): void ;
    off(type: "AccountAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccountRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "AccountRemoved", listener: (ev: Event) => void): void ;
    on(type: "AccountRemoved", listener: (ev: Event) => void): void ;
    off(type: "AccountRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "AccountUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "AccountUpdated", listener: (ev: Event) => void): void ;
    on(type: "AccountUpdated", listener: (ev: Event) => void): void ;
    off(type: "AccountUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MobileBroadbandModem {
    currentAccount: MobileBroadbandAccount;
    currentNetwork: MobileBroadbandNetwork;
    deviceInformation: MobileBroadbandDeviceInformation;
    deviceServices: Object;
    isResetSupported: Boolean;
    maxDeviceServiceCommandSizeInBytes: Number;
    maxDeviceServiceDataSizeInBytes: Number;
    isInEmergencyCallMode: Boolean;
    constructor();

    static getDeviceSelector(): String;


    static fromId(deviceId: String): MobileBroadbandModem;


    static getDefault(): MobileBroadbandModem;


    resetAsync(callback: (error: Error) => void): void ;

    getCurrentConfigurationAsync(callback: (error: Error, result: MobileBroadbandModemConfiguration) => void): void ;

    getIsPassthroughEnabledAsync(callback: (error: Error, result: Boolean) => void): void ;

    setIsPassthroughEnabledAsync(value: Boolean, callback: (error: Error, result: MobileBroadbandModemStatus) => void): void ;

    tryGetPcoAsync(callback: (error: Error, result: MobileBroadbandPco) => void): void ;

    getDeviceService(deviceServiceId: String): MobileBroadbandDeviceService;

    addListener(type: "IsInEmergencyCallModeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsInEmergencyCallModeChanged", listener: (ev: Event) => void): void ;
    on(type: "IsInEmergencyCallModeChanged", listener: (ev: Event) => void): void ;
    off(type: "IsInEmergencyCallModeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MobileBroadbandUicc {
    simIccId: String;
    constructor();

    getUiccAppsAsync(callback: (error: Error, result: MobileBroadbandUiccAppsResult) => void): void ;

  }

  export class MobileBroadbandSarManager {
    antennas: Object;
    hysteresisTimerPeriod: Number;
    isBackoffEnabled: Boolean;
    isSarControlledByHardware: Boolean;
    isWiFiHardwareIntegrated: Boolean;
    constructor();

    enableBackoffAsync(callback: (error: Error) => void): void ;

    disableBackoffAsync(callback: (error: Error) => void): void ;

    setConfigurationAsync(antennas: Object, callback: (error: Error) => void): void ;

    revertSarToHardwareControlAsync(callback: (error: Error) => void): void ;

    setTransmissionStateChangedHysteresisAsync(timerPeriod: Number, callback: (error: Error) => void): void ;

    getIsTransmittingAsync(callback: (error: Error, result: Boolean) => void): void ;

    startTransmissionStateMonitoring(): void;

    stopTransmissionStateMonitoring(): void;

    addListener(type: "TransmissionStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "TransmissionStateChanged", listener: (ev: Event) => void): void ;
    on(type: "TransmissionStateChanged", listener: (ev: Event) => void): void ;
    off(type: "TransmissionStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MobileBroadbandModemConfiguration {
    homeProviderId: String;
    homeProviderName: String;
    uicc: MobileBroadbandUicc;
    sarManager: MobileBroadbandSarManager;
    constructor();

  }

  export class MobileBroadbandDeviceServiceInformation {
    deviceServiceId: String;
    isDataReadSupported: Boolean;
    isDataWriteSupported: Boolean;
    constructor();

  }

  export class MobileBroadbandDeviceService {
    deviceServiceId: String;
    supportedCommands: Object;
    constructor();

    openDataSession(): MobileBroadbandDeviceServiceDataSession;

    openCommandSession(): MobileBroadbandDeviceServiceCommandSession;

  }

  export class MobileBroadbandPco {
    data: Object;
    deviceId: String;
    isComplete: Boolean;
    constructor();

  }

  export class MobileBroadbandPin {
    attemptsRemaining: Number;
    enabled: Boolean;
    format: MobileBroadbandPinFormat;
    lockState: MobileBroadbandPinLockState;
    maxLength: Number;
    minLength: Number;
    type: MobileBroadbandPinType;
    constructor();

    enableAsync(currentPin: String, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    disableAsync(currentPin: String, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    enterAsync(currentPin: String, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    changeAsync(currentPin: String, newPin: String, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    unblockAsync(pinUnblockKey: String, newPin: String, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

  }

  export class MobileBroadbandPinOperationResult {
    attemptsRemaining: Number;
    isSuccessful: Boolean;
    constructor();

  }

  export class MobileBroadbandDeviceServiceDataSession {
    constructor();

    writeDataAsync(value: Object, callback: (error: Error) => void): void ;

    closeSession(): void;

    addListener(type: "DataReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "DataReceived", listener: (ev: Event) => void): void ;
    on(type: "DataReceived", listener: (ev: Event) => void): void ;
    off(type: "DataReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MobileBroadbandDeviceServiceCommandSession {
    constructor();

    sendQueryCommandAsync(commandId: Number, data: Object, callback: (error: Error, result: MobileBroadbandDeviceServiceCommandResult) => void): void ;

    sendSetCommandAsync(commandId: Number, data: Object, callback: (error: Error, result: MobileBroadbandDeviceServiceCommandResult) => void): void ;

    closeSession(): void;

  }

  export class MobileBroadbandDeviceServiceDataReceivedEventArgs {
    receivedData: Object;
    constructor();

  }

  export class MobileBroadbandDeviceServiceCommandResult {
    responseData: Object;
    statusCode: Number;
    constructor();

  }

  export class MobileBroadbandUiccAppsResult {
    status: MobileBroadbandUiccAppOperationStatus;
    uiccApps: Object;
    constructor();

  }

  export class MobileBroadbandUiccAppRecordDetailsResult {
    kind: UiccAppRecordKind;
    readAccessCondition: UiccAccessCondition;
    recordCount: Number;
    recordSize: Number;
    status: MobileBroadbandUiccAppOperationStatus;
    writeAccessCondition: UiccAccessCondition;
    constructor();

  }

  export class MobileBroadbandUiccAppReadRecordResult {
    data: Object;
    status: MobileBroadbandUiccAppOperationStatus;
    constructor();

  }

  export class MobileBroadbandNetworkRegistrationStateChange {
    deviceId: String;
    network: MobileBroadbandNetwork;
    constructor();

  }

  export class MobileBroadbandNetworkRegistrationStateChangeTriggerDetails {
    networkRegistrationStateChanges: Object;
    constructor();

  }

  export class MobileBroadbandRadioStateChange {
    deviceId: String;
    radioState: MobileBroadbandRadioState;
    constructor();

  }

  export class MobileBroadbandRadioStateChangeTriggerDetails {
    radioStateChanges: Object;
    constructor();

  }

  export class MobileBroadbandPinLockStateChange {
    deviceId: String;
    pinLockState: MobileBroadbandPinLockState;
    pinType: MobileBroadbandPinType;
    constructor();

  }

  export class MobileBroadbandPinLockStateChangeTriggerDetails {
    pinLockStateChanges: Object;
    constructor();

  }

  export class MobileBroadbandDeviceServiceTriggerDetails {
    deviceId: String;
    deviceServiceId: String;
    receivedData: Object;
    constructor();

  }

  export class KnownCSimFilePaths {
    static eFSpn: Object;
    static gid1: Object;
    static gid2: Object;
    constructor();

  }

  export class KnownRuimFilePaths {
    static eFSpn: Object;
    static gid1: Object;
    static gid2: Object;
    constructor();

  }

  export class KnownSimFilePaths {
    static eFOns: Object;
    static eFSpn: Object;
    static gid1: Object;
    static gid2: Object;
    constructor();

  }

  export class KnownUSimFilePaths {
    static eFOpl: Object;
    static eFPnn: Object;
    static eFSpn: Object;
    static gid1: Object;
    static gid2: Object;
    constructor();

  }

  export class MobileBroadbandCellCdma {
    baseStationId: Number;
    baseStationLastBroadcastGpsTime: Number;
    baseStationLatitude: Number;
    baseStationLongitude: Number;
    baseStationPNCode: Number;
    networkId: Number;
    pilotSignalStrengthInDB: Number;
    systemId: Number;
    constructor();

  }

  export class MobileBroadbandCellGsm {
    baseStationId: Number;
    cellId: Number;
    channelNumber: Number;
    locationAreaCode: Number;
    providerId: String;
    receivedSignalStrengthInDBm: Number;
    timingAdvanceInBitPeriods: Number;
    constructor();

  }

  export class MobileBroadbandCellLte {
    cellId: Number;
    channelNumber: Number;
    physicalCellId: Number;
    providerId: String;
    referenceSignalReceivedPowerInDBm: Number;
    referenceSignalReceivedQualityInDBm: Number;
    timingAdvanceInBitPeriods: Number;
    trackingAreaCode: Number;
    constructor();

  }

  export class MobileBroadbandCellTdscdma {
    cellId: Number;
    cellParameterId: Number;
    channelNumber: Number;
    locationAreaCode: Number;
    pathLossInDB: Number;
    providerId: String;
    receivedSignalCodePowerInDBm: Number;
    timingAdvanceInBitPeriods: Number;
    constructor();

  }

  export class MobileBroadbandCellUmts {
    cellId: Number;
    channelNumber: Number;
    locationAreaCode: Number;
    pathLossInDB: Number;
    primaryScramblingCode: Number;
    providerId: String;
    receivedSignalCodePowerInDBm: Number;
    signalToNoiseRatioInDB: Number;
    constructor();

  }

  export class MobileBroadbandModemIsolation {
    constructor();
    constructor(modemDeviceId: String, ruleGroupId: String);

    applyConfigurationAsync(callback: (error: Error) => void): void ;

    clearConfigurationAsync(callback: (error: Error) => void): void ;

    addAllowedHost(host: Object): void;

    addAllowedHostRange(first: Object, last: Object): void;

  }

  export class MobileBroadbandPcoDataChangeTriggerDetails {
    updatedData: MobileBroadbandPco;
    constructor();

  }

  export class MobileBroadbandAntennaSar {
    antennaIndex: Number;
    sarBackoffIndex: Number;
    constructor();
    constructor(antennaIndex: Number, sarBackoffIndex: Number);

  }

  export class MobileBroadbandTransmissionStateChangedEventArgs {
    isTransmitting: Boolean;
    constructor();

  }

  export class ESimPolicy {
    shouldEnableManagingUi: Boolean;
    constructor();

  }

  export class ESimProfile {
    class: ESimProfileClass;
    id: String;
    nickname: String;
    policy: ESimProfilePolicy;
    providerIcon: Object;
    providerId: String;
    providerName: String;
    state: ESimProfileState;
    constructor();

    disableAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    enableAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    setNicknameAsync(newNickname: String, callback: (error: Error, result: ESimOperationResult) => void): void ;

  }

  export class ESimOperationResult {
    status: ESimOperationStatus;
    constructor();

  }

  export class ESimDownloadProfileMetadataResult {
    profileMetadata: ESimProfileMetadata;
    result: ESimOperationResult;
    constructor();

  }

  export class ESim {
    availableMemoryInBytes: Number;
    eid: String;
    firmwareVersion: String;
    mobileBroadbandModemDeviceId: String;
    policy: ESimPolicy;
    state: ESimState;
    constructor();

    deleteProfileAsync(profileId: String, callback: (error: Error, result: ESimOperationResult) => void): void ;

    downloadProfileMetadataAsync(activationCode: String, callback: (error: Error, result: ESimDownloadProfileMetadataResult) => void): void ;

    resetAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    getProfiles(): Object;

    addListener(type: "ProfileChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ProfileChanged", listener: (ev: Event) => void): void ;
    on(type: "ProfileChanged", listener: (ev: Event) => void): void ;
    off(type: "ProfileChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ESimAddedEventArgs {
    eSim: ESim;
    constructor();

  }

  export class ESimProfileMetadata {
    id: String;
    isConfirmationCodeRequired: Boolean;
    policy: ESimProfilePolicy;
    providerIcon: Object;
    providerId: String;
    providerName: String;
    state: ESimProfileMetadataState;
    constructor();

    denyInstallAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    confirmInstallAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;
    confirmInstallAsync(confirmationCode: String, callback: (error: Error, result: ESimOperationResult) => void): void ;

    postponeInstallAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ESimServiceInfo {
    authenticationPreference: ESimAuthenticationPreference;
    isESimUiEnabled: Boolean;
    constructor();

  }

  export class ESimWatcher {
    status: ESimWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ESimManager {
    static serviceInfo: ESimServiceInfo;
    constructor();

    static tryCreateESimWatcher(): ESimWatcher;


    addListener(type: "ServiceInfoChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ServiceInfoChanged", listener: (ev: Event) => void): void ;
    on(type: "ServiceInfoChanged", listener: (ev: Event) => void): void ;
    off(type: "ServiceInfoChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ESimProfilePolicy {
    canDelete: Boolean;
    canDisable: Boolean;
    isManagedByEnterprise: Boolean;
    constructor();

  }

  export class ESimRemovedEventArgs {
    eSim: ESim;
    constructor();

  }

  export class ESimUpdatedEventArgs {
    eSim: ESim;
    constructor();

  }

  export class HotspotAuthenticationEventDetails {
    eventToken: String;
    constructor();

  }

  export class HotspotAuthenticationContext {
    authenticationUrl: Object;
    networkAdapter: Object;
    redirectMessageUrl: Object;
    redirectMessageXml: Object;
    wirelessNetworkId: Array<Number>;
    constructor();

    static tryGetAuthenticationContext(evenToken: String, context: Object): Boolean;


    issueCredentialsAsync(userName: String, password: String, extraParameters: String, markAsManualConnectOnFailure: Boolean, callback: (error: Error, result: HotspotCredentialsAuthenticationResult) => void): void ;

    issueCredentials(userName: String, password: String, extraParameters: String, markAsManualConnectOnFailure: Boolean): void;

    abortAuthentication(markAsManual: Boolean): void;

    skipAuthentication(): void;

    triggerAttentionRequired(packageRelativeApplicationId: String, applicationParameters: String): void;

  }

  export class HotspotCredentialsAuthenticationResult {
    authenticationReplyXml: Object;
    hasNetworkErrorOccurred: Boolean;
    logoffUrl: Object;
    responseCode: HotspotAuthenticationResponseCode;
    constructor();

  }

  export class ProvisionFromXmlDocumentResults {
    allElementsProvisioned: Boolean;
    provisionResultsXml: String;
    constructor();

  }

  export class ProvisionedProfile {
    constructor();

    updateCost(value: Number): void;

    updateUsage(value: ProfileUsage): void;

  }

  export class ProvisioningAgent {
    constructor();

    static createFromNetworkAccountId(networkAccountId: String): ProvisioningAgent;


    provisionFromXmlDocumentAsync(provisioningXmlDocument: String, callback: (error: Error, result: ProvisionFromXmlDocumentResults) => void): void ;

    getProvisionedProfile(mediaType: ProfileMediaType, profileName: String): ProvisionedProfile;

  }

  export class UssdMessage {
    payloadAsText: String;
    dataCodingScheme: Number;
    constructor();
    constructor(messageText: String);

    getPayload(): Array<Number>;

    setPayload(value: Array<Number>): void;

  }

  export class UssdReply {
    message: UssdMessage;
    resultCode: UssdResultCode;
    constructor();

  }

  export class UssdSession {
    constructor();

    static createFromNetworkAccountId(networkAccountId: String): UssdSession;


    static createFromNetworkInterfaceId(networkInterfaceId: String): UssdSession;


    sendMessageAndGetReplyAsync(message: UssdMessage, callback: (error: Error, result: UssdReply) => void): void ;

    close(): void;

  }

  export class NetworkOperatorNotificationEventDetails {
    encodingType: Number;
    message: String;
    networkAccountId: String;
    notificationType: NetworkOperatorEventMessageType;
    ruleId: String;
    smsMessage: Object;
    constructor();

    authorizeTethering(allow: Boolean, entitlementFailureReason: String): void;

  }

  export class FdnAccessManager {
    constructor();

    static requestUnlockAsync(contactListId: String, callback: (error: Error, result: Boolean) => void): void ;


  }

