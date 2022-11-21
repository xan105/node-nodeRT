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
    "Windows.Foundation",
    "Windows.ApplicationModel.DataTransfer.DragDrop",
    "Windows.Graphics.Imaging",
  ]
};

export const {
  CoreDragUIContentMode,
  ICoreDropOperationTarget,
  CoreDragInfo,
  CoreDragUIOverride,
  CoreDragDropManager,
  CoreDropOperationTargetRequestedEventArgs,
  CoreDragOperation,
} = load(namespace.name);

reference(namespace.externalReference);
