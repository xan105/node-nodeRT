  export enum MonitoredGeofenceStates {
    none,
    entered,
    exited,
    removed,
  }

  export enum GeofenceState {
    none,
    entered,
    exited,
    removed,
  }

  export enum GeofenceMonitorStatus {
    ready,
    initializing,
    noData,
    disabled,
    notInitialized,
    notAvailable,
  }

  export enum GeofenceRemovalReason {
    used,
    expired,
  }

  export class Geofence {
    duration: number;
    dwellTime: number;
    geoshape: Object;
    id: string;
    monitoredStates: MonitoredGeofenceStates;
    singleUse: boolean;
    startTime: Date;
    constructor();
    constructor(id: string, geoshape: Object);
    constructor(id: string, geoshape: Object, monitoredStates: MonitoredGeofenceStates, singleUse: boolean);
    constructor(id: string, geoshape: Object, monitoredStates: MonitoredGeofenceStates, singleUse: boolean, dwellTime: number);
    constructor(id: string, geoshape: Object, monitoredStates: MonitoredGeofenceStates, singleUse: boolean, dwellTime: number, startTime: Date, duration: number);

  }

  export class GeofenceMonitor {
    static current: GeofenceMonitor;
    geofences: Object;
    lastKnownGeoposition: Object;
    status: GeofenceMonitorStatus;
    constructor();

    readReports(): Object;

    addListener(type: "GeofenceStateChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "GeofenceStateChanged", listener: (ev: Event) => void): void ;
    on(type: "GeofenceStateChanged", listener: (ev: Event) => void): void ;
    off(type: "GeofenceStateChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class GeofenceStateChangeReport {
    geofence: Geofence;
    geoposition: Object;
    newState: GeofenceState;
    removalReason: GeofenceRemovalReason;
    constructor();

  }

