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
    title: String;
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
    contentId: String;
    file: Object;
    userInputNeededMessage: String;
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

    static setUpdateInformation(file: Object, contentId: String, readMode: ReadActivationMode, writeMode: WriteActivationMode, options: CachedFileOptions): void;


  }

  export class IStorageProviderPropertyCapabilities {
    constructor();

    isPropertySupported(propertyCanonicalName: String): Boolean;

  }

  export class StorageProviderItemProperty {
    value: String;
    id: Number;
    iconResource: String;
    constructor();

  }

  export class StorageProviderItemProperties {
    constructor();

    static setAsync(item: Object, itemProperties: Object, callback: (error: Error) => void): void ;


  }

  export class IStorageProviderItemPropertySource {
    constructor();

    getItemProperties(itemPath: String): Object;

  }

  export class StorageProviderItemPropertyDefinition {
    id: Number;
    displayNameResource: String;
    constructor();

  }

  export class StorageProviderSyncRootInfo {
    version: String;
    showSiblingsAsGroup: Boolean;
    recycleBinUri: Object;
    protectionMode: StorageProviderProtectionMode;
    populationPolicy: StorageProviderPopulationPolicy;
    path: Object;
    inSyncPolicy: StorageProviderInSyncPolicy;
    id: String;
    iconResource: String;
    hydrationPolicyModifier: StorageProviderHydrationPolicyModifier;
    hydrationPolicy: StorageProviderHydrationPolicy;
    hardlinkPolicy: StorageProviderHardlinkPolicy;
    displayNameResource: String;
    context: Object;
    allowPinning: Boolean;
    storageProviderItemPropertyDefinitions: Object;
    constructor();

  }

  export class StorageProviderGetContentInfoForPathResult {
    status: StorageProviderUriSourceStatus;
    contentUri: String;
    contentId: String;
    constructor();

  }

  export class StorageProviderGetPathForContentUriResult {
    status: StorageProviderUriSourceStatus;
    path: String;
    constructor();

  }

  export class IStorageProviderUriSource {
    constructor();

    getPathForContentUri(contentUri: String, result: StorageProviderGetPathForContentUriResult): void;

    getContentInfoForPath(path: String, result: StorageProviderGetContentInfoForPathResult): void;

  }

  export class StorageProviderSyncRootManager {
    constructor();

    static register(syncRootInformation: StorageProviderSyncRootInfo): void;


    static unregister(id: String): void;


    static getSyncRootInformationForFolder(folder: Object): StorageProviderSyncRootInfo;


    static getSyncRootInformationForId(id: String): StorageProviderSyncRootInfo;


    static getCurrentSyncRoots(): Object;


  }

