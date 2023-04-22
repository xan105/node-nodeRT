  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor();
  }

  export enum SpatialGestureSettings {
    none,
    tap,
    doubleTap,
    hold,
    manipulationTranslate,
    navigationX,
    navigationY,
    navigationZ,
    navigationRailsX,
    navigationRailsY,
    navigationRailsZ,
  }

  export enum SpatialInteractionSourceKind {
    other,
    hand,
    voice,
    controller,
  }

  export enum SpatialInteractionPressKind {
    none,
    select,
    menu,
    grasp,
    touchpad,
    thumbstick,
  }

  export enum SpatialInteractionSourceHandedness {
    unspecified,
    left,
    right,
  }

  export enum SpatialInteractionSourcePositionAccuracy {
    high,
    approximate,
  }

  export class SpatialManipulationDelta {
    translation: Vector3;
    constructor();

  }

  export class SpatialGestureRecognizer {
    gestureSettings: SpatialGestureSettings;
    constructor();
    constructor(settings: SpatialGestureSettings);

    captureInteraction(interaction: SpatialInteraction): void;

    cancelPendingGestures(): void;

    trySetGestureSettings(settings: SpatialGestureSettings): boolean;

    addListener(type: "HoldCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "HoldCanceled", listener: (ev: Event) => void): void ;
    on(type: "HoldCanceled", listener: (ev: Event) => void): void ;
    off(type: "HoldCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "HoldCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "HoldCompleted", listener: (ev: Event) => void): void ;
    on(type: "HoldCompleted", listener: (ev: Event) => void): void ;
    off(type: "HoldCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "HoldStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "HoldStarted", listener: (ev: Event) => void): void ;
    on(type: "HoldStarted", listener: (ev: Event) => void): void ;
    off(type: "HoldStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCanceled", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCanceled", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    on(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    off(type: "ManipulationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    on(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    off(type: "ManipulationUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationCanceled", listener: (ev: Event) => void): void ;
    on(type: "NavigationCanceled", listener: (ev: Event) => void): void ;
    off(type: "NavigationCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    on(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    off(type: "NavigationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationStarted", listener: (ev: Event) => void): void ;
    on(type: "NavigationStarted", listener: (ev: Event) => void): void ;
    off(type: "NavigationStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "NavigationUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "NavigationUpdated", listener: (ev: Event) => void): void ;
    on(type: "NavigationUpdated", listener: (ev: Event) => void): void ;
    off(type: "NavigationUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "RecognitionEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "RecognitionEnded", listener: (ev: Event) => void): void ;
    on(type: "RecognitionEnded", listener: (ev: Event) => void): void ;
    off(type: "RecognitionEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "RecognitionStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "RecognitionStarted", listener: (ev: Event) => void): void ;
    on(type: "RecognitionStarted", listener: (ev: Event) => void): void ;
    off(type: "RecognitionStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Tapped", listener: (ev: Event) => void): void ;
    removeListener(type: "Tapped", listener: (ev: Event) => void): void ;
    on(type: "Tapped", listener: (ev: Event) => void): void ;
    off(type: "Tapped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpatialRecognitionStartedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

    isGesturePossible(gesture: SpatialGestureSettings): boolean;

  }

  export class SpatialRecognitionEndedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialTappedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    tapCount: number;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialHoldStartedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialHoldCompletedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialHoldCanceledEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialManipulationStartedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialManipulationUpdatedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetCumulativeDelta(coordinateSystem: Object): SpatialManipulationDelta;

  }

  export class SpatialManipulationCompletedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetCumulativeDelta(coordinateSystem: Object): SpatialManipulationDelta;

  }

  export class SpatialManipulationCanceledEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialNavigationStartedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    isNavigatingX: boolean;
    isNavigatingY: boolean;
    isNavigatingZ: boolean;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialNavigationUpdatedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    normalizedOffset: Vector3;
    constructor();

  }

  export class SpatialNavigationCompletedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    normalizedOffset: Vector3;
    constructor();

  }

  export class SpatialNavigationCanceledEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialPointerInteractionSourcePose {
    forwardDirection: Vector3;
    position: Vector3;
    upDirection: Vector3;
    orientation: Quaternion;
    positionAccuracy: SpatialInteractionSourcePositionAccuracy;
    constructor();

  }

  export class SpatialInteractionController {
    hasThumbstick: boolean;
    hasTouchpad: boolean;
    productId: number;
    simpleHapticsController: Object;
    vendorId: number;
    version: number;
    constructor();

    tryGetRenderableModelAsync(callback: (error: Error, result: Object) => void): void ;

    tryGetBatteryReport(): Object;

  }

  export class SpatialInteractionSourceState {
    isPressed: boolean;
    properties: SpatialInteractionSourceProperties;
    source: SpatialInteractionSource;
    timestamp: Object;
    controllerProperties: SpatialInteractionControllerProperties;
    isGrasped: boolean;
    isMenuPressed: boolean;
    isSelectPressed: boolean;
    selectPressedValue: number;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialInteractionSourceLocation {
    position: Vector3;
    velocity: Vector3;
    orientation: Quaternion;
    angularVelocity: Vector3;
    positionAccuracy: SpatialInteractionSourcePositionAccuracy;
    sourcePointerPose: SpatialPointerInteractionSourcePose;
    constructor();

  }

  export class SpatialInteractionSource {
    id: number;
    kind: SpatialInteractionSourceKind;
    controller: SpatialInteractionController;
    isGraspSupported: boolean;
    isMenuSupported: boolean;
    isPointingSupported: boolean;
    handedness: SpatialInteractionSourceHandedness;
    constructor();

    tryGetStateAtTimestamp(timestamp: Object): SpatialInteractionSourceState;

  }

  export class SpatialPointerPose {
    head: Object;
    timestamp: Object;
    constructor();

    static tryGetAtTimestamp(coordinateSystem: Object, timestamp: Object): SpatialPointerPose;


    tryGetInteractionSourcePose(source: SpatialInteractionSource): SpatialPointerInteractionSourcePose;

  }

  export class SpatialInteractionSourceProperties {
    sourceLossRisk: number;
    constructor();

    tryGetSourceLossMitigationDirection(coordinateSystem: Object): Vector3;

    tryGetLocation(coordinateSystem: Object): SpatialInteractionSourceLocation;

  }

  export class SpatialInteractionControllerProperties {
    isThumbstickPressed: boolean;
    isTouchpadPressed: boolean;
    isTouchpadTouched: boolean;
    thumbstickX: number;
    thumbstickY: number;
    touchpadX: number;
    touchpadY: number;
    constructor();

  }

  export class SpatialInteraction {
    sourceState: SpatialInteractionSourceState;
    constructor();

  }

  export class SpatialInteractionManager {
    constructor();

    static getForCurrentView(): SpatialInteractionManager;


    getDetectedSourcesAtTimestamp(timeStamp: Object): Object;

    addListener(type: "InteractionDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "InteractionDetected", listener: (ev: Event) => void): void ;
    on(type: "InteractionDetected", listener: (ev: Event) => void): void ;
    off(type: "InteractionDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceDetected", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceDetected", listener: (ev: Event) => void): void ;
    on(type: "SourceDetected", listener: (ev: Event) => void): void ;
    off(type: "SourceDetected", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceLost", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceLost", listener: (ev: Event) => void): void ;
    on(type: "SourceLost", listener: (ev: Event) => void): void ;
    off(type: "SourceLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourcePressed", listener: (ev: Event) => void): void ;
    removeListener(type: "SourcePressed", listener: (ev: Event) => void): void ;
    on(type: "SourcePressed", listener: (ev: Event) => void): void ;
    off(type: "SourcePressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceReleased", listener: (ev: Event) => void): void ;
    on(type: "SourceReleased", listener: (ev: Event) => void): void ;
    off(type: "SourceReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceUpdated", listener: (ev: Event) => void): void ;
    on(type: "SourceUpdated", listener: (ev: Event) => void): void ;
    off(type: "SourceUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpatialInteractionSourceEventArgs {
    state: SpatialInteractionSourceState;
    pressKind: SpatialInteractionPressKind;
    constructor();

  }

  export class SpatialInteractionDetectedEventArgs {
    interaction: SpatialInteraction;
    interactionSourceKind: SpatialInteractionSourceKind;
    interactionSource: SpatialInteractionSource;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

