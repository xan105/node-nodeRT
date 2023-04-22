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

  export class Color {
    constructor();
  }

  export class Printing3DContract {
    constructor();
  }

  export class Printing3DBufferDescription {
    format: Printing3DBufferFormat;
    stride: number;
    constructor();
  }

  export enum Print3DTaskDetail {
    unknown,
    modelExceedsPrintBed,
    uploadFailed,
    invalidMaterialSelection,
    invalidModel,
    modelNotManifold,
    invalidPrintTicket,
  }

  export enum Print3DTaskCompletion {
    abandoned,
    canceled,
    failed,
    slicing,
    submitted,
  }

  export enum Printing3DBufferFormat {
    unknown,
    r32G32B32A32Float,
    r32G32B32A32UInt,
    r32G32B32Float,
    r32G32B32UInt,
    printing3DDouble,
    printing3DUInt,
  }

  export enum Printing3DMeshVerificationMode {
    findFirstError,
    findAllErrors,
  }

  export enum Printing3DModelUnit {
    meter,
    micron,
    millimeter,
    centimeter,
    inch,
    foot,
  }

  export enum Printing3DTextureEdgeBehavior {
    none,
    wrap,
    mirror,
    clamp,
  }

  export enum Printing3DObjectType {
    model,
    support,
    others,
  }

  export enum Printing3DPackageCompression {
    low,
    medium,
    high,
  }

  export class Print3DTaskCompletedEventArgs {
    completion: Print3DTaskCompletion;
    extendedStatus: Print3DTaskDetail;
    constructor();

  }

  export class Print3DTaskSourceChangedEventArgs {
    source: Printing3D3MFPackage;
    constructor();

  }

  export class Print3DTask {
    source: Printing3D3MFPackage;
    constructor();

    addListener(type: "Completed", listener: (ev: Event) => void): void ;
    removeListener(type: "Completed", listener: (ev: Event) => void): void ;
    on(type: "Completed", listener: (ev: Event) => void): void ;
    off(type: "Completed", listener: (ev: Event) => void): void ;
    
    addListener(type: "SourceChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "SourceChanged", listener: (ev: Event) => void): void ;
    on(type: "SourceChanged", listener: (ev: Event) => void): void ;
    off(type: "SourceChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "Submitting", listener: (ev: Event) => void): void ;
    removeListener(type: "Submitting", listener: (ev: Event) => void): void ;
    on(type: "Submitting", listener: (ev: Event) => void): void ;
    off(type: "Submitting", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Print3DTaskSourceRequestedArgs {
    constructor();

    setSource(source: Printing3D3MFPackage): void;

  }

  export class Print3DTaskRequest {
    constructor();

    createTask(title: string, printerId: string, handler: Object): Print3DTask;

  }

  export class Print3DTaskRequestedEventArgs {
    request: Print3DTaskRequest;
    constructor();

  }

  export class Print3DManager {
    constructor();

    static showPrintUIAsync(callback: (error: Error, result: boolean) => void): void ;


    static getForCurrentView(): Print3DManager;


    addListener(type: "TaskRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "TaskRequested", listener: (ev: Event) => void): void ;
    on(type: "TaskRequested", listener: (ev: Event) => void): void ;
    off(type: "TaskRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Printing3DMeshVerificationResult {
    isValid: boolean;
    nonmanifoldTriangles: Object;
    reversedNormalTriangles: Object;
    constructor();

  }

  export class Printing3DTextureResource {
    textureData: Object;
    name: string;
    constructor();

  }

  export class Printing3DComponent {
    type: Printing3DObjectType;
    thumbnail: Printing3DTextureResource;
    partNumber: string;
    name: string;
    mesh: Printing3DMesh;
    components: Object;
    constructor();

  }

  export class Printing3DMesh {
    vertexPositionsDescription: Printing3DBufferDescription;
    vertexNormalsDescription: Printing3DBufferDescription;
    vertexCount: number;
    triangleMaterialIndicesDescription: Printing3DBufferDescription;
    triangleIndicesDescription: Printing3DBufferDescription;
    indexCount: number;
    bufferDescriptionSet: Object;
    bufferSet: Object;
    constructor();

    verifyAsync(value: Printing3DMeshVerificationMode, callback: (error: Error, result: Printing3DMeshVerificationResult) => void): void ;

    getVertexPositions(): Object;

    createVertexPositions(value: number): void;

    getVertexNormals(): Object;

    createVertexNormals(value: number): void;

    getTriangleIndices(): Object;

    createTriangleIndices(value: number): void;

    getTriangleMaterialIndices(): Object;

    createTriangleMaterialIndices(value: number): void;

  }

  export class Printing3DComponentWithMatrix {
    matrix: Matrix4x4;
    component: Printing3DComponent;
    constructor();

  }

  export class Printing3DColorMaterial {
    value: number;
    color: Object;
    constructor();

  }

  export class Printing3DModelTexture {
    tileStyleV: Printing3DTextureEdgeBehavior;
    tileStyleU: Printing3DTextureEdgeBehavior;
    textureResource: Printing3DTextureResource;
    constructor();

  }

  export class Printing3DBaseMaterialGroup {
    bases: Object;
    materialGroupId: number;
    constructor();
    constructor(MaterialGroupId: number);

  }

  export class Printing3DBaseMaterial {
    static abs: string;
    static pla: string;
    name: string;
    color: Printing3DColorMaterial;
    constructor();

  }

  export class Printing3DColorMaterialGroup {
    colors: Object;
    materialGroupId: number;
    constructor();
    constructor(MaterialGroupId: number);

  }

  export class Printing3DTexture2CoordMaterialGroup {
    materialGroupId: number;
    texture2Coords: Object;
    texture: Printing3DModelTexture;
    constructor();
    constructor(MaterialGroupId: number);

  }

  export class Printing3DTexture2CoordMaterial {
    v: number;
    u: number;
    texture: Printing3DModelTexture;
    constructor();

  }

  export class Printing3DCompositeMaterialGroup {
    composites: Object;
    materialGroupId: number;
    materialIndices: Object;
    baseMaterialGroup: Printing3DBaseMaterialGroup;
    constructor();
    constructor(MaterialGroupId: number);

  }

  export class Printing3DCompositeMaterial {
    values: Object;
    constructor();

  }

  export class Printing3DMultiplePropertyMaterialGroup {
    materialGroupId: number;
    materialGroupIndices: Object;
    multipleProperties: Object;
    constructor();
    constructor(MaterialGroupId: number);

  }

  export class Printing3DMultiplePropertyMaterial {
    materialIndices: Object;
    constructor();

  }

  export class Printing3DMaterial {
    baseGroups: Object;
    colorGroups: Object;
    compositeGroups: Object;
    multiplePropertyGroups: Object;
    texture2CoordGroups: Object;
    constructor();

  }

  export class Printing3DModel {
    version: string;
    unit: Printing3DModelUnit;
    material: Printing3DMaterial;
    build: Printing3DComponent;
    components: Object;
    meshes: Object;
    metadata: Object;
    requiredExtensions: Object;
    textures: Object;
    constructor();

    repairAsync(callback: (error: Error) => void): void ;

    tryPartialRepairAsync(callback: (error: Error, result: boolean) => void): void ;
    tryPartialRepairAsync(maxWaitTime: number, callback: (error: Error, result: boolean) => void): void ;

    tryReduceFacesAsync(callback: (error: Error, result: boolean) => void): void ;
    tryReduceFacesAsync(printing3DFaceReductionOptions: Printing3DFaceReductionOptions, callback: (error: Error, result: boolean) => void): void ;
    tryReduceFacesAsync(printing3DFaceReductionOptions: Printing3DFaceReductionOptions, maxWait: number, callback: (error: Error, result: boolean) => void): void ;

    repairWithProgressAsync(callback: (error: Error, result: boolean) => void): void ;

    clone(): Printing3DModel;

  }

  export class Printing3DFaceReductionOptions {
    targetTriangleCount: number;
    maxReductionArea: number;
    maxEdgeLength: number;
    constructor();

  }

  export class Printing3D3MFPackage {
    thumbnail: Printing3DTextureResource;
    printTicket: Object;
    modelPart: Object;
    textures: Object;
    compression: Printing3DPackageCompression;
    constructor();

    static loadAsync(value: Object, callback: (error: Error, result: Printing3D3MFPackage) => void): void ;


    saveAsync(callback: (error: Error, result: Object) => void): void ;

    loadModelFromPackageAsync(value: Object, callback: (error: Error, result: Printing3DModel) => void): void ;

    saveModelToPackageAsync(value: Printing3DModel, callback: (error: Error) => void): void ;

  }

