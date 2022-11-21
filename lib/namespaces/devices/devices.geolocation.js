/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.devices.geolocation
  name: "windows.devices.geolocation",
  externalReference: [
  ]
};

export const {
  PositionAccuracy,
  PositionStatus,
  PositionSource,
  GeoshapeType,
  AltitudeReferenceSystem,
  GeolocationAccessStatus,
  VisitMonitoringScope,
  VisitStateChange,
  IGeoshape,
  Geopoint,
  Geopath,
  GeoboundingBox,
  GeocoordinateSatelliteData,
  VenueData,
  Geocoordinate,
  CivicAddress,
  Geoposition,
  PositionChangedEventArgs,
  StatusChangedEventArgs,
  Geolocator,
  Geocircle,
  Geovisit,
  GeovisitStateChangedEventArgs,
  GeovisitMonitor,
  GeovisitTriggerDetails,
} = load(namespace.name);

reference(namespace.externalReference);

export * as geofencing from "./devices.geolocation.geofencing.js";