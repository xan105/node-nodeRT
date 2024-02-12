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

  export class Size {
    constructor();
  }

  export class IPerceptionFrameProvider {
    available: Boolean;
    frameProviderInfo: PerceptionFrameProviderInfo;
    properties: Object;
    constructor();

    start(): void;

    stop(): void;

    setProperty(value: PerceptionPropertyChangeRequest): void;

  }

  export class IPerceptionFrameProviderManager {
    constructor();

    getFrameProvider(frameProviderInfo: PerceptionFrameProviderInfo): IPerceptionFrameProvider;

  }

  export class KnownPerceptionFrameKind {
    static color: String;
    static depth: String;
    static infrared: String;
    constructor();

  }

  export class PerceptionControlGroup {
    frameProviderIds: Object;
    constructor();
    constructor(ids: Object);

  }

  export class PerceptionCorrelation {
    orientation: Quaternion;
    position: Vector3;
    targetId: String;
    constructor();
    constructor(targetId: String, position: Vector3, orientation: Quaternion);

  }

  export class PerceptionCorrelationGroup {
    relativeLocations: Object;
    constructor();
    constructor(relativeLocations: Object);

  }

  export class PerceptionFaceAuthenticationGroup {
    frameProviderIds: Object;
    constructor();
    constructor(ids: Object, startHandler: Object, stopHandler: Object);

  }

  export class PerceptionFrame {
    relativeTime: Number;
    frameData: Object;
    properties: Object;
    constructor();

  }

  export class PerceptionFrameProviderInfo {
    id: String;
    hidden: Boolean;
    frameKind: String;
    displayName: String;
    deviceKind: String;
    constructor();

  }

  export class PerceptionFrameProviderManagerService {
    constructor();

    static registerFrameProviderInfo(manager: IPerceptionFrameProviderManager, frameProviderInfo: PerceptionFrameProviderInfo): void;


    static unregisterFrameProviderInfo(manager: IPerceptionFrameProviderManager, frameProviderInfo: PerceptionFrameProviderInfo): void;


    static registerFaceAuthenticationGroup(manager: IPerceptionFrameProviderManager, faceAuthenticationGroup: PerceptionFaceAuthenticationGroup): void;


    static unregisterFaceAuthenticationGroup(manager: IPerceptionFrameProviderManager, faceAuthenticationGroup: PerceptionFaceAuthenticationGroup): void;


    static registerControlGroup(manager: IPerceptionFrameProviderManager, controlGroup: PerceptionControlGroup): void;


    static unregisterControlGroup(manager: IPerceptionFrameProviderManager, controlGroup: PerceptionControlGroup): void;


    static registerCorrelationGroup(manager: IPerceptionFrameProviderManager, correlationGroup: PerceptionCorrelationGroup): void;


    static unregisterCorrelationGroup(manager: IPerceptionFrameProviderManager, correlationGroup: PerceptionCorrelationGroup): void;


    static updateAvailabilityForProvider(provider: IPerceptionFrameProvider, available: Boolean): void;


    static publishFrameForProvider(provider: IPerceptionFrameProvider, frame: PerceptionFrame): void;


  }

  export class PerceptionPropertyChangeRequest {
    status: Number;
    name: String;
    value: Object;
    constructor();

    getDeferral(): Object;

  }

  export class PerceptionVideoFrameAllocator {
    constructor();
    constructor(maxOutstandingFrameCountForWrite: Number, format: Number, resolution: Object, alpha: Number);

    allocateFrame(): PerceptionFrame;

    copyFromVideoFrame(frame: Object): PerceptionFrame;

    close(): void;
  }

