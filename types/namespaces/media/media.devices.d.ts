  export class Rect {
    constructor();
  }

  export class CallControlContract {
    constructor();
  }

  export enum AdvancedPhotoMode {
    auto,
    standard,
    hdr,
    lowLight,
  }

  export enum AudioDeviceRole {
    default,
    communications,
  }

  export enum AutoFocusRange {
    fullRange,
    macro,
    normal,
  }

  export enum CameraOcclusionKind {
    lid,
    cameraHardware,
  }

  export enum CameraStreamState {
    notStreaming,
    streaming,
    blockedForPrivacy,
    shutdown,
  }

  export enum CaptureSceneMode {
    auto,
    manual,
    macro,
    portrait,
    sport,
    snow,
    night,
    beach,
    sunset,
    candlelight,
    landscape,
    nightPortrait,
    backlit,
  }

  export enum CaptureUse {
    none,
    photo,
    video,
  }

  export enum ColorTemperaturePreset {
    auto,
    manual,
    cloudy,
    daylight,
    flash,
    fluorescent,
    tungsten,
    candlelight,
  }

  export enum DigitalWindowMode {
    off,
    on,
    auto,
  }

  export enum FocusMode {
    auto,
    single,
    continuous,
    manual,
  }

  export enum FocusPreset {
    auto,
    manual,
    autoMacro,
    autoNormal,
    autoInfinity,
    autoHyperfocal,
  }

  export enum HdrVideoMode {
    off,
    on,
    auto,
  }

  export enum InfraredTorchMode {
    off,
    on,
    alternatingFrameIllumination,
  }

  export enum IsoSpeedPreset {
    auto,
    iso50,
    iso80,
    iso100,
    iso200,
    iso400,
    iso800,
    iso1600,
    iso3200,
    iso6400,
    iso12800,
    iso25600,
  }

  export enum ManualFocusDistance {
    infinity,
    hyperfocal,
    nearest,
  }

  export enum MediaCaptureFocusState {
    uninitialized,
    lost,
    searching,
    focused,
    failed,
  }

  export enum MediaCaptureOptimization {
    default,
    quality,
    latency,
    power,
    latencyThenQuality,
    latencyThenPower,
    powerAndQuality,
  }

  export enum MediaCapturePauseBehavior {
    retainHardwareResources,
    releaseHardwareResources,
  }

  export enum OpticalImageStabilizationMode {
    off,
    on,
    auto,
  }

  export enum RegionOfInterestType {
    unknown,
    face,
  }

  export enum SendCommandStatus {
    success,
    deviceNotAvailable,
  }

  export enum TelephonyKey {
    d0,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    d8,
    d9,
    star,
    pound,
    a,
    b,
    c,
    d,
  }

  export enum VideoDeviceControllerGetDevicePropertyStatus {
    success,
    unknownFailure,
    bufferTooSmall,
    notSupported,
    deviceNotAvailable,
    maxPropertyValueSizeTooSmall,
    maxPropertyValueSizeRequired,
  }

  export enum VideoDeviceControllerSetDevicePropertyStatus {
    success,
    unknownFailure,
    notSupported,
    invalidValue,
    deviceNotAvailable,
    notInControl,
  }

  export enum VideoTemporalDenoisingMode {
    off,
    on,
    auto,
  }

  export enum ZoomTransitionMode {
    auto,
    direct,
    smooth,
  }

  export class AdvancedPhotoCaptureSettings {
    mode: AdvancedPhotoMode;
    constructor();

  }

  export class AdvancedPhotoControl {
    mode: AdvancedPhotoMode;
    supported: Boolean;
    supportedModes: Object;
    constructor();

    configure(settings: AdvancedPhotoCaptureSettings): void;

  }

  export class AudioDeviceController {
    volumePercent: Number;
    muted: Boolean;
    constructor();

    setMediaStreamPropertiesAsync(mediaStreamType: Number, mediaEncodingProperties: Object, callback: (error: Error) => void): void ;

    getAvailableMediaStreamProperties(mediaStreamType: Number): Object;

    getMediaStreamProperties(mediaStreamType: Number): Object;

  }

  export class AudioDeviceModule {
    classId: String;
    displayName: String;
    instanceId: Number;
    majorVersion: Number;
    minorVersion: Number;
    constructor();

    sendCommandAsync(Command: Object, callback: (error: Error, result: ModuleCommandResult) => void): void ;

  }

  export class AudioDeviceModuleNotificationEventArgs {
    module: AudioDeviceModule;
    notificationData: Object;
    constructor();

  }

  export class AudioDeviceModulesManager {
    constructor();
    constructor(deviceId: String);

    findAllById(moduleId: String): Object;

    findAll(): Object;

    addListener(type: "ModuleNotificationReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "ModuleNotificationReceived", listener: (ev: Event) => void): void ;
    on(type: "ModuleNotificationReceived", listener: (ev: Event) => void): void ;
    off(type: "ModuleNotificationReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CallControl {
    hasRinger: Boolean;
    constructor();

    static getDefault(): CallControl;


    static fromId(deviceId: String): CallControl;


    indicateNewIncomingCall(enableRinger: Boolean, callerId: String): Number;

    indicateNewOutgoingCall(): Number;

    indicateActiveCall(callToken: Number): void;

    endCall(callToken: Number): void;

    addListener(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    on(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    off(type: "AnswerRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "AudioTransferRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioTransferRequested", listener: (ev: Event) => void): void ;
    on(type: "AudioTransferRequested", listener: (ev: Event) => void): void ;
    off(type: "AudioTransferRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "DialRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "DialRequested", listener: (ev: Event) => void): void ;
    on(type: "DialRequested", listener: (ev: Event) => void): void ;
    off(type: "DialRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "HangUpRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "HangUpRequested", listener: (ev: Event) => void): void ;
    on(type: "HangUpRequested", listener: (ev: Event) => void): void ;
    off(type: "HangUpRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeypadPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "KeypadPressed", listener: (ev: Event) => void): void ;
    on(type: "KeypadPressed", listener: (ev: Event) => void): void ;
    off(type: "KeypadPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "RedialRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "RedialRequested", listener: (ev: Event) => void): void ;
    on(type: "RedialRequested", listener: (ev: Event) => void): void ;
    off(type: "RedialRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CameraOcclusionInfo {
    constructor();

    getState(): CameraOcclusionState;

    isOcclusionKindSupported(occlusionKind: CameraOcclusionKind): Boolean;

    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CameraOcclusionState {
    isOccluded: Boolean;
    constructor();

    isOcclusionKind(occlusionKind: CameraOcclusionKind): Boolean;

  }

  export class CameraOcclusionStateChangedEventArgs {
    state: CameraOcclusionState;
    constructor();

  }

  export class DefaultAudioCaptureDeviceChangedEventArgs {
    id: String;
    role: AudioDeviceRole;
    constructor();

  }

  export class DefaultAudioRenderDeviceChangedEventArgs {
    id: String;
    role: AudioDeviceRole;
    constructor();

  }

  export class DialRequestedEventArgs {
    contact: Object;
    constructor();

    handled(): void;

  }

  export class DigitalWindowBounds {
    scale: Number;
    normalizedOriginTop: Number;
    normalizedOriginLeft: Number;
    constructor();

  }

  export class DigitalWindowCapability {
    height: Number;
    maxScaleValue: Number;
    minScaleValue: Number;
    minScaleValueWithoutUpsampling: Number;
    normalizedFieldOfViewLimit: Object;
    width: Number;
    constructor();

  }

  export class DigitalWindowControl {
    currentMode: DigitalWindowMode;
    isSupported: Boolean;
    supportedCapabilities: Object;
    supportedModes: Array<DigitalWindowMode>;
    constructor();

    getBounds(): DigitalWindowBounds;

    configure(digitalWindowMode: DigitalWindowMode): void;
    configure(digitalWindowMode: DigitalWindowMode, digitalWindowBounds: DigitalWindowBounds): void;

    getCapabilityForSize(width: Number, height: Number): DigitalWindowCapability;

  }

  export class ExposureCompensationControl {
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    value: Number;
    constructor();

    setValueAsync(value: Number, callback: (error: Error) => void): void ;

  }

  export class ExposureControl {
    auto: Boolean;
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    value: Number;
    constructor();

    setAutoAsync(value: Boolean, callback: (error: Error) => void): void ;

    setValueAsync(shutterDuration: Number, callback: (error: Error) => void): void ;

  }

  export class ExposurePriorityVideoControl {
    enabled: Boolean;
    supported: Boolean;
    constructor();

  }

  export class FlashControl {
    redEyeReduction: Boolean;
    powerPercent: Number;
    enabled: Boolean;
    auto: Boolean;
    powerSupported: Boolean;
    redEyeReductionSupported: Boolean;
    supported: Boolean;
    assistantLightEnabled: Boolean;
    assistantLightSupported: Boolean;
    constructor();

  }

  export class FocusControl {
    max: Number;
    min: Number;
    preset: FocusPreset;
    step: Number;
    supported: Boolean;
    supportedPresets: Object;
    value: Number;
    focusChangedSupported: Boolean;
    focusState: MediaCaptureFocusState;
    mode: FocusMode;
    supportedFocusDistances: Object;
    supportedFocusModes: Object;
    supportedFocusRanges: Object;
    waitForFocusSupported: Boolean;
    constructor();

    setPresetAsync(preset: FocusPreset, callback: (error: Error) => void): void ;
    setPresetAsync(preset: FocusPreset, completeBeforeFocus: Boolean, callback: (error: Error) => void): void ;

    setValueAsync(focus: Number, callback: (error: Error) => void): void ;

    focusAsync(callback: (error: Error) => void): void ;

    unlockAsync(callback: (error: Error) => void): void ;

    lockAsync(callback: (error: Error) => void): void ;

    configure(settings: FocusSettings): void;

  }

  export class FocusSettings {
    waitForFocus: Boolean;
    value: Number;
    mode: FocusMode;
    distance: ManualFocusDistance;
    disableDriverFallback: Boolean;
    autoFocusRange: AutoFocusRange;
    constructor();

  }

  export class HdrVideoControl {
    mode: HdrVideoMode;
    supported: Boolean;
    supportedModes: Object;
    constructor();

  }

  export class IDefaultAudioDeviceChangedEventArgs {
    id: String;
    role: AudioDeviceRole;
    constructor();

  }

  export class IMediaDeviceController {
    constructor();

    setMediaStreamPropertiesAsync(mediaStreamType: Number, mediaEncodingProperties: Object, callback: (error: Error) => void): void ;

    getAvailableMediaStreamProperties(mediaStreamType: Number): Object;

    getMediaStreamProperties(mediaStreamType: Number): Object;

  }

  export class InfraredTorchControl {
    power: Number;
    currentMode: InfraredTorchMode;
    isSupported: Boolean;
    maxPower: Number;
    minPower: Number;
    powerStep: Number;
    supportedModes: Object;
    constructor();

  }

  export class IsoSpeedControl {
    preset: IsoSpeedPreset;
    supported: Boolean;
    supportedPresets: Object;
    auto: Boolean;
    max: Number;
    min: Number;
    step: Number;
    value: Number;
    constructor();

    setPresetAsync(preset: IsoSpeedPreset, callback: (error: Error) => void): void ;

    setValueAsync(isoSpeed: Number, callback: (error: Error) => void): void ;

    setAutoAsync(callback: (error: Error) => void): void ;

  }

  export class KeypadPressedEventArgs {
    telephonyKey: TelephonyKey;
    constructor();

  }

  export class LowLagPhotoControl {
    thumbnailFormat: Number;
    thumbnailEnabled: Boolean;
    desiredThumbnailSize: Number;
    hardwareAcceleratedThumbnailSupported: Number;
    constructor();

    getHighestConcurrentFrameRate(captureProperties: Object): Object;

    getCurrentFrameRate(): Object;

  }

  export class LowLagPhotoSequenceControl {
    thumbnailFormat: Number;
    thumbnailEnabled: Boolean;
    photosPerSecondLimit: Number;
    pastPhotoLimit: Number;
    desiredThumbnailSize: Number;
    hardwareAcceleratedThumbnailSupported: Number;
    maxPastPhotos: Number;
    maxPhotosPerSecond: Number;
    supported: Boolean;
    constructor();

    getHighestConcurrentFrameRate(captureProperties: Object): Object;

    getCurrentFrameRate(): Object;

  }

  export class MediaDevice {
    constructor();

    static getAudioCaptureSelector(): String;


    static getAudioRenderSelector(): String;


    static getVideoCaptureSelector(): String;


    static getDefaultAudioCaptureId(role: AudioDeviceRole): String;


    static getDefaultAudioRenderId(role: AudioDeviceRole): String;


    addListener(type: "DefaultAudioCaptureDeviceChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DefaultAudioCaptureDeviceChanged", listener: (ev: Event) => void): void ;
    on(type: "DefaultAudioCaptureDeviceChanged", listener: (ev: Event) => void): void ;
    off(type: "DefaultAudioCaptureDeviceChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "DefaultAudioRenderDeviceChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DefaultAudioRenderDeviceChanged", listener: (ev: Event) => void): void ;
    on(type: "DefaultAudioRenderDeviceChanged", listener: (ev: Event) => void): void ;
    off(type: "DefaultAudioRenderDeviceChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaDeviceControl {
    capabilities: MediaDeviceControlCapabilities;
    constructor();

    tryGetValue(value: Number): Boolean;

    trySetValue(value: Number): Boolean;

    tryGetAuto(value: Boolean): Boolean;

    trySetAuto(value: Boolean): Boolean;

  }

  export class MediaDeviceControlCapabilities {
    autoModeSupported: Boolean;
    default: Number;
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    constructor();

  }

  export class ModuleCommandResult {
    result: Object;
    status: SendCommandStatus;
    constructor();

  }

  export class OpticalImageStabilizationControl {
    mode: OpticalImageStabilizationMode;
    supported: Boolean;
    supportedModes: Object;
    constructor();

  }

  export class PanelBasedOptimizationControl {
    panel: Number;
    isSupported: Boolean;
    constructor();

  }

  export class PhotoConfirmationControl {
    pixelFormat: Number;
    enabled: Boolean;
    supported: Boolean;
    constructor();

  }

  export class RedialRequestedEventArgs {
    constructor();

    handled(): void;

  }

  export class RegionOfInterest {
    bounds: Object;
    autoWhiteBalanceEnabled: Boolean;
    autoFocusEnabled: Boolean;
    autoExposureEnabled: Boolean;
    weight: Number;
    type: RegionOfInterestType;
    boundsNormalized: Boolean;
    constructor();

  }

  export class RegionsOfInterestControl {
    autoExposureSupported: Boolean;
    autoFocusSupported: Boolean;
    autoWhiteBalanceSupported: Boolean;
    maxRegions: Number;
    constructor();

    setRegionsAsync(regions: Object, callback: (error: Error) => void): void ;
    setRegionsAsync(regions: Object, lockValues: Boolean, callback: (error: Error) => void): void ;

    clearRegionsAsync(callback: (error: Error) => void): void ;

  }

  export class SceneModeControl {
    supportedModes: Object;
    value: CaptureSceneMode;
    constructor();

    setValueAsync(sceneMode: CaptureSceneMode, callback: (error: Error) => void): void ;

  }

  export class TorchControl {
    powerPercent: Number;
    enabled: Boolean;
    powerSupported: Boolean;
    supported: Boolean;
    constructor();

  }

  export class VideoDeviceController {
    cameraOcclusionInfo: CameraOcclusionInfo;
    primaryUse: CaptureUse;
    focusControl: FocusControl;
    isoSpeedControl: IsoSpeedControl;
    lowLagPhoto: LowLagPhotoControl;
    whiteBalanceControl: WhiteBalanceControl;
    torchControl: TorchControl;
    sceneModeControl: SceneModeControl;
    regionsOfInterestControl: RegionsOfInterestControl;
    flashControl: FlashControl;
    lowLagPhotoSequence: LowLagPhotoSequenceControl;
    exposureCompensationControl: ExposureCompensationControl;
    exposureControl: ExposureControl;
    zoomControl: ZoomControl;
    photoConfirmationControl: PhotoConfirmationControl;
    variablePhotoSequenceController: Object;
    desiredOptimization: MediaCaptureOptimization;
    advancedPhotoControl: AdvancedPhotoControl;
    exposurePriorityVideoControl: ExposurePriorityVideoControl;
    hdrVideoControl: HdrVideoControl;
    opticalImageStabilizationControl: OpticalImageStabilizationControl;
    id: String;
    videoTemporalDenoisingControl: VideoTemporalDenoisingControl;
    infraredTorchControl: InfraredTorchControl;
    panelBasedOptimizationControl: PanelBasedOptimizationControl;
    digitalWindowControl: DigitalWindowControl;
    zoom: MediaDeviceControl;
    contrast: MediaDeviceControl;
    backlightCompensation: MediaDeviceControl;
    whiteBalance: MediaDeviceControl;
    brightness: MediaDeviceControl;
    exposure: MediaDeviceControl;
    tilt: MediaDeviceControl;
    roll: MediaDeviceControl;
    hue: MediaDeviceControl;
    pan: MediaDeviceControl;
    focus: MediaDeviceControl;
    constructor();

    setMediaStreamPropertiesAsync(mediaStreamType: Number, mediaEncodingProperties: Object, callback: (error: Error) => void): void ;

    trySetPowerlineFrequency(value: Number): Boolean;

    tryGetPowerlineFrequency(value: Number): Boolean;

    getAvailableMediaStreamProperties(mediaStreamType: Number): Object;

    getMediaStreamProperties(mediaStreamType: Number): Object;

    setDeviceProperty(propertyId: String, propertyValue: Object): void;

    getDeviceProperty(propertyId: String): Object;

    getDevicePropertyById(propertyId: String, maxPropertyValueSize: Number): VideoDeviceControllerGetDevicePropertyResult;

    setDevicePropertyById(propertyId: String, propertyValue: Object): VideoDeviceControllerSetDevicePropertyStatus;

    getDevicePropertyByExtendedId(extendedPropertyId: Array<Number>, maxPropertyValueSize: Number): VideoDeviceControllerGetDevicePropertyResult;

    setDevicePropertyByExtendedId(extendedPropertyId: Array<Number>, propertyValue: Array<Number>): VideoDeviceControllerSetDevicePropertyStatus;

    tryAcquireExclusiveControl(deviceId: String, mode: Number): Boolean;

  }

  export class VideoDeviceControllerGetDevicePropertyResult {
    status: VideoDeviceControllerGetDevicePropertyStatus;
    value: Object;
    constructor();

  }

  export class VideoTemporalDenoisingControl {
    mode: VideoTemporalDenoisingMode;
    supported: Boolean;
    supportedModes: Object;
    constructor();

  }

  export class WhiteBalanceControl {
    max: Number;
    min: Number;
    preset: ColorTemperaturePreset;
    step: Number;
    supported: Boolean;
    value: Number;
    constructor();

    setPresetAsync(preset: ColorTemperaturePreset, callback: (error: Error) => void): void ;

    setValueAsync(temperature: Number, callback: (error: Error) => void): void ;

  }

  export class ZoomControl {
    value: Number;
    max: Number;
    min: Number;
    step: Number;
    supported: Boolean;
    mode: ZoomTransitionMode;
    supportedModes: Object;
    constructor();

    configure(settings: ZoomSettings): void;

  }

  export class ZoomSettings {
    value: Number;
    mode: ZoomTransitionMode;
    constructor();

  }

export const AdvancedPhotoMode: any;
export const AudioDeviceRole: any;
export const AutoFocusRange: any;
export const CameraOcclusionKind: any;
export const CameraStreamState: any;
export const CaptureSceneMode: any;
export const CaptureUse: any;
export const ColorTemperaturePreset: any;
export const DigitalWindowMode: any;
export const FocusMode: any;
export const FocusPreset: any;
export const HdrVideoMode: any;
export const InfraredTorchMode: any;
export const IsoSpeedPreset: any;
export const ManualFocusDistance: any;
export const MediaCaptureFocusState: any;
export const MediaCaptureOptimization: any;
export const MediaCapturePauseBehavior: any;
export const OpticalImageStabilizationMode: any;
export const RegionOfInterestType: any;
export const SendCommandStatus: any;
export const TelephonyKey: any;
export const VideoDeviceControllerGetDevicePropertyStatus: any;
export const VideoDeviceControllerSetDevicePropertyStatus: any;
export const VideoTemporalDenoisingMode: any;
export const ZoomTransitionMode: any;
export const AdvancedPhotoCaptureSettings: any;
export const AdvancedPhotoControl: any;
export const AudioDeviceController: any;
export const AudioDeviceModule: any;
export const AudioDeviceModuleNotificationEventArgs: any;
export const AudioDeviceModulesManager: any;
export const CallControl: any;
export const CameraOcclusionInfo: any;
export const CameraOcclusionState: any;
export const CameraOcclusionStateChangedEventArgs: any;
export const DefaultAudioCaptureDeviceChangedEventArgs: any;
export const DefaultAudioRenderDeviceChangedEventArgs: any;
export const DialRequestedEventArgs: any;
export const DigitalWindowBounds: any;
export const DigitalWindowCapability: any;
export const DigitalWindowControl: any;
export const ExposureCompensationControl: any;
export const ExposureControl: any;
export const ExposurePriorityVideoControl: any;
export const FlashControl: any;
export const FocusControl: any;
export const FocusSettings: any;
export const HdrVideoControl: any;
export const IDefaultAudioDeviceChangedEventArgs: any;
export const IMediaDeviceController: any;
export const InfraredTorchControl: any;
export const IsoSpeedControl: any;
export const KeypadPressedEventArgs: any;
export const LowLagPhotoControl: any;
export const LowLagPhotoSequenceControl: any;
export const MediaDevice: any;
export const MediaDeviceControl: any;
export const MediaDeviceControlCapabilities: any;
export const ModuleCommandResult: any;
export const OpticalImageStabilizationControl: any;
export const PanelBasedOptimizationControl: any;
export const PhotoConfirmationControl: any;
export const RedialRequestedEventArgs: any;
export const RegionOfInterest: any;
export const RegionsOfInterestControl: any;
export const SceneModeControl: any;
export const TorchControl: any;
export const VideoDeviceController: any;
export const VideoDeviceControllerGetDevicePropertyResult: any;
export const VideoTemporalDenoisingControl: any;
export const WhiteBalanceControl: any;
export const ZoomControl: any;
export const ZoomSettings: any;
export * as core from "./media.devices.core.js";
