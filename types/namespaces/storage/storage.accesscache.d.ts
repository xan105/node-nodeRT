  export class AccessListEntry {
    token: String;
    metadata: String;
    constructor();
  }

  export enum AccessCacheOptions {
    none,
    disallowUserInput,
    fastLocationsOnly,
    useReadOnlyCachedCopy,
    suppressAccessTimeUpdate,
  }

  export enum RecentStorageItemVisibility {
    appOnly,
    appAndSystem,
  }

  export class AccessListEntryView {
    constructor();

    getAt(index: Number): AccessListEntry;

    indexOf(value: AccessListEntry, index: Number): Boolean;

    getMany();
    first(): Object;

  }

  export class IStorageItemAccessList {
    entries: AccessListEntryView;
    maximumItemsAllowed: Number;
    constructor();

    getItemAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getItemAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getFileAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getFolderAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    add(file: Object): String;
    add(file: Object, metadata: String): String;

    addOrReplace(token: String, file: Object): void;
    addOrReplace(token: String, file: Object, metadata: String): void;

    remove(token: String): void;

    containsItem(token: String): Boolean;

    clear(): void;

    checkAccess(file: Object): Boolean;

  }

  export class StorageItemMostRecentlyUsedList {
    entries: AccessListEntryView;
    maximumItemsAllowed: Number;
    constructor();

    getItemAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getItemAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getFileAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getFolderAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    add(file: Object): String;
    add(file: Object, metadata: String): String;
    add(file: Object, metadata: String, visibility: RecentStorageItemVisibility): String;

    addOrReplace(token: String, file: Object): void;
    addOrReplace(token: String, file: Object, metadata: String): void;
    addOrReplace(token: String, file: Object, metadata: String, visibility: RecentStorageItemVisibility): void;

    remove(token: String): void;

    containsItem(token: String): Boolean;

    clear(): void;

    checkAccess(file: Object): Boolean;

    addListener(type: "ItemRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemRemoved", listener: (ev: Event) => void): void ;
    on(type: "ItemRemoved", listener: (ev: Event) => void): void ;
    off(type: "ItemRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ItemRemovedEventArgs {
    removedEntry: AccessListEntry;
    constructor();

  }

  export class StorageItemAccessList {
    entries: AccessListEntryView;
    maximumItemsAllowed: Number;
    constructor();

    getItemAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getItemAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getFileAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(token: String, callback: (error: Error, result: Object) => void): void ;
    getFolderAsync(token: String, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    add(file: Object): String;
    add(file: Object, metadata: String): String;

    addOrReplace(token: String, file: Object): void;
    addOrReplace(token: String, file: Object, metadata: String): void;

    remove(token: String): void;

    containsItem(token: String): Boolean;

    clear(): void;

    checkAccess(file: Object): Boolean;

  }

  export class StorageApplicationPermissions {
    static futureAccessList: StorageItemAccessList;
    static mostRecentlyUsedList: StorageItemMostRecentlyUsedList;
    constructor();

  }

