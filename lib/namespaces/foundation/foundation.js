/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.foundation
  name: "windows.foundation",
  externalReference: [
    "Windows.Foundation",
  ]
};

export const {
  PropertyType,
  AsyncStatus,
  PropertyValue,
  IStringable,
  Deferral,
  IAsyncInfo,
  IAsyncAction,
  IMemoryBufferReference,
  IMemoryBuffer,
  MemoryBuffer,
  WwwFormUrlDecoder,
  IWwwFormUrlDecoderEntry,
  WwwFormUrlDecoderEntry,
  IGetActivationFactory,
  IPropertyValue,
  Uri,
} = load(namespace.name);

reference(namespace.externalReference);

export * as collections from "./foundation.collections.js";
export * as diagnostics from "./foundation.diagnostics.js";
export * as metadata from "./foundation.metadata.js";
export * as numerics from "./foundation.numerics.js";