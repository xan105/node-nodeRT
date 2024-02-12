  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class CrossSlideThresholds {
    selectionStart: Number;
    speedBumpStart: Number;
    speedBumpEnd: Number;
    rearrangeStart: Number;
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

  export enum CrossSlidingState {
    started,
    dragging,
    selecting,
    selectSpeedBumping,
    speedBumping,
    rearranging,
    completed,
  }

  export enum DraggingState {
    started,
    continuing,
    completed,
  }

  export enum EdgeGestureKind {
    touch,
    keyboard,
    mouse,
  }

  export enum GazeInputAccessStatus {
    unspecified,
    allowed,
    deniedByUser,
    deniedBySystem,
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

  export enum HoldingState {
    started,
    completed,
    canceled,
  }

  export enum InputActivationState {
    none,
    deactivated,
    activatedNotForeground,
    activatedInForeground,
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

  export enum RadialControllerSystemMenuItemKind {
    scroll,
    zoom,
    undoRedo,
    volume,
    nextPreviousTrack,
  }

  export class AttachableInputObject {
    constructor();

    close(): void;
  }

  export class CrossSlidingEventArgs {
    crossSlidingState: CrossSlidingState;
    pointerDeviceType: Number;
    position: Object;
    contactCount: Number;
    constructor();

  }

  export class DraggingEventArgs {
    draggingState: DraggingState;
    pointerDeviceType: Number;
    position: Object;
    contactCount: Number;
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

  export class EdgeGestureEventArgs {
    kind: EdgeGestureKind;
    constructor();

  }

  export class GestureRecognizer {
    showGestureFeedback: Boolean;
    pivotRadius: Number;
    pivotCenter: Object;
    manipulationExact: Boolean;
    inertiaTranslationDisplacement: Number;
    inertiaTranslationDeceleration: Number;
    inertiaRotationDeceleration: Number;
    inertiaRotationAngle: Number;
    inertiaExpansionDeceleration: Number;
    inertiaExpansion: Number;
    gestureSettings: GestureSettings;
    crossSlideThresholds: CrossSlideThresholds;
    crossSlideHorizontally: Boolean;
    crossSlideExact: Boolean;
    autoProcessInertia: Boolean;
    isActive: Boolean;
    isInertial: Boolean;
    mouseWheelParameters: MouseWheelParameters;
    translationMinContactCount: Number;
    translationMaxContactCount: Number;
    tapMinContactCount: Number;
    tapMaxContactCount: Number;
    holdStartDelay: Number;
    holdRadius: Number;
    holdMinContactCount: Number;
    holdMaxContactCount: Number;
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

  export class HoldingEventArgs {
    holdingState: HoldingState;
    pointerDeviceType: Number;
    position: Object;
    contactCount: Number;
    currentContactCount: Number;
    constructor();

  }

  export class IPointerPointTransform {
    inverse: IPointerPointTransform;
    constructor();

    tryTransform(inPoint: Object, outPoint: Object): Boolean;

    transformBounds(rect: Object): Object;

  }

  export class InputActivationListener {
    state: InputActivationState;
    constructor();

    addListener(type: "InputActivationChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "InputActivationChanged", listener: (ev: Event) => void): void ;
    on(type: "InputActivationChanged", listener: (ev: Event) => void): void ;
    off(type: "InputActivationChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class InputActivationListenerActivationChangedEventArgs {
    state: InputActivationState;
    constructor();

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

  export class ManipulationCompletedEventArgs {
    cumulative: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    contactCount: Number;
    currentContactCount: Number;
    constructor();

  }

  export class ManipulationInertiaStartingEventArgs {
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    contactCount: Number;
    constructor();

  }

  export class ManipulationStartedEventArgs {
    cumulative: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    contactCount: Number;
    constructor();

  }

  export class ManipulationUpdatedEventArgs {
    cumulative: ManipulationDelta;
    delta: ManipulationDelta;
    pointerDeviceType: Number;
    position: Object;
    velocities: ManipulationVelocities;
    contactCount: Number;
    currentContactCount: Number;
    constructor();

  }

  export class MouseWheelParameters {
    pageTranslation: Object;
    deltaScale: Number;
    deltaRotationAngle: Number;
    charTranslation: Object;
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

  export class RadialControllerButtonClickedEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerButtonHoldingEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerButtonPressedEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerButtonReleasedEventArgs {
    contact: RadialControllerScreenContact;
    simpleHapticsController: Object;
    constructor();

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

  export class RadialControllerControlAcquiredEventArgs {
    contact: RadialControllerScreenContact;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
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

  export class RadialControllerRotationChangedEventArgs {
    contact: RadialControllerScreenContact;
    rotationDeltaInDegrees: Number;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerScreenContact {
    bounds: Object;
    position: Object;
    constructor();

  }

  export class RadialControllerScreenContactContinuedEventArgs {
    contact: RadialControllerScreenContact;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerScreenContactEndedEventArgs {
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RadialControllerScreenContactStartedEventArgs {
    contact: RadialControllerScreenContact;
    isButtonPressed: Boolean;
    simpleHapticsController: Object;
    constructor();

  }

  export class RightTappedEventArgs {
    pointerDeviceType: Number;
    position: Object;
    contactCount: Number;
    constructor();

  }

  export class SystemButtonEventController {
    constructor();

    static createForDispatcherQueue(queue: Object): SystemButtonEventController;


    addListener(type: "SystemFunctionButtonPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "SystemFunctionButtonPressed", listener: (ev: Event) => void): void ;
    on(type: "SystemFunctionButtonPressed", listener: (ev: Event) => void): void ;
    off(type: "SystemFunctionButtonPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "SystemFunctionButtonReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "SystemFunctionButtonReleased", listener: (ev: Event) => void): void ;
    on(type: "SystemFunctionButtonReleased", listener: (ev: Event) => void): void ;
    off(type: "SystemFunctionButtonReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "SystemFunctionLockChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SystemFunctionLockChanged", listener: (ev: Event) => void): void ;
    on(type: "SystemFunctionLockChanged", listener: (ev: Event) => void): void ;
    off(type: "SystemFunctionLockChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "SystemFunctionLockIndicatorChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SystemFunctionLockIndicatorChanged", listener: (ev: Event) => void): void ;
    on(type: "SystemFunctionLockIndicatorChanged", listener: (ev: Event) => void): void ;
    off(type: "SystemFunctionLockIndicatorChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SystemFunctionButtonEventArgs {
    handled: Boolean;
    timestamp: Number;
    constructor();

  }

  export class SystemFunctionLockChangedEventArgs {
    handled: Boolean;
    isLocked: Boolean;
    timestamp: Number;
    constructor();

  }

  export class SystemFunctionLockIndicatorChangedEventArgs {
    handled: Boolean;
    isIndicatorOn: Boolean;
    timestamp: Number;
    constructor();

  }

  export class TappedEventArgs {
    pointerDeviceType: Number;
    position: Object;
    tapCount: Number;
    contactCount: Number;
    constructor();

  }

export const CrossSlidingState: any;
export const DraggingState: any;
export const EdgeGestureKind: any;
export const GazeInputAccessStatus: any;
export const GestureSettings: any;
export const HoldingState: any;
export const InputActivationState: any;
export const PointerUpdateKind: any;
export const RadialControllerMenuKnownIcon: any;
export const RadialControllerSystemMenuItemKind: any;
export const AttachableInputObject: any;
export const CrossSlidingEventArgs: any;
export const DraggingEventArgs: any;
export const EdgeGesture: any;
export const EdgeGestureEventArgs: any;
export const GestureRecognizer: any;
export const HoldingEventArgs: any;
export const IPointerPointTransform: any;
export const InputActivationListener: any;
export const InputActivationListenerActivationChangedEventArgs: any;
export const KeyboardDeliveryInterceptor: any;
export const ManipulationCompletedEventArgs: any;
export const ManipulationInertiaStartingEventArgs: any;
export const ManipulationStartedEventArgs: any;
export const ManipulationUpdatedEventArgs: any;
export const MouseWheelParameters: any;
export const PointerPoint: any;
export const PointerPointProperties: any;
export const PointerVisualizationSettings: any;
export const RadialController: any;
export const RadialControllerButtonClickedEventArgs: any;
export const RadialControllerButtonHoldingEventArgs: any;
export const RadialControllerButtonPressedEventArgs: any;
export const RadialControllerButtonReleasedEventArgs: any;
export const RadialControllerConfiguration: any;
export const RadialControllerControlAcquiredEventArgs: any;
export const RadialControllerMenu: any;
export const RadialControllerMenuItem: any;
export const RadialControllerRotationChangedEventArgs: any;
export const RadialControllerScreenContact: any;
export const RadialControllerScreenContactContinuedEventArgs: any;
export const RadialControllerScreenContactEndedEventArgs: any;
export const RadialControllerScreenContactStartedEventArgs: any;
export const RightTappedEventArgs: any;
export const SystemButtonEventController: any;
export const SystemFunctionButtonEventArgs: any;
export const SystemFunctionLockChangedEventArgs: any;
export const SystemFunctionLockIndicatorChangedEventArgs: any;
export const TappedEventArgs: any;
export * as core from "./ui.input.core.js";
export * as inking from "./ui.input.inking.js";
export * as spatial from "./ui.input.spatial.js";
