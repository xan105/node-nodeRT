  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export enum InteractionBindingAxisModes {
    none,
    positionX,
    positionY,
    scale,
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

  export enum InteractionSourceRedirectionMode {
    disabled,
    enabled,
  }

  export enum InteractionTrackerClampingOption {
    auto,
    disabled,
  }

  export enum InteractionTrackerPositionUpdateOption {
    default,
    allowActiveCustomScaleAnimation,
  }

  export enum VisualInteractionSourceRedirectionMode {
    off,
    capableTouchpadOnly,
    pointerWheelOnly,
    capableTouchpadAndPointerWheel,
  }

  export class CompositionConditionalValue {
    value: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): CompositionConditionalValue;


  }

  export class CompositionInteractionSourceCollection {
    count: Number;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    add(value: ICompositionInteractionSource): void;

    remove(value: ICompositionInteractionSource): void;

    removeAll(): void;

    first(): Object;

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

  export class InteractionSourceConfiguration {
    scaleSourceMode: InteractionSourceRedirectionMode;
    positionYSourceMode: InteractionSourceRedirectionMode;
    positionXSourceMode: InteractionSourceRedirectionMode;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class InteractionTracker {
    scaleInertiaDecayRate: Number;
    positionInertiaDecayRate: Vector3;
    minScale: Number;
    minPosition: Vector3;
    maxScale: Number;
    maxPosition: Vector3;
    interactionSources: CompositionInteractionSourceCollection;
    isPositionRoundingSuggested: Boolean;
    naturalRestingPosition: Vector3;
    naturalRestingScale: Number;
    owner: IInteractionTrackerOwner;
    position: Vector3;
    positionVelocityInPixelsPerSecond: Vector3;
    scale: Number;
    scaleVelocityInPercentPerSecond: Number;
    isInertiaFromImpulse: Boolean;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static setBindingMode(boundTracker1: InteractionTracker, boundTracker2: InteractionTracker, axisMode: InteractionBindingAxisModes): void;


    static getBindingMode(boundTracker1: InteractionTracker, boundTracker2: InteractionTracker): InteractionBindingAxisModes;


    static create(compositor: Object): InteractionTracker;


    static createWithOwner(compositor: Object, owner: IInteractionTrackerOwner): InteractionTracker;


    adjustPositionXIfGreaterThanThreshold(adjustment: Number, positionThreshold: Number): void;

    adjustPositionYIfGreaterThanThreshold(adjustment: Number, positionThreshold: Number): void;

    configurePositionXInertiaModifiers(modifiers: Object): void;

    configurePositionYInertiaModifiers(modifiers: Object): void;

    configureScaleInertiaModifiers(modifiers: Object): void;

    tryUpdatePosition(value: Vector3): Number;
    tryUpdatePosition(value: Vector3, option: InteractionTrackerClampingOption): Number;
    tryUpdatePosition(value: Vector3, option: InteractionTrackerClampingOption, posUpdateOption: InteractionTrackerPositionUpdateOption): Number;

    tryUpdatePositionBy(amount: Vector3): Number;
    tryUpdatePositionBy(amount: Vector3, option: InteractionTrackerClampingOption): Number;

    tryUpdatePositionWithAnimation(animation: Object): Number;

    tryUpdatePositionWithAdditionalVelocity(velocityInPixelsPerSecond: Vector3): Number;

    tryUpdateScale(value: Number, centerPoint: Vector3): Number;

    tryUpdateScaleWithAnimation(animation: Object, centerPoint: Vector3): Number;

    tryUpdateScaleWithAdditionalVelocity(velocityInPercentPerSecond: Number, centerPoint: Vector3): Number;

    configureCenterPointXInertiaModifiers(conditionalValues: Object): void;

    configureCenterPointYInertiaModifiers(conditionalValues: Object): void;

    configureVector2PositionInertiaModifiers(modifiers: Object): void;

  }

  export class InteractionTrackerCustomAnimationStateEnteredArgs {
    requestId: Number;
    isFromBinding: Boolean;
    constructor();

  }

  export class InteractionTrackerIdleStateEnteredArgs {
    requestId: Number;
    isFromBinding: Boolean;
    constructor();

  }

  export class InteractionTrackerInertiaModifier {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class InteractionTrackerInertiaMotion {
    motion: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTrackerInertiaMotion;


  }

  export class InteractionTrackerInertiaNaturalMotion {
    naturalMotion: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTrackerInertiaRestingValue;


  }

  export class InteractionTrackerInertiaStateEnteredArgs {
    modifiedRestingPosition: Vector3;
    modifiedRestingScale: Number;
    naturalRestingPosition: Vector3;
    naturalRestingScale: Number;
    positionVelocityInPixelsPerSecond: Vector3;
    requestId: Number;
    scaleVelocityInPercentPerSecond: Number;
    isInertiaFromImpulse: Boolean;
    isFromBinding: Boolean;
    constructor();

  }

  export class InteractionTrackerInteractingStateEnteredArgs {
    requestId: Number;
    isFromBinding: Boolean;
    constructor();

  }

  export class InteractionTrackerRequestIgnoredArgs {
    requestId: Number;
    constructor();

  }

  export class InteractionTrackerValuesChangedArgs {
    position: Vector3;
    requestId: Number;
    scale: Number;
    constructor();

  }

  export class InteractionTrackerVector2InertiaModifier {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class InteractionTrackerVector2InertiaNaturalMotion {
    naturalMotion: Object;
    condition: Object;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): InteractionTrackerVector2InertiaNaturalMotion;


  }

  export class VisualInteractionSource {
    scaleSourceMode: InteractionSourceMode;
    scaleChainingMode: InteractionChainingMode;
    positionYSourceMode: InteractionSourceMode;
    positionYChainingMode: InteractionChainingMode;
    positionXSourceMode: InteractionSourceMode;
    positionXChainingMode: InteractionChainingMode;
    manipulationRedirectionMode: VisualInteractionSourceRedirectionMode;
    isPositionYRailsEnabled: Boolean;
    isPositionXRailsEnabled: Boolean;
    source: Object;
    deltaPosition: Vector3;
    deltaScale: Number;
    position: Vector3;
    positionVelocity: Vector3;
    scale: Number;
    scaleVelocity: Number;
    pointerWheelConfig: InteractionSourceConfiguration;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static createFromIVisualElement(source: Object): VisualInteractionSource;


    static create(source: Object): VisualInteractionSource;


    tryRedirectForManipulation(pointerPoint: Object): void;

    configureCenterPointXModifiers(conditionalValues: Object): void;

    configureCenterPointYModifiers(conditionalValues: Object): void;

    configureDeltaPositionXModifiers(conditionalValues: Object): void;

    configureDeltaPositionYModifiers(conditionalValues: Object): void;

    configureDeltaScaleModifiers(conditionalValues: Object): void;

  }

