  export enum OfflineMapPackageQueryStatus {
    success,
    unknownError,
    invalidCredentials,
    networkFailure,
  }

  export enum OfflineMapPackageStatus {
    notDownloaded,
    downloading,
    downloaded,
    deleting,
  }

  export enum OfflineMapPackageStartDownloadStatus {
    success,
    unknownError,
    invalidCredentials,
    deniedWithoutCapability,
  }

  export class OfflineMapPackage {
    displayName: String;
    enclosingRegionName: String;
    estimatedSizeInBytes: Number;
    status: OfflineMapPackageStatus;
    constructor();

    static findPackagesAsync(queryPoint: Object, callback: (error: Error, result: OfflineMapPackageQueryResult) => void): void ;


    static findPackagesInBoundingBoxAsync(queryBoundingBox: Object, callback: (error: Error, result: OfflineMapPackageQueryResult) => void): void ;


    static findPackagesInGeocircleAsync(queryCircle: Object, callback: (error: Error, result: OfflineMapPackageQueryResult) => void): void ;


    requestStartDownloadAsync(callback: (error: Error, result: OfflineMapPackageStartDownloadResult) => void): void ;

    addListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "StatusChanged", listener: (ev: Event) => void): void ;
    on(type: "StatusChanged", listener: (ev: Event) => void): void ;
    off(type: "StatusChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class OfflineMapPackageStartDownloadResult {
    status: OfflineMapPackageStartDownloadStatus;
    constructor();

  }

  export class OfflineMapPackageQueryResult {
    packages: Object;
    status: OfflineMapPackageQueryStatus;
    constructor();

  }

