  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export enum AudioGraphCreationStatus {
    success,
    deviceNotAvailable,
    formatNotSupported,
    unknownFailure,
  }

  export enum QuantumSizeSelectionMode {
    systemDefault,
    lowestLatency,
    closestToDesired,
  }

  export enum AudioDeviceNodeCreationStatus {
    success,
    deviceNotAvailable,
    formatNotSupported,
    unknownFailure,
    accessDenied,
  }

  export enum AudioFileNodeCreationStatus {
    success,
    fileNotFound,
    invalidFileType,
    formatNotSupported,
    unknownFailure,
  }

  export enum MediaSourceAudioInputNodeCreationStatus {
    success,
    formatNotSupported,
    networkError,
    unknownFailure,
  }

  export enum AudioGraphUnrecoverableError {
    none,
    audioDeviceLost,
    audioSessionDisconnected,
    unknownFailure,
  }

  export enum AudioNodeEmitterSettings {
    none,
    disableDoppler,
  }

  export enum AudioNodeEmitterShapeKind {
    omnidirectional,
    cone,
  }

  export enum AudioNodeEmitterDecayKind {
    natural,
    custom,
  }

  export enum SpatialAudioModel {
    objectBased,
    foldDown,
  }

  export class AudioStateMonitor {
    soundLevel: Number;
    constructor();

    static createForRenderMonitoring(): AudioStateMonitor;
    static createForRenderMonitoring(category: Number): AudioStateMonitor;
    static createForRenderMonitoring(category: Number, role: Number): AudioStateMonitor;


    static createForRenderMonitoringWithCategoryAndDeviceId(category: Number, deviceId: String): AudioStateMonitor;


    static createForCaptureMonitoring(): AudioStateMonitor;
    static createForCaptureMonitoring(category: Number): AudioStateMonitor;
    static createForCaptureMonitoring(category: Number, role: Number): AudioStateMonitor;


    static createForCaptureMonitoringWithCategoryAndDeviceId(category: Number, deviceId: String): AudioStateMonitor;


    addListener(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    on(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    off(type: "SoundLevelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AudioGraph {
    completedQuantumCount: Number;
    encodingProperties: Object;
    latencyInSamples: Number;
    primaryRenderDevice: Object;
    renderDeviceAudioProcessing: Number;
    samplesPerQuantum: Number;
    constructor();

    static createAsync(settings: AudioGraphSettings, callback: (error: Error, result: CreateAudioGraphResult) => void): void ;


    createDeviceInputNodeAsync(category: Number, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;
    createDeviceInputNodeAsync(category: Number, encodingProperties: Object, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;
    createDeviceInputNodeAsync(category: Number, encodingProperties: Object, device: Object, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;
    createDeviceInputNodeAsync(category: Number, encodingProperties: Object, device: Object, emitter: AudioNodeEmitter, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;

    createDeviceOutputNodeAsync(callback: (error: Error, result: CreateAudioDeviceOutputNodeResult) => void): void ;

    createFileInputNodeAsync(file: Object, callback: (error: Error, result: CreateAudioFileInputNodeResult) => void): void ;
    createFileInputNodeAsync(file: Object, emitter: AudioNodeEmitter, callback: (error: Error, result: CreateAudioFileInputNodeResult) => void): void ;

    createFileOutputNodeAsync(file: Object, callback: (error: Error, result: CreateAudioFileOutputNodeResult) => void): void ;
    createFileOutputNodeAsync(file: Object, fileEncodingProfile: Object, callback: (error: Error, result: CreateAudioFileOutputNodeResult) => void): void ;

    createMediaSourceAudioInputNodeAsync(mediaSource: Object, callback: (error: Error, result: CreateMediaSourceAudioInputNodeResult) => void): void ;
    createMediaSourceAudioInputNodeAsync(mediaSource: Object, emitter: AudioNodeEmitter, callback: (error: Error, result: CreateMediaSourceAudioInputNodeResult) => void): void ;

    createFrameInputNode(): AudioFrameInputNode;
    createFrameInputNode(encodingProperties: Object): AudioFrameInputNode;
    createFrameInputNode(encodingProperties: Object, emitter: AudioNodeEmitter): AudioFrameInputNode;

    createFrameOutputNode(): AudioFrameOutputNode;
    createFrameOutputNode(encodingProperties: Object): AudioFrameOutputNode;

    createSubmixNode(): AudioSubmixNode;
    createSubmixNode(encodingProperties: Object): AudioSubmixNode;
    createSubmixNode(encodingProperties: Object, emitter: AudioNodeEmitter): AudioSubmixNode;

    start(): void;

    stop(): void;

    resetAllNodes(): void;

    close(): void;
    createBatchUpdater(): AudioGraphBatchUpdater;

    addListener(type: "QuantumProcessed", listener: (ev: Event) => void): void ;
    removeListener(type: "QuantumProcessed", listener: (ev: Event) => void): void ;
    on(type: "QuantumProcessed", listener: (ev: Event) => void): void ;
    off(type: "QuantumProcessed", listener: (ev: Event) => void): void ;
    
    addListener(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    on(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    off(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "UnrecoverableErrorOccurred", listener: (ev: Event) => void): void ;
    removeListener(type: "UnrecoverableErrorOccurred", listener: (ev: Event) => void): void ;
    on(type: "UnrecoverableErrorOccurred", listener: (ev: Event) => void): void ;
    off(type: "UnrecoverableErrorOccurred", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CreateAudioGraphResult {
    graph: AudioGraph;
    status: AudioGraphCreationStatus;
    constructor();

  }

  export class AudioGraphSettings {
    quantumSizeSelectionMode: QuantumSizeSelectionMode;
    primaryRenderDevice: Object;
    encodingProperties: Object;
    desiredSamplesPerQuantum: Number;
    desiredRenderDeviceAudioProcessing: Number;
    audioRenderCategory: Number;
    maxPlaybackSpeedFactor: Number;
    constructor();
    constructor(audioRenderCategory: Number);

  }

  export class AudioDeviceInputNode {
    device: Object;
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: Number): void;

    removeOutgoingConnection(destination: IAudioNode): void;

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
  }

  export class CreateAudioDeviceInputNodeResult {
    deviceInputNode: AudioDeviceInputNode;
    status: AudioDeviceNodeCreationStatus;
    constructor();

  }

  export class AudioDeviceOutputNode {
    device: Object;
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    listener: AudioNodeListener;
    constructor();

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
  }

  export class CreateAudioDeviceOutputNodeResult {
    deviceOutputNode: AudioDeviceOutputNode;
    status: AudioDeviceNodeCreationStatus;
    constructor();

  }

  export class AudioFileInputNode {
    playbackSpeedFactor: Number;
    loopCount: Number;
    endTime: Number;
    startTime: Number;
    position: Number;
    sourceFile: Object;
    duration: Number;
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    seek(position: Number): void;

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: Number): void;

    removeOutgoingConnection(destination: IAudioNode): void;

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
    addListener(type: "FileCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "FileCompleted", listener: (ev: Event) => void): void ;
    on(type: "FileCompleted", listener: (ev: Event) => void): void ;
    off(type: "FileCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CreateAudioFileInputNodeResult {
    fileInputNode: AudioFileInputNode;
    status: AudioFileNodeCreationStatus;
    constructor();

  }

  export class AudioFileOutputNode {
    file: Object;
    fileEncodingProfile: Object;
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    finalizeAsync(callback: (error: Error, result: Number) => void): void ;

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
  }

  export class CreateAudioFileOutputNodeResult {
    fileOutputNode: AudioFileOutputNode;
    status: AudioFileNodeCreationStatus;
    constructor();

  }

  export class MediaSourceAudioInputNode {
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    startTime: Number;
    playbackSpeedFactor: Number;
    loopCount: Number;
    endTime: Number;
    duration: Number;
    mediaSource: Object;
    position: Number;
    constructor();

    seek(position: Number): void;

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: Number): void;

    removeOutgoingConnection(destination: IAudioNode): void;

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
    addListener(type: "MediaSourceCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "MediaSourceCompleted", listener: (ev: Event) => void): void ;
    on(type: "MediaSourceCompleted", listener: (ev: Event) => void): void ;
    off(type: "MediaSourceCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CreateMediaSourceAudioInputNodeResult {
    node: MediaSourceAudioInputNode;
    status: MediaSourceAudioInputNodeCreationStatus;
    constructor();

  }

  export class AudioGraphUnrecoverableErrorOccurredEventArgs {
    error: AudioGraphUnrecoverableError;
    constructor();

  }

  export class AudioGraphBatchUpdater {
    constructor();

    close(): void;
  }

  export class AudioFrameInputNode {
    playbackSpeedFactor: Number;
    queuedSampleCount: Number;
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    addFrame(frame: Object): void;

    discardQueuedFrames(): void;

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: Number): void;

    removeOutgoingConnection(destination: IAudioNode): void;

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
    addListener(type: "AudioFrameCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioFrameCompleted", listener: (ev: Event) => void): void ;
    on(type: "AudioFrameCompleted", listener: (ev: Event) => void): void ;
    off(type: "AudioFrameCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    on(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    off(type: "QuantumStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AudioFrameOutputNode {
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    getFrame(): Object;

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
  }

  export class AudioSubmixNode {
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: Number;
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: Number): void;

    removeOutgoingConnection(destination: IAudioNode): void;

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

    close(): void;
  }

  export class AudioNodeEmitter {
    position: Vector3;
    gain: Number;
    dopplerVelocity: Vector3;
    dopplerScale: Number;
    distanceScale: Number;
    direction: Vector3;
    decayModel: AudioNodeEmitterDecayModel;
    isDopplerDisabled: Boolean;
    shape: AudioNodeEmitterShape;
    spatialAudioModel: SpatialAudioModel;
    constructor();
    constructor(shape: AudioNodeEmitterShape, decayModel: AudioNodeEmitterDecayModel, settings: AudioNodeEmitterSettings);

  }

  export class IAudioNode {
    consumeInput: Boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    outgoingGain: Number;
    constructor();

    start(): void;

    stop(): void;

    reset(): void;

    disableEffectsByDefinition(definition: Object): void;

    enableEffectsByDefinition(definition: Object): void;

  }

  export class IAudioNodeWithListener {
    listener: AudioNodeListener;
    constructor();

  }

  export class AudioNodeListener {
    speedOfSound: Number;
    position: Vector3;
    orientation: Quaternion;
    dopplerVelocity: Vector3;
    constructor();

  }

  export class IAudioInputNode {
    outgoingConnections: Object;
    constructor();

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: Number): void;

    removeOutgoingConnection(destination: IAudioNode): void;

  }

  export class AudioGraphConnection {
    gain: Number;
    destination: IAudioNode;
    constructor();

  }

  export class IAudioInputNode2 {
    emitter: AudioNodeEmitter;
    constructor();

  }

  export class AudioFrameCompletedEventArgs {
    frame: Object;
    constructor();

  }

  export class FrameInputNodeQuantumStartedEventArgs {
    requiredSamples: Number;
    constructor();

  }

  export class EqualizerBand {
    gain: Number;
    frequencyCenter: Number;
    bandwidth: Number;
    constructor();

  }

  export class EqualizerEffectDefinition {
    bands: Object;
    activatableClassId: String;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class ReverbEffectDefinition {
    highEQGain: Number;
    highEQCutoff: Number;
    disableLateField: Boolean;
    density: Number;
    positionRight: Number;
    decayTime: Number;
    lateDiffusion: Number;
    positionMatrixRight: Number;
    positionMatrixLeft: Number;
    positionLeft: Number;
    lowEQGain: Number;
    lowEQCutoff: Number;
    roomFilterFreq: Number;
    reverbGain: Number;
    reverbDelay: Number;
    reflectionsGain: Number;
    reflectionsDelay: Number;
    rearDelay: Number;
    wetDryMix: Number;
    earlyDiffusion: Number;
    roomSize: Number;
    roomFilterMain: Number;
    roomFilterHF: Number;
    activatableClassId: String;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class EchoEffectDefinition {
    wetDryMix: Number;
    feedback: Number;
    delay: Number;
    activatableClassId: String;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class LimiterEffectDefinition {
    release: Number;
    loudness: Number;
    activatableClassId: String;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class AudioNodeEmitterConeProperties {
    innerAngle: Number;
    outerAngle: Number;
    outerAngleGain: Number;
    constructor();

  }

  export class AudioNodeEmitterShape {
    coneProperties: AudioNodeEmitterConeProperties;
    kind: AudioNodeEmitterShapeKind;
    constructor();

    static createCone(innerAngle: Number, outerAngle: Number, outerAngleGain: Number): AudioNodeEmitterShape;


    static createOmnidirectional(): AudioNodeEmitterShape;


  }

  export class AudioNodeEmitterNaturalDecayModelProperties {
    cutoffDistance: Number;
    unityGainDistance: Number;
    constructor();

  }

  export class AudioNodeEmitterDecayModel {
    kind: AudioNodeEmitterDecayKind;
    maxGain: Number;
    minGain: Number;
    naturalProperties: AudioNodeEmitterNaturalDecayModelProperties;
    constructor();

    static createNatural(minGain: Number, maxGain: Number, unityGainDistance: Number, cutoffDistance: Number): AudioNodeEmitterDecayModel;


    static createCustom(minGain: Number, maxGain: Number): AudioNodeEmitterDecayModel;


  }

