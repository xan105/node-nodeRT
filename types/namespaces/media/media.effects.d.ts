  export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
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
    activatableClassId: string;
    properties: Object;
    constructor();

  }

  export class VideoCompositorDefinition {
    activatableClassId: string;
    properties: Object;
    constructor();
    constructor(activatableClassId: string);
    constructor(activatableClassId: string, props: Object);

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
    effectsProviderSettingsLabel: string;
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

    static createAudioRenderEffectsManager(deviceId: string, category: number): AudioRenderEffectsManager;
    static createAudioRenderEffectsManager(deviceId: string, category: number, mode: number): AudioRenderEffectsManager;


    static createAudioCaptureEffectsManager(deviceId: string, category: number): AudioCaptureEffectsManager;
    static createAudioCaptureEffectsManager(deviceId: string, category: number, mode: number): AudioCaptureEffectsManager;


  }

  export class IVideoCompositor {
    timeIndependent: boolean;
    constructor();

    setEncodingProperties(backgroundProperties: Object, device: Object): void;

    compositeFrame(context: CompositeVideoFrameContext): void;

    close(reason: MediaEffectClosedReason): void;

    discardQueuedFrames(): void;

  }

  export class IVideoEffectDefinition {
    activatableClassId: string;
    properties: Object;
    constructor();

  }

  export class VideoEffectDefinition {
    activatableClassId: string;
    properties: Object;
    constructor();
    constructor(activatableClassId: string);
    constructor(activatableClassId: string, props: Object);

  }

  export class IAudioEffectDefinition {
    activatableClassId: string;
    properties: Object;
    constructor();

  }

  export class AudioEffectDefinition {
    activatableClassId: string;
    properties: Object;
    constructor();
    constructor(activatableClassId: string);
    constructor(activatableClassId: string, props: Object);

  }

  export class IBasicVideoEffect {
    isReadOnly: boolean;
    supportedEncodingProperties: Object;
    supportedMemoryTypes: MediaMemoryTypes;
    timeIndependent: boolean;
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
    useInputFrameForOutput: boolean;
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
    projectionMode: number;
    isEnabled: boolean;
    horizontalFieldOfViewInDegrees: number;
    frameFormat: number;
    constructor();

  }

  export class VideoTransformEffectDefinition {
    activatableClassId: string;
    properties: Object;
    rotation: number;
    processingAlgorithm: number;
    paddingColor: Object;
    outputSize: Object;
    mirror: number;
    cropRectangle: Object;
    sphericalProjection: VideoTransformSphericalProjection;
    constructor();

  }

  export class SlowMotionEffectDefinition {
    timeStretchRate: number;
    activatableClassId: string;
    properties: Object;
    constructor();

  }

