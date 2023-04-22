  export class Color {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class SizeInt32 {
    width: number;
    height: number;
    constructor();
  }

  export class Vector2 {
    x: number;
    y: number;
    constructor();
  }

  export class Matrix3x2 {
    m11: number;
    m12: number;
    m21: number;
    m22: number;
    m31: number;
    m32: number;
    constructor();
  }

  export class Matrix4x4 {
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    m41: number;
    m42: number;
    m43: number;
    m44: number;
    constructor();
  }

  export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor();
  }

  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class Vector4 {
    x: number;
    y: number;
    z: number;
    w: number;
    constructor();
  }

  export class PointInt32 {
    x: number;
    y: number;
    constructor();
  }

  export class RectInt32 {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor();
  }

  export enum AnimationControllerProgressBehavior {
    default,
    includesDelayTime,
  }

  export enum AnimationDirection {
    normal,
    reverse,
    alternate,
    alternateReverse,
  }

  export enum AnimationIterationBehavior {
    count,
    forever,
  }

  export enum AnimationDelayBehavior {
    setInitialValueAfterDelay,
    setInitialValueBeforeDelay,
  }

  export enum AnimationStopBehavior {
    leaveCurrentValue,
    setToInitialValue,
    setToFinalValue,
  }

  export enum CompositionBatchTypes {
    none,
    animation,
    effect,
  }

  export enum CompositionBackfaceVisibility {
    inherit,
    visible,
    hidden,
  }

  export enum CompositionBitmapInterpolationMode {
    nearestNeighbor,
    linear,
  }

  export enum CompositionBorderMode {
    inherit,
    soft,
    hard,
  }

  export enum CompositionColorSpace {
    auto,
    hsl,
    rgb,
    hslLinear,
    rgbLinear,
  }

  export enum CompositionCompositeMode {
    inherit,
    sourceOver,
    destinationInvert,
    minBlend,
  }

  export enum CompositionDropShadowSourcePolicy {
    default,
    inheritFromVisualContent,
  }

  export enum CompositionEffectFactoryLoadStatus {
    success,
    effectTooComplex,
    pending,
    other,
  }

  export enum CompositionGetValueStatus {
    succeeded,
    typeMismatch,
    notFound,
  }

  export enum CompositionGradientExtendMode {
    clamp,
    wrap,
    mirror,
  }

  export enum CompositionStretch {
    none,
    fill,
    uniform,
    uniformToFill,
  }

  export enum CompositionStrokeCap {
    flat,
    square,
    round,
    triangle,
  }

  export enum CompositionStrokeLineJoin {
    miter,
    bevel,
    round,
    miterOrBevel,
  }

  export class CompositionObject {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    startAnimation(propertyName: string, animation: CompositionAnimation): void;

    stopAnimation(propertyName: string): void;

    close(): void;
    startAnimationGroup(value: ICompositionAnimationBase): void;

    stopAnimationGroup(value: ICompositionAnimationBase): void;

    tryGetAnimationController(propertyName: string): AnimationController;

  }

  export class InitialValueExpressionCollection {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    lookup(key: string): string;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: string): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

  }

  export class ICompositionAnimationBase {
    constructor();

  }

  export class CompositionCapabilities {
    constructor();

    static getForCurrentView(): CompositionCapabilities;


    areEffectsSupported(): boolean;

    areEffectsFast(): boolean;

    addListener(type: "Changed", listener: (ev: Event) => void): void ;
    removeListener(type: "Changed", listener: (ev: Event) => void): void ;
    on(type: "Changed", listener: (ev: Event) => void): void ;
    off(type: "Changed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CompositionColorGradientStop {
    offset: number;
    color: Object;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionBatchCompletedEventArgs {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionShapeCollection {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    getAt(index: number): CompositionShape;

    getView(): Object;

    indexOf(value: CompositionShape, index: number): boolean;

    setAt(index: number, value: CompositionShape): void;

    insertAt(index: number, value: CompositionShape): void;

    removeAt(index: number): void;

    append(value: CompositionShape): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class CompositionEasingFunction {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionBrush {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionEffectBrush {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    getSourceParameter(name: string): CompositionBrush;

    setSourceParameter(name: string, source: CompositionBrush): void;

  }

  export class CompositionEffectSourceParameter {
    name: string;
    constructor();
    constructor(name: string);

  }

  export class CompositionColorGradientStopCollection {
    constructor();

    getAt(index: number): CompositionColorGradientStop;

    getView(): Object;

    indexOf(value: CompositionColorGradientStop, index: number): boolean;

    setAt(index: number, value: CompositionColorGradientStop): void;

    insertAt(index: number, value: CompositionColorGradientStop): void;

    removeAt(index: number): void;

    append(value: CompositionColorGradientStop): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class CompositionGraphicsDevice {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    createDrawingSurface(sizePixels: Object, pixelFormat: number, alphaMode: number): CompositionDrawingSurface;

    createDrawingSurface2(sizePixels: SizeInt32, pixelFormat: number, alphaMode: number): CompositionDrawingSurface;

    createVirtualDrawingSurface(sizePixels: SizeInt32, pixelFormat: number, alphaMode: number): CompositionVirtualDrawingSurface;

    addListener(type: "RenderingDeviceReplaced", listener: (ev: Event) => void): void ;
    removeListener(type: "RenderingDeviceReplaced", listener: (ev: Event) => void): void ;
    on(type: "RenderingDeviceReplaced", listener: (ev: Event) => void): void ;
    off(type: "RenderingDeviceReplaced", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Compositor {
    static maxGlobalPlaybackRate: number;
    static minGlobalPlaybackRate: number;
    globalPlaybackRate: number;
    comment: string;
    constructor();

    requestCommitAsync(callback: (error: Error) => void): void ;

    createBounceVector2Animation(): BounceVector2NaturalMotionAnimation;

    createBounceVector3Animation(): BounceVector3NaturalMotionAnimation;

    createContainerShape(): CompositionContainerShape;

    createEllipseGeometry(): CompositionEllipseGeometry;

    createLineGeometry(): CompositionLineGeometry;

    createPathGeometry(): CompositionPathGeometry;
    createPathGeometry(path: CompositionPath): CompositionPathGeometry;

    createPathKeyFrameAnimation(): PathKeyFrameAnimation;

    createRectangleGeometry(): CompositionRectangleGeometry;

    createRoundedRectangleGeometry(): CompositionRoundedRectangleGeometry;

    createShapeVisual(): ShapeVisual;

    createSpriteShape(): CompositionSpriteShape;
    createSpriteShape(geometry: CompositionGeometry): CompositionSpriteShape;

    createViewBox(): CompositionViewBox;

    createColorKeyFrameAnimation(): ColorKeyFrameAnimation;

    createColorBrush(): CompositionColorBrush;
    createColorBrush(color: Object): CompositionColorBrush;

    createContainerVisual(): ContainerVisual;

    createCubicBezierEasingFunction(controlPoint1: Vector2, controlPoint2: Vector2): CubicBezierEasingFunction;

    createEffectFactory(graphicsEffect: Object): CompositionEffectFactory;
    createEffectFactory(graphicsEffect: Object, animatableProperties: Object): CompositionEffectFactory;

    createExpressionAnimation(): ExpressionAnimation;
    createExpressionAnimation(expression: string): ExpressionAnimation;

    createInsetClip(): InsetClip;
    createInsetClip(leftInset: number, topInset: number, rightInset: number, bottomInset: number): InsetClip;

    createLinearEasingFunction(): LinearEasingFunction;

    createPropertySet(): CompositionPropertySet;

    createQuaternionKeyFrameAnimation(): QuaternionKeyFrameAnimation;

    createScalarKeyFrameAnimation(): ScalarKeyFrameAnimation;

    createScopedBatch(batchType: CompositionBatchTypes): CompositionScopedBatch;

    createSpriteVisual(): SpriteVisual;

    createSurfaceBrush(): CompositionSurfaceBrush;
    createSurfaceBrush(surface: ICompositionSurface): CompositionSurfaceBrush;

    createTargetForCurrentView(): CompositionTarget;

    createVector2KeyFrameAnimation(): Vector2KeyFrameAnimation;

    createVector3KeyFrameAnimation(): Vector3KeyFrameAnimation;

    createVector4KeyFrameAnimation(): Vector4KeyFrameAnimation;

    getCommitBatch(batchType: CompositionBatchTypes): CompositionCommitBatch;

    close(): void;
    createAmbientLight(): AmbientLight;

    createAnimationGroup(): CompositionAnimationGroup;

    createBackdropBrush(): CompositionBackdropBrush;

    createDistantLight(): DistantLight;

    createDropShadow(): DropShadow;

    createImplicitAnimationCollection(): ImplicitAnimationCollection;

    createLayerVisual(): LayerVisual;

    createMaskBrush(): CompositionMaskBrush;

    createNineGridBrush(): CompositionNineGridBrush;

    createPointLight(): PointLight;

    createSpotLight(): SpotLight;

    createStepEasingFunction(): StepEasingFunction;
    createStepEasingFunction(stepCount: number): StepEasingFunction;

    createHostBackdropBrush(): CompositionBackdropBrush;

    createColorGradientStop(): CompositionColorGradientStop;
    createColorGradientStop(offset: number, color: Object): CompositionColorGradientStop;

    createLinearGradientBrush(): CompositionLinearGradientBrush;

    createSpringScalarAnimation(): SpringScalarNaturalMotionAnimation;

    createSpringVector2Animation(): SpringVector2NaturalMotionAnimation;

    createSpringVector3Animation(): SpringVector3NaturalMotionAnimation;

    createBounceScalarAnimation(): BounceScalarNaturalMotionAnimation;

  }

  export class AnimationController {
    static maxPlaybackRate: number;
    static minPlaybackRate: number;
    progressBehavior: AnimationControllerProgressBehavior;
    progress: number;
    playbackRate: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    pause(): void;

    resume(): void;

  }

  export class CompositionPath {
    constructor();
    constructor(source: Object);

  }

  export class CompositionPropertySet {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertColor(propertyName: string, value: Object): void;

    insertMatrix3x2(propertyName: string, value: Matrix3x2): void;

    insertMatrix4x4(propertyName: string, value: Matrix4x4): void;

    insertQuaternion(propertyName: string, value: Quaternion): void;

    insertScalar(propertyName: string, value: number): void;

    insertVector2(propertyName: string, value: Vector2): void;

    insertVector3(propertyName: string, value: Vector3): void;

    insertVector4(propertyName: string, value: Vector4): void;

    tryGetColor(propertyName: string, value: Object): CompositionGetValueStatus;

    tryGetMatrix3x2(propertyName: string, value: Matrix3x2): CompositionGetValueStatus;

    tryGetMatrix4x4(propertyName: string, value: Matrix4x4): CompositionGetValueStatus;

    tryGetQuaternion(propertyName: string, value: Quaternion): CompositionGetValueStatus;

    tryGetScalar(propertyName: string, value: number): CompositionGetValueStatus;

    tryGetVector2(propertyName: string, value: Vector2): CompositionGetValueStatus;

    tryGetVector3(propertyName: string, value: Vector3): CompositionGetValueStatus;

    tryGetVector4(propertyName: string, value: Vector4): CompositionGetValueStatus;

    insertBoolean(propertyName: string, value: boolean): void;

    tryGetBoolean(propertyName: string, value: boolean): CompositionGetValueStatus;

  }

  export class CompositionGeometry {
    trimStart: number;
    trimOffset: number;
    trimEnd: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionStrokeDashArray {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    getAt(index: number): number;

    getView(): Object;

    indexOf(value: number, index: number): boolean;

    setAt(index: number, value: number): void;

    insertAt(index: number, value: number): void;

    removeAt(index: number): void;

    append(value: number): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<number>): void;

    first(): Object;

  }

  export class ICompositionSurface {
    constructor();

  }

  export class CompositionDrawingSurface {
    alphaMode: number;
    pixelFormat: number;
    size: Object;
    sizeInt32: SizeInt32;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    resize(sizePixels: SizeInt32): void;

    scroll(offset: PointInt32): void;
    scroll(offset: PointInt32, scrollRect: RectInt32): void;

    scrollWithClip(offset: PointInt32, clipRect: RectInt32): void;
    scrollWithClip(offset: PointInt32, clipRect: RectInt32, scrollRect: RectInt32): void;

  }

  export class CompositionVirtualDrawingSurface {
    alphaMode: number;
    pixelFormat: number;
    size: Object;
    sizeInt32: SizeInt32;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    trim(rects: Array<RectInt32>): void;

  }

  export class CompositionColorBrush {
    color: Object;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionEffectFactory {
    extendedError: number;
    loadStatus: CompositionEffectFactoryLoadStatus;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    createBrush(): CompositionEffectBrush;

  }

  export class CompositionScopedBatch {
    isActive: boolean;
    isEnded: boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    end(): void;

    resume(): void;

    suspend(): void;

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class CompositionSurfaceBrush {
    verticalAlignmentRatio: number;
    surface: ICompositionSurface;
    stretch: CompositionStretch;
    horizontalAlignmentRatio: number;
    bitmapInterpolationMode: CompositionBitmapInterpolationMode;
    anchorPoint: Vector2;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionTarget {
    root: Visual;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionCommitBatch {
    isActive: boolean;
    isEnded: boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
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

  export class CompositionAnimationGroup {
    count: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    add(value: CompositionAnimation): void;

    remove(value: CompositionAnimation): void;

    removeAll(): void;

    first(): Object;

  }

  export class CompositionBackdropBrush {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionMaskBrush {
    source: CompositionBrush;
    mask: CompositionBrush;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionNineGridBrush {
    topInsetScale: number;
    topInset: number;
    source: CompositionBrush;
    rightInsetScale: number;
    rightInset: number;
    leftInsetScale: number;
    leftInset: number;
    isCenterHollow: boolean;
    bottomInsetScale: number;
    bottomInset: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    setInsets(inset: number): void;
    setInsets(left: number, top: number, right: number, bottom: number): void;

    setInsetScales(scale: number): void;
    setInsetScales(left: number, top: number, right: number, bottom: number): void;

  }

  export class CompositionEllipseGeometry {
    radius: Vector2;
    center: Vector2;
    trimStart: number;
    trimOffset: number;
    trimEnd: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionLineGeometry {
    start: Vector2;
    end: Vector2;
    trimStart: number;
    trimOffset: number;
    trimEnd: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionPathGeometry {
    path: CompositionPath;
    trimStart: number;
    trimOffset: number;
    trimEnd: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionRectangleGeometry {
    size: Vector2;
    offset: Vector2;
    trimStart: number;
    trimOffset: number;
    trimEnd: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionRoundedRectangleGeometry {
    size: Vector2;
    offset: Vector2;
    cornerRadius: Vector2;
    trimStart: number;
    trimOffset: number;
    trimEnd: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionViewBox {
    verticalAlignmentRatio: number;
    stretch: CompositionStretch;
    size: Vector2;
    offset: Vector2;
    horizontalAlignmentRatio: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CubicBezierEasingFunction {
    controlPoint1: Vector2;
    controlPoint2: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class ImplicitAnimationCollection {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    lookup(key: string): ICompositionAnimationBase;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: ICompositionAnimationBase): boolean;

    remove(key: string): void;

    clear(): void;

    first(): Object;

  }

  export class CompositionShadow {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class DropShadow {
    opacity: number;
    offset: Vector3;
    mask: CompositionBrush;
    color: Object;
    blurRadius: number;
    sourcePolicy: CompositionDropShadowSourcePolicy;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class LinearEasingFunction {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class RenderingDeviceReplacedEventArgs {
    graphicsDevice: CompositionGraphicsDevice;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class StepEasingFunction {
    stepCount: number;
    isInitialStepSingleFrame: boolean;
    isFinalStepSingleFrame: boolean;
    initialStep: number;
    finalStep: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionClip {
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    centerPoint: Vector2;
    anchorPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class InsetClip {
    topInset: number;
    rightInset: number;
    leftInset: number;
    bottomInset: number;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    centerPoint: Vector2;
    anchorPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class VisualCollection {
    count: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertAbove(newChild: Visual, sibling: Visual): void;

    insertAtBottom(newChild: Visual): void;

    insertAtTop(newChild: Visual): void;

    insertBelow(newChild: Visual, sibling: Visual): void;

    remove(child: Visual): void;

    removeAll(): void;

    first(): Object;

  }

  export class VisualUnorderedCollection {
    count: number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    add(newVisual: Visual): void;

    remove(visual: Visual): void;

    removeAll(): void;

    first(): Object;

  }

  export class CompositionAnimation {
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    clearAllParameters(): void;

    clearParameter(key: string): void;

    setColorParameter(key: string, value: Object): void;

    setMatrix3x2Parameter(key: string, value: Matrix3x2): void;

    setMatrix4x4Parameter(key: string, value: Matrix4x4): void;

    setQuaternionParameter(key: string, value: Quaternion): void;

    setReferenceParameter(key: string, compositionObject: CompositionObject): void;

    setScalarParameter(key: string, value: number): void;

    setVector2Parameter(key: string, value: Vector2): void;

    setVector3Parameter(key: string, value: Vector3): void;

    setVector4Parameter(key: string, value: Vector4): void;

    setBooleanParameter(key: string, value: boolean): void;

  }

  export class ExpressionAnimation {
    expression: string;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class Visual {
    orientation: Quaternion;
    opacity: number;
    isVisible: boolean;
    compositeMode: CompositionCompositeMode;
    centerPoint: Vector3;
    borderMode: CompositionBorderMode;
    offset: Vector3;
    backfaceVisibility: CompositionBackfaceVisibility;
    anchorPoint: Vector2;
    clip: CompositionClip;
    transformMatrix: Matrix4x4;
    size: Vector2;
    scale: Vector3;
    rotationAxis: Vector3;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class ContainerVisual {
    children: VisualCollection;
    orientation: Quaternion;
    opacity: number;
    isVisible: boolean;
    compositeMode: CompositionCompositeMode;
    centerPoint: Vector3;
    borderMode: CompositionBorderMode;
    offset: Vector3;
    backfaceVisibility: CompositionBackfaceVisibility;
    anchorPoint: Vector2;
    clip: CompositionClip;
    transformMatrix: Matrix4x4;
    size: Vector2;
    scale: Vector3;
    rotationAxis: Vector3;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpriteVisual {
    brush: CompositionBrush;
    shadow: CompositionShadow;
    children: VisualCollection;
    orientation: Quaternion;
    opacity: number;
    isVisible: boolean;
    compositeMode: CompositionCompositeMode;
    centerPoint: Vector3;
    borderMode: CompositionBorderMode;
    offset: Vector3;
    backfaceVisibility: CompositionBackfaceVisibility;
    anchorPoint: Vector2;
    clip: CompositionClip;
    transformMatrix: Matrix4x4;
    size: Vector2;
    scale: Vector3;
    rotationAxis: Vector3;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class LayerVisual {
    effect: CompositionEffectBrush;
    shadow: CompositionShadow;
    children: VisualCollection;
    orientation: Quaternion;
    opacity: number;
    isVisible: boolean;
    compositeMode: CompositionCompositeMode;
    centerPoint: Vector3;
    borderMode: CompositionBorderMode;
    offset: Vector3;
    backfaceVisibility: CompositionBackfaceVisibility;
    anchorPoint: Vector2;
    clip: CompositionClip;
    transformMatrix: Matrix4x4;
    size: Vector2;
    scale: Vector3;
    rotationAxis: Vector3;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class ShapeVisual {
    viewBox: CompositionViewBox;
    shapes: CompositionShapeCollection;
    children: VisualCollection;
    orientation: Quaternion;
    opacity: number;
    isVisible: boolean;
    compositeMode: CompositionCompositeMode;
    centerPoint: Vector3;
    borderMode: CompositionBorderMode;
    offset: Vector3;
    backfaceVisibility: CompositionBackfaceVisibility;
    anchorPoint: Vector2;
    clip: CompositionClip;
    transformMatrix: Matrix4x4;
    size: Vector2;
    scale: Vector3;
    rotationAxis: Vector3;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionLight {
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class AmbientLight {
    color: Object;
    intensity: number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class DistantLight {
    direction: Vector3;
    coordinateSpace: Visual;
    color: Object;
    intensity: number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class PointLight {
    quadraticAttenuation: number;
    offset: Vector3;
    linearAttenuation: number;
    coordinateSpace: Visual;
    constantAttenuation: number;
    color: Object;
    intensity: number;
    minAttenuationCutoff: number;
    maxAttenuationCutoff: number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpotLight {
    offset: Vector3;
    linearAttenuation: number;
    innerConeColor: Object;
    innerConeAngleInDegrees: number;
    innerConeAngle: number;
    direction: Vector3;
    coordinateSpace: Visual;
    constantAttenuation: number;
    quadraticAttenuation: number;
    outerConeColor: Object;
    outerConeAngleInDegrees: number;
    outerConeAngle: number;
    outerConeIntensity: number;
    innerConeIntensity: number;
    minAttenuationCutoff: number;
    maxAttenuationCutoff: number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionGradientBrush {
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    interpolationSpace: CompositionColorSpace;
    extendMode: CompositionGradientExtendMode;
    centerPoint: Vector2;
    anchorPoint: Vector2;
    colorStops: CompositionColorGradientStopCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionLinearGradientBrush {
    startPoint: Vector2;
    endPoint: Vector2;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    interpolationSpace: CompositionColorSpace;
    extendMode: CompositionGradientExtendMode;
    centerPoint: Vector2;
    anchorPoint: Vector2;
    colorStops: CompositionColorGradientStopCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionShape {
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionContainerShape {
    shapes: CompositionShapeCollection;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionSpriteShape {
    strokeDashCap: CompositionStrokeCap;
    strokeBrush: CompositionBrush;
    isStrokeNonScaling: boolean;
    geometry: CompositionGeometry;
    fillBrush: CompositionBrush;
    strokeThickness: number;
    strokeStartCap: CompositionStrokeCap;
    strokeMiterLimit: number;
    strokeLineJoin: CompositionStrokeLineJoin;
    strokeEndCap: CompositionStrokeCap;
    strokeDashOffset: number;
    strokeDashArray: CompositionStrokeDashArray;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: number;
    rotationAngle: number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertExpressionKeyFrame(normalizedProgressKey: number, value: string): void;
    insertExpressionKeyFrame(normalizedProgressKey: number, value: string, easingFunction: CompositionEasingFunction): void;

  }

  export class ColorKeyFrameAnimation {
    interpolationColorSpace: CompositionColorSpace;
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: number, value: Object): void;
    insertKeyFrame(normalizedProgressKey: number, value: Object, easingFunction: CompositionEasingFunction): void;

  }

  export class QuaternionKeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: number, value: Quaternion): void;
    insertKeyFrame(normalizedProgressKey: number, value: Quaternion, easingFunction: CompositionEasingFunction): void;

  }

  export class ScalarKeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: number, value: number): void;
    insertKeyFrame(normalizedProgressKey: number, value: number, easingFunction: CompositionEasingFunction): void;

  }

  export class Vector2KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: number, value: Vector2): void;
    insertKeyFrame(normalizedProgressKey: number, value: Vector2, easingFunction: CompositionEasingFunction): void;

  }

  export class Vector3KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: number, value: Vector3): void;
    insertKeyFrame(normalizedProgressKey: number, value: Vector3, easingFunction: CompositionEasingFunction): void;

  }

  export class Vector4KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: number, value: Vector4): void;
    insertKeyFrame(normalizedProgressKey: number, value: Vector4, easingFunction: CompositionEasingFunction): void;

  }

  export class PathKeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: number;
    iterationBehavior: AnimationIterationBehavior;
    duration: number;
    delayTime: number;
    keyFrameCount: number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: number, path: CompositionPath): void;
    insertKeyFrame(normalizedProgressKey: number, path: CompositionPath, easingFunction: CompositionEasingFunction): void;

  }

  export class NaturalMotionAnimation {
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class ScalarNaturalMotionAnimation {
    initialVelocity: number;
    initialValue: number;
    finalValue: number;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpringScalarNaturalMotionAnimation {
    period: number;
    dampingRatio: number;
    initialVelocity: number;
    initialValue: number;
    finalValue: number;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class BounceScalarNaturalMotionAnimation {
    restitution: number;
    acceleration: number;
    initialVelocity: number;
    initialValue: number;
    finalValue: number;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class Vector2NaturalMotionAnimation {
    initialVelocity: Vector2;
    initialValue: Vector2;
    finalValue: Vector2;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpringVector2NaturalMotionAnimation {
    period: number;
    dampingRatio: number;
    initialVelocity: Vector2;
    initialValue: Vector2;
    finalValue: Vector2;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class BounceVector2NaturalMotionAnimation {
    restitution: number;
    acceleration: number;
    initialVelocity: Vector2;
    initialValue: Vector2;
    finalValue: Vector2;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class Vector3NaturalMotionAnimation {
    initialVelocity: Vector3;
    initialValue: Vector3;
    finalValue: Vector3;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpringVector3NaturalMotionAnimation {
    period: number;
    dampingRatio: number;
    initialVelocity: Vector3;
    initialValue: Vector3;
    finalValue: Vector3;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

  export class BounceVector3NaturalMotionAnimation {
    restitution: number;
    acceleration: number;
    initialVelocity: Vector3;
    initialValue: Vector3;
    finalValue: Vector3;
    stopBehavior: AnimationStopBehavior;
    delayTime: number;
    delayBehavior: AnimationDelayBehavior;
    target: string;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: string;
    dispatcherQueue: Object;
    constructor();

  }

export * as core from "./ui.composition.core.js";
export * as desktop from "./ui.composition.desktop.js";
export * as diagnostics from "./ui.composition.diagnostics.js";
export * as effects from "./ui.composition.effects.js";
export * as interactions from "./ui.composition.interactions.js";