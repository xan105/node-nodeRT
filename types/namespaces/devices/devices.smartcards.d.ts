  export class SmartCardBackgroundTriggerContract {
    constructor();
  }

  export class SmartCardEmulatorContract {
    constructor();
  }

  export enum SmartCardTriggerType {
    emulatorTransaction,
    emulatorNearFieldEntry,
    emulatorNearFieldExit,
    emulatorHostApplicationActivated,
    emulatorAppletIdGroupRegistrationChanged,
    readerCardAdded,
  }

  export enum SmartCardLaunchBehavior {
    default,
    aboveLock,
  }

  export enum SmartCardEmulatorEnablementPolicy {
    never,
    always,
    screenOn,
    screenUnlocked,
  }

  export enum SmartCardEmulationCategory {
    other,
    payment,
  }

  export enum SmartCardEmulationType {
    host,
    uicc,
    embeddedSE,
  }

  export enum SmartCardAppletIdGroupActivationPolicy {
    disabled,
    foregroundOverride,
    enabled,
  }

  export enum SmartCardActivationPolicyChangeResult {
    denied,
    allowed,
  }

  export enum SmartCardEmulatorConnectionDeactivatedReason {
    connectionLost,
    connectionRedirected,
  }

  export enum SmartCardEmulatorConnectionSource {
    unknown,
    nfcReader,
  }

  export enum SmartCardAutomaticResponseStatus {
    none,
    success,
    unknownError,
  }

  export enum SmartCardUnlockPromptingBehavior {
    allowUnlockPrompt,
    requireUnlockPrompt,
    preventUnlockPrompt,
  }

  export enum SmartCardCryptogramStorageKeyAlgorithm {
    none,
    rsa2048,
  }

  export enum SmartCardCryptogramMaterialType {
    none,
    staticDataAuthentication,
    tripleDes112,
    aes,
    rsaPkcs1,
  }

  export enum SmartCardCryptogramMaterialProtectionMethod {
    none,
    whiteBoxing,
  }

  export enum SmartCardCryptogramAlgorithm {
    none,
    cbcMac,
    cvc3Umd,
    decimalizedMsd,
    cvc3MD,
    sha1,
    signedDynamicApplicationData,
    rsaPkcs1,
    sha256Hmac,
  }

  export enum SmartCardCryptogramMaterialPackageFormat {
    none,
    jweRsaPki,
  }

  export enum SmartCardCryptogramStorageKeyCapabilities {
    none,
    hardwareProtection,
    unlockPrompt,
  }

  export enum SmartCardCryptogramMaterialPackageConfirmationResponseFormat {
    none,
    visaHmac,
  }

  export enum SmartCardCryptogramPlacementOptions {
    none,
    unitsAreInNibbles,
    chainOutput,
  }

  export enum SmartCardCryptogramGeneratorOperationStatus {
    success,
    authorizationFailed,
    authorizationCanceled,
    authorizationRequired,
    cryptogramMaterialPackageStorageKeyExists,
    noCryptogramMaterialPackageStorageKey,
    noCryptogramMaterialPackage,
    unsupportedCryptogramMaterialPackage,
    unknownCryptogramMaterialName,
    invalidCryptogramMaterialUsage,
    apduResponseNotSent,
    otherError,
    validationFailed,
    notSupported,
  }

  export enum SmartCardCryptographicKeyAttestationStatus {
    noAttestation,
    softwareKeyWithoutTpm,
    softwareKeyWithTpm,
    tpmKeyUnknownAttestationStatus,
    tpmKeyWithoutAttestationCapability,
    tpmKeyWithTemporaryAttestationFailure,
    tpmKeyWithLongTermAttestationFailure,
    tpmKeyWithAttestation,
  }

  export enum SmartCardReaderKind {
    any,
    generic,
    tpm,
    nfc,
    uicc,
    embeddedSE,
  }

  export enum SmartCardReaderStatus {
    disconnected,
    ready,
    exclusive,
  }

  export enum SmartCardStatus {
    disconnected,
    ready,
    shared,
    exclusive,
    unresponsive,
  }

  export enum SmartCardPinCharacterPolicyOption {
    allow,
    requireAtLeastOne,
    disallow,
  }

  export class SmartCardTriggerDetails {
    sourceAppletId: Object;
    triggerData: Object;
    triggerType: SmartCardTriggerType;
    emulator: SmartCardEmulator;
    smartCard: SmartCard;
    constructor();

    tryLaunchCurrentAppAsync(arguments: string, callback: (error: Error, result: boolean) => void): void ;
    tryLaunchCurrentAppAsync(arguments: string, behavior: SmartCardLaunchBehavior, callback: (error: Error, result: boolean) => void): void ;

  }

  export class SmartCardEmulator {
    static maxAppletIdGroupRegistrations: number;
    enablementPolicy: SmartCardEmulatorEnablementPolicy;
    constructor();

    static getAppletIdGroupRegistrationsAsync(callback: (error: Error, result: Object) => void): void ;


    static registerAppletIdGroupAsync(appletIdGroup: SmartCardAppletIdGroup, callback: (error: Error, result: SmartCardAppletIdGroupRegistration) => void): void ;


    static unregisterAppletIdGroupAsync(registration: SmartCardAppletIdGroupRegistration, callback: (error: Error) => void): void ;


    static getDefaultAsync(callback: (error: Error, result: SmartCardEmulator) => void): void ;


    static isSupported(): boolean;


    start(): void;

    isHostCardEmulationSupported(): boolean;

    addListener(type: "ApduReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ApduReceived", listener: (ev: Event) => void): void ;
    on(type: "ApduReceived", listener: (ev: Event) => void): void ;
    off(type: "ApduReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "ConnectionDeactivated", listener: (ev: Event) => void): void ;
    removeListener(type: "ConnectionDeactivated", listener: (ev: Event) => void): void ;
    on(type: "ConnectionDeactivated", listener: (ev: Event) => void): void ;
    off(type: "ConnectionDeactivated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SmartCardAppletIdGroupRegistration {
    activationPolicy: SmartCardAppletIdGroupActivationPolicy;
    appletIdGroup: SmartCardAppletIdGroup;
    id: string;
    constructor();

    requestActivationPolicyChangeAsync(policy: SmartCardAppletIdGroupActivationPolicy, callback: (error: Error, result: SmartCardActivationPolicyChangeResult) => void): void ;

    setAutomaticResponseApdusAsync(apdus: Object, callback: (error: Error) => void): void ;

  }

  export class SmartCardAppletIdGroup {
    static maxAppletIds: number;
    smartCardEmulationType: SmartCardEmulationType;
    smartCardEmulationCategory: SmartCardEmulationCategory;
    displayName: string;
    automaticEnablement: boolean;
    appletIds: Object;
    constructor();
    constructor(displayName: string, appletIds: Object, emulationCategory: SmartCardEmulationCategory, emulationType: SmartCardEmulationType);

  }

  export class SmartCardEmulatorApduReceivedEventArgs {
    automaticResponseStatus: SmartCardAutomaticResponseStatus;
    commandApdu: Object;
    connectionProperties: SmartCardEmulatorConnectionProperties;
    state: number;
    constructor();

    tryRespondAsync(responseApdu: Object, callback: (error: Error, result: boolean) => void): void ;
    tryRespondAsync(responseApdu: Object, nextState: number, callback: (error: Error, result: boolean) => void): void ;

    tryRespondWithCryptogramsAsync(responseTemplate: Object, cryptogramPlacementSteps: Object, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;
    tryRespondWithCryptogramsAsync(responseTemplate: Object, cryptogramPlacementSteps: Object, nextState: number, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;

  }

  export class SmartCardEmulatorConnectionDeactivatedEventArgs {
    connectionProperties: SmartCardEmulatorConnectionProperties;
    reason: SmartCardEmulatorConnectionDeactivatedReason;
    constructor();

  }

  export class SmartCardEmulatorConnectionProperties {
    id: string;
    source: SmartCardEmulatorConnectionSource;
    constructor();

  }

  export class SmartCardAutomaticResponseApdu {
    shouldMatchLength: boolean;
    responseApdu: Object;
    commandApduBitMask: Object;
    commandApdu: Object;
    appletId: Object;
    outputState: number;
    inputState: number;
    allowWhenCryptogramGeneratorNotPrepared: boolean;
    constructor();
    constructor(commandApdu: Object, responseApdu: Object);

  }

  export class SmartCardCryptogramPlacementStep {
    templateOffset: number;
    sourceData: Object;
    cryptogramPlacementOptions: SmartCardCryptogramPlacementOptions;
    cryptogramOffset: number;
    cryptogramMaterialPackageName: string;
    cryptogramMaterialName: string;
    cryptogramLength: number;
    chainedOutputStep: SmartCardCryptogramPlacementStep;
    algorithm: SmartCardCryptogramAlgorithm;
    constructor();

  }

  export class SmartCardCryptogramStorageKeyCharacteristics {
    algorithm: SmartCardCryptogramStorageKeyAlgorithm;
    capabilities: SmartCardCryptogramStorageKeyCapabilities;
    dateCreated: Date;
    storageKeyName: string;
    constructor();

  }

  export class SmartCardCryptogramMaterialPackageCharacteristics {
    dateImported: Date;
    packageFormat: SmartCardCryptogramMaterialPackageFormat;
    packageName: string;
    storageKeyName: string;
    constructor();

  }

  export class SmartCardCryptogramMaterialCharacteristics {
    allowedAlgorithms: Object;
    allowedProofOfPossessionAlgorithms: Object;
    allowedValidations: Object;
    materialLength: number;
    materialName: string;
    materialType: SmartCardCryptogramMaterialType;
    protectionMethod: SmartCardCryptogramMaterialProtectionMethod;
    protectionVersion: number;
    constructor();

  }

  export class SmartCardCryptogramGenerator {
    supportedCryptogramAlgorithms: Object;
    supportedCryptogramMaterialPackageConfirmationResponseFormats: Object;
    supportedCryptogramMaterialPackageFormats: Object;
    supportedCryptogramMaterialTypes: Object;
    supportedSmartCardCryptogramStorageKeyCapabilities: Object;
    constructor();

    static getSmartCardCryptogramGeneratorAsync(callback: (error: Error, result: SmartCardCryptogramGenerator) => void): void ;


    static isSupported(): boolean;


    deleteCryptogramMaterialStorageKeyAsync(storageKeyName: string, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;

    createCryptogramMaterialStorageKeyAsync(promptingBehavior: SmartCardUnlockPromptingBehavior, storageKeyName: string, algorithm: SmartCardCryptogramStorageKeyAlgorithm, capabilities: SmartCardCryptogramStorageKeyCapabilities, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;

    requestCryptogramMaterialStorageKeyInfoAsync(promptingBehavior: SmartCardUnlockPromptingBehavior, storageKeyName: string, format: number, callback: (error: Error, result: SmartCardCryptogramStorageKeyInfo) => void): void ;

    importCryptogramMaterialPackageAsync(format: SmartCardCryptogramMaterialPackageFormat, storageKeyName: string, materialPackageName: string, cryptogramMaterialPackage: Object, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;

    tryProvePossessionOfCryptogramMaterialPackageAsync(promptingBehavior: SmartCardUnlockPromptingBehavior, responseFormat: SmartCardCryptogramMaterialPackageConfirmationResponseFormat, materialPackageName: string, materialName: string, challenge: Object, callback: (error: Error, result: SmartCardCryptogramMaterialPossessionProof) => void): void ;

    requestUnlockCryptogramMaterialForUseAsync(promptingBehavior: SmartCardUnlockPromptingBehavior, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;

    deleteCryptogramMaterialPackageAsync(materialPackageName: string, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;

    validateRequestApduAsync(promptingBehavior: SmartCardUnlockPromptingBehavior, apduToValidate: Object, cryptogramPlacementSteps: Object, callback: (error: Error, result: SmartCardCryptogramGeneratorOperationStatus) => void): void ;

    getAllCryptogramStorageKeyCharacteristicsAsync(callback: (error: Error, result: SmartCardCryptogramGetAllCryptogramStorageKeyCharacteristicsResult) => void): void ;

    getAllCryptogramMaterialPackageCharacteristicsAsync(callback: (error: Error, result: SmartCardCryptogramGetAllCryptogramMaterialPackageCharacteristicsResult) => void): void ;
    getAllCryptogramMaterialPackageCharacteristicsAsync(storageKeyName: string, callback: (error: Error, result: SmartCardCryptogramGetAllCryptogramMaterialPackageCharacteristicsResult) => void): void ;

    getAllCryptogramMaterialCharacteristicsAsync(promptingBehavior: SmartCardUnlockPromptingBehavior, materialPackageName: string, callback: (error: Error, result: SmartCardCryptogramGetAllCryptogramMaterialCharacteristicsResult) => void): void ;

  }

  export class SmartCardCryptogramStorageKeyInfo {
    attestation: Object;
    attestationCertificateChain: Object;
    attestationStatus: SmartCardCryptographicKeyAttestationStatus;
    capabilities: SmartCardCryptogramStorageKeyCapabilities;
    operationStatus: SmartCardCryptogramGeneratorOperationStatus;
    publicKey: Object;
    publicKeyBlobType: number;
    operationalRequirements: string;
    constructor();

  }

  export class SmartCardCryptogramMaterialPossessionProof {
    operationStatus: SmartCardCryptogramGeneratorOperationStatus;
    proof: Object;
    constructor();

  }

  export class SmartCardCryptogramGetAllCryptogramStorageKeyCharacteristicsResult {
    characteristics: Object;
    operationStatus: SmartCardCryptogramGeneratorOperationStatus;
    constructor();

  }

  export class SmartCardCryptogramGetAllCryptogramMaterialPackageCharacteristicsResult {
    characteristics: Object;
    operationStatus: SmartCardCryptogramGeneratorOperationStatus;
    constructor();

  }

  export class SmartCardCryptogramGetAllCryptogramMaterialCharacteristicsResult {
    characteristics: Object;
    operationStatus: SmartCardCryptogramGeneratorOperationStatus;
    constructor();

  }

  export class SmartCardReader {
    deviceId: string;
    kind: SmartCardReaderKind;
    name: string;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: SmartCardReader) => void): void ;


    static getDeviceSelector(): string;
    static getDeviceSelector(kind: SmartCardReaderKind): string;


    getStatusAsync(callback: (error: Error, result: SmartCardReaderStatus) => void): void ;

    findAllCardsAsync(callback: (error: Error, result: Object) => void): void ;

    addListener(type: "CardAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "CardAdded", listener: (ev: Event) => void): void ;
    on(type: "CardAdded", listener: (ev: Event) => void): void ;
    off(type: "CardAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "CardRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "CardRemoved", listener: (ev: Event) => void): void ;
    on(type: "CardRemoved", listener: (ev: Event) => void): void ;
    off(type: "CardRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SmartCard {
    reader: SmartCardReader;
    constructor();

    getStatusAsync(callback: (error: Error, result: SmartCardStatus) => void): void ;

    getAnswerToResetAsync(callback: (error: Error, result: Object) => void): void ;

    connectAsync(callback: (error: Error, result: SmartCardConnection) => void): void ;

  }

  export class CardAddedEventArgs {
    smartCard: SmartCard;
    constructor();

  }

  export class CardRemovedEventArgs {
    smartCard: SmartCard;
    constructor();

  }

  export class SmartCardProvisioning {
    smartCard: SmartCard;
    constructor();

    static requestAttestedVirtualSmartCardCreationAsync(friendlyName: string, administrativeKey: Object, pinPolicy: SmartCardPinPolicy, callback: (error: Error, result: SmartCardProvisioning) => void): void ;
    static requestAttestedVirtualSmartCardCreationAsync(friendlyName: string, administrativeKey: Object, pinPolicy: SmartCardPinPolicy, cardId: string, callback: (error: Error, result: SmartCardProvisioning) => void): void ;


    static fromSmartCardAsync(card: SmartCard, callback: (error: Error, result: SmartCardProvisioning) => void): void ;


    static requestVirtualSmartCardCreationAsync(friendlyName: string, administrativeKey: Object, pinPolicy: SmartCardPinPolicy, callback: (error: Error, result: SmartCardProvisioning) => void): void ;
    static requestVirtualSmartCardCreationAsync(friendlyName: string, administrativeKey: Object, pinPolicy: SmartCardPinPolicy, cardId: string, callback: (error: Error, result: SmartCardProvisioning) => void): void ;


    static requestVirtualSmartCardDeletionAsync(card: SmartCard, callback: (error: Error, result: boolean) => void): void ;


    getIdAsync(callback: (error: Error, result: string) => void): void ;

    getNameAsync(callback: (error: Error, result: string) => void): void ;

    getChallengeContextAsync(callback: (error: Error, result: SmartCardChallengeContext) => void): void ;

    requestPinChangeAsync(callback: (error: Error, result: boolean) => void): void ;

    requestPinResetAsync(handler: Object, callback: (error: Error, result: boolean) => void): void ;

    getAuthorityKeyContainerNameAsync(callback: (error: Error, result: string) => void): void ;

  }

  export class SmartCardPinPolicy {
    uppercaseLetters: SmartCardPinCharacterPolicyOption;
    specialCharacters: SmartCardPinCharacterPolicyOption;
    minLength: number;
    maxLength: number;
    lowercaseLetters: SmartCardPinCharacterPolicyOption;
    digits: SmartCardPinCharacterPolicyOption;
    constructor();

  }

  export class SmartCardChallengeContext {
    challenge: Object;
    constructor();

    verifyResponseAsync(response: Object, callback: (error: Error, result: boolean) => void): void ;

    provisionAsync(response: Object, formatCard: boolean, callback: (error: Error) => void): void ;
    provisionAsync(response: Object, formatCard: boolean, newCardId: string, callback: (error: Error) => void): void ;

    changeAdministrativeKeyAsync(response: Object, newAdministrativeKey: Object, callback: (error: Error) => void): void ;

    close(): void;
  }

  export class SmartCardPinResetRequest {
    challenge: Object;
    deadline: Date;
    constructor();

    getDeferral(): SmartCardPinResetDeferral;

    setResponse(response: Object): void;

  }

  export class SmartCardPinResetDeferral {
    constructor();

    complete(): void;

  }

  export class SmartCardConnection {
    constructor();

    transmitAsync(command: Object, callback: (error: Error, result: Object) => void): void ;

    close(): void;
  }

