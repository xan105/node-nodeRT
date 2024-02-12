  export class SpatialBoundingOrientedBox {
    center: Vector3;
    extents: Vector3;
    orientation: Quaternion;
    constructor();
  }

  export class Vector3 {
    x: Number;
    y: Number;
    z: Number;
    constructor();
  }

  export class SpatialSurfaceInfo {
    id: String;
    updateTime: Date;
    constructor();

    tryComputeLatestMeshAsync(maxTrianglesPerCubicMeter: Number, callback: (error: Error, result: SpatialSurfaceMesh) => void): void ;
    tryComputeLatestMeshAsync(maxTrianglesPerCubicMeter: Number, options: SpatialSurfaceMeshOptions, callback: (error: Error, result: SpatialSurfaceMesh) => void): void ;

    tryGetBounds(coordinateSystem: Object): SpatialBoundingOrientedBox;

  }

  export class SpatialSurfaceMesh {
    coordinateSystem: Object;
    surfaceInfo: SpatialSurfaceInfo;
    triangleIndices: SpatialSurfaceMeshBuffer;
    vertexNormals: SpatialSurfaceMeshBuffer;
    vertexPositionScale: Vector3;
    vertexPositions: SpatialSurfaceMeshBuffer;
    constructor();

  }

  export class SpatialSurfaceMeshBuffer {
    data: Object;
    elementCount: Number;
    format: Number;
    stride: Number;
    constructor();

  }

  export class SpatialSurfaceMeshOptions {
    static supportedTriangleIndexFormats: Object;
    static supportedVertexNormalFormats: Object;
    static supportedVertexPositionFormats: Object;
    vertexPositionFormat: Number;
    vertexNormalFormat: Number;
    triangleIndexFormat: Number;
    includeVertexNormals: Boolean;
    constructor();

  }

  export class SpatialSurfaceObserver {
    constructor();

    static requestAccessAsync(callback: (error: Error, result: Number) => void): void ;


    static isSupported(): Boolean;


    getObservedSurfaces(): Object;

    setBoundingVolume(bounds: Object): void;

    setBoundingVolumes(bounds: Object): void;

    addListener(type: "ObservedSurfacesChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ObservedSurfacesChanged", listener: (ev: Event) => void): void ;
    on(type: "ObservedSurfacesChanged", listener: (ev: Event) => void): void ;
    off(type: "ObservedSurfacesChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

