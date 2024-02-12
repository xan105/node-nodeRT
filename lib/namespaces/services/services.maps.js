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
  ManeuverWarningKind,
  ManeuverWarningSeverity,
  MapLocationDesiredAccuracy,
  MapLocationFinderStatus,
  MapManeuverNotices,
  MapRouteFinderStatus,
  MapRouteManeuverKind,
  MapRouteOptimization,
  MapRouteRestrictions,
  MapServiceDataUsagePreference,
  TrafficCongestion,
  WaypointKind,
  EnhancedWaypoint,
  ManeuverWarning,
  MapAddress,
  MapLocation,
  MapLocationFinder,
  MapLocationFinderResult,
  MapManager,
  MapRoute,
  MapRouteDrivingOptions,
  MapRouteFinder,
  MapRouteFinderResult,
  MapRouteLeg,
  MapRouteManeuver,
  MapService,
  PlaceInfo,
  PlaceInfoCreateOptions,
} = load(namespace.name);

reference(namespace.externalReference);

export * as guidance from "./services.maps.guidance.js";
export * as localsearch from "./services.maps.localsearch.js";
export * as offlinemaps from "./services.maps.offlinemaps.js";