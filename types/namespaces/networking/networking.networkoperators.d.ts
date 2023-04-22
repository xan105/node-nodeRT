  export class ESimProfileInstallProgress {
    totalSizeInBytes: number;
    installedSizeInBytes: number;
    constructor();
  }

  export class ProfileUsage {
    usageInMegabytes: number;
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
    networkAccountId: string;
    serviceProviderGuid: string;
    serviceProviderName: string;
    accountExperienceUrl: Object;
    constructor();

    static createFromNetworkAccountId(networkAccountId: string): MobileBroadbandAccount;


    getConnectionProfiles(): Object;

  }

  export class MobileBroadbandNetwork {
    accessPointName: string;
    activationNetworkError: number;
    networkAdapter: Object;
    networkRegistrationState: NetworkRegistrationState;
    packetAttachNetworkError: number;
    registeredDataClass: DataClasses;
    registeredProviderId: string;
    registeredProviderName: string;
    registrationNetworkError: number;
    registrationUiccApps: Object;
    constructor();

    getVoiceCallSupportAsync(callback: (error: Error, result: boolean) => void): void ;

    getCellsInfoAsync(callback: (error: Error, result: MobileBroadbandCellsInfo) => void): void ;

    showConnectionUI(): void;

  }

  export class MobileBroadbandDeviceInformation {
    cellularClass: number;
    currentRadioState: MobileBroadbandRadioState;
    customDataClass: string;
    dataClasses: DataClasses;
    deviceId: string;
    deviceType: MobileBroadbandDeviceType;
    firmwareInformation: string;
    manufacturer: string;
    mobileEquipmentId: string;
    model: string;
    networkDeviceStatus: NetworkDeviceStatus;
    simIccId: string;
    subscriberId: string;
    telephoneNumbers: Object;
    pinManager: MobileBroadbandPinManager;
    revision: string;
    serialNumber: string;
    simGid1: string;
    simPnn: string;
    simSpn: string;
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

    readRecordAsync(uiccFilePath: Object, recordIndex: number, callback: (error: Error, result: MobileBroadbandUiccAppReadRecordResult) => void): void ;

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
    networkAccountId: string;
    constructor();

    allowTethering(): void;

    denyTethering(entitlementFailureReason: string): void;

  }

  export class NetworkOperatorTetheringAccessPointConfiguration {
    ssid: string;
    passphrase: string;
    constructor();

  }

  export class NetworkOperatorTetheringOperationResult {
    additionalErrorMessage: string;
    status: TetheringOperationStatus;
    constructor();

  }

  export class NetworkOperatorTetheringManager {
    clientCount: number;
    maxClientCount: number;
    tetheringOperationalState: TetheringOperationalState;
    constructor();

    static createFromConnectionProfile(profile: Object, adapter: Object): NetworkOperatorTetheringManager;
    static createFromConnectionProfile(profile: Object): NetworkOperatorTetheringManager;


    static getTetheringCapabilityFromConnectionProfile(profile: Object): TetheringCapability;


    static getTetheringCapability(networkAccountId: string): TetheringCapability;


    static createFromNetworkAccountId(networkAccountId: string): NetworkOperatorTetheringManager;


    configureAccessPointAsync(configuration: NetworkOperatorTetheringAccessPointConfiguration, callback: (error: Error) => void): void ;

    startTetheringAsync(callback: (error: Error, result: NetworkOperatorTetheringOperationResult) => void): void ;

    stopTetheringAsync(callback: (error: Error, result: NetworkOperatorTetheringOperationResult) => void): void ;

    getCurrentAccessPointConfiguration(): NetworkOperatorTetheringAccessPointConfiguration;

    getTetheringClients(): Object;

  }

  export class NetworkOperatorTetheringClient {
    hostNames: Object;
    macAddress: string;
    constructor();

  }

  export class MobileBroadbandAccountEventArgs {
    networkAccountId: string;
    constructor();

  }

  export class MobileBroadbandAccountUpdatedEventArgs {
    hasDeviceInformationChanged: boolean;
    hasNetworkChanged: boolean;
    networkAccountId: string;
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
    isResetSupported: boolean;
    maxDeviceServiceCommandSizeInBytes: number;
    maxDeviceServiceDataSizeInBytes: number;
    isInEmergencyCallMode: boolean;
    constructor();

    static getDeviceSelector(): string;


    static fromId(deviceId: string): MobileBroadbandModem;


    static getDefault(): MobileBroadbandModem;


    resetAsync(callback: (error: Error) => void): void ;

    getCurrentConfigurationAsync(callback: (error: Error, result: MobileBroadbandModemConfiguration) => void): void ;

    getIsPassthroughEnabledAsync(callback: (error: Error, result: boolean) => void): void ;

    setIsPassthroughEnabledAsync(value: boolean, callback: (error: Error, result: MobileBroadbandModemStatus) => void): void ;

    tryGetPcoAsync(callback: (error: Error, result: MobileBroadbandPco) => void): void ;

    getDeviceService(deviceServiceId: string): MobileBroadbandDeviceService;

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
    simIccId: string;
    constructor();

    getUiccAppsAsync(callback: (error: Error, result: MobileBroadbandUiccAppsResult) => void): void ;

  }

  export class MobileBroadbandSarManager {
    antennas: Object;
    hysteresisTimerPeriod: number;
    isBackoffEnabled: boolean;
    isSarControlledByHardware: boolean;
    isWiFiHardwareIntegrated: boolean;
    constructor();

    enableBackoffAsync(callback: (error: Error) => void): void ;

    disableBackoffAsync(callback: (error: Error) => void): void ;

    setConfigurationAsync(antennas: Object, callback: (error: Error) => void): void ;

    revertSarToHardwareControlAsync(callback: (error: Error) => void): void ;

    setTransmissionStateChangedHysteresisAsync(timerPeriod: number, callback: (error: Error) => void): void ;

    getIsTransmittingAsync(callback: (error: Error, result: boolean) => void): void ;

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
    homeProviderId: string;
    homeProviderName: string;
    uicc: MobileBroadbandUicc;
    sarManager: MobileBroadbandSarManager;
    constructor();

  }

  export class MobileBroadbandDeviceServiceInformation {
    deviceServiceId: string;
    isDataReadSupported: boolean;
    isDataWriteSupported: boolean;
    constructor();

  }

  export class MobileBroadbandDeviceService {
    deviceServiceId: string;
    supportedCommands: Object;
    constructor();

    openDataSession(): MobileBroadbandDeviceServiceDataSession;

    openCommandSession(): MobileBroadbandDeviceServiceCommandSession;

  }

  export class MobileBroadbandPco {
    data: Object;
    deviceId: string;
    isComplete: boolean;
    constructor();

  }

  export class MobileBroadbandPin {
    attemptsRemaining: number;
    enabled: boolean;
    format: MobileBroadbandPinFormat;
    lockState: MobileBroadbandPinLockState;
    maxLength: number;
    minLength: number;
    type: MobileBroadbandPinType;
    constructor();

    enableAsync(currentPin: string, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    disableAsync(currentPin: string, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    enterAsync(currentPin: string, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    changeAsync(currentPin: string, newPin: string, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

    unblockAsync(pinUnblockKey: string, newPin: string, callback: (error: Error, result: MobileBroadbandPinOperationResult) => void): void ;

  }

  export class MobileBroadbandPinOperationResult {
    attemptsRemaining: number;
    isSuccessful: boolean;
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

    sendQueryCommandAsync(commandId: number, data: Object, callback: (error: Error, result: MobileBroadbandDeviceServiceCommandResult) => void): void ;

    sendSetCommandAsync(commandId: number, data: Object, callback: (error: Error, result: MobileBroadbandDeviceServiceCommandResult) => void): void ;

    closeSession(): void;

  }

  export class MobileBroadbandDeviceServiceDataReceivedEventArgs {
    receivedData: Object;
    constructor();

  }

  export class MobileBroadbandDeviceServiceCommandResult {
    responseData: Object;
    statusCode: number;
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
    recordCount: number;
    recordSize: number;
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
    deviceId: string;
    network: MobileBroadbandNetwork;
    constructor();

  }

  export class MobileBroadbandNetworkRegistrationStateChangeTriggerDetails {
    networkRegistrationStateChanges: Object;
    constructor();

  }

  export class MobileBroadbandRadioStateChange {
    deviceId: string;
    radioState: MobileBroadbandRadioState;
    constructor();

  }

  export class MobileBroadbandRadioStateChangeTriggerDetails {
    radioStateChanges: Object;
    constructor();

  }

  export class MobileBroadbandPinLockStateChange {
    deviceId: string;
    pinLockState: MobileBroadbandPinLockState;
    pinType: MobileBroadbandPinType;
    constructor();

  }

  export class MobileBroadbandPinLockStateChangeTriggerDetails {
    pinLockStateChanges: Object;
    constructor();

  }

  export class MobileBroadbandDeviceServiceTriggerDetails {
    deviceId: string;
    deviceServiceId: string;
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
    baseStationId: number;
    baseStationLastBroadcastGpsTime: number;
    baseStationLatitude: number;
    baseStationLongitude: number;
    baseStationPNCode: number;
    networkId: number;
    pilotSignalStrengthInDB: number;
    systemId: number;
    constructor();

  }

  export class MobileBroadbandCellGsm {
    baseStationId: number;
    cellId: number;
    channelNumber: number;
    locationAreaCode: number;
    providerId: string;
    receivedSignalStrengthInDBm: number;
    timingAdvanceInBitPeriods: number;
    constructor();

  }

  export class MobileBroadbandCellLte {
    cellId: number;
    channelNumber: number;
    physicalCellId: number;
    providerId: string;
    referenceSignalReceivedPowerInDBm: number;
    referenceSignalReceivedQualityInDBm: number;
    timingAdvanceInBitPeriods: number;
    trackingAreaCode: number;
    constructor();

  }

  export class MobileBroadbandCellTdscdma {
    cellId: number;
    cellParameterId: number;
    channelNumber: number;
    locationAreaCode: number;
    pathLossInDB: number;
    providerId: string;
    receivedSignalCodePowerInDBm: number;
    timingAdvanceInBitPeriods: number;
    constructor();

  }

  export class MobileBroadbandCellUmts {
    cellId: number;
    channelNumber: number;
    locationAreaCode: number;
    pathLossInDB: number;
    primaryScramblingCode: number;
    providerId: string;
    receivedSignalCodePowerInDBm: number;
    signalToNoiseRatioInDB: number;
    constructor();

  }

  export class MobileBroadbandModemIsolation {
    constructor();
    constructor(modemDeviceId: string, ruleGroupId: string);

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
    antennaIndex: number;
    sarBackoffIndex: number;
    constructor();
    constructor(antennaIndex: number, sarBackoffIndex: number);

  }

  export class MobileBroadbandTransmissionStateChangedEventArgs {
    isTransmitting: boolean;
    constructor();

  }

  export class ESimPolicy {
    shouldEnableManagingUi: boolean;
    constructor();

  }

  export class ESimProfile {
    class: ESimProfileClass;
    id: string;
    nickname: string;
    policy: ESimProfilePolicy;
    providerIcon: Object;
    providerId: string;
    providerName: string;
    state: ESimProfileState;
    constructor();

    disableAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    enableAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    setNicknameAsync(newNickname: string, callback: (error: Error, result: ESimOperationResult) => void): void ;

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
    availableMemoryInBytes: number;
    eid: string;
    firmwareVersion: string;
    mobileBroadbandModemDeviceId: string;
    policy: ESimPolicy;
    state: ESimState;
    constructor();

    deleteProfileAsync(profileId: string, callback: (error: Error, result: ESimOperationResult) => void): void ;

    downloadProfileMetadataAsync(activationCode: string, callback: (error: Error, result: ESimDownloadProfileMetadataResult) => void): void ;

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
    id: string;
    isConfirmationCodeRequired: boolean;
    policy: ESimProfilePolicy;
    providerIcon: Object;
    providerId: string;
    providerName: string;
    state: ESimProfileMetadataState;
    constructor();

    denyInstallAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;

    confirmInstallAsync(callback: (error: Error, result: ESimOperationResult) => void): void ;
    confirmInstallAsync(confirmationCode: string, callback: (error: Error, result: ESimOperationResult) => void): void ;

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
    isESimUiEnabled: boolean;
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
    canDelete: boolean;
    canDisable: boolean;
    isManagedByEnterprise: boolean;
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
    eventToken: string;
    constructor();

  }

  export class HotspotAuthenticationContext {
    authenticationUrl: Object;
    networkAdapter: Object;
    redirectMessageUrl: Object;
    redirectMessageXml: Object;
    wirelessNetworkId: Array<number>;
    constructor();

    static tryGetAuthenticationContext(evenToken: string, context: Object): boolean;


    issueCredentialsAsync(userName: string, password: string, extraParameters: string, markAsManualConnectOnFailure: boolean, callback: (error: Error, result: HotspotCredentialsAuthenticationResult) => void): void ;

    issueCredentials(userName: string, password: string, extraParameters: string, markAsManualConnectOnFailure: boolean): void;

    abortAuthentication(markAsManual: boolean): void;

    skipAuthentication(): void;

    triggerAttentionRequired(packageRelativeApplicationId: string, applicationParameters: string): void;

  }

  export class HotspotCredentialsAuthenticationResult {
    authenticationReplyXml: Object;
    hasNetworkErrorOccurred: boolean;
    logoffUrl: Object;
    responseCode: HotspotAuthenticationResponseCode;
    constructor();

  }

  export class ProvisionFromXmlDocumentResults {
    allElementsProvisioned: boolean;
    provisionResultsXml: string;
    constructor();

  }

  export class ProvisionedProfile {
    constructor();

    updateCost(value: number): void;

    updateUsage(value: ProfileUsage): void;

  }

  export class ProvisioningAgent {
    constructor();

    static createFromNetworkAccountId(networkAccountId: string): ProvisioningAgent;


    provisionFromXmlDocumentAsync(provisioningXmlDocument: string, callback: (error: Error, result: ProvisionFromXmlDocumentResults) => void): void ;

    getProvisionedProfile(mediaType: ProfileMediaType, profileName: string): ProvisionedProfile;

  }

  export class UssdMessage {
    payloadAsText: string;
    dataCodingScheme: number;
    constructor();
    constructor(messageText: string);

    getPayload(): Array<number>;

    setPayload(value: Array<number>): void;

  }

  export class UssdReply {
    message: UssdMessage;
    resultCode: UssdResultCode;
    constructor();

  }

  export class UssdSession {
    constructor();

    static createFromNetworkAccountId(networkAccountId: string): UssdSession;


    static createFromNetworkInterfaceId(networkInterfaceId: string): UssdSession;


    sendMessageAndGetReplyAsync(message: UssdMessage, callback: (error: Error, result: UssdReply) => void): void ;

    close(): void;

  }

  export class NetworkOperatorNotificationEventDetails {
    encodingType: number;
    message: string;
    networkAccountId: string;
    notificationType: NetworkOperatorEventMessageType;
    ruleId: string;
    smsMessage: Object;
    constructor();

    authorizeTethering(allow: boolean, entitlementFailureReason: string): void;

  }

  export class FdnAccessManager {
    constructor();

    static requestUnlockAsync(contactListId: string, callback: (error: Error, result: boolean) => void): void ;


  }

