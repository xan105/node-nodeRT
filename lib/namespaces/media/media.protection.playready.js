/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.media.protection.playready
  name: "windows.media.protection.playready",
  externalReference: [
    "Windows.Foundation",
    "Windows.Media.Core",
    "Windows.Storage",
    "Windows.Media.Protection",
  ]
};

export const {
  NDCertificateFeature,
  NDCertificatePlatformID,
  NDCertificateType,
  NDClosedCaptionFormat,
  NDContentIDType,
  NDMediaStreamType,
  NDProximityDetectionType,
  NDStartAsyncOptions,
  PlayReadyDecryptorSetup,
  PlayReadyEncryptionAlgorithm,
  PlayReadyHardwareDRMFeatures,
  PlayReadyITADataFormat,
  INDClosedCaptionDataReceivedEventArgs,
  INDCustomData,
  INDDownloadEngine,
  INDDownloadEngineNotifier,
  INDLicenseFetchCompletedEventArgs,
  INDLicenseFetchDescriptor,
  INDLicenseFetchResult,
  INDMessenger,
  INDProximityDetectionCompletedEventArgs,
  INDRegistrationCompletedEventArgs,
  INDSendResult,
  INDStartResult,
  INDStorageFileHelper,
  INDStreamParser,
  INDStreamParserNotifier,
  INDTransmitterProperties,
  IPlayReadyDomain,
  IPlayReadyLicense,
  IPlayReadyLicenseAcquisitionServiceRequest,
  IPlayReadyLicenseSession,
  IPlayReadyLicenseSession2,
  IPlayReadySecureStopServiceRequest,
  IPlayReadyServiceRequest,
  NDClient,
  NDCustomData,
  NDDownloadEngineNotifier,
  NDLicenseFetchDescriptor,
  NDStorageFileHelper,
  NDStreamParserNotifier,
  NDTCPMessenger,
  PlayReadyContentHeader,
  PlayReadyContentResolver,
  PlayReadyDomain,
  PlayReadyDomainIterable,
  PlayReadyDomainIterator,
  PlayReadyDomainJoinServiceRequest,
  PlayReadyDomainLeaveServiceRequest,
  PlayReadyITADataGenerator,
  PlayReadyIndividualizationServiceRequest,
  PlayReadyLicense,
  PlayReadyLicenseAcquisitionServiceRequest,
  PlayReadyLicenseIterable,
  PlayReadyLicenseIterator,
  PlayReadyLicenseManagement,
  PlayReadyLicenseSession,
  PlayReadyMeteringReportServiceRequest,
  PlayReadyRevocationServiceRequest,
  PlayReadySecureStopIterable,
  PlayReadySecureStopIterator,
  PlayReadySecureStopServiceRequest,
  PlayReadySoapMessage,
  PlayReadyStatics,
} = load(namespace.name);

reference(namespace.externalReference);
