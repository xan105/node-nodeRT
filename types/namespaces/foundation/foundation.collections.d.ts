  export enum CollectionChange {
    reset,
    itemInserted,
    itemRemoved,
    itemChanged,
  }

  export class IVectorChangedEventArgs {
    collectionChange: CollectionChange;
    index: number;
    constructor();

  }

  export class IPropertySet {
    constructor();

  }

  export class PropertySet {
    constructor();

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

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

    lookup(key: string): Object;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: Object): boolean;

    remove(key: string): void;

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

    lookup(key: string): string;

    hasKey(key: string): boolean;

    getView(): Object;

    insert(key: string, value: string): boolean;

    remove(key: string): void;

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

