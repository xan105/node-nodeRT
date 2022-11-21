/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.services.maps.localsearch
  name: "windows.services.maps.localsearch",
  externalReference: [
    "Windows.Services.Maps",
    "Windows.Devices.Geolocation",
    "Windows.Globalization",
  ]
};

export const {
  LocalLocationFinderStatus,
  LocalLocation,
  LocalLocationFinderResult,
  LocalLocationRatingInfo,
  LocalLocationHoursOfOperationItem,
  LocalLocationFinder,
  LocalCategories,
  PlaceInfoHelper,
} = load(namespace.name);

reference(namespace.externalReference);
