/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.bluetooth.genericattributeprofile
  name: "windows.devices.bluetooth.genericattributeprofile",
  externalReference: [
    "Windows.Devices.Bluetooth",
    "Windows.Devices.Enumeration",
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  GattSessionStatus,
  GattCharacteristicProperties,
  GattClientCharacteristicConfigurationDescriptorValue,
  GattProtectionLevel,
  GattWriteOption,
  GattCommunicationStatus,
  GattSharingMode,
  GattOpenStatus,
  GattRequestState,
  GattServiceProviderAdvertisementStatus,
  GattDeviceService,
  GattDeviceServicesResult,
  GattProtocolError,
  GattSession,
  GattSessionStatusChangedEventArgs,
  GattCharacteristic,
  GattCharacteristicsResult,
  GattDescriptor,
  GattPresentationFormat,
  GattReadResult,
  GattReadClientCharacteristicConfigurationDescriptorResult,
  GattValueChangedEventArgs,
  GattDescriptorsResult,
  GattWriteResult,
  GattPresentationFormatTypes,
  GattServiceUuids,
  GattCharacteristicUuids,
  GattDescriptorUuids,
  GattReliableWriteTransaction,
  GattServiceProviderAdvertisingParameters,
  GattLocalCharacteristicParameters,
  GattLocalDescriptorParameters,
  GattServiceProviderResult,
  GattLocalService,
  GattServiceProvider,
  GattServiceProviderAdvertisementStatusChangedEventArgs,
  GattLocalCharacteristicResult,
  GattLocalCharacteristic,
  GattLocalDescriptorResult,
  GattLocalDescriptor,
  GattSubscribedClient,
  GattReadRequestedEventArgs,
  GattWriteRequestedEventArgs,
  GattClientNotificationResult,
  GattReadRequest,
  GattRequestStateChangedEventArgs,
  GattWriteRequest,
} = load(namespace.name);

reference(namespace.externalReference);
