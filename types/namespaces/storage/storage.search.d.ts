  export class TextSegment {
    startPosition: Number;
    length: Number;
    constructor();
  }

  export class SortEntry {
    propertyName: String;
    ascendingOrder: Boolean;
    constructor();
  }

  export enum DateStackOption {
    none,
    year,
    month,
  }

  export enum IndexerOption {
    useIndexerWhenAvailable,
    onlyUseIndexer,
    doNotUseIndexer,
    onlyUseIndexerAndOptimizeForIndexedProperties,
  }

  export enum FolderDepth {
    shallow,
    deep,
  }

  export enum CommonFileQuery {
    defaultQuery,
    orderByName,
    orderByTitle,
    orderByMusicProperties,
    orderBySearchRank,
    orderByDate,
  }

  export enum CommonFolderQuery {
    defaultQuery,
    groupByYear,
    groupByMonth,
    groupByArtist,
    groupByAlbum,
    groupByAlbumArtist,
    groupByComposer,
    groupByGenre,
    groupByPublishedYear,
    groupByRating,
    groupByTag,
    groupByAuthor,
    groupByType,
  }

  export enum IndexedState {
    unknown,
    notIndexed,
    partiallyIndexed,
    fullyIndexed,
  }

  export class ContentIndexer {
    revision: Number;
    constructor();

    static getIndexer(indexName: String): ContentIndexer;
    static getIndexer(): ContentIndexer;


    addAsync(indexableContent: IIndexableContent, callback: (error: Error) => void): void ;

    updateAsync(indexableContent: IIndexableContent, callback: (error: Error) => void): void ;

    deleteAsync(contentId: String, callback: (error: Error) => void): void ;

    deleteMultipleAsync(contentIds: Object, callback: (error: Error) => void): void ;

    deleteAllAsync(callback: (error: Error) => void): void ;

    retrievePropertiesAsync(contentId: String, propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    createQuery(searchFilter: String, propertiesToRetrieve: Object, sortOrder: Object, searchFilterLanguage: String): ContentIndexerQuery;
    createQuery(searchFilter: String, propertiesToRetrieve: Object, sortOrder: Object): ContentIndexerQuery;
    createQuery(searchFilter: String, propertiesToRetrieve: Object): ContentIndexerQuery;

  }

  export class IIndexableContent {
    id: String;
    properties: Object;
    stream: Object;
    streamContentType: String;
    constructor();

  }

  export class ValueAndLanguage {
    value: Object;
    language: String;
    constructor();

  }

  export class ContentIndexerQuery {
    queryFolder: Object;
    constructor();

    getCountAsync(callback: (error: Error, result: Number) => void): void ;

    getPropertiesAsync(callback: (error: Error, result: Object) => void): void ;
    getPropertiesAsync(startIndex: Number, maxItems: Number, callback: (error: Error, result: Object) => void): void ;

    getAsync(callback: (error: Error, result: Object) => void): void ;
    getAsync(startIndex: Number, maxItems: Number, callback: (error: Error, result: Object) => void): void ;

  }

  export class IndexableContent {
    streamContentType: String;
    stream: Object;
    id: String;
    properties: Object;
    constructor();

  }

  export class QueryOptions {
    userSearchFilter: String;
    language: String;
    indexerOption: IndexerOption;
    folderDepth: FolderDepth;
    applicationSearchFilter: String;
    dateStackOption: DateStackOption;
    fileTypeFilter: Object;
    groupPropertyName: String;
    sortOrder: Object;
    storageProviderIdFilter: Object;
    constructor();
    constructor(query: CommonFileQuery, fileTypeFilter: Object);
    constructor(query: CommonFolderQuery);

    saveToString(): String;

    loadFromString(value: String): void;

    setThumbnailPrefetch(mode: Number, requestedSize: Number, options: Number): void;

    setPropertyPrefetch(options: Number, propertiesToRetrieve: Object): void;

  }

  export class IStorageQueryResultBase {
    folder: Object;
    constructor();

    getItemCountAsync(callback: (error: Error, result: Number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: Number) => void): void ;

    getCurrentQueryOptions(): QueryOptions;

    applyNewQueryOptions(newQueryOptions: QueryOptions): void;

    addListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    on(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    off(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    on(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    off(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class IStorageFolderQueryOperations {
    constructor();

    getIndexedStateAsync(callback: (error: Error, result: IndexedState) => void): void ;

    getFilesAsync(query: CommonFileQuery, startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: CommonFileQuery, callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(query: CommonFolderQuery, startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: CommonFolderQuery, callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(startIndex: Number, maxItemsToRetrieve: Number, callback: (error: Error, result: Object) => void): void ;

    createFileQuery(): StorageFileQueryResult;
    createFileQuery(query: CommonFileQuery): StorageFileQueryResult;

    createFileQueryWithOptions(queryOptions: QueryOptions): StorageFileQueryResult;

    createFolderQuery(): StorageFolderQueryResult;
    createFolderQuery(query: CommonFolderQuery): StorageFolderQueryResult;

    createFolderQueryWithOptions(queryOptions: QueryOptions): StorageFolderQueryResult;

    createItemQuery(): StorageItemQueryResult;

    createItemQueryWithOptions(queryOptions: QueryOptions): StorageItemQueryResult;

    areQueryOptionsSupported(queryOptions: QueryOptions): Boolean;

    isCommonFolderQuerySupported(query: CommonFolderQuery): Boolean;

    isCommonFileQuerySupported(query: CommonFileQuery): Boolean;

  }

  export class StorageFileQueryResult {
    folder: Object;
    constructor();

    getFilesAsync(startIndex: Number, maxNumberOfItems: Number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(callback: (error: Error, result: Object) => void): void ;

    getItemCountAsync(callback: (error: Error, result: Number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: Number) => void): void ;

    getCurrentQueryOptions(): QueryOptions;

    applyNewQueryOptions(newQueryOptions: QueryOptions): void;

    getMatchingPropertiesWithRanges(file: Object): Object;

    addListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    on(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    off(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    on(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    off(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StorageFolderQueryResult {
    folder: Object;
    constructor();

    getFoldersAsync(startIndex: Number, maxNumberOfItems: Number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getItemCountAsync(callback: (error: Error, result: Number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: Number) => void): void ;

    getCurrentQueryOptions(): QueryOptions;

    applyNewQueryOptions(newQueryOptions: QueryOptions): void;

    addListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    on(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    off(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    on(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    off(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StorageItemQueryResult {
    folder: Object;
    constructor();

    getItemsAsync(startIndex: Number, maxNumberOfItems: Number, callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getItemCountAsync(callback: (error: Error, result: Number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: Number) => void): void ;

    getCurrentQueryOptions(): QueryOptions;

    applyNewQueryOptions(newQueryOptions: QueryOptions): void;

    addListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    on(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    off(type: "ContentsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    on(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    off(type: "OptionsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class SortEntryVector {
    constructor();

    getAt(index: Number): SortEntry;

    getView(): Object;

    indexOf(value: SortEntry, index: Number): Boolean;

    setAt(index: Number, value: SortEntry): void;

    insertAt(index: Number, value: SortEntry): void;

    removeAt(index: Number): void;

    append(value: SortEntry): void;

    removeAtEnd(): void;

    clear(): void;

    getMany();
    replaceAll(items: Array<SortEntry>): void;

    first(): Object;

  }

  export class StorageLibraryContentChangedTriggerDetails {
    folder: Object;
    constructor();

    createModifiedSinceQuery(lastQueryTime: Date): StorageItemQueryResult;

  }

  export class StorageLibraryChangeTrackerTriggerDetails {
    changeTracker: Object;
    folder: Object;
    constructor();

  }

