  export class Color {
    constructor();
  }

  export class BasicGeoposition {
    latitude: number;
    longitude: number;
    altitude: number;
    constructor();
  }

  export enum GuidanceManeuverKind {
    none,
    goStraight,
    uTurnRight,
    uTurnLeft,
    turnKeepRight,
    turnLightRight,
    turnRight,
    turnHardRight,
    keepMiddle,
    turnKeepLeft,
    turnLightLeft,
    turnLeft,
    turnHardLeft,
    freewayEnterRight,
    freewayEnterLeft,
    freewayLeaveRight,
    freewayLeaveLeft,
    freewayKeepRight,
    freewayKeepLeft,
    trafficCircleRight1,
    trafficCircleRight2,
    trafficCircleRight3,
    trafficCircleRight4,
    trafficCircleRight5,
    trafficCircleRight6,
    trafficCircleRight7,
    trafficCircleRight8,
    trafficCircleRight9,
    trafficCircleRight10,
    trafficCircleRight11,
    trafficCircleRight12,
    trafficCircleLeft1,
    trafficCircleLeft2,
    trafficCircleLeft3,
    trafficCircleLeft4,
    trafficCircleLeft5,
    trafficCircleLeft6,
    trafficCircleLeft7,
    trafficCircleLeft8,
    trafficCircleLeft9,
    trafficCircleLeft10,
    trafficCircleLeft11,
    trafficCircleLeft12,
    start,
    end,
    takeFerry,
    passTransitStation,
    leaveTransitStation,
  }

  export enum GuidanceMode {
    none,
    simulation,
    navigation,
    tracking,
  }

  export enum GuidanceAudioMeasurementSystem {
    meters,
    milesAndYards,
    milesAndFeet,
  }

  export enum GuidanceAudioNotifications {
    none,
    maneuver,
    route,
    gps,
    speedLimit,
    traffic,
    trafficCamera,
  }

  export enum GuidanceAudioNotificationKind {
    maneuver,
    route,
    gps,
    speedLimit,
    traffic,
    trafficCamera,
  }

  export enum GuidanceLaneMarkers {
    none,
    lightRight,
    right,
    hardRight,
    straight,
    uTurnLeft,
    hardLeft,
    left,
    lightLeft,
    uTurnRight,
    unknown,
  }

  export class GuidanceRoadSignpost {
    backgroundColor: Object;
    exit: string;
    exitDirections: Object;
    exitNumber: string;
    foregroundColor: Object;
    constructor();

  }

  export class GuidanceManeuver {
    departureRoadName: string;
    departureShortRoadName: string;
    distanceFromPreviousManeuver: number;
    distanceFromRouteStart: number;
    endAngle: number;
    instructionText: string;
    kind: GuidanceManeuverKind;
    nextRoadName: string;
    nextShortRoadName: string;
    roadSignpost: GuidanceRoadSignpost;
    startAngle: number;
    startLocation: Object;
    constructor();

  }

  export class GuidanceRoute {
    boundingBox: Object;
    distance: number;
    duration: number;
    maneuvers: Object;
    path: Object;
    roadSegments: Object;
    constructor();

    static canCreateFromMapRoute(mapRoute: Object): boolean;


    static tryCreateFromMapRoute(mapRoute: Object): GuidanceRoute;


    convertToMapRoute(): Object;

  }

  export class GuidanceMapMatchedCoordinate {
    currentHeading: number;
    currentSpeed: number;
    isOnStreet: boolean;
    location: Object;
    road: GuidanceRoadSegment;
    constructor();

  }

  export class GuidanceLaneInfo {
    isOnRoute: boolean;
    laneMarkers: GuidanceLaneMarkers;
    constructor();

  }

  export class GuidanceUpdatedEventArgs {
    afterNextManeuver: GuidanceManeuver;
    afterNextManeuverDistance: number;
    currentLocation: GuidanceMapMatchedCoordinate;
    distanceToDestination: number;
    elapsedDistance: number;
    elapsedTime: number;
    isNewManeuver: boolean;
    laneInfo: Object;
    mode: GuidanceMode;
    nextManeuver: GuidanceManeuver;
    nextManeuverDistance: number;
    roadName: string;
    route: GuidanceRoute;
    timeToDestination: number;
    constructor();

  }

  export class GuidanceReroutedEventArgs {
    route: GuidanceRoute;
    constructor();

  }

  export class GuidanceAudioNotificationRequestedEventArgs {
    audioFilePaths: Object;
    audioNotification: GuidanceAudioNotificationKind;
    audioText: string;
    constructor();

  }

  export class GuidanceNavigator {
    static useAppProvidedVoice: boolean;
    audioNotifications: GuidanceAudioNotifications;
    audioMeasurementSystem: GuidanceAudioMeasurementSystem;
    isGuidanceAudioMuted: boolean;
    constructor();

    static getCurrent(): GuidanceNavigator;


    startNavigating(route: GuidanceRoute): void;

    startSimulating(route: GuidanceRoute, speedInMetersPerSecond: number): void;

    startTracking(): void;

    pause(): void;

    resume(): void;

    stop(): void;

    repeatLastAudioNotification(): void;

    setGuidanceVoice(voiceId: number, voiceFolder: string): void;

    updateUserLocation(userLocation: Object): void;
    updateUserLocation(userLocation: Object, positionOverride: BasicGeoposition): void;

    addListener(type: "DestinationReached", listener: (ev: Event) => void): void ;
    removeListener(type: "DestinationReached", listener: (ev: Event) => void): void ;
    on(type: "DestinationReached", listener: (ev: Event) => void): void ;
    off(type: "DestinationReached", listener: (ev: Event) => void): void ;
    
    addListener(type: "GuidanceUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "GuidanceUpdated", listener: (ev: Event) => void): void ;
    on(type: "GuidanceUpdated", listener: (ev: Event) => void): void ;
    off(type: "GuidanceUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "RerouteFailed", listener: (ev: Event) => void): void ;
    removeListener(type: "RerouteFailed", listener: (ev: Event) => void): void ;
    on(type: "RerouteFailed", listener: (ev: Event) => void): void ;
    off(type: "RerouteFailed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Rerouted", listener: (ev: Event) => void): void ;
    removeListener(type: "Rerouted", listener: (ev: Event) => void): void ;
    on(type: "Rerouted", listener: (ev: Event) => void): void ;
    off(type: "Rerouted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Rerouting", listener: (ev: Event) => void): void ;
    removeListener(type: "Rerouting", listener: (ev: Event) => void): void ;
    on(type: "Rerouting", listener: (ev: Event) => void): void ;
    off(type: "Rerouting", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserLocationLost", listener: (ev: Event) => void): void ;
    removeListener(type: "UserLocationLost", listener: (ev: Event) => void): void ;
    on(type: "UserLocationLost", listener: (ev: Event) => void): void ;
    off(type: "UserLocationLost", listener: (ev: Event) => void): void ;
    
    addListener(type: "UserLocationRestored", listener: (ev: Event) => void): void ;
    removeListener(type: "UserLocationRestored", listener: (ev: Event) => void): void ;
    on(type: "UserLocationRestored", listener: (ev: Event) => void): void ;
    off(type: "UserLocationRestored", listener: (ev: Event) => void): void ;
    
    addListener(type: "AudioNotificationRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "AudioNotificationRequested", listener: (ev: Event) => void): void ;
    on(type: "AudioNotificationRequested", listener: (ev: Event) => void): void ;
    off(type: "AudioNotificationRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GuidanceRoadSegment {
    id: string;
    isHighway: boolean;
    isTollRoad: boolean;
    isTunnel: boolean;
    path: Object;
    roadName: string;
    shortRoadName: string;
    speedLimit: number;
    travelTime: number;
    isScenic: boolean;
    constructor();

  }

  export class GuidanceTelemetryCollector {
    uploadFrequency: number;
    speedTrigger: number;
    enabled: boolean;
    constructor();

    static getCurrent(): GuidanceTelemetryCollector;


    clearLocalData(): void;

  }

