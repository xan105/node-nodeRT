/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.services.targetedcontent
  name: "windows.services.targetedcontent",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  TargetedContentInteraction,
  TargetedContentValueKind,
  TargetedContentObjectKind,
  TargetedContentAvailability,
  TargetedContentAppInstallationState,
  TargetedContentSubscription,
  TargetedContentSubscriptionOptions,
  TargetedContentContainer,
  TargetedContentChangedEventArgs,
  TargetedContentAvailabilityChangedEventArgs,
  TargetedContentStateChangedEventArgs,
  TargetedContentCollection,
  TargetedContentObject,
  TargetedContentItem,
  TargetedContentValue,
  TargetedContentItemState,
  TargetedContentFile,
  TargetedContentImage,
  TargetedContentAction,
} = load(namespace.name);

reference(namespace.externalReference);
