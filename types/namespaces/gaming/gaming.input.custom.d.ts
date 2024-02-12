  export class GameControllerVersionInfo {
    major: Number;
    minor: Number;
    build: Number;
    revision: Number;
    constructor();
  }

  export class GipFirmwareUpdateProgress {
    percentCompleted: Number;
    currentComponentId: Number;
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

  export enum XusbDeviceType {
    unknown,
    gamepad,
  }

  export class GameControllerFactoryManager {
    constructor();

    static tryGetFactoryControllerFromGameController(factory: ICustomGameControllerFactory, gameController: Object): Object;


    static registerCustomFactoryForGipInterface(factory: ICustomGameControllerFactory, interfaceId: String): void;


    static registerCustomFactoryForHardwareId(factory: ICustomGameControllerFactory, hardwareVendorId: Number, hardwareProductId: Number): void;


    static registerCustomFactoryForXusbType(factory: ICustomGameControllerFactory, xusbType: XusbDeviceType, xusbSubtype: XusbDeviceSubtype): void;


  }

  export class GipFirmwareUpdateResult {
    extendedErrorCode: Number;
    finalComponentId: Number;
    status: GipFirmwareUpdateStatus;
    constructor();

  }

  export class GipGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: Number;
    hardwareVendorId: Number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: Boolean;
    constructor();

    updateFirmwareAsync(firmwareImage: Object, callback: (error: Error, result: GipFirmwareUpdateResult) => void): void ;

    sendMessage(messageClass: GipMessageClass, messageId: Number, messageBuffer: Array<Number>): void;

    sendReceiveMessage();
  }

  export class HidGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: Number;
    hardwareVendorId: Number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: Boolean;
    usageId: Number;
    usagePage: Number;
    constructor();

    getFeatureReport();
    sendFeatureReport(reportId: Number, reportBuffer: Array<Number>): void;

    sendOutputReport(reportId: Number, reportBuffer: Array<Number>): void;

  }

  export class ICustomGameControllerFactory {
    constructor();

    createGameController(provider: IGameControllerProvider): Object;

    onGameControllerAdded(value: Object): void;

    onGameControllerRemoved(value: Object): void;

  }

  export class IGameControllerInputSink {
    constructor();

    onInputResumed(timestamp: Number): void;

    onInputSuspended(timestamp: Number): void;

  }

  export class IGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: Number;
    hardwareVendorId: Number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: Boolean;
    constructor();

  }

  export class IGipGameControllerInputSink {
    constructor();

    onKeyReceived(timestamp: Number, keyCode: Number, isPressed: Boolean): void;

    onMessageReceived(timestamp: Number, messageClass: GipMessageClass, messageId: Number, sequenceId: Number, messageBuffer: Array<Number>): void;

  }

  export class IHidGameControllerInputSink {
    constructor();

    onInputReportReceived(timestamp: Number, reportId: Number, reportBuffer: Array<Number>): void;

  }

  export class IXusbGameControllerInputSink {
    constructor();

    onInputReceived(timestamp: Number, reportId: Number, inputBuffer: Array<Number>): void;

  }

  export class XusbGameControllerProvider {
    firmwareVersionInfo: GameControllerVersionInfo;
    hardwareProductId: Number;
    hardwareVendorId: Number;
    hardwareVersionInfo: GameControllerVersionInfo;
    isConnected: Boolean;
    constructor();

    setVibration(lowFrequencyMotorSpeed: Number, highFrequencyMotorSpeed: Number): void;

  }

