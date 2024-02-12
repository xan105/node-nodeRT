  export enum ActivationSignalDetectionConfigurationCreationStatus {
    success,
    signalIdNotAvailable,
    modelIdNotSupported,
    invalidSignalId,
    invalidModelId,
    invalidDisplayName,
    configurationAlreadyExists,
    creationNotSupported,
  }

  export enum ActivationSignalDetectionConfigurationRemovalResult {
    success,
    notFound,
    currentlyEnabled,
    removalNotSupported,
  }

  export enum ActivationSignalDetectionConfigurationSetModelDataResult {
    success,
    emptyModelData,
    unsupportedFormat,
    configurationCurrentlyEnabled,
    invalidData,
    setModelDataNotSupported,
    configurationNotFound,
    unknownError,
  }

  export enum ActivationSignalDetectionConfigurationStateChangeResult {
    success,
    noModelData,
    configurationNotFound,
  }

  export enum ActivationSignalDetectionTrainingDataFormat {
    voice8kHz8BitMono,
    voice8kHz16BitMono,
    voice16kHz8BitMono,
    voice16kHz16BitMono,
    voiceOEMDefined,
    audio44kHz8BitMono,
    audio44kHz16BitMono,
    audio48kHz8BitMono,
    audio48kHz16BitMono,
    audioOEMDefined,
    otherOEMDefined,
  }

  export enum ActivationSignalDetectorKind {
    audioPattern,
    audioImpulse,
    hardwareEvent,
  }

  export enum ActivationSignalDetectorPowerState {
    highPower,
    connectedLowPower,
    disconnectedLowPower,
  }

  export enum ConversationalAgentActivationKind {
    voiceActivationPreview,
    foreground,
  }

  export enum ConversationalAgentActivationResult {
    success,
    agentInactive,
    screenNotAvailable,
    agentInterrupted,
  }

  export enum ConversationalAgentSessionUpdateResponse {
    success,
    failed,
  }

  export enum ConversationalAgentState {
    inactive,
    detecting,
    listening,
    working,
    speaking,
    listeningAndSpeaking,
  }

  export enum ConversationalAgentSystemStateChangeType {
    userAuthentication,
    screenAvailability,
    indicatorLightAvailability,
    voiceActivationAvailability,
  }

  export enum ConversationalAgentVoiceActivationPrerequisiteKind {
    microphonePermission,
    knownAgents,
    agentAllowed,
    appCapability,
    backgroundTaskRegistration,
    policyPermission,
  }

  export enum DetectionConfigurationAvailabilityChangeKind {
    systemResourceAccess,
    permission,
    lockScreenPermission,
  }

  export enum DetectionConfigurationTrainingStatus {
    success,
    formatNotSupported,
    voiceTooQuiet,
    voiceTooLoud,
    voiceTooFast,
    voiceTooSlow,
    voiceQualityProblem,
    trainingSystemInternalError,
    trainingTimedOut,
    configurationNotFound,
  }

  export enum SignalDetectorResourceKind {
    parallelModelSupport,
    parallelModelSupportForAgent,
    parallelSignalSupport,
    parallelSignalSupportForAgent,
    displayOffSupport,
    pluggedInPower,
    detector,
    supportedSleepState,
    supportedBatterySaverState,
    screenAvailability,
    inputHardware,
    acousticEchoCancellation,
    modelIdSupport,
    dataChannel,
  }

  export class ActivationSignalDetectionConfiguration {
    availabilityInfo: DetectionConfigurationAvailabilityInfo;
    displayName: String;
    isActive: Boolean;
    modelId: String;
    signalId: String;
    trainingDataFormat: ActivationSignalDetectionTrainingDataFormat;
    trainingStepsCompleted: Number;
    trainingStepsRemaining: Number;
    trainingStepCompletionMaxAllowedTime: Number;
    constructor();

    setEnabledAsync(value: Boolean, callback: (error: Error) => void): void ;

    setModelDataAsync(dataType: String, data: Object, callback: (error: Error) => void): void ;

    getModelDataTypeAsync(callback: (error: Error, result: String) => void): void ;

    getModelDataAsync(callback: (error: Error, result: Object) => void): void ;

    clearModelDataAsync(callback: (error: Error) => void): void ;

    applyTrainingDataAsync(trainingDataFormat: ActivationSignalDetectionTrainingDataFormat, trainingData: Object, callback: (error: Error, result: DetectionConfigurationTrainingStatus) => void): void ;

    clearTrainingDataAsync(callback: (error: Error) => void): void ;

    setModelDataWithResultAsync(dataType: String, data: Object, callback: (error: Error, result: ActivationSignalDetectionConfigurationSetModelDataResult) => void): void ;

    setEnabledWithResultAsync(value: Boolean, callback: (error: Error, result: ActivationSignalDetectionConfigurationStateChangeResult) => void): void ;

    setEnabled(value: Boolean): void;

    setModelData(dataType: String, data: Object): void;

    getModelDataType(): String;

    getModelData(): Object;

    clearModelData(): void;

    applyTrainingData(trainingDataFormat: ActivationSignalDetectionTrainingDataFormat, trainingData: Object): DetectionConfigurationTrainingStatus;

    clearTrainingData(): void;

    close(): void;
    setModelDataWithResult(dataType: String, data: Object): ActivationSignalDetectionConfigurationSetModelDataResult;

    setEnabledWithResult(value: Boolean): ActivationSignalDetectionConfigurationStateChangeResult;

    addListener(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    on(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    off(type: "AvailabilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ActivationSignalDetectionConfigurationCreationResult {
    configuration: ActivationSignalDetectionConfiguration;
    status: ActivationSignalDetectionConfigurationCreationStatus;
    constructor();

  }

  export class ActivationSignalDetector {
    canCreateConfigurations: Boolean;
    kind: ActivationSignalDetectorKind;
    providerId: String;
    supportedModelDataTypes: Object;
    supportedPowerStates: Object;
    supportedTrainingDataFormats: Object;
    detectorId: String;
    constructor();

    getSupportedModelIdsForSignalIdAsync(signalId: String, callback: (error: Error, result: Object) => void): void ;

    createConfigurationAsync(signalId: String, modelId: String, displayName: String, callback: (error: Error) => void): void ;

    getConfigurationsAsync(callback: (error: Error, result: Object) => void): void ;

    getConfigurationAsync(signalId: String, modelId: String, callback: (error: Error, result: ActivationSignalDetectionConfiguration) => void): void ;

    removeConfigurationAsync(signalId: String, modelId: String, callback: (error: Error) => void): void ;

    getAvailableModelIdsForSignalIdAsync(signalId: String, callback: (error: Error, result: Object) => void): void ;

    createConfigurationWithResultAsync(signalId: String, modelId: String, displayName: String, callback: (error: Error, result: ActivationSignalDetectionConfigurationCreationResult) => void): void ;

    removeConfigurationWithResultAsync(signalId: String, modelId: String, callback: (error: Error, result: ActivationSignalDetectionConfigurationRemovalResult) => void): void ;

    getSupportedModelIdsForSignalId(signalId: String): Object;

    createConfiguration(signalId: String, modelId: String, displayName: String): void;

    getConfigurations(): Object;

    getConfiguration(signalId: String, modelId: String): ActivationSignalDetectionConfiguration;

    removeConfiguration(signalId: String, modelId: String): void;

    getAvailableModelIdsForSignalId(signalId: String): Object;

    createConfigurationWithResult(signalId: String, modelId: String, displayName: String): ActivationSignalDetectionConfigurationCreationResult;

    removeConfigurationWithResult(signalId: String, modelId: String): ActivationSignalDetectionConfigurationRemovalResult;

  }

  export class ConversationalAgentDetectorManager {
    static default: ConversationalAgentDetectorManager;
    constructor();

    getAllActivationSignalDetectorsAsync(callback: (error: Error, result: Object) => void): void ;

    getActivationSignalDetectorsAsync(kind: ActivationSignalDetectorKind, callback: (error: Error, result: Object) => void): void ;

    getActivationSignalDetectorFromIdAsync(detectorId: String, callback: (error: Error, result: ActivationSignalDetector) => void): void ;

    getAllActivationSignalDetectors(): Object;

    getActivationSignalDetectors(kind: ActivationSignalDetectorKind): Object;

    getActivationSignalDetectorFromId(detectorId: String): ActivationSignalDetector;

  }

  export class ConversationalAgentSession {
    agentState: ConversationalAgentState;
    isIndicatorLightAvailable: Boolean;
    isInterrupted: Boolean;
    isInterruptible: Boolean;
    isScreenAvailable: Boolean;
    isUserAuthenticated: Boolean;
    isVoiceActivationAvailable: Boolean;
    signal: ConversationalAgentSignal;
    constructor();

    static getCurrentSessionAsync(callback: (error: Error, result: ConversationalAgentSession) => void): void ;


    static getCurrentSessionSync(): ConversationalAgentSession;


    requestInterruptibleAsync(interruptible: Boolean, callback: (error: Error, result: ConversationalAgentSessionUpdateResponse) => void): void ;

    requestAgentStateChangeAsync(state: ConversationalAgentState, callback: (error: Error, result: ConversationalAgentSessionUpdateResponse) => void): void ;

    requestForegroundActivationAsync(callback: (error: Error, result: ConversationalAgentSessionUpdateResponse) => void): void ;

    getAudioClientAsync(callback: (error: Error, result: Object) => void): void ;

    createAudioDeviceInputNodeAsync(graph: Object, callback: (error: Error, result: Object) => void): void ;

    getAudioCaptureDeviceIdAsync(callback: (error: Error, result: String) => void): void ;

    getAudioRenderDeviceIdAsync(callback: (error: Error, result: String) => void): void ;

    getSignalModelIdAsync(callback: (error: Error, result: Number) => void): void ;

    setSignalModelIdAsync(signalModelId: Number, callback: (error: Error, result: Boolean) => void): void ;

    getSupportedSignalModelIdsAsync(callback: (error: Error, result: Object) => void): void ;

    requestActivationAsync(activationKind: ConversationalAgentActivationKind, callback: (error: Error, result: ConversationalAgentActivationResult) => void): void ;

    setSupportLockScreenActivationAsync(lockScreenActivationSupported: Boolean, callback: (error: Error) => void): void ;

    getMissingPrerequisitesAsync(callback: (error: Error, result: Object) => void): void ;

    requestInterruptible(interruptible: Boolean): ConversationalAgentSessionUpdateResponse;

    requestAgentStateChange(state: ConversationalAgentState): ConversationalAgentSessionUpdateResponse;

    requestForegroundActivation(): ConversationalAgentSessionUpdateResponse;

    getAudioClient(): Object;

    createAudioDeviceInputNode(graph: Object): Object;

    getAudioCaptureDeviceId(): String;

    getAudioRenderDeviceId(): String;

    getSignalModelId(): Number;

    setSignalModelId(signalModelId: Number): Boolean;

    getSupportedSignalModelIds(): Object;

    requestActivation(activationKind: ConversationalAgentActivationKind): ConversationalAgentActivationResult;

    setSupportLockScreenActivation(lockScreenActivationSupported: Boolean): void;

    getMissingPrerequisites(): Object;

    close(): void;
    addListener(type: "SessionInterrupted", listener: (ev: Event) => void): void ;
    removeListener(type: "SessionInterrupted", listener: (ev: Event) => void): void ;
    on(type: "SessionInterrupted", listener: (ev: Event) => void): void ;
    off(type: "SessionInterrupted", listener: (ev: Event) => void): void ;
    
    addListener(type: "SignalDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "SignalDetected", listener: (ev: Event) => void): void ;
    on(type: "SignalDetected", listener: (ev: Event) => void): void ;
    off(type: "SignalDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: "SystemStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SystemStateChanged", listener: (ev: Event) => void): void ;
    on(type: "SystemStateChanged", listener: (ev: Event) => void): void ;
    off(type: "SystemStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ConversationalAgentSessionInterruptedEventArgs {
    constructor();

  }

  export class ConversationalAgentSignal {
    signalStart: Number;
    signalName: String;
    signalId: String;
    signalEnd: Number;
    signalContext: Object;
    isSignalVerificationRequired: Boolean;
    detectorId: String;
    detectorKind: ActivationSignalDetectorKind;
    constructor();

  }

  export class ConversationalAgentSignalDetectedEventArgs {
    constructor();

  }

  export class ConversationalAgentSystemStateChangedEventArgs {
    systemStateChangeType: ConversationalAgentSystemStateChangeType;
    constructor();

  }

  export class DetectionConfigurationAvailabilityChangedEventArgs {
    kind: DetectionConfigurationAvailabilityChangeKind;
    constructor();

  }

  export class DetectionConfigurationAvailabilityInfo {
    hasLockScreenPermission: Boolean;
    hasPermission: Boolean;
    hasSystemResourceAccess: Boolean;
    isEnabled: Boolean;
    unavailableSystemResources: Object;
    constructor();

  }

