import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ai.machinelearning
  name: "Windows.AI.MachineLearning",
  externalReference: [
    "Windows.Graphics.Imaging", 
    "Windows.Media", 
    "Windows.Storage", 
    "Windows.Storage.Streams", 
    "System.Collections.Generic", 
    "Windows.Graphics.DirectX.Direct3D11", 
    "Windows.Foundation"
  ]
};

export const {
  ImageFeatureDescriptor, 	
  ImageFeatureValue,
  LearningModel,
  LearningModelBinding,
  LearningModelDevice,
  LearningModelEvaluationResult,
  LearningModelSession,
  LearningModelSessionOptions,
  MapFeatureDescriptor,
  SequenceFeatureDescriptor,	
  TensorBoolean,
  TensorDouble,
  TensorFeatureDescriptor,
  TensorFloat,
  TensorFloat16Bit,
  TensorInt16Bit,
  TensorInt32Bit,
  TensorInt64Bit,
  TensorInt8Bit,
  TensorString,
  TensorUInt16Bit,
  TensorUInt32Bit,
  TensorUInt64Bit,
  TensorUInt8Bit,
  MachineLearningContract,
  ILearningModelFeatureDescriptor,
  ILearningModelFeatureValue,
  ILearningModelOperatorProvider,
  ITensor,
  LearningModelDeviceKind,
  LearningModelFeatureKind,
  LearningModelPixelRange,
  TensorKind
} = load(namespace.name);

reference(namespace.externalReference);

export * as preview from "./ai.machinelearning.preview.js";