  export class Rect {
    constructor();
  }

  export class Point {
    constructor();
  }

  export enum InkAnalysisDrawingKind {
    drawing,
    circle,
    ellipse,
    triangle,
    isoscelesTriangle,
    equilateralTriangle,
    rightTriangle,
    quadrilateral,
    rectangle,
    square,
    diamond,
    trapezoid,
    parallelogram,
    pentagon,
    hexagon,
  }

  export enum InkAnalysisNodeKind {
    unclassifiedInk,
    root,
    writingRegion,
    paragraph,
    line,
    inkWord,
    inkBullet,
    inkDrawing,
    listItem,
  }

  export enum InkAnalysisStatus {
    updated,
    unchanged,
  }

  export enum InkAnalysisStrokeKind {
    auto,
    writing,
    drawing,
  }

  export class IInkAnalysisNode {
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    constructor();

    getStrokeIds(): Object;

  }

  export class IInkAnalyzerFactory {
    constructor();

    createAnalyzer(): InkAnalyzer;

  }

  export class InkAnalysisInkBullet {
    recognizedText: String;
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalysisInkDrawing {
    center: Object;
    drawingKind: InkAnalysisDrawingKind;
    points: Object;
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalysisInkWord {
    recognizedText: String;
    textAlternates: Object;
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalysisLine {
    indentLevel: Number;
    recognizedText: String;
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalysisListItem {
    recognizedText: String;
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalysisNode {
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalysisParagraph {
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    recognizedText: String;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalysisResult {
    status: InkAnalysisStatus;
    constructor();

  }

  export class InkAnalysisRoot {
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    recognizedText: String;
    constructor();

    findNodes(nodeKind: InkAnalysisNodeKind): Object;

    getStrokeIds(): Object;

  }

  export class InkAnalysisWritingRegion {
    boundingRect: Object;
    children: Object;
    id: Number;
    kind: InkAnalysisNodeKind;
    parent: IInkAnalysisNode;
    rotatedBoundingRect: Object;
    recognizedText: String;
    constructor();

    getStrokeIds(): Object;

  }

  export class InkAnalyzer {
    analysisRoot: InkAnalysisRoot;
    isAnalyzing: Boolean;
    constructor();

    analyzeAsync(callback: (error: Error, result: InkAnalysisResult) => void): void ;

    addDataForStroke(stroke: Object): void;

    addDataForStrokes(strokes: Object): void;

    clearDataForAllStrokes(): void;

    removeDataForStroke(strokeId: Number): void;

    removeDataForStrokes(strokeIds: Object): void;

    replaceDataForStroke(stroke: Object): void;

    setStrokeDataKind(strokeId: Number, strokeKind: InkAnalysisStrokeKind): void;

  }

