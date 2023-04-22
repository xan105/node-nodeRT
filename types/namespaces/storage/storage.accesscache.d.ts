  export class AccessListEntry {
    token: string;
    metadata: string;
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

    getAt(index: number): AccessListEntry;

    indexOf(value: AccessListEntry, index: number): boolean;

    getMany();
    first(): Object;

  }

  export class IStorageItemAccessList {
    entries: AccessListEntryView;
    maximumItemsAllowed: number;
    constructor();

    getItemAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getItemAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getFileAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getFolderAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    add(file: Object): string;
    add(file: Object, metadata: string): string;

    addOrReplace(token: string, file: Object): void;
    addOrReplace(token: string, file: Object, metadata: string): void;

    remove(token: string): void;

    containsItem(token: string): boolean;

    clear(): void;

    checkAccess(file: Object): boolean;

  }

  export class StorageItemMostRecentlyUsedList {
    entries: AccessListEntryView;
    maximumItemsAllowed: number;
    constructor();

    getItemAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getItemAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getFileAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getFolderAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    add(file: Object): string;
    add(file: Object, metadata: string): string;
    add(file: Object, metadata: string, visibility: RecentStorageItemVisibility): string;

    addOrReplace(token: string, file: Object): void;
    addOrReplace(token: string, file: Object, metadata: string): void;
    addOrReplace(token: string, file: Object, metadata: string, visibility: RecentStorageItemVisibility): void;

    remove(token: string): void;

    containsItem(token: string): boolean;

    clear(): void;

    checkAccess(file: Object): boolean;

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
    maximumItemsAllowed: number;
    constructor();

    getItemAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getItemAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFileAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getFileAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    getFolderAsync(token: string, callback: (error: Error, result: Object) => void): void ;
    getFolderAsync(token: string, options: AccessCacheOptions, callback: (error: Error, result: Object) => void): void ;

    add(file: Object): string;
    add(file: Object, metadata: string): string;

    addOrReplace(token: string, file: Object): void;
    addOrReplace(token: string, file: Object, metadata: string): void;

    remove(token: string): void;

    containsItem(token: string): boolean;

    clear(): void;

    checkAccess(file: Object): boolean;

  }

  export class StorageApplicationPermissions {
    static futureAccessList: StorageItemAccessList;
    static mostRecentlyUsedList: StorageItemMostRecentlyUsedList;
    constructor();

  }

