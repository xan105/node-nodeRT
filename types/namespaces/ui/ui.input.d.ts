  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class ManipulationDelta {
    translation: Object;
    scale: number;
    rotation: number;
    expansion: number;
    constructor();
  }

  export class ManipulationVelocities {
    linear: Object;
    angular: number;
    expansion: number;
    constructor();
  }

  export class CrossSlideThresholds {
    selectionStart: number;
    speedBumpStart: number;
    speedBumpEnd: number;
    rearrangeStart: number;
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
    isInterceptionEnabledWhenInForeground: boolean;
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
    deltaScale: number;
    deltaRotationAngle: number;
    charTranslation: Object;
    constructor();

  }

  export class GestureRecognizer {
    inertiaRotationDeceleration: number;
    inertiaTranslationDeceleration: number;
    inertiaExpansionDeceleration: number;
    inertiaExpansion: number;
    autoProcessInertia: boolean;
    crossSlideThresholds: CrossSlideThresholds;
    crossSlideExact: boolean;
    gestureSettings: GestureSettings;
    inertiaRotationAngle: number;
    showGestureFeedback: boolean;
    pivotRadius: number;
    crossSlideHorizontally: boolean;
    pivotCenter: Object;
    manipulationExact: boolean;
    inertiaTranslationDisplacement: number;
    isActive: boolean;
    isInertial: boolean;
    mouseWheelParameters: MouseWheelParameters;
    constructor();

    canBeDoubleTap(value: PointerPoint): boolean;

    processDownEvent(value: PointerPoint): void;

    processMoveEvents(value: Object): void;

    processUpEvent(value: PointerPoint): void;

    processMouseWheelEvent(value: PointerPoint, isShiftKeyDown: boolean, isControlKeyDown: boolean): void;

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
    pointerDeviceType: number;
    position: Object;
    tapCount: number;
    constructor();

  }

  export class RightTappedEventArgs {
    pointerDeviceType: number;
    position: Object;
    constructor();

  }

  export class HoldingEventArgs {
    holdingState: HoldingState;
    pointerDeviceType: number;
    position: Object;
    constructor();

  }

  export class DraggingEventArgs {
    draggingState: DraggingState;
    pointerDeviceType: number;
    position: Object;
    constructor();

  }

  export class ManipulationStartedEventArgs {
    cumulative: ManipulationDelta;
    pointerDeviceType: number;
    position: Object;
    constructor();

  }

  export class ManipulationUpdatedEventArgs {
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: number;
    position: Object;
    velocities: ManipulationVelocities;
    constructor();

  }

  export class ManipulationInertiaStartingEventArgs {
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: number;
    position: Object;
    velocities: ManipulationVelocities;
    constructor();

  }

  export class ManipulationCompletedEventArgs {
    cumulative: ManipulationDelta;
    pointerDeviceType: number;
    position: Object;
    velocities: ManipulationVelocities;
    constructor();

  }

  export class CrossSlidingEventArgs {
    crossSlidingState: CrossSlidingState;
    pointerDeviceType: number;
    position: Object;
    constructor();

  }

  export class PointerPoint {
    frameId: number;
    isInContact: boolean;
    pointerDevice: Object;
    pointerId: number;
    position: Object;
    properties: PointerPointProperties;
    rawPosition: Object;
    timestamp: number;
    constructor();

    static getCurrentPoint(pointerId: number): PointerPoint;
    static getCurrentPoint(pointerId: number, transform: IPointerPointTransform): PointerPoint;


    static getIntermediatePoints(pointerId: number): Object;
    static getIntermediatePoints(pointerId: number, transform: IPointerPointTransform): Object;


  }

  export class IPointerPointTransform {
    inverse: IPointerPointTransform;
    constructor();

    tryTransform(inPoint: Object, outPoint: Object): boolean;

    transformBounds(rect: Object): Object;

  }

  export class PointerPointProperties {
    contactRect: Object;
    contactRectRaw: Object;
    isBarrelButtonPressed: boolean;
    isCanceled: boolean;
    isEraser: boolean;
    isHorizontalMouseWheel: boolean;
    isInRange: boolean;
    isInverted: boolean;
    isLeftButtonPressed: boolean;
    isMiddleButtonPressed: boolean;
    isPrimary: boolean;
    isRightButtonPressed: boolean;
    isXButton1Pressed: boolean;
    isXButton2Pressed: boolean;
    mouseWheelDelta: number;
    orientation: number;
    pointerUpdateKind: PointerUpdateKind;
    pressure: number;
    touchConfidence: boolean;
    twist: number;
    xTilt: number;
    yTilt: number;
    zDistance: number;
    constructor();

    hasUsage(usagePage: number, usageId: number): boolean;

    getUsageValue(usagePage: number, usageId: number): number;

  }

  export class PointerVisualizationSettings {
    isContactFeedbackEnabled: boolean;
    isBarrelButtonFeedbackEnabled: boolean;
    constructor();

    static getForCurrentView(): PointerVisualizationSettings;


  }

  export class RadialControllerScreenContact {
    bounds: Object;
    position: Object;
    constructor();

  }

  export class RadialControllerMenu {
    isEnabled: boolean;
    items: Object;
    constructor();

    getSelectedMenuItem(): RadialControllerMenuItem;

    selectMenuItem(menuItem: RadialControllerMenuItem): void;

    trySelectPreviouslySelectedMenuItem(): boolean;

  }

  export class RadialController {
    useAutomaticHapticFeedback: boolean;
    rotationResolutionInDegrees: number;
    menu: RadialControllerMenu;
    constructor();

    static isSupported(): boolean;


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
    isButtonPressed: boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerScreenContactContinuedEventArgs {
    contact: RadialControllerScreenContact;
    isButtonPressed: boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerRotationChangedEventArgs {
    contact: RadialControllerScreenContact;
    rotationDeltaInDegrees: number;
    isButtonPressed: boolean;
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
    isButtonPressed: boolean;
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
    displayText: string;
    constructor();

    static createFromFontGlyph(displayText: string, glyph: string, fontFamily: string): RadialControllerMenuItem;
    static createFromFontGlyph(displayText: string, glyph: string, fontFamily: string, fontUri: Object): RadialControllerMenuItem;


    static createFromIcon(displayText: string, icon: Object): RadialControllerMenuItem;


    static createFromKnownIcon(displayText: string, value: RadialControllerMenuKnownIcon): RadialControllerMenuItem;


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
    static isAppControllerEnabled: boolean;
    static appController: RadialController;
    isMenuSuppressed: boolean;
    activeControllerWhenMenuIsSuppressed: RadialController;
    constructor();

    static getForCurrentView(): RadialControllerConfiguration;


    setDefaultMenuItems(buttons: Object): void;

    resetToDefaultMenuItems(): void;

    trySelectDefaultMenuItem(type: RadialControllerSystemMenuItemKind): boolean;

  }

  export class RadialControllerScreenContactEndedEventArgs {
    isButtonPressed: boolean;
    simpleHapticsController: Object;
    constructor();

  }

export * as core from "./ui.input.core.js";
export * as inking from "./ui.input.inking.js";
export * as preview from "./ui.input.preview.js";
export * as spatial from "./ui.input.spatial.js";