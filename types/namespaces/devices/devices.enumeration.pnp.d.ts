  export enum PnpObjectType {
    unknown,
    deviceInterface,
    deviceContainer,
    device,
    deviceInterfaceClass,
    associationEndpoint,
    associationEndpointContainer,
    associationEndpointService,
  }

  export class PnpObjectUpdate {
    id: String;
    properties: Object;
    type: PnpObjectType;
    constructor();

  }

  export class PnpObjectCollection {
    constructor();

    getAt(index: Number): PnpObject;

    indexOf(value: PnpObject, index: Number): Boolean;

    getMany();
    first(): Object;

  }

  export class PnpObjectWatcher {
    status: Number;
    constructor();

    start(): void;

    stop(): void;

    addListener(type: "Added", listener: (ev: Event) => void): void ;
    removeListener(type: "Added", listener: (ev: Event) => void): void ;
    on(type: "Added", listener: (ev: Event) => void): void ;
    off(type: "Added", listener: (ev: Event) => void): void ;
    
    addListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    removeListener(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    on(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    off(type: "EnumerationCompleted", listener: (ev: Event) => void): void ;
    
    addListener(type: "Removed", listener: (ev: Event) => void): void ;
    removeListener(type: "Removed", listener: (ev: Event) => void): void ;
    on(type: "Removed", listener: (ev: Event) => void): void ;
    off(type: "Removed", listener: (ev: Event) => void): void ;
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: "Updated", listener: (ev: Event) => void): void ;
    removeListener(type: "Updated", listener: (ev: Event) => void): void ;
    on(type: "Updated", listener: (ev: Event) => void): void ;
    off(type: "Updated", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class PnpObject {
    id: String;
    properties: Object;
    type: PnpObjectType;
    constructor();

    static createFromIdAsync(type: PnpObjectType, id: String, requestedProperties: Object, callback: (error: Error, result: PnpObject) => void): void ;


    static findAllAsync(type: PnpObjectType, requestedProperties: Object, callback: (error: Error, result: PnpObjectCollection) => void): void ;
    static findAllAsync(type: PnpObjectType, requestedProperties: Object, aqsFilter: String, callback: (error: Error, result: PnpObjectCollection) => void): void ;


    static createWatcher(type: PnpObjectType, requestedProperties: Object): PnpObjectWatcher;
    static createWatcher(type: PnpObjectType, requestedProperties: Object, aqsFilter: String): PnpObjectWatcher;


    update(updateInfo: PnpObjectUpdate): void;

  }

