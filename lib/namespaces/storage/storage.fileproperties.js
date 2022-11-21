/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.storage.fileproperties
  name: "windows.storage.fileproperties",
  externalReference: [
    "Windows.Devices.Geolocation",
    "Windows.Storage",
    "Windows.Foundation",
    "Windows.Storage.Streams",
  ]
};

export const {
  PropertyPrefetchOptions,
  ThumbnailType,
  ThumbnailMode,
  ThumbnailOptions,
  PhotoOrientation,
  VideoOrientation,
  GeotagHelper,
  StorageItemThumbnail,
  IStorageItemExtraProperties,
  MusicProperties,
  VideoProperties,
  ImageProperties,
  DocumentProperties,
  StorageItemContentProperties,
  BasicProperties,
} = load(namespace.name);

reference(namespace.externalReference);
