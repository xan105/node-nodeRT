  export class SignalNotifier {
    constructor();

    static attachToEvent(name: string, handler: Object): SignalNotifier;
    static attachToEvent(name: string, handler: Object, timeout: number): SignalNotifier;


    static attachToSemaphore(name: string, handler: Object): SignalNotifier;
    static attachToSemaphore(name: string, handler: Object, timeout: number): SignalNotifier;


    enable(): void;

    terminate(): void;

  }

  export class PreallocatedWorkItem {
    constructor();
    constructor(handler: Object);
    constructor(handler: Object, priority: number);
    constructor(handler: Object, priority: number, options: number);

    runAsync(callback: (error: Error) => void): void ;

  }

