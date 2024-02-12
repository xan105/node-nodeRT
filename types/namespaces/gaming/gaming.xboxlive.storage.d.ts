  export enum GameSaveErrorStatus {
    ok,
    abort,
    invalidContainerName,
    noAccess,
    outOfLocalStorage,
    userCanceled,
    updateTooBig,
    quotaExceeded,
    providedBufferTooSmall,
    blobNotFound,
    noXboxLiveInfo,
    containerNotInSync,
    containerSyncFailed,
    userHasNoXboxLiveInfo,
    objectExpired,
  }

  export class GameSaveBlobGetResult {
    status: GameSaveErrorStatus;
    value: Object;
    constructor();

  }

  export class GameSaveBlobInfo {
    name: String;
    size: Number;
    constructor();

  }

  export class GameSaveBlobInfoGetResult {
    status: GameSaveErrorStatus;
    value: Object;
    constructor();

  }

  export class GameSaveBlobInfoQuery {
    constructor();

    getBlobInfoAsync(callback: (error: Error, result: GameSaveBlobInfoGetResult) => void): void ;
    getBlobInfoAsync(startIndex: Number, maxNumberOfItems: Number, callback: (error: Error, result: GameSaveBlobInfoGetResult) => void): void ;

    getItemCountAsync(callback: (error: Error, result: Number) => void): void ;

  }

  export class GameSaveContainer {
    name: String;
    provider: GameSaveProvider;
    constructor();

    submitUpdatesAsync(blobsToWrite: Object, blobsToDelete: Object, displayName: String, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    readAsync(blobsToRead: Object, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    getAsync(blobsToRead: Object, callback: (error: Error, result: GameSaveBlobGetResult) => void): void ;

    submitPropertySetUpdatesAsync(blobsToWrite: Object, blobsToDelete: Object, displayName: String, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    createBlobInfoQuery(blobNamePrefix: String): GameSaveBlobInfoQuery;

  }

  export class GameSaveContainerInfo {
    displayName: String;
    lastModifiedTime: Date;
    name: String;
    needsSync: Boolean;
    totalSize: Number;
    constructor();

  }

  export class GameSaveContainerInfoGetResult {
    status: GameSaveErrorStatus;
    value: Object;
    constructor();

  }

  export class GameSaveContainerInfoQuery {
    constructor();

    getContainerInfoAsync(callback: (error: Error, result: GameSaveContainerInfoGetResult) => void): void ;
    getContainerInfoAsync(startIndex: Number, maxNumberOfItems: Number, callback: (error: Error, result: GameSaveContainerInfoGetResult) => void): void ;

    getItemCountAsync(callback: (error: Error, result: Number) => void): void ;

  }

  export class GameSaveOperationResult {
    status: GameSaveErrorStatus;
    constructor();

  }

  export class GameSaveProvider {
    containersChangedSinceLastSync: Object;
    user: Object;
    constructor();

    static getForUserAsync(user: Object, serviceConfigId: String, callback: (error: Error, result: GameSaveProviderGetResult) => void): void ;


    static getSyncOnDemandForUserAsync(user: Object, serviceConfigId: String, callback: (error: Error, result: GameSaveProviderGetResult) => void): void ;


    deleteContainerAsync(name: String, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    getRemainingBytesInQuotaAsync(callback: (error: Error, result: Number) => void): void ;

    createContainer(name: String): GameSaveContainer;

    createContainerInfoQuery(): GameSaveContainerInfoQuery;
    createContainerInfoQuery(containerNamePrefix: String): GameSaveContainerInfoQuery;

  }

  export class GameSaveProviderGetResult {
    status: GameSaveErrorStatus;
    value: GameSaveProvider;
    constructor();

  }

