  export class Rect {
    constructor();
  }

  export class GuidanceContract {
    constructor();
  }

  export class LocalSearchContract {
    constructor();
  }

  export enum MapRouteOptimization {
    time,
    distance,
    timeWithTraffic,
    scenic,
  }

  export enum MapRouteRestrictions {
    none,
    highways,
    tollRoads,
    ferries,
    tunnels,
    dirtRoads,
    motorail,
  }

  export enum MapRouteManeuverKind {
    none,
    start,
    stopover,
    stopoverResume,
    end,
    goStraight,
    uTurnLeft,
    uTurnRight,
    turnKeepLeft,
    turnKeepRight,
    turnLightLeft,
    turnLightRight,
    turnLeft,
    turnRight,
    turnHardLeft,
    turnHardRight,
    freewayEnterLeft,
    freewayEnterRight,
    freewayLeaveLeft,
    freewayLeaveRight,
    freewayContinueLeft,
    freewayContinueRight,
    trafficCircleLeft,
    trafficCircleRight,
    takeFerry,
  }

  export enum MapManeuverNotices {
    none,
    toll,
    unpaved,
  }

  export enum MapLocationFinderStatus {
    success,
    unknownError,
    invalidCredentials,
    badLocation,
    indexFailure,
    networkFailure,
    notSupported,
  }

  export enum MapRouteFinderStatus {
    success,
    unknownError,
    invalidCredentials,
    noRouteFound,
    noRouteFoundWithGivenOptions,
    startPointNotFound,
    endPointNotFound,
    noPedestrianRouteFound,
    networkFailure,
    notSupported,
  }

  export enum MapLocationDesiredAccuracy {
    high,
    low,
  }

  export enum WaypointKind {
    stop,
    via,
  }

  export enum MapServiceDataUsagePreference {
    default,
    offlineMapDataOnly,
  }

  export enum TrafficCongestion {
    unknown,
    light,
    mild,
    medium,
    heavy,
  }

  export enum ManeuverWarningKind {
    none,
    accident,
    administrativeDivisionChange,
    alert,
    blockedRoad,
    checkTimetable,
    congestion,
    construction,
    countryChange,
    disabledVehicle,
    gateAccess,
    getOffTransit,
    getOnTransit,
    illegalUTurn,
    massTransit,
    miscellaneous,
    noIncident,
    other,
    otherNews,
    otherTrafficIncidents,
    plannedEvent,
    privateRoad,
    restrictedTurn,
    roadClosures,
    roadHazard,
    scheduledConstruction,
    seasonalClosures,
    tollbooth,
    tollRoad,
    tollZoneEnter,
    tollZoneExit,
    trafficFlow,
    transitLineChange,
    unpavedRoad,
    unscheduledConstruction,
    weather,
  }

  export enum ManeuverWarningSeverity {
    none,
    lowImpact,
    minor,
    moderate,
    serious,
  }

  export class MapAddress {
    buildingFloor: string;
    buildingName: string;
    buildingRoom: string;
    buildingWing: string;
    continent: string;
    country: string;
    countryCode: string;
    district: string;
    neighborhood: string;
    postCode: string;
    region: string;
    regionCode: string;
    street: string;
    streetNumber: string;
    town: string;
    formattedAddress: string;
    constructor();

  }

  export class MapLocation {
    address: MapAddress;
    description: string;
    displayName: string;
    point: Object;
    constructor();

  }

  export class ManeuverWarning {
    kind: ManeuverWarningKind;
    severity: ManeuverWarningSeverity;
    constructor();

  }

  export class MapRouteManeuver {
    exitNumber: string;
    instructionText: string;
    kind: MapRouteManeuverKind;
    lengthInMeters: number;
    maneuverNotices: MapManeuverNotices;
    startingPoint: Object;
    endHeading: number;
    startHeading: number;
    streetName: string;
    warnings: Object;
    constructor();

  }

  export class MapRouteLeg {
    boundingBox: Object;
    estimatedDuration: number;
    lengthInMeters: number;
    maneuvers: Object;
    path: Object;
    durationWithoutTraffic: number;
    trafficCongestion: TrafficCongestion;
    constructor();

  }

  export class MapRoute {
    boundingBox: Object;
    estimatedDuration: number;
    isTrafficBased: boolean;
    legs: Object;
    lengthInMeters: number;
    path: Object;
    hasBlockedRoads: boolean;
    violatedRestrictions: MapRouteRestrictions;
    durationWithoutTraffic: number;
    trafficCongestion: TrafficCongestion;
    isScenic: boolean;
    constructor();

  }

  export class EnhancedWaypoint {
    kind: WaypointKind;
    point: Object;
    constructor();
    constructor(point: Object, kind: WaypointKind);

  }

  export class MapLocationFinderResult {
    locations: Object;
    status: MapLocationFinderStatus;
    constructor();

  }

  export class MapRouteFinderResult {
    route: MapRoute;
    status: MapRouteFinderStatus;
    alternateRoutes: Object;
    constructor();

  }

  export class MapRouteDrivingOptions {
    routeRestrictions: MapRouteRestrictions;
    routeOptimization: MapRouteOptimization;
    maxAlternateRouteCount: number;
    initialHeading: number;
    departureTime: Date;
    constructor();

  }

  export class PlaceInfo {
    static isShowSupported: boolean;
    displayAddress: string;
    displayName: string;
    geoshape: Object;
    identifier: string;
    constructor();

    static createFromAddress(displayAddress: string): PlaceInfo;
    static createFromAddress(displayAddress: string, displayName: string): PlaceInfo;


    static create(referencePoint: Object): PlaceInfo;
    static create(referencePoint: Object, options: PlaceInfoCreateOptions): PlaceInfo;


    static createFromIdentifier(identifier: string): PlaceInfo;
    static createFromIdentifier(identifier: string, defaultPoint: Object, options: PlaceInfoCreateOptions): PlaceInfo;


    static createFromMapLocation(location: MapLocation): PlaceInfo;


    show(selection: Object): void;
    show(selection: Object, preferredPlacement: number): void;

  }

  export class PlaceInfoCreateOptions {
    displayName: string;
    displayAddress: string;
    constructor();

  }

  export class MapLocationFinder {
    constructor();

    static findLocationsAtAsync(queryPoint: Object, accuracy: MapLocationDesiredAccuracy, callback: (error: Error, result: MapLocationFinderResult) => void): void ;
    static findLocationsAtAsync(queryPoint: Object, callback: (error: Error, result: MapLocationFinderResult) => void): void ;


    static findLocationsAsync(searchText: string, referencePoint: Object, callback: (error: Error, result: MapLocationFinderResult) => void): void ;
    static findLocationsAsync(searchText: string, referencePoint: Object, maxCount: number, callback: (error: Error, result: MapLocationFinderResult) => void): void ;


  }

  export class MapRouteFinder {
    constructor();

    static getDrivingRouteFromEnhancedWaypointsAsync(waypoints: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromEnhancedWaypointsAsync(waypoints: Object, options: MapRouteDrivingOptions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, options: MapRouteDrivingOptions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, optimization: MapRouteOptimization, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, headingInDegrees: number, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, optimization: MapRouteOptimization, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, headingInDegrees: number, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getWalkingRouteAsync(startPoint: Object, endPoint: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getWalkingRouteFromWaypointsAsync(wayPoints: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


  }

  export class MapService {
    static serviceToken: string;
    static worldViewRegionCode: string;
    static dataAttributions: string;
    static dataUsagePreference: MapServiceDataUsagePreference;
    constructor();

  }

  export class MapManager {
    constructor();

    static showDownloadedMapsUI(): void;


    static showMapsUpdateUI(): void;


  }

export * as guidance from "./services.maps.guidance.js";
export * as localsearch from "./services.maps.localsearch.js";
export * as offlinemaps from "./services.maps.offlinemaps.js";