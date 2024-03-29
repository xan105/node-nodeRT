  export class ArcadeStickReading {
    timestamp: Number;
    buttons: ArcadeStickButtons;
    constructor();
  }

  export class FlightStickReading {
    timestamp: Number;
    buttons: FlightStickButtons;
    hatSwitch: GameControllerSwitchPosition;
    roll: Number;
    pitch: Number;
    yaw: Number;
    throttle: Number;
    constructor();
  }

  export class GamepadReading {
    timestamp: Number;
    buttons: GamepadButtons;
    leftTrigger: Number;
    rightTrigger: Number;
    leftThumbstickX: Number;
    leftThumbstickY: Number;
    rightThumbstickX: Number;
    rightThumbstickY: Number;
    constructor();
  }

  export class GamepadVibration {
    leftMotor: Number;
    rightMotor: Number;
    leftTrigger: Number;
    rightTrigger: Number;
    constructor();
  }

  export class GamingInputPreviewContract {
    constructor();
  }

  export class RacingWheelReading {
    timestamp: Number;
    buttons: RacingWheelButtons;
    patternShifterGear: Number;
    wheel: Number;
    throttle: Number;
    brake: Number;
    clutch: Number;
    handbrake: Number;
    constructor();
  }

  export class UINavigationReading {
    timestamp: Number;
    requiredButtons: RequiredUINavigationButtons;
    optionalButtons: OptionalUINavigationButtons;
    constructor();
  }

  export enum ArcadeStickButtons {
    none,
    stickUp,
    stickDown,
    stickLeft,
    stickRight,
    action1,
    action2,
    action3,
    action4,
    action5,
    action6,
    special1,
    special2,
  }

  export enum FlightStickButtons {
    none,
    firePrimary,
    fireSecondary,
  }

  export enum GameControllerButtonLabel {
    none,
    xboxBack,
    xboxStart,
    xboxMenu,
    xboxView,
    xboxUp,
    xboxDown,
    xboxLeft,
    xboxRight,
    xboxA,
    xboxB,
    xboxX,
    xboxY,
    xboxLeftBumper,
    xboxLeftTrigger,
    xboxLeftStickButton,
    xboxRightBumper,
    xboxRightTrigger,
    xboxRightStickButton,
    xboxPaddle1,
    xboxPaddle2,
    xboxPaddle3,
    xboxPaddle4,
    mode,
    select,
    menu,
    view,
    back,
    start,
    options,
    share,
    up,
    down,
    left,
    right,
    letterA,
    letterB,
    letterC,
    letterL,
    letterR,
    letterX,
    letterY,
    letterZ,
    cross,
    circle,
    square,
    triangle,
    leftBumper,
    leftTrigger,
    leftStickButton,
    left1,
    left2,
    left3,
    rightBumper,
    rightTrigger,
    rightStickButton,
    right1,
    right2,
    right3,
    paddle1,
    paddle2,
    paddle3,
    paddle4,
    plus,
    minus,
    downLeftArrow,
    dialLeft,
    dialRight,
    suspension,
  }

  export enum GameControllerSwitchKind {
    twoWay,
    fourWay,
    eightWay,
  }

  export enum GameControllerSwitchPosition {
    center,
    up,
    upRight,
    right,
    downRight,
    down,
    downLeft,
    left,
    upLeft,
  }

  export enum GamepadButtons {
    none,
    menu,
    view,
    a,
    b,
    x,
    y,
    dPadUp,
    dPadDown,
    dPadLeft,
    dPadRight,
    leftShoulder,
    rightShoulder,
    leftThumbstick,
    rightThumbstick,
    paddle1,
    paddle2,
    paddle3,
    paddle4,
  }

  export enum OptionalUINavigationButtons {
    none,
    context1,
    context2,
    context3,
    context4,
    pageUp,
    pageDown,
    pageLeft,
    pageRight,
    scrollUp,
    scrollDown,
    scrollLeft,
    scrollRight,
  }

  export enum RacingWheelButtons {
    none,
    previousGear,
    nextGear,
    dPadUp,
    dPadDown,
    dPadLeft,
    dPadRight,
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    button9,
    button10,
    button11,
    button12,
    button13,
    button14,
    button15,
    button16,
  }

  export enum RequiredUINavigationButtons {
    none,
    menu,
    view,
    accept,
    cancel,
    up,
    down,
    left,
    right,
  }

  export class ArcadeStick {
    static arcadeSticks: Object;
    headset: Headset;
    isWireless: Boolean;
    user: Object;
    constructor();

    static fromGameController(gameController: IGameController): ArcadeStick;


    getButtonLabel(button: ArcadeStickButtons): GameControllerButtonLabel;

    getCurrentReading(): ArcadeStickReading;

    tryGetBatteryReport(): Object;

    addListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    on(type: "UserChanged", listener: (ev: Event) => void): void ;
    off(type: "UserChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ArcadeStickAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "ArcadeStickAdded", listener: (ev: Event) => void): void ;
    on(type: "ArcadeStickAdded", listener: (ev: Event) => void): void ;
    off(type: "ArcadeStickAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "ArcadeStickRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "ArcadeStickRemoved", listener: (ev: Event) => void): void ;
    on(type: "ArcadeStickRemoved", listener: (ev: Event) => void): void ;
    off(type: "ArcadeStickRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FlightStick {
    static flightSticks: Object;
    hatSwitchKind: GameControllerSwitchKind;
    headset: Headset;
    isWireless: Boolean;
    user: Object;
    constructor();

    static fromGameController(gameController: IGameController): FlightStick;


    getButtonLabel(button: FlightStickButtons): GameControllerButtonLabel;

    getCurrentReading(): FlightStickReading;

    tryGetBatteryReport(): Object;

    addListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    on(type: "UserChanged", listener: (ev: Event) => void): void ;
    off(type: "UserChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "FlightStickAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "FlightStickAdded", listener: (ev: Event) => void): void ;
    on(type: "FlightStickAdded", listener: (ev: Event) => void): void ;
    off(type: "FlightStickAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "FlightStickRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "FlightStickRemoved", listener: (ev: Event) => void): void ;
    on(type: "FlightStickRemoved", listener: (ev: Event) => void): void ;
    off(type: "FlightStickRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Gamepad {
    static gamepads: Object;
    headset: Headset;
    isWireless: Boolean;
    user: Object;
    vibration: GamepadVibration;
    constructor();

    static fromGameController(gameController: IGameController): Gamepad;


    getCurrentReading(): GamepadReading;

    getButtonLabel(button: GamepadButtons): GameControllerButtonLabel;

    tryGetBatteryReport(): Object;

    addListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    on(type: "UserChanged", listener: (ev: Event) => void): void ;
    off(type: "UserChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "GamepadAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "GamepadAdded", listener: (ev: Event) => void): void ;
    on(type: "GamepadAdded", listener: (ev: Event) => void): void ;
    off(type: "GamepadAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "GamepadRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "GamepadRemoved", listener: (ev: Event) => void): void ;
    on(type: "GamepadRemoved", listener: (ev: Event) => void): void ;
    off(type: "GamepadRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Headset {
    captureDeviceId: String;
    renderDeviceId: String;
    constructor();

    tryGetBatteryReport(): Object;

  }

  export class IGameController {
    headset: Headset;
    isWireless: Boolean;
    user: Object;
    constructor();

    addListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    on(type: "UserChanged", listener: (ev: Event) => void): void ;
    off(type: "UserChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IGameControllerBatteryInfo {
    constructor();

    tryGetBatteryReport(): Object;

  }

  export class RacingWheel {
    static racingWheels: Object;
    headset: Headset;
    isWireless: Boolean;
    user: Object;
    hasClutch: Boolean;
    hasHandbrake: Boolean;
    hasPatternShifter: Boolean;
    maxPatternShifterGear: Number;
    maxWheelAngle: Number;
    wheelMotor: Object;
    constructor();

    static fromGameController(gameController: IGameController): RacingWheel;


    getButtonLabel(button: RacingWheelButtons): GameControllerButtonLabel;

    getCurrentReading(): RacingWheelReading;

    tryGetBatteryReport(): Object;

    addListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    on(type: "UserChanged", listener: (ev: Event) => void): void ;
    off(type: "UserChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RacingWheelAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "RacingWheelAdded", listener: (ev: Event) => void): void ;
    on(type: "RacingWheelAdded", listener: (ev: Event) => void): void ;
    off(type: "RacingWheelAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "RacingWheelRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "RacingWheelRemoved", listener: (ev: Event) => void): void ;
    on(type: "RacingWheelRemoved", listener: (ev: Event) => void): void ;
    off(type: "RacingWheelRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RawGameController {
    static rawGameControllers: Object;
    headset: Headset;
    isWireless: Boolean;
    user: Object;
    axisCount: Number;
    buttonCount: Number;
    forceFeedbackMotors: Object;
    hardwareProductId: Number;
    hardwareVendorId: Number;
    switchCount: Number;
    displayName: String;
    nonRoamableId: String;
    simpleHapticsControllers: Object;
    constructor();

    static fromGameController(gameController: IGameController): RawGameController;


    getButtonLabel(buttonIndex: Number): GameControllerButtonLabel;

    getCurrentReading();
    getSwitchKind(switchIndex: Number): GameControllerSwitchKind;

    tryGetBatteryReport(): Object;

    addListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    on(type: "UserChanged", listener: (ev: Event) => void): void ;
    off(type: "UserChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "RawGameControllerAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "RawGameControllerAdded", listener: (ev: Event) => void): void ;
    on(type: "RawGameControllerAdded", listener: (ev: Event) => void): void ;
    off(type: "RawGameControllerAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "RawGameControllerRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "RawGameControllerRemoved", listener: (ev: Event) => void): void ;
    on(type: "RawGameControllerRemoved", listener: (ev: Event) => void): void ;
    off(type: "RawGameControllerRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class UINavigationController {
    static uINavigationControllers: Object;
    headset: Headset;
    isWireless: Boolean;
    user: Object;
    constructor();

    static fromGameController(gameController: IGameController): UINavigationController;


    getCurrentReading(): UINavigationReading;

    getOptionalButtonLabel(button: OptionalUINavigationButtons): GameControllerButtonLabel;

    getRequiredButtonLabel(button: RequiredUINavigationButtons): GameControllerButtonLabel;

    tryGetBatteryReport(): Object;

    addListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetConnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    removeListener(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    on(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    off(type: "HeadsetDisconnected", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "UserChanged", listener: (ev: Event) => void): void ;
    on(type: "UserChanged", listener: (ev: Event) => void): void ;
    off(type: "UserChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "UINavigationControllerAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "UINavigationControllerAdded", listener: (ev: Event) => void): void ;
    on(type: "UINavigationControllerAdded", listener: (ev: Event) => void): void ;
    off(type: "UINavigationControllerAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "UINavigationControllerRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "UINavigationControllerRemoved", listener: (ev: Event) => void): void ;
    on(type: "UINavigationControllerRemoved", listener: (ev: Event) => void): void ;
    off(type: "UINavigationControllerRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export const ArcadeStickButtons: any;
export const FlightStickButtons: any;
export const GameControllerButtonLabel: any;
export const GameControllerSwitchKind: any;
export const GameControllerSwitchPosition: any;
export const GamepadButtons: any;
export const OptionalUINavigationButtons: any;
export const RacingWheelButtons: any;
export const RequiredUINavigationButtons: any;
export const ArcadeStick: any;
export const FlightStick: any;
export const Gamepad: any;
export const Headset: any;
export const IGameController: any;
export const IGameControllerBatteryInfo: any;
export const RacingWheel: any;
export const RawGameController: any;
export const UINavigationController: any;
export * as custom from "./gaming.input.custom.js";
export * as forcefeedback from "./gaming.input.forcefeedback.js";
