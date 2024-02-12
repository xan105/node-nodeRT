/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.pointofservice.provider
  name: "windows.devices.pointofservice.provider",
  externalReference: [
    "Windows.Foundation",
    "Windows.Devices.PointOfService",
    "Windows.Graphics.Imaging",
    "Windows.Storage.Streams",
  ]
};

export const {
  BarcodeScannerTriggerState,
  BarcodeScannerDisableScannerRequest,
  BarcodeScannerDisableScannerRequestEventArgs,
  BarcodeScannerEnableScannerRequest,
  BarcodeScannerEnableScannerRequestEventArgs,
  BarcodeScannerFrameReader,
  BarcodeScannerFrameReaderFrameArrivedEventArgs,
  BarcodeScannerGetSymbologyAttributesRequest,
  BarcodeScannerGetSymbologyAttributesRequestEventArgs,
  BarcodeScannerHideVideoPreviewRequest,
  BarcodeScannerHideVideoPreviewRequestEventArgs,
  BarcodeScannerProviderConnection,
  BarcodeScannerProviderTriggerDetails,
  BarcodeScannerSetActiveSymbologiesRequest,
  BarcodeScannerSetActiveSymbologiesRequestEventArgs,
  BarcodeScannerSetSymbologyAttributesRequest,
  BarcodeScannerSetSymbologyAttributesRequestEventArgs,
  BarcodeScannerStartSoftwareTriggerRequest,
  BarcodeScannerStartSoftwareTriggerRequestEventArgs,
  BarcodeScannerStopSoftwareTriggerRequest,
  BarcodeScannerStopSoftwareTriggerRequestEventArgs,
  BarcodeScannerVideoFrame,
  BarcodeSymbologyAttributesBuilder,
} = load(namespace.name);

reference(namespace.externalReference);
