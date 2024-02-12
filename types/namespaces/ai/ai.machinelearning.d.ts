  export class DisplayAdapterId {
    lowPart: Number;
    highPart: Number;
    constructor();
  }

  export class MachineLearningContract {
    constructor();
  }

  export enum LearningModelDeviceKind {
    default,
    cpu,
    directX,
    directXHighPerformance,
    directXMinPower,
  }

  export enum LearningModelFeatureKind {
    tensor,
    sequence,
    map,
    image,
  }

  export enum LearningModelPixelRange {
    zeroTo255,
    zeroToOne,
    minusOneToOne,
  }

  export enum TensorKind {
    undefined,
    float,
    uInt8,
    int8,
    uInt16,
    int16,
    int32,
    int64,
    string,
    boolean,
    float16,
    double,
    uInt32,
    uInt64,
    complex64,
    complex128,
  }

  export class ILearningModelFeatureDescriptor {
    description: String;
    isRequired: Boolean;
    kind: LearningModelFeatureKind;
    name: String;
    constructor();

  }

  export class ILearningModelFeatureValue {
    kind: LearningModelFeatureKind;
    constructor();

  }

  export class ILearningModelOperatorProvider {
    constructor();

  }

  export class ITensor {
    shape: Object;
    tensorKind: TensorKind;
    constructor();

  }

  export class ImageFeatureDescriptor {
    bitmapAlphaMode: Number;
    bitmapPixelFormat: Number;
    height: Number;
    width: Number;
    pixelRange: LearningModelPixelRange;
    description: String;
    isRequired: Boolean;
    kind: LearningModelFeatureKind;
    name: String;
    constructor();

  }

  export class ImageFeatureValue {
    videoFrame: Object;
    kind: LearningModelFeatureKind;
    constructor();

    static createFromVideoFrame(image: Object): ImageFeatureValue;


  }

  export class LearningModel {
    author: String;
    description: String;
    domain: String;
    inputFeatures: Object;
    metadata: Object;
    name: String;
    outputFeatures: Object;
    version: Number;
    constructor();

    static loadFromStorageFileAsync(modelFile: Object, callback: (error: Error, result: LearningModel) => void): void ;
    static loadFromStorageFileAsync(modelFile: Object, operatorProvider: ILearningModelOperatorProvider, callback: (error: Error, result: LearningModel) => void): void ;


    static loadFromStreamAsync(modelStream: Object, callback: (error: Error, result: LearningModel) => void): void ;
    static loadFromStreamAsync(modelStream: Object, operatorProvider: ILearningModelOperatorProvider, callback: (error: Error, result: LearningModel) => void): void ;


    static loadFromFilePath(filePath: String): LearningModel;
    static loadFromFilePath(filePath: String, operatorProvider: ILearningModelOperatorProvider): LearningModel;


    static loadFromStream(modelStream: Object): LearningModel;
    static loadFromStream(modelStream: Object, operatorProvider: ILearningModelOperatorProvider): LearningModel;


    close(): void;
  }

  export class LearningModelBinding {
    constructor();
    constructor(session: LearningModelSession);

    bind(name: String, value: Object): void;
    bind(name: String, value: Object, props: Object): void;

    clear(): void;

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class LearningModelDevice {
    adapterId: DisplayAdapterId;
    direct3D11Device: Object;
    constructor();
    constructor(deviceKind: LearningModelDeviceKind);

    static createFromDirect3D11Device(device: Object): LearningModelDevice;


  }

  export class LearningModelEvaluationResult {
    correlationId: String;
    errorStatus: Number;
    outputs: Object;
    succeeded: Boolean;
    constructor();

  }

  export class LearningModelSession {
    device: LearningModelDevice;
    evaluationProperties: Object;
    model: LearningModel;
    constructor();
    constructor(model: LearningModel, deviceToRunOn: LearningModelDevice, learningModelSessionOptions: LearningModelSessionOptions);
    constructor(model: LearningModel);
    constructor(model: LearningModel, deviceToRunOn: LearningModelDevice);

    evaluateAsync(bindings: LearningModelBinding, correlationId: String, callback: (error: Error, result: LearningModelEvaluationResult) => void): void ;

    evaluateFeaturesAsync(features: Object, correlationId: String, callback: (error: Error, result: LearningModelEvaluationResult) => void): void ;

    evaluate(bindings: LearningModelBinding, correlationId: String): LearningModelEvaluationResult;

    evaluateFeatures(features: Object, correlationId: String): LearningModelEvaluationResult;

    close(): void;
  }

  export class LearningModelSessionOptions {
    batchSizeOverride: Number;
    closeModelOnSessionCreation: Boolean;
    constructor();

    overrideNamedDimension(name: String, dimension: Number): void;

  }

  export class MapFeatureDescriptor {
    description: String;
    isRequired: Boolean;
    kind: LearningModelFeatureKind;
    name: String;
    keyKind: TensorKind;
    valueDescriptor: ILearningModelFeatureDescriptor;
    constructor();

  }

  export class SequenceFeatureDescriptor {
    description: String;
    isRequired: Boolean;
    kind: LearningModelFeatureKind;
    name: String;
    elementDescriptor: ILearningModelFeatureDescriptor;
    constructor();

  }

  export class TensorBoolean {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Boolean>): TensorBoolean;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorBoolean;


    static create(): TensorBoolean;
    static create(shape: Object): TensorBoolean;


    static createFromArray(shape: Object, data: Array<Boolean>): TensorBoolean;


    static createFromIterable(shape: Object, data: Object): TensorBoolean;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorDouble {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorDouble;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorDouble;


    static create(): TensorDouble;
    static create(shape: Object): TensorDouble;


    static createFromArray(shape: Object, data: Array<Number>): TensorDouble;


    static createFromIterable(shape: Object, data: Object): TensorDouble;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorFeatureDescriptor {
    description: String;
    isRequired: Boolean;
    kind: LearningModelFeatureKind;
    name: String;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

  }

  export class TensorFloat {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorFloat;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorFloat;


    static create(): TensorFloat;
    static create(shape: Object): TensorFloat;


    static createFromArray(shape: Object, data: Array<Number>): TensorFloat;


    static createFromIterable(shape: Object, data: Object): TensorFloat;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorFloat16Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorFloat16Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorFloat16Bit;


    static create(): TensorFloat16Bit;
    static create(shape: Object): TensorFloat16Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorFloat16Bit;


    static createFromIterable(shape: Object, data: Object): TensorFloat16Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorInt16Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorInt16Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorInt16Bit;


    static create(): TensorInt16Bit;
    static create(shape: Object): TensorInt16Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorInt16Bit;


    static createFromIterable(shape: Object, data: Object): TensorInt16Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorInt32Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorInt32Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorInt32Bit;


    static create(): TensorInt32Bit;
    static create(shape: Object): TensorInt32Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorInt32Bit;


    static createFromIterable(shape: Object, data: Object): TensorInt32Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorInt64Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorInt64Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorInt64Bit;


    static create(): TensorInt64Bit;
    static create(shape: Object): TensorInt64Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorInt64Bit;


    static createFromIterable(shape: Object, data: Object): TensorInt64Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorInt8Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorInt8Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorInt8Bit;


    static create(): TensorInt8Bit;
    static create(shape: Object): TensorInt8Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorInt8Bit;


    static createFromIterable(shape: Object, data: Object): TensorInt8Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorString {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<String>): TensorString;


    static create(): TensorString;
    static create(shape: Object): TensorString;


    static createFromArray(shape: Object, data: Array<String>): TensorString;


    static createFromIterable(shape: Object, data: Object): TensorString;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorUInt16Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorUInt16Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorUInt16Bit;


    static create(): TensorUInt16Bit;
    static create(shape: Object): TensorUInt16Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorUInt16Bit;


    static createFromIterable(shape: Object, data: Object): TensorUInt16Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorUInt32Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorUInt32Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorUInt32Bit;


    static create(): TensorUInt32Bit;
    static create(shape: Object): TensorUInt32Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorUInt32Bit;


    static createFromIterable(shape: Object, data: Object): TensorUInt32Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorUInt64Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorUInt64Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorUInt64Bit;


    static create(): TensorUInt64Bit;
    static create(shape: Object): TensorUInt64Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorUInt64Bit;


    static createFromIterable(shape: Object, data: Object): TensorUInt64Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

  export class TensorUInt8Bit {
    kind: LearningModelFeatureKind;
    shape: Object;
    tensorKind: TensorKind;
    constructor();

    static createFromShapeArrayAndDataArray(shape: Array<Number>, data: Array<Number>): TensorUInt8Bit;


    static createFromBuffer(shape: Array<Number>, buffer: Object): TensorUInt8Bit;


    static create(): TensorUInt8Bit;
    static create(shape: Object): TensorUInt8Bit;


    static createFromArray(shape: Object, data: Array<Number>): TensorUInt8Bit;


    static createFromIterable(shape: Object, data: Object): TensorUInt8Bit;


    getAsVectorView(): Object;

    createReference(): Object;

    close(): void;
  }

