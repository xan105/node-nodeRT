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
    repeatCount: Number;
    scanCode: Number;
    isExtendedKey: Boolean;
    isMenuKeyDown: Boolean;
    wasKeyDown: Boolean;
    isKeyReleased: Boolean;
    constructor();
  }

  export class CoreProximityEvaluation {
    score: Number;
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
    handled: Boolean;
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
    handled: Boolean;
    constructor();

  }

  export class ICoreWindow {
    automationHostProvider: Object;
    bounds: Object;
    customProperties: Object;
    dispatcher: CoreDispatcher;
    flowDirection: CoreWindowFlowDirection;
    isInputEnabled: Boolean;
    pointerCursor: CoreCursor;
    pointerPosition: Object;
    visible: Boolean;
    constructor();

    activate(): void;

    close(): void;

    getAsyncKeyState(virtualKey: Number): CoreVirtualKeyStates;

    getKeyState(virtualKey: Number): CoreVirtualKeyStates;

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
    hasThreadAccess: Boolean;
    currentPriority: CoreDispatcherPriority;
    constructor();

    runAsync(priority: CoreDispatcherPriority, agileCallback: Object, callback: (error: Error) => void): void ;

    runIdleAsync(agileCallback: Object, callback: (error: Error) => void): void ;

    tryRunAsync(priority: CoreDispatcherPriority, agileCallback: Object, callback: (error: Error, result: Boolean) => void): void ;

    tryRunIdleAsync(agileCallback: Object, callback: (error: Error, result: Boolean) => void): void ;

    processEvents(options: CoreProcessEventsOption): void;

    shouldYield(): Boolean;
    shouldYield(priority: CoreDispatcherPriority): Boolean;

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
    id: Number;
    type: CoreCursorType;
    constructor();
    constructor(type: CoreCursorType, id: Number);

  }

  export class CoreWindow {
    pointerPosition: Object;
    pointerCursor: CoreCursor;
    isInputEnabled: Boolean;
    flowDirection: CoreWindowFlowDirection;
    automationHostProvider: Object;
    bounds: Object;
    customProperties: Object;
    dispatcher: CoreDispatcher;
    visible: Boolean;
    activationMode: CoreWindowActivationMode;
    dispatcherQueue: Object;
    constructor();

    static getForCurrentThread(): CoreWindow;


    getCurrentKeyEventDeviceId(): String;

    activate(): void;

    close(): void;

    getAsyncKeyState(virtualKey: Number): CoreVirtualKeyStates;

    getKeyState(virtualKey: Number): CoreVirtualKeyStates;

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
    handled: Boolean;
    windowActivationState: CoreWindowActivationState;
    constructor();

  }

  export class AutomationProviderRequestedEventArgs {
    automationProvider: Object;
    handled: Boolean;
    constructor();

  }

  export class CharacterReceivedEventArgs {
    keyCode: Number;
    keyStatus: CorePhysicalKeyStatus;
    handled: Boolean;
    constructor();

  }

  export class CoreWindowEventArgs {
    handled: Boolean;
    constructor();

  }

  export class InputEnabledEventArgs {
    handled: Boolean;
    inputEnabled: Boolean;
    constructor();

  }

  export class KeyEventArgs {
    handled: Boolean;
    keyStatus: CorePhysicalKeyStatus;
    virtualKey: Number;
    deviceId: String;
    constructor();

  }

  export class PointerEventArgs {
    handled: Boolean;
    currentPoint: Object;
    keyModifiers: Number;
    constructor();

    getIntermediatePoints(): Object;

  }

  export class TouchHitTestingEventArgs {
    handled: Boolean;
    proximityEvaluation: CoreProximityEvaluation;
    boundingBox: Object;
    point: Object;
    constructor();

    evaluateProximity(controlBoundingBox: Object): CoreProximityEvaluation;
    evaluateProximity(controlVertices: Array<Object>): CoreProximityEvaluation;

  }

  export class WindowSizeChangedEventArgs {
    handled: Boolean;
    size: Object;
    constructor();

  }

  export class VisibilityChangedEventArgs {
    handled: Boolean;
    visible: Boolean;
    constructor();

  }

  export class ClosestInteractiveBoundsRequestedEventArgs {
    closestInteractiveBounds: Object;
    pointerPosition: Object;
    searchBounds: Object;
    constructor();

  }

  export class IdleDispatchedHandlerArgs {
    isDispatcherIdle: Boolean;
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
    virtualKey: Number;
    deviceId: String;
    handled: Boolean;
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
    shouldWaitForLayoutCompletion: Boolean;
    constructor();

    static getForCurrentView(): CoreWindowResizeManager;


    notifyLayoutCompleted(): void;

  }

  export class ICoreInputSourceBase {
    dispatcher: CoreDispatcher;
    isInputEnabled: Boolean;
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
    hasCapture: Boolean;
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
    hasFocus: Boolean;
    isInputEnabled: Boolean;
    dispatcher: CoreDispatcher;
    pointerCursor: CoreCursor;
    hasCapture: Boolean;
    pointerPosition: Object;
    dispatcherQueue: Object;
    constructor();

    releasePointerCapture(): void;

    setPointerCapture(): void;

    getCurrentKeyState(virtualKey: Number): CoreVirtualKeyStates;

    getCurrentKeyEventDeviceId(): String;

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
    isInputEnabled: Boolean;
    dispatcher: CoreDispatcher;
    pointerCursor: CoreCursor;
    hasCapture: Boolean;
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
    title: String;
    isInteractionDelayed: Number;
    defaultCommandIndex: Number;
    cancelCommandIndex: Number;
    backButtonCommand: Object;
    commands: Object;
    maxSize: Object;
    minSize: Object;
    constructor();
    constructor(title: String);

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
    title: String;
    isInteractionDelayed: Number;
    defaultCommandIndex: Number;
    backButtonCommand: Object;
    commands: Object;
    maxSize: Object;
    minSize: Object;
    constructor();
    constructor(position: Object);
    constructor(position: Object, title: String);

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

export const AppViewBackButtonVisibility: any;
export const CoreWindowActivationState: any;
export const CoreWindowActivationMode: any;
export const CoreCursorType: any;
export const CoreDispatcherPriority: any;
export const CoreProcessEventsOption: any;
export const CoreWindowFlowDirection: any;
export const CoreVirtualKeyStates: any;
export const CoreAcceleratorKeyEventType: any;
export const CoreProximityEvaluationScore: any;
export const CoreInputDeviceTypes: any;
export const BackRequestedEventArgs: any;
export const SystemNavigationManager: any;
export const ICoreWindowEventArgs: any;
export const ICoreWindow: any;
export const CoreDispatcher: any;
export const CoreCursor: any;
export const CoreWindow: any;
export const WindowActivatedEventArgs: any;
export const AutomationProviderRequestedEventArgs: any;
export const CharacterReceivedEventArgs: any;
export const CoreWindowEventArgs: any;
export const InputEnabledEventArgs: any;
export const KeyEventArgs: any;
export const PointerEventArgs: any;
export const TouchHitTestingEventArgs: any;
export const WindowSizeChangedEventArgs: any;
export const VisibilityChangedEventArgs: any;
export const ClosestInteractiveBoundsRequestedEventArgs: any;
export const IdleDispatchedHandlerArgs: any;
export const ICoreAcceleratorKeys: any;
export const AcceleratorKeyEventArgs: any;
export const CoreAcceleratorKeys: any;
export const IInitializeWithCoreWindow: any;
export const CoreWindowResizeManager: any;
export const ICoreInputSourceBase: any;
export const ICorePointerInputSource: any;
export const ICorePointerInputSource2: any;
export const CoreComponentInputSource: any;
export const CoreIndependentInputSource: any;
export const ICorePointerRedirector: any;
export const CoreWindowPopupShowingEventArgs: any;
export const CoreWindowDialog: any;
export const CoreWindowFlyout: any;
export * as animationmetrics from "./ui.core.animationmetrics.js";
