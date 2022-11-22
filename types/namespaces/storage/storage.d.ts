  export enum KnownLibraryId {
    music,
    pictures,
    videos,
    documents,
  }

  export enum KnownFolderId {
    appCaptures,
    cameraRoll,
    documentsLibrary,
    homeGroup,
    mediaServerDevices,
    musicLibrary,
    objects3D,
    picturesLibrary,
    playlists,
    recordedCalls,
    removableDevices,
    savedPictures,
    screenshots,
    videosLibrary,
    allAppMods,
    currentAppMods,
  }

  export enum CreationCollisionOption {
    generateUniqueName,
    replaceExisting,
    failIfExists,
    openIfExists,
  }

  export enum NameCollisionOption {
    generateUniqueName,
    replaceExisting,
    failIfExists,
  }

  export enum StorageDeleteOption {
    default,
    permanentDelete,
  }

  export enum StorageItemTypes {
    none,
    file,
    folder,
  }

  export enum FileAttributes {
    normal,
    readOnly,
    directory,
    archive,
    temporary,
    locallyIncomplete,
  }

  export enum FileAccessMode {
    read,
    readWrite,
  }

  export enum StorageLibraryChangeType {
    created,
    deleted,
    movedOrRenamed,
    contentsChanged,
    movedOutOfLibrary,
    movedIntoLibrary,
    contentsReplaced,
    indexingStatusChanged,
    encryptionChanged,
    changeTrackingLost,
  }

  export enum StreamedFileFailureMode {
    failed,
    currentlyUnavailable,
    incomplete,
  }

  export enum StorageOpenOptions {
    none,
    allowOnlyReaders,
    allowReadersAndWriters,
  }

  export enum ApplicationDataLocality {
    local,
    roaming,
    temporary,
    localCache,
  }

  export enum ApplicationDataCreateDisposition {
    always,
    existing,
  }

  export class StorageLibrary {
    folders: Object;
    saveFolder: StorageFolder;
    changeTracker: StorageLibraryChangeTracker;
    constructor();

    static getLibraryForUserAsync(user: Object, libraryId: KnownLibraryId, callback: (error: Error, result: StorageLibrary) => void): void ;


    static getLibraryAsync(libraryId: KnownLibraryId, callback: (error: Error, result: StorageLibrary) => void): void ;


    requestAddFolderAsync(callback: (error: Error, result: StorageFolder) => void): void ;

    requestRemoveFolderAsync(folder: StorageFolder, callback: (error: Error, result: Boolean) => void): void ;

    areFolderSuggestionsAvailableAsync(callback: (error: Error, result: Boolean) => void): void ;

    addListener(type: "DefinitionChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DefinitionChanged", listener: (ev: Event) => void): void ;
    on(type: "DefinitionChanged", listener: (ev: Event) => void): void ;
    off(type: "DefinitionChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StorageFolder {
    attributes: FileAttributes;
    dateCreated: Date;
    name: String;
    path: String;
    displayName: String;
    displayType: String;
    folderRelativeId: String;
    properties: Object;
    provider: StorageProvider;
    constructor();

    static getFolderFromPathAsync(path: String, callback: (error: Error, result: StorageFolder) => void): void ;


    createFileAsync(desiredName: String, callback: (error: Error, result: StorageFile) => void): void ;
    createFileAsync(desiredName: String, options: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    createFolderAsync(desiredName: String, callback: (error: Error, result: StorageFolder) => void): void ;
    createFolderAsync(desiredName: String, options: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;

    getFileAsync(name: String, callback: (error: Error, result: StorageFile) => void): void ;

    getFolderAsync(name: String, callback: (error: Error, result: StorageFolder) => void): void ;

    getItemAsync(name: String, callback: (error: Error, result: IStorageItem) => void): void ;

    getFilesAsync(callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: Number, startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: Number, callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: Number, startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: Number, callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;

    renameAsync(desiredName: String, callback: (error: Error) => void): void ;
    renameAsync(desiredName: String, option: NameCollisionOption, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: StorageDeleteOption, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    getIndexedStateAsync(callback: (error: Error, result: Number) => void): void ;

    getThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    getScaledImageAsThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    getParentAsync(callback: (error: Error, result: StorageFolder) => void): void ;

    tryGetItemAsync(name: String, callback: (error: Error, result: IStorageItem) => void): void ;

    tryGetChangeTracker(): StorageLibraryChangeTracker;

    isOfType(type: StorageItemTypes): Boolean;

    createFileQuery(): Object;
    createFileQuery(query: Number): Object;

    createFileQueryWithOptions(queryOptions: Object): Object;

    createFolderQuery(): Object;
    createFolderQuery(query: Number): Object;

    createFolderQueryWithOptions(queryOptions: Object): Object;

    createItemQuery(): Object;

    createItemQueryWithOptions(queryOptions: Object): Object;

    areQueryOptionsSupported(queryOptions: Object): Boolean;

    isCommonFolderQuerySupported(query: Number): Boolean;

    isCommonFileQuerySupported(query: Number): Boolean;

    isEqual(item: IStorageItem): Boolean;

  }

  export class StorageLibraryChangeTracker {
    constructor();

    getChangeReader(): StorageLibraryChangeReader;

    enable(): void;

    reset(): void;

  }

  export class KnownFolders {
    static cameraRoll: StorageFolder;
    static playlists: StorageFolder;
    static savedPictures: StorageFolder;
    static documentsLibrary: StorageFolder;
    static homeGroup: StorageFolder;
    static mediaServerDevices: StorageFolder;
    static musicLibrary: StorageFolder;
    static picturesLibrary: StorageFolder;
    static removableDevices: StorageFolder;
    static videosLibrary: StorageFolder;
    static appCaptures: StorageFolder;
    static objects3D: StorageFolder;
    static recordedCalls: StorageFolder;
    constructor();

    static getFolderForUserAsync(user: Object, folderId: KnownFolderId, callback: (error: Error, result: StorageFolder) => void): void ;


  }

  export class UserDataPaths {
    cameraRoll: String;
    cookies: String;
    desktop: String;
    documents: String;
    downloads: String;
    favorites: String;
    history: String;
    internetCache: String;
    localAppData: String;
    localAppDataLow: String;
    music: String;
    pictures: String;
    profile: String;
    recent: String;
    roamingAppData: String;
    savedPictures: String;
    screenshots: String;
    templates: String;
    videos: String;
    constructor();

    static getForUser(user: Object): UserDataPaths;


    static getDefault(): UserDataPaths;


  }

  export class AppDataPaths {
    cookies: String;
    desktop: String;
    documents: String;
    favorites: String;
    history: String;
    internetCache: String;
    localAppData: String;
    programData: String;
    roamingAppData: String;
    constructor();

    static getForUser(user: Object): AppDataPaths;


    static getDefault(): AppDataPaths;


  }

  export class SystemDataPaths {
    fonts: String;
    programData: String;
    public: String;
    publicDesktop: String;
    publicDocuments: String;
    publicDownloads: String;
    publicMusic: String;
    publicPictures: String;
    publicVideos: String;
    system: String;
    systemArm: String;
    systemHost: String;
    systemX64: String;
    systemX86: String;
    userProfiles: String;
    windows: String;
    constructor();

    static getDefault(): SystemDataPaths;


  }

  export class StorageFile {
    contentType: String;
    fileType: String;
    isAvailable: Boolean;
    attributes: FileAttributes;
    dateCreated: Date;
    name: String;
    path: String;
    displayName: String;
    displayType: String;
    folderRelativeId: String;
    properties: Object;
    provider: StorageProvider;
    constructor();

    static getFileFromPathAsync(path: String, callback: (error: Error, result: StorageFile) => void): void ;


    static getFileFromApplicationUriAsync(uri: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static createStreamedFileAsync(displayNameWithExtension: String, dataRequested: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static replaceWithStreamedFileAsync(fileToReplace: IStorageFile, dataRequested: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static createStreamedFileFromUriAsync(displayNameWithExtension: String, uri: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static replaceWithStreamedFileFromUriAsync(fileToReplace: IStorageFile, uri: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    openAsync(accessMode: FileAccessMode, callback: (error: Error, result: Object) => void): void ;
    openAsync(accessMode: FileAccessMode, options: StorageOpenOptions, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(callback: (error: Error, result: StorageStreamTransaction) => void): void ;
    openTransactedWriteAsync(options: StorageOpenOptions, callback: (error: Error, result: StorageStreamTransaction) => void): void ;

    copyAsync(destinationFolder: IStorageFolder, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: String, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: String, option: NameCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    copyAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

    moveAsync(destinationFolder: IStorageFolder, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: String, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: String, option: NameCollisionOption, callback: (error: Error) => void): void ;

    moveAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

    renameAsync(desiredName: String, callback: (error: Error) => void): void ;
    renameAsync(desiredName: String, option: NameCollisionOption, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: StorageDeleteOption, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    openReadAsync(callback: (error: Error, result: Object) => void): void ;

    openSequentialReadAsync(callback: (error: Error, result: Object) => void): void ;

    getThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    getScaledImageAsThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    getParentAsync(callback: (error: Error, result: StorageFolder) => void): void ;

    isOfType(type: StorageItemTypes): Boolean;

    isEqual(item: IStorageItem): Boolean;

  }

  export class DownloadsFolder {
    constructor();

    static createFileForUserAsync(user: Object, desiredName: String, callback: (error: Error, result: StorageFile) => void): void ;
    static createFileForUserAsync(user: Object, desiredName: String, option: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;


    static createFolderForUserAsync(user: Object, desiredName: String, callback: (error: Error, result: StorageFolder) => void): void ;
    static createFolderForUserAsync(user: Object, desiredName: String, option: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;


    static createFileAsync(desiredName: String, callback: (error: Error, result: StorageFile) => void): void ;
    static createFileAsync(desiredName: String, option: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;


    static createFolderAsync(desiredName: String, callback: (error: Error, result: StorageFolder) => void): void ;
    static createFolderAsync(desiredName: String, option: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;


  }

  export class IStorageItem {
    attributes: FileAttributes;
    dateCreated: Date;
    name: String;
    path: String;
    constructor();

    renameAsync(desiredName: String, callback: (error: Error) => void): void ;
    renameAsync(desiredName: String, option: NameCollisionOption, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: StorageDeleteOption, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    isOfType(type: StorageItemTypes): Boolean;

  }

  export class StorageLibraryChange {
    changeType: StorageLibraryChangeType;
    path: String;
    previousPath: String;
    constructor();

    getStorageItemAsync(callback: (error: Error, result: IStorageItem) => void): void ;

    isOfType(type: StorageItemTypes): Boolean;

  }

  export class StorageLibraryChangeReader {
    constructor();

    readBatchAsync(callback: (error: Error, result: Object) => void): void ;

    acceptChangesAsync(callback: (error: Error) => void): void ;

  }

  export class IStreamedFileDataRequest {
    constructor();

    failAndClose(failureMode: StreamedFileFailureMode): void;

  }

  export class StreamedFileDataRequest {
    constructor();

    writeAsync(buffer: Object, callback: (error: Error, result: Number) => void): void ;

    flushAsync(callback: (error: Error, result: Boolean) => void): void ;

    close(): void;
    failAndClose(failureMode: StreamedFileFailureMode): void;

  }

  export class StorageStreamTransaction {
    stream: Object;
    constructor();

    commitAsync(callback: (error: Error) => void): void ;

    close(): void;
  }

  export class IStorageFolder {
    constructor();

    createFileAsync(desiredName: String, callback: (error: Error, result: StorageFile) => void): void ;
    createFileAsync(desiredName: String, options: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    createFolderAsync(desiredName: String, callback: (error: Error, result: StorageFolder) => void): void ;
    createFolderAsync(desiredName: String, options: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;

    getFileAsync(name: String, callback: (error: Error, result: StorageFile) => void): void ;

    getFolderAsync(name: String, callback: (error: Error, result: StorageFolder) => void): void ;

    getItemAsync(name: String, callback: (error: Error, result: IStorageItem) => void): void ;

    getFilesAsync(callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class IStorageFile {
    contentType: String;
    fileType: String;
    constructor();

    openAsync(accessMode: FileAccessMode, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(callback: (error: Error, result: StorageStreamTransaction) => void): void ;

    copyAsync(destinationFolder: IStorageFolder, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: String, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: String, option: NameCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    copyAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

    moveAsync(destinationFolder: IStorageFolder, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: String, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: String, option: NameCollisionOption, callback: (error: Error) => void): void ;

    moveAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

  }

  export class IStorageItem2 {
    constructor();

    getParentAsync(callback: (error: Error, result: StorageFolder) => void): void ;

    isEqual(item: IStorageItem): Boolean;

  }

  export class IStorageItemProperties {
    displayName: String;
    displayType: String;
    folderRelativeId: String;
    properties: Object;
    constructor();

    getThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class IStorageItemProperties2 {
    constructor();

    getScaledImageAsThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class IStorageItemPropertiesWithProvider {
    provider: StorageProvider;
    constructor();

  }

  export class StorageProvider {
    displayName: String;
    id: String;
    constructor();

    isPropertySupportedForPartialFileAsync(propertyCanonicalName: String, callback: (error: Error, result: Boolean) => void): void ;

  }

  export class IStorageFilePropertiesWithAvailability {
    isAvailable: Boolean;
    constructor();

  }

  export class IStorageFolder2 {
    constructor();

    tryGetItemAsync(name: String, callback: (error: Error, result: IStorageItem) => void): void ;

  }

  export class IStorageFile2 {
    constructor();

    openAsync(accessMode: FileAccessMode, options: StorageOpenOptions, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(options: StorageOpenOptions, callback: (error: Error, result: StorageStreamTransaction) => void): void ;

  }

  export class FileIO {
    constructor();

    static readTextAsync(file: IStorageFile, callback: (error: Error, result: String) => void): void ;
    static readTextAsync(file: IStorageFile, encoding: Number, callback: (error: Error, result: String) => void): void ;


    static writeTextAsync(file: IStorageFile, contents: String, callback: (error: Error) => void): void ;
    static writeTextAsync(file: IStorageFile, contents: String, encoding: Number, callback: (error: Error) => void): void ;


    static appendTextAsync(file: IStorageFile, contents: String, callback: (error: Error) => void): void ;
    static appendTextAsync(file: IStorageFile, contents: String, encoding: Number, callback: (error: Error) => void): void ;


    static readLinesAsync(file: IStorageFile, callback: (error: Error, result: Object) => void): void ;
    static readLinesAsync(file: IStorageFile, encoding: Number, callback: (error: Error, result: Object) => void): void ;


    static writeLinesAsync(file: IStorageFile, lines: Object, callback: (error: Error) => void): void ;
    static writeLinesAsync(file: IStorageFile, lines: Object, encoding: Number, callback: (error: Error) => void): void ;


    static appendLinesAsync(file: IStorageFile, lines: Object, callback: (error: Error) => void): void ;
    static appendLinesAsync(file: IStorageFile, lines: Object, encoding: Number, callback: (error: Error) => void): void ;


    static readBufferAsync(file: IStorageFile, callback: (error: Error, result: Object) => void): void ;


    static writeBufferAsync(file: IStorageFile, buffer: Object, callback: (error: Error) => void): void ;


    static writeBytesAsync(file: IStorageFile, buffer: Array<Number>, callback: (error: Error) => void): void ;


  }

  export class PathIO {
    constructor();

    static readTextAsync(absolutePath: String, callback: (error: Error, result: String) => void): void ;
    static readTextAsync(absolutePath: String, encoding: Number, callback: (error: Error, result: String) => void): void ;


    static writeTextAsync(absolutePath: String, contents: String, callback: (error: Error) => void): void ;
    static writeTextAsync(absolutePath: String, contents: String, encoding: Number, callback: (error: Error) => void): void ;


    static appendTextAsync(absolutePath: String, contents: String, callback: (error: Error) => void): void ;
    static appendTextAsync(absolutePath: String, contents: String, encoding: Number, callback: (error: Error) => void): void ;


    static readLinesAsync(absolutePath: String, callback: (error: Error, result: Object) => void): void ;
    static readLinesAsync(absolutePath: String, encoding: Number, callback: (error: Error, result: Object) => void): void ;


    static writeLinesAsync(absolutePath: String, lines: Object, callback: (error: Error) => void): void ;
    static writeLinesAsync(absolutePath: String, lines: Object, encoding: Number, callback: (error: Error) => void): void ;


    static appendLinesAsync(absolutePath: String, lines: Object, callback: (error: Error) => void): void ;
    static appendLinesAsync(absolutePath: String, lines: Object, encoding: Number, callback: (error: Error) => void): void ;


    static readBufferAsync(absolutePath: String, callback: (error: Error, result: Object) => void): void ;


    static writeBufferAsync(absolutePath: String, buffer: Object, callback: (error: Error) => void): void ;


    static writeBytesAsync(absolutePath: String, buffer: Array<Number>, callback: (error: Error) => void): void ;


  }

  export class CachedFileManager {
    constructor();

    static completeUpdatesAsync(file: IStorageFile, callback: (error: Error, result: Number) => void): void ;


    static deferUpdates(file: IStorageFile): void;


  }

  export class SystemAudioProperties {
    encodingBitrate: String;
    constructor();

  }

  export class SystemGPSProperties {
    latitudeDecimal: String;
    longitudeDecimal: String;
    constructor();

  }

  export class SystemImageProperties {
    horizontalSize: String;
    verticalSize: String;
    constructor();

  }

  export class SystemMediaProperties {
    duration: String;
    producer: String;
    publisher: String;
    subTitle: String;
    writer: String;
    year: String;
    constructor();

  }

  export class SystemMusicProperties {
    albumArtist: String;
    albumTitle: String;
    artist: String;
    composer: String;
    conductor: String;
    displayArtist: String;
    genre: String;
    trackNumber: String;
    constructor();

  }

  export class SystemPhotoProperties {
    cameraManufacturer: String;
    cameraModel: String;
    dateTaken: String;
    orientation: String;
    peopleNames: String;
    constructor();

  }

  export class SystemVideoProperties {
    director: String;
    frameHeight: String;
    frameWidth: String;
    orientation: String;
    totalBitrate: String;
    constructor();

  }

  export class SystemProperties {
    static audio: SystemAudioProperties;
    static author: String;
    static comment: String;
    static gPS: SystemGPSProperties;
    static image: SystemImageProperties;
    static itemNameDisplay: String;
    static keywords: String;
    static media: SystemMediaProperties;
    static music: SystemMusicProperties;
    static photo: SystemPhotoProperties;
    static rating: String;
    static title: String;
    static video: SystemVideoProperties;
    constructor();

  }

  export class ApplicationData {
    static current: ApplicationData;
    localFolder: StorageFolder;
    localSettings: ApplicationDataContainer;
    roamingFolder: StorageFolder;
    roamingSettings: ApplicationDataContainer;
    roamingStorageQuota: Number;
    temporaryFolder: StorageFolder;
    version: Number;
    localCacheFolder: StorageFolder;
    sharedLocalFolder: StorageFolder;
    constructor();

    static getForUserAsync(user: Object, callback: (error: Error, result: ApplicationData) => void): void ;


    setVersionAsync(desiredVersion: Number, handler: Object, callback: (error: Error) => void): void ;

    clearAsync(callback: (error: Error) => void): void ;
    clearAsync(locality: ApplicationDataLocality, callback: (error: Error) => void): void ;

    clearPublisherCacheFolderAsync(folderName: String, callback: (error: Error) => void): void ;

    signalDataChanged(): void;

    getPublisherCacheFolder(folderName: String): StorageFolder;

    addListener(type: "DataChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "DataChanged", listener: (ev: Event) => void): void ;
    on(type: "DataChanged", listener: (ev: Event) => void): void ;
    off(type: "DataChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SetVersionRequest {
    currentVersion: Number;
    desiredVersion: Number;
    constructor();

    getDeferral(): SetVersionDeferral;

  }

  export class ApplicationDataContainer {
    containers: Object;
    locality: ApplicationDataLocality;
    name: String;
    values: Object;
    constructor();

    createContainer(name: String, disposition: ApplicationDataCreateDisposition): ApplicationDataContainer;

    deleteContainer(name: String): void;

  }

  export class SetVersionDeferral {
    constructor();

    complete(): void;

  }

  export class ApplicationDataContainerSettings {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    addListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    on(type: "MapChanged", listener: (ev: Event) => void): void ;
    off(type: "MapChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ApplicationDataCompositeValue {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    addListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    on(type: "MapChanged", listener: (ev: Event) => void): void ;
    off(type: "MapChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

export * as accesscache from "./storage.accesscache.js";
export * as bulkaccess from "./storage.bulkaccess.js";
export * as compression from "./storage.compression.js";
export * as fileproperties from "./storage.fileproperties.js";
export * as pickers from "./storage.pickers.js";
export * as provider from "./storage.provider.js";
export * as search from "./storage.search.js";
export * as streams from "./storage.streams.js";