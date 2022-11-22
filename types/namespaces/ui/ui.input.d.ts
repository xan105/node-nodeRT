  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class ManipulationDelta {
    translation: Object;
    scale: Number;
    rotation: Number;
    expansion: Number;
    constructor();
  }

  export class ManipulationVelocities {
    linear: Object;
    angular: Number;
    expansion: Number;
    constructor();
  }

  export class CrossSlideThresholds {
    selectionStart: Number;
    speedBumpStart: Number;
    speedBumpEnd: Number;
    rearrangeStart: Number;
    constructor();
  }

  export enum EdgeGestureKind {
    touch,
    keyboard,
    mouse,
  }

  export enum HoldingState {
    started,
    completed,
    canceled,
  }

  export enum DraggingState {
    started,
    continuing,
    completed,
  }

  export enum CrossSlidingState {
    started,
    dragging,
    selecting,
    selectSpeedBumping,
    speedBumping,
    rearranging,
    completed,
  }

  export enum GestureSettings {
    none,
    tap,
    doubleTap,
    hold,
    holdWithMouse,
    rightTap,
    drag,
    manipulationTranslateX,
    manipulationTranslateY,
    manipulationTranslateRailsX,
    manipulationTranslateRailsY,
    manipulationRotate,
    manipulationScale,
    manipulationTranslateInertia,
    manipulationRotateInertia,
    manipulationScaleInertia,
    crossSlide,
    manipulationMultipleFingerPanning,
  }

  export enum PointerUpdateKind {
    other,
    leftButtonPressed,
    leftButtonReleased,
    rightButtonPressed,
    rightButtonReleased,
    middleButtonPressed,
    middleButtonReleased,
    xButton1Pressed,
    xButton1Released,
    xButton2Pressed,
    xButton2Released,
  }

  export enum RadialControllerSystemMenuItemKind {
    scroll,
    zoom,
    undoRedo,
    volume,
    nextPreviousTrack,
  }

  export enum RadialControllerMenuKnownIcon {
    scroll,
    zoom,
    undoRedo,
    volume,
    nextPreviousTrack,
    ruler,
    inkColor,
    inkThickness,
    penType,
  }

  export class EdgeGestureEventArgs {
    kind: EdgeGestureKind;
    constructor();

  }

  export class EdgeGesture {
    constructor();

    static getForCurrentView(): EdgeGesture;


    addListener(type: "Canceled", listener: (ev: Event) => void): void ;
    removeListener(type: "Canceled", listener: (ev: Event) => void): void ;
    on(type: "Canceled", listener: (ev: Event) => void): void ;
    off(type: "Canceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Starting", listener: (ev: Event) => void): void ;
    removeListener(type: "Starting", listener: (ev: Event) => void): void ;
    on(type: "Starting", listener: (ev: Event) => void): void ;
    off(type: "Starting", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class KeyboardDeliveryInterceptor {
    isInterceptionEnabledWhenInForeground: Boolean;
    constructor();

    static getForCurrentView(): KeyboardDeliveryInterceptor;


    addListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyDown", listener: (ev: Event) => void): void ;
    on(type: "KeyDown", listener: (ev: Event) => void): void ;
    off(type: "KeyDown", listener: (ev: Event) => void): void ;
    
    addListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    removeListener(type: "KeyUp", listener: (ev: Event) => void): void ;
    on(type: "KeyUp", listener: (ev: Event) => void): void ;
    off(type: "KeyUp", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class MouseWheelParameters {
    pageTranslation: Object;
    deltaScale: Number;
    deltaRotationAngle: Number;
    charTranslation: Object;
    constructor();

  }

  export class GestureRecognizer {
    inertiaRotationDeceleration: Number;
    inertiaTranslationDeceleration: Number;
    inertiaExpansionDeceleration: Number;
    inertiaExpansion: Number;
    autoProcessInertia: Boolean;
    crossSlideThresholds: CrossSlideThresholds;
    crossSlideExact: Boolean;
    gestureSettings: GestureSettings;
    inertiaRotationAngle: Number;
    showGestureFeedback: Boolean;
    pivotRadius: Number;
    crossSlideHorizontally: Boolean;
    pivotCenter: Object;
    manipulationExact: Boolean;
    inertiaTranslationDisplacement: Number;
    isActive: Boolean;
    isInertial: Boolean;
    mouseWheelParameters: MouseWheelParameters;
    constructor();

    canBeDoubleTap(value: PointerPoint): Boolean;

    processDownEvent(value: PointerPoint): void;

    processMoveEvents(value: Object): void;

    processUpEvent(value: PointerPoint): void;

    processMouseWheelEvent(value: PointerPoint, isShiftKeyDown: Boolean, isControlKeyDown: Boolean): void;

    processInertia(): void;

    completeGesture(): void;

    addListener(type: "CrossSliding", listener: (ev: Event) => void): void ;
    removeListener(type: "CrossSliding", listener: (ev: Event) => void): void ;
    on(type: "CrossSliding", listener: (ev: Event) => void): void ;
    off(type: "CrossSliding", listener: (ev: Event) => void): void ;
    
    addListener(type: "Dragging", listener: (ev: Event) => void): void ;
    removeListener(type: "Dragging", listener: (ev: Event) => void): void ;
    on(type: "Dragging", listener: (ev: Event) => void): void ;
    off(type: "Dragging", listener: (ev: Event) => void): void ;
    
    addListener(type: "Holding", listener: (ev: Event) => void): void ;
    removeListener(type: "Holding", listener: (ev: Event) => void): void ;
    on(type: "Holding", listener: (ev: Event) => void): void ;
    off(type: "Holding", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    on(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    off(type: "ManipulationInertiaStarting", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    on(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    off(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    removeListener(type: "RightTapped", listener: (ev: Event) => void): void ;
    on(type: "RightTapped", listener: (ev: Event) => void): void ;
    off(type: "RightTapped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class TappedEventArgs {
    pointerDeviceType: Number;
    position: Object;
    tapCount: Number;
    constructor();

  }

  export class RightTappedEventArgs {
    pointerDeviceType: Number;
    position: Object;
    constructor();

  }

  export class HoldingEventArgs {
    holdingState: HoldingState;
    pointerDeviceType: Number;
    position: Object;
    constructor();

  }

  export class DraggingEventArgs {
    draggingState: DraggingState;
    pointerDeviceType: Number;
    position: Object;
    constructor();

  }

  export class ManipulationStartedEventArgs {
    cumulative: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    constructor();

  }

  export class ManipulationUpdatedEventArgs {
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    constructor();

  }

  export class ManipulationInertiaStartingEventArgs {
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    constructor();

  }

  export class ManipulationCompletedEventArgs {
    cumulative: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    constructor();

  }

  export class CrossSlidingEventArgs {
    crossSlidingState: CrossSlidingState;
    pointerDeviceType: Number;
    position: Object;
    constructor();

  }

  export class PointerPoint {
    frameId: Number;
    isInContact: Boolean;
    pointerDevice: Object;
    pointerId: Number;
    position: Object;
    properties: PointerPointProperties;
    rawPosition: Object;
    timestamp: Number;
    constructor();

    static getCurrentPoint(pointerId: Number): PointerPoint;
    static getCurrentPoint(pointerId: Number, transform: IPointerPointTransform): PointerPoint;


    static getIntermediatePoints(pointerId: Number): Object;
    static getIntermediatePoints(pointerId: Number, transform: IPointerPointTransform): Object;


  }

  export class IPointerPointTransform {
    inverse: IPointerPointTransform;
    constructor();

    tryTransform(inPoint: Object, outPoint: Object): Boolean;

    transformBounds(rect: Object): Object;

  }

  export class PointerPointProperties {
    contactRect: Object;
    contactRectRaw: Object;
    isBarrelButtonPressed: Boolean;
    isCanceled: Boolean;
    isEraser: Boolean;
    isHorizontalMouseWheel: Boolean;
    isInRange: Boolean;
    isInverted: Boolean;
    isLeftButtonPressed: Boolean;
    isMiddleButtonPressed: Boolean;
    isPrimary: Boolean;
    isRightButtonPressed: Boolean;
    isXButton1Pressed: Boolean;
    isXButton2Pressed: Boolean;
    mouseWheelDelta: Number;
    orientation: Number;
    pointerUpdateKind: PointerUpdateKind;
    pressure: Number;
    touchConfidence: Boolean;
    twist: Number;
    xTilt: Number;
    yTilt: Number;
    zDistance: Number;
    constructor();

    hasUsage(usagePage: Number, usageId: Number): Boolean;

    getUsageValue(usagePage: Number, usageId: Number): Number;

  }

  export class PointerVisualizationSettings {
    isContactFeedbackEnabled: Boolean;
    isBarrelButtonFeedbackEnabled: Boolean;
    constructor();

    static getForCurrentView(): PointerVisualizationSettings;


  }

  export class RadialControllerScreenContact {
    bounds: Object;
    position: Object;
    constructor();

  }

  export class RadialControllerMenu {
    isEnabled: Boolean;
    items: Object;
    constructor();

    getSelectedMenuItem(): RadialControllerMenuItem;

    selectMenuItem(menuItem: RadialControllerMenuItem): void;

    trySelectPreviouslySelectedMenuItem(): Boolean;

  }

  export class RadialController {
    useAutomaticHapticFeedback: Boolean;
    rotationResolutionInDegrees: Number;
    menu: RadialControllerMenu;
    constructor();

    static isSupported(): Boolean;


    static createForCurrentView(): RadialController;


    addListener(type: "ButtonClicked", listener: (ev: Event) => void): void ;
    removeListener(type: "ButtonClicked", listener: (ev: Event) => void): void ;
    on(type: "ButtonClicked", listener: (ev: Event) => void): void ;
    off(type: "ButtonClicked", listener: (ev: Event) => void): void ;
    
    addListener(type: "ControlAcquired", listener: (ev: Event) => void): void ;
    removeListener(type: "ControlAcquired", listener: (ev: Event) => void): void ;
    on(type: "ControlAcquired", listener: (ev: Event) => void): void ;
    off(type: "ControlAcquired", listener: (ev: Event) => void): void ;
    
    addListener(type: "ControlLost", listener: (ev: Event) => void): void ;
    removeListener(type: "ControlLost", listener: (ev: Event) => void): void ;
    on(type: "ControlLost", listener: (ev: Event) => void): void ;
    off(type: "ControlLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "RotationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "RotationChanged", listener: (ev: Event) => void): void ;
    on(type: "RotationChanged", listener: (ev: Event) => void): void ;
    off(type: "RotationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "ScreenContactContinued", listener: (ev: Event) => void): void ;
    removeListener(type: "ScreenContactContinued", listener: (ev: Event) => void): void ;
    on(type: "ScreenContactContinued", listener: (ev: Event) => void): void ;
    off(type: "ScreenContactContinued", listener: (ev: Event) => void): void ;
    
    addListener(type: "ScreenContactEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "ScreenContactEnded", listener: (ev: Event) => void): void ;
    on(type: "ScreenContactEnded", listener: (ev: Event) => void): void ;
    off(type: "ScreenContactEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "ScreenContactStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ScreenContactStarted", listener: (ev: Event) => void): void ;
    on(type: "ScreenContactStarted", listener: (ev: Event) => void): void ;
    off(type: "ScreenContactStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ButtonHolding", listener: (ev: Event) => void): void ;
    removeListener(type: "ButtonHolding", listener: (ev: Event) => void): void ;
    on(type: "ButtonHolding", listener: (ev: Event) => void): void ;
    off(type: "ButtonHolding", listener: (ev: Event) => void): void ;
    
    addListener(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    on(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    off(type: "ButtonPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ButtonReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "ButtonReleased", listener: (ev: Event) => void): void ;
    on(type: "ButtonReleased", listener: (ev: Event) => void): void ;
    off(type: "ButtonReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RadialControllerScreenContactStartedEventArgs {
    contact: RadialControllerScreenContact;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerScreenContactContinuedEventArgs {
    contact: RadialControllerScreenContact;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerRotationChangedEventArgs {
    contact: RadialControllerScreenContact;
    rotationDeltaInDegrees: Number;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerButtonClickedEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerControlAcquiredEventArgs {
    contact: RadialControllerScreenContact;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerButtonPressedEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerButtonHoldingEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerButtonReleasedEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerMenuItem {
    tag: Object;
    displayText: String;
    constructor();

    static createFromFontGlyph(displayText: String, glyph: String, fontFamily: String): RadialControllerMenuItem;
    static createFromFontGlyph(displayText: String, glyph: String, fontFamily: String, fontUri: Object): RadialControllerMenuItem;


    static createFromIcon(displayText: String, icon: Object): RadialControllerMenuItem;


    static createFromKnownIcon(displayText: String, value: RadialControllerMenuKnownIcon): RadialControllerMenuItem;


    addListener(type: "Invoked", listener: (ev: Event) => void): void ;
    removeListener(type: "Invoked", listener: (ev: Event) => void): void ;
    on(type: "Invoked", listener: (ev: Event) => void): void ;
    off(type: "Invoked", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RadialControllerConfiguration {
    static isAppControllerEnabled: Boolean;
    static appController: RadialController;
    isMenuSuppressed: Boolean;
    activeControllerWhenMenuIsSuppressed: RadialController;
    constructor();

    static getForCurrentView(): RadialControllerConfiguration;


    setDefaultMenuItems(buttons: Object): void;

    resetToDefaultMenuItems(): void;

    trySelectDefaultMenuItem(type: RadialControllerSystemMenuItemKind): Boolean;

  }

  export class RadialControllerScreenContactEndedEventArgs {
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

export * as core from "./ui.input.core.js";
export * as inking from "./ui.input.inking.js";
export * as preview from "./ui.input.preview.js";
export * as spatial from "./ui.input.spatial.js";