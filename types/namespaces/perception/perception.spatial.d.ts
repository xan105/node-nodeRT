  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class Quaternion {
    x: Number;
    y: Number;
    z: Number;
    w: Number;
    constructor();
  }

  export class Matrix4x4 {
    m11: Number;
    m12: Number;
    m13: Number;
    m14: Number;
    m21: Number;
    m22: Number;
    m23: Number;
    m24: Number;
    m31: Number;
    m32: Number;
    m33: Number;
    m34: Number;
    m41: Number;
    m42: Number;
    m43: Number;
    m44: Number;
    constructor();
  }

  export class SpatialBoundingBox {
    center: Vector3;
    extents: Vector3;
    constructor();
  }

  export class SpatialBoundingFrustum {
    near: Plane;
    far: Plane;
    right: Plane;
    left: Plane;
    top: Plane;
    bottom: Plane;
    constructor();
  }

  export class SpatialBoundingOrientedBox {
    center: Vector3;
    extents: Vector3;
    orientation: Quaternion;
    constructor();
  }

  export class SpatialBoundingSphere {
    center: Vector3;
    radius: Number;
    constructor();
  }

  export class SpatialRay {
    origin: Vector3;
    direction: Vector3;
    constructor();
  }

  export enum SpatialAnchorExportPurpose {
    relocalization,
    sharing,
  }

  export enum SpatialEntityWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export enum SpatialLocatability {
    unavailable,
    orientationOnly,
    positionalTrackingActivating,
    positionalTrackingActive,
    positionalTrackingInhibited,
  }

  export enum SpatialLookDirectionRange {
    forwardOnly,
    omnidirectional,
  }

  export enum SpatialMovementRange {
    noMovement,
    bounded,
  }

  export enum SpatialPerceptionAccessStatus {
    unspecified,
    allowed,
    deniedByUser,
    deniedBySystem,
  }

  export class SpatialAnchor {
    coordinateSystem: SpatialCoordinateSystem;
    rawCoordinateSystem: SpatialCoordinateSystem;
    removedByUser: Boolean;
    constructor();

    static tryCreateRelativeTo(coordinateSystem: SpatialCoordinateSystem): SpatialAnchor;
    static tryCreateRelativeTo(coordinateSystem: SpatialCoordinateSystem, position: Vector3): SpatialAnchor;
    static tryCreateRelativeTo(coordinateSystem: SpatialCoordinateSystem, position: Vector3, orientation: Quaternion): SpatialAnchor;


    addListener(type: "RawCoordinateSystemAdjusted", listener: (ev: Event) => void): void ;
    removeListener(type: "RawCoordinateSystemAdjusted", listener: (ev: Event) => void): void ;
    on(type: "RawCoordinateSystemAdjusted", listener: (ev: Event) => void): void ;
    off(type: "RawCoordinateSystemAdjusted", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpatialAnchorExportSufficiency {
    isMinimallySufficient: Boolean;
    recommendedSufficiencyLevel: Number;
    sufficiencyLevel: Number;
    constructor();

  }

  export class SpatialAnchorExporter {
    constructor();

    static requestAccessAsync(callback: (error: Error, result: SpatialPerceptionAccessStatus) => void): void ;


    static getDefault(): SpatialAnchorExporter;


    getAnchorExportSufficiencyAsync(anchor: SpatialAnchor, purpose: SpatialAnchorExportPurpose, callback: (error: Error, result: SpatialAnchorExportSufficiency) => void): void ;

    tryExportAnchorAsync(anchor: SpatialAnchor, purpose: SpatialAnchorExportPurpose, stream: Object, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class SpatialAnchorManager {
    constructor();

    static requestStoreAsync(callback: (error: Error, result: SpatialAnchorStore) => void): void ;


  }

  export class SpatialAnchorRawCoordinateSystemAdjustedEventArgs {
    oldRawCoordinateSystemToNewRawCoordinateSystemTransform: Matrix4x4;
    constructor();

  }

  export class SpatialAnchorStore {
    constructor();

    getAllSavedAnchors(): Object;

    trySave(id: String, anchor: SpatialAnchor): Boolean;

    remove(id: String): void;

    clear(): void;

  }

  export class SpatialAnchorTransferManager {
    constructor();

    static tryImportAnchorsAsync(stream: Object, callback: (error: Error, result: Object) => void): void ;


    static tryExportAnchorsAsync(anchors: Object, stream: Object, callback: (error: Error, result: Boolean) => void): void ;


    static requestAccessAsync(callback: (error: Error, result: SpatialPerceptionAccessStatus) => void): void ;


  }

  export class SpatialBoundingVolume {
    constructor();

    static fromBox(coordinateSystem: SpatialCoordinateSystem, box: SpatialBoundingBox): SpatialBoundingVolume;


    static fromOrientedBox(coordinateSystem: SpatialCoordinateSystem, box: SpatialBoundingOrientedBox): SpatialBoundingVolume;


    static fromSphere(coordinateSystem: SpatialCoordinateSystem, sphere: SpatialBoundingSphere): SpatialBoundingVolume;


    static fromFrustum(coordinateSystem: SpatialCoordinateSystem, frustum: SpatialBoundingFrustum): SpatialBoundingVolume;


  }

  export class SpatialCoordinateSystem {
    constructor();

    tryGetTransformTo(target: SpatialCoordinateSystem): Matrix4x4;

  }

  export class SpatialEntity {
    anchor: SpatialAnchor;
    id: String;
    properties: Object;
    constructor();
    constructor(spatialAnchor: SpatialAnchor);
    constructor(spatialAnchor: SpatialAnchor, propertySet: Object);

  }

  export class SpatialEntityAddedEventArgs {
    entity: SpatialEntity;
    constructor();

  }

  export class SpatialEntityRemovedEventArgs {
    entity: SpatialEntity;
    constructor();

  }

  export class SpatialEntityStore {
    static isSupported: Boolean;
    constructor();

    static tryGet(session: Object): SpatialEntityStore;


    saveAsync(entity: SpatialEntity, callback: (error: Error) => void): void ;

    removeAsync(entity: SpatialEntity, callback: (error: Error) => void): void ;

    createEntityWatcher(): SpatialEntityWatcher;

  }

  export class SpatialEntityUpdatedEventArgs {
    entity: SpatialEntity;
    constructor();

  }

  export class SpatialEntityWatcher {
    status: SpatialEntityWatcherStatus;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpatialLocation {
    absoluteAngularAcceleration: Quaternion;
    absoluteAngularVelocity: Quaternion;
    absoluteLinearAcceleration: Vector3;
    absoluteLinearVelocity: Vector3;
    orientation: Quaternion;
    position: Vector3;
    absoluteAngularAccelerationAxisAngle: Vector3;
    absoluteAngularVelocityAxisAngle: Vector3;
    constructor();

  }

  export class SpatialLocator {
    locatability: SpatialLocatability;
    constructor();

    static getDefault(): SpatialLocator;


    tryLocateAtTimestamp(timestamp: Object, coordinateSystem: SpatialCoordinateSystem): SpatialLocation;

    createAttachedFrameOfReferenceAtCurrentHeading(): SpatialLocatorAttachedFrameOfReference;
    createAttachedFrameOfReferenceAtCurrentHeading(relativePosition: Vector3): SpatialLocatorAttachedFrameOfReference;
    createAttachedFrameOfReferenceAtCurrentHeading(relativePosition: Vector3, relativeOrientation: Quaternion): SpatialLocatorAttachedFrameOfReference;
    createAttachedFrameOfReferenceAtCurrentHeading(relativePosition: Vector3, relativeOrientation: Quaternion, relativeHeadingInRadians: Number): SpatialLocatorAttachedFrameOfReference;

    createStationaryFrameOfReferenceAtCurrentLocation(): SpatialStationaryFrameOfReference;
    createStationaryFrameOfReferenceAtCurrentLocation(relativePosition: Vector3): SpatialStationaryFrameOfReference;
    createStationaryFrameOfReferenceAtCurrentLocation(relativePosition: Vector3, relativeOrientation: Quaternion): SpatialStationaryFrameOfReference;
    createStationaryFrameOfReferenceAtCurrentLocation(relativePosition: Vector3, relativeOrientation: Quaternion, relativeHeadingInRadians: Number): SpatialStationaryFrameOfReference;

    addListener(type: "LocatabilityChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "LocatabilityChanged", listener: (ev: Event) => void): void ;
    on(type: "LocatabilityChanged", listener: (ev: Event) => void): void ;
    off(type: "LocatabilityChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "PositionalTrackingDeactivating", listener: (ev: Event) => void): void ;
    removeListener(type: "PositionalTrackingDeactivating", listener: (ev: Event) => void): void ;
    on(type: "PositionalTrackingDeactivating", listener: (ev: Event) => void): void ;
    off(type: "PositionalTrackingDeactivating", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpatialLocatorAttachedFrameOfReference {
    relativePosition: Vector3;
    relativeOrientation: Quaternion;
    constructor();

    adjustHeading(headingOffsetInRadians: Number): void;

    getStationaryCoordinateSystemAtTimestamp(timestamp: Object): SpatialCoordinateSystem;

    tryGetRelativeHeadingAtTimestamp(timestamp: Object): Number;

  }

  export class SpatialLocatorPositionalTrackingDeactivatingEventArgs {
    canceled: Boolean;
    constructor();

  }

  export class SpatialStageFrameOfReference {
    static current: SpatialStageFrameOfReference;
    coordinateSystem: SpatialCoordinateSystem;
    lookDirectionRange: SpatialLookDirectionRange;
    movementRange: SpatialMovementRange;
    constructor();

    static requestNewStageAsync(callback: (error: Error, result: SpatialStageFrameOfReference) => void): void ;


    getCoordinateSystemAtCurrentLocation(locator: SpatialLocator): SpatialCoordinateSystem;

    tryGetMovementBounds(coordinateSystem: SpatialCoordinateSystem): Array<Vector3>;

    addListener(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    on(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    off(type: "CurrentChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SpatialStationaryFrameOfReference {
    coordinateSystem: SpatialCoordinateSystem;
    constructor();

  }

export * as surfaces from "./perception.spatial.surfaces.js";
