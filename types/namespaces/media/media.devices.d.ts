  export class Rect {
    constructor();
  }

  export class CallControlContract {
    constructor();
  }

  export enum AudioDeviceRole {
    default,
    communications,
  }

  export enum SendCommandStatus {
    success,
    deviceNotAvailable,
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

  export enum MediaCaptureFocusState {
    uninitialized,
    lost,
    searching,
    focused,
    failed,
  }

  export enum CameraStreamState {
    notStreaming,
    streaming,
    blockedForPrivacy,
    shutdown,
  }

  export enum MediaCapturePauseBehavior {
    retainHardwareResources,
    releaseHardwareResources,
  }

  export enum AdvancedPhotoMode {
    auto,
    standard,
    hdr,
    lowLight,
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

  export enum ZoomTransitionMode {
    auto,
    direct,
    smooth,
  }

  export enum FocusPreset {
    auto,
    manual,
    autoMacro,
    autoNormal,
    autoInfinity,
    autoHyperfocal,
  }

  export enum FocusMode {
    auto,
    single,
    continuous,
    manual,
  }

  export enum ManualFocusDistance {
    infinity,
    hyperfocal,
    nearest,
  }

  export enum AutoFocusRange {
    fullRange,
    macro,
    normal,
  }

  export enum RegionOfInterestType {
    unknown,
    face,
  }

  export enum HdrVideoMode {
    off,
    on,
    auto,
  }

  export enum OpticalImageStabilizationMode {
    off,
    on,
    auto,
  }

  export enum VideoTemporalDenoisingMode {
    off,
    on,
    auto,
  }

  export enum CaptureUse {
    none,
    photo,
    video,
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

  export enum VideoDeviceControllerSetDevicePropertyStatus {
    success,
    unknownFailure,
    notSupported,
    invalidValue,
    deviceNotAvailable,
    notInControl,
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

  export class IDefaultAudioDeviceChangedEventArgs {
    id: string;
    role: AudioDeviceRole;
    constructor();

  }

  export class DefaultAudioCaptureDeviceChangedEventArgs {
    id: string;
    role: AudioDeviceRole;
    constructor();

  }

  export class DefaultAudioRenderDeviceChangedEventArgs {
    id: string;
    role: AudioDeviceRole;
    constructor();

  }

  export class ModuleCommandResult {
    result: Object;
    status: SendCommandStatus;
    constructor();

  }

  export class AudioDeviceModulesManager {
    constructor();
    constructor(deviceId: string);

    findAllById(moduleId: string): Object;

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

  export class AudioDeviceModuleNotificationEventArgs {
    module: AudioDeviceModule;
    notificationData: Object;
    constructor();

  }

  export class AudioDeviceModule {
    classId: string;
    displayName: string;
    instanceId: number;
    majorVersion: number;
    minorVersion: number;
    constructor();

    sendCommandAsync(Command: Object, callback: (error: Error, result: ModuleCommandResult) => void): void ;

  }

  export class MediaDevice {
    constructor();

    static getAudioCaptureSelector(): string;


    static getAudioRenderSelector(): string;


    static getVideoCaptureSelector(): string;


    static getDefaultAudioCaptureId(role: AudioDeviceRole): string;


    static getDefaultAudioRenderId(role: AudioDeviceRole): string;


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

  export class SceneModeControl {
    supportedModes: Object;
    value: CaptureSceneMode;
    constructor();

    setValueAsync(sceneMode: CaptureSceneMode, callback: (error: Error) => void): void ;

  }

  export class TorchControl {
    powerPercent: number;
    enabled: boolean;
    powerSupported: boolean;
    supported: boolean;
    constructor();

  }

  export class FlashControl {
    redEyeReduction: boolean;
    powerPercent: number;
    enabled: boolean;
    auto: boolean;
    powerSupported: boolean;
    redEyeReductionSupported: boolean;
    supported: boolean;
    assistantLightEnabled: boolean;
    assistantLightSupported: boolean;
    constructor();

  }

  export class ExposureCompensationControl {
    max: number;
    min: number;
    step: number;
    supported: boolean;
    value: number;
    constructor();

    setValueAsync(value: number, callback: (error: Error) => void): void ;

  }

  export class IsoSpeedControl {
    preset: IsoSpeedPreset;
    supported: boolean;
    supportedPresets: Object;
    auto: boolean;
    max: number;
    min: number;
    step: number;
    value: number;
    constructor();

    setPresetAsync(preset: IsoSpeedPreset, callback: (error: Error) => void): void ;

    setValueAsync(isoSpeed: number, callback: (error: Error) => void): void ;

    setAutoAsync(callback: (error: Error) => void): void ;

  }

  export class WhiteBalanceControl {
    max: number;
    min: number;
    preset: ColorTemperaturePreset;
    step: number;
    supported: boolean;
    value: number;
    constructor();

    setPresetAsync(preset: ColorTemperaturePreset, callback: (error: Error) => void): void ;

    setValueAsync(temperature: number, callback: (error: Error) => void): void ;

  }

  export class ExposureControl {
    auto: boolean;
    max: number;
    min: number;
    step: number;
    supported: boolean;
    value: number;
    constructor();

    setAutoAsync(value: boolean, callback: (error: Error) => void): void ;

    setValueAsync(shutterDuration: number, callback: (error: Error) => void): void ;

  }

  export class ZoomSettings {
    value: number;
    mode: ZoomTransitionMode;
    constructor();

  }

  export class ZoomControl {
    value: number;
    max: number;
    min: number;
    step: number;
    supported: boolean;
    mode: ZoomTransitionMode;
    supportedModes: Object;
    constructor();

    configure(settings: ZoomSettings): void;

  }

  export class FocusSettings {
    waitForFocus: boolean;
    value: number;
    mode: FocusMode;
    distance: ManualFocusDistance;
    disableDriverFallback: boolean;
    autoFocusRange: AutoFocusRange;
    constructor();

  }

  export class FocusControl {
    max: number;
    min: number;
    preset: FocusPreset;
    step: number;
    supported: boolean;
    supportedPresets: Object;
    value: number;
    focusChangedSupported: boolean;
    focusState: MediaCaptureFocusState;
    mode: FocusMode;
    supportedFocusDistances: Object;
    supportedFocusModes: Object;
    supportedFocusRanges: Object;
    waitForFocusSupported: boolean;
    constructor();

    setPresetAsync(preset: FocusPreset, callback: (error: Error) => void): void ;
    setPresetAsync(preset: FocusPreset, completeBeforeFocus: boolean, callback: (error: Error) => void): void ;

    setValueAsync(focus: number, callback: (error: Error) => void): void ;

    focusAsync(callback: (error: Error) => void): void ;

    unlockAsync(callback: (error: Error) => void): void ;

    lockAsync(callback: (error: Error) => void): void ;

    configure(settings: FocusSettings): void;

  }

  export class RegionOfInterest {
    bounds: Object;
    autoWhiteBalanceEnabled: boolean;
    autoFocusEnabled: boolean;
    autoExposureEnabled: boolean;
    weight: number;
    type: RegionOfInterestType;
    boundsNormalized: boolean;
    constructor();

  }

  export class RegionsOfInterestControl {
    autoExposureSupported: boolean;
    autoFocusSupported: boolean;
    autoWhiteBalanceSupported: boolean;
    maxRegions: number;
    constructor();

    setRegionsAsync(regions: Object, callback: (error: Error) => void): void ;
    setRegionsAsync(regions: Object, lockValues: boolean, callback: (error: Error) => void): void ;

    clearRegionsAsync(callback: (error: Error) => void): void ;

  }

  export class ExposurePriorityVideoControl {
    enabled: boolean;
    supported: boolean;
    constructor();

  }

  export class HdrVideoControl {
    mode: HdrVideoMode;
    supported: boolean;
    supportedModes: Object;
    constructor();

  }

  export class AdvancedPhotoCaptureSettings {
    mode: AdvancedPhotoMode;
    constructor();

  }

  export class AdvancedPhotoControl {
    mode: AdvancedPhotoMode;
    supported: boolean;
    supportedModes: Object;
    constructor();

    configure(settings: AdvancedPhotoCaptureSettings): void;

  }

  export class OpticalImageStabilizationControl {
    mode: OpticalImageStabilizationMode;
    supported: boolean;
    supportedModes: Object;
    constructor();

  }

  export class VideoTemporalDenoisingControl {
    mode: VideoTemporalDenoisingMode;
    supported: boolean;
    supportedModes: Object;
    constructor();

  }

  export class IMediaDeviceController {
    constructor();

    setMediaStreamPropertiesAsync(mediaStreamType: number, mediaEncodingProperties: Object, callback: (error: Error) => void): void ;

    getAvailableMediaStreamProperties(mediaStreamType: number): Object;

    getMediaStreamProperties(mediaStreamType: number): Object;

  }

  export class MediaDeviceControl {
    capabilities: MediaDeviceControlCapabilities;
    constructor();

    tryGetValue(value: number): boolean;

    trySetValue(value: number): boolean;

    tryGetAuto(value: boolean): boolean;

    trySetAuto(value: boolean): boolean;

  }

  export class LowLagPhotoSequenceControl {
    thumbnailFormat: number;
    thumbnailEnabled: boolean;
    photosPerSecondLimit: number;
    pastPhotoLimit: number;
    desiredThumbnailSize: number;
    hardwareAcceleratedThumbnailSupported: number;
    maxPastPhotos: number;
    maxPhotosPerSecond: number;
    supported: boolean;
    constructor();

    getHighestConcurrentFrameRate(captureProperties: Object): Object;

    getCurrentFrameRate(): Object;

  }

  export class LowLagPhotoControl {
    thumbnailFormat: number;
    thumbnailEnabled: boolean;
    desiredThumbnailSize: number;
    hardwareAcceleratedThumbnailSupported: number;
    constructor();

    getHighestConcurrentFrameRate(captureProperties: Object): Object;

    getCurrentFrameRate(): Object;

  }

  export class PhotoConfirmationControl {
    pixelFormat: number;
    enabled: boolean;
    supported: boolean;
    constructor();

  }

  export class VideoDeviceControllerGetDevicePropertyResult {
    status: VideoDeviceControllerGetDevicePropertyStatus;
    value: Object;
    constructor();

  }

  export class MediaDeviceControlCapabilities {
    autoModeSupported: boolean;
    default: number;
    max: number;
    min: number;
    step: number;
    supported: boolean;
    constructor();

  }

  export class VideoDeviceController {
    primaryUse: CaptureUse;
    isoSpeedControl: IsoSpeedControl;
    focusControl: FocusControl;
    whiteBalanceControl: WhiteBalanceControl;
    torchControl: TorchControl;
    sceneModeControl: SceneModeControl;
    flashControl: FlashControl;
    regionsOfInterestControl: RegionsOfInterestControl;
    lowLagPhotoSequence: LowLagPhotoSequenceControl;
    lowLagPhoto: LowLagPhotoControl;
    exposureCompensationControl: ExposureCompensationControl;
    exposureControl: ExposureControl;
    zoomControl: ZoomControl;
    variablePhotoSequenceController: Object;
    photoConfirmationControl: PhotoConfirmationControl;
    desiredOptimization: MediaCaptureOptimization;
    advancedPhotoControl: AdvancedPhotoControl;
    exposurePriorityVideoControl: ExposurePriorityVideoControl;
    hdrVideoControl: HdrVideoControl;
    opticalImageStabilizationControl: OpticalImageStabilizationControl;
    id: string;
    videoTemporalDenoisingControl: VideoTemporalDenoisingControl;
    pan: MediaDeviceControl;
    hue: MediaDeviceControl;
    focus: MediaDeviceControl;
    contrast: MediaDeviceControl;
    brightness: MediaDeviceControl;
    backlightCompensation: MediaDeviceControl;
    zoom: MediaDeviceControl;
    whiteBalance: MediaDeviceControl;
    exposure: MediaDeviceControl;
    tilt: MediaDeviceControl;
    roll: MediaDeviceControl;
    constructor();

    setMediaStreamPropertiesAsync(mediaStreamType: number, mediaEncodingProperties: Object, callback: (error: Error) => void): void ;

    trySetPowerlineFrequency(value: number): boolean;

    tryGetPowerlineFrequency(value: number): boolean;

    getAvailableMediaStreamProperties(mediaStreamType: number): Object;

    getMediaStreamProperties(mediaStreamType: number): Object;

    setDeviceProperty(propertyId: string, propertyValue: Object): void;

    getDeviceProperty(propertyId: string): Object;

    getDevicePropertyById(propertyId: string, maxPropertyValueSize: number): VideoDeviceControllerGetDevicePropertyResult;

    setDevicePropertyById(propertyId: string, propertyValue: Object): VideoDeviceControllerSetDevicePropertyStatus;

    getDevicePropertyByExtendedId(extendedPropertyId: Array<number>, maxPropertyValueSize: number): VideoDeviceControllerGetDevicePropertyResult;

    setDevicePropertyByExtendedId(extendedPropertyId: Array<number>, propertyValue: Array<number>): VideoDeviceControllerSetDevicePropertyStatus;

  }

  export class AudioDeviceController {
    volumePercent: number;
    muted: boolean;
    constructor();

    setMediaStreamPropertiesAsync(mediaStreamType: number, mediaEncodingProperties: Object, callback: (error: Error) => void): void ;

    getAvailableMediaStreamProperties(mediaStreamType: number): Object;

    getMediaStreamProperties(mediaStreamType: number): Object;

  }

  export class DialRequestedEventArgs {
    contact: Object;
    constructor();

    handled(): void;

  }

  export class RedialRequestedEventArgs {
    constructor();

    handled(): void;

  }

  export class KeypadPressedEventArgs {
    telephonyKey: TelephonyKey;
    constructor();

  }

  export class CallControl {
    hasRinger: boolean;
    constructor();

    static getDefault(): CallControl;


    static fromId(deviceId: string): CallControl;


    indicateNewIncomingCall(enableRinger: boolean, callerId: string): number;

    indicateNewOutgoingCall(): number;

    indicateActiveCall(callToken: number): void;

    endCall(callToken: number): void;

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

export * as core from "./media.devices.core.js";