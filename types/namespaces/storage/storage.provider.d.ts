  export class CloudFilesContract {
    constructor();
  }

  export enum CachedFileTarget {
    local,
    remote,
  }

  export enum UIStatus {
    unavailable,
    hidden,
    visible,
    complete,
  }

  export enum FileUpdateStatus {
    incomplete,
    complete,
    userInputNeeded,
    currentlyUnavailable,
    failed,
    completeAndRenamed,
  }

  export enum CachedFileOptions {
    none,
    requireUpdateOnAccess,
    useCachedFileWhenOffline,
    denyAccessWhenOffline,
  }

  export enum ReadActivationMode {
    notNeeded,
    beforeAccess,
  }

  export enum WriteActivationMode {
    readOnly,
    notNeeded,
    afterWrite,
  }

  export enum StorageProviderHydrationPolicy {
    partial,
    progressive,
    full,
    alwaysFull,
  }

  export enum StorageProviderPopulationPolicy {
    full,
    alwaysFull,
  }

  export enum StorageProviderHydrationPolicyModifier {
    none,
    validationRequired,
    streamingAllowed,
  }

  export enum StorageProviderInSyncPolicy {
    default,
    fileCreationTime,
    fileReadOnlyAttribute,
    fileHiddenAttribute,
    fileSystemAttribute,
    directoryCreationTime,
    directoryReadOnlyAttribute,
    directoryHiddenAttribute,
    directorySystemAttribute,
    fileLastWriteTime,
    directoryLastWriteTime,
    preserveInsyncForSyncEngine,
  }

  export enum StorageProviderHardlinkPolicy {
    none,
    allowed,
  }

  export enum StorageProviderProtectionMode {
    unknown,
    personal,
  }

  export enum StorageProviderUriSourceStatus {
    success,
    noSyncRoot,
    fileNotFound,
  }

  export class CachedFileUpdaterUI {
    title: string;
    uIStatus: UIStatus;
    updateTarget: CachedFileTarget;
    updateRequest: FileUpdateRequest;
    constructor();

    getDeferral(): FileUpdateRequestDeferral;

    addListener(type: "FileUpdateRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "FileUpdateRequested", listener: (ev: Event) => void): void ;
    on(type: "FileUpdateRequested", listener: (ev: Event) => void): void ;
    off(type: "FileUpdateRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: "UIRequested", listener: (ev: Event) => void): void ;
    removeListener(type: "UIRequested", listener: (ev: Event) => void): void ;
    on(type: "UIRequested", listener: (ev: Event) => void): void ;
    off(type: "UIRequested", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FileUpdateRequestedEventArgs {
    request: FileUpdateRequest;
    constructor();

  }

  export class FileUpdateRequest {
    status: FileUpdateStatus;
    contentId: string;
    file: Object;
    userInputNeededMessage: string;
    constructor();

    getDeferral(): FileUpdateRequestDeferral;

    updateLocalFile(value: Object): void;

  }

  export class FileUpdateRequestDeferral {
    constructor();

    complete(): void;

  }

  export class CachedFileUpdater {
    constructor();

    static setUpdateInformation(file: Object, contentId: string, readMode: ReadActivationMode, writeMode: WriteActivationMode, options: CachedFileOptions): void;


  }

  export class IStorageProviderPropertyCapabilities {
    constructor();

    isPropertySupported(propertyCanonicalName: string): boolean;

  }

  export class StorageProviderItemProperty {
    value: string;
    id: number;
    iconResource: string;
    constructor();

  }

  export class StorageProviderItemProperties {
    constructor();

    static setAsync(item: Object, itemProperties: Object, callback: (error: Error) => void): void ;


  }

  export class IStorageProviderItemPropertySource {
    constructor();

    getItemProperties(itemPath: string): Object;

  }

  export class StorageProviderItemPropertyDefinition {
    id: number;
    displayNameResource: string;
    constructor();

  }

  export class StorageProviderSyncRootInfo {
    version: string;
    showSiblingsAsGroup: boolean;
    recycleBinUri: Object;
    protectionMode: StorageProviderProtectionMode;
    populationPolicy: StorageProviderPopulationPolicy;
    path: Object;
    inSyncPolicy: StorageProviderInSyncPolicy;
    id: string;
    iconResource: string;
    hydrationPolicyModifier: StorageProviderHydrationPolicyModifier;
    hydrationPolicy: StorageProviderHydrationPolicy;
    hardlinkPolicy: StorageProviderHardlinkPolicy;
    displayNameResource: string;
    context: Object;
    allowPinning: boolean;
    storageProviderItemPropertyDefinitions: Object;
    constructor();

  }

  export class StorageProviderGetContentInfoForPathResult {
    status: StorageProviderUriSourceStatus;
    contentUri: string;
    contentId: string;
    constructor();

  }

  export class StorageProviderGetPathForContentUriResult {
    status: StorageProviderUriSourceStatus;
    path: string;
    constructor();

  }

  export class IStorageProviderUriSource {
    constructor();

    getPathForContentUri(contentUri: string, result: StorageProviderGetPathForContentUriResult): void;

    getContentInfoForPath(path: string, result: StorageProviderGetContentInfoForPathResult): void;

  }

  export class StorageProviderSyncRootManager {
    constructor();

    static register(syncRootInformation: StorageProviderSyncRootInfo): void;


    static unregister(id: string): void;


    static getSyncRootInformationForFolder(folder: Object): StorageProviderSyncRootInfo;


    static getSyncRootInformationForId(id: string): StorageProviderSyncRootInfo;


    static getCurrentSyncRoots(): Object;


  }

