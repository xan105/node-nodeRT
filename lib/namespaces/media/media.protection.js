/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.protection
  name: "windows.media.protection",
  externalReference: [
    "Windows.Media.Playback",
  ]
};

export const {
  GraphicsTrustStatus,
  HdcpProtection,
  HdcpSetProtectionResult,
  ProtectionCapabilityResult,
  RenewalStatus,
  RevocationAndRenewalReasons,
  ComponentLoadFailedEventArgs,
  ComponentRenewal,
  HdcpSession,
  IMediaProtectionServiceRequest,
  MediaProtectionManager,
  MediaProtectionPMPServer,
  MediaProtectionServiceCompletion,
  ProtectionCapabilities,
  RevocationAndRenewalInformation,
  RevocationAndRenewalItem,
  ServiceRequestedEventArgs,
} = load(namespace.name);

reference(namespace.externalReference);

export * as playready from "./media.protection.playready.js";