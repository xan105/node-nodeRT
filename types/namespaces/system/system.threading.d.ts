  export enum WorkItemPriority {
    low,
    normal,
    high,
  }

  export enum WorkItemOptions {
    none,
    timeSliced,
  }

  export class ThreadPoolTimer {
    delay: Number;
    period: Number;
    constructor();

    static createPeriodicTimer(handler: Object, period: Number): ThreadPoolTimer;
    static createPeriodicTimer(handler: Object, period: Number, destroyed: Object): ThreadPoolTimer;


    static createTimer(handler: Object, delay: Number): ThreadPoolTimer;
    static createTimer(handler: Object, delay: Number, destroyed: Object): ThreadPoolTimer;


    cancel(): void;

  }

  export class ThreadPool {
    constructor();

    static runAsync(handler: Object, callback: (error: Error) => void): void ;
    static runAsync(handler: Object, priority: WorkItemPriority, callback: (error: Error) => void): void ;
    static runAsync(handler: Object, priority: WorkItemPriority, options: WorkItemOptions, callback: (error: Error) => void): void ;


  }

export * as core from "./system.threading.core.js";