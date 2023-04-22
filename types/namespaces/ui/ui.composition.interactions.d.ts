  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export enum InteractionChainingMode {
    auto,
    always,
    never,
  }

  export enum InteractionSourceMode {
    disabled,
    enabledWithInertia,
    enabledWithoutInertia,
  }

  export enum VisualInteractionSourceRedirectionMode {
    off,
    capableTouchpadOnly,
    pointerWheelOnly,
    capableTouchpadAndPointerWheel,
  }

  export class ICompositionInteractionSource {
    constructor();

  }

  export class IInteractionTrackerOwner {
    constructor();

    customAnimationStateEntered(sender: InteractionTracker, args: InteractionTrackerCustomAnimationStateEnteredArgs): void;

    idleStateEntered(sender: InteractionTracker, args: InteractionTrackerIdleStateEnteredArgs): void;

    inertiaStateEntered(sender: InteractionTracker, args: InteractionTrackerInertiaStateEnteredArgs): void;

    interactingStateEntered(sender: InteractionTracker, args: InteractionTrackerInteractingStateEnteredArgs): void;

    requestIgnored(sender: InteractionTracker, args: InteractionTrackerRequestIgnoredArgs): void;

    valuesChanged(sender: InteractionTracker, args: InteractionTrackerValuesChangedArgs): void;

  }

  export class InteractionTrackerCustomAnimationStateEnteredArgs {
    requestId: number;
    constructor();

  }

  export class InteractionTrackerIdleStateEnteredArgs {
    requestId: number;
    constructor();

  }

  export class InteractionTrackerInertiaStateEnteredArgs {
    modifiedRestingPosition: Vector3;
    modifiedRestingScale: number;
    naturalRestingPosition: Vector3;
    naturalRestingScale: number;
    positionVelocityInPixelsPerSecond: Vector3;
    requestId: number;
    scaleVelocityInPercentPerSecond: number;
    constructor();

  }

  export class InteractionTrackerInteractingStateEnteredArgs {
    requestId: number;
    constructor();

  }

  export class InteractionTrackerRequestIgnoredArgs {
    requestId: number;
    constructor();

  }

  export class InteractionTrackerValuesChangedArgs {
    position: Vector3;
    requestId: number;
    scale: number;
    constructor();

  }

  export class CompositionConditionalValue {
    value: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): CompositionConditionalValue;


  }

  export class CompositionInteractionSourceCollection {
    count: number;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    add(value: ICompositionInteractionSource): void;

    remove(value: ICompositionInteractionSource): void;

    removeAll(): void;

    first(): Object;

  }

  export class InteractionTracker {
    scaleInertiaDecayRate: number;
    positionInertiaDecayRate: Vector3;
    maxScale: number;
    minScale: number;
    maxPosition: Vector3;
    minPosition: Vector3;
    naturalRestingPosition: Vector3;
    naturalRestingScale: number;
    owner: IInteractionTrackerOwner;
    position: Vector3;
    interactionSources: CompositionInteractionSourceCollection;
    positionVelocityInPixelsPerSecond: Vector3;
    scale: number;
    isPositionRoundingSuggested: boolean;
    scaleVelocityInPercentPerSecond: number;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTracker;


    static createWithOwner(compositor: Object, owner: IInteractionTrackerOwner): InteractionTracker;


    adjustPositionXIfGreaterThanThreshold(adjustment: number, positionThreshold: number): void;

    adjustPositionYIfGreaterThanThreshold(adjustment: number, positionThreshold: number): void;

    configurePositionXInertiaModifiers(modifiers: Object): void;

    configurePositionYInertiaModifiers(modifiers: Object): void;

    configureScaleInertiaModifiers(modifiers: Object): void;

    tryUpdatePosition(value: Vector3): number;

    tryUpdatePositionBy(amount: Vector3): number;

    tryUpdatePositionWithAnimation(animation: Object): number;

    tryUpdatePositionWithAdditionalVelocity(velocityInPixelsPerSecond: Vector3): number;

    tryUpdateScale(value: number, centerPoint: Vector3): number;

    tryUpdateScaleWithAnimation(animation: Object, centerPoint: Vector3): number;

    tryUpdateScaleWithAdditionalVelocity(velocityInPercentPerSecond: number, centerPoint: Vector3): number;

    configureCenterPointXInertiaModifiers(conditionalValues: Object): void;

    configureCenterPointYInertiaModifiers(conditionalValues: Object): void;

    configureVector2PositionInertiaModifiers(modifiers: Object): void;

  }

  export class InteractionTrackerInertiaModifier {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class InteractionTrackerVector2InertiaModifier {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class InteractionTrackerInertiaNaturalMotion {
    naturalMotion: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTrackerInertiaNaturalMotion;


  }

  export class InteractionTrackerInertiaRestingValue {
    restingValue: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTrackerInertiaRestingValue;


  }

  export class InteractionTrackerInertiaMotion {
    motion: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTrackerInertiaMotion;


  }

  export class VisualInteractionSource {
    scaleChainingMode: InteractionChainingMode;
    positionYSourceMode: InteractionSourceMode;
    positionYChainingMode: InteractionChainingMode;
    positionXSourceMode: InteractionSourceMode;
    positionXChainingMode: InteractionChainingMode;
    manipulationRedirectionMode: VisualInteractionSourceRedirectionMode;
    isPositionYRailsEnabled: boolean;
    isPositionXRailsEnabled: boolean;
    scaleSourceMode: InteractionSourceMode;
    source: Object;
    deltaPosition: Vector3;
    deltaScale: number;
    position: Vector3;
    positionVelocity: Vector3;
    scale: number;
    scaleVelocity: number;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    static create(source: Object): VisualInteractionSource;


    tryRedirectForManipulation(pointerPoint: Object): void;

    configureCenterPointXModifiers(conditionalValues: Object): void;

    configureCenterPointYModifiers(conditionalValues: Object): void;

    configureDeltaPositionXModifiers(conditionalValues: Object): void;

    configureDeltaPositionYModifiers(conditionalValues: Object): void;

    configureDeltaScaleModifiers(conditionalValues: Object): void;

  }

  export class InteractionTrackerVector2InertiaNaturalMotion {
    naturalMotion: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTrackerVector2InertiaNaturalMotion;


  }

