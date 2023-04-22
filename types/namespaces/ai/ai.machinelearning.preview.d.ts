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


    evaluateAsync(binding: LearningModelBindingPreview, correlationId: string, callback: (error: Error, result: LearningModelEvaluationResultPreview) => void): void ;

    evaluateFeaturesAsync(features: Object, correlationId: string, callback: (error: Error, result: LearningModelEvaluationResultPreview) => void): void ;

  }

  export class LearningModelBindingPreview {
    constructor();
    constructor(model: LearningModelPreview);

    bind(name: string, value: Object): void;
    bind(name: string, value: Object, metadata: Object): void;

    clear(): void;

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    split(first: Object, second: Object): void;

    first(): Object;

  }

  export class LearningModelEvaluationResultPreview {
    correlationId: string;
    outputs: Object;
    constructor();

  }

  export class LearningModelDescriptionPreview {
    author: string;
    description: string;
    domain: string;
    inputFeatures: Object;
    metadata: Object;
    name: string;
    outputFeatures: Object;
    version: number;
    constructor();

  }

  export class InferencingOptionsPreview {
    reclaimMemoryAfterEvaluation: boolean;
    preferredDeviceKind: LearningModelDeviceKindPreview;
    minimizeMemoryAllocation: boolean;
    maxBatchSize: number;
    isTracingEnabled: boolean;
    constructor();

  }

  export class ILearningModelVariableDescriptorPreview {
    description: string;
    isRequired: boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: string;
    constructor();

  }

  export class LearningModelVariableDescriptorPreview {
    description: string;
    isRequired: boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: string;
    constructor();

  }

  export class TensorVariableDescriptorPreview {
    description: string;
    isRequired: boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: string;
    dataType: FeatureElementKindPreview;
    shape: Object;
    constructor();

  }

  export class SequenceVariableDescriptorPreview {
    description: string;
    isRequired: boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: string;
    elementType: ILearningModelVariableDescriptorPreview;
    constructor();

  }

  export class MapVariableDescriptorPreview {
    description: string;
    isRequired: boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: string;
    fields: ILearningModelVariableDescriptorPreview;
    keyKind: FeatureElementKindPreview;
    validIntegerKeys: Object;
    validStringKeys: Object;
    constructor();

  }

  export class ImageVariableDescriptorPreview {
    bitmapPixelFormat: number;
    height: number;
    width: number;
    description: string;
    isRequired: boolean;
    modelFeatureKind: LearningModelFeatureKindPreview;
    name: string;
    constructor();

  }

