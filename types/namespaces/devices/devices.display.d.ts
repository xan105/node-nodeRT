  export class Point {
    constructor();
  }

  export class DisplayAdapterId {
    lowPart: number;
    highPart: number;
    constructor();
  }

  export class SizeInt32 {
    width: number;
    height: number;
    constructor();
  }

  export class Size {
    constructor();
  }

  export enum DisplayMonitorConnectionKind {
    internal,
    wired,
    wireless,
    virtual,
  }

  export enum DisplayMonitorPhysicalConnectorKind {
    unknown,
    hD15,
    analogTV,
    dvi,
    hdmi,
    lvds,
    sdi,
    displayPort,
  }

  export enum DisplayMonitorDescriptorKind {
    edid,
    displayId,
  }

  export enum DisplayMonitorUsageKind {
    standard,
    headMounted,
    specialPurpose,
  }

  export class DisplayMonitor {
    bluePrimary: Object;
    connectionKind: DisplayMonitorConnectionKind;
    deviceId: string;
    displayAdapterDeviceId: string;
    displayAdapterId: DisplayAdapterId;
    displayAdapterTargetId: number;
    displayName: string;
    greenPrimary: Object;
    maxAverageFullFrameLuminanceInNits: number;
    maxLuminanceInNits: number;
    minLuminanceInNits: number;
    nativeResolutionInRawPixels: SizeInt32;
    physicalConnector: DisplayMonitorPhysicalConnectorKind;
    physicalSizeInInches: Object;
    rawDpiX: number;
    rawDpiY: number;
    redPrimary: Object;
    usageKind: DisplayMonitorUsageKind;
    whitePoint: Object;
    constructor();

    static fromIdAsync(deviceId: string, callback: (error: Error, result: DisplayMonitor) => void): void ;


    static fromInterfaceIdAsync(deviceInterfaceId: string, callback: (error: Error, result: DisplayMonitor) => void): void ;


    static getDeviceSelector(): string;


    getDescriptor(descriptorKind: DisplayMonitorDescriptorKind): Array<number>;

  }

