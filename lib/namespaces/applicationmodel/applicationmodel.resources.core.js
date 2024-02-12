/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.applicationmodel.resources.core
  name: "windows.applicationmodel.resources.core",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage",
    "Windows.Storage.Streams",
    "Windows.UI",
  ]
};

export const {
  ResourceCandidateKind,
  ResourceQualifierPersistence,
  NamedResource,
  ResourceCandidate,
  ResourceCandidateVectorView,
  ResourceContext,
  ResourceContextLanguagesVectorView,
  ResourceManager,
  ResourceMap,
  ResourceMapIterator,
  ResourceMapMapView,
  ResourceMapMapViewIterator,
  ResourceQualifier,
  ResourceQualifierMapView,
  ResourceQualifierObservableMap,
  ResourceQualifierVectorView,
} = load(namespace.name);

reference(namespace.externalReference);
