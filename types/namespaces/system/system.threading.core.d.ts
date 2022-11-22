  export class SignalNotifier {
    constructor();

    static attachToEvent(name: String, handler: Object): SignalNotifier;
    static attachToEvent(name: String, handler: Object, timeout: Number): SignalNotifier;


    static attachToSemaphore(name: String, handler: Object): SignalNotifier;
    static attachToSemaphore(name: String, handler: Object, timeout: Number): SignalNotifier;


    enable(): void;

    terminate(): void;

  }

  export class PreallocatedWorkItem {
    constructor();
    constructor(handler: Object);
    constructor(handler: Object, priority: Number);
    constructor(handler: Object, priority: Number, options: Number);

    runAsync(callback: (error: Error) => void): void ;

  }

