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

  export class GameSaveContainer {
    name: string;
    provider: GameSaveProvider;
    constructor();

    submitUpdatesAsync(blobsToWrite: Object, blobsToDelete: Object, displayName: string, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    readAsync(blobsToRead: Object, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    getAsync(blobsToRead: Object, callback: (error: Error, result: GameSaveBlobGetResult) => void): void ;

    submitPropertySetUpdatesAsync(blobsToWrite: Object, blobsToDelete: Object, displayName: string, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    createBlobInfoQuery(blobNamePrefix: string): GameSaveBlobInfoQuery;

  }

  export class GameSaveOperationResult {
    status: GameSaveErrorStatus;
    constructor();

  }

  export class GameSaveContainerInfoQuery {
    constructor();

    getContainerInfoAsync(callback: (error: Error, result: GameSaveContainerInfoGetResult) => void): void ;
    getContainerInfoAsync(startIndex: number, maxNumberOfItems: number, callback: (error: Error, result: GameSaveContainerInfoGetResult) => void): void ;

    getItemCountAsync(callback: (error: Error, result: number) => void): void ;

  }

  export class GameSaveProviderGetResult {
    status: GameSaveErrorStatus;
    value: GameSaveProvider;
    constructor();

  }

  export class GameSaveProvider {
    containersChangedSinceLastSync: Object;
    user: Object;
    constructor();

    static getForUserAsync(user: Object, serviceConfigId: string, callback: (error: Error, result: GameSaveProviderGetResult) => void): void ;


    static getSyncOnDemandForUserAsync(user: Object, serviceConfigId: string, callback: (error: Error, result: GameSaveProviderGetResult) => void): void ;


    deleteContainerAsync(name: string, callback: (error: Error, result: GameSaveOperationResult) => void): void ;

    getRemainingBytesInQuotaAsync(callback: (error: Error, result: number) => void): void ;

    createContainer(name: string): GameSaveContainer;

    createContainerInfoQuery(): GameSaveContainerInfoQuery;
    createContainerInfoQuery(containerNamePrefix: string): GameSaveContainerInfoQuery;

  }

  export class GameSaveBlobGetResult {
    status: GameSaveErrorStatus;
    value: Object;
    constructor();

  }

  export class GameSaveBlobInfoQuery {
    constructor();

    getBlobInfoAsync(callback: (error: Error, result: GameSaveBlobInfoGetResult) => void): void ;
    getBlobInfoAsync(startIndex: number, maxNumberOfItems: number, callback: (error: Error, result: GameSaveBlobInfoGetResult) => void): void ;

    getItemCountAsync(callback: (error: Error, result: number) => void): void ;

  }

  export class GameSaveContainerInfo {
    displayName: string;
    lastModifiedTime: Date;
    name: string;
    needsSync: boolean;
    totalSize: number;
    constructor();

  }

  export class GameSaveBlobInfo {
    name: string;
    size: number;
    constructor();

  }

  export class GameSaveContainerInfoGetResult {
    status: GameSaveErrorStatus;
    value: Object;
    constructor();

  }

  export class GameSaveBlobInfoGetResult {
    status: GameSaveErrorStatus;
    value: Object;
    constructor();

  }

