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
    "Windows.Foundation",
    "Windows.Devices.Geolocation",
    "Windows.Storage",
    "Windows.Storage.Streams",
  ]
};

export const {
  PhotoOrientation,
  PropertyPrefetchOptions,
  ThumbnailMode,
  ThumbnailOptions,
  ThumbnailType,
  VideoOrientation,
  BasicProperties,
  DocumentProperties,
  GeotagHelper,
  IStorageItemExtraProperties,
  ImageProperties,
  MusicProperties,
  StorageItemContentProperties,
  StorageItemThumbnail,
  VideoProperties,
} = load(namespace.name);

reference(namespace.externalReference);
