  export class Rect {
    constructor();
  }

  export class GuidanceContract {
    constructor();
  }

  export class LocalSearchContract {
    constructor();
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

  export enum MapLocationDesiredAccuracy {
    high,
    low,
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

  export enum MapManeuverNotices {
    none,
    toll,
    unpaved,
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

  export enum WaypointKind {
    stop,
    via,
  }

  export class EnhancedWaypoint {
    kind: WaypointKind;
    point: Object;
    constructor();
    constructor(point: Object, kind: WaypointKind);

  }

  export class ManeuverWarning {
    kind: ManeuverWarningKind;
    severity: ManeuverWarningSeverity;
    constructor();

  }

  export class MapAddress {
    buildingFloor: String;
    buildingName: String;
    buildingRoom: String;
    buildingWing: String;
    continent: String;
    country: String;
    countryCode: String;
    district: String;
    neighborhood: String;
    postCode: String;
    region: String;
    regionCode: String;
    street: String;
    streetNumber: String;
    town: String;
    formattedAddress: String;
    constructor();

  }

  export class MapLocation {
    address: MapAddress;
    description: String;
    displayName: String;
    point: Object;
    constructor();

  }

  export class MapLocationFinder {
    constructor();

    static findLocationsAtAsync(queryPoint: Object, accuracy: MapLocationDesiredAccuracy, callback: (error: Error, result: MapLocationFinderResult) => void): void ;
    static findLocationsAtAsync(queryPoint: Object, callback: (error: Error, result: MapLocationFinderResult) => void): void ;


    static findLocationsAsync(searchText: String, referencePoint: Object, callback: (error: Error, result: MapLocationFinderResult) => void): void ;
    static findLocationsAsync(searchText: String, referencePoint: Object, maxCount: Number, callback: (error: Error, result: MapLocationFinderResult) => void): void ;


  }

  export class MapLocationFinderResult {
    locations: Object;
    status: MapLocationFinderStatus;
    constructor();

  }

  export class MapManager {
    constructor();

    static showDownloadedMapsUI(): void;


    static showMapsUpdateUI(): void;


  }

  export class MapRoute {
    boundingBox: Object;
    estimatedDuration: Number;
    isTrafficBased: Boolean;
    legs: Object;
    lengthInMeters: Number;
    path: Object;
    hasBlockedRoads: Boolean;
    violatedRestrictions: MapRouteRestrictions;
    durationWithoutTraffic: Number;
    trafficCongestion: TrafficCongestion;
    isScenic: Boolean;
    constructor();

  }

  export class MapRouteDrivingOptions {
    routeRestrictions: MapRouteRestrictions;
    routeOptimization: MapRouteOptimization;
    maxAlternateRouteCount: Number;
    initialHeading: Number;
    departureTime: Date;
    constructor();

  }

  export class MapRouteFinder {
    constructor();

    static getDrivingRouteFromEnhancedWaypointsAsync(waypoints: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromEnhancedWaypointsAsync(waypoints: Object, options: MapRouteDrivingOptions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, options: MapRouteDrivingOptions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, optimization: MapRouteOptimization, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteAsync(startPoint: Object, endPoint: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, headingInDegrees: Number, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, optimization: MapRouteOptimization, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, callback: (error: Error, result: MapRouteFinderResult) => void): void ;
    static getDrivingRouteFromWaypointsAsync(wayPoints: Object, optimization: MapRouteOptimization, restrictions: MapRouteRestrictions, headingInDegrees: Number, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getWalkingRouteAsync(startPoint: Object, endPoint: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


    static getWalkingRouteFromWaypointsAsync(wayPoints: Object, callback: (error: Error, result: MapRouteFinderResult) => void): void ;


  }

  export class MapRouteFinderResult {
    route: MapRoute;
    status: MapRouteFinderStatus;
    alternateRoutes: Object;
    constructor();

  }

  export class MapRouteLeg {
    boundingBox: Object;
    estimatedDuration: Number;
    lengthInMeters: Number;
    maneuvers: Object;
    path: Object;
    durationWithoutTraffic: Number;
    trafficCongestion: TrafficCongestion;
    constructor();

  }

  export class MapRouteManeuver {
    exitNumber: String;
    instructionText: String;
    kind: MapRouteManeuverKind;
    lengthInMeters: Number;
    maneuverNotices: MapManeuverNotices;
    startingPoint: Object;
    endHeading: Number;
    startHeading: Number;
    streetName: String;
    warnings: Object;
    constructor();

  }

  export class MapService {
    static serviceToken: String;
    static worldViewRegionCode: String;
    static dataAttributions: String;
    static dataUsagePreference: MapServiceDataUsagePreference;
    constructor();

  }

  export class PlaceInfo {
    static isShowSupported: Boolean;
    displayAddress: String;
    displayName: String;
    geoshape: Object;
    identifier: String;
    constructor();

    static createFromAddress(displayAddress: String): PlaceInfo;
    static createFromAddress(displayAddress: String, displayName: String): PlaceInfo;


    static create(referencePoint: Object): PlaceInfo;
    static create(referencePoint: Object, options: PlaceInfoCreateOptions): PlaceInfo;


    static createFromIdentifier(identifier: String): PlaceInfo;
    static createFromIdentifier(identifier: String, defaultPoint: Object, options: PlaceInfoCreateOptions): PlaceInfo;


    static createFromMapLocation(location: MapLocation): PlaceInfo;


    show(selection: Object): void;
    show(selection: Object, preferredPlacement: Number): void;

  }

  export class PlaceInfoCreateOptions {
    displayName: String;
    displayAddress: String;
    constructor();

  }

export const ManeuverWarningKind: any;
export const ManeuverWarningSeverity: any;
export const MapLocationDesiredAccuracy: any;
export const MapLocationFinderStatus: any;
export const MapManeuverNotices: any;
export const MapRouteFinderStatus: any;
export const MapRouteManeuverKind: any;
export const MapRouteOptimization: any;
export const MapRouteRestrictions: any;
export const MapServiceDataUsagePreference: any;
export const TrafficCongestion: any;
export const WaypointKind: any;
export const EnhancedWaypoint: any;
export const ManeuverWarning: any;
export const MapAddress: any;
export const MapLocation: any;
export const MapLocationFinder: any;
export const MapLocationFinderResult: any;
export const MapManager: any;
export const MapRoute: any;
export const MapRouteDrivingOptions: any;
export const MapRouteFinder: any;
export const MapRouteFinderResult: any;
export const MapRouteLeg: any;
export const MapRouteManeuver: any;
export const MapService: any;
export const PlaceInfo: any;
export const PlaceInfoCreateOptions: any;
export * as guidance from "./services.maps.guidance.js";
export * as localsearch from "./services.maps.localsearch.js";
export * as offlinemaps from "./services.maps.offlinemaps.js";
