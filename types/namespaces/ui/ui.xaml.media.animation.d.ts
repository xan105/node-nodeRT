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

    getAt(index: number): Transition;

    getView(): Object;

    indexOf(value: Transition, index: number): boolean;

    setAt(index: number, value: Transition): void;

    insertAt(index: number, value: Transition): void;

    removeAt(index: number): void;

    append(value: Transition): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class DoubleKeyFrameCollection {
    constructor();

    getAt(index: number): DoubleKeyFrame;

    getView(): Object;

    indexOf(value: DoubleKeyFrame, index: number): boolean;

    setAt(index: number, value: DoubleKeyFrame): void;

    insertAt(index: number, value: DoubleKeyFrame): void;

    removeAt(index: number): void;

    append(value: DoubleKeyFrame): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class ObjectKeyFrameCollection {
    constructor();

    getAt(index: number): ObjectKeyFrame;

    getView(): Object;

    indexOf(value: ObjectKeyFrame, index: number): boolean;

    setAt(index: number, value: ObjectKeyFrame): void;

    insertAt(index: number, value: ObjectKeyFrame): void;

    removeAt(index: number): void;

    append(value: ObjectKeyFrame): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class TimelineCollection {
    constructor();

    getAt(index: number): Timeline;

    getView(): Object;

    indexOf(value: Timeline, index: number): boolean;

    setAt(index: number, value: Timeline): void;

    insertAt(index: number, value: Timeline): void;

    removeAt(index: number): void;

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
    value: number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class EasingFunctionBase {
    static easingModeProperty: Object;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

    ease(normalizedTime: number): number;

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

    getNavigationStateCore(): string;

    setNavigationStateCore(navigationState: string): void;

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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    amplitude: number;
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
    bounciness: number;
    bounces: number;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    to: Object;
    from: Object;
    enableDependentAnimation: boolean;
    easingFunction: EasingFunctionBase;
    by: Object;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    verticalOffset: number;
    horizontalOffset: number;
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
    value: number;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    to: number;
    from: number;
    enableDependentAnimation: boolean;
    easingFunction: EasingFunctionBase;
    by: number;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: boolean;
    keyFrames: DoubleKeyFrameCollection;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    value: number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class EdgeUIThemeTransition {
    static edgeProperty: Object;
    edge: number;
    dispatcher: Object;
    constructor();

  }

  export class ElasticEase {
    static oscillationsProperty: Object;
    static springinessProperty: Object;
    static easingModeProperty: Object;
    springiness: number;
    oscillations: number;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class EntranceThemeTransition {
    static fromHorizontalOffsetProperty: Object;
    static fromVerticalOffsetProperty: Object;
    static isStaggeringEnabledProperty: Object;
    isStaggeringEnabled: boolean;
    fromVerticalOffset: number;
    fromHorizontalOffset: number;
    dispatcher: Object;
    constructor();

  }

  export class ExponentialEase {
    static exponentProperty: Object;
    static easingModeProperty: Object;
    exponent: number;
    easingMode: EasingMode;
    dispatcher: Object;
    constructor();

  }

  export class LinearDoubleKeyFrame {
    static keyTimeProperty: Object;
    static valueProperty: Object;
    value: number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class ObjectAnimationUsingKeyFrames {
    static enableDependentAnimationProperty: Object;
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: boolean;
    keyFrames: ObjectKeyFrameCollection;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    edge: number;
    dispatcher: Object;
    constructor();

  }

  export class PointAnimation {
    static byProperty: Object;
    static easingFunctionProperty: Object;
    static enableDependentAnimationProperty: Object;
    static fromProperty: Object;
    static toProperty: Object;
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    to: Object;
    from: Object;
    enableDependentAnimation: boolean;
    easingFunction: EasingFunctionBase;
    by: Object;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    fromVerticalOffset: number;
    fromHorizontalOffset: number;
    dispatcher: Object;
    constructor();

  }

  export class PowerEase {
    static powerProperty: Object;
    static easingModeProperty: Object;
    power: number;
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
    isStaggeringEnabled: boolean;
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
    value: number;
    keyTime: KeyTime;
    dispatcher: Object;
    constructor();

  }

  export class Storyboard {
    static targetNameProperty: Object;
    static targetPropertyProperty: Object;
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    children: TimelineCollection;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
    dispatcher: Object;
    constructor();

    static getTargetProperty(element: Timeline): string;


    static setTargetProperty(element: Timeline, path: string): void;


    static getTargetName(element: Timeline): string;


    static setTargetName(element: Timeline, name: string): void;


    static setTarget(timeline: Timeline, target: Object): void;


    seek(offset: number): void;

    stop(): void;

    begin(): void;

    pause(): void;

    resume(): void;

    getCurrentState(): ClockState;

    getCurrentTime(): number;

    seekAlignedToLastTick(offset: number): void;

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

    getAt(index: number): ColorKeyFrame;

    getView(): Object;

    indexOf(value: ColorKeyFrame, index: number): boolean;

    setAt(index: number, value: ColorKeyFrame): void;

    insertAt(index: number, value: ColorKeyFrame): void;

    removeAt(index: number): void;

    append(value: ColorKeyFrame): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class ConnectedAnimation {
    isScaleAnimationEnabled: boolean;
    constructor();

    tryStart(destination: Object): boolean;
    tryStart(destination: Object, coordinatedElements: Object): boolean;

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
    defaultDuration: number;
    constructor();

    static getForCurrentView(): ConnectedAnimationService;


    prepareToAnimate(key: string, source: Object): ConnectedAnimation;

    getAnimation(key: string): ConnectedAnimation;

  }

  export class PointKeyFrameCollection {
    constructor();

    getAt(index: number): PointKeyFrame;

    getView(): Object;

    indexOf(value: PointKeyFrame, index: number): boolean;

    setAt(index: number, value: PointKeyFrame): void;

    insertAt(index: number, value: PointKeyFrame): void;

    removeAt(index: number): void;

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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: boolean;
    keyFrames: ColorKeyFrameCollection;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    toOffset: number;
    targetName: string;
    direction: number;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    exitTargetName: string;
    exitTarget: Object;
    entranceTargetName: string;
    entranceTarget: Object;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    exitTargetName: string;
    exitTarget: Object;
    entranceTargetName: string;
    entranceTarget: Object;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    enableDependentAnimation: boolean;
    keyFrames: PointKeyFrameCollection;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    fromVerticalOffset: number;
    fromHorizontalOffset: number;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    fromVerticalOffset: number;
    fromHorizontalOffset: number;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    contentTargetName: string;
    contentTarget: Object;
    closedTargetName: string;
    closedTarget: Object;
    closedLength: number;
    openedTargetName: string;
    openedTarget: Object;
    openedLength: number;
    offsetFromCenter: number;
    contentTranslationOffset: number;
    contentTranslationDirection: number;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    contentTargetName: string;
    contentTarget: Object;
    closedTargetName: string;
    closedTarget: Object;
    closedLength: number;
    openedTargetName: string;
    openedTarget: Object;
    openedLength: number;
    offsetFromCenter: number;
    contentTranslationOffset: number;
    contentTranslationDirection: number;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    targetName: string;
    fromVerticalOffset: number;
    fromHorizontalOffset: number;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    static allowDependentAnimations: boolean;
    static autoReverseProperty: Object;
    static beginTimeProperty: Object;
    static durationProperty: Object;
    static fillBehaviorProperty: Object;
    static repeatBehaviorProperty: Object;
    static speedRatioProperty: Object;
    toVerticalOffset: number;
    toHorizontalOffset: number;
    targetName: string;
    speedRatio: number;
    repeatBehavior: RepeatBehavior;
    fillBehavior: FillBehavior;
    duration: Duration;
    beginTime: number;
    autoReverse: boolean;
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
    isStaggeringEnabled: boolean;
    dispatcher: Object;
    constructor();

    static getIsStaggerElement(element: Object): boolean;


    static setIsStaggerElement(element: Object, value: boolean): void;


  }

  export class ContinuumNavigationTransitionInfo {
    static exitElementContainerProperty: Object;
    static exitElementProperty: Object;
    static isEntranceElementProperty: Object;
    static isExitElementProperty: Object;
    exitElement: Object;
    dispatcher: Object;
    constructor();

    static getIsEntranceElement(element: Object): boolean;


    static setIsEntranceElement(element: Object, value: boolean): void;


    static getIsExitElement(element: Object): boolean;


    static setIsExitElement(element: Object, value: boolean): void;


    static getExitElementContainer(element: Object): boolean;


    static setExitElementContainer(element: Object, value: boolean): void;


  }

  export class DrillInNavigationTransitionInfo {
    dispatcher: Object;
    constructor();

  }

  export class EntranceNavigationTransitionInfo {
    static isTargetElementProperty: Object;
    dispatcher: Object;
    constructor();

    static getIsTargetElement(element: Object): boolean;


    static setIsTargetElement(element: Object, value: boolean): void;


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

