/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.ui.core.animationmetrics
  name: "windows.ui.core.animationmetrics",
  externalReference: [
  ]
};

export const {
  AnimationEffect,
  AnimationEffectTarget,
  PropertyAnimationType,
  AnimationDescription,
  IPropertyAnimation,
  OpacityAnimation,
  PropertyAnimation,
  ScaleAnimation,
  TranslationAnimation,
} = load(namespace.name);

reference(namespace.externalReference);
