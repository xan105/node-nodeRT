  export class Point {
    constructor();
  }

  export class Duration {
    constructor();
  }

  export class Color {
    constructor();
  }

  export enum ClockState {
    active,
    filling,
    stopped,
  }

  export enum EasingMode {
    easeOut,
    easeIn,
    easeInOut,
  }

  export enum FillBehavior {
    holdEnd,
    stop,
  }

  export enum ConnectedAnimationComponent {
    offsetX,
    offsetY,
    crossFade,
    scale,
  }

  export class ConditionallyIndependentlyAnimatableAttribute {
    typeId: Object;
    constructor();

  }

  export class IndependentlyAnimatableAttribute {
    typeId: Object;
    constructor();

  }

  export class TransitionCollection {
    constructor();

    getAt(index: Number): Transition;

    getView(): Object;

    indexOf(value: Transition, index: Number): Boolean;

    setAt(index: Number, value: Transition): void;

    insertAt(index: Number, value: Transition): void;

    removeAt(index: Number): void;

    append(value: Transition): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class DoubleKeyFrameCollection {
    constructor();

    getAt(index: Number): DoubleKeyFrame;

    getView(): Object;

    indexOf(value: DoubleKeyFrame, index: Number): Boolean;

    setAt(index: Number, value: DoubleKeyFrame): void;

    insertAt(index: Number, value: DoubleKeyFrame): void;

    removeAt(index: Number): void;

    append(value: DoubleKeyFrame): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class ObjectKeyFrameCollection {
    constructor();

    getAt(index: Number): ObjectKeyFrame;

    getView(): Object;

    indexOf(value: ObjectKeyFrame, index: Number): Boolean;

    setAt(index: Number, value: ObjectKeyFrame): void;

    insertAt(index: Number, value: ObjectKeyFrame): void;

    removeAt(index: Number): void;

    append(value: ObjectKeyFrame): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class TimelineCollection {
    constructor();

    getAt(index: Number): Timeline;

    getView(): Object;

    indexOf(value: Timeline, index: Number): Boolean;

    setAt(index: Number, value: Timeline): void;

    insertAt(index: Number, value: Timeline): void;

    removeAt(index: Number): void;

    append(value: Timeline): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class DoubleKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class EasingFunctionBase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

    ease(normalizedTime: Number): Number;

  }

  export class KeySpline {
    controlPoint2: Object;
    controlPoint1: Object;
    dispatcher: Object;
    constructor();

  }

  export class NavigationTransitionInfo {
    dispatcher: Object;
    constructor();

    getNavigationStateCore(): String;

    setNavigationStateCore(navigationState: String): void;

  }

  export class ObjectKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class Timeline {
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Transition {
    dispatcher: Object;
    constructor();

  }

  export class AddDeleteThemeTransition {
    dispatcher: Object;
    constructor();

  }

  export class BackEase {
    static amplitudeProperty: Object;
    static easingModeProperty: Object;
    amplitude: Number;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class BeginStoryboard {
    static storyboardProperty: Object;
    storyboard: Storyboard;
    dispatcher: Object;
    constructor();

  }

  export class BounceEase {
    static bouncesProperty: Object;
    static bouncinessProperty: Object;
    static easingModeProperty: Object;
    bounciness: Number;
    bounces: Number;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class CircleEase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class ColorAnimation {
    static byProperty: Object;
    static easingFunctionProperty: Object;
    static enableDependentAnimationProperty: Object;
    static fromProperty: Object;
    static toProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    to: Object;
    from: Object;
    enableDependentAnimation: Boolean;
    easingFunction: EasingFunctionBase;
    by: Object;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ContentThemeTransition {
    static horizontalOffsetProperty: Object;
    static verticalOffsetProperty: Object;
    verticalOffset: Number;
    horizontalOffset: Number;
    dispatcher: Object;
    constructor();

  }

  export class CubicEase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class DiscreteDoubleKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class DiscreteObjectKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class DoubleAnimation {
    static byProperty: Object;
    static easingFunctionProperty: Object;
    static enableDependentAnimationProperty: Object;
    static fromProperty: Object;
    static toProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    to: Number;
    from: Number;
    enableDependentAnimation: Boolean;
    easingFunction: EasingFunctionBase;
    by: Number;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DoubleAnimationUsingKeyFrames {
    static enableDependentAnimationProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: Boolean;
    keyFrames: DoubleKeyFrameCollection;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class EasingDoubleKeyFrame {
    static easingFunctionProperty: Object;
    static keyTimeProperty: Object;
    static valueProperty: Object;
    easingFunction: EasingFunctionBase;
    value: Number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class EdgeUIThemeTransition {
    static edgeProperty: Object;
    edge: Number;
    dispatcher: Object;
    constructor();

  }

  export class ElasticEase {
    static oscillationsProperty: Object;
    static springinessProperty: Object;
    static easingModeProperty: Object;
    springiness: Number;
    oscillations: Number;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class EntranceThemeTransition {
    static fromHorizontalOffsetProperty: Object;
    static fromVerticalOffsetProperty: Object;
    static isStaggeringEnabledProperty: Object;
    isStaggeringEnabled: Boolean;
    fromVerticalOffset: Number;
    fromHorizontalOffset: Number;
    dispatcher: Object;
    constructor();

  }

  export class ExponentialEase {
    static exponentProperty: Object;
    static easingModeProperty: Object;
    exponent: Number;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class LinearDoubleKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class ObjectAnimationUsingKeyFrames {
    static enableDependentAnimationProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: Boolean;
    keyFrames: ObjectKeyFrameCollection;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PaneThemeTransition {
    static edgeProperty: Object;
    edge: Number;
    dispatcher: Object;
    constructor();

  }

  export class PointAnimation {
    static byProperty: Object;
    static easingFunctionProperty: Object;
    static enableDependentAnimationProperty: Object;
    static fromProperty: Object;
    static toProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    to: Object;
    from: Object;
    enableDependentAnimation: Boolean;
    easingFunction: EasingFunctionBase;
    by: Object;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PopupThemeTransition {
    static fromHorizontalOffsetProperty: Object;
    static fromVerticalOffsetProperty: Object;
    fromVerticalOffset: Number;
    fromHorizontalOffset: Number;
    dispatcher: Object;
    constructor();

  }

  export class PowerEase {
    static powerProperty: Object;
    static easingModeProperty: Object;
    power: Number;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class QuadraticEase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class QuarticEase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class QuinticEase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class ReorderThemeTransition {
    dispatcher: Object;
    constructor();

  }

  export class RepositionThemeTransition {
    static isStaggeringEnabledProperty: Object;
    isStaggeringEnabled: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class SineEase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class SplineDoubleKeyFrame {
    static keySplineProperty: Object;
    static keyTimeProperty: Object;
    static valueProperty: Object;
    keySpline: KeySpline;
    value: Number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class Storyboard {
    static targetNameProperty: Object;
    static targetPropertyProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    children: TimelineCollection;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    static getTargetProperty(element: Timeline): String;


    static setTargetProperty(element: Timeline, path: String): void;


    static getTargetName(element: Timeline): String;


    static setTargetName(element: Timeline, name: String): void;


    static setTarget(timeline: Timeline, target: Object): void;


    seek(offset: Number): void;

    stop(): void;

    begin(): void;

    pause(): void;

    resume(): void;

    getCurrentState(): ClockState;

    getCurrentTime(): Number;

    seekAlignedToLastTick(offset: Number): void;

    skipToFill(): void;

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ColorKeyFrameCollection {
    constructor();

    getAt(index: Number): ColorKeyFrame;

    getView(): Object;

    indexOf(value: ColorKeyFrame, index: Number): Boolean;

    setAt(index: Number, value: ColorKeyFrame): void;

    insertAt(index: Number, value: ColorKeyFrame): void;

    removeAt(index: Number): void;

    append(value: ColorKeyFrame): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class ConnectedAnimation {
    isScaleAnimationEnabled: Boolean;
    constructor();

    tryStart(destination: Object): Boolean;
    tryStart(destination: Object, coordinatedElements: Object): Boolean;

    cancel(): void;

    setAnimationComponent(component: ConnectedAnimationComponent, animation: Object): void;

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ConnectedAnimationService {
    defaultEasingFunction: Object;
    defaultDuration: Number;
    constructor();

    static getForCurrentView(): ConnectedAnimationService;


    prepareToAnimate(key: String, source: Object): ConnectedAnimation;

    getAnimation(key: String): ConnectedAnimation;

  }

  export class PointKeyFrameCollection {
    constructor();

    getAt(index: Number): PointKeyFrame;

    getView(): Object;

    indexOf(value: PointKeyFrame, index: Number): Boolean;

    setAt(index: Number, value: PointKeyFrame): void;

    insertAt(index: Number, value: PointKeyFrame): void;

    removeAt(index: Number): void;

    append(value: PointKeyFrame): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class ColorKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class PointKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class ColorAnimationUsingKeyFrames {
    static enableDependentAnimationProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: Boolean;
    keyFrames: ColorKeyFrameCollection;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DiscreteColorKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class DiscretePointKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class DragItemThemeAnimation {
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DragOverThemeAnimation {
    static directionProperty: Object;
    static targetNameProperty: Object;
    static toOffsetProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    toOffset: Number;
    targetName: String;
    direction: Number;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DrillInThemeAnimation {
    static entranceTargetNameProperty: Object;
    static entranceTargetProperty: Object;
    static exitTargetNameProperty: Object;
    static exitTargetProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    exitTargetName: String;
    exitTarget: Object;
    entranceTargetName: String;
    entranceTarget: Object;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DrillOutThemeAnimation {
    static entranceTargetNameProperty: Object;
    static entranceTargetProperty: Object;
    static exitTargetNameProperty: Object;
    static exitTargetProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    exitTargetName: String;
    exitTarget: Object;
    entranceTargetName: String;
    entranceTarget: Object;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DropTargetItemThemeAnimation {
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class EasingColorKeyFrame {
    static easingFunctionProperty: Object;
    static keyTimeProperty: Object;
    static valueProperty: Object;
    easingFunction: EasingFunctionBase;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class EasingPointKeyFrame {
    static easingFunctionProperty: Object;
    static keyTimeProperty: Object;
    static valueProperty: Object;
    easingFunction: EasingFunctionBase;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class FadeInThemeAnimation {
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FadeOutThemeAnimation {
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LinearColorKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class LinearPointKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class PointAnimationUsingKeyFrames {
    static enableDependentAnimationProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: Boolean;
    keyFrames: PointKeyFrameCollection;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PointerDownThemeAnimation {
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PointerUpThemeAnimation {
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PopInThemeAnimation {
    static fromHorizontalOffsetProperty: Object;
    static fromVerticalOffsetProperty: Object;
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    fromVerticalOffset: Number;
    fromHorizontalOffset: Number;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PopOutThemeAnimation {
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class RepositionThemeAnimation {
    static fromHorizontalOffsetProperty: Object;
    static fromVerticalOffsetProperty: Object;
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    fromVerticalOffset: Number;
    fromHorizontalOffset: Number;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SplineColorKeyFrame {
    static keySplineProperty: Object;
    static keyTimeProperty: Object;
    static valueProperty: Object;
    keySpline: KeySpline;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class SplinePointKeyFrame {
    static keySplineProperty: Object;
    static keyTimeProperty: Object;
    static valueProperty: Object;
    keySpline: KeySpline;
    value: Object;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class SplitCloseThemeAnimation {
    static closedLengthProperty: Object;
    static closedTargetNameProperty: Object;
    static closedTargetProperty: Object;
    static contentTargetNameProperty: Object;
    static contentTargetProperty: Object;
    static contentTranslationDirectionProperty: Object;
    static contentTranslationOffsetProperty: Object;
    static offsetFromCenterProperty: Object;
    static openedLengthProperty: Object;
    static openedTargetNameProperty: Object;
    static openedTargetProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    contentTargetName: String;
    contentTarget: Object;
    closedTargetName: String;
    closedTarget: Object;
    closedLength: Number;
    openedTargetName: String;
    openedTarget: Object;
    openedLength: Number;
    offsetFromCenter: Number;
    contentTranslationOffset: Number;
    contentTranslationDirection: Number;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SplitOpenThemeAnimation {
    static closedLengthProperty: Object;
    static closedTargetNameProperty: Object;
    static closedTargetProperty: Object;
    static contentTargetNameProperty: Object;
    static contentTargetProperty: Object;
    static contentTranslationDirectionProperty: Object;
    static contentTranslationOffsetProperty: Object;
    static offsetFromCenterProperty: Object;
    static openedLengthProperty: Object;
    static openedTargetNameProperty: Object;
    static openedTargetProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    contentTargetName: String;
    contentTarget: Object;
    closedTargetName: String;
    closedTarget: Object;
    closedLength: Number;
    openedTargetName: String;
    openedTarget: Object;
    openedLength: Number;
    offsetFromCenter: Number;
    contentTranslationOffset: Number;
    contentTranslationDirection: Number;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SwipeBackThemeAnimation {
    static fromHorizontalOffsetProperty: Object;
    static fromVerticalOffsetProperty: Object;
    static targetNameProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: String;
    fromVerticalOffset: Number;
    fromHorizontalOffset: Number;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SwipeHintThemeAnimation {
    static targetNameProperty: Object;
    static toHorizontalOffsetProperty: Object;
    static toVerticalOffsetProperty: Object;
    static allowDependentAnimations: Boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    toVerticalOffset: Number;
    toHorizontalOffset: Number;
    targetName: String;
    speedRatio: Number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: Number;
    autoReverse: Boolean;
    dispatcher: Object;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CommonNavigationTransitionInfo {
    static isStaggerElementProperty: Object;
    static isStaggeringEnabledProperty: Object;
    isStaggeringEnabled: Boolean;
    dispatcher: Object;
    constructor();

    static getIsStaggerElement(element: Object): Boolean;


    static setIsStaggerElement(element: Object, value: Boolean): void;


  }

  export class ContinuumNavigationTransitionInfo {
    static exitElementContainerProperty: Object;
    static exitElementProperty: Object;
    static isEntranceElementProperty: Object;
    static isExitElementProperty: Object;
    exitElement: Object;
    dispatcher: Object;
    constructor();

    static getIsEntranceElement(element: Object): Boolean;


    static setIsEntranceElement(element: Object, value: Boolean): void;


    static getIsExitElement(element: Object): Boolean;


    static setIsExitElement(element: Object, value: Boolean): void;


    static getExitElementContainer(element: Object): Boolean;


    static setExitElementContainer(element: Object, value: Boolean): void;


  }

  export class DrillInNavigationTransitionInfo {
    dispatcher: Object;
    constructor();

  }

  export class EntranceNavigationTransitionInfo {
    static isTargetElementProperty: Object;
    dispatcher: Object;
    constructor();

    static getIsTargetElement(element: Object): Boolean;


    static setIsTargetElement(element: Object, value: Boolean): void;


  }

  export class NavigationThemeTransition {
    static defaultNavigationTransitionInfoProperty: Object;
    defaultNavigationTransitionInfo: NavigationTransitionInfo;
    dispatcher: Object;
    constructor();

  }

  export class SlideNavigationTransitionInfo {
    dispatcher: Object;
    constructor();

  }

  export class SuppressNavigationTransitionInfo {
    dispatcher: Object;
    constructor();

  }

