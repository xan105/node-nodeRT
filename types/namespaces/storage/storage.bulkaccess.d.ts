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

  export class FileInformationFactory {
    constructor();
    constructor(queryResult: Object, mode: number);
    constructor(queryResult: Object, mode: number, requestedThumbnailSize: number);
    constructor(queryResult: Object, mode: number, requestedThumbnailSize: number, thumbnailOptions: number);
    constructor(queryResult: Object, mode: number, requestedThumbnailSize: number, thumbnailOptions: number, delayLoad: boolean);

    getItemsAsync(startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getFilesAsync(startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getVirtualizedItemsVector(): Object;

    getVirtualizedFilesVector(): Object;

    getVirtualizedFoldersVector(): Object;

  }

  export class FileInformation {
    basicProperties: Object;
    documentProperties: Object;
    imageProperties: Object;
    musicProperties: Object;
    thumbnail: Object;
    videoProperties: Object;
    contentType: string;
    fileType: string;
    isAvailable: boolean;
    attributes: number;
    dateCreated: Date;
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Object;
    provider: Object;
    constructor();

    openAsync(accessMode: number, callback: (error: Error, result: Object) => void): void ;
    openAsync(accessMode: number, options: number, callback: (error: Error, result: Object) => void): void ;

    openTransactedWriteAsync(callback: (error: Error, result: Object) => void): void ;
    openTransactedWriteAsync(options: number, callback: (error: Error, result: Object) => void): void ;

    copyAsync(destinationFolder: Object, callback: (error: Error, result: Object) => void): void ;
    copyAsync(destinationFolder: Object, desiredNewName: string, callback: (error: Error, result: Object) => void): void ;
    copyAsync(destinationFolder: Object, desiredNewName: string, option: number, callback: (error: Error, result: Object) => void): void ;

    copyAndReplaceAsync(fileToReplace: Object, callback: (error: Error) => void): void ;

    moveAsync(destinationFolder: Object, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: Object, desiredNewName: string, callback: (error: Error) => void): void ;
    moveAsync(destinationFolder: Object, desiredNewName: string, option: number, callback: (error: Error) => void): void ;

    moveAndReplaceAsync(fileToReplace: Object, callback: (error: Error) => void): void ;

    renameAsync(desiredName: string, callback: (error: Error) => void): void ;
    renameAsync(desiredName: string, option: number, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: number, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    openReadAsync(callback: (error: Error, result: Object) => void): void ;

    openSequentialReadAsync(callback: (error: Error, result: Object) => void): void ;

    getThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

    getParentAsync(callback: (error: Error, result: Object) => void): void ;

    isOfType(type: number): boolean;

    isEqual(item: Object): boolean;

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

  export class FolderInformation {
    basicProperties: Object;
    documentProperties: Object;
    imageProperties: Object;
    musicProperties: Object;
    thumbnail: Object;
    videoProperties: Object;
    attributes: number;
    dateCreated: Date;
    name: string;
    path: string;
    displayName: string;
    displayType: string;
    folderRelativeId: string;
    properties: Object;
    provider: Object;
    constructor();

    getParentAsync(callback: (error: Error, result: Object) => void): void ;

    tryGetItemAsync(name: string, callback: (error: Error, result: Object) => void): void ;

    createFileAsync(desiredName: string, callback: (error: Error, result: Object) => void): void ;
    createFileAsync(desiredName: string, options: number, callback: (error: Error, result: Object) => void): void ;

    createFolderAsync(desiredName: string, callback: (error: Error, result: Object) => void): void ;
    createFolderAsync(desiredName: string, options: number, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(name: string, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(name: string, callback: (error: Error, result: Object) => void): void ;

    getItemAsync(name: string, callback: (error: Error, result: Object) => void): void ;

    getFilesAsync(callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: number, startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: number, callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: number, startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: number, callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;

    renameAsync(desiredName: string, callback: (error: Error) => void): void ;
    renameAsync(desiredName: string, option: number, callback: (error: Error) => void): void ;

    deleteAsync(callback: (error: Error) => void): void ;
    deleteAsync(option: number, callback: (error: Error) => void): void ;

    getBasicPropertiesAsync(callback: (error: Error, result: Object) => void): void ;

    getThumbnailAsync(mode: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, callback: (error: Error, result: Object) => void): void ;
    getThumbnailAsync(mode: number, requestedSize: number, options: number, callback: (error: Error, result: Object) => void): void ;

    getIndexedStateAsync(callback: (error: Error, result: number) => void): void ;

    areQueryOptionsSupported(queryOptions: Object): boolean;

    isCommonFolderQuerySupported(query: number): boolean;

    isCommonFileQuerySupported(query: number): boolean;

    isEqual(item: Object): boolean;

    isOfType(type: number): boolean;

    createFileQuery(): Object;
    createFileQuery(query: number): Object;

    createFileQueryWithOptions(queryOptions: Object): Object;

    createFolderQuery(): Object;
    createFolderQuery(query: number): Object;

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

