  export class SpatialBoundingOrientedBox {
    center: Vector3;
    extents: Vector3;
    orientation: Quaternion;
    constructor();
  }

  export class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor();
  }

  export class SpatialSurfaceInfo {
    id: string;
    updateTime: Date;
    constructor();

    tryComputeLatestMeshAsync(maxTrianglesPerCubicMeter: number, callback: (error: Error, result: SpatialSurfaceMesh) => void): void ;
    tryComputeLatestMeshAsync(maxTrianglesPerCubicMeter: number, options: SpatialSurfaceMeshOptions, callback: (error: Error, result: SpatialSurfaceMesh) => void): void ;

    tryGetBounds(coordinateSystem: Object): SpatialBoundingOrientedBox;

  }

  export class SpatialSurfaceMeshBuffer {
    data: Object;
    elementCount: number;
    format: number;
    stride: number;
    constructor();

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

  export class SpatialSurfaceMeshOptions {
    static supportedTriangleIndexFormats: Object;
    static supportedVertexNormalFormats: Object;
    static supportedVertexPositionFormats: Object;
    vertexPositionFormat: number;
    vertexNormalFormat: number;
    triangleIndexFormat: number;
    includeVertexNormals: boolean;
    constructor();

  }

  export class SpatialSurfaceObserver {
    constructor();

    static requestAccessAsync(callback: (error: Error, result: number) => void): void ;


    static isSupported(): boolean;


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

