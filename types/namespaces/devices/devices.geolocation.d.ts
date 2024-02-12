  export class BasicGeoposition {
    latitude: Number;
    longitude: Number;
    altitude: Number;
    constructor();
  }

  export enum AltitudeReferenceSystem {
    unspecified,
    terrain,
    ellipsoid,
    geoid,
    surface,
  }

  export enum GeolocationAccessStatus {
    unspecified,
    allowed,
    denied,
  }

  export enum GeoshapeType {
    geopoint,
    geocircle,
    geopath,
    geoboundingBox,
  }

  export enum PositionAccuracy {
    default,
    high,
  }

  export enum PositionSource {
    cellular,
    satellite,
    wiFi,
    iPAddress,
    unknown,
    default,
    obfuscated,
  }

  export enum PositionStatus {
    ready,
    initializing,
    noData,
    disabled,
    notInitialized,
    notAvailable,
  }

  export enum VisitMonitoringScope {
    venue,
    city,
  }

  export enum VisitStateChange {
    trackingLost,
    arrived,
    departed,
    otherMovement,
  }

  export class CivicAddress {
    city: String;
    country: String;
    postalCode: String;
    state: String;
    timestamp: Date;
    constructor();

  }

  export class GeoboundingBox {
    center: BasicGeoposition;
    maxAltitude: Number;
    minAltitude: Number;
    northwestCorner: BasicGeoposition;
    southeastCorner: BasicGeoposition;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: Number;
    constructor();
    constructor(northwestCorner: BasicGeoposition, southeastCorner: BasicGeoposition);
    constructor(northwestCorner: BasicGeoposition, southeastCorner: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(northwestCorner: BasicGeoposition, southeastCorner: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: Number);

    static tryCompute(positions: Object): GeoboundingBox;
    static tryCompute(positions: Object, altitudeRefSystem: AltitudeReferenceSystem): GeoboundingBox;
    static tryCompute(positions: Object, altitudeRefSystem: AltitudeReferenceSystem, spatialReferenceId: Number): GeoboundingBox;


  }

  export class Geocircle {
    center: BasicGeoposition;
    radius: Number;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: Number;
    constructor();
    constructor(position: BasicGeoposition, radius: Number);
    constructor(position: BasicGeoposition, radius: Number, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(position: BasicGeoposition, radius: Number, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: Number);

  }

  export class Geocoordinate {
    accuracy: Number;
    altitude: Number;
    altitudeAccuracy: Number;
    heading: Number;
    latitude: Number;
    longitude: Number;
    speed: Number;
    timestamp: Date;
    point: Geopoint;
    positionSource: PositionSource;
    satelliteData: GeocoordinateSatelliteData;
    positionSourceTimestamp: Date;
    isRemoteSource: Boolean;
    constructor();

  }

  export class GeocoordinateSatelliteData {
    horizontalDilutionOfPrecision: Number;
    positionDilutionOfPrecision: Number;
    verticalDilutionOfPrecision: Number;
    geometricDilutionOfPrecision: Number;
    timeDilutionOfPrecision: Number;
    constructor();

  }

  export class Geolocator {
    static defaultGeoposition: BasicGeoposition;
    static isDefaultGeopositionRecommended: Boolean;
    reportInterval: Number;
    movementThreshold: Number;
    desiredAccuracy: PositionAccuracy;
    locationStatus: PositionStatus;
    desiredAccuracyInMeters: Number;
    constructor();

    static requestAccessAsync(callback: (error: Error, result: GeolocationAccessStatus) => void): void ;


    static getGeopositionHistoryAsync(startTime: Date, callback: (error: Error, result: Object) => void): void ;
    static getGeopositionHistoryAsync(startTime: Date, duration: Number, callback: (error: Error, result: Object) => void): void ;


    getGeopositionAsync(callback: (error: Error, result: Geoposition) => void): void ;
    getGeopositionAsync(maximumAge: Number, timeout: Number, callback: (error: Error, result: Geoposition) => void): void ;

    allowFallbackToConsentlessPositions(): void;

    addListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "PositionChanged", listener: (ev: Event) => void): void ;
    on(type: "PositionChanged", listener: (ev: Event) => void): void ;
    off(type: "PositionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class Geopath {
    positions: Object;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: Number;
    constructor();
    constructor(positions: Object);
    constructor(positions: Object, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(positions: Object, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: Number);

  }

  export class Geopoint {
    position: BasicGeoposition;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: Number;
    constructor();
    constructor(position: BasicGeoposition);
    constructor(position: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(position: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: Number);

  }

  export class Geoposition {
    civicAddress: CivicAddress;
    coordinate: Geocoordinate;
    venueData: VenueData;
    constructor();

  }

  export class Geovisit {
    position: Geoposition;
    stateChange: VisitStateChange;
    timestamp: Date;
    constructor();

  }

  export class GeovisitMonitor {
    monitoringScope: VisitMonitoringScope;
    constructor();

    static getLastReportAsync(callback: (error: Error, result: Geovisit) => void): void ;


    start(value: VisitMonitoringScope): void;

    stop(): void;

    addListener(type: "VisitStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "VisitStateChanged", listener: (ev: Event) => void): void ;
    on(type: "VisitStateChanged", listener: (ev: Event) => void): void ;
    off(type: "VisitStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GeovisitStateChangedEventArgs {
    visit: Geovisit;
    constructor();

  }

  export class GeovisitTriggerDetails {
    constructor();

    readReports(): Object;

  }

  export class IGeoshape {
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: Number;
    constructor();

  }

  export class PositionChangedEventArgs {
    position: Geoposition;
    constructor();

  }

  export class StatusChangedEventArgs {
    status: PositionStatus;
    constructor();

  }

  export class VenueData {
    id: String;
    level: String;
    constructor();

  }

export const AltitudeReferenceSystem: any;
export const GeolocationAccessStatus: any;
export const GeoshapeType: any;
export const PositionAccuracy: any;
export const PositionSource: any;
export const PositionStatus: any;
export const VisitMonitoringScope: any;
export const VisitStateChange: any;
export const CivicAddress: any;
export const GeoboundingBox: any;
export const Geocircle: any;
export const Geocoordinate: any;
export const GeocoordinateSatelliteData: any;
export const Geolocator: any;
export const Geopath: any;
export const Geopoint: any;
export const Geoposition: any;
export const Geovisit: any;
export const GeovisitMonitor: any;
export const GeovisitStateChangedEventArgs: any;
export const GeovisitTriggerDetails: any;
export const IGeoshape: any;
export const PositionChangedEventArgs: any;
export const StatusChangedEventArgs: any;
export const VenueData: any;
export * as geofencing from "./devices.geolocation.geofencing.js";
export * as provider from "./devices.geolocation.provider.js";
