  export class FileInformation {
    basicProperties: Object;
    documentProperties: Object;
    imageProperties: Object;
    musicProperties: Object;
    thumbnail: Object;
    videoProperties: Object;
    contentType: String;
    fileType: String;
    isAvailable: Boolean;
    attributes: Number;
    dateCreated: Date;
    name: String;
    path: String;
    displayName: String;
    displayType: String;
    folderRelativeId: String;
    properties: Object;
    provider: Object;
    constructor();

    openAsync(accessMode: Number, callback: (error: Error, result: Object) => void): void ;
    openAsync(accessMode: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(callback: (error: Error, result: Object) => void): void ;
    openTransactedWriteAsync(options: Number, callback: (error: Error, result: Object) => void): void ;

    copyAsync(destinationFolder: Object, callback: (error: Error, result: Object) => void): void ;
    copyAsync(destinationFolder: Object, desiredNewName: String, callback: (error: Error, result: Object) => void): void ;
    copyAsync(destinationFolder: Object, desiredNewName: String, option: Number, callback: (error: Error, result: Object) => void): void ;

    copyAndReplaceAsync(fileToReplace: Object, callback: (error: Error) => void): void ;

    moveAsync(destinationFolder: Object, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: Object, desiredNewName: String, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: Object, desiredNewName: String, option: Number, callback: (error: Error) => void): void ;

    moveAndReplaceAsync(fileToReplace: Object, callback: (error: Error) => void): void ;

    renameAsync(desiredName: String, callback: (error: Error) => void): void ;
    renameAsync(desiredName: String, option: Number, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: Number, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    openReadAsync(callback: (error: Error, result: Object) => void): void ;

    openSequentialReadAsync(callback: (error: Error, result: Object) => void): void ;

    getThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    getParentAsync(callback: (error: Error, result: Object) => void): void ;

    isOfType(type: Number): Boolean;

    isEqual(item: Object): Boolean;

    addListener(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    on(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    off(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    on(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    off(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class FileInformationFactory {
    constructor();
    constructor(queryResult: Object, mode: Number);
    constructor(queryResult: Object, mode: Number, requestedThumbnailSize: Number);
    constructor(queryResult: Object, mode: Number, requestedThumbnailSize: Number, thumbnailOptions: Number);
    constructor(queryResult: Object, mode: Number, requestedThumbnailSize: Number, thumbnailOptions: Number, delayLoad: Boolean);

    getItemsAsync(startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getFilesAsync(startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getVirtualizedItemsVector(): Object;

    getVirtualizedFilesVector(): Object;

    getVirtualizedFoldersVector(): Object;

  }

  export class FolderInformation {
    basicProperties: Object;
    documentProperties: Object;
    imageProperties: Object;
    musicProperties: Object;
    thumbnail: Object;
    videoProperties: Object;
    attributes: Number;
    dateCreated: Date;
    name: String;
    path: String;
    displayName: String;
    displayType: String;
    folderRelativeId: String;
    properties: Object;
    provider: Object;
    constructor();

    getParentAsync(callback: (error: Error, result: Object) => void): void ;

    tryGetItemAsync(name: String, callback: (error: Error, result: Object) => void): void ;

    createFileAsync(desiredName: String, callback: (error: Error, result: Object) => void): void ;
    createFileAsync(desiredName: String, options: Number, callback: (error: Error, result: Object) => void): void ;

    createFolderAsync(desiredName: String, callback: (error: Error, result: Object) => void): void ;
    createFolderAsync(desiredName: String, options: Number, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(name: String, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(name: String, callback: (error: Error, result: Object) => void): void ;

    getItemAsync(name: String, callback: (error: Error, result: Object) => void): void ;

    getFilesAsync(callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: Number, startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: Number, callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: Number, startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: Number, callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;

    renameAsync(desiredName: String, callback: (error: Error) => void): void ;
    renameAsync(desiredName: String, option: Number, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: Number, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    getThumbnailAsync(mode: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: Number, requestedSize: Number, options: Number, callback: (error: Error, result: Object) => void): void ;

    getIndexedStateAsync(callback: (error: Error, result: Number) => void): void ;

    areQueryOptionsSupported(queryOptions: Object): Boolean;

    isCommonFolderQuerySupported(query: Number): Boolean;

    isCommonFileQuerySupported(query: Number): Boolean;

    isEqual(item: Object): Boolean;

    isOfType(type: Number): Boolean;

    createFileQuery(): Object;
    createFileQuery(query: Number): Object;

    createFileQueryWithOptions(queryOptions: Object): Object;

    createFolderQuery(): Object;
    createFolderQuery(query: Number): Object;

    createFolderQueryWithOptions(queryOptions: Object): Object;

    createItemQuery(): Object;

    createItemQueryWithOptions(queryOptions: Object): Object;

    addListener(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    on(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    off(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    on(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    off(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IStorageItemInformation {
    basicProperties: Object;
    documentProperties: Object;
    imageProperties: Object;
    musicProperties: Object;
    thumbnail: Object;
    videoProperties: Object;
    constructor();

    addListener(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    on(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    off(type: "PropertiesUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    on(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    off(type: "ThumbnailUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

