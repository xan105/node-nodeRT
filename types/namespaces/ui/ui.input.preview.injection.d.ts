  export class GamepadReading {
    timestamp: number;
    buttons: number;
    leftTrigger: number;
    rightTrigger: number;
    leftThumbstickX: number;
    leftThumbstickY: number;
    rightThumbstickX: number;
    rightThumbstickY: number;
    constructor();
  }

  export class InjectedInputRectangle {
    left: number;
    top: number;
    bottom: number;
    right: number;
    constructor();
  }

  export class InjectedInputPoint {
    positionX: number;
    positionY: number;
    constructor();
  }

  export class InjectedInputPointerInfo {
    pointerId: number;
    pointerOptions: InjectedInputPointerOptions;
    pixelLocation: InjectedInputPoint;
    timeOffsetInMilliseconds: number;
    performanceCount: number;
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
    rightTrigger: number;
    rightThumbstickY: number;
    rightThumbstickX: number;
    leftTrigger: number;
    leftThumbstickY: number;
    leftThumbstickX: number;
    buttons: number;
    constructor();
    constructor(reading: GamepadReading);

  }

  export class InjectedInputKeyboardInfo {
    virtualKey: number;
    scanCode: number;
    keyOptions: InjectedInputKeyOptions;
    constructor();

  }

  export class InjectedInputMouseInfo {
    timeOffsetInMilliseconds: number;
    mouseOptions: InjectedInputMouseOptions;
    mouseData: number;
    deltaY: number;
    deltaX: number;
    constructor();

  }

  export class InjectedInputTouchInfo {
    touchParameters: InjectedInputTouchParameters;
    pressure: number;
    pointerInfo: InjectedInputPointerInfo;
    orientation: number;
    contact: InjectedInputRectangle;
    constructor();

  }

  export class InjectedInputPenInfo {
    tiltY: number;
    tiltX: number;
    rotation: number;
    pressure: number;
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

