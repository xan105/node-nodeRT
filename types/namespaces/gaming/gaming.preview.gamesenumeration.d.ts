  export enum GameListCategory {
    candidate,
    confirmedBySystem,
    confirmedByUser,
  }

  export enum GameListEntryLaunchableState {
    notLaunchable,
    byLastRunningFullPath,
    byUserProvidedPath,
    byTile,
  }

  export class IGameListEntry {
    category: GameListCategory;
    displayInfo: Object;
    properties: Object;
    constructor();

    launchAsync(callback: (error: Error, result: Boolean) => void): void ;

    setCategoryAsync(value: GameListCategory, callback: (error: Error) => void): void ;

  }

  export class GameModeConfiguration {
    percentGpuTimeAllocatedToGame: Number;
    percentGpuMemoryAllocatedToSystemCompositor: Number;
    percentGpuMemoryAllocatedToGame: Number;
    maxCpuCount: Number;
    isEnabled: Boolean;
    cpuExclusivityMaskLow: Number;
    cpuExclusivityMaskHigh: Number;
    affinitizeToExclusiveCpus: Boolean;
    relatedProcessNames: Object;
    constructor();

    saveAsync(callback: (error: Error) => void): void ;

  }

  export class GameListEntry {
    category: GameListCategory;
    displayInfo: Object;
    properties: Object;
    gameModeConfiguration: GameModeConfiguration;
    launchParameters: String;
    launchableState: GameListEntryLaunchableState;
    launcherExecutable: Object;
    titleId: String;
    constructor();

    launchAsync(callback: (error: Error, result: Boolean) => void): void ;

    setCategoryAsync(value: GameListCategory, callback: (error: Error) => void): void ;

    setLauncherExecutableFileAsync(executableFile: Object, callback: (error: Error) => void): void ;
    setLauncherExecutableFileAsync(executableFile: Object, launchParams: String, callback: (error: Error) => void): void ;

    setTitleIdAsync(id: String, callback: (error: Error) => void): void ;

  }

  export class GameModeUserConfiguration {
    gamingRelatedProcessNames: Object;
    constructor();

    static getDefault(): GameModeUserConfiguration;


    saveAsync(callback: (error: Error) => void): void ;

  }

  export class GameList {
    constructor();

    static mergeEntriesAsync(left: GameListEntry, right: GameListEntry, callback: (error: Error, result: GameListEntry) => void): void ;


    static unmergeEntryAsync(mergedEntry: GameListEntry, callback: (error: Error, result: Object) => void): void ;


    static findAllAsync(callback: (error: Error, result: Object) => void): void ;
    static findAllAsync(packageFamilyName: String, callback: (error: Error, result: Object) => void): void ;


    addListener(type: "GameAdded", listener: (ev: Event) => void): void ;
    removeListener(type: "GameAdded", listener: (ev: Event) => void): void ;
    on(type: "GameAdded", listener: (ev: Event) => void): void ;
    off(type: "GameAdded", listener: (ev: Event) => void): void ;
    
    addListener(type: "GameRemoved", listener: (ev: Event) => void): void ;
    removeListener(type: "GameRemoved", listener: (ev: Event) => void): void ;
    on(type: "GameRemoved", listener: (ev: Event) => void): void ;
    off(type: "GameRemoved", listener: (ev: Event) => void): void ;
    
    addListener(type: "GameUpdated", listener: (ev: Event) => void): void ;
    removeListener(type: "GameUpdated", listener: (ev: Event) => void): void ;
    on(type: "GameUpdated", listener: (ev: Event) => void): void ;
    off(type: "GameUpdated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

