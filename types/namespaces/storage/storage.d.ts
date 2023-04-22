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

    requestRemoveFolderAsync(folder: StorageFolder, callback: (error: Error, result: boolean) => void): void ;

    areFolderSuggestionsAvailableAsync(callback: (error: Error, result: boolean) => void): void ;

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
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Object;
    provider: StorageProvider;
    constructor();

    static getFolderFromPathAsync(path: string, callback: (error: Error, result: StorageFolder) => void): void ;


    createFileAsync(desiredName: string, callback: (error: Error, result: StorageFile) => void): void ;
    createFileAsync(desiredName: string, options: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    createFolderAsync(desiredName: string, callback: (error: Error, result: StorageFolder) => void): void ;
    createFolderAsync(desiredName: string, options: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;

    getFileAsync(name: string, callback: (error: Error, result: StorageFile) => void): void ;

    getFolderAsync(name: string, callback: (error: Error, result: StorageFolder) => void): void ;

    getItemAsync(name: string, callback: (error: Error, result: IStorageItem) => void): void ;

    getFilesAsync(callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: number, startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: number, callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: number, startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: number, callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;

    renameAsync(desiredName: string, callback: (error: Error) => void): void ;
    renameAsync(desiredName: string, option: NameCollisionOption, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: StorageDeleteOption, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    getIndexedStateAsync(callback: (error: Error, result: number) => void): void ;

    getThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

    getScaledImageAsThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

    getParentAsync(callback: (error: Error, result: StorageFolder) => void): void ;

    tryGetItemAsync(name: string, callback: (error: Error, result: IStorageItem) => void): void ;

    tryGetChangeTracker(): StorageLibraryChangeTracker;

    isOfType(type: StorageItemTypes): boolean;

    createFileQuery(): Object;
    createFileQuery(query: number): Object;

    createFileQueryWithOptions(queryOptions: Object): Object;

    createFolderQuery(): Object;
    createFolderQuery(query: number): Object;

    createFolderQueryWithOptions(queryOptions: Object): Object;

    createItemQuery(): Object;

    createItemQueryWithOptions(queryOptions: Object): Object;

    areQueryOptionsSupported(queryOptions: Object): boolean;

    isCommonFolderQuerySupported(query: number): boolean;

    isCommonFileQuerySupported(query: number): boolean;

    isEqual(item: IStorageItem): boolean;

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
    cameraRoll: string;
    cookies: string;
    desktop: string;
    documents: string;
    downloads: string;
    favorites: string;
    history: string;
    internetCache: string;
    localAppData: string;
    localAppDataLow: string;
    music: string;
    pictures: string;
    profile: string;
    recent: string;
    roamingAppData: string;
    savedPictures: string;
    screenshots: string;
    templates: string;
    videos: string;
    constructor();

    static getForUser(user: Object): UserDataPaths;


    static getDefault(): UserDataPaths;


  }

  export class AppDataPaths {
    cookies: string;
    desktop: string;
    documents: string;
    favorites: string;
    history: string;
    internetCache: string;
    localAppData: string;
    programData: string;
    roamingAppData: string;
    constructor();

    static getForUser(user: Object): AppDataPaths;


    static getDefault(): AppDataPaths;


  }

  export class SystemDataPaths {
    fonts: string;
    programData: string;
    public: string;
    publicDesktop: string;
    publicDocuments: string;
    publicDownloads: string;
    publicMusic: string;
    publicPictures: string;
    publicVideos: string;
    system: string;
    systemArm: string;
    systemHost: string;
    systemX64: string;
    systemX86: string;
    userProfiles: string;
    windows: string;
    constructor();

    static getDefault(): SystemDataPaths;


  }

  export class StorageFile {
    contentType: string;
    fileType: string;
    isAvailable: boolean;
    attributes: FileAttributes;
    dateCreated: Date;
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Object;
    provider: StorageProvider;
    constructor();

    static getFileFromPathAsync(path: string, callback: (error: Error, result: StorageFile) => void): void ;


    static getFileFromApplicationUriAsync(uri: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static createStreamedFileAsync(displayNameWithExtension: string, dataRequested: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static replaceWithStreamedFileAsync(fileToReplace: IStorageFile, dataRequested: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static createStreamedFileFromUriAsync(displayNameWithExtension: string, uri: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    static replaceWithStreamedFileFromUriAsync(fileToReplace: IStorageFile, uri: Object, thumbnail: Object, callback: (error: Error, result: StorageFile) => void): void ;


    openAsync(accessMode: FileAccessMode, callback: (error: Error, result: Object) => void): void ;
    openAsync(accessMode: FileAccessMode, options: StorageOpenOptions, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(callback: (error: Error, result: StorageStreamTransaction) => void): void ;
    openTransactedWriteAsync(options: StorageOpenOptions, callback: (error: Error, result: StorageStreamTransaction) => void): void ;

    copyAsync(destinationFolder: IStorageFolder, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: string, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: string, option: NameCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    copyAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

    moveAsync(destinationFolder: IStorageFolder, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: string, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: string, option: NameCollisionOption, callback: (error: Error) => void): void ;

    moveAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

    renameAsync(desiredName: string, callback: (error: Error) => void): void ;
    renameAsync(desiredName: string, option: NameCollisionOption, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: StorageDeleteOption, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    openReadAsync(callback: (error: Error, result: Object) => void): void ;

    openSequentialReadAsync(callback: (error: Error, result: Object) => void): void ;

    getThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

    getScaledImageAsThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

    getParentAsync(callback: (error: Error, result: StorageFolder) => void): void ;

    isOfType(type: StorageItemTypes): boolean;

    isEqual(item: IStorageItem): boolean;

  }

  export class DownloadsFolder {
    constructor();

    static createFileForUserAsync(user: Object, desiredName: string, callback: (error: Error, result: StorageFile) => void): void ;
    static createFileForUserAsync(user: Object, desiredName: string, option: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;


    static createFolderForUserAsync(user: Object, desiredName: string, callback: (error: Error, result: StorageFolder) => void): void ;
    static createFolderForUserAsync(user: Object, desiredName: string, option: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;


    static createFileAsync(desiredName: string, callback: (error: Error, result: StorageFile) => void): void ;
    static createFileAsync(desiredName: string, option: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;


    static createFolderAsync(desiredName: string, callback: (error: Error, result: StorageFolder) => void): void ;
    static createFolderAsync(desiredName: string, option: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;


  }

  export class IStorageItem {
    attributes: FileAttributes;
    dateCreated: Date;
    name: string;
    path: string;
    constructor();

    renameAsync(desiredName: string, callback: (error: Error) => void): void ;
    renameAsync(desiredName: string, option: NameCollisionOption, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: StorageDeleteOption, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    isOfType(type: StorageItemTypes): boolean;

  }

  export class StorageLibraryChange {
    changeType: StorageLibraryChangeType;
    path: string;
    previousPath: string;
    constructor();

    getStorageItemAsync(callback: (error: Error, result: IStorageItem) => void): void ;

    isOfType(type: StorageItemTypes): boolean;

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

    writeAsync(buffer: Object, callback: (error: Error, result: number) => void): void ;

    flushAsync(callback: (error: Error, result: boolean) => void): void ;

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

    createFileAsync(desiredName: string, callback: (error: Error, result: StorageFile) => void): void ;
    createFileAsync(desiredName: string, options: CreationCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    createFolderAsync(desiredName: string, callback: (error: Error, result: StorageFolder) => void): void ;
    createFolderAsync(desiredName: string, options: CreationCollisionOption, callback: (error: Error, result: StorageFolder) => void): void ;

    getFileAsync(name: string, callback: (error: Error, result: StorageFile) => void): void ;

    getFolderAsync(name: string, callback: (error: Error, result: StorageFolder) => void): void ;

    getItemAsync(name: string, callback: (error: Error, result: IStorageItem) => void): void ;

    getFilesAsync(callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;

  }

  export class IStorageFile {
    contentType: string;
    fileType: string;
    constructor();

    openAsync(accessMode: FileAccessMode, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(callback: (error: Error, result: StorageStreamTransaction) => void): void ;

    copyAsync(destinationFolder: IStorageFolder, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: string, callback: (error: Error, result: StorageFile) => void): void ;
    copyAsync(destinationFolder: IStorageFolder, desiredNewName: string, option: NameCollisionOption, callback: (error: Error, result: StorageFile) => void): void ;

    copyAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

    moveAsync(destinationFolder: IStorageFolder, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: string, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: IStorageFolder, desiredNewName: string, option: NameCollisionOption, callback: (error: Error) => void): void ;

    moveAndReplaceAsync(fileToReplace: IStorageFile, callback: (error: Error) => void): void ;

  }

  export class IStorageItem2 {
    constructor();

    getParentAsync(callback: (error: Error, result: StorageFolder) => void): void ;

    isEqual(item: IStorageItem): boolean;

  }

  export class IStorageItemProperties {
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Object;
    constructor();

    getThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class IStorageItemProperties2 {
    constructor();

    getScaledImageAsThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getScaledImageAsThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class IStorageItemPropertiesWithProvider {
    provider: StorageProvider;
    constructor();

  }

  export class StorageProvider {
    displayName: string;
    id: string;
    constructor();

    isPropertySupportedForPartialFileAsync(propertyCanonicalName: string, callback: (error: Error, result: boolean) => void): void ;

  }

  export class IStorageFilePropertiesWithAvailability {
    isAvailable: boolean;
    constructor();

  }

  export class IStorageFolder2 {
    constructor();

    tryGetItemAsync(name: string, callback: (error: Error, result: IStorageItem) => void): void ;

  }

  export class IStorageFile2 {
    constructor();

    openAsync(accessMode: FileAccessMode, options: StorageOpenOptions, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(options: StorageOpenOptions, callback: (error: Error, result: StorageStreamTransaction) => void): void ;

  }

  export class FileIO {
    constructor();

    static readTextAsync(file: IStorageFile, callback: (error: Error, result: string) => void): void ;
    static readTextAsync(file: IStorageFile, encoding: number, callback: (error: Error, result: string) => void): void ;


    static writeTextAsync(file: IStorageFile, contents: string, callback: (error: Error) => void): void ;
    static writeTextAsync(file: IStorageFile, contents: string, encoding: number, callback: (error: Error) => void): void ;


    static appendTextAsync(file: IStorageFile, contents: string, callback: (error: Error) => void): void ;
    static appendTextAsync(file: IStorageFile, contents: string, encoding: number, callback: (error: Error) => void): void ;


    static readLinesAsync(file: IStorageFile, callback: (error: Error, result: Object) => void): void ;
    static readLinesAsync(file: IStorageFile, encoding: number, callback: (error: Error, result: Object) => void): void ;


    static writeLinesAsync(file: IStorageFile, lines: Object, callback: (error: Error) => void): void ;
    static writeLinesAsync(file: IStorageFile, lines: Object, encoding: number, callback: (error: Error) => void): void ;


    static appendLinesAsync(file: IStorageFile, lines: Object, callback: (error: Error) => void): void ;
    static appendLinesAsync(file: IStorageFile, lines: Object, encoding: number, callback: (error: Error) => void): void ;


    static readBufferAsync(file: IStorageFile, callback: (error: Error, result: Object) => void): void ;


    static writeBufferAsync(file: IStorageFile, buffer: Object, callback: (error: Error) => void): void ;


    static writeBytesAsync(file: IStorageFile, buffer: Array<number>, callback: (error: Error) => void): void ;


  }

  export class PathIO {
    constructor();

    static readTextAsync(absolutePath: string, callback: (error: Error, result: string) => void): void ;
    static readTextAsync(absolutePath: string, encoding: number, callback: (error: Error, result: string) => void): void ;


    static writeTextAsync(absolutePath: string, contents: string, callback: (error: Error) => void): void ;
    static writeTextAsync(absolutePath: string, contents: string, encoding: number, callback: (error: Error) => void): void ;


    static appendTextAsync(absolutePath: string, contents: string, callback: (error: Error) => void): void ;
    static appendTextAsync(absolutePath: string, contents: string, encoding: number, callback: (error: Error) => void): void ;


    static readLinesAsync(absolutePath: string, callback: (error: Error, result: Object) => void): void ;
    static readLinesAsync(absolutePath: string, encoding: number, callback: (error: Error, result: Object) => void): void ;


    static writeLinesAsync(absolutePath: string, lines: Object, callback: (error: Error) => void): void ;
    static writeLinesAsync(absolutePath: string, lines: Object, encoding: number, callback: (error: Error) => void): void ;


    static appendLinesAsync(absolutePath: string, lines: Object, callback: (error: Error) => void): void ;
    static appendLinesAsync(absolutePath: string, lines: Object, encoding: number, callback: (error: Error) => void): void ;


    static readBufferAsync(absolutePath: string, callback: (error: Error, result: Object) => void): void ;


    static writeBufferAsync(absolutePath: string, buffer: Object, callback: (error: Error) => void): void ;


    static writeBytesAsync(absolutePath: string, buffer: Array<number>, callback: (error: Error) => void): void ;


  }

  export class CachedFileManager {
    constructor();

    static completeUpdatesAsync(file: IStorageFile, callback: (error: Error, result: number) => void): void ;


    static deferUpdates(file: IStorageFile): void;


  }

  export class SystemAudioProperties {
    encodingBitrate: string;
    constructor();

  }

  export class SystemGPSProperties {
    latitudeDecimal: string;
    longitudeDecimal: string;
    constructor();

  }

  export class SystemImageProperties {
    horizontalSize: string;
    verticalSize: string;
    constructor();

  }

  export class SystemMediaProperties {
    duration: string;
    producer: string;
    publisher: string;
    subTitle: string;
    writer: string;
    year: string;
    constructor();

  }

  export class SystemMusicProperties {
    albumArtist: string;
    albumTitle: string;
    artist: string;
    composer: string;
    conductor: string;
    displayArtist: string;
    genre: string;
    trackNumber: string;
    constructor();

  }

  export class SystemPhotoProperties {
    cameraManufacturer: string;
    cameraModel: string;
    dateTaken: string;
    orientation: string;
    peopleNames: string;
    constructor();

  }

  export class SystemVideoProperties {
    director: string;
    frameHeight: string;
    frameWidth: string;
    orientation: string;
    totalBitrate: string;
    constructor();

  }

  export class SystemProperties {
    static audio: SystemAudioProperties;
    static author: string;
    static comment: string;
    static gPS: SystemGPSProperties;
    static image: SystemImageProperties;
    static itemNameDisplay: string;
    static keywords: string;
    static media: SystemMediaProperties;
    static music: SystemMusicProperties;
    static photo: SystemPhotoProperties;
    static rating: string;
    static title: string;
    static video: SystemVideoProperties;
    constructor();

  }

  export class ApplicationData {
    static current: ApplicationData;
    localFolder: StorageFolder;
    localSettings: ApplicationDataContainer;
    roamingFolder: StorageFolder;
    roamingSettings: ApplicationDataContainer;
    roamingStorageQuota: number;
    temporaryFolder: StorageFolder;
    version: number;
    localCacheFolder: StorageFolder;
    sharedLocalFolder: StorageFolder;
    constructor();

    static getForUserAsync(user: Object, callback: (error: Error, result: ApplicationData) => void): void ;


    setVersionAsync(desiredVersion: number, handler: Object, callback: (error: Error) => void): void ;

    clearAsync(callback: (error: Error) => void): void ;
    clearAsync(locality: ApplicationDataLocality, callback: (error: Error) => void): void ;

    clearPublisherCacheFolderAsync(folderName: string, callback: (error: Error) => void): void ;

    signalDataChanged(): void;

    getPublisherCacheFolder(folderName: string): StorageFolder;

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
    currentVersion: number;
    desiredVersion: number;
    constructor();

    getDeferral(): SetVersionDeferral;

  }

  export class ApplicationDataContainer {
    containers: Object;
    locality: ApplicationDataLocality;
    name: string;
    values: Object;
    constructor();

    createContainer(name: string, disposition: ApplicationDataCreateDisposition): ApplicationDataContainer;

    deleteContainer(name: string): void;

  }

  export class SetVersionDeferral {
    constructor();

    complete(): void;

  }

  export class ApplicationDataContainerSettings {
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

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

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

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