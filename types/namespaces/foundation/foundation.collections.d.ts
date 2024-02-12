  export enum CollectionChange {
    reset,
    itemInserted,
    itemRemoved,
    itemChanged,
  }

  export class IPropertySet {
    constructor();

  }

  export class IVectorChangedEventArgs {
    collectionChange: CollectionChange;
    index: Number;
    constructor();

  }

  export class PropertySet {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    addListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    on(type: "MapChanged", listener: (ev: Event) => void): void ;
    off(type: "MapChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class StringMap {
    constructor();

    lookup(key: String): String;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: String): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    addListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    on(type: "MapChanged", listener: (ev: Event) => void): void ;
    off(type: "MapChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class ValueSet {
    constructor();

    lookup(key: String): Object;

    hasKey(key: String): Boolean;

    getView(): Object;

    insert(key: String, value: Object): Boolean;

    remove(key: String): void;

    clear(): void;

    first(): Object;

    addListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    removeListener(type: "MapChanged", listener: (ev: Event) => void): void ;
    on(type: "MapChanged", listener: (ev: Event) => void): void ;
    off(type: "MapChanged", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

