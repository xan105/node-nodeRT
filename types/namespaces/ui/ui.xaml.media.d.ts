  export class Point {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export class Matrix3D {
    constructor();
  }

  export class Color {
    constructor();
  }

  export class Size {
    constructor();
  }

  export enum AcrylicBackgroundSource {
    hostBackdrop,
    backdrop,
  }

  export enum RevealBrushState {
    normal,
    pointerOver,
    pressed,
  }

  export enum MediaElementState {
    closed,
    opening,
    buffering,
    playing,
    paused,
    stopped,
  }

  export enum AudioCategory {
    other,
    foregroundOnlyMedia,
    backgroundCapableMedia,
    communications,
    alerts,
    soundEffects,
    gameEffects,
    gameMedia,
    gameChat,
    speech,
    movie,
    media,
  }

  export enum AudioDeviceType {
    console,
    multimedia,
    communications,
  }

  export enum BrushMappingMode {
    absolute,
    relativeToBoundingBox,
  }

  export enum ColorInterpolationMode {
    scRgbLinearInterpolation,
    sRgbLinearInterpolation,
  }

  export enum ElementCompositeMode {
    inherit,
    sourceOver,
    minBlend,
  }

  export enum FastPlayFallbackBehaviour {
    skip,
    hide,
    disable,
  }

  export enum FillRule {
    evenOdd,
    nonzero,
  }

  export enum GradientSpreadMethod {
    pad,
    reflect,
    repeat,
  }

  export enum MediaCanPlayResponse {
    notSupported,
    maybe,
    probably,
  }

  export enum PenLineCap {
    flat,
    square,
    round,
    triangle,
  }

  export enum PenLineJoin {
    miter,
    bevel,
    round,
  }

  export enum Stereo3DVideoPackingMode {
    none,
    sideBySide,
    topBottom,
  }

  export enum Stereo3DVideoRenderMode {
    mono,
    stereo,
  }

  export enum Stretch {
    none,
    fill,
    uniform,
    uniformToFill,
  }

  export enum StyleSimulations {
    none,
    boldSimulation,
    italicSimulation,
    boldItalicSimulation,
  }

  export enum SweepDirection {
    counterclockwise,
    clockwise,
  }

  export enum AlignmentX {
    left,
    center,
    right,
  }

  export enum AlignmentY {
    top,
    center,
    bottom,
  }

  export enum LoadedImageSourceLoadStatus {
    success,
    networkError,
    invalidFormat,
    other,
  }

  export class VisualTreeHelper {
    constructor();

    static getOpenPopups(window: Object): Object;


    static findElementsInHostCoordinates(intersectingPoint: Object, subtree: Object): Object;
    static findElementsInHostCoordinates(intersectingRect: Object, subtree: Object): Object;
    static findElementsInHostCoordinates(intersectingPoint: Object, subtree: Object, includeAllElements: Boolean): Object;
    static findElementsInHostCoordinates(intersectingRect: Object, subtree: Object, includeAllElements: Boolean): Object;


    static getChild(reference: Object, childIndex: Number): Object;


    static getChildrenCount(reference: Object): Number;


    static getParent(reference: Object): Object;


    static disconnectChildrenRecursive(element: Object): void;


  }

  export class PartialMediaFailureDetectedEventArgs {
    streamKind: Number;
    extendedError: Number;
    constructor();

  }

  export class BrushCollection {
    constructor();

    getAt(index: Number): Brush;

    getView(): Object;

    indexOf(value: Brush, index: Number): Boolean;

    setAt(index: Number, value: Brush): void;

    insertAt(index: Number, value: Brush): void;

    removeAt(index: Number): void;

    append(value: Brush): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class RenderedEventArgs {
    frameDuration: Number;
    constructor();

  }

  export class CompositionTarget {
    constructor();

    addListener(type: "Rendered", listener: (ev: Event) => void): void ;
    removeListener(type: "Rendered", listener: (ev: Event) => void): void ;
    on(type: "Rendered", listener: (ev: Event) => void): void ;
    off(type: "Rendered", listener: (ev: Event) => void): void ;
    
    addListener(type: "Rendering", listener: (ev: Event) => void): void ;
    removeListener(type: "Rendering", listener: (ev: Event) => void): void ;
    on(type: "Rendering", listener: (ev: Event) => void): void ;
    off(type: "Rendering", listener: (ev: Event) => void): void ;
    
    addListener(type: "SurfaceContentsLost", listener: (ev: Event) => void): void ;
    removeListener(type: "SurfaceContentsLost", listener: (ev: Event) => void): void ;
    on(type: "SurfaceContentsLost", listener: (ev: Event) => void): void ;
    off(type: "SurfaceContentsLost", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DoubleCollection {
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

  export class FontFamily {
    static xamlAutoFontFamily: FontFamily;
    source: String;
    constructor();
    constructor(familyName: String);

  }

  export class MediaTransportControlsThumbnailRequestedEventArgs {
    constructor();

    setThumbnailImage(source: Object): void;

    getDeferral(): Object;

  }

  export class PointCollection {
    constructor();

    getAt(index: Number): Object;

    getView(): Object;

    indexOf(value: Object, index: Number): Boolean;

    setAt(index: Number, value: Object): void;

    insertAt(index: Number, value: Object): void;

    removeAt(index: Number): void;

    append(value: Object): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class RenderingEventArgs {
    renderingTime: Number;
    constructor();

  }

  export class TimelineMarkerCollection {
    constructor();

    getAt(index: Number): TimelineMarker;

    getView(): Object;

    indexOf(value: TimelineMarker, index: Number): Boolean;

    setAt(index: Number, value: TimelineMarker): void;

    insertAt(index: Number, value: TimelineMarker): void;

    removeAt(index: Number): void;

    append(value: TimelineMarker): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class TransformCollection {
    constructor();

    getAt(index: Number): Transform;

    getView(): Object;

    indexOf(value: Transform, index: Number): Boolean;

    setAt(index: Number, value: Transform): void;

    insertAt(index: Number, value: Transform): void;

    removeAt(index: Number): void;

    append(value: Transform): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class Brush {
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

  }

  export class CacheMode {
    dispatcher: Object;
    constructor();

  }

  export class GeneralTransform {
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

    transformPoint(point: Object): Object;

    tryTransform(inPoint: Object, outPoint: Object): Boolean;

    transformBounds(rect: Object): Object;

    tryTransformCore(inPoint: Object, outPoint: Object): Boolean;

    transformBoundsCore(rect: Object): Object;

  }

  export class Geometry {
    static empty: Geometry;
    static standardFlatteningTolerance: Number;
    static transformProperty: Object;
    transform: Transform;
    bounds: Object;
    dispatcher: Object;
    constructor();

  }

  export class ImageSource {
    dispatcher: Object;
    constructor();

  }

  export class PathSegment {
    dispatcher: Object;
    constructor();

  }

  export class Projection {
    dispatcher: Object;
    constructor();

  }

  export class RateChangedRoutedEventArgs {
    originalSource: Object;
    constructor();

  }

  export class TimelineMarker {
    static textProperty: Object;
    static timeProperty: Object;
    static typeProperty: Object;
    type: String;
    time: Number;
    text: String;
    dispatcher: Object;
    constructor();

  }

  export class TimelineMarkerRoutedEventArgs {
    marker: TimelineMarker;
    originalSource: Object;
    constructor();

  }

  export class XamlLight {
    dispatcher: Object;
    constructor();

    static addTargetElement(lightId: String, element: Object): void;


    static removeTargetElement(lightId: String, element: Object): void;


    static addTargetBrush(lightId: String, brush: Brush): void;


    static removeTargetBrush(lightId: String, brush: Brush): void;


    getId(): String;

    onConnected(newElement: Object): void;

    onDisconnected(oldElement: Object): void;

  }

  export class BitmapCache {
    dispatcher: Object;
    constructor();

  }

  export class Matrix3DProjection {
    static projectionMatrixProperty: Object;
    projectionMatrix: Matrix3D;
    dispatcher: Object;
    constructor();

  }

  export class PlaneProjection {
    static centerOfRotationXProperty: Object;
    static centerOfRotationYProperty: Object;
    static centerOfRotationZProperty: Object;
    static globalOffsetXProperty: Object;
    static globalOffsetYProperty: Object;
    static globalOffsetZProperty: Object;
    static localOffsetXProperty: Object;
    static localOffsetYProperty: Object;
    static localOffsetZProperty: Object;
    static projectionMatrixProperty: Object;
    static rotationXProperty: Object;
    static rotationYProperty: Object;
    static rotationZProperty: Object;
    globalOffsetZ: Number;
    globalOffsetY: Number;
    globalOffsetX: Number;
    centerOfRotationZ: Number;
    centerOfRotationY: Number;
    centerOfRotationX: Number;
    rotationZ: Number;
    rotationY: Number;
    rotationX: Number;
    localOffsetZ: Number;
    localOffsetY: Number;
    localOffsetX: Number;
    projectionMatrix: Matrix3D;
    dispatcher: Object;
    constructor();

  }

  export class RectangleGeometry {
    static rectProperty: Object;
    static empty: Geometry;
    static standardFlatteningTolerance: Number;
    static transformProperty: Object;
    rect: Object;
    transform: Transform;
    bounds: Object;
    dispatcher: Object;
    constructor();

  }

  export class SolidColorBrush {
    static colorProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    color: Object;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();
    constructor(color: Object);

  }

  export class Transform {
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class CompositeTransform {
    static centerXProperty: Object;
    static centerYProperty: Object;
    static rotationProperty: Object;
    static scaleXProperty: Object;
    static scaleYProperty: Object;
    static skewXProperty: Object;
    static skewYProperty: Object;
    static translateXProperty: Object;
    static translateYProperty: Object;
    translateY: Number;
    translateX: Number;
    skewY: Number;
    skewX: Number;
    scaleY: Number;
    scaleX: Number;
    rotation: Number;
    centerY: Number;
    centerX: Number;
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class MatrixTransform {
    static matrixProperty: Object;
    matrix: Matrix;
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class RotateTransform {
    static angleProperty: Object;
    static centerXProperty: Object;
    static centerYProperty: Object;
    centerY: Number;
    centerX: Number;
    angle: Number;
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class ScaleTransform {
    static centerXProperty: Object;
    static centerYProperty: Object;
    static scaleXProperty: Object;
    static scaleYProperty: Object;
    scaleY: Number;
    scaleX: Number;
    centerY: Number;
    centerX: Number;
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class SkewTransform {
    static angleXProperty: Object;
    static angleYProperty: Object;
    static centerXProperty: Object;
    static centerYProperty: Object;
    centerY: Number;
    centerX: Number;
    angleY: Number;
    angleX: Number;
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class TransformGroup {
    static childrenProperty: Object;
    children: TransformCollection;
    value: Matrix;
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class TranslateTransform {
    static xProperty: Object;
    static yProperty: Object;
    y: Number;
    x: Number;
    inverse: GeneralTransform;
    dispatcher: Object;
    constructor();

  }

  export class GeometryCollection {
    constructor();

    getAt(index: Number): Geometry;

    getView(): Object;

    indexOf(value: Geometry, index: Number): Boolean;

    setAt(index: Number, value: Geometry): void;

    insertAt(index: Number, value: Geometry): void;

    removeAt(index: Number): void;

    append(value: Geometry): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class GradientStopCollection {
    constructor();

    getAt(index: Number): GradientStop;

    getView(): Object;

    indexOf(value: GradientStop, index: Number): Boolean;

    setAt(index: Number, value: GradientStop): void;

    insertAt(index: Number, value: GradientStop): void;

    removeAt(index: Number): void;

    append(value: GradientStop): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class LoadedImageSourceLoadCompletedEventArgs {
    status: LoadedImageSourceLoadStatus;
    constructor();

  }

  export class LoadedImageSurface {
    decodedPhysicalSize: Object;
    decodedSize: Object;
    naturalSize: Object;
    constructor();

    static startLoadFromUri(uri: Object, desiredMaxSize: Object): LoadedImageSurface;
    static startLoadFromUri(uri: Object): LoadedImageSurface;


    static startLoadFromStream(stream: Object, desiredMaxSize: Object): LoadedImageSurface;
    static startLoadFromStream(stream: Object): LoadedImageSurface;


    close(): void;
    addListener(type: "LoadCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "LoadCompleted", listener: (ev: Event) => void): void ;
    on(type: "LoadCompleted", listener: (ev: Event) => void): void ;
    off(type: "LoadCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PathFigureCollection {
    constructor();

    getAt(index: Number): PathFigure;

    getView(): Object;

    indexOf(value: PathFigure, index: Number): Boolean;

    setAt(index: Number, value: PathFigure): void;

    insertAt(index: Number, value: PathFigure): void;

    removeAt(index: Number): void;

    append(value: PathFigure): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class PathSegmentCollection {
    constructor();

    getAt(index: Number): PathSegment;

    getView(): Object;

    indexOf(value: PathSegment, index: Number): Boolean;

    setAt(index: Number, value: PathSegment): void;

    insertAt(index: Number, value: PathSegment): void;

    removeAt(index: Number): void;

    append(value: PathSegment): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class GradientStop {
    static colorProperty: Object;
    static offsetProperty: Object;
    offset: Number;
    color: Object;
    dispatcher: Object;
    constructor();

  }

  export class PathFigure {
    static isClosedProperty: Object;
    static isFilledProperty: Object;
    static segmentsProperty: Object;
    static startPointProperty: Object;
    startPoint: Object;
    segments: PathSegmentCollection;
    isFilled: Boolean;
    isClosed: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class ArcSegment {
    static isLargeArcProperty: Object;
    static pointProperty: Object;
    static rotationAngleProperty: Object;
    static sizeProperty: Object;
    static sweepDirectionProperty: Object;
    sweepDirection: SweepDirection;
    size: Object;
    rotationAngle: Number;
    point: Object;
    isLargeArc: Boolean;
    dispatcher: Object;
    constructor();

  }

  export class BezierSegment {
    static point1Property: Object;
    static point2Property: Object;
    static point3Property: Object;
    point3: Object;
    point2: Object;
    point1: Object;
    dispatcher: Object;
    constructor();

  }

  export class EllipseGeometry {
    static centerProperty: Object;
    static radiusXProperty: Object;
    static radiusYProperty: Object;
    static empty: Geometry;
    static standardFlatteningTolerance: Number;
    static transformProperty: Object;
    radiusY: Number;
    radiusX: Number;
    center: Object;
    transform: Transform;
    bounds: Object;
    dispatcher: Object;
    constructor();

  }

  export class GeometryGroup {
    static childrenProperty: Object;
    static fillRuleProperty: Object;
    static empty: Geometry;
    static standardFlatteningTolerance: Number;
    static transformProperty: Object;
    fillRule: FillRule;
    children: GeometryCollection;
    transform: Transform;
    bounds: Object;
    dispatcher: Object;
    constructor();

  }

  export class GradientBrush {
    static colorInterpolationModeProperty: Object;
    static gradientStopsProperty: Object;
    static mappingModeProperty: Object;
    static spreadMethodProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    spreadMethod: GradientSpreadMethod;
    mappingMode: BrushMappingMode;
    gradientStops: GradientStopCollection;
    colorInterpolationMode: ColorInterpolationMode;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

  }

  export class LineGeometry {
    static endPointProperty: Object;
    static startPointProperty: Object;
    static empty: Geometry;
    static standardFlatteningTolerance: Number;
    static transformProperty: Object;
    startPoint: Object;
    endPoint: Object;
    transform: Transform;
    bounds: Object;
    dispatcher: Object;
    constructor();

  }

  export class LineSegment {
    static pointProperty: Object;
    point: Object;
    dispatcher: Object;
    constructor();

  }

  export class PathGeometry {
    static figuresProperty: Object;
    static fillRuleProperty: Object;
    static empty: Geometry;
    static standardFlatteningTolerance: Number;
    static transformProperty: Object;
    fillRule: FillRule;
    figures: PathFigureCollection;
    transform: Transform;
    bounds: Object;
    dispatcher: Object;
    constructor();

  }

  export class PolyBezierSegment {
    static pointsProperty: Object;
    points: PointCollection;
    dispatcher: Object;
    constructor();

  }

  export class PolyLineSegment {
    static pointsProperty: Object;
    points: PointCollection;
    dispatcher: Object;
    constructor();

  }

  export class PolyQuadraticBezierSegment {
    static pointsProperty: Object;
    points: PointCollection;
    dispatcher: Object;
    constructor();

  }

  export class QuadraticBezierSegment {
    static point1Property: Object;
    static point2Property: Object;
    point2: Object;
    point1: Object;
    dispatcher: Object;
    constructor();

  }

  export class TileBrush {
    static alignmentXProperty: Object;
    static alignmentYProperty: Object;
    static stretchProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    stretch: Stretch;
    alignmentY: AlignmentY;
    alignmentX: AlignmentX;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

  }

  export class XamlCompositionBrushBase {
    static fallbackColorProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    fallbackColor: Object;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

    onConnected(): void;

    onDisconnected(): void;

  }

  export class AcrylicBrush {
    static alwaysUseFallbackProperty: Object;
    static backgroundSourceProperty: Object;
    static tintColorProperty: Object;
    static tintOpacityProperty: Object;
    static tintTransitionDurationProperty: Object;
    static fallbackColorProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    tintTransitionDuration: Number;
    tintOpacity: Number;
    tintColor: Object;
    backgroundSource: AcrylicBackgroundSource;
    alwaysUseFallback: Boolean;
    fallbackColor: Object;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

  }

  export class RevealBrush {
    static alwaysUseFallbackProperty: Object;
    static colorProperty: Object;
    static stateProperty: Object;
    static targetThemeProperty: Object;
    static fallbackColorProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    targetTheme: Number;
    color: Object;
    alwaysUseFallback: Boolean;
    fallbackColor: Object;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

    static setState(element: Object, value: RevealBrushState): void;


    static getState(element: Object): RevealBrushState;


  }

  export class RevealBorderBrush {
    static alwaysUseFallbackProperty: Object;
    static colorProperty: Object;
    static stateProperty: Object;
    static targetThemeProperty: Object;
    static fallbackColorProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    targetTheme: Number;
    color: Object;
    alwaysUseFallback: Boolean;
    fallbackColor: Object;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

  }

  export class RevealBackgroundBrush {
    static alwaysUseFallbackProperty: Object;
    static colorProperty: Object;
    static stateProperty: Object;
    static targetThemeProperty: Object;
    static fallbackColorProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    targetTheme: Number;
    color: Object;
    alwaysUseFallback: Boolean;
    fallbackColor: Object;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

  }

  export class ImageBrush {
    static imageSourceProperty: Object;
    static alignmentXProperty: Object;
    static alignmentYProperty: Object;
    static stretchProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    imageSource: ImageSource;
    stretch: Stretch;
    alignmentY: AlignmentY;
    alignmentX: AlignmentX;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();

    addListener(type: "ImageFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "ImageFailed", listener: (ev: Event) => void): void ;
    on(type: "ImageFailed", listener: (ev: Event) => void): void ;
    off(type: "ImageFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "ImageOpened", listener: (ev: Event) => void): void ;
    removeListener(type: "ImageOpened", listener: (ev: Event) => void): void ;
    on(type: "ImageOpened", listener: (ev: Event) => void): void ;
    off(type: "ImageOpened", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class LinearGradientBrush {
    static endPointProperty: Object;
    static startPointProperty: Object;
    static colorInterpolationModeProperty: Object;
    static gradientStopsProperty: Object;
    static mappingModeProperty: Object;
    static spreadMethodProperty: Object;
    static opacityProperty: Object;
    static relativeTransformProperty: Object;
    static transformProperty: Object;
    startPoint: Object;
    endPoint: Object;
    spreadMethod: GradientSpreadMethod;
    mappingMode: BrushMappingMode;
    gradientStops: GradientStopCollection;
    colorInterpolationMode: ColorInterpolationMode;
    transform: Transform;
    relativeTransform: Transform;
    opacity: Number;
    dispatcher: Object;
    constructor();
    constructor(gradientStopCollection: GradientStopCollection, angle: Number);

  }

export * as animation from "./ui.xaml.media.animation.js";
export * as imaging from "./ui.xaml.media.imaging.js";
export * as media3d from "./ui.xaml.media.media3d.js";