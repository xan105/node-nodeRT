  export class MachineLearningPreviewContract {
    constructor();
  }

  export enum LearningModelDeviceKindPreview {
    learningDeviceAny,
    learningDeviceCpu,
    learningDeviceGpu,
    learningDeviceNpu,
    learningDeviceDsp,
    learningDeviceFpga,
  }

  export enum LearningModelFeatureKindPreview {
    undefined,
    tensor,
    sequence,
    map,
    image,
  }

  export enum FeatureElementKindPreview {
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

  export class LearningModelPreview {
    inferencingOptions: InferencingOptionsPreview;
    description: LearningModelDescriptionPreview;
    constructor();

    static loadModelFromStorageFileAsync(modelFile: Object, callback: (error: Error, result: LearningModelPreview) => void): void ;


    static loadModelFromStreamAsync(modelStream: Object, callback: (error: Error, result: LearningModelPreview) => void): void ;


    evaluateAsync(binding: LearningModelBindingPreview, correlationId: String, callback: (error: Error, result: LearningModelEvaluationResultPreview) => void): void ;

    evaluateFeaturesAsync(features: Object, correlationId: String, callback: (error: Error, result: LearningModelEvaluationResultPreview) => void): void ;

  }

  export class LearningModelBindingPreview {
    constructor();
    constructor(model: LearningModelPreview);

    bind(name: String, value: Object): void;
    bind(name: String, value: Object, metadata: Object): void;

    clear(): void;

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class LearningModelEvaluationResultPreview {
    correlationId: String;
    outputs: Object;
    constructor();

  }

  export class LearningModelDescriptionPreview {
    author: String;
    description: String;
    domain: String;
    inputFeatures: Object;
    metadata: Object;
    name: String;
    outputFeatures: Object;
    version: Number;
    constructor();

  }

  export class InferencingOptionsPreview {
    reclaimMemoryAfterEvaluation: Boolean;
    preferredDeviceKind: LearningModelDeviceKindPreview;
    minimizeMemoryAllocation: Boolean;
    maxBatchSize: Number;
    isTracingEnabled: Boolean;
    constructor();

  }

  export class ILearningModelVariableDescriptorPreview {
    description: String;
    isRequired: Boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: String;
    constructor();

  }

  export class LearningModelVariableDescriptorPreview {
    description: String;
    isRequired: Boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: String;
    constructor();

  }

  export class TensorVariableDescriptorPreview {
    description: String;
    isRequired: Boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: String;
    dataType: FeatureElementKindPreview;
    shape: Object;
    constructor();

  }

  export class SequenceVariableDescriptorPreview {
    description: String;
    isRequired: Boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: String;
    elementType: ILearningModelVariableDescriptorPreview;
    constructor();

  }

  export class MapVariableDescriptorPreview {
    description: String;
    isRequired: Boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: String;
    fields: ILearningModelVariableDescriptorPreview;
    keyKind: FeatureElementKindPreview;
    validIntegerKeys: Object;
    validStringKeys: Object;
    constructor();

  }

  export class ImageVariableDescriptorPreview {
    bitmapPixelFormat: Number;
    height: Number;
    width: Number;
    description: String;
    isRequired: Boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: String;
    constructor();

  }

