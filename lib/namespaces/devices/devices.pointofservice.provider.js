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
  ]
};

export const {
  BarcodeScannerTriggerState,
  BarcodeScannerEnableScannerRequest,
  BarcodeScannerEnableScannerRequestEventArgs,
  BarcodeScannerDisableScannerRequest,
  BarcodeScannerDisableScannerRequestEventArgs,
  BarcodeScannerSetActiveSymbologiesRequest,
  BarcodeScannerSetActiveSymbologiesRequestEventArgs,
  BarcodeScannerStartSoftwareTriggerRequest,
  BarcodeScannerStartSoftwareTriggerRequestEventArgs,
  BarcodeScannerStopSoftwareTriggerRequest,
  BarcodeScannerStopSoftwareTriggerRequestEventArgs,
  BarcodeSymbologyAttributesBuilder,
  BarcodeScannerGetSymbologyAttributesRequest,
  BarcodeScannerGetSymbologyAttributesRequestEventArgs,
  BarcodeScannerSetSymbologyAttributesRequest,
  BarcodeScannerSetSymbologyAttributesRequestEventArgs,
  BarcodeScannerHideVideoPreviewRequest,
  BarcodeScannerHideVideoPreviewRequestEventArgs,
  BarcodeScannerProviderConnection,
  BarcodeScannerProviderTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);
