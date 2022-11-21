/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.usb
  name: "windows.devices.usb",
  externalReference: [
    "Windows.Storage.Streams",
    "Windows.Foundation",
  ]
};

export const {
  UsbTransferDirection,
  UsbEndpointType,
  UsbControlRecipient,
  UsbControlTransferType,
  UsbReadOptions,
  UsbWriteOptions,
  UsbControlRequestType,
  UsbSetupPacket,
  UsbDeviceClass,
  UsbDeviceClasses,
  UsbDevice,
  UsbInterface,
  UsbDeviceDescriptor,
  UsbConfiguration,
  UsbDescriptor,
  UsbConfigurationDescriptor,
  UsbInterfaceDescriptor,
  UsbBulkInEndpointDescriptor,
  UsbInterruptInEndpointDescriptor,
  UsbBulkOutEndpointDescriptor,
  UsbInterruptOutEndpointDescriptor,
  UsbEndpointDescriptor,
  UsbInterruptInEventArgs,
  UsbInterruptInPipe,
  UsbBulkInPipe,
  UsbBulkOutPipe,
  UsbInterruptOutPipe,
  UsbInterfaceSetting,
} = load(namespace.name);

reference(namespace.externalReference);
