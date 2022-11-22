  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export class Color {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum AudioEffectType {
    other,
    acousticEchoCancellation,
    noiseSuppression,
    automaticGainControl,
    beamForming,
    constantToneRemoval,
    equalizer,
    loudnessEqualizer,
    bassBoost,
    virtualSurround,
    virtualHeadphones,
    speakerFill,
    roomCorrection,
    bassManagement,
    environmentalEffects,
    speakerProtection,
    speakerCompensation,
    dynamicRangeCompression,
  }

  export enum MediaMemoryTypes {
    gpu,
    cpu,
    gpuAndCpu,
  }

  export enum MediaEffectClosedReason {
    done,
    unknownError,
    unsupportedEncodingFormat,
    effectCurrentlyUnloaded,
  }

  export class IVideoCompositorDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();

  }

  export class VideoCompositorDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();
    constructor(activatableClassId: String);
    constructor(activatableClassId: String, props: Object);

  }

  export class CompositeVideoFrameContext {
    backgroundFrame: Object;
    outputFrame: Object;
    surfacesToOverlay: Object;
    constructor();

    getOverlayForSurface(surfaceToOverlay: Object): Object;

  }

  export class AudioEffect {
    audioEffectType: AudioEffectType;
    constructor();

  }

  export class AudioRenderEffectsManager {
    effectsProviderSettingsLabel: String;
    effectsProviderThumbnail: Object;
    constructor();

    getAudioRenderEffects(): Object;

    showSettingsUI(): void;

    addListener(type: "AudioRenderEffectsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioRenderEffectsChanged", listener: (ev: Event) => void): void ;
    on(type: "AudioRenderEffectsChanged", listener: (ev: Event) => void): void ;
    off(type: "AudioRenderEffectsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AudioCaptureEffectsManager {
    constructor();

    getAudioCaptureEffects(): Object;

    addListener(type: "AudioCaptureEffectsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioCaptureEffectsChanged", listener: (ev: Event) => void): void ;
    on(type: "AudioCaptureEffectsChanged", listener: (ev: Event) => void): void ;
    off(type: "AudioCaptureEffectsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AudioEffectsManager {
    constructor();

    static createAudioRenderEffectsManager(deviceId: String, category: Number): AudioRenderEffectsManager;
    static createAudioRenderEffectsManager(deviceId: String, category: Number, mode: Number): AudioRenderEffectsManager;


    static createAudioCaptureEffectsManager(deviceId: String, category: Number): AudioCaptureEffectsManager;
    static createAudioCaptureEffectsManager(deviceId: String, category: Number, mode: Number): AudioCaptureEffectsManager;


  }

  export class IVideoCompositor {
    timeIndependent: Boolean;
    constructor();

    setEncodingProperties(backgroundProperties: Object, device: Object): void;

    compositeFrame(context: CompositeVideoFrameContext): void;

    close(reason: MediaEffectClosedReason): void;

    discardQueuedFrames(): void;

  }

  export class IVideoEffectDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();

  }

  export class VideoEffectDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();
    constructor(activatableClassId: String);
    constructor(activatableClassId: String, props: Object);

  }

  export class IAudioEffectDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();

  }

  export class AudioEffectDefinition {
    activatableClassId: String;
    properties: Object;
    constructor();
    constructor(activatableClassId: String);
    constructor(activatableClassId: String, props: Object);

  }

  export class IBasicVideoEffect {
    isReadOnly: Boolean;
    supportedEncodingProperties: Object;
    supportedMemoryTypes: MediaMemoryTypes;
    timeIndependent: Boolean;
    constructor();

    setEncodingProperties(encodingProperties: Object, device: Object): void;

    processFrame(context: ProcessVideoFrameContext): void;

    close(reason: MediaEffectClosedReason): void;

    discardQueuedFrames(): void;

  }

  export class ProcessVideoFrameContext {
    inputFrame: Object;
    outputFrame: Object;
    constructor();

  }

  export class IBasicAudioEffect {
    supportedEncodingProperties: Object;
    useInputFrameForOutput: Boolean;
    constructor();

    setEncodingProperties(encodingProperties: Object): void;

    processFrame(context: ProcessAudioFrameContext): void;

    close(reason: MediaEffectClosedReason): void;

    discardQueuedFrames(): void;

  }

  export class ProcessAudioFrameContext {
    inputFrame: Object;
    outputFrame: Object;
    constructor();

  }

  export class VideoTransformSphericalProjection {
    viewOrientation: Quaternion;
    projectionMode: Number;
    isEnabled: Boolean;
    horizontalFieldOfViewInDegrees: Number;
    frameFormat: Number;
    constructor();

  }

  export class VideoTransformEffectDefinition {
    activatableClassId: String;
    properties: Object;
    rotation: Number;
    processingAlgorithm: Number;
    paddingColor: Object;
    outputSize: Object;
    mirror: Number;
    cropRectangle: Object;
    sphericalProjection: VideoTransformSphericalProjection;
    constructor();

  }

  export class SlowMotionEffectDefinition {
    timeStretchRate: Number;
    activatableClassId: String;
    properties: Object;
    constructor();

  }

