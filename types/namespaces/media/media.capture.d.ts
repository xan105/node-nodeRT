  export class Size {
    constructor();
  }

  export class BitmapSize {
    width: number;
    height: number;
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class WhiteBalanceGain {
    r: number;
    g: number;
    b: number;
    constructor();
  }

  export class AppBroadcastContract {
    constructor();
  }

  export class AppCaptureContract {
    constructor();
  }

  export class AppCaptureMetadataContract {
    constructor();
  }

  export class CameraCaptureUIContract {
    constructor();
  }

  export class GameBarContract {
    constructor();
  }

  export enum CameraCaptureUIMode {
    photoOrVideo,
    photo,
    video,
  }

  export enum CameraCaptureUIPhotoFormat {
    jpeg,
    png,
    jpegXR,
  }

  export enum CameraCaptureUIVideoFormat {
    mp4,
    wmv,
  }

  export enum CameraCaptureUIMaxVideoResolution {
    highestAvailable,
    lowDefinition,
    standardDefinition,
    highDefinition,
  }

  export enum CameraCaptureUIMaxPhotoResolution {
    highestAvailable,
    verySmallQvga,
    smallVga,
    mediumXga,
    large3M,
    veryLarge5M,
  }

  export enum MediaCategory {
    other,
    communications,
    media,
    gameChat,
    speech,
  }

  export enum StreamingCaptureMode {
    audioAndVideo,
    audio,
    video,
  }

  export enum VideoRotation {
    none,
    clockwise90Degrees,
    clockwise180Degrees,
    clockwise270Degrees,
  }

  export enum PhotoCaptureSource {
    auto,
    videoPreview,
    photo,
  }

  export enum VideoDeviceCharacteristic {
    allStreamsIndependent,
    previewRecordStreamsIdentical,
    previewPhotoStreamsIdentical,
    recordPhotoStreamsIdentical,
    allStreamsIdentical,
  }

  export enum MediaCaptureThermalStatus {
    normal,
    overheated,
  }

  export enum MediaCaptureDeviceExclusiveControlStatus {
    exclusiveControlAvailable,
    sharedReadOnlyAvailable,
  }

  export enum KnownVideoProfile {
    videoRecording,
    highQualityPhoto,
    balancedVideoAndPhoto,
    videoConferencing,
    photoSequence,
    highFrameRate,
    variablePhotoSequence,
    hdrWithWcgVideo,
    hdrWithWcgPhoto,
    videoHdr8,
  }

  export enum MediaCaptureMemoryPreference {
    auto,
    cpu,
  }

  export enum MediaCaptureSharingMode {
    exclusiveControl,
    sharedReadOnly,
  }

  export enum MediaStreamType {
    videoPreview,
    videoRecord,
    audio,
    photo,
  }

  export enum PowerlineFrequency {
    disabled,
    fiftyHertz,
    sixtyHertz,
    auto,
  }

  export enum AppBroadcastCameraOverlayLocation {
    topLeft,
    topCenter,
    topRight,
    middleLeft,
    middleCenter,
    middleRight,
    bottomLeft,
    bottomCenter,
    bottomRight,
  }

  export enum AppBroadcastCameraOverlaySize {
    small,
    medium,
    large,
  }

  export enum AppBroadcastVideoEncodingBitrateMode {
    custom,
    auto,
  }

  export enum AppBroadcastVideoEncodingResolutionMode {
    custom,
    auto,
  }

  export enum AppBroadcastPlugInState {
    unknown,
    initialized,
    microsoftSignInRequired,
    oAuthSignInRequired,
    providerSignInRequired,
    inBandwidthTest,
    readyToBroadcast,
  }

  export enum AppBroadcastStreamState {
    initializing,
    streamReady,
    started,
    paused,
    terminated,
  }

  export enum AppBroadcastSignInState {
    notSignedIn,
    microsoftSignInInProgress,
    microsoftSignInComplete,
    oAuthSignInInProgress,
    oAuthSignInComplete,
  }

  export enum AppBroadcastTerminationReason {
    normalTermination,
    lostConnectionToService,
    noNetworkConnectivity,
    serviceAbort,
    serviceError,
    serviceUnavailable,
    internalError,
    unsupportedFormat,
    backgroundTaskTerminated,
    backgroundTaskUnresponsive,
  }

  export enum AppBroadcastSignInResult {
    success,
    authenticationFailed,
    unauthorized,
    serviceUnavailable,
    unknown,
  }

  export enum ForegroundActivationArgument {
    signInRequired,
    moreSettings,
  }

  export enum AppBroadcastMicrophoneCaptureState {
    stopped,
    started,
    failed,
  }

  export enum AppBroadcastCameraCaptureState {
    stopped,
    started,
    failed,
  }

  export enum AppBroadcastExitBroadcastModeReason {
    normalExit,
    userCanceled,
    authorizationFail,
    foregroundAppActivated,
  }

  export enum AppBroadcastPreviewState {
    started,
    stopped,
    failed,
  }

  export enum AppBroadcastCaptureTargetType {
    appView,
    entireDisplay,
  }

  export enum GameBarServicesDisplayMode {
    windowed,
    fullScreenExclusive,
  }

  export enum AppCaptureVideoEncodingBitrateMode {
    custom,
    high,
    standard,
  }

  export enum AppCaptureVideoEncodingResolutionMode {
    custom,
    high,
    standard,
  }

  export enum AppCaptureVideoEncodingFrameRateMode {
    standard,
    high,
  }

  export enum AppCaptureHistoricalBufferLengthUnit {
    megabytes,
    seconds,
  }

  export enum AppCaptureMicrophoneCaptureState {
    stopped,
    started,
    failed,
  }

  export enum AppCaptureRecordingState {
    inProgress,
    completed,
    failed,
  }

  export enum AppCaptureMetadataPriority {
    informational,
    important,
  }

  export enum GameBarCommand {
    openGameBar,
    recordHistoricalBuffer,
    toggleStartStopRecord,
    startRecord,
    stopRecord,
    takeScreenshot,
    startBroadcast,
    stopBroadcast,
    pauseBroadcast,
    resumeBroadcast,
    toggleStartStopBroadcast,
    toggleMicrophoneCapture,
    toggleCameraCapture,
    toggleRecordingIndicator,
  }

  export enum GameBarCommandOrigin {
    shortcutKey,
    cortana,
    appCommand,
  }

  export enum GameBarTargetCapturePolicy {
    enabledBySystem,
    enabledByUser,
    notEnabled,
    prohibitedBySystem,
    prohibitedByPublisher,
  }

  export class AppCapture {
    isCapturingAudio: boolean;
    isCapturingVideo: boolean;
    constructor();

    static setAllowedAsync(allowed: boolean, callback: (error: Error) => void): void ;


    static getForCurrentView(): AppCapture;


    addListener(type: "CapturingChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CapturingChanged", listener: (ev: Event) => void): void ;
    on(type: "CapturingChanged", listener: (ev: Event) => void): void ;
    off(type: "CapturingChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CameraCaptureUIPhotoCaptureSettings {
    maxResolution: CameraCaptureUIMaxPhotoResolution;
    format: CameraCaptureUIPhotoFormat;
    croppedSizeInPixels: Object;
    croppedAspectRatio: Object;
    allowCropping: boolean;
    constructor();

  }

  export class CameraCaptureUIVideoCaptureSettings {
    maxResolution: CameraCaptureUIMaxVideoResolution;
    maxDurationInSeconds: number;
    format: CameraCaptureUIVideoFormat;
    allowTrimming: boolean;
    constructor();

  }

  export class CameraCaptureUI {
    photoSettings: CameraCaptureUIPhotoCaptureSettings;
    videoSettings: CameraCaptureUIVideoCaptureSettings;
    constructor();

    captureFileAsync(mode: CameraCaptureUIMode, callback: (error: Error, result: Object) => void): void ;

  }

  export class MediaCaptureFailedEventArgs {
    code: number;
    message: string;
    constructor();

  }

  export class MediaCapture {
    audioDeviceController: Object;
    mediaCaptureSettings: MediaCaptureSettings;
    videoDeviceController: Object;
    cameraStreamState: number;
    thermalStatus: MediaCaptureThermalStatus;
    frameSources: Object;
    constructor();

    static isVideoProfileSupported(videoDeviceId: string): boolean;


    static findAllVideoProfiles(videoDeviceId: string): Object;


    static findConcurrentProfiles(videoDeviceId: string): Object;


    static findKnownVideoProfiles(videoDeviceId: string, name: KnownVideoProfile): Object;


    getPreviewFrameAsync(callback: (error: Error, result: Object) => void): void ;
    getPreviewFrameAsync(destination: Object, callback: (error: Error, result: Object) => void): void ;

    prepareAdvancedPhotoCaptureAsync(encodingProperties: Object, callback: (error: Error, result: AdvancedPhotoCapture) => void): void ;

    removeEffectAsync(effect: Object, callback: (error: Error) => void): void ;

    pauseRecordWithResultAsync(behavior: number, callback: (error: Error, result: MediaCapturePauseResult) => void): void ;

    stopRecordWithResultAsync(callback: (error: Error, result: MediaCaptureStopResult) => void): void ;

    createFrameReaderAsync(inputSource: Object, callback: (error: Error, result: Object) => void): void ;
    createFrameReaderAsync(inputSource: Object, outputSubtype: string, callback: (error: Error, result: Object) => void): void ;
    createFrameReaderAsync(inputSource: Object, outputSubtype: string, outputSize: BitmapSize, callback: (error: Error, result: Object) => void): void ;

    createMultiSourceFrameReaderAsync(inputSources: Object, callback: (error: Error, result: Object) => void): void ;

    initializeAsync(callback: (error: Error) => void): void ;
    initializeAsync(mediaCaptureInitializationSettings: MediaCaptureInitializationSettings, callback: (error: Error) => void): void ;

    startRecordToStorageFileAsync(encodingProfile: Object, file: Object, callback: (error: Error) => void): void ;

    startRecordToStreamAsync(encodingProfile: Object, stream: Object, callback: (error: Error) => void): void ;

    startRecordToCustomSinkAsync(encodingProfile: Object, customMediaSink: Object, callback: (error: Error) => void): void ;
    startRecordToCustomSinkAsync(encodingProfile: Object, customSinkActivationId: string, customSinkSettings: Object, callback: (error: Error) => void): void ;

    stopRecordAsync(callback: (error: Error) => void): void ;

    capturePhotoToStorageFileAsync(type: Object, file: Object, callback: (error: Error) => void): void ;

    capturePhotoToStreamAsync(type: Object, stream: Object, callback: (error: Error) => void): void ;

    addEffectAsync(mediaStreamType: MediaStreamType, effectActivationID: string, effectSettings: Object, callback: (error: Error) => void): void ;

    clearEffectsAsync(mediaStreamType: MediaStreamType, callback: (error: Error) => void): void ;

    startPreviewAsync(callback: (error: Error) => void): void ;

    startPreviewToCustomSinkAsync(encodingProfile: Object, customMediaSink: Object, callback: (error: Error) => void): void ;
    startPreviewToCustomSinkAsync(encodingProfile: Object, customSinkActivationId: string, customSinkSettings: Object, callback: (error: Error) => void): void ;

    stopPreviewAsync(callback: (error: Error) => void): void ;

    prepareLowLagRecordToStorageFileAsync(encodingProfile: Object, file: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;

    prepareLowLagRecordToStreamAsync(encodingProfile: Object, stream: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;

    prepareLowLagRecordToCustomSinkAsync(encodingProfile: Object, customMediaSink: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;
    prepareLowLagRecordToCustomSinkAsync(encodingProfile: Object, customSinkActivationId: string, customSinkSettings: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;

    prepareLowLagPhotoCaptureAsync(type: Object, callback: (error: Error, result: LowLagPhotoCapture) => void): void ;

    prepareLowLagPhotoSequenceCaptureAsync(type: Object, callback: (error: Error, result: LowLagPhotoSequenceCapture) => void): void ;

    setEncodingPropertiesAsync(mediaStreamType: MediaStreamType, mediaEncodingProperties: Object, encoderProperties: Object, callback: (error: Error) => void): void ;

    prepareVariablePhotoSequenceCaptureAsync(type: Object, callback: (error: Error, result: Object) => void): void ;

    addAudioEffectAsync(definition: Object, callback: (error: Error, result: Object) => void): void ;

    addVideoEffectAsync(definition: Object, mediaStreamType: MediaStreamType, callback: (error: Error, result: Object) => void): void ;

    pauseRecordAsync(behavior: number, callback: (error: Error) => void): void ;

    resumeRecordAsync(callback: (error: Error) => void): void ;

    setEncoderProperty(mediaStreamType: MediaStreamType, propertyId: string, propertyValue: Object): void;

    getEncoderProperty(mediaStreamType: MediaStreamType, propertyId: string): Object;

    setPreviewMirroring(value: boolean): void;

    getPreviewMirroring(): boolean;

    setPreviewRotation(value: VideoRotation): void;

    getPreviewRotation(): VideoRotation;

    setRecordRotation(value: VideoRotation): void;

    getRecordRotation(): VideoRotation;

    close(): void;
    addListener(type: "Failed", listener: (ev: Event) => void): void ;
    removeListener(type: "Failed", listener: (ev: Event) => void): void ;
    on(type: "Failed", listener: (ev: Event) => void): void ;
    off(type: "Failed", listener: (ev: Event) => void): void ;
    
    addListener(type: "RecordLimitationExceeded", listener: (ev: Event) => void): void ;
    removeListener(type: "RecordLimitationExceeded", listener: (ev: Event) => void): void ;
    on(type: "RecordLimitationExceeded", listener: (ev: Event) => void): void ;
    off(type: "RecordLimitationExceeded", listener: (ev: Event) => void): void ;
    
    addListener(type: "FocusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "FocusChanged", listener: (ev: Event) => void): void ;
    on(type: "FocusChanged", listener: (ev: Event) => void): void ;
    off(type: "FocusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PhotoConfirmationCaptured", listener: (ev: Event) => void): void ;
    removeListener(type: "PhotoConfirmationCaptured", listener: (ev: Event) => void): void ;
    on(type: "PhotoConfirmationCaptured", listener: (ev: Event) => void): void ;
    off(type: "PhotoConfirmationCaptured", listener: (ev: Event) => void): void ;
    
    addListener(type: "CameraStreamStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraStreamStateChanged", listener: (ev: Event) => void): void ;
    on(type: "CameraStreamStateChanged", listener: (ev: Event) => void): void ;
    off(type: "CameraStreamStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ThermalStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ThermalStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "ThermalStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "ThermalStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CaptureDeviceExclusiveControlStatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CaptureDeviceExclusiveControlStatusChanged", listener: (ev: Event) => void): void ;
    on(type: "CaptureDeviceExclusiveControlStatusChanged", listener: (ev: Event) => void): void ;
    off(type: "CaptureDeviceExclusiveControlStatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaCaptureVideoProfileMediaDescription {
    frameRate: number;
    height: number;
    isHdrVideoSupported: boolean;
    isVariablePhotoSequenceSupported: boolean;
    width: number;
    properties: Object;
    subtype: string;
    constructor();

  }

  export class MediaCaptureVideoProfile {
    id: string;
    supportedPhotoMediaDescription: Object;
    supportedPreviewMediaDescription: Object;
    supportedRecordMediaDescription: Object;
    videoDeviceId: string;
    frameSourceInfos: Object;
    properties: Object;
    constructor();

    getConcurrency(): Object;

  }

  export class MediaCaptureInitializationSettings {
    videoDeviceId: string;
    streamingCaptureMode: StreamingCaptureMode;
    photoCaptureSource: PhotoCaptureSource;
    audioDeviceId: string;
    mediaCategory: MediaCategory;
    audioProcessing: number;
    videoSource: Object;
    audioSource: Object;
    videoProfile: MediaCaptureVideoProfile;
    recordMediaDescription: MediaCaptureVideoProfileMediaDescription;
    previewMediaDescription: MediaCaptureVideoProfileMediaDescription;
    photoMediaDescription: MediaCaptureVideoProfileMediaDescription;
    sourceGroup: Object;
    sharingMode: MediaCaptureSharingMode;
    memoryPreference: MediaCaptureMemoryPreference;
    alwaysPlaySystemShutterSound: boolean;
    constructor();

  }

  export class MediaCaptureSettings {
    audioDeviceId: string;
    photoCaptureSource: PhotoCaptureSource;
    streamingCaptureMode: StreamingCaptureMode;
    videoDeviceCharacteristic: VideoDeviceCharacteristic;
    videoDeviceId: string;
    audioProcessing: number;
    cameraSoundRequiredForRegion: boolean;
    concurrentRecordAndPhotoSequenceSupported: boolean;
    concurrentRecordAndPhotoSupported: boolean;
    horizontal35mmEquivalentFocalLength: number;
    mediaCategory: MediaCategory;
    pitchOffsetDegrees: number;
    vertical35mmEquivalentFocalLength: number;
    direct3D11Device: Object;
    constructor();

  }

  export class LowLagMediaRecording {
    constructor();

    startAsync(callback: (error: Error) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    finishAsync(callback: (error: Error) => void): void ;

    pauseAsync(behavior: number, callback: (error: Error) => void): void ;

    resumeAsync(callback: (error: Error) => void): void ;

    pauseWithResultAsync(behavior: number, callback: (error: Error, result: MediaCapturePauseResult) => void): void ;

    stopWithResultAsync(callback: (error: Error, result: MediaCaptureStopResult) => void): void ;

  }

  export class LowLagPhotoCapture {
    constructor();

    captureAsync(callback: (error: Error, result: CapturedPhoto) => void): void ;

    finishAsync(callback: (error: Error) => void): void ;

  }

  export class LowLagPhotoSequenceCapture {
    constructor();

    startAsync(callback: (error: Error) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    finishAsync(callback: (error: Error) => void): void ;

    addListener(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    removeListener(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    on(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    off(type: "PhotoCaptured", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaCaptureFocusChangedEventArgs {
    focusState: number;
    constructor();

  }

  export class PhotoConfirmationCapturedEventArgs {
    captureTimeOffset: number;
    frame: CapturedFrame;
    constructor();

  }

  export class AdvancedPhotoCapture {
    constructor();

    captureAsync(callback: (error: Error, result: AdvancedCapturedPhoto) => void): void ;
    captureAsync(context: Object, callback: (error: Error, result: AdvancedCapturedPhoto) => void): void ;

    finishAsync(callback: (error: Error) => void): void ;

    addListener(type: "AllPhotosCaptured", listener: (ev: Event) => void): void ;
    removeListener(type: "AllPhotosCaptured", listener: (ev: Event) => void): void ;
    on(type: "AllPhotosCaptured", listener: (ev: Event) => void): void ;
    off(type: "AllPhotosCaptured", listener: (ev: Event) => void): void ;
    
    addListener(type: "OptionalReferencePhotoCaptured", listener: (ev: Event) => void): void ;
    removeListener(type: "OptionalReferencePhotoCaptured", listener: (ev: Event) => void): void ;
    on(type: "OptionalReferencePhotoCaptured", listener: (ev: Event) => void): void ;
    off(type: "OptionalReferencePhotoCaptured", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MediaCapturePauseResult {
    lastFrame: Object;
    recordDuration: number;
    constructor();

    close(): void;
  }

  export class MediaCaptureStopResult {
    lastFrame: Object;
    recordDuration: number;
    constructor();

    close(): void;
  }

  export class MediaCaptureDeviceExclusiveControlStatusChangedEventArgs {
    deviceId: string;
    status: MediaCaptureDeviceExclusiveControlStatus;
    constructor();

  }

  export class CapturedPhoto {
    frame: CapturedFrame;
    thumbnail: CapturedFrame;
    constructor();

  }

  export class AdvancedCapturedPhoto {
    context: Object;
    frame: CapturedFrame;
    mode: number;
    frameBoundsRelativeToReferencePhoto: Object;
    constructor();

  }

  export class OptionalReferencePhotoCapturedEventArgs {
    context: Object;
    frame: CapturedFrame;
    constructor();

  }

  export class CapturedFrame {
    height: number;
    width: number;
    bitmapProperties: Object;
    controlValues: CapturedFrameControlValues;
    softwareBitmap: Object;
    contentType: string;
    size: number;
    canRead: boolean;
    canWrite: boolean;
    position: number;
    constructor();

    readAsync(buffer: Object, count: number, options: number, callback: (error: Error, result: Object) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

    getInputStreamAt(position: number): Object;

    getOutputStreamAt(position: number): Object;

    seek(position: number): void;

    cloneStream(): Object;

    close(): void;
  }

  export class PhotoCapturedEventArgs {
    captureTimeOffset: number;
    frame: CapturedFrame;
    thumbnail: CapturedFrame;
    constructor();

  }

  export class CapturedFrameControlValues {
    exposure: number;
    exposureCompensation: number;
    flashPowerPercent: number;
    flashed: boolean;
    focus: number;
    isoSpeed: number;
    sceneMode: number;
    whiteBalance: number;
    zoomFactor: number;
    focusState: number;
    isoAnalogGain: number;
    isoDigitalGain: number;
    sensorFrameRate: Object;
    whiteBalanceGain: WhiteBalanceGain;
    constructor();

  }

  export class VideoStreamConfiguration {
    inputProperties: Object;
    outputProperties: Object;
    constructor();

  }

  export class AppBroadcastGlobalSettings {
    systemAudioGain: number;
    selectedCameraId: string;
    microphoneGain: number;
    isMicrophoneCaptureEnabledByDefault: boolean;
    isEchoCancellationEnabled: boolean;
    isCursorImageCaptureEnabled: boolean;
    isCameraCaptureEnabledByDefault: boolean;
    isAudioCaptureEnabled: boolean;
    cameraOverlaySize: AppBroadcastCameraOverlaySize;
    cameraOverlayLocation: AppBroadcastCameraOverlayLocation;
    hasHardwareEncoder: boolean;
    isBroadcastEnabled: boolean;
    isDisabledByPolicy: boolean;
    isGpuConstrained: boolean;
    constructor();

  }

  export class AppBroadcastProviderSettings {
    videoEncodingResolutionMode: AppBroadcastVideoEncodingResolutionMode;
    videoEncodingBitrateMode: AppBroadcastVideoEncodingBitrateMode;
    defaultBroadcastTitle: string;
    customVideoEncodingWidth: number;
    customVideoEncodingHeight: number;
    customVideoEncodingBitrate: number;
    audioEncodingBitrate: number;
    constructor();

  }

  export class AppBroadcastManager {
    constructor();

    static getGlobalSettings(): AppBroadcastGlobalSettings;


    static applyGlobalSettings(value: AppBroadcastGlobalSettings): void;


    static getProviderSettings(): AppBroadcastProviderSettings;


    static applyProviderSettings(value: AppBroadcastProviderSettings): void;


  }

  export class AppBroadcastBackgroundServiceSignInInfo {
    userName: string;
    oAuthRequestUri: Object;
    oAuthCallbackUri: Object;
    authenticationResult: Object;
    signInState: AppBroadcastSignInState;
    constructor();

    addListener(type: "SignInStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SignInStateChanged", listener: (ev: Event) => void): void ;
    on(type: "SignInStateChanged", listener: (ev: Event) => void): void ;
    off(type: "SignInStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserNameChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserNameChanged", listener: (ev: Event) => void): void ;
    on(type: "UserNameChanged", listener: (ev: Event) => void): void ;
    off(type: "UserNameChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastSignInStateChangedEventArgs {
    result: AppBroadcastSignInResult;
    signInState: AppBroadcastSignInState;
    constructor();

  }

  export class AppBroadcastStreamReader {
    audioAacSequence: Object;
    audioBitrate: number;
    audioChannels: number;
    audioSampleRate: number;
    videoBitrate: number;
    videoHeight: number;
    videoWidth: number;
    constructor();

    tryGetNextAudioFrame(): AppBroadcastStreamAudioFrame;

    tryGetNextVideoFrame(): AppBroadcastStreamVideoFrame;

    addListener(type: "AudioFrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioFrameArrived", listener: (ev: Event) => void): void ;
    on(type: "AudioFrameArrived", listener: (ev: Event) => void): void ;
    off(type: "AudioFrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    on(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    off(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastBackgroundServiceStreamInfo {
    desiredVideoEncodingBitrate: number;
    bandwidthTestBitrate: number;
    audioCodec: string;
    broadcastStreamReader: AppBroadcastStreamReader;
    streamState: AppBroadcastStreamState;
    constructor();

    reportProblemWithStream(): void;

    addListener(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    on(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    off(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoEncodingBitrateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoEncodingBitrateChanged", listener: (ev: Event) => void): void ;
    on(type: "VideoEncodingBitrateChanged", listener: (ev: Event) => void): void ;
    off(type: "VideoEncodingBitrateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "VideoEncodingResolutionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoEncodingResolutionChanged", listener: (ev: Event) => void): void ;
    on(type: "VideoEncodingResolutionChanged", listener: (ev: Event) => void): void ;
    off(type: "VideoEncodingResolutionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastStreamStateChangedEventArgs {
    streamState: AppBroadcastStreamState;
    constructor();

  }

  export class AppBroadcastBackgroundService {
    viewerCount: number;
    streamInfo: AppBroadcastBackgroundServiceStreamInfo;
    signInInfo: AppBroadcastBackgroundServiceSignInInfo;
    plugInState: AppBroadcastPlugInState;
    broadcastTitle: string;
    appId: string;
    titleId: string;
    broadcastLanguage: string;
    broadcastChannel: string;
    constructor();

    terminateBroadcast(reason: AppBroadcastTerminationReason, providerSpecificReason: number): void;

    addListener(type: "HeartbeatRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "HeartbeatRequested", listener: (ev: Event) => void): void ;
    on(type: "HeartbeatRequested", listener: (ev: Event) => void): void ;
    off(type: "HeartbeatRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "BroadcastChannelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BroadcastChannelChanged", listener: (ev: Event) => void): void ;
    on(type: "BroadcastChannelChanged", listener: (ev: Event) => void): void ;
    off(type: "BroadcastChannelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "BroadcastLanguageChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BroadcastLanguageChanged", listener: (ev: Event) => void): void ;
    on(type: "BroadcastLanguageChanged", listener: (ev: Event) => void): void ;
    off(type: "BroadcastLanguageChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "BroadcastTitleChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "BroadcastTitleChanged", listener: (ev: Event) => void): void ;
    on(type: "BroadcastTitleChanged", listener: (ev: Event) => void): void ;
    off(type: "BroadcastTitleChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastHeartbeatRequestedEventArgs {
    handled: boolean;
    constructor();

  }

  export class AppBroadcastStreamAudioFrame {
    audioBuffer: Object;
    audioHeader: AppBroadcastStreamAudioHeader;
    constructor();

  }

  export class AppBroadcastStreamVideoFrame {
    videoBuffer: Object;
    videoHeader: AppBroadcastStreamVideoHeader;
    constructor();

  }

  export class AppBroadcastStreamVideoHeader {
    absoluteTimestamp: Date;
    duration: number;
    frameId: number;
    hasDiscontinuity: boolean;
    isKeyFrame: boolean;
    relativeTimestamp: number;
    constructor();

  }

  export class AppBroadcastStreamAudioHeader {
    absoluteTimestamp: Date;
    duration: number;
    frameId: number;
    hasDiscontinuity: boolean;
    relativeTimestamp: number;
    constructor();

  }

  export class AppBroadcastTriggerDetails {
    backgroundService: AppBroadcastBackgroundService;
    constructor();

  }

  export class AppBroadcastPlugInManager {
    defaultPlugIn: AppBroadcastPlugIn;
    isBroadcastProviderAvailable: boolean;
    plugInList: Object;
    constructor();

    static getDefault(): AppBroadcastPlugInManager;


    static getForUser(user: Object): AppBroadcastPlugInManager;


  }

  export class AppBroadcastPlugIn {
    appId: string;
    displayName: string;
    logo: Object;
    providerSettings: AppBroadcastProviderSettings;
    constructor();

  }

  export class AppBroadcastPreview {
    errorCode: number;
    previewState: AppBroadcastPreviewState;
    previewStreamReader: AppBroadcastPreviewStreamReader;
    constructor();

    stopPreview(): void;

    addListener(type: "PreviewStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PreviewStateChanged", listener: (ev: Event) => void): void ;
    on(type: "PreviewStateChanged", listener: (ev: Event) => void): void ;
    off(type: "PreviewStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastState {
    signInState: AppBroadcastSignInState;
    shouldCaptureMicrophone: boolean;
    shouldCaptureCamera: boolean;
    authenticationResult: Object;
    isCaptureTargetRunning: boolean;
    microphoneCaptureError: number;
    microphoneCaptureState: AppBroadcastMicrophoneCaptureState;
    oAuthCallbackUri: Object;
    oAuthRequestUri: Object;
    plugInState: AppBroadcastPlugInState;
    cameraCaptureError: number;
    cameraCaptureState: AppBroadcastCameraCaptureState;
    encodedVideoSize: Object;
    streamState: AppBroadcastStreamState;
    terminationReason: AppBroadcastTerminationReason;
    terminationReasonPlugInSpecific: number;
    viewerCount: number;
    constructor();

    restartMicrophoneCapture(): void;

    restartCameraCapture(): void;

    addListener(type: "CameraCaptureStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CameraCaptureStateChanged", listener: (ev: Event) => void): void ;
    on(type: "CameraCaptureStateChanged", listener: (ev: Event) => void): void ;
    off(type: "CameraCaptureStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    removeListener(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    on(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    off(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    
    addListener(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    on(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    off(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PlugInStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PlugInStateChanged", listener: (ev: Event) => void): void ;
    on(type: "PlugInStateChanged", listener: (ev: Event) => void): void ;
    off(type: "PlugInStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    on(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    off(type: "StreamStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ViewerCountChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ViewerCountChanged", listener: (ev: Event) => void): void ;
    on(type: "ViewerCountChanged", listener: (ev: Event) => void): void ;
    off(type: "ViewerCountChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastViewerCountChangedEventArgs {
    viewerCount: number;
    constructor();

  }

  export class AppBroadcastMicrophoneCaptureStateChangedEventArgs {
    errorCode: number;
    state: AppBroadcastMicrophoneCaptureState;
    constructor();

  }

  export class AppBroadcastCameraCaptureStateChangedEventArgs {
    errorCode: number;
    state: AppBroadcastCameraCaptureState;
    constructor();

  }

  export class AppBroadcastPlugInStateChangedEventArgs {
    plugInState: AppBroadcastPlugInState;
    constructor();

  }

  export class AppBroadcastPreviewStateChangedEventArgs {
    errorCode: number;
    previewState: AppBroadcastPreviewState;
    constructor();

  }

  export class AppBroadcastPreviewStreamReader {
    videoBitmapAlphaMode: number;
    videoBitmapPixelFormat: number;
    videoHeight: number;
    videoStride: number;
    videoWidth: number;
    constructor();

    tryGetNextVideoFrame(): AppBroadcastPreviewStreamVideoFrame;

    addListener(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    removeListener(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    on(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    off(type: "VideoFrameArrived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppBroadcastPreviewStreamVideoFrame {
    videoBuffer: Object;
    videoHeader: AppBroadcastPreviewStreamVideoHeader;
    constructor();

  }

  export class AppBroadcastPreviewStreamVideoHeader {
    absoluteTimestamp: Date;
    duration: number;
    frameId: number;
    relativeTimestamp: number;
    constructor();

  }

  export class AppBroadcastServices {
    captureTargetType: AppBroadcastCaptureTargetType;
    broadcastTitle: string;
    broadcastLanguage: string;
    canCapture: boolean;
    state: AppBroadcastState;
    userName: string;
    constructor();

    enterBroadcastModeAsync(plugIn: AppBroadcastPlugIn, callback: (error: Error, result: number) => void): void ;

    exitBroadcastMode(reason: AppBroadcastExitBroadcastModeReason): void;

    startBroadcast(): void;

    pauseBroadcast(): void;

    resumeBroadcast(): void;

    startPreview(desiredSize: Object): AppBroadcastPreview;

  }

  export class AppCaptureSettings {
    isHistoricalCaptureOnWirelessDisplayAllowed: boolean;
    videoEncodingBitrateMode: AppCaptureVideoEncodingBitrateMode;
    isHistoricalCaptureOnBatteryAllowed: boolean;
    isAudioCaptureEnabled: boolean;
    isAppCaptureEnabled: boolean;
    appCaptureDestinationFolder: Object;
    historicalBufferLength: number;
    isHistoricalCaptureEnabled: boolean;
    customVideoEncodingWidth: number;
    customVideoEncodingHeight: number;
    customVideoEncodingBitrate: number;
    audioEncodingBitrate: number;
    historicalBufferLengthUnit: AppCaptureHistoricalBufferLengthUnit;
    videoEncodingResolutionMode: AppCaptureVideoEncodingResolutionMode;
    screenshotDestinationFolder: Object;
    maximumRecordLength: number;
    hasHardwareEncoder: boolean;
    isCpuConstrained: boolean;
    isMemoryConstrained: boolean;
    isDisabledByPolicy: boolean;
    alternateShortcutKeys: AppCaptureAlternateShortcutKeys;
    isGpuConstrained: boolean;
    isMicrophoneCaptureEnabled: boolean;
    videoEncodingFrameRateMode: AppCaptureVideoEncodingFrameRateMode;
    systemAudioGain: number;
    microphoneGain: number;
    isMicrophoneCaptureEnabledByDefault: boolean;
    isEchoCancellationEnabled: boolean;
    isCursorImageCaptureEnabled: boolean;
    constructor();

  }

  export class AppCaptureAlternateShortcutKeys {
    toggleRecordingKeyModifiers: number;
    toggleRecordingKey: number;
    toggleRecordingIndicatorKeyModifiers: number;
    toggleRecordingIndicatorKey: number;
    toggleGameBarKeyModifiers: number;
    toggleGameBarKey: number;
    takeScreenshotKeyModifiers: number;
    takeScreenshotKey: number;
    saveHistoricalVideoKeyModifiers: number;
    saveHistoricalVideoKey: number;
    toggleMicrophoneCaptureKeyModifiers: number;
    toggleMicrophoneCaptureKey: number;
    toggleCameraCaptureKeyModifiers: number;
    toggleCameraCaptureKey: number;
    toggleBroadcastKeyModifiers: number;
    toggleBroadcastKey: number;
    constructor();

  }

  export class AppCaptureManager {
    constructor();

    static getCurrentSettings(): AppCaptureSettings;


    static applySettings(appCaptureSettings: AppCaptureSettings): void;


  }

  export class AppCaptureRecordOperation {
    duration: number;
    errorCode: number;
    file: Object;
    isFileTruncated: boolean;
    state: AppCaptureRecordingState;
    constructor();

    stopRecording(): void;

    addListener(type: "DurationGenerated", listener: (ev: Event) => void): void ;
    removeListener(type: "DurationGenerated", listener: (ev: Event) => void): void ;
    on(type: "DurationGenerated", listener: (ev: Event) => void): void ;
    off(type: "DurationGenerated", listener: (ev: Event) => void): void ;
    
    addListener(type: "FileGenerated", listener: (ev: Event) => void): void ;
    removeListener(type: "FileGenerated", listener: (ev: Event) => void): void ;
    on(type: "FileGenerated", listener: (ev: Event) => void): void ;
    off(type: "FileGenerated", listener: (ev: Event) => void): void ;
    
    addListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StateChanged", listener: (ev: Event) => void): void ;
    on(type: "StateChanged", listener: (ev: Event) => void): void ;
    off(type: "StateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppCaptureState {
    shouldCaptureMicrophone: boolean;
    isHistoricalCaptureEnabled: boolean;
    isTargetRunning: boolean;
    microphoneCaptureError: number;
    microphoneCaptureState: AppCaptureMicrophoneCaptureState;
    constructor();

    restartMicrophoneCapture(): void;

    addListener(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    removeListener(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    on(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    off(type: "CaptureTargetClosed", listener: (ev: Event) => void): void ;
    
    addListener(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    on(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    off(type: "MicrophoneCaptureStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AppCaptureMicrophoneCaptureStateChangedEventArgs {
    errorCode: number;
    state: AppCaptureMicrophoneCaptureState;
    constructor();

  }

  export class AppCaptureRecordingStateChangedEventArgs {
    errorCode: number;
    state: AppCaptureRecordingState;
    constructor();

  }

  export class AppCaptureDurationGeneratedEventArgs {
    duration: number;
    constructor();

  }

  export class AppCaptureFileGeneratedEventArgs {
    file: Object;
    constructor();

  }

  export class AppCaptureServices {
    canCapture: boolean;
    state: AppCaptureState;
    constructor();

    record(): AppCaptureRecordOperation;

    recordTimeSpan(startTime: Date, duration: number): AppCaptureRecordOperation;

  }

  export class AppCaptureMetadataWriter {
    remainingStorageBytesAvailable: number;
    constructor();

    addStringEvent(name: string, value: string, priority: AppCaptureMetadataPriority): void;

    addInt32Event(name: string, value: number, priority: AppCaptureMetadataPriority): void;

    addDoubleEvent(name: string, value: number, priority: AppCaptureMetadataPriority): void;

    startStringState(name: string, value: string, priority: AppCaptureMetadataPriority): void;

    startInt32State(name: string, value: number, priority: AppCaptureMetadataPriority): void;

    startDoubleState(name: string, value: number, priority: AppCaptureMetadataPriority): void;

    stopState(name: string): void;

    stopAllStates(): void;

    close(): void;
    addListener(type: "MetadataPurged", listener: (ev: Event) => void): void ;
    removeListener(type: "MetadataPurged", listener: (ev: Event) => void): void ;
    on(type: "MetadataPurged", listener: (ev: Event) => void): void ;
    off(type: "MetadataPurged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CameraOptionsUI {
    constructor();

    static show(mediaCapture: MediaCapture): void;


  }

  export class GameBarServicesManager {
    constructor();

    static getDefault(): GameBarServicesManager;


    addListener(type: "GameBarServicesCreated", listener: (ev: Event) => void): void ;
    removeListener(type: "GameBarServicesCreated", listener: (ev: Event) => void): void ;
    on(type: "GameBarServicesCreated", listener: (ev: Event) => void): void ;
    off(type: "GameBarServicesCreated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GameBarServicesManagerGameBarServicesCreatedEventArgs {
    gameBarServices: GameBarServices;
    constructor();

  }

  export class GameBarServices {
    appBroadcastServices: AppBroadcastServices;
    appCaptureServices: AppCaptureServices;
    sessionId: string;
    targetCapturePolicy: GameBarTargetCapturePolicy;
    targetInfo: GameBarServicesTargetInfo;
    constructor();

    enableCapture(): void;

    disableCapture(): void;

    addListener(type: "CommandReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CommandReceived", listener: (ev: Event) => void): void ;
    on(type: "CommandReceived", listener: (ev: Event) => void): void ;
    off(type: "CommandReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GameBarServicesTargetInfo {
    appId: string;
    displayMode: GameBarServicesDisplayMode;
    displayName: string;
    titleId: string;
    constructor();

  }

  export class GameBarServicesCommandEventArgs {
    command: GameBarCommand;
    origin: GameBarCommandOrigin;
    constructor();

  }

  export class ScreenCapture {
    audioSource: Object;
    isAudioSuspended: boolean;
    isVideoSuspended: boolean;
    videoSource: Object;
    constructor();

    static getForCurrentView(): ScreenCapture;


    addListener(type: "SourceSuspensionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceSuspensionChanged", listener: (ev: Event) => void): void ;
    on(type: "SourceSuspensionChanged", listener: (ev: Event) => void): void ;
    off(type: "SourceSuspensionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SourceSuspensionChangedEventArgs {
    isAudioSuspended: boolean;
    isVideoSuspended: boolean;
    constructor();

  }

export * as core from "./media.capture.core.js";
export * as frames from "./media.capture.frames.js";