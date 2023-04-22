  export class TextSegment {
    startPosition: number;
    length: number;
    constructor();
  }

  export class SortEntry {
    propertyName: string;
    ascendingOrder: boolean;
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
    revision: number;
    constructor();

    static getIndexer(indexName: string): ContentIndexer;
    static getIndexer(): ContentIndexer;


    addAsync(indexableContent: IIndexableContent, callback: (error: Error) => void): void ;

    updateAsync(indexableContent: IIndexableContent, callback: (error: Error) => void): void ;

    deleteAsync(contentId: string, callback: (error: Error) => void): void ;

    deleteMultipleAsync(contentIds: Object, callback: (error: Error) => void): void ;

    deleteAllAsync(callback: (error: Error) => void): void ;

    retrievePropertiesAsync(contentId: string, propertiesToRetrieve: Object, callback: (error: Error, result: Object) => void): void ;

    createQuery(searchFilter: string, propertiesToRetrieve: Object, sortOrder: Object, searchFilterLanguage: string): ContentIndexerQuery;
    createQuery(searchFilter: string, propertiesToRetrieve: Object, sortOrder: Object): ContentIndexerQuery;
    createQuery(searchFilter: string, propertiesToRetrieve: Object): ContentIndexerQuery;

  }

  export class IIndexableContent {
    id: string;
    properties: Object;
    stream: Object;
    streamContentType: string;
    constructor();

  }

  export class ValueAndLanguage {
    value: Object;
    language: string;
    constructor();

  }

  export class ContentIndexerQuery {
    queryFolder: Object;
    constructor();

    getCountAsync(callback: (error: Error, result: number) => void): void ;

    getPropertiesAsync(callback: (error: Error, result: Object) => void): void ;
    getPropertiesAsync(startIndex: number, maxItems: number, callback: (error: Error, result: Object) => void): void ;

    getAsync(callback: (error: Error, result: Object) => void): void ;
    getAsync(startIndex: number, maxItems: number, callback: (error: Error, result: Object) => void): void ;

  }

  export class IndexableContent {
    streamContentType: string;
    stream: Object;
    id: string;
    properties: Object;
    constructor();

  }

  export class QueryOptions {
    userSearchFilter: string;
    language: string;
    indexerOption: IndexerOption;
    folderDepth: FolderDepth;
    applicationSearchFilter: string;
    dateStackOption: DateStackOption;
    fileTypeFilter: Object;
    groupPropertyName: string;
    sortOrder: Object;
    storageProviderIdFilter: Object;
    constructor();
    constructor(query: CommonFileQuery, fileTypeFilter: Object);
    constructor(query: CommonFolderQuery);

    saveToString(): string;

    loadFromString(value: string): void;

    setThumbnailPrefetch(mode: number, requestedSize: number, options: number): void;

    setPropertyPrefetch(options: number, propertiesToRetrieve: Object): void;

  }

  export class IStorageQueryResultBase {
    folder: Object;
    constructor();

    getItemCountAsync(callback: (error: Error, result: number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: number) => void): void ;

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

    getFilesAsync(query: CommonFileQuery, startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(query: CommonFileQuery, callback: (error: Error, result: Object) => void): void ;

    getFoldersAsync(query: CommonFolderQuery, startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(query: CommonFolderQuery, callback: (error: Error, result: Object) => void): void ;

    getItemsAsync(startIndex: number, maxItemsToRetrieve: number, callback: (error: Error, result: Object) => void): void ;

    createFileQuery(): StorageFileQueryResult;
    createFileQuery(query: CommonFileQuery): StorageFileQueryResult;

    createFileQueryWithOptions(queryOptions: QueryOptions): StorageFileQueryResult;

    createFolderQuery(): StorageFolderQueryResult;
    createFolderQuery(query: CommonFolderQuery): StorageFolderQueryResult;

    createFolderQueryWithOptions(queryOptions: QueryOptions): StorageFolderQueryResult;

    createItemQuery(): StorageItemQueryResult;

    createItemQueryWithOptions(queryOptions: QueryOptions): StorageItemQueryResult;

    areQueryOptionsSupported(queryOptions: QueryOptions): boolean;

    isCommonFolderQuerySupported(query: CommonFolderQuery): boolean;

    isCommonFileQuerySupported(query: CommonFileQuery): boolean;

  }

  export class StorageFileQueryResult {
    folder: Object;
    constructor();

    getFilesAsync(startIndex: number, maxNumberOfItems: number, callback: (error: Error, result: Object) => void): void ;
    getFilesAsync(callback: (error: Error, result: Object) => void): void ;

    getItemCountAsync(callback: (error: Error, result: number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: number) => void): void ;

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

    getFoldersAsync(startIndex: number, maxNumberOfItems: number, callback: (error: Error, result: Object) => void): void ;
    getFoldersAsync(callback: (error: Error, result: Object) => void): void ;

    getItemCountAsync(callback: (error: Error, result: number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: number) => void): void ;

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

    getItemsAsync(startIndex: number, maxNumberOfItems: number, callback: (error: Error, result: Object) => void): void ;
    getItemsAsync(callback: (error: Error, result: Object) => void): void ;

    getItemCountAsync(callback: (error: Error, result: number) => void): void ;

    findStartIndexAsync(value: Object, callback: (error: Error, result: number) => void): void ;

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

    getAt(index: number): SortEntry;

    getView(): Object;

    indexOf(value: SortEntry, index: number): boolean;

    setAt(index: number, value: SortEntry): void;

    insertAt(index: number, value: SortEntry): void;

    removeAt(index: number): void;

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

