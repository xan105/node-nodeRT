/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.graphics.imaging
  name: "windows.graphics.imaging",
  externalReference: [
    "Windows.Foundation",
    "Windows.Storage.Streams",
    "Windows.Graphics.DirectX.Direct3D11",
  ]
};

export const {
  BitmapInterpolationMode,
  BitmapFlip,
  BitmapRotation,
  ColorManagementMode,
  ExifOrientationMode,
  PngFilterMode,
  TiffCompressionMode,
  JpegSubsamplingMode,
  BitmapPixelFormat,
  BitmapAlphaMode,
  BitmapBufferAccessMode,
  BitmapTransform,
  BitmapTypedValue,
  BitmapPropertySet,
  IBitmapPropertiesView,
  BitmapPropertiesView,
  BitmapProperties,
  PixelDataProvider,
  ImageStream,
  IBitmapFrame,
  IBitmapFrameWithSoftwareBitmap,
  BitmapFrame,
  BitmapCodecInformation,
  BitmapDecoder,
  BitmapEncoder,
  BitmapBuffer,
  SoftwareBitmap,
} = load(namespace.name);

reference(namespace.externalReference);
