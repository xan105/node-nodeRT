  export class DualSimTileContract {
    constructor();
  }

  export class IToastNotificationManagerStatics3 {
    constructor();

    createToastNotifierForSecondaryTile(tileId: string): Object;

  }

  export class DualSimTile {
    displayName: string;
    isPinnedToStart: boolean;
    constructor();

    static updateDisplayNameForSim1Async(name: string, callback: (error: Error, result: boolean) => void): void ;


    static getTileForSim2(): DualSimTile;


    static createTileUpdaterForSim1(): Object;


    static createTileUpdaterForSim2(): Object;


    static createBadgeUpdaterForSim1(): Object;


    static createBadgeUpdaterForSim2(): Object;


    static createToastNotifierForSim1(): Object;


    static createToastNotifierForSim2(): Object;


    createAsync(callback: (error: Error, result: boolean) => void): void ;

    updateAsync(callback: (error: Error, result: boolean) => void): void ;

    deleteAsync(callback: (error: Error, result: boolean) => void): void ;

  }

