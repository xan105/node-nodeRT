  export class Point {
    constructor();
  }

  export class Color {
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

  export class Rect {
    constructor();
  }

  export class Size {
    constructor();
  }

  export enum HandwritingLineHeight {
    small,
    medium,
    large,
  }

  export enum InkDrawingAttributesKind {
    default,
    pencil,
  }

  export enum InkHighContrastAdjustment {
    useSystemColorsWhenNecessary,
    useSystemColors,
    useOriginalColors,
  }

  export enum InkInputProcessingMode {
    none,
    inking,
    erasing,
  }

  export enum InkInputRightDragAction {
    leaveUnprocessed,
    allowProcessing,
  }

  export enum InkManipulationMode {
    inking,
    erasing,
    selecting,
  }

  export enum InkPersistenceFormat {
    gifWithEmbeddedIsf,
    isf,
  }

  export enum InkPresenterPredefinedConfiguration {
    simpleSinglePointer,
    simpleMultiplePointer,
  }

  export enum InkPresenterStencilKind {
    other,
    ruler,
    protractor,
  }

  export enum InkRecognitionTarget {
    all,
    selected,
    recent,
  }

  export enum PenHandedness {
    right,
    left,
  }

  export enum PenTipShape {
    circle,
    rectangle,
  }

  export class IInkPointFactory {
    constructor();

    createInkPoint(position: Object, pressure: Number): InkPoint;

  }

  export class IInkPresenterRulerFactory {
    constructor();

    create(inkPresenter: InkPresenter): InkPresenterRuler;

  }

  export class IInkPresenterStencil {
    backgroundColor: Object;
    foregroundColor: Object;
    isVisible: Boolean;
    kind: InkPresenterStencilKind;
    transform: Matrix3x2;
    constructor();

  }

  export class IInkRecognizerContainer {
    constructor();

    recognizeAsync(strokeCollection: InkStrokeContainer, recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;

    setDefaultRecognizer(recognizer: InkRecognizer): void;

    getRecognizers(): Object;

  }

  export class IInkStrokeContainer {
    boundingRect: Object;
    constructor();

    loadAsync(inputStream: Object, callback: (error: Error) => void): void ;

    saveAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    addStroke(stroke: InkStroke): void;

    deleteSelected(): Object;

    moveSelected(translation: Object): Object;

    selectWithPolyLine(polyline: Object): Object;

    selectWithLine(from: Object, to: Object): Object;

    copySelectedToClipboard(): void;

    pasteFromClipboard(position: Object): Object;

    canPasteFromClipboard(): Boolean;

    updateRecognitionResults(recognitionResults: Object): void;

    getStrokes(): Object;

    getRecognitionResults(): Object;

  }

  export class InkDrawingAttributes {
    size: Object;
    penTip: PenTipShape;
    ignorePressure: Boolean;
    fitToCurve: Boolean;
    color: Object;
    penTipTransform: Matrix3x2;
    drawAsHighlighter: Boolean;
    kind: InkDrawingAttributesKind;
    pencilProperties: InkDrawingAttributesPencilProperties;
    ignoreTilt: Boolean;
    modelerAttributes: InkModelerAttributes;
    constructor();

    static createForPencil(): InkDrawingAttributes;


  }

  export class InkDrawingAttributesPencilProperties {
    opacity: Number;
    constructor();

  }

  export class InkInputConfiguration {
    isPrimaryBarrelButtonInputEnabled: Boolean;
    isEraserInputEnabled: Boolean;
    isPenHapticFeedbackEnabled: Boolean;
    constructor();

  }

  export class InkInputProcessingConfiguration {
    rightDragAction: InkInputRightDragAction;
    mode: InkInputProcessingMode;
    constructor();

  }

  export class InkManager {
    mode: InkManipulationMode;
    boundingRect: Object;
    constructor();

    recognizeAsync(recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;
    recognizeAsync(strokeCollection: InkStrokeContainer, recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;

    loadAsync(inputStream: Object, callback: (error: Error) => void): void ;

    saveAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;

    processPointerDown(pointerPoint: Object): void;

    processPointerUpdate(pointerPoint: Object): Object;

    processPointerUp(pointerPoint: Object): Object;

    setDefaultDrawingAttributes(drawingAttributes: InkDrawingAttributes): void;

    addStroke(stroke: InkStroke): void;

    deleteSelected(): Object;

    moveSelected(translation: Object): Object;

    selectWithPolyLine(polyline: Object): Object;

    selectWithLine(from: Object, to: Object): Object;

    copySelectedToClipboard(): void;

    pasteFromClipboard(position: Object): Object;

    canPasteFromClipboard(): Boolean;

    updateRecognitionResults(recognitionResults: Object): void;

    getStrokes(): Object;

    getRecognitionResults(): Object;

    setDefaultRecognizer(recognizer: InkRecognizer): void;

    getRecognizers(): Object;

  }

  export class InkModelerAttributes {
    scalingFactor: Number;
    predictionTime: Number;
    useVelocityBasedPressure: Boolean;
    constructor();

  }

  export class InkPoint {
    position: Object;
    pressure: Number;
    tiltX: Number;
    tiltY: Number;
    timestamp: Number;
    constructor();
    constructor(position: Object, pressure: Number, tiltX: Number, tiltY: Number, timestamp: Number);
    constructor(position: Object, pressure: Number);

  }

  export class InkPresenter {
    strokeContainer: InkStrokeContainer;
    isInputEnabled: Boolean;
    inputDeviceTypes: Number;
    inputProcessingConfiguration: InkInputProcessingConfiguration;
    strokeInput: InkStrokeInput;
    unprocessedInput: InkUnprocessedInput;
    highContrastAdjustment: InkHighContrastAdjustment;
    inputConfiguration: InkInputConfiguration;
    constructor();

    copyDefaultDrawingAttributes(): InkDrawingAttributes;

    updateDefaultDrawingAttributes(value: InkDrawingAttributes): void;

    activateCustomDrying(): InkSynchronizer;

    setPredefinedConfiguration(value: InkPresenterPredefinedConfiguration): void;

    addListener(type: "StrokesCollected", listener: (ev: Event) => void): void ;
    removeListener(type: "StrokesCollected", listener: (ev: Event) => void): void ;
    on(type: "StrokesCollected", listener: (ev: Event) => void): void ;
    off(type: "StrokesCollected", listener: (ev: Event) => void): void ;
    
    addListener(type: "StrokesErased", listener: (ev: Event) => void): void ;
    removeListener(type: "StrokesErased", listener: (ev: Event) => void): void ;
    on(type: "StrokesErased", listener: (ev: Event) => void): void ;
    off(type: "StrokesErased", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class InkPresenterProtractor {
    radius: Number;
    isResizable: Boolean;
    isCenterMarkerVisible: Boolean;
    isAngleReadoutVisible: Boolean;
    areTickMarksVisible: Boolean;
    areRaysVisible: Boolean;
    accentColor: Object;
    transform: Matrix3x2;
    isVisible: Boolean;
    foregroundColor: Object;
    backgroundColor: Object;
    kind: InkPresenterStencilKind;
    constructor();
    constructor(inkPresenter: InkPresenter);

  }

  export class InkPresenterRuler {
    width: Number;
    length: Number;
    isCompassVisible: Boolean;
    areTickMarksVisible: Boolean;
    transform: Matrix3x2;
    isVisible: Boolean;
    foregroundColor: Object;
    backgroundColor: Object;
    kind: InkPresenterStencilKind;
    constructor();
    constructor(inkPresenter: InkPresenter);

  }

  export class InkRecognitionResult {
    boundingRect: Object;
    constructor();

    getTextCandidates(): Object;

    getStrokes(): Object;

  }

  export class InkRecognizer {
    name: String;
    constructor();

  }

  export class InkRecognizerContainer {
    constructor();

    recognizeAsync(strokeCollection: InkStrokeContainer, recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;

    setDefaultRecognizer(recognizer: InkRecognizer): void;

    getRecognizers(): Object;

  }

  export class InkStroke {
    selected: Boolean;
    drawingAttributes: InkDrawingAttributes;
    boundingRect: Object;
    recognized: Boolean;
    pointTransform: Matrix3x2;
    strokeStartedTime: Date;
    strokeDuration: Number;
    id: Number;
    pointerId: Number;
    constructor();

    getRenderingSegments(): Object;

    clone(): InkStroke;

    getInkPoints(): Object;

  }

  export class InkStrokeBuilder {
    constructor();

    beginStroke(pointerPoint: Object): void;

    appendToStroke(pointerPoint: Object): Object;

    endStroke(pointerPoint: Object): InkStroke;

    createStroke(points: Object): InkStroke;

    setDefaultDrawingAttributes(drawingAttributes: InkDrawingAttributes): void;

    createStrokeFromInkPoints(inkPoints: Object, transform: Matrix3x2): InkStroke;
    createStrokeFromInkPoints(inkPoints: Object, transform: Matrix3x2, strokeStartedTime: Date, strokeDuration: Number): InkStroke;

  }

  export class InkStrokeContainer {
    boundingRect: Object;
    constructor();

    loadAsync(inputStream: Object, callback: (error: Error) => void): void ;

    saveAsync(outputStream: Object, callback: (error: Error, result: Number) => void): void ;
    saveAsync(outputStream: Object, inkPersistenceFormat: InkPersistenceFormat, callback: (error: Error, result: Number) => void): void ;

    addStroke(stroke: InkStroke): void;

    deleteSelected(): Object;

    moveSelected(translation: Object): Object;

    selectWithPolyLine(polyline: Object): Object;

    selectWithLine(from: Object, to: Object): Object;

    copySelectedToClipboard(): void;

    pasteFromClipboard(position: Object): Object;

    canPasteFromClipboard(): Boolean;

    updateRecognitionResults(recognitionResults: Object): void;

    getStrokes(): Object;

    getRecognitionResults(): Object;

    addStrokes(strokes: Object): void;

    clear(): void;

    getStrokeById(id: Number): InkStroke;

  }

  export class InkStrokeInput {
    inkPresenter: InkPresenter;
    constructor();

    addListener(type: "StrokeCanceled", listener: (ev: Event) => void): void ;
    removeListener(type: "StrokeCanceled", listener: (ev: Event) => void): void ;
    on(type: "StrokeCanceled", listener: (ev: Event) => void): void ;
    off(type: "StrokeCanceled", listener: (ev: Event) => void): void ;
    
    addListener(type: "StrokeContinued", listener: (ev: Event) => void): void ;
    removeListener(type: "StrokeContinued", listener: (ev: Event) => void): void ;
    on(type: "StrokeContinued", listener: (ev: Event) => void): void ;
    off(type: "StrokeContinued", listener: (ev: Event) => void): void ;
    
    addListener(type: "StrokeEnded", listener: (ev: Event) => void): void ;
    removeListener(type: "StrokeEnded", listener: (ev: Event) => void): void ;
    on(type: "StrokeEnded", listener: (ev: Event) => void): void ;
    off(type: "StrokeEnded", listener: (ev: Event) => void): void ;
    
    addListener(type: "StrokeStarted", listener: (ev: Event) => void): void ;
    removeListener(type: "StrokeStarted", listener: (ev: Event) => void): void ;
    on(type: "StrokeStarted", listener: (ev: Event) => void): void ;
    off(type: "StrokeStarted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class InkStrokeRenderingSegment {
    bezierControlPoint1: Object;
    bezierControlPoint2: Object;
    position: Object;
    pressure: Number;
    tiltX: Number;
    tiltY: Number;
    twist: Number;
    constructor();

  }

  export class InkStrokesCollectedEventArgs {
    strokes: Object;
    constructor();

  }

  export class InkStrokesErasedEventArgs {
    strokes: Object;
    constructor();

  }

  export class InkSynchronizer {
    constructor();

    beginDry(): Object;

    endDry(): void;

  }

  export class InkUnprocessedInput {
    inkPresenter: InkPresenter;
    constructor();

    addListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerEntered", listener: (ev: Event) => void): void ;
    on(type: "PointerEntered", listener: (ev: Event) => void): void ;
    off(type: "PointerEntered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerExited", listener: (ev: Event) => void): void ;
    on(type: "PointerExited", listener: (ev: Event) => void): void ;
    off(type: "PointerExited", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerHovered", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerHovered", listener: (ev: Event) => void): void ;
    on(type: "PointerHovered", listener: (ev: Event) => void): void ;
    off(type: "PointerHovered", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerLost", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerLost", listener: (ev: Event) => void): void ;
    on(type: "PointerLost", listener: (ev: Event) => void): void ;
    off(type: "PointerLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerMoved", listener: (ev: Event) => void): void ;
    on(type: "PointerMoved", listener: (ev: Event) => void): void ;
    off(type: "PointerMoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerPressed", listener: (ev: Event) => void): void ;
    on(type: "PointerPressed", listener: (ev: Event) => void): void ;
    off(type: "PointerPressed", listener: (ev: Event) => void): void ;
    
    addListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    removeListener(type: "PointerReleased", listener: (ev: Event) => void): void ;
    on(type: "PointerReleased", listener: (ev: Event) => void): void ;
    off(type: "PointerReleased", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PenAndInkSettings {
    fontFamilyName: String;
    handwritingLineHeight: HandwritingLineHeight;
    isHandwritingDirectlyIntoTextFieldEnabled: Boolean;
    isTouchHandwritingEnabled: Boolean;
    penHandedness: PenHandedness;
    userConsentsToHandwritingTelemetryCollection: Boolean;
    constructor();

    static getDefault(): PenAndInkSettings;


    setPenHandedness(value: PenHandedness): void;

  }

export * as analysis from "./ui.input.inking.analysis.js";
export * as core from "./ui.input.inking.core.js";
