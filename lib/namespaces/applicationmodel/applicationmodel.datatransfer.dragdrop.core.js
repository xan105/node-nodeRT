/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.datatransfer.dragdrop.core
  name: "windows.applicationmodel.datatransfer.dragdrop.core",
  externalReference: [
    "Windows.ApplicationModel.DataTransfer",
    "Windows.ApplicationModel.DataTransfer.DragDrop",
    "Windows.Graphics.Imaging",
    "Windows.Foundation",
  ]
};

export const {
  CoreDragUIContentMode,
  CoreDragDropManager,
  CoreDragInfo,
  CoreDragOperation,
  CoreDragUIOverride,
  CoreDropOperationTargetRequestedEventArgs,
  ICoreDropOperationTarget,
} = load(namespace.name);

reference(namespace.externalReference);
