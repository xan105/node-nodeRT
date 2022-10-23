/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ai.machinelearning.preview
  name: "Windows.AI.MachineLearning.Preview",
  externalReference: [
    "Windows.Storage", 
    "Windows.Storage.Streams", 
    "System.Collections.Generic", 
    "Windows.Graphics.Imaging"
  ]
};

export const { 
  LearningModelDeviceKindPreview,
  LearningModelFeatureKindPreview,
  FeatureElementKindPreview,
  LearningModelPreview,
  LearningModelBindingPreview,
  LearningModelEvaluationResultPreview,
  LearningModelDescriptionPreview,
  InferencingOptionsPreview,
  ILearningModelVariableDescriptorPreview,
  LearningModelVariableDescriptorPreview,
  TensorVariableDescriptorPreview,
  SequenceVariableDescriptorPreview,
  MachineLearningContract,
  MapVariableDescriptorPreview,
  ImageVariableDescriptorPreview
} = load(namespace.name);

reference(namespace.externalReference);