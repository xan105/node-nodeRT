/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ai.machinelearning
  name: "windows.ai.machinelearning",
  externalReference: [
    "Windows.Graphics.Imaging",
    "Windows.Media",
    "Windows.Storage",
    "Windows.Storage.Streams",
    "Windows.Graphics.DirectX.Direct3D11",
    "Windows.Foundation",
  ]
};

export const {
  LearningModelDeviceKind,
  LearningModelFeatureKind,
  LearningModelPixelRange,
  TensorKind,
  ILearningModelFeatureDescriptor,
  ILearningModelFeatureValue,
  ILearningModelOperatorProvider,
  ITensor,
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
} = load(namespace.name);

reference(namespace.externalReference);
