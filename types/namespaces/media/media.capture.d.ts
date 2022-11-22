  export class Size {
    constructor();
  }

  export class BitmapSize {
    width: Number;
    height: Number;
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class WhiteBalanceGain {
    r: Number;
    g: Number;
    b: Number;
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
    isCapturingAudio: Boolean;
    isCapturingVideo: Boolean;
    constructor();

    static setAllowedAsync(allowed: Boolean, callback: (error: Error) => void): void ;


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
    allowCropping: Boolean;
    constructor();

  }

  export class CameraCaptureUIVideoCaptureSettings {
    maxResolution: CameraCaptureUIMaxVideoResolution;
    maxDurationInSeconds: Number;
    format: CameraCaptureUIVideoFormat;
    allowTrimming: Boolean;
    constructor();

  }

  export class CameraCaptureUI {
    photoSettings: CameraCaptureUIPhotoCaptureSettings;
    videoSettings: CameraCaptureUIVideoCaptureSettings;
    constructor();

    captureFileAsync(mode: CameraCaptureUIMode, callback: (error: Error, result: Object) => void): void ;

  }

  export class MediaCaptureFailedEventArgs {
    code: Number;
    message: String;
    constructor();

  }

  export class MediaCapture {
    audioDeviceController: Object;
    mediaCaptureSettings: MediaCaptureSettings;
    videoDeviceController: Object;
    cameraStreamState: Number;
    thermalStatus: MediaCaptureThermalStatus;
    frameSources: Object;
    constructor();

    static isVideoProfileSupported(videoDeviceId: String): Boolean;


    static findAllVideoProfiles(videoDeviceId: String): Object;


    static findConcurrentProfiles(videoDeviceId: String): Object;


    static findKnownVideoProfiles(videoDeviceId: String, name: KnownVideoProfile): Object;


    getPreviewFrameAsync(callback: (error: Error, result: Object) => void): void ;
    getPreviewFrameAsync(destination: Object, callback: (error: Error, result: Object) => void): void ;

    prepareAdvancedPhotoCaptureAsync(encodingProperties: Object, callback: (error: Error, result: AdvancedPhotoCapture) => void): void ;

    removeEffectAsync(effect: Object, callback: (error: Error) => void): void ;

    pauseRecordWithResultAsync(behavior: Number, callback: (error: Error, result: MediaCapturePauseResult) => void): void ;

    stopRecordWithResultAsync(callback: (error: Error, result: MediaCaptureStopResult) => void): void ;

    createFrameReaderAsync(inputSource: Object, callback: (error: Error, result: Object) => void): void ;
    createFrameReaderAsync(inputSource: Object, outputSubtype: String, callback: (error: Error, result: Object) => void): void ;
    createFrameReaderAsync(inputSource: Object, outputSubtype: String, outputSize: BitmapSize, callback: (error: Error, result: Object) => void): void ;

    createMultiSourceFrameReaderAsync(inputSources: Object, callback: (error: Error, result: Object) => void): void ;

    initializeAsync(callback: (error: Error) => void): void ;
    initializeAsync(mediaCaptureInitializationSettings: MediaCaptureInitializationSettings, callback: (error: Error) => void): void ;

    startRecordToStorageFileAsync(encodingProfile: Object, file: Object, callback: (error: Error) => void): void ;

    startRecordToStreamAsync(encodingProfile: Object, stream: Object, callback: (error: Error) => void): void ;

    startRecordToCustomSinkAsync(encodingProfile: Object, customMediaSink: Object, callback: (error: Error) => void): void ;
    startRecordToCustomSinkAsync(encodingProfile: Object, customSinkActivationId: String, customSinkSettings: Object, callback: (error: Error) => void): void ;

    stopRecordAsync(callback: (error: Error) => void): void ;

    capturePhotoToStorageFileAsync(type: Object, file: Object, callback: (error: Error) => void): void ;

    capturePhotoToStreamAsync(type: Object, stream: Object, callback: (error: Error) => void): void ;

    addEffectAsync(mediaStreamType: MediaStreamType, effectActivationID: String, effectSettings: Object, callback: (error: Error) => void): void ;

    clearEffectsAsync(mediaStreamType: MediaStreamType, callback: (error: Error) => void): void ;

    startPreviewAsync(callback: (error: Error) => void): void ;

    startPreviewToCustomSinkAsync(encodingProfile: Object, customMediaSink: Object, callback: (error: Error) => void): void ;
    startPreviewToCustomSinkAsync(encodingProfile: Object, customSinkActivationId: String, customSinkSettings: Object, callback: (error: Error) => void): void ;

    stopPreviewAsync(callback: (error: Error) => void): void ;

    prepareLowLagRecordToStorageFileAsync(encodingProfile: Object, file: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;

    prepareLowLagRecordToStreamAsync(encodingProfile: Object, stream: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;

    prepareLowLagRecordToCustomSinkAsync(encodingProfile: Object, customMediaSink: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;
    prepareLowLagRecordToCustomSinkAsync(encodingProfile: Object, customSinkActivationId: String, customSinkSettings: Object, callback: (error: Error, result: LowLagMediaRecording) => void): void ;

    prepareLowLagPhotoCaptureAsync(type: Object, callback: (error: Error, result: LowLagPhotoCapture) => void): void ;

    prepareLowLagPhotoSequenceCaptureAsync(type: Object, callback: (error: Error, result: LowLagPhotoSequenceCapture) => void): void ;

    setEncodingPropertiesAsync(mediaStreamType: MediaStreamType, mediaEncodingProperties: Object, encoderProperties: Object, callback: (error: Error) => void): void ;

    prepareVariablePhotoSequenceCaptureAsync(type: Object, callback: (error: Error, result: Object) => void): void ;

    addAudioEffectAsync(definition: Object, callback: (error: Error, result: Object) => void): void ;

    addVideoEffectAsync(definition: Object, mediaStreamType: MediaStreamType, callback: (error: Error, result: Object) => void): void ;

    pauseRecordAsync(behavior: Number, callback: (error: Error) => void): void ;

    resumeRecordAsync(callback: (error: Error) => void): void ;

    setEncoderProperty(mediaStreamType: MediaStreamType, propertyId: String, propertyValue: Object): void;

    getEncoderProperty(mediaStreamType: MediaStreamType, propertyId: String): Object;

    setPreviewMirroring(value: Boolean): void;

    getPreviewMirroring(): Boolean;

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
    frameRate: Number;
    height: Number;
    isHdrVideoSupported: Boolean;
    isVariablePhotoSequenceSupported: Boolean;
    width: Number;
    properties: Object;
    subtype: String;
    constructor();

  }

  export class MediaCaptureVideoProfile {
    id: String;
    supportedPhotoMediaDescription: Object;
    supportedPreviewMediaDescription: Object;
    supportedRecordMediaDescription: Object;
    videoDeviceId: String;
    frameSourceInfos: Object;
    properties: Object;
    constructor();

    getConcurrency(): Object;

  }

  export class MediaCaptureInitializationSettings {
    videoDeviceId: String;
    streamingCaptureMode: StreamingCaptureMode;
    photoCaptureSource: PhotoCaptureSource;
    audioDeviceId: String;
    mediaCategory: MediaCategory;
    audioProcessing: Number;
    videoSource: Object;
    audioSource: Object;
    videoProfile: MediaCaptureVideoProfile;
    recordMediaDescription: MediaCaptureVideoProfileMediaDescription;
    previewMediaDescription: MediaCaptureVideoProfileMediaDescription;
    photoMediaDescription: MediaCaptureVideoProfileMediaDescription;
    sourceGroup: Object;
    sharingMode: MediaCaptureSharingMode;
    memoryPreference: MediaCaptureMemoryPreference;
    alwaysPlaySystemShutterSound: Boolean;
    constructor();

  }

  export class MediaCaptureSettings {
    audioDeviceId: String;
    photoCaptureSource: PhotoCaptureSource;
    streamingCaptureMode: StreamingCaptureMode;
    videoDeviceCharacteristic: VideoDeviceCharacteristic;
    videoDeviceId: String;
    audioProcessing: Number;
    cameraSoundRequiredForRegion: Boolean;
    concurrentRecordAndPhotoSequenceSupported: Boolean;
    concurrentRecordAndPhotoSupported: Boolean;
    horizontal35mmEquivalentFocalLength: Number;
    mediaCategory: MediaCategory;
    pitchOffsetDegrees: Number;
    vertical35mmEquivalentFocalLength: Number;
    direct3D11Device: Object;
    constructor();

  }

  export class LowLagMediaRecording {
    constructor();

    startAsync(callback: (error: Error) => void): void ;

    stopAsync(callback: (error: Error) => void): void ;

    finishAsync(callback: (error: Error) => void): void ;

    pauseAsync(behavior: Number, callback: (error: Error) => void): void ;

    resumeAsync(callback: (error: Error) => void): void ;

    pauseWithResultAsync(behavior: Number, callback: (error: Error, result: MediaCapturePauseResult) => void): void ;

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
    focusState: Number;
    constructor();

  }

  export class PhotoConfirmationCapturedEventArgs {
    captureTimeOffset: Number;
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
    recordDuration: Number;
    constructor();

    close(): void;
  }

  export class MediaCaptureStopResult {
    lastFrame: Object;
    recordDuration: Number;
    constructor();

    close(): void;
  }

  export class MediaCaptureDeviceExclusiveControlStatusChangedEventArgs {
    deviceId: String;
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
    mode: Number;
    frameBoundsRelativeToReferencePhoto: Object;
    constructor();

  }

  export class OptionalReferencePhotoCapturedEventArgs {
    context: Object;
    frame: CapturedFrame;
    constructor();

  }

  export class CapturedFrame {
    height: Number;
    width: Number;
    bitmapProperties: Object;
    controlValues: CapturedFrameControlValues;
    softwareBitmap: Object;
    contentType: String;
    size: Number;
    canRead: Boolean;
    canWrite: Boolean;
    position: Number;
    constructor();

    readAsync(buffer: Object, count: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    writeAsync(buffer: Object, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    getInputStreamAt(position: Number): Object;

    getOutputStreamAt(position: Number): Object;

    seek(position: Number): void;

    cloneStream(): Object;

    close(): void;
  }

  export class PhotoCapturedEventArgs {
    captureTimeOffset: Number;
    frame: CapturedFrame;
    thumbnail: CapturedFrame;
    constructor();

  }

  export class CapturedFrameControlValues {
    exposure: Number;
    exposureCompensation: Number;
    flashPowerPercent: Number;
    flashed: Boolean;
    focus: Number;
    isoSpeed: Number;
    sceneMode: Number;
    whiteBalance: Number;
    zoomFactor: Number;
    focusState: Number;
    isoAnalogGain: Number;
    isoDigitalGain: Number;
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
    systemAudioGain: Number;
    selectedCameraId: String;
    microphoneGain: Number;
    isMicrophoneCaptureEnabledByDefault: Boolean;
    isEchoCancellationEnabled: Boolean;
    isCursorImageCaptureEnabled: Boolean;
    isCameraCaptureEnabledByDefault: Boolean;
    isAudioCaptureEnabled: Boolean;
    cameraOverlaySize: AppBroadcastCameraOverlaySize;
    cameraOverlayLocation: AppBroadcastCameraOverlayLocation;
    hasHardwareEncoder: Boolean;
    isBroadcastEnabled: Boolean;
    isDisabledByPolicy: Boolean;
    isGpuConstrained: Boolean;
    constructor();

  }

  export class AppBroadcastProviderSettings {
    videoEncodingResolutionMode: AppBroadcastVideoEncodingResolutionMode;
    videoEncodingBitrateMode: AppBroadcastVideoEncodingBitrateMode;
    defaultBroadcastTitle: String;
    customVideoEncodingWidth: Number;
    customVideoEncodingHeight: Number;
    customVideoEncodingBitrate: Number;
    audioEncodingBitrate: Number;
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
    userName: String;
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
    audioBitrate: Number;
    audioChannels: Number;
    audioSampleRate: Number;
    videoBitrate: Number;
    videoHeight: Number;
    videoWidth: Number;
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
    desiredVideoEncodingBitrate: Number;
    bandwidthTestBitrate: Number;
    audioCodec: String;
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
    viewerCount: Number;
    streamInfo: AppBroadcastBackgroundServiceStreamInfo;
    signInInfo: AppBroadcastBackgroundServiceSignInInfo;
    plugInState: AppBroadcastPlugInState;
    broadcastTitle: String;
    appId: String;
    titleId: String;
    broadcastLanguage: String;
    broadcastChannel: String;
    constructor();

    terminateBroadcast(reason: AppBroadcastTerminationReason, providerSpecificReason: Number): void;

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
    handled: Boolean;
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
    duration: Number;
    frameId: Number;
    hasDiscontinuity: Boolean;
    isKeyFrame: Boolean;
    relativeTimestamp: Number;
    constructor();

  }

  export class AppBroadcastStreamAudioHeader {
    absoluteTimestamp: Date;
    duration: Number;
    frameId: Number;
    hasDiscontinuity: Boolean;
    relativeTimestamp: Number;
    constructor();

  }

  export class AppBroadcastTriggerDetails {
    backgroundService: AppBroadcastBackgroundService;
    constructor();

  }

  export class AppBroadcastPlugInManager {
    defaultPlugIn: AppBroadcastPlugIn;
    isBroadcastProviderAvailable: Boolean;
    plugInList: Object;
    constructor();

    static getDefault(): AppBroadcastPlugInManager;


    static getForUser(user: Object): AppBroadcastPlugInManager;


  }

  export class AppBroadcastPlugIn {
    appId: String;
    displayName: String;
    logo: Object;
    providerSettings: AppBroadcastProviderSettings;
    constructor();

  }

  export class AppBroadcastPreview {
    errorCode: Number;
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
    shouldCaptureMicrophone: Boolean;
    shouldCaptureCamera: Boolean;
    authenticationResult: Object;
    isCaptureTargetRunning: Boolean;
    microphoneCaptureError: Number;
    microphoneCaptureState: AppBroadcastMicrophoneCaptureState;
    oAuthCallbackUri: Object;
    oAuthRequestUri: Object;
    plugInState: AppBroadcastPlugInState;
    cameraCaptureError: Number;
    cameraCaptureState: AppBroadcastCameraCaptureState;
    encodedVideoSize: Object;
    streamState: AppBroadcastStreamState;
    terminationReason: AppBroadcastTerminationReason;
    terminationReasonPlugInSpecific: Number;
    viewerCount: Number;
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
    viewerCount: Number;
    constructor();

  }

  export class AppBroadcastMicrophoneCaptureStateChangedEventArgs {
    errorCode: Number;
    state: AppBroadcastMicrophoneCaptureState;
    constructor();

  }

  export class AppBroadcastCameraCaptureStateChangedEventArgs {
    errorCode: Number;
    state: AppBroadcastCameraCaptureState;
    constructor();

  }

  export class AppBroadcastPlugInStateChangedEventArgs {
    plugInState: AppBroadcastPlugInState;
    constructor();

  }

  export class AppBroadcastPreviewStateChangedEventArgs {
    errorCode: Number;
    previewState: AppBroadcastPreviewState;
    constructor();

  }

  export class AppBroadcastPreviewStreamReader {
    videoBitmapAlphaMode: Number;
    videoBitmapPixelFormat: Number;
    videoHeight: Number;
    videoStride: Number;
    videoWidth: Number;
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
    duration: Number;
    frameId: Number;
    relativeTimestamp: Number;
    constructor();

  }

  export class AppBroadcastServices {
    captureTargetType: AppBroadcastCaptureTargetType;
    broadcastTitle: String;
    broadcastLanguage: String;
    canCapture: Boolean;
    state: AppBroadcastState;
    userName: String;
    constructor();

    enterBroadcastModeAsync(plugIn: AppBroadcastPlugIn, callback: (error: Error, result: Number) => void): void ;

    exitBroadcastMode(reason: AppBroadcastExitBroadcastModeReason): void;

    startBroadcast(): void;

    pauseBroadcast(): void;

    resumeBroadcast(): void;

    startPreview(desiredSize: Object): AppBroadcastPreview;

  }

  export class AppCaptureSettings {
    isHistoricalCaptureOnWirelessDisplayAllowed: Boolean;
    videoEncodingBitrateMode: AppCaptureVideoEncodingBitrateMode;
    isHistoricalCaptureOnBatteryAllowed: Boolean;
    isAudioCaptureEnabled: Boolean;
    isAppCaptureEnabled: Boolean;
    appCaptureDestinationFolder: Object;
    historicalBufferLength: Number;
    isHistoricalCaptureEnabled: Boolean;
    customVideoEncodingWidth: Number;
    customVideoEncodingHeight: Number;
    customVideoEncodingBitrate: Number;
    audioEncodingBitrate: Number;
    historicalBufferLengthUnit: AppCaptureHistoricalBufferLengthUnit;
    videoEncodingResolutionMode: AppCaptureVideoEncodingResolutionMode;
    screenshotDestinationFolder: Object;
    maximumRecordLength: Number;
    hasHardwareEncoder: Boolean;
    isCpuConstrained: Boolean;
    isMemoryConstrained: Boolean;
    isDisabledByPolicy: Boolean;
    alternateShortcutKeys: AppCaptureAlternateShortcutKeys;
    isGpuConstrained: Boolean;
    isMicrophoneCaptureEnabled: Boolean;
    videoEncodingFrameRateMode: AppCaptureVideoEncodingFrameRateMode;
    systemAudioGain: Number;
    microphoneGain: Number;
    isMicrophoneCaptureEnabledByDefault: Boolean;
    isEchoCancellationEnabled: Boolean;
    isCursorImageCaptureEnabled: Boolean;
    constructor();

  }

  export class AppCaptureAlternateShortcutKeys {
    toggleRecordingKeyModifiers: Number;
    toggleRecordingKey: Number;
    toggleRecordingIndicatorKeyModifiers: Number;
    toggleRecordingIndicatorKey: Number;
    toggleGameBarKeyModifiers: Number;
    toggleGameBarKey: Number;
    takeScreenshotKeyModifiers: Number;
    takeScreenshotKey: Number;
    saveHistoricalVideoKeyModifiers: Number;
    saveHistoricalVideoKey: Number;
    toggleMicrophoneCaptureKeyModifiers: Number;
    toggleMicrophoneCaptureKey: Number;
    toggleCameraCaptureKeyModifiers: Number;
    toggleCameraCaptureKey: Number;
    toggleBroadcastKeyModifiers: Number;
    toggleBroadcastKey: Number;
    constructor();

  }

  export class AppCaptureManager {
    constructor();

    static getCurrentSettings(): AppCaptureSettings;


    static applySettings(appCaptureSettings: AppCaptureSettings): void;


  }

  export class AppCaptureRecordOperation {
    duration: Number;
    errorCode: Number;
    file: Object;
    isFileTruncated: Boolean;
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
    shouldCaptureMicrophone: Boolean;
    isHistoricalCaptureEnabled: Boolean;
    isTargetRunning: Boolean;
    microphoneCaptureError: Number;
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
    errorCode: Number;
    state: AppCaptureMicrophoneCaptureState;
    constructor();

  }

  export class AppCaptureRecordingStateChangedEventArgs {
    errorCode: Number;
    state: AppCaptureRecordingState;
    constructor();

  }

  export class AppCaptureDurationGeneratedEventArgs {
    duration: Number;
    constructor();

  }

  export class AppCaptureFileGeneratedEventArgs {
    file: Object;
    constructor();

  }

  export class AppCaptureServices {
    canCapture: Boolean;
    state: AppCaptureState;
    constructor();

    record(): AppCaptureRecordOperation;

    recordTimeSpan(startTime: Date, duration: Number): AppCaptureRecordOperation;

  }

  export class AppCaptureMetadataWriter {
    remainingStorageBytesAvailable: Number;
    constructor();

    addStringEvent(name: String, value: String, priority: AppCaptureMetadataPriority): void;

    addInt32Event(name: String, value: Number, priority: AppCaptureMetadataPriority): void;

    addDoubleEvent(name: String, value: Number, priority: AppCaptureMetadataPriority): void;

    startStringState(name: String, value: String, priority: AppCaptureMetadataPriority): void;

    startInt32State(name: String, value: Number, priority: AppCaptureMetadataPriority): void;

    startDoubleState(name: String, value: Number, priority: AppCaptureMetadataPriority): void;

    stopState(name: String): void;

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
    sessionId: String;
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
    appId: String;
    displayMode: GameBarServicesDisplayMode;
    displayName: String;
    titleId: String;
    constructor();

  }

  export class GameBarServicesCommandEventArgs {
    command: GameBarCommand;
    origin: GameBarCommandOrigin;
    constructor();

  }

  export class ScreenCapture {
    audioSource: Object;
    isAudioSuspended: Boolean;
    isVideoSuspended: Boolean;
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
    isAudioSuspended: Boolean;
    isVideoSuspended: Boolean;
    constructor();

  }

export * as core from "./media.capture.core.js";
export * as frames from "./media.capture.frames.js";