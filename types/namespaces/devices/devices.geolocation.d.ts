  export class BasicGeoposition {
    latitude: number;
    longitude: number;
    altitude: number;
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
    spatialReferenceId: number;
    constructor();

  }

  export class Geopoint {
    position: BasicGeoposition;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: number;
    constructor();
    constructor(position: BasicGeoposition);
    constructor(position: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(position: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: number);

  }

  export class Geopath {
    positions: Object;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: number;
    constructor();
    constructor(positions: Object);
    constructor(positions: Object, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(positions: Object, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: number);

  }

  export class GeoboundingBox {
    center: BasicGeoposition;
    maxAltitude: number;
    minAltitude: number;
    northwestCorner: BasicGeoposition;
    southeastCorner: BasicGeoposition;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: number;
    constructor();
    constructor(northwestCorner: BasicGeoposition, southeastCorner: BasicGeoposition);
    constructor(northwestCorner: BasicGeoposition, southeastCorner: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(northwestCorner: BasicGeoposition, southeastCorner: BasicGeoposition, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: number);

    static tryCompute(positions: Object): GeoboundingBox;
    static tryCompute(positions: Object, altitudeRefSystem: AltitudeReferenceSystem): GeoboundingBox;
    static tryCompute(positions: Object, altitudeRefSystem: AltitudeReferenceSystem, spatialReferenceId: number): GeoboundingBox;


  }

  export class GeocoordinateSatelliteData {
    horizontalDilutionOfPrecision: number;
    positionDilutionOfPrecision: number;
    verticalDilutionOfPrecision: number;
    constructor();

  }

  export class VenueData {
    id: string;
    level: string;
    constructor();

  }

  export class Geocoordinate {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
    timestamp: Date;
    point: Geopoint;
    positionSource: PositionSource;
    satelliteData: GeocoordinateSatelliteData;
    positionSourceTimestamp: Date;
    constructor();

  }

  export class CivicAddress {
    city: string;
    country: string;
    postalCode: string;
    state: string;
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
    static isDefaultGeopositionRecommended: boolean;
    reportInterval: number;
    movementThreshold: number;
    desiredAccuracy: PositionAccuracy;
    locationStatus: PositionStatus;
    desiredAccuracyInMeters: number;
    constructor();

    static requestAccessAsync(callback: (error: Error, result: GeolocationAccessStatus) => void): void ;


    static getGeopositionHistoryAsync(startTime: Date, callback: (error: Error, result: Object) => void): void ;
    static getGeopositionHistoryAsync(startTime: Date, duration: number, callback: (error: Error, result: Object) => void): void ;


    getGeopositionAsync(callback: (error: Error, result: Geoposition) => void): void ;
    getGeopositionAsync(maximumAge: number, timeout: number, callback: (error: Error, result: Geoposition) => void): void ;

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
    radius: number;
    altitudeReferenceSystem: AltitudeReferenceSystem;
    geoshapeType: GeoshapeType;
    spatialReferenceId: number;
    constructor();
    constructor(position: BasicGeoposition, radius: number);
    constructor(position: BasicGeoposition, radius: number, altitudeReferenceSystem: AltitudeReferenceSystem);
    constructor(position: BasicGeoposition, radius: number, altitudeReferenceSystem: AltitudeReferenceSystem, spatialReferenceId: number);

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