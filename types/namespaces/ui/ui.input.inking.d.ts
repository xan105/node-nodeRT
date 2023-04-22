  export class Color {
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

  export class Point {
    constructor();
  }

  export class Size {
    constructor();
  }

  export class Rect {
    constructor();
  }

  export enum InkPresenterPredefinedConfiguration {
    simpleSinglePointer,
    simpleMultiplePointer,
  }

  export enum InkInputRightDragAction {
    leaveUnprocessed,
    allowProcessing,
  }

  export enum InkInputProcessingMode {
    none,
    inking,
    erasing,
  }

  export enum InkPresenterStencilKind {
    other,
    ruler,
    protractor,
  }

  export enum InkHighContrastAdjustment {
    useSystemColorsWhenNecessary,
    useSystemColors,
    useOriginalColors,
  }

  export enum InkManipulationMode {
    inking,
    erasing,
    selecting,
  }

  export enum InkRecognitionTarget {
    all,
    selected,
    recent,
  }

  export enum PenTipShape {
    circle,
    rectangle,
  }

  export enum InkDrawingAttributesKind {
    default,
    pencil,
  }

  export enum InkPersistenceFormat {
    gifWithEmbeddedIsf,
    isf,
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

  export class InkInputProcessingConfiguration {
    rightDragAction: InkInputRightDragAction;
    mode: InkInputProcessingMode;
    constructor();

  }

  export class InkSynchronizer {
    constructor();

    beginDry(): Object;

    endDry(): void;

  }

  export class InkPresenter {
    strokeContainer: InkStrokeContainer;
    isInputEnabled: boolean;
    inputDeviceTypes: number;
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

  export class InkStrokesCollectedEventArgs {
    strokes: Object;
    constructor();

  }

  export class InkStrokesErasedEventArgs {
    strokes: Object;
    constructor();

  }

  export class InkInputConfiguration {
    isPrimaryBarrelButtonInputEnabled: boolean;
    isEraserInputEnabled: boolean;
    constructor();

  }

  export class IInkPresenterStencil {
    backgroundColor: Object;
    foregroundColor: Object;
    isVisible: boolean;
    kind: InkPresenterStencilKind;
    transform: Matrix3x2;
    constructor();

  }

  export class IInkPresenterRulerFactory {
    constructor();

    create(inkPresenter: InkPresenter): InkPresenterRuler;

  }

  export class InkPresenterRuler {
    width: number;
    length: number;
    isCompassVisible: boolean;
    areTickMarksVisible: boolean;
    transform: Matrix3x2;
    isVisible: boolean;
    foregroundColor: Object;
    backgroundColor: Object;
    kind: InkPresenterStencilKind;
    constructor();
    constructor(inkPresenter: InkPresenter);

  }

  export class InkPresenterProtractor {
    radius: number;
    isResizable: boolean;
    isCenterMarkerVisible: boolean;
    isAngleReadoutVisible: boolean;
    areTickMarksVisible: boolean;
    areRaysVisible: boolean;
    accentColor: Object;
    transform: Matrix3x2;
    isVisible: boolean;
    foregroundColor: Object;
    backgroundColor: Object;
    kind: InkPresenterStencilKind;
    constructor();
    constructor(inkPresenter: InkPresenter);

  }

  export class IInkPointFactory {
    constructor();

    createInkPoint(position: Object, pressure: number): InkPoint;

  }

  export class InkPoint {
    position: Object;
    pressure: number;
    tiltX: number;
    tiltY: number;
    timestamp: number;
    constructor();
    constructor(position: Object, pressure: number, tiltX: number, tiltY: number, timestamp: number);
    constructor(position: Object, pressure: number);

  }

  export class InkDrawingAttributesPencilProperties {
    opacity: number;
    constructor();

  }

  export class InkDrawingAttributes {
    size: Object;
    penTip: PenTipShape;
    ignorePressure: boolean;
    fitToCurve: boolean;
    color: Object;
    penTipTransform: Matrix3x2;
    drawAsHighlighter: boolean;
    kind: InkDrawingAttributesKind;
    pencilProperties: InkDrawingAttributesPencilProperties;
    ignoreTilt: boolean;
    modelerAttributes: InkModelerAttributes;
    constructor();

    static createForPencil(): InkDrawingAttributes;


  }

  export class InkModelerAttributes {
    scalingFactor: number;
    predictionTime: number;
    constructor();

  }

  export class InkStrokeRenderingSegment {
    bezierControlPoint1: Object;
    bezierControlPoint2: Object;
    position: Object;
    pressure: number;
    tiltX: number;
    tiltY: number;
    twist: number;
    constructor();

  }

  export class InkStroke {
    selected: boolean;
    drawingAttributes: InkDrawingAttributes;
    boundingRect: Object;
    recognized: boolean;
    pointTransform: Matrix3x2;
    strokeStartedTime: Date;
    strokeDuration: number;
    id: number;
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
    createStrokeFromInkPoints(inkPoints: Object, transform: Matrix3x2, strokeStartedTime: Date, strokeDuration: number): InkStroke;

  }

  export class InkRecognitionResult {
    boundingRect: Object;
    constructor();

    getTextCandidates(): Object;

    getStrokes(): Object;

  }

  export class IInkStrokeContainer {
    boundingRect: Object;
    constructor();

    loadAsync(inputStream: Object, callback: (error: Error) => void): void ;

    saveAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

    addStroke(stroke: InkStroke): void;

    deleteSelected(): Object;

    moveSelected(translation: Object): Object;

    selectWithPolyLine(polyline: Object): Object;

    selectWithLine(from: Object, to: Object): Object;

    copySelectedToClipboard(): void;

    pasteFromClipboard(position: Object): Object;

    canPasteFromClipboard(): boolean;

    updateRecognitionResults(recognitionResults: Object): void;

    getStrokes(): Object;

    getRecognitionResults(): Object;

  }

  export class InkStrokeContainer {
    boundingRect: Object;
    constructor();

    loadAsync(inputStream: Object, callback: (error: Error) => void): void ;

    saveAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;
    saveAsync(outputStream: Object, inkPersistenceFormat: InkPersistenceFormat, callback: (error: Error, result: number) => void): void ;

    addStroke(stroke: InkStroke): void;

    deleteSelected(): Object;

    moveSelected(translation: Object): Object;

    selectWithPolyLine(polyline: Object): Object;

    selectWithLine(from: Object, to: Object): Object;

    copySelectedToClipboard(): void;

    pasteFromClipboard(position: Object): Object;

    canPasteFromClipboard(): boolean;

    updateRecognitionResults(recognitionResults: Object): void;

    getStrokes(): Object;

    getRecognitionResults(): Object;

    addStrokes(strokes: Object): void;

    clear(): void;

    getStrokeById(id: number): InkStroke;

  }

  export class InkRecognizer {
    name: string;
    constructor();

  }

  export class IInkRecognizerContainer {
    constructor();

    recognizeAsync(strokeCollection: InkStrokeContainer, recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;

    setDefaultRecognizer(recognizer: InkRecognizer): void;

    getRecognizers(): Object;

  }

  export class InkRecognizerContainer {
    constructor();

    recognizeAsync(strokeCollection: InkStrokeContainer, recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;

    setDefaultRecognizer(recognizer: InkRecognizer): void;

    getRecognizers(): Object;

  }

  export class InkManager {
    mode: InkManipulationMode;
    boundingRect: Object;
    constructor();

    recognizeAsync(recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;
    recognizeAsync(strokeCollection: InkStrokeContainer, recognitionTarget: InkRecognitionTarget, callback: (error: Error, result: Object) => void): void ;

    loadAsync(inputStream: Object, callback: (error: Error) => void): void ;

    saveAsync(outputStream: Object, callback: (error: Error, result: number) => void): void ;

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

    canPasteFromClipboard(): boolean;

    updateRecognitionResults(recognitionResults: Object): void;

    getStrokes(): Object;

    getRecognitionResults(): Object;

    setDefaultRecognizer(recognizer: InkRecognizer): void;

    getRecognizers(): Object;

  }

export * as analysis from "./ui.input.inking.analysis.js";
export * as core from "./ui.input.inking.core.js";