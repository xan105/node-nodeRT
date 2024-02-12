  export class DisplayAdapterId {
    lowPart: Number;
    highPart: Number;
    constructor();
  }

  export class RectInt32 {
    x: Number;
    y: Number;
    width: Number;
    height: Number;
    constructor();
  }

  export class SizeInt32 {
    width: Number;
    height: Number;
    constructor();
  }

  export class Direct3DMultisampleDescription {
    count: Number;
    quality: Number;
    constructor();
  }

  export class DisplayPresentationRate {
    verticalSyncRate: Rational;
    verticalSyncsPerPresentation: Number;
    constructor();
  }

  export enum DisplayBitsPerChannel {
    none,
    bpc6,
    bpc8,
    bpc10,
    bpc12,
    bpc14,
    bpc16,
  }

  export enum DisplayDeviceCapability {
    flipOverride,
  }

  export enum DisplayManagerOptions {
    none,
    enforceSourceOwnership,
    virtualRefreshRateAware,
  }

  export enum DisplayManagerResult {
    success,
    unknownFailure,
    targetAccessDenied,
    targetStale,
    remoteSessionNotSupported,
  }

  export enum DisplayModeQueryOptions {
    none,
    onlyPreferredResolution,
  }

  export enum DisplayPathScaling {
    identity,
    centered,
    stretched,
    aspectRatioStretched,
    custom,
    driverPreferred,
  }

  export enum DisplayPathStatus {
    unknown,
    succeeded,
    pending,
    failed,
    failedAsync,
    invalidatedAsync,
  }

  export enum DisplayPresentStatus {
    success,
    sourceStatusPreventedPresent,
    scanoutInvalid,
    sourceInvalid,
    deviceInvalid,
    unknownFailure,
  }

  export enum DisplayRotation {
    none,
    clockwise90Degrees,
    clockwise180Degrees,
    clockwise270Degrees,
  }

  export enum DisplayScanoutOptions {
    none,
    allowTearing,
  }

  export enum DisplaySourceStatus {
    active,
    poweredOff,
    invalid,
    ownedByAnotherDevice,
    unowned,
  }

  export enum DisplayStateApplyOptions {
    none,
    failIfStateChanged,
    forceReapply,
    forceModeEnumeration,
  }

  export enum DisplayStateFunctionalizeOptions {
    none,
    failIfStateChanged,
    validateTopologyOnly,
  }

  export enum DisplayStateOperationStatus {
    success,
    partialFailure,
    unknownFailure,
    targetOwnershipLost,
    systemStateChanged,
    tooManyPathsForAdapter,
    modesNotSupported,
    remoteSessionNotSupported,
  }

  export enum DisplayTargetPersistence {
    none,
    bootPersisted,
    temporaryPersisted,
    pathPersisted,
  }

  export enum DisplayTaskSignalKind {
    onPresentFlipAway,
    onPresentFlipTo,
  }

  export enum DisplayWireFormatColorSpace {
    bT709,
    bT2020,
    profileDefinedWideColorGamut,
  }

  export enum DisplayWireFormatEotf {
    sdr,
    hdrSmpte2084,
  }

  export enum DisplayWireFormatHdrMetadata {
    none,
    hdr10,
    hdr10Plus,
    dolbyVisionLowLatency,
  }

  export enum DisplayWireFormatPixelEncoding {
    rgb444,
    ycc444,
    ycc422,
    ycc420,
    intensity,
  }

  export class DisplayAdapter {
    deviceInterfacePath: String;
    id: DisplayAdapterId;
    pciDeviceId: Number;
    pciRevision: Number;
    pciSubSystemId: Number;
    pciVendorId: Number;
    properties: Object;
    sourceCount: Number;
    constructor();

    static fromId(id: DisplayAdapterId): DisplayAdapter;


  }

  export class DisplayDevice {
    constructor();

    createScanoutSource(target: DisplayTarget): DisplaySource;

    createPrimary(target: DisplayTarget, desc: DisplayPrimaryDescription): DisplaySurface;

    createTaskPool(): DisplayTaskPool;

    createPeriodicFence(target: DisplayTarget, offsetFromVBlank: Number): DisplayFence;

    waitForVBlank(source: DisplaySource): void;

    createSimpleScanout(pSource: DisplaySource, pSurface: DisplaySurface, SubResourceIndex: Number, SyncInterval: Number): DisplayScanout;

    isCapabilitySupported(capability: DisplayDeviceCapability): Boolean;

    createSimpleScanoutWithDirtyRectsAndOptions(source: DisplaySource, surface: DisplaySurface, subresourceIndex: Number, syncInterval: Number, dirtyRects: Object, options: DisplayScanoutOptions): DisplayScanout;

  }

  export class DisplayFence {
    constructor();

  }

  export class DisplayManager {
    constructor();

    static create(options: DisplayManagerOptions): DisplayManager;


    getCurrentTargets(): Object;

    getCurrentAdapters(): Object;

    tryAcquireTarget(target: DisplayTarget): DisplayManagerResult;

    releaseTarget(target: DisplayTarget): void;

    tryReadCurrentStateForAllTargets(): DisplayManagerResultWithState;

    tryAcquireTargetsAndReadCurrentState(targets: Object): DisplayManagerResultWithState;

    tryAcquireTargetsAndCreateEmptyState(targets: Object): DisplayManagerResultWithState;

    tryAcquireTargetsAndCreateSubstate(existingState: DisplayState, targets: Object): DisplayManagerResultWithState;

    createDisplayDevice(adapter: DisplayAdapter): DisplayDevice;

    start(): void;

    stop(): void;

    close(): void;
    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Disabled", listener: (ev: Event) => void): void ;
    removeListener(type: "Disabled", listener: (ev: Event) => void): void ;
    on(type: "Disabled", listener: (ev: Event) => void): void ;
    off(type: "Disabled", listener: (ev: Event) => void): void ;
    
    addListener(type: "Enabled", listener: (ev: Event) => void): void ;
    removeListener(type: "Enabled", listener: (ev: Event) => void): void ;
    on(type: "Enabled", listener: (ev: Event) => void): void ;
    off(type: "Enabled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PathsFailedOrInvalidated", listener: (ev: Event) => void): void ;
    removeListener(type: "PathsFailedOrInvalidated", listener: (ev: Event) => void): void ;
    on(type: "PathsFailedOrInvalidated", listener: (ev: Event) => void): void ;
    off(type: "PathsFailedOrInvalidated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DisplayManagerChangedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class DisplayManagerDisabledEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class DisplayManagerEnabledEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class DisplayManagerPathsFailedOrInvalidatedEventArgs {
    handled: Boolean;
    constructor();

    getDeferral(): Object;

  }

  export class DisplayManagerResultWithState {
    errorCode: DisplayManagerResult;
    extendedErrorCode: Number;
    state: DisplayState;
    constructor();

  }

  export class DisplayModeInfo {
    isInterlaced: Boolean;
    isStereo: Boolean;
    presentationRate: DisplayPresentationRate;
    properties: Object;
    sourcePixelFormat: Number;
    sourceResolution: SizeInt32;
    targetResolution: SizeInt32;
    physicalPresentationRate: DisplayPresentationRate;
    constructor();

    getWireFormatSupportedBitsPerChannel(encoding: DisplayWireFormatPixelEncoding): DisplayBitsPerChannel;

    isWireFormatSupported(wireFormat: DisplayWireFormat): Boolean;

  }

  export class DisplayPath {
    wireFormat: DisplayWireFormat;
    targetResolution: SizeInt32;
    sourceResolution: SizeInt32;
    sourcePixelFormat: Number;
    scaling: DisplayPathScaling;
    rotation: DisplayRotation;
    presentationRate: DisplayPresentationRate;
    isStereo: Boolean;
    isInterlaced: Boolean;
    properties: Object;
    status: DisplayPathStatus;
    target: DisplayTarget;
    view: DisplayView;
    physicalPresentationRate: DisplayPresentationRate;
    constructor();

    findModes(flags: DisplayModeQueryOptions): Object;

    applyPropertiesFromMode(modeResult: DisplayModeInfo): void;

  }

  export class DisplayPrimaryDescription {
    colorSpace: Number;
    format: Number;
    height: Number;
    isStereo: Boolean;
    multisampleDescription: Direct3DMultisampleDescription;
    properties: Object;
    width: Number;
    constructor();
    constructor(width: Number, height: Number, pixelFormat: Number, colorSpace: Number, isStereo: Boolean, multisampleDescription: Direct3DMultisampleDescription);

    static createWithProperties(extraProperties: Object, width: Number, height: Number, pixelFormat: Number, colorSpace: Number, isStereo: Boolean, multisampleDescription: Direct3DMultisampleDescription): DisplayPrimaryDescription;


  }

  export class DisplayScanout {
    constructor();

  }

  export class DisplaySource {
    adapterId: DisplayAdapterId;
    sourceId: Number;
    status: DisplaySourceStatus;
    constructor();

    getMetadata(Key: String): Object;

    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DisplayState {
    isReadOnly: Boolean;
    isStale: Boolean;
    properties: Object;
    targets: Object;
    views: Object;
    constructor();

    connectTarget(target: DisplayTarget): DisplayPath;
    connectTarget(target: DisplayTarget, view: DisplayView): DisplayPath;

    canConnectTargetToView(target: DisplayTarget, view: DisplayView): Boolean;

    getViewForTarget(target: DisplayTarget): DisplayView;

    getPathForTarget(target: DisplayTarget): DisplayPath;

    disconnectTarget(target: DisplayTarget): void;

    tryFunctionalize(options: DisplayStateFunctionalizeOptions): DisplayStateOperationResult;

    tryApply(options: DisplayStateApplyOptions): DisplayStateOperationResult;

    clone(): DisplayState;

  }

  export class DisplayStateOperationResult {
    extendedErrorCode: Number;
    status: DisplayStateOperationStatus;
    constructor();

  }

  export class DisplaySurface {
    constructor();

  }

  export class DisplayTarget {
    adapter: DisplayAdapter;
    adapterRelativeId: Number;
    deviceInterfacePath: String;
    isConnected: Boolean;
    isStale: Boolean;
    isVirtualModeEnabled: Boolean;
    isVirtualTopologyEnabled: Boolean;
    monitorPersistence: DisplayTargetPersistence;
    properties: Object;
    stableMonitorId: String;
    usageKind: Number;
    constructor();

    tryGetMonitor(): Object;

    isSame(otherTarget: DisplayTarget): Boolean;

    isEqual(otherTarget: DisplayTarget): Boolean;

  }

  export class DisplayTask {
    constructor();

    setScanout(scanout: DisplayScanout): void;

    setWait(readyFence: DisplayFence, readyFenceValue: Number): void;

    setSignal(signalKind: DisplayTaskSignalKind, fence: DisplayFence): void;

  }

  export class DisplayTaskPool {
    constructor();

    createTask(): DisplayTask;

    executeTask(task: DisplayTask): void;

    tryExecuteTask(task: DisplayTask): DisplayTaskResult;

  }

  export class DisplayTaskResult {
    presentId: Number;
    presentStatus: DisplayPresentStatus;
    sourceStatus: DisplaySourceStatus;
    constructor();

  }

  export class DisplayView {
    contentResolution: SizeInt32;
    paths: Object;
    properties: Object;
    constructor();

    setPrimaryPath(path: DisplayPath): void;

  }

  export class DisplayWireFormat {
    bitsPerChannel: Number;
    colorSpace: DisplayWireFormatColorSpace;
    eotf: DisplayWireFormatEotf;
    hdrMetadata: DisplayWireFormatHdrMetadata;
    pixelEncoding: DisplayWireFormatPixelEncoding;
    properties: Object;
    constructor();
    constructor(pixelEncoding: DisplayWireFormatPixelEncoding, bitsPerChannel: Number, colorSpace: DisplayWireFormatColorSpace, eotf: DisplayWireFormatEotf, hdrMetadata: DisplayWireFormatHdrMetadata);

    static createWithProperties(extraProperties: Object, pixelEncoding: DisplayWireFormatPixelEncoding, bitsPerChannel: Number, colorSpace: DisplayWireFormatColorSpace, eotf: DisplayWireFormatEotf, hdrMetadata: DisplayWireFormatHdrMetadata): DisplayWireFormat;


  }

