  export enum DnssdRegistrationStatus {
    success,
    invalidServiceName,
    serverError,
    securityError,
  }

  export enum DnssdServiceWatcherStatus {
    created,
    started,
    enumerationCompleted,
    stopping,
    stopped,
    aborted,
  }

  export class DnssdServiceWatcher {
    status: DnssdServiceWatcherStatus;
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
    
    addListener(type: "Stopped", listener: (ev: Event) => void): void ;
    removeListener(type: "Stopped", listener: (ev: Event) => void): void ;
    on(type: "Stopped", listener: (ev: Event) => void): void ;
    off(type: "Stopped", listener: (ev: Event) => void): void ;
    
    addListener(type: string, listener: (ev: Event) => void): void ;
    removeListener(type: string, listener: (ev: Event) => void): void ;
    on(type: string, listener: (ev: Event) => void): void ;
    off(type: string, listener: (ev: Event) => void): void ;
    

  }

  export class DnssdServiceInstance {
    weight: Number;
    priority: Number;
    port: Number;
    hostName: Object;
    dnssdServiceInstanceName: String;
    textAttributes: Object;
    constructor();
    constructor(dnssdServiceInstanceName: String, hostName: Object, port: Number);

    registerStreamSocketListenerAsync(socket: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;
    registerStreamSocketListenerAsync(socket: Object, adapter: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;

    registerDatagramSocketAsync(socket: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;
    registerDatagramSocketAsync(socket: Object, adapter: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;

    toString(): String;

  }

  export class DnssdRegistrationResult {
    hasInstanceNameChanged: Boolean;
    iPAddress: Object;
    status: DnssdRegistrationStatus;
    constructor();

    toString(): String;

  }

  export class DnssdServiceInstanceCollection {
    constructor();

    getAt(index: Number): DnssdServiceInstance;

    indexOf(value: DnssdServiceInstance, index: Number): Boolean;

    getMany();
    first(): Object;

  }

