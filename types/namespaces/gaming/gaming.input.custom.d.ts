  export class GameControllerVersionInfo {
    major: number;
    minor: number;
    build: number;
    revision: number;
    constructor();
  }

  export class GipFirmwareUpdateProgress {
    percentCompleted: number;
    currentComponentId: number;
    constructor();
  }

  export enum GipFirmwareUpdateStatus {
    completed,
    upToDate,
    failed,
  }

  export enum GipMessageClass {
    command,
    lowLatency,
    standardLatency,
  }

  export enum XusbDeviceType {
    unknown,
    gamepad,
  }

  export enum XusbDeviceSubtype {
    unknown,
    gamepad,
    arcadePad,
    arcadeStick,
    flightStick,
    wheel,
    guitar,
    guitarAlternate,
    guitarBass,
    drumKit,
    dancePad,
  }

  export class IGameControllerInputSink {
    constructor();

    onInputResumed(timestamp: number): void;

    onInputSuspended(timestamp: number): void;

  }

  export class IGipGameControllerInputSink {
    constructor();

    onKeyReceived(timestamp: number, keyCode: number, isPressed: boolean): void;

    onMessageReceived(timestamp: number, messageClass: GipMessageClass, messageId: number, sequenceId: number, messageBuffer: Array<number>): void;

  }

  export class IHidGameControllerInputSink {
    constructor();

    onInputReportReceived(timestamp: number, reportId: number, reportBuffer: Array<number>): void;

  }

  export class IXusbGameControllerInputSink {
    constructor();

    onInputReceived(timestamp: number, reportId: number, inputBuffer: Array<number>): void;

  }

  export class IGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: number;
    hardwareVendorId: number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: boolean;
    constructor();

  }

  export class GipFirmwareUpdateResult {
    extendedErrorCode: number;
    finalComponentId: number;
    status: GipFirmwareUpdateStatus;
    constructor();

  }

  export class ICustomGameControllerFactory {
    constructor();

    createGameController(provider: IGameControllerProvider): Object;

    onGameControllerAdded(value: Object): void;

    onGameControllerRemoved(value: Object): void;

  }

  export class GipGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: number;
    hardwareVendorId: number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: boolean;
    constructor();

    updateFirmwareAsync(firmwareImage: Object, callback: (error: Error, result: GipFirmwareUpdateResult) => void): void ;

    sendMessage(messageClass: GipMessageClass, messageId: number, messageBuffer: Array<number>): void;

    sendReceiveMessage();
  }

  export class HidGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: number;
    hardwareVendorId: number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: boolean;
    usageId: number;
    usagePage: number;
    constructor();

    getFeatureReport();
    sendFeatureReport(reportId: number, reportBuffer: Array<number>): void;

    sendOutputReport(reportId: number, reportBuffer: Array<number>): void;

  }

  export class XusbGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: number;
    hardwareVendorId: number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: boolean;
    constructor();

    setVibration(lowFrequencyMotorSpeed: number, highFrequencyMotorSpeed: number): void;

  }

  export class GameControllerFactoryManager {
    constructor();

    static tryGetFactoryControllerFromGameController(factory: ICustomGameControllerFactory, gameController: Object): Object;


    static registerCustomFactoryForGipInterface(factory: ICustomGameControllerFactory, interfaceId: string): void;


    static registerCustomFactoryForHardwareId(factory: ICustomGameControllerFactory, hardwareVendorId: number, hardwareProductId: number): void;


    static registerCustomFactoryForXusbType(factory: ICustomGameControllerFactory, xusbType: XusbDeviceType, xusbSubtype: XusbDeviceSubtype): void;


  }

