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
    weight: number;
    priority: number;
    port: number;
    hostName: Object;
    dnssdServiceInstanceName: string;
    textAttributes: Object;
    constructor();
    constructor(dnssdServiceInstanceName: string, hostName: Object, port: number);

    registerStreamSocketListenerAsync(socket: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;
    registerStreamSocketListenerAsync(socket: Object, adapter: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;

    registerDatagramSocketAsync(socket: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;
    registerDatagramSocketAsync(socket: Object, adapter: Object, callback: (error: Error, result: DnssdRegistrationResult) => void): void ;

    toString(): string;

  }

  export class DnssdRegistrationResult {
    hasInstanceNameChanged: boolean;
    iPAddress: Object;
    status: DnssdRegistrationStatus;
    constructor();

    toString(): string;

  }

  export class DnssdServiceInstanceCollection {
    constructor();

    getAt(index: number): DnssdServiceInstance;

    indexOf(value: DnssdServiceInstance, index: number): boolean;

    getMany();
    first(): Object;

  }

