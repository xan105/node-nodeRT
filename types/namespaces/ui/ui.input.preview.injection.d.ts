  export class GamepadReading {
    timestamp: Number;
    buttons: Number;
    leftTrigger: Number;
    rightTrigger: Number;
    leftThumbstickX: Number;
    leftThumbstickY: Number;
    rightThumbstickX: Number;
    rightThumbstickY: Number;
    constructor();
  }

  export class InjectedInputRectangle {
    left: Number;
    top: Number;
    bottom: Number;
    right: Number;
    constructor();
  }

  export class InjectedInputPoint {
    positionX: Number;
    positionY: Number;
    constructor();
  }

  export class InjectedInputPointerInfo {
    pointerId: Number;
    pointerOptions: InjectedInputPointerOptions;
    pixelLocation: InjectedInputPoint;
    timeOffsetInMilliseconds: Number;
    performanceCount: Number;
    constructor();
  }

  export enum InjectedInputTouchParameters {
    none,
    contact,
    orientation,
    pressure,
  }

  export enum InjectedInputPointerOptions {
    none,
    new,
    inRange,
    inContact,
    firstButton,
    secondButton,
    primary,
    confidence,
    canceled,
    pointerDown,
    update,
    pointerUp,
    captureChanged,
  }

  export enum InjectedInputButtonChangeKind {
    none,
    firstButtonDown,
    firstButtonUp,
    secondButtonDown,
    secondButtonUp,
    thirdButtonDown,
    thirdButtonUp,
    fourthButtonDown,
    fourthButtonUp,
    fifthButtonDown,
    fifthButtonUp,
  }

  export enum InjectedInputPenButtons {
    none,
    barrel,
    inverted,
    eraser,
  }

  export enum InjectedInputPenParameters {
    none,
    pressure,
    rotation,
    tiltX,
    tiltY,
  }

  export enum InjectedInputMouseOptions {
    none,
    move,
    leftDown,
    leftUp,
    rightDown,
    rightUp,
    middleDown,
    middleUp,
    xDown,
    xUp,
    wheel,
    hWheel,
    moveNoCoalesce,
    virtualDesk,
    absolute,
  }

  export enum InjectedInputKeyOptions {
    none,
    extendedKey,
    keyUp,
    scanCode,
    unicode,
  }

  export enum InjectedInputShortcut {
    back,
    start,
    search,
  }

  export enum InjectedInputVisualizationMode {
    none,
    default,
    indirect,
  }

  export class InjectedInputGamepadInfo {
    rightTrigger: Number;
    rightThumbstickY: Number;
    rightThumbstickX: Number;
    leftTrigger: Number;
    leftThumbstickY: Number;
    leftThumbstickX: Number;
    buttons: Number;
    constructor();
    constructor(reading: GamepadReading);

  }

  export class InjectedInputKeyboardInfo {
    virtualKey: Number;
    scanCode: Number;
    keyOptions: InjectedInputKeyOptions;
    constructor();

  }

  export class InjectedInputMouseInfo {
    timeOffsetInMilliseconds: Number;
    mouseOptions: InjectedInputMouseOptions;
    mouseData: Number;
    deltaY: Number;
    deltaX: Number;
    constructor();

  }

  export class InjectedInputTouchInfo {
    touchParameters: InjectedInputTouchParameters;
    pressure: Number;
    pointerInfo: InjectedInputPointerInfo;
    orientation: Number;
    contact: InjectedInputRectangle;
    constructor();

  }

  export class InjectedInputPenInfo {
    tiltY: Number;
    tiltX: Number;
    rotation: Number;
    pressure: Number;
    pointerInfo: InjectedInputPointerInfo;
    penParameters: InjectedInputPenParameters;
    penButtons: InjectedInputPenButtons;
    constructor();

  }

  export class InputInjector {
    constructor();

    static tryCreateForAppBroadcastOnly(): InputInjector;


    static tryCreate(): InputInjector;


    injectKeyboardInput(input: Object): void;

    injectMouseInput(input: Object): void;

    initializeTouchInjection(visualMode: InjectedInputVisualizationMode): void;

    injectTouchInput(input: Object): void;

    uninitializeTouchInjection(): void;

    initializePenInjection(visualMode: InjectedInputVisualizationMode): void;

    injectPenInput(input: InjectedInputPenInfo): void;

    uninitializePenInjection(): void;

    injectShortcut(shortcut: InjectedInputShortcut): void;

    initializeGamepadInjection(): void;

    injectGamepadInput(input: InjectedInputGamepadInfo): void;

    uninitializeGamepadInjection(): void;

  }

