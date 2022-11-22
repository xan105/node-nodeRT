  export class BasicGeoposition {
    latitude: Number;
    longitude: Number;
    altitude: Number;
    constructor();
  }

  export enum PositionAccuracy {
    default,
    high,
  }

  export enum PositionStatus {
    ready,
    initializing,
    noData,
    disabled,
    notInitialized,
    notAvailable,
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

  export enum GeoshapeType {
    geopoint,
    geocircle,
    geopath,
    geoboundingBox,
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

  export class IGeoshape {
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: Number;
    constructor();

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

  export class GeocoordinateSatelliteData {
    horizontalDilutionOfPrecision: Number;
    positionDilutionOfPrecision: Number;
    verticalDilutionOfPrecision: Number;
    constructor();

  }

  export class VenueData {
    id: String;
    level: String;
    constructor();

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
    constructor();

  }

  export class CivicAddress {
    city: String;
    country: String;
    postalCode: String;
    state: String;
    timestamp: Date;
    constructor();

  }

  export class Geoposition {
    civicAddress: CivicAddress;
    coordinate: Geocoordinate;
    venueData: VenueData;
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

  export class Geovisit {
    position: Geoposition;
    stateChange: VisitStateChange;
    timestamp: Date;
    constructor();

  }

  export class GeovisitStateChangedEventArgs {
    visit: Geovisit;
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

  export class GeovisitTriggerDetails {
    constructor();

    readReports(): Object;

  }

export * as geofencing from "./devices.geolocation.geofencing.js";