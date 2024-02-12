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

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
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

  export class Vector2 {
    x: Number;
    y: Number;
    constructor();
  }

  export enum SceneAlphaMode {
    opaque,
    alphaTest,
    blend,
  }

  export enum SceneAttributeSemantic {
    index,
    vertex,
    normal,
    texCoord0,
    texCoord1,
    color,
    tangent,
  }

  export enum SceneComponentType {
    meshRendererComponent,
  }

  export enum SceneWrappingMode {
    clampToEdge,
    mirroredRepeat,
    repeat,
  }

  export class SceneObject {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneBoundingBox {
    center: Vector3;
    extents: Vector3;
    max: Vector3;
    min: Vector3;
    size: Vector3;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneComponent {
    componentType: SceneComponentType;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneComponentCollection {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    getAt(index: Number): SceneComponent;

    getView(): Object;

    indexOf(value: SceneComponent, index: Number): Boolean;

    setAt(index: Number, value: SceneComponent): void;

    insertAt(index: Number, value: SceneComponent): void;

    removeAt(index: Number): void;

    append(value: SceneComponent): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class SceneMaterial {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneMaterialInput {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneMesh {
    primitiveTopology: Number;
    bounds: SceneBoundingBox;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): SceneMesh;


    fillMeshAttribute(semantic: SceneAttributeSemantic, format: Number, memory: Object): void;

  }

  export class SceneMeshMaterialAttributeMap {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    lookup(key: String): SceneAttributeSemantic;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: SceneAttributeSemantic): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

  }

  export class SceneRendererComponent {
    componentType: SceneComponentType;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneMeshRendererComponent {
    mesh: SceneMesh;
    material: SceneMaterial;
    uVMappings: SceneMeshMaterialAttributeMap;
    componentType: SceneComponentType;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): SceneMeshRendererComponent;


  }

  export class ScenePbrMaterial {
    occlusionStrength: Number;
    occlusionInput: SceneMaterialInput;
    normalScale: Number;
    normalInput: SceneMaterialInput;
    isDoubleSided: Boolean;
    emissiveInput: SceneMaterialInput;
    emissiveFactor: Vector3;
    alphaMode: SceneAlphaMode;
    alphaCutoff: Number;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneMetallicRoughnessMaterial {
    roughnessFactor: Number;
    metallicRoughnessInput: SceneMaterialInput;
    metallicFactor: Number;
    baseColorInput: SceneMaterialInput;
    baseColorFactor: Vector4;
    occlusionStrength: Number;
    occlusionInput: SceneMaterialInput;
    normalScale: Number;
    normalInput: SceneMaterialInput;
    isDoubleSided: Boolean;
    emissiveInput: SceneMaterialInput;
    emissiveFactor: Vector3;
    alphaMode: SceneAlphaMode;
    alphaCutoff: Number;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): SceneMetallicRoughnessMaterial;


  }

  export class SceneModelTransform {
    translation: Vector3;
    scale: Vector3;
    rotationAxis: Vector3;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    orientation: Quaternion;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

  }

  export class SceneNode {
    children: SceneNodeCollection;
    components: SceneComponentCollection;
    parent: SceneNode;
    transform: SceneModelTransform;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): SceneNode;


    findFirstComponentOfType(value: SceneComponentType): SceneComponent;

  }

  export class SceneNodeCollection {
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    getAt(index: Number): SceneNode;

    getView(): Object;

    indexOf(value: SceneNode, index: Number): Boolean;

    setAt(index: Number, value: SceneNode): void;

    insertAt(index: Number, value: SceneNode): void;

    removeAt(index: Number): void;

    append(value: SceneNode): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<Object>): void;

    first(): Object;

  }

  export class SceneSurfaceMaterialInput {
    wrappingVMode: SceneWrappingMode;
    wrappingUMode: SceneWrappingMode;
    surface: Object;
    bitmapInterpolationMode: Number;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): SceneSurfaceMaterialInput;


  }

  export class SceneVisual {
    root: SceneNode;
    children: Object;
    transformMatrix: Matrix4x4;
    size: Vector2;
    scale: Vector3;
    rotationAxis: Vector3;
    rotationAngleInDegrees: Number;
    rotationAngle: Number;
    orientation: Quaternion;
    opacity: Number;
    offset: Vector3;
    isVisible: Boolean;
    compositeMode: Number;
    clip: Object;
    centerPoint: Vector3;
    borderMode: Number;
    backfaceVisibility: Number;
    anchorPoint: Vector2;
    parent: Object;
    relativeSizeAdjustment: Vector2;
    relativeOffsetAdjustment: Vector3;
    parentForTransform: Object;
    isHitTestVisible: Boolean;
    isPixelSnappingEnabled: Boolean;
    compositor: Object;
    dispatcher: Object;
    properties: Object;
    implicitAnimations: Object;
    comment: String;
    dispatcherQueue: Object;
    constructor();

    static create(compositor: Object): SceneVisual;


  }

