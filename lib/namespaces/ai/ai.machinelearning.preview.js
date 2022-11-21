/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ai.machinelearning.preview
  name: "windows.ai.machinelearning.preview",
  externalReference: [
    "Windows.Storage",
    "Windows.Storage.Streams",
    "Windows.Graphics.Imaging",
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
  MapVariableDescriptorPreview,
  ImageVariableDescriptorPreview,
} = load(namespace.name);

reference(namespace.externalReference);
