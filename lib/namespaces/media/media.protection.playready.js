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
    "Windows.Media.Protection",
    "Windows.Media.Core",
    "Windows.Storage",
  ]
};

export const {
  PlayReadyDecryptorSetup,
  PlayReadyEncryptionAlgorithm,
  PlayReadyHardwareDRMFeatures,
  PlayReadyITADataFormat,
  NDCertificateType,
  NDCertificatePlatformID,
  NDCertificateFeature,
  NDProximityDetectionType,
  NDMediaStreamType,
  NDContentIDType,
  NDClosedCaptionFormat,
  NDStartAsyncOptions,
  PlayReadyContentHeader,
  PlayReadySoapMessage,
  PlayReadyContentResolver,
  PlayReadyIndividualizationServiceRequest,
  PlayReadyDomainJoinServiceRequest,
  PlayReadyDomainLeaveServiceRequest,
  PlayReadyLicenseIterable,
  PlayReadyLicenseAcquisitionServiceRequest,
  PlayReadyMeteringReportServiceRequest,
  PlayReadyRevocationServiceRequest,
  PlayReadyLicenseManagement,
  IPlayReadyLicense,
  PlayReadyLicense,
  PlayReadyLicenseIterator,
  IPlayReadyDomain,
  PlayReadyDomain,
  PlayReadyDomainIterable,
  PlayReadyDomainIterator,
  PlayReadyStatics,
  PlayReadySecureStopServiceRequest,
  PlayReadySecureStopIterable,
  PlayReadySecureStopIterator,
  PlayReadyITADataGenerator,
  IPlayReadyLicenseSession,
  IPlayReadyLicenseSession2,
  PlayReadyLicenseSession,
  INDDownloadEngine,
  NDDownloadEngineNotifier,
  INDDownloadEngineNotifier,
  INDLicenseFetchDescriptor,
  INDCustomData,
  INDStreamParser,
  NDStreamParserNotifier,
  INDStreamParserNotifier,
  INDSendResult,
  INDMessenger,
  NDTCPMessenger,
  INDTransmitterProperties,
  INDStartResult,
  INDLicenseFetchResult,
  NDLicenseFetchDescriptor,
  INDRegistrationCompletedEventArgs,
  NDCustomData,
  INDProximityDetectionCompletedEventArgs,
  INDLicenseFetchCompletedEventArgs,
  NDClient,
  INDClosedCaptionDataReceivedEventArgs,
  INDStorageFileHelper,
  NDStorageFileHelper,
  IPlayReadyServiceRequest,
  IPlayReadyLicenseAcquisitionServiceRequest,
  IPlayReadySecureStopServiceRequest,
} = load(namespace.name);

reference(namespace.externalReference);
