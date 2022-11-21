/*
Copyright (c) Anthony Beaumont
This source code is licensed under the Apache 2.0 License
found in the LICENSE file in the root directory of this source tree.
*/

//⚠️ This file was auto generated

import { load, reference } from "../../util/load.js";

const namespace = {
  //📖 https://learn.microsoft.com/en-us/uwp/api/windows.services.maps
  name: "windows.services.maps",
  externalReference: [
    "Windows.Devices.Geolocation",
    "Windows.UI.Popups",
  ]
};

export const {
  MapRouteOptimization,
  MapRouteRestrictions,
  MapRouteManeuverKind,
  MapManeuverNotices,
  MapLocationFinderStatus,
  MapRouteFinderStatus,
  MapLocationDesiredAccuracy,
  WaypointKind,
  MapServiceDataUsagePreference,
  TrafficCongestion,
  ManeuverWarningKind,
  ManeuverWarningSeverity,
  MapAddress,
  MapLocation,
  ManeuverWarning,
  MapRouteManeuver,
  MapRouteLeg,
  MapRoute,
  EnhancedWaypoint,
  MapLocationFinderResult,
  MapRouteFinderResult,
  MapRouteDrivingOptions,
  PlaceInfo,
  PlaceInfoCreateOptions,
  MapLocationFinder,
  MapRouteFinder,
  MapService,
  MapManager,
} = load(namespace.name);

reference(namespace.externalReference);

export * as guidance from "./services.maps.guidance.js";
export * as localsearch from "./services.maps.localsearch.js";
export * as offlinemaps from "./services.maps.offlinemaps.js";