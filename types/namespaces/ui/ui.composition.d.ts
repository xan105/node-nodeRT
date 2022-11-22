  export class Color {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class SizeInt32 {
    width: Number;
    height: Number;
    constructor();
  }

  export class Vector2 {
    x: Number;
    y: Number;
    constructor();
  }

  export class Matrix3x2 {
    m11: Number;
    m12: Number;
    m21: Number;
    m22: Number;
    m31: Number;
    m32: Number;
    constructor();
  }

  export class Matrix4x4 {
    m11: Number;
    m12: Number;
    m13: Number;
    m14: Number;
    m21: Number;
    m22: Number;
    m23: Number;
    m24: Number;
    m31: Number;
    m32: Number;
    m33: Number;
    m34: Number;
    m41: Number;
    m42: Number;
    m43: Number;
    m44: Number;
    constructor();
  }

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Vector4 {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export class PointInt32 {
    x: Number;
    y: Number;
    constructor();
  }

  export class RectInt32 {
    x: Number;
    y: Number;
    width: Number;
    height: Number;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

    startAnimation(propertyName: String, animation: CompositionAnimation): void;

    stopAnimation(propertyName: String): void;

    close(): void;
    startAnimationGroup(value: ICompositionAnimationBase): void;

    stopAnimationGroup(value: ICompositionAnimationBase): void;

    tryGetAnimationController(propertyName: String): AnimationController;

  }

  export class InitialValueExpressionCollection {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    lookup(key: String): String;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: String): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class ICompositionAnimationBase {
    constructor();

  }

  export class CompositionCapabilities {
    constructor();

    static getForCurrentView(): CompositionCapabilities;


    areEffectsSupported(): Boolean;

    areEffectsFast(): Boolean;

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
    offset: Number;
    color: Object;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionBatchCompletedEventArgs {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionShapeCollection {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    getAt(index: Number): CompositionShape;

    getView(): Object;

    indexOf(value: CompositionShape, index: Number): Boolean;

    setAt(index: Number, value: CompositionShape): void;

    insertAt(index: Number, value: CompositionShape): void;

    removeAt(index: Number): void;

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
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionBrush {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionEffectBrush {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    getSourceParameter(name: String): CompositionBrush;

    setSourceParameter(name: String, source: CompositionBrush): void;

  }

  export class CompositionEffectSourceParameter {
    name: String;
    constructor();
    constructor(name: String);

  }

  export class CompositionColorGradientStopCollection {
    constructor();

    getAt(index: Number): CompositionColorGradientStop;

    getView(): Object;

    indexOf(value: CompositionColorGradientStop, index: Number): Boolean;

    setAt(index: Number, value: CompositionColorGradientStop): void;

    insertAt(index: Number, value: CompositionColorGradientStop): void;

    removeAt(index: Number): void;

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
    comment: String;
    dispatcherQueue: Object;
    constructor();

    createDrawingSurface(sizePixels: Object, pixelFormat: Number, alphaMode: Number): CompositionDrawingSurface;

    createDrawingSurface2(sizePixels: SizeInt32, pixelFormat: Number, alphaMode: Number): CompositionDrawingSurface;

    createVirtualDrawingSurface(sizePixels: SizeInt32, pixelFormat: Number, alphaMode: Number): CompositionVirtualDrawingSurface;

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
    static maxGlobalPlaybackRate: Number;
    static minGlobalPlaybackRate: Number;
    globalPlaybackRate: Number;
    comment: String;
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
    createExpressionAnimation(expression: String): ExpressionAnimation;

    createInsetClip(): InsetClip;
    createInsetClip(leftInset: Number, topInset: Number, rightInset: Number, bottomInset: Number): InsetClip;

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
    createStepEasingFunction(stepCount: Number): StepEasingFunction;

    createHostBackdropBrush(): CompositionBackdropBrush;

    createColorGradientStop(): CompositionColorGradientStop;
    createColorGradientStop(offset: Number, color: Object): CompositionColorGradientStop;

    createLinearGradientBrush(): CompositionLinearGradientBrush;

    createSpringScalarAnimation(): SpringScalarNaturalMotionAnimation;

    createSpringVector2Animation(): SpringVector2NaturalMotionAnimation;

    createSpringVector3Animation(): SpringVector3NaturalMotionAnimation;

    createBounceScalarAnimation(): BounceScalarNaturalMotionAnimation;

  }

  export class AnimationController {
    static maxPlaybackRate: Number;
    static minPlaybackRate: Number;
    progressBehavior: AnimationControllerProgressBehavior;
    progress: Number;
    playbackRate: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertColor(propertyName: String, value: Object): void;

    insertMatrix3x2(propertyName: String, value: Matrix3x2): void;

    insertMatrix4x4(propertyName: String, value: Matrix4x4): void;

    insertQuaternion(propertyName: String, value: Quaternion): void;

    insertScalar(propertyName: String, value: Number): void;

    insertVector2(propertyName: String, value: Vector2): void;

    insertVector3(propertyName: String, value: Vector3): void;

    insertVector4(propertyName: String, value: Vector4): void;

    tryGetColor(propertyName: String, value: Object): CompositionGetValueStatus;

    tryGetMatrix3x2(propertyName: String, value: Matrix3x2): CompositionGetValueStatus;

    tryGetMatrix4x4(propertyName: String, value: Matrix4x4): CompositionGetValueStatus;

    tryGetQuaternion(propertyName: String, value: Quaternion): CompositionGetValueStatus;

    tryGetScalar(propertyName: String, value: Number): CompositionGetValueStatus;

    tryGetVector2(propertyName: String, value: Vector2): CompositionGetValueStatus;

    tryGetVector3(propertyName: String, value: Vector3): CompositionGetValueStatus;

    tryGetVector4(propertyName: String, value: Vector4): CompositionGetValueStatus;

    insertBoolean(propertyName: String, value: Boolean): void;

    tryGetBoolean(propertyName: String, value: Boolean): CompositionGetValueStatus;

  }

  export class CompositionGeometry {
    trimStart: Number;
    trimOffset: Number;
    trimEnd: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionStrokeDashArray {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    getAt(index: Number): Number;

    getView(): Object;

    indexOf(value: Number, index: Number): Boolean;

    setAt(index: Number, value: Number): void;

    insertAt(index: Number, value: Number): void;

    removeAt(index: Number): void;

    append(value: Number): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Number>): void;

    first(): Object;

  }

  export class ICompositionSurface {
    constructor();

  }

  export class CompositionDrawingSurface {
    alphaMode: Number;
    pixelFormat: Number;
    size: Object;
    sizeInt32: SizeInt32;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    resize(sizePixels: SizeInt32): void;

    scroll(offset: PointInt32): void;
    scroll(offset: PointInt32, scrollRect: RectInt32): void;

    scrollWithClip(offset: PointInt32, clipRect: RectInt32): void;
    scrollWithClip(offset: PointInt32, clipRect: RectInt32, scrollRect: RectInt32): void;

  }

  export class CompositionVirtualDrawingSurface {
    alphaMode: Number;
    pixelFormat: Number;
    size: Object;
    sizeInt32: SizeInt32;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionEffectFactory {
    extendedError: Number;
    loadStatus: CompositionEffectFactoryLoadStatus;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    createBrush(): CompositionEffectBrush;

  }

  export class CompositionScopedBatch {
    isActive: Boolean;
    isEnded: Boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
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
    verticalAlignmentRatio: Number;
    surface: ICompositionSurface;
    stretch: CompositionStretch;
    horizontalAlignmentRatio: Number;
    bitmapInterpolationMode: CompositionBitmapInterpolationMode;
    anchorPoint: Vector2;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionTarget {
    root: Visual;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionCommitBatch {
    isActive: Boolean;
    isEnded: Boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
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
    count: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
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
    comment: String;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionNineGridBrush {
    topInsetScale: Number;
    topInset: Number;
    source: CompositionBrush;
    rightInsetScale: Number;
    rightInset: Number;
    leftInsetScale: Number;
    leftInset: Number;
    isCenterHollow: Boolean;
    bottomInsetScale: Number;
    bottomInset: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    setInsets(inset: Number): void;
    setInsets(left: Number, top: Number, right: Number, bottom: Number): void;

    setInsetScales(scale: Number): void;
    setInsetScales(left: Number, top: Number, right: Number, bottom: Number): void;

  }

  export class CompositionEllipseGeometry {
    radius: Vector2;
    center: Vector2;
    trimStart: Number;
    trimOffset: Number;
    trimEnd: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionLineGeometry {
    start: Vector2;
    end: Vector2;
    trimStart: Number;
    trimOffset: Number;
    trimEnd: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionPathGeometry {
    path: CompositionPath;
    trimStart: Number;
    trimOffset: Number;
    trimEnd: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionRectangleGeometry {
    size: Vector2;
    offset: Vector2;
    trimStart: Number;
    trimOffset: Number;
    trimEnd: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionRoundedRectangleGeometry {
    size: Vector2;
    offset: Vector2;
    cornerRadius: Vector2;
    trimStart: Number;
    trimOffset: Number;
    trimEnd: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionViewBox {
    verticalAlignmentRatio: Number;
    stretch: CompositionStretch;
    size: Vector2;
    offset: Vector2;
    horizontalAlignmentRatio: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class ImplicitAnimationCollection {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    lookup(key: String): ICompositionAnimationBase;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: ICompositionAnimationBase): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class CompositionShadow {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class DropShadow {
    opacity: Number;
    offset: Vector3;
    mask: CompositionBrush;
    color: Object;
    blurRadius: Number;
    sourcePolicy: CompositionDropShadowSourcePolicy;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class LinearEasingFunction {
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class RenderingDeviceReplacedEventArgs {
    graphicsDevice: CompositionGraphicsDevice;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class StepEasingFunction {
    stepCount: Number;
    isInitialStepSingleFrame: Boolean;
    isFinalStepSingleFrame: Boolean;
    initialStep: Number;
    finalStep: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionClip {
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    offset: Vector2;
    centerPoint: Vector2;
    anchorPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class InsetClip {
    topInset: Number;
    rightInset: Number;
    leftInset: Number;
    bottomInset: Number;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    offset: Vector2;
    centerPoint: Vector2;
    anchorPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class VisualCollection {
    count: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
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
    count: Number;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    add(newVisual: Visual): void;

    remove(visual: Visual): void;

    removeAll(): void;

    first(): Object;

  }

  export class CompositionAnimation {
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    clearAllParameters(): void;

    clearParameter(key: String): void;

    setColorParameter(key: String, value: Object): void;

    setMatrix3x2Parameter(key: String, value: Matrix3x2): void;

    setMatrix4x4Parameter(key: String, value: Matrix4x4): void;

    setQuaternionParameter(key: String, value: Quaternion): void;

    setReferenceParameter(key: String, compositionObject: CompositionObject): void;

    setScalarParameter(key: String, value: Number): void;

    setVector2Parameter(key: String, value: Vector2): void;

    setVector3Parameter(key: String, value: Vector3): void;

    setVector4Parameter(key: String, value: Vector4): void;

    setBooleanParameter(key: String, value: Boolean): void;

  }

  export class ExpressionAnimation {
    expression: String;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class Visual {
    orientation: Quaternion;
    opacity: Number;
    isVisible: Boolean;
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
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class ContainerVisual {
    children: VisualCollection;
    orientation: Quaternion;
    opacity: Number;
    isVisible: Boolean;
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
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpriteVisual {
    brush: CompositionBrush;
    shadow: CompositionShadow;
    children: VisualCollection;
    orientation: Quaternion;
    opacity: Number;
    isVisible: Boolean;
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
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class LayerVisual {
    effect: CompositionEffectBrush;
    shadow: CompositionShadow;
    children: VisualCollection;
    orientation: Quaternion;
    opacity: Number;
    isVisible: Boolean;
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
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class ShapeVisual {
    viewBox: CompositionViewBox;
    shapes: CompositionShapeCollection;
    children: VisualCollection;
    orientation: Quaternion;
    opacity: Number;
    isVisible: Boolean;
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
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    parent: ContainerVisual;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Visual;
    relativeSizeAdjustment: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionLight {
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: Boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class AmbientLight {
    color: Object;
    intensity: Number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: Boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class DistantLight {
    direction: Vector3;
    coordinateSpace: Visual;
    color: Object;
    intensity: Number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: Boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class PointLight {
    quadraticAttenuation: Number;
    offset: Vector3;
    linearAttenuation: Number;
    coordinateSpace: Visual;
    constantAttenuation: Number;
    color: Object;
    intensity: Number;
    minAttenuationCutoff: Number;
    maxAttenuationCutoff: Number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: Boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpotLight {
    offset: Vector3;
    linearAttenuation: Number;
    innerConeColor: Object;
    innerConeAngleInDegrees: Number;
    innerConeAngle: Number;
    direction: Vector3;
    coordinateSpace: Visual;
    constantAttenuation: Number;
    quadraticAttenuation: Number;
    outerConeColor: Object;
    outerConeAngleInDegrees: Number;
    outerConeAngle: Number;
    outerConeIntensity: Number;
    innerConeIntensity: Number;
    minAttenuationCutoff: Number;
    maxAttenuationCutoff: Number;
    targets: VisualUnorderedCollection;
    exclusionsFromTargets: VisualUnorderedCollection;
    isEnabled: Boolean;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionGradientBrush {
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionLinearGradientBrush {
    startPoint: Vector2;
    endPoint: Vector2;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
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
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionShape {
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionContainerShape {
    shapes: CompositionShapeCollection;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class CompositionSpriteShape {
    strokeDashCap: CompositionStrokeCap;
    strokeBrush: CompositionBrush;
    isStrokeNonScaling: Boolean;
    geometry: CompositionGeometry;
    fillBrush: CompositionBrush;
    strokeThickness: Number;
    strokeStartCap: CompositionStrokeCap;
    strokeMiterLimit: Number;
    strokeLineJoin: CompositionStrokeLineJoin;
    strokeEndCap: CompositionStrokeCap;
    strokeDashOffset: Number;
    strokeDashArray: CompositionStrokeDashArray;
    transformMatrix: Matrix3x2;
    scale: Vector2;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    offset: Vector2;
    centerPoint: Vector2;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertExpressionKeyFrame(normalizedProgressKey: Number, value: String): void;
    insertExpressionKeyFrame(normalizedProgressKey: Number, value: String, easingFunction: CompositionEasingFunction): void;

  }

  export class ColorKeyFrameAnimation {
    interpolationColorSpace: CompositionColorSpace;
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: Number, value: Object): void;
    insertKeyFrame(normalizedProgressKey: Number, value: Object, easingFunction: CompositionEasingFunction): void;

  }

  export class QuaternionKeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: Number, value: Quaternion): void;
    insertKeyFrame(normalizedProgressKey: Number, value: Quaternion, easingFunction: CompositionEasingFunction): void;

  }

  export class ScalarKeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: Number, value: Number): void;
    insertKeyFrame(normalizedProgressKey: Number, value: Number, easingFunction: CompositionEasingFunction): void;

  }

  export class Vector2KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: Number, value: Vector2): void;
    insertKeyFrame(normalizedProgressKey: Number, value: Vector2, easingFunction: CompositionEasingFunction): void;

  }

  export class Vector3KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: Number, value: Vector3): void;
    insertKeyFrame(normalizedProgressKey: Number, value: Vector3, easingFunction: CompositionEasingFunction): void;

  }

  export class Vector4KeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: Number, value: Vector4): void;
    insertKeyFrame(normalizedProgressKey: Number, value: Vector4, easingFunction: CompositionEasingFunction): void;

  }

  export class PathKeyFrameAnimation {
    stopBehavior: AnimationStopBehavior;
    iterationCount: Number;
    iterationBehavior: AnimationIterationBehavior;
    duration: Number;
    delayTime: Number;
    keyFrameCount: Number;
    direction: AnimationDirection;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    insertKeyFrame(normalizedProgressKey: Number, path: CompositionPath): void;
    insertKeyFrame(normalizedProgressKey: Number, path: CompositionPath, easingFunction: CompositionEasingFunction): void;

  }

  export class NaturalMotionAnimation {
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class ScalarNaturalMotionAnimation {
    initialVelocity: Number;
    initialValue: Number;
    finalValue: Number;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpringScalarNaturalMotionAnimation {
    period: Number;
    dampingRatio: Number;
    initialVelocity: Number;
    initialValue: Number;
    finalValue: Number;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class BounceScalarNaturalMotionAnimation {
    restitution: Number;
    acceleration: Number;
    initialVelocity: Number;
    initialValue: Number;
    finalValue: Number;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class Vector2NaturalMotionAnimation {
    initialVelocity: Vector2;
    initialValue: Vector2;
    finalValue: Vector2;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpringVector2NaturalMotionAnimation {
    period: Number;
    dampingRatio: Number;
    initialVelocity: Vector2;
    initialValue: Vector2;
    finalValue: Vector2;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class BounceVector2NaturalMotionAnimation {
    restitution: Number;
    acceleration: Number;
    initialVelocity: Vector2;
    initialValue: Vector2;
    finalValue: Vector2;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class Vector3NaturalMotionAnimation {
    initialVelocity: Vector3;
    initialValue: Vector3;
    finalValue: Vector3;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SpringVector3NaturalMotionAnimation {
    period: Number;
    dampingRatio: Number;
    initialVelocity: Vector3;
    initialValue: Vector3;
    finalValue: Vector3;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class BounceVector3NaturalMotionAnimation {
    restitution: Number;
    acceleration: Number;
    initialVelocity: Vector3;
    initialValue: Vector3;
    finalValue: Vector3;
    stopBehavior: AnimationStopBehavior;
    delayTime: Number;
    delayBehavior: AnimationDelayBehavior;
    target: String;
    initialValueExpressions: InitialValueExpressionCollection;
    compositor: Compositor;
    dispatcher: Object;
    properties: CompositionPropertySet;
    implicitAnimations: ImplicitAnimationCollection;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

export * as core from "./ui.composition.core.js";
export * as desktop from "./ui.composition.desktop.js";
export * as diagnostics from "./ui.composition.diagnostics.js";
export * as effects from "./ui.composition.effects.js";
export * as interactions from "./ui.composition.interactions.js";