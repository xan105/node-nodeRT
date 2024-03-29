  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
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

  export enum SpatialInteractionSourceKind {
    other,
    hand,
    voice,
    controller,
  }

  export enum SpatialInteractionSourcePositionAccuracy {
    high,
    approximate,
  }

  export class SpatialGestureRecognizer {
    gestureSettings: SpatialGestureSettings;
    constructor();
    constructor(settings: SpatialGestureSettings);

    captureInteraction(interaction: SpatialInteraction): void;

    cancelPendingGestures(): void;

    trySetGestureSettings(settings: SpatialGestureSettings): Boolean;

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

  export class SpatialHoldCanceledEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialHoldCompletedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialHoldStartedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialInteraction {
    sourceState: SpatialInteractionSourceState;
    constructor();

  }

  export class SpatialInteractionController {
    hasThumbstick: Boolean;
    hasTouchpad: Boolean;
    productId: Number;
    simpleHapticsController: Object;
    vendorId: Number;
    version: Number;
    constructor();

    tryGetRenderableModelAsync(callback: (error: Error, result: Object) => void): void ;

    tryGetBatteryReport(): Object;

  }

  export class SpatialInteractionControllerProperties {
    isThumbstickPressed: Boolean;
    isTouchpadPressed: Boolean;
    isTouchpadTouched: Boolean;
    thumbstickX: Number;
    thumbstickY: Number;
    touchpadX: Number;
    touchpadY: Number;
    constructor();

  }

  export class SpatialInteractionDetectedEventArgs {
    interaction: SpatialInteraction;
    interactionSourceKind: SpatialInteractionSourceKind;
    interactionSource: SpatialInteractionSource;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialInteractionManager {
    constructor();

    static isSourceKindSupported(kind: SpatialInteractionSourceKind): Boolean;


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

  export class SpatialInteractionSource {
    id: Number;
    kind: SpatialInteractionSourceKind;
    controller: SpatialInteractionController;
    isGraspSupported: Boolean;
    isMenuSupported: Boolean;
    isPointingSupported: Boolean;
    handedness: SpatialInteractionSourceHandedness;
    constructor();

    tryCreateHandMeshObserverAsync(callback: (error: Error, result: Object) => void): void ;

    tryGetStateAtTimestamp(timestamp: Object): SpatialInteractionSourceState;

    tryCreateHandMeshObserver(): Object;

  }

  export class SpatialInteractionSourceEventArgs {
    state: SpatialInteractionSourceState;
    pressKind: SpatialInteractionPressKind;
    constructor();

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

  export class SpatialInteractionSourceProperties {
    sourceLossRisk: Number;
    constructor();

    tryGetSourceLossMitigationDirection(coordinateSystem: Object): Vector3;

    tryGetLocation(coordinateSystem: Object): SpatialInteractionSourceLocation;

  }

  export class SpatialInteractionSourceState {
    isPressed: Boolean;
    properties: SpatialInteractionSourceProperties;
    source: SpatialInteractionSource;
    timestamp: Object;
    controllerProperties: SpatialInteractionControllerProperties;
    isGrasped: Boolean;
    isMenuPressed: Boolean;
    isSelectPressed: Boolean;
    selectPressedValue: Number;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

    tryGetHandPose(): Object;

  }

  export class SpatialManipulationCanceledEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialManipulationCompletedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetCumulativeDelta(coordinateSystem: Object): SpatialManipulationDelta;

  }

  export class SpatialManipulationDelta {
    translation: Vector3;
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

  export class SpatialNavigationCanceledEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialNavigationCompletedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    normalizedOffset: Vector3;
    constructor();

  }

  export class SpatialNavigationStartedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    isNavigatingX: Boolean;
    isNavigatingY: Boolean;
    isNavigatingZ: Boolean;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

  export class SpatialNavigationUpdatedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    normalizedOffset: Vector3;
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

  export class SpatialPointerPose {
    head: Object;
    timestamp: Object;
    eyes: Object;
    isHeadCapturedBySystem: Boolean;
    constructor();

    static tryGetAtTimestamp(coordinateSystem: Object, timestamp: Object): SpatialPointerPose;


    tryGetInteractionSourcePose(source: SpatialInteractionSource): SpatialPointerInteractionSourcePose;

  }

  export class SpatialRecognitionEndedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

  }

  export class SpatialRecognitionStartedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

    isGesturePossible(gesture: SpatialGestureSettings): Boolean;

  }

  export class SpatialTappedEventArgs {
    interactionSourceKind: SpatialInteractionSourceKind;
    tapCount: Number;
    constructor();

    tryGetPointerPose(coordinateSystem: Object): SpatialPointerPose;

  }

