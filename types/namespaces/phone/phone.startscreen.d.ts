  export class DualSimTileContract {
    constructor();
  }

  export class DualSimTile {
    displayName: String;
    isPinnedToStart: Boolean;
    constructor();

    static updateDisplayNameForSim1Async(name: String, callback: (error: Error, result: Boolean) => void): void ;


    static getTileForSim2(): DualSimTile;


    static createTileUpdaterForSim1(): Object;


    static createTileUpdaterForSim2(): Object;


    static createBadgeUpdaterForSim1(): Object;


    static createBadgeUpdaterForSim2(): Object;


    static createToastNotifierForSim1(): Object;


    static createToastNotifierForSim2(): Object;


    createAsync(callback: (error: Error, result: Boolean) => void): void ;

    updateAsync(callback: (error: Error, result: Boolean) => void): void ;

    deleteAsync(callback: (error: Error, result: Boolean) => void): void ;

  }

  export class IToastNotificationManagerStatics3 {
    constructor();

    createToastNotifierForSecondaryTile(tileId: String): Object;

  }

