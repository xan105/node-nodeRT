  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
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
    soundLevel: number;
    constructor();

    static createForRenderMonitoring(): AudioStateMonitor;
    static createForRenderMonitoring(category: number): AudioStateMonitor;
    static createForRenderMonitoring(category: number, role: number): AudioStateMonitor;


    static createForRenderMonitoringWithCategoryAndDeviceId(category: number, deviceId: string): AudioStateMonitor;


    static createForCaptureMonitoring(): AudioStateMonitor;
    static createForCaptureMonitoring(category: number): AudioStateMonitor;
    static createForCaptureMonitoring(category: number, role: number): AudioStateMonitor;


    static createForCaptureMonitoringWithCategoryAndDeviceId(category: number, deviceId: string): AudioStateMonitor;


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
    completedQuantumCount: number;
    encodingProperties: Object;
    latencyInSamples: number;
    primaryRenderDevice: Object;
    renderDeviceAudioProcessing: number;
    samplesPerQuantum: number;
    constructor();

    static createAsync(settings: AudioGraphSettings, callback: (error: Error, result: CreateAudioGraphResult) => void): void ;


    createDeviceInputNodeAsync(category: number, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;
    createDeviceInputNodeAsync(category: number, encodingProperties: Object, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;
    createDeviceInputNodeAsync(category: number, encodingProperties: Object, device: Object, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;
    createDeviceInputNodeAsync(category: number, encodingProperties: Object, device: Object, emitter: AudioNodeEmitter, callback: (error: Error, result: CreateAudioDeviceInputNodeResult) => void): void ;

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
    desiredSamplesPerQuantum: number;
    desiredRenderDeviceAudioProcessing: number;
    audioRenderCategory: number;
    maxPlaybackSpeedFactor: number;
    constructor();
    constructor(audioRenderCategory: number);

  }

  export class AudioDeviceInputNode {
    device: Object;
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: number;
    consumeInput: boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: number): void;

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
    outgoingGain: number;
    consumeInput: boolean;
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
    playbackSpeedFactor: number;
    loopCount: number;
    endTime: number;
    startTime: number;
    position: number;
    sourceFile: Object;
    duration: number;
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: number;
    consumeInput: boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    seek(position: number): void;

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: number): void;

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
    outgoingGain: number;
    consumeInput: boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    finalizeAsync(callback: (error: Error, result: number) => void): void ;

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
    outgoingGain: number;
    consumeInput: boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    startTime: number;
    playbackSpeedFactor: number;
    loopCount: number;
    endTime: number;
    duration: number;
    mediaSource: Object;
    position: number;
    constructor();

    seek(position: number): void;

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: number): void;

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
    playbackSpeedFactor: number;
    queuedSampleCount: number;
    outgoingConnections: Object;
    emitter: AudioNodeEmitter;
    outgoingGain: number;
    consumeInput: boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    addFrame(frame: Object): void;

    discardQueuedFrames(): void;

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: number): void;

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
    outgoingGain: number;
    consumeInput: boolean;
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
    outgoingGain: number;
    consumeInput: boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    constructor();

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: number): void;

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
    gain: number;
    dopplerVelocity: Vector3;
    dopplerScale: number;
    distanceScale: number;
    direction: Vector3;
    decayModel: AudioNodeEmitterDecayModel;
    isDopplerDisabled: boolean;
    shape: AudioNodeEmitterShape;
    spatialAudioModel: SpatialAudioModel;
    constructor();
    constructor(shape: AudioNodeEmitterShape, decayModel: AudioNodeEmitterDecayModel, settings: AudioNodeEmitterSettings);

  }

  export class IAudioNode {
    consumeInput: boolean;
    effectDefinitions: Object;
    encodingProperties: Object;
    outgoingGain: number;
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
    speedOfSound: number;
    position: Vector3;
    orientation: Quaternion;
    dopplerVelocity: Vector3;
    constructor();

  }

  export class IAudioInputNode {
    outgoingConnections: Object;
    constructor();

    addOutgoingConnection(destination: IAudioNode): void;
    addOutgoingConnection(destination: IAudioNode, gain: number): void;

    removeOutgoingConnection(destination: IAudioNode): void;

  }

  export class AudioGraphConnection {
    gain: number;
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
    requiredSamples: number;
    constructor();

  }

  export class EqualizerBand {
    gain: number;
    frequencyCenter: number;
    bandwidth: number;
    constructor();

  }

  export class EqualizerEffectDefinition {
    bands: Object;
    activatableClassId: string;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class ReverbEffectDefinition {
    highEQGain: number;
    highEQCutoff: number;
    disableLateField: boolean;
    density: number;
    positionRight: number;
    decayTime: number;
    lateDiffusion: number;
    positionMatrixRight: number;
    positionMatrixLeft: number;
    positionLeft: number;
    lowEQGain: number;
    lowEQCutoff: number;
    roomFilterFreq: number;
    reverbGain: number;
    reverbDelay: number;
    reflectionsGain: number;
    reflectionsDelay: number;
    rearDelay: number;
    wetDryMix: number;
    earlyDiffusion: number;
    roomSize: number;
    roomFilterMain: number;
    roomFilterHF: number;
    activatableClassId: string;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class EchoEffectDefinition {
    wetDryMix: number;
    feedback: number;
    delay: number;
    activatableClassId: string;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class LimiterEffectDefinition {
    release: number;
    loudness: number;
    activatableClassId: string;
    properties: Object;
    constructor();
    constructor(audioGraph: AudioGraph);

  }

  export class AudioNodeEmitterConeProperties {
    innerAngle: number;
    outerAngle: number;
    outerAngleGain: number;
    constructor();

  }

  export class AudioNodeEmitterShape {
    coneProperties: AudioNodeEmitterConeProperties;
    kind: AudioNodeEmitterShapeKind;
    constructor();

    static createCone(innerAngle: number, outerAngle: number, outerAngleGain: number): AudioNodeEmitterShape;


    static createOmnidirectional(): AudioNodeEmitterShape;


  }

  export class AudioNodeEmitterNaturalDecayModelProperties {
    cutoffDistance: number;
    unityGainDistance: number;
    constructor();

  }

  export class AudioNodeEmitterDecayModel {
    kind: AudioNodeEmitterDecayKind;
    maxGain: number;
    minGain: number;
    naturalProperties: AudioNodeEmitterNaturalDecayModelProperties;
    constructor();

    static createNatural(minGain: number, maxGain: number, unityGainDistance: number, cutoffDistance: number): AudioNodeEmitterDecayModel;


    static createCustom(minGain: number, maxGain: number): AudioNodeEmitterDecayModel;


  }

