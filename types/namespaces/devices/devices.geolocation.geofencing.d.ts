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

  export enum GeofenceState {
    none,
    entered,
    exited,
    removed,
  }

  export enum MonitoredGeofenceStates {
    none,
    entered,
    exited,
    removed,
  }

  export class Geofence {
    duration: Number;
    dwellTime: Number;
    geoshape: Object;
    id: String;
    monitoredStates: MonitoredGeofenceStates;
    singleUse: Boolean;
    startTime: Date;
    constructor();
    constructor(id: String, geoshape: Object);
    constructor(id: String, geoshape: Object, monitoredStates: MonitoredGeofenceStates, singleUse: Boolean);
    constructor(id: String, geoshape: Object, monitoredStates: MonitoredGeofenceStates, singleUse: Boolean, dwellTime: Number);
    constructor(id: String, geoshape: Object, monitoredStates: MonitoredGeofenceStates, singleUse: Boolean, dwellTime: Number, startTime: Date, duration: Number);

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

