  export class Point {
    constructor();
  }

  export class DisplayAdapterId {
    lowPart: Number;
    highPart: Number;
    constructor();
  }

  export class SizeInt32 {
    width: Number;
    height: Number;
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
    deviceId: String;
    displayAdapterDeviceId: String;
    displayAdapterId: DisplayAdapterId;
    displayAdapterTargetId: Number;
    displayName: String;
    greenPrimary: Object;
    maxAverageFullFrameLuminanceInNits: Number;
    maxLuminanceInNits: Number;
    minLuminanceInNits: Number;
    nativeResolutionInRawPixels: SizeInt32;
    physicalConnector: DisplayMonitorPhysicalConnectorKind;
    physicalSizeInInches: Object;
    rawDpiX: Number;
    rawDpiY: Number;
    redPrimary: Object;
    usageKind: DisplayMonitorUsageKind;
    whitePoint: Object;
    constructor();

    static fromIdAsync(deviceId: String, callback: (error: Error, result: DisplayMonitor) => void): void ;


    static fromInterfaceIdAsync(deviceInterfaceId: String, callback: (error: Error, result: DisplayMonitor) => void): void ;


    static getDeviceSelector(): String;


    getDescriptor(descriptorKind: DisplayMonitorDescriptorKind): Array<Number>;

  }

