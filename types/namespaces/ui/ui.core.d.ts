  export class Rect {
    constructor();
  }

  export class Point {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class CorePhysicalKeyStatus {
    repeatCount: number;
    scanCode: number;
    isExtendedKey: boolean;
    isMenuKeyDown: boolean;
    wasKeyDown: boolean;
    isKeyReleased: boolean;
    constructor();
  }

  export class CoreProximityEvaluation {
    score: number;
    adjustedPoint: Object;
    constructor();
  }

  export class CoreWindowDialogsContract {
    constructor();
  }

  export enum AppViewBackButtonVisibility {
    visible,
    collapsed,
    disabled,
  }

  export enum CoreWindowActivationState {
    codeActivated,
    deactivated,
    pointerActivated,
  }

  export enum CoreWindowActivationMode {
    none,
    deactivated,
    activatedNotForeground,
    activatedInForeground,
  }

  export enum CoreCursorType {
    arrow,
    cross,
    custom,
    hand,
    help,
    iBeam,
    sizeAll,
    sizeNortheastSouthwest,
    sizeNorthSouth,
    sizeNorthwestSoutheast,
    sizeWestEast,
    universalNo,
    upArrow,
    wait,
    pin,
    person,
  }

  export enum CoreDispatcherPriority {
    idle,
    low,
    normal,
    high,
  }

  export enum CoreProcessEventsOption {
    processOneAndAllPending,
    processOneIfPresent,
    processUntilQuit,
    processAllIfPresent,
  }

  export enum CoreWindowFlowDirection {
    leftToRight,
    rightToLeft,
  }

  export enum CoreVirtualKeyStates {
    none,
    down,
    locked,
  }

  export enum CoreAcceleratorKeyEventType {
    character,
    deadCharacter,
    keyDown,
    keyUp,
    systemCharacter,
    systemDeadCharacter,
    systemKeyDown,
    systemKeyUp,
    unicodeCharacter,
  }

  export enum CoreProximityEvaluationScore {
    closest,
    farthest,
  }

  export enum CoreInputDeviceTypes {
    none,
    touch,
    pen,
    mouse,
  }

  export class BackRequestedEventArgs {
    handled: boolean;
    constructor();

  }

  export class SystemNavigationManager {
    appViewBackButtonVisibility: AppViewBackButtonVisibility;
    constructor();

    static getForCurrentView(): SystemNavigationManager;


    addListener(type: "BackRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "BackRequested", listener: (ev: Event) => void): void ;
    on(type: "BackRequested", listener: (ev: Event) => void): void ;
    off(type: "BackRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ICoreWindowEventArgs {
    handled: boolean;
    constructor();

  }

  export class ICoreWindow {
    automationHostProvider: Object;
    bounds: Object;
    customProperties: Object;
    dispatcher: CoreDispatcher;
    flowDirection: CoreWindowFlowDirection;
    isInputEnabled: boolean;
    pointerCursor: CoreCursor;
    pointerPosition: Object;
    visible: boolean;
    constructor();

    activate(): void;

    close(): void;

    getAsyncKeyState(virtualKey: number): CoreVirtualKeyStates;

    getKeyState(virtualKey: number): CoreVirtualKeyStates;

    releasePointerCapture(): void;

    setPointerCapture(): void;

    addListener(type: "Activated", listener: (ev: Event) => void): void ;
    removeListener(type: "Activated", listener: (ev: Event) => void): void ;
    on(type: "Activated", listener: (ev: Event) => void): void ;
    off(type: "Activated", listener: (ev: Event) => void): void ;
    
    addListener(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    on(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    off(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    removeListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    on(type: "InputEnabled", listener: (ev: Event) => void): void ;
    off(type: "InputEnabled", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    removeListener(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    on(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    off(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    
    addListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    on(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    off(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreDispatcher {
    hasThreadAccess: boolean;
    currentPriority: CoreDispatcherPriority;
    constructor();

    runAsync(priority: CoreDispatcherPriority, agileCallback: Object, callback: (error: Error) => void): void ;

    runIdleAsync(agileCallback: Object, callback: (error: Error) => void): void ;

    tryRunAsync(priority: CoreDispatcherPriority, agileCallback: Object, callback: (error: Error, result: boolean) => void): void ;

    tryRunIdleAsync(agileCallback: Object, callback: (error: Error, result: boolean) => void): void ;

    processEvents(options: CoreProcessEventsOption): void;

    shouldYield(): boolean;
    shouldYield(priority: CoreDispatcherPriority): boolean;

    stopProcessEvents(): void;

    addListener(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    removeListener(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    on(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    off(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreCursor {
    id: number;
    type: CoreCursorType;
    constructor();
    constructor(type: CoreCursorType, id: number);

  }

  export class CoreWindow {
    pointerPosition: Object;
    pointerCursor: CoreCursor;
    isInputEnabled: boolean;
    flowDirection: CoreWindowFlowDirection;
    automationHostProvider: Object;
    bounds: Object;
    customProperties: Object;
    dispatcher: CoreDispatcher;
    visible: boolean;
    activationMode: CoreWindowActivationMode;
    dispatcherQueue: Object;
    constructor();

    static getForCurrentThread(): CoreWindow;


    getCurrentKeyEventDeviceId(): string;

    activate(): void;

    close(): void;

    getAsyncKeyState(virtualKey: number): CoreVirtualKeyStates;

    getKeyState(virtualKey: number): CoreVirtualKeyStates;

    releasePointerCapture(): void;

    setPointerCapture(): void;

    addListener(type: "Activated", listener: (ev: Event) => void): void ;
    removeListener(type: "Activated", listener: (ev: Event) => void): void ;
    on(type: "Activated", listener: (ev: Event) => void): void ;
    off(type: "Activated", listener: (ev: Event) => void): void ;
    
    addListener(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    on(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    off(type: "AutomationProviderRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "Closed", listener: (ev: Event) => void): void ;
    removeListener(type: "Closed", listener: (ev: Event) => void): void ;
    on(type: "Closed", listener: (ev: Event) => void): void ;
    off(type: "Closed", listener: (ev: Event) => void): void ;
    
    addListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    removeListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    on(type: "InputEnabled", listener: (ev: Event) => void): void ;
    off(type: "InputEnabled", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SizeChanged", listener: (ev: Event) => void): void ;
    on(type: "SizeChanged", listener: (ev: Event) => void): void ;
    off(type: "SizeChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    removeListener(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    on(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    off(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    
    addListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    on(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    off(type: "VisibilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    on(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    off(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    on(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    off(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    
    addListener(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    on(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    off(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "ResizeCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ResizeCompleted", listener: (ev: Event) => void): void ;
    on(type: "ResizeCompleted", listener: (ev: Event) => void): void ;
    off(type: "ResizeCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ResizeStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ResizeStarted", listener: (ev: Event) => void): void ;
    on(type: "ResizeStarted", listener: (ev: Event) => void): void ;
    off(type: "ResizeStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WindowActivatedEventArgs {
    handled: boolean;
    windowActivationState: CoreWindowActivationState;
    constructor();

  }

  export class AutomationProviderRequestedEventArgs {
    automationProvider: Object;
    handled: boolean;
    constructor();

  }

  export class CharacterReceivedEventArgs {
    keyCode: number;
    keyStatus: CorePhysicalKeyStatus;
    handled: boolean;
    constructor();

  }

  export class CoreWindowEventArgs {
    handled: boolean;
    constructor();

  }

  export class InputEnabledEventArgs {
    handled: boolean;
    inputEnabled: boolean;
    constructor();

  }

  export class KeyEventArgs {
    handled: boolean;
    keyStatus: CorePhysicalKeyStatus;
    virtualKey: number;
    deviceId: string;
    constructor();

  }

  export class PointerEventArgs {
    handled: boolean;
    currentPoint: Object;
    keyModifiers: number;
    constructor();

    getIntermediatePoints(): Object;

  }

  export class TouchHitTestingEventArgs {
    handled: boolean;
    proximityEvaluation: CoreProximityEvaluation;
    boundingBox: Object;
    point: Object;
    constructor();

    evaluateProximity(controlBoundingBox: Object): CoreProximityEvaluation;
    evaluateProximity(controlVertices: Array<Object>): CoreProximityEvaluation;

  }

  export class WindowSizeChangedEventArgs {
    handled: boolean;
    size: Object;
    constructor();

  }

  export class VisibilityChangedEventArgs {
    handled: boolean;
    visible: boolean;
    constructor();

  }

  export class ClosestInteractiveBoundsRequestedEventArgs {
    closestInteractiveBounds: Object;
    pointerPosition: Object;
    searchBounds: Object;
    constructor();

  }

  export class IdleDispatchedHandlerArgs {
    isDispatcherIdle: boolean;
    constructor();

  }

  export class ICoreAcceleratorKeys {
    constructor();

    addListener(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    removeListener(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    on(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    off(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class AcceleratorKeyEventArgs {
    eventType: CoreAcceleratorKeyEventType;
    keyStatus: CorePhysicalKeyStatus;
    virtualKey: number;
    deviceId: string;
    handled: boolean;
    constructor();

  }

  export class CoreAcceleratorKeys {
    constructor();

    addListener(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    removeListener(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    on(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    off(type: "AcceleratorKeyActivated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IInitializeWithCoreWindow {
    constructor();

    initialize(window: CoreWindow): void;

  }

  export class CoreWindowResizeManager {
    shouldWaitForLayoutCompletion: boolean;
    constructor();

    static getForCurrentView(): CoreWindowResizeManager;


    notifyLayoutCompleted(): void;

  }

  export class ICoreInputSourceBase {
    dispatcher: CoreDispatcher;
    isInputEnabled: boolean;
    constructor();

    addListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    removeListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    on(type: "InputEnabled", listener: (ev: Event) => void): void ;
    off(type: "InputEnabled", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ICorePointerInputSource {
    hasCapture: boolean;
    pointerCursor: CoreCursor;
    pointerPosition: Object;
    constructor();

    releasePointerCapture(): void;

    setPointerCapture(): void;

    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ICorePointerInputSource2 {
    dispatcherQueue: Object;
    constructor();

  }

  export class CoreComponentInputSource {
    hasFocus: boolean;
    isInputEnabled: boolean;
    dispatcher: CoreDispatcher;
    pointerCursor: CoreCursor;
    hasCapture: boolean;
    pointerPosition: Object;
    dispatcherQueue: Object;
    constructor();

    releasePointerCapture(): void;

    setPointerCapture(): void;

    getCurrentKeyState(virtualKey: number): CoreVirtualKeyStates;

    getCurrentKeyEventDeviceId(): string;

    addListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    removeListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    on(type: "InputEnabled", listener: (ev: Event) => void): void ;
    off(type: "InputEnabled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    removeListener(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    on(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    off(type: "CharacterReceived", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "GotFocus", listener: (ev: Event) => void): void ;
    on(type: "GotFocus", listener: (ev: Event) => void): void ;
    off(type: "GotFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    removeListener(type: "LostFocus", listener: (ev: Event) => void): void ;
    on(type: "LostFocus", listener: (ev: Event) => void): void ;
    off(type: "LostFocus", listener: (ev: Event) => void): void ;
    
    addListener(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    removeListener(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    on(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    off(type: "TouchHitTesting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    on(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    off(type: "ClosestInteractiveBoundsRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreIndependentInputSource {
    isInputEnabled: boolean;
    dispatcher: CoreDispatcher;
    pointerCursor: CoreCursor;
    hasCapture: boolean;
    pointerPosition: Object;
    dispatcherQueue: Object;
    constructor();

    releasePointerCapture(): void;

    setPointerCapture(): void;

    addListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    removeListener(type: "InputEnabled", listener: (ev: Event) => void): void ;
    on(type: "InputEnabled", listener: (ev: Event) => void): void ;
    off(type: "InputEnabled", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    on(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    off(type: "PointerCaptureLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    on(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    off(type: "PointerWheelChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ICorePointerRedirector {
    constructor();

    addListener(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    on(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    off(type: "PointerRoutedAway", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerRoutedReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    on(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    off(type: "PointerRoutedTo", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreWindowPopupShowingEventArgs {
    constructor();

    setDesiredSize(value: Object): void;

  }

  export class CoreWindowDialog {
    title: string;
    isInteractionDelayed: number;
    defaultCommandIndex: number;
    cancelCommandIndex: number;
    backButtonCommand: Object;
    commands: Object;
    maxSize: Object;
    minSize: Object;
    constructor();
    constructor(title: string);

    showAsync(callback: (error: Error, result: Object) => void): void ;

    addListener(type: "Showing", listener: (ev: Event) => void): void ;
    removeListener(type: "Showing", listener: (ev: Event) => void): void ;
    on(type: "Showing", listener: (ev: Event) => void): void ;
    off(type: "Showing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CoreWindowFlyout {
    title: string;
    isInteractionDelayed: number;
    defaultCommandIndex: number;
    backButtonCommand: Object;
    commands: Object;
    maxSize: Object;
    minSize: Object;
    constructor();
    constructor(position: Object);
    constructor(position: Object, title: string);

    showAsync(callback: (error: Error, result: Object) => void): void ;

    addListener(type: "Showing", listener: (ev: Event) => void): void ;
    removeListener(type: "Showing", listener: (ev: Event) => void): void ;
    on(type: "Showing", listener: (ev: Event) => void): void ;
    off(type: "Showing", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export * as animationmetrics from "./ui.core.animationmetrics.js";
export * as preview from "./ui.core.preview.js";