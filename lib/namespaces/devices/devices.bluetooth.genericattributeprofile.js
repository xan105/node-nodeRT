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
    "Windows.Storage.Streams",
    "Windows.Devices.Enumeration",
    "Windows.Foundation",
  ]
};

export const {
  GattCharacteristicProperties,
  GattClientCharacteristicConfigurationDescriptorValue,
  GattCommunicationStatus,
  GattOpenStatus,
  GattProtectionLevel,
  GattRequestState,
  GattServiceProviderAdvertisementStatus,
  GattSessionStatus,
  GattSharingMode,
  GattWriteOption,
  GattCharacteristic,
  GattCharacteristicUuids,
  GattCharacteristicsResult,
  GattClientNotificationResult,
  GattDescriptor,
  GattDescriptorUuids,
  GattDescriptorsResult,
  GattDeviceService,
  GattDeviceServicesResult,
  GattLocalCharacteristic,
  GattLocalCharacteristicParameters,
  GattLocalCharacteristicResult,
  GattLocalDescriptor,
  GattLocalDescriptorParameters,
  GattLocalDescriptorResult,
  GattLocalService,
  GattPresentationFormat,
  GattPresentationFormatTypes,
  GattProtocolError,
  GattReadClientCharacteristicConfigurationDescriptorResult,
  GattReadRequest,
  GattReadRequestedEventArgs,
  GattReadResult,
  GattReliableWriteTransaction,
  GattRequestStateChangedEventArgs,
  GattServiceProvider,
  GattServiceProviderAdvertisementStatusChangedEventArgs,
  GattServiceProviderAdvertisingParameters,
  GattServiceProviderResult,
  GattServiceUuids,
  GattSession,
  GattSessionStatusChangedEventArgs,
  GattSubscribedClient,
  GattValueChangedEventArgs,
  GattWriteRequest,
  GattWriteRequestedEventArgs,
  GattWriteResult,
} = load(namespace.name);

reference(namespace.externalReference);
