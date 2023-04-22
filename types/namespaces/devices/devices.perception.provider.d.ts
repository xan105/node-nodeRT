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

  export class Size {
    constructor();
  }

  export class IPerceptionFrameProviderManager {
    constructor();

    getFrameProvider(frameProviderInfo: PerceptionFrameProviderInfo): IPerceptionFrameProvider;

  }

  export class PerceptionFrameProviderInfo {
    id: string;
    hidden: boolean;
    frameKind: string;
    displayName: string;
    deviceKind: string;
    constructor();

  }

  export class IPerceptionFrameProvider {
    available: boolean;
    frameProviderInfo: PerceptionFrameProviderInfo;
    properties: Object;
    constructor();

    start(): void;

    stop(): void;

    setProperty(value: PerceptionPropertyChangeRequest): void;

  }

  export class PerceptionPropertyChangeRequest {
    status: number;
    name: string;
    value: Object;
    constructor();

    getDeferral(): Object;

  }

  export class PerceptionFaceAuthenticationGroup {
    frameProviderIds: Object;
    constructor();
    constructor(ids: Object, startHandler: Object, stopHandler: Object);

  }

  export class PerceptionControlGroup {
    frameProviderIds: Object;
    constructor();
    constructor(ids: Object);

  }

  export class PerceptionCorrelationGroup {
    relativeLocations: Object;
    constructor();
    constructor(relativeLocations: Object);

  }

  export class PerceptionFrame {
    relativeTime: number;
    frameData: Object;
    properties: Object;
    constructor();

  }

  export class PerceptionCorrelation {
    orientation: Quaternion;
    position: Vector3;
    targetId: string;
    constructor();
    constructor(targetId: string, position: Vector3, orientation: Quaternion);

  }

  export class PerceptionVideoFrameAllocator {
    constructor();
    constructor(maxOutstandingFrameCountForWrite: number, format: number, resolution: Object, alpha: number);

    allocateFrame(): PerceptionFrame;

    copyFromVideoFrame(frame: Object): PerceptionFrame;

    close(): void;
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


    static updateAvailabilityForProvider(provider: IPerceptionFrameProvider, available: boolean): void;


    static publishFrameForProvider(provider: IPerceptionFrameProvider, frame: PerceptionFrame): void;


  }

  export class KnownPerceptionFrameKind {
    static color: string;
    static depth: string;
    static infrared: string;
    constructor();

  }

