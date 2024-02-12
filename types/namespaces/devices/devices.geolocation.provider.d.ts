  export class BasicGeoposition {
    latitude: Number;
    longitude: Number;
    altitude: Number;
    constructor();
  }

  export enum LocationOverrideStatus {
    success,
    accessDenied,
    alreadyStarted,
    other,
  }

  export class GeolocationProvider {
    isOverridden: Boolean;
    constructor();

    setOverridePosition(newPosition: BasicGeoposition, positionSource: Number, accuracyInMeters: Number): LocationOverrideStatus;

    clearOverridePosition(): void;

    addListener(type: "IsOverriddenChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "IsOverriddenChanged", listener: (ev: Event) => void): void ;
    on(type: "IsOverriddenChanged", listener: (ev: Event) => void): void ;
    off(type: "IsOverriddenChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

