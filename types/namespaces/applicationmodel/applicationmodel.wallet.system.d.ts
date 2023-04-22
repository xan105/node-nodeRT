  export enum WalletItemAppAssociation {
    none,
    appInstalled,
    appNotInstalled,
  }

  export class WalletItemSystemStore {
    constructor();

    getItemsAsync(callback: (error: Error, result: Object) => void): void ;

    deleteAsync(item: Object, callback: (error: Error) => void): void ;

    importItemAsync(stream: Object, callback: (error: Error, result: Object) => void): void ;

    launchAppForItemAsync(item: Object, callback: (error: Error, result: boolean) => void): void ;

    getAppStatusForItem(item: Object): WalletItemAppAssociation;

    addListener(type: "ItemsChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "ItemsChanged", listener: (ev: Event) => void): void ;
    on(type: "ItemsChanged", listener: (ev: Event) => void): void ;
    off(type: "ItemsChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class WalletManagerSystem {
    constructor();

    static requestStoreAsync(callback: (error: Error, result: WalletItemSystemStore) => void): void ;


  }

